# Vessel Detection

In this notebook we will learn how to apply adaptive thresholding to SENTINEL1_GRD data within OpenEO Platform. We will then take a look at our results against vessel location data from the Maritime Traffic Agency over the Adriatic. We will be using the the openeo-python-client to prepare our process graph, and a Plotly Dash dashboard to interact with our results.

### Recap

We've been through a number of iterations to arrive at this process graph.

1. Recieved an initial implementation from Planetek, which we packaged and released as a custom function, "vessel_detection". 
2. Porting to Xarray. This resulted in a single function called "adaptive_thresholding", that removed the dependency to the ellipsoid corrected SENTINEL1_GRD imagery.
3. Porting to existing OpenEO processes. This addresses the feedback from the previous review, i.e. the implementation should be reproducable for this use case.

These iteration steps roughly describe the process of how we can go about onboarding new processes into the OpenEO Platform.

Initial Implementation > Containerise > Reduce Dependencies > Xarray > OpenEO

### Adaptive Thresholding in Xarray

After investigating the code initially provided by Planetek, we arrived at this xarray implementation of adaptive thresholding.

```python
WINDOW_LAT_SIZE = 30
WINDOW_LON_SIZE = 30
THRESHOLD_FACT = 4
out = xr.ones_like(data)
rolling_mean = data.rolling(
    longitude=WINDOW_LAT_SIZE, latitude=WINDOW_LON_SIZE, center=True
).mean()
thresholded_image = data > rolling_mean * THRESHOLD_FACT
raster = out.where(thresholded_image == True, other=0)
```

We are going to port this into an OpenEO process graph.

### 1. Authenticate


```python
import openeo

backend = "openeo.cloud"
conn = openeo.connect(backend)
conn = conn.authenticate_oidc()
```

### 2. Pre-processing prep

This process graph requires either a sea or land mask to remove the land from our AOI. A seamask has been prepared for this example and is available on github. It was derived using the [Water Bodies](https://land.copernicus.eu/content/corine-land-cover-nomenclature-guidelines/html/) classes from Corine Land Cover.


```python
import folium

# We are going to use the following GeoJson to operate as a sea mask for out process graph.
SEA_MASK = "https://raw.githubusercontent.com/SerRichard/sea_mask/main/sea-mask-4326.json"

fig = folium.Figure(width=600, height=400)
map = folium.Map(location=[44.465488, 12.602316], zoom_start=8)
folium.GeoJson(SEA_MASK).add_to(map)
fig.add_child(map)
```
![SeaMask to be used](./seamask.png)

### 3. Defining a process graph to detect vessels in our AOI.

The spatial_extent we have defined includes, but is not limited to the sea mask that we will be using. We will use both available polarizations from the SENTINEL1_GRD collection, and run this graph on a little over a weeks worth of data.


```python
spatial_extent  = {
          "west": 12.194377989297493,
          "east": 12.758093271633888,
          "south": 44.24420099164355,
          "north": 44.85455845353388
        }

temporal_extent = [
          "2021-10-01",
          "2021-10-09"
        ]

collection      = "SENTINEL1_GRD"
bands           = ["VV","VH"]

s1_datacube = conn.load_collection(
    collection,
    spatial_extent=spatial_extent,
    bands=bands,
    temporal_extent=temporal_extent
)
```

Load the geometries as a vector cube.


```python
sea_mask = s1_datacube.process("load_vector_cube", {"URL": SEA_MASK})
```

Replace the values that lie outside of our polygon with NaN values.


```python
masked_data = s1_datacube.mask_polygon(sea_mask)
```

Apply a window to our datacube, and per pixel, update the pixel's value to be the mean of the window surrounding it.

This would be the equivalent of the `data.rolling()` from the xarray example above.


```python
aggregated_window = masked_data.aggregate_spatial_window(size=[30, 30], reducer="mean")
```

Apply the multiplication of our given value to the result of the spatial window. We multiply to increase the contrast between sea and ship, which makes the detection more reliable.


```python
multiplied = aggregated_window.apply(lambda x: x.multiply(4) )
```

We then compare the pixel values from the previous node, against the values of the data we initially masked. We want to keep any values from the initially masked data, in order to generate a boolean mask, which should reflect our vessels.

I could not find a nice way to express this in the client, without it re-including the first three nodes of the process graph. So I have applied it directly as a process here.


```python
lt_comparison = multiplied.process("apply", {
                    "data": multiplied,
                    "context": masked_data,
                    "process": {
                      "process_graph": {
                        "lt1": {
                          "process_id": "lt",
                          "arguments": {
                            "x": {
                              "from_parameter": "x"
                            },
                            "y": {
                              "from_parameter": "context"
                            }
                          },
                          "result": True
                        }
                      }
                    }
                  }
                )
```

Convert the resulting boolean datacube to a vector cube, and output the result in save result as a GeoJson. This will make the comparison of our results with the Maritime traffic data more straight forward.


```python
output_data = lt_comparison.process("raster_to_vector", {"data": lt_comparison})
```


```python
vessel_detection = output_data.save_result(format="GeoJSON")
```

Create and trigger the job. We can regularly poll the status to ensure it has finished, before moving on to the visualisation of the results.


```python
job_vessel_detection = vessel_detection.create_job(title = "UC2-Vessel-Detection")
job_vessel_detection.start_job()
```


```python
job_vessel_detection.status()
```


```python
job_results = job_vessel_detection.get_results()
```


```python
# Grab the canonical URL for a given job

def canonical_url_from_job(job: openeo.BatchJob):
    """ Helper function to get the canonical URL for a finish batch job. """
    links = [ link for link in job.get_metadata()['links'] if link['rel'] == "canonical" ]
    return links[0]['href'] if len(links) != 0 else None

canon_url = canonical_url_from_job(job_results)
canon_url
```

## Result Visualisation

We will use a small dashboard created with the Plotly Dash library to quickly visualise the results of our processing. We're using this dashboard so we can interface with the PyGeoApi server that hosts the Maritime Traffic data.

PyGeoApi Data: https://features.dev.services.eodc.eu/collections/adriatic_vessels


```python
from eodc.visualisation.vessel_detection.app import app
```


```python
app.run()
```
#### Plotly Dashboard for results viewing
![Plotly Dashboard](./dashboard.png)

# Crop Conditions


::: warning Warning
To use this service, you have to be registered at openEO platform. If you are not yet registered, you can apply [here](https://openeo.cloud/#plans).
:::

To enable higher time-series resolution vegetation indices (such as NDVI, LAI, FAPAR, FCOVER)  than the Sentinel-2 time series, we have implemented the computation based on the sen2like processor which enables users to process these indices on-demand. Furthermore, through the load_stac process any sen2like user result can be reloaded an indices may be computed at a later stage. 


## 1. sen2like

You may also directly use the notebook that we provide [here](https://github.com/eodcgmbh/openeo-examples/blob/master/UCs/UC15-sen2like.ipynb)

To start the sen2like openEO processing, we need to connect to the EODC openEO backend. 

```python
import openeo
from openeo.rest.datacube import THIS
from openeo.processes import *

conn = openeo.connect("openeo.cloud").authenticate_oidc()
```

We select the "SENTINEL2_L1C" collection, specify the spatial and temporal extent and the bands to compute. The sen2like processing automatically includes the Landsat 8 & 9 data into the computation, so we do not need to call it explicitely. The processing also automatically includes other additional data, such as the digital elevation model and data from the Copernicus Atmosphere Monitoring Service.

```python
spatial_extent = {"west": 15.2, "east": 17.6, "south": 47.9, "north": 49.5}
temporal_extent = ["2023-06-01", "2023-09-30"]

collection      = 'SENTINEL2_L1C'
bands = ["B02", "B03", "B04", "B05", "B06", "B07", "B08", "B8A", "B11", "B12"]

S2 = conn.load_collection(
    collection, 
    spatial_extent=spatial_extent, 
    temporal_extent=temporal_extent, 
    bands=bands)
```

When applying the sen2like processing, we specify the "L2F" product and we set the "export_original_files" parameter to True.

The cloud_cover can be between 1 and 100. The lower the value, the lower the cloud cover for the files - files with higher cloud cover are ignored.

```python
sen2like = S2.process('sen2like', {
    'data': THIS,
    'target_product': 'L2F', 
    'export_original_files': True,
    'cloud_cover': 50})
```

We select a subset of the data to create an RGB.


```python
sen2_small = sen2like.filter_temporal(["2023-06-01", "2023-06-30"]).filter_bbox({"west": 16.6, "east": 16.7, "south": 47.9, "north": 48})

rgb = sen2_small.filter_bands(bands=["B02", "B03", "B04"])
```
We save the data into a NetCDF. Note, that we create two kinds of outputs: The sen2like original .SAFE files for the extent of four UTM tiles and the NetCDF for a smaller sector.


```python
rgb_nc = rgb.save_result(format="NetCDF")

rgb_nc
job = rgb_nc.create_job().start_job()
```

## 2. Parameter computation


Once the job status is "finished", from section 1 we can compute the indices from the sen2like job.
You may also directly use the notebook that we provide [here](https://github.com/eodcgmbh/openeo-examples/blob/master/UCs/UC15-indices.ipynb)


We reuse the results in the "UC15-indices.ipynb", so we need to know the job id from this notebook. For this run it is "eodc-5d4c1746-33b2-42fb-914c-d36987747ae6".

First, we create the connection to the openEO backend.

```python
import openeo
from openeo.rest.datacube import THIS

conn = openeo.connect("openeo.cloud").authenticate_oidc()
```



We insert the url with the latest "job_id" into the "load_stac" process to load the results.

The spatio-temporal extent can be the same as in the previous job. We select the bands "B03", "B04", "B05", "B06", "B07", "B8A", "B11", "B12", as these are required in the computation for the LAI.



```python
sen2like_job_id = "eodc-5d4c1746-33b2-42fb-914c-d36987747ae6"

spatial_extent = {"west": 16.6, "east": 16.7, "south": 47.9, "north": 48}
temporal_extent = ["2023-06-01", "2023-06-30"]
bands = ["B03", "B04", "B05", "B06", "B07", "B8A", "B11", "B12"]

data = conn.load_stac(
    url = f"https://openeo.eodc.eu/openeo/1.1.0/jobs/{sen2like_job_id}/results",
    spatial_extent=spatial_extent, 
    temporal_extent=temporal_extent, 
    bands=bands)
```

The Leaf Area Index (LAI) process is based on the computation specified at https://custom-scripts.sentinel-hub.com/sentinel-2/lai/. To compute the LAI, the bands "B03", "B04", "B05", "B06", "B07", "B8A", "B11", "B12" need to be available, as well as the "viewZenithMean", "viewAzimuthMean", "sunZenithAngles", "sunAzimuthAngles". The sen2like output data includes these angles automatically. Afterwards We create and start the openEO job.

```python
lai = data.process('lai', {'data': data})

lai_nc = lai.save_result(format="NetCDF", options={"tile_grid":"time-series"})

job = lai_nc.create_job().start_job()

```

Once the job is finished the results can be downloaded an further used locally. It is also possible to further extract the time series of the computed index. Please refer to the jupyter notebook mentioned above for details.

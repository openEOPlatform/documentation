# Analysis-Ready Data for SAR (Sentinel-1)

Data from synthetic aperture radar sensors requires significant preprocessing to be calibrated and normalized for terrain.
This is referred to as backscatter computation, and supported by
- the [`sar_backscatter` process](https://processes.openeo.org/draft/#sar_backscatter) 
- and its CARD4L compliant variant, the
[`ard_normalized_radar_backscatter` process](https://processes.openeo.org/draft/#ard_normalized_radar_backscatter)

The user should first load a datacube containing raw SAR data, such as "Sentinel-1 GRD" 
and apply one of these processes to it.

::: tip Python example
The openEO Python client library provides the
[`DataCube.sar_backscatter`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.sar_backscatter)
and [`DataCube.ard_normalized_radar_backscatter`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.ard_normalized_radar_backscatter)
methods for this.
:::

These processes are tightly coupled to
metadata from specific sensors, so it is not possible to apply other processes to the datacube first,
with the exception of specifying filters in space and time.

This section shows a few working examples for these processes.

## EODC back-end

EODC supports sar_backscatter, based on the [Sentinel-1 toolbox](https://sentinel.esa.int/web/sentinel/toolboxes/sentinel-1).

## Terrascope back-end


### Sentinel Hub based collection

When working with the Sentinel Hub based `SENTINEL1_GRD` collection, both SAR backscatter processes can be used.
The underlying implementation is
provided by [Sentinel Hub](https://docs.sentinel-hub.com/api/latest/data/sentinel-1-grd/#processing-options), and offers full
CARD4L compliant processing options.

This is an example of [`DataCube.ard_normalized_radar_backscatter`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.ard_normalized_radar_backscatter) in Python:

```python
s1grd = connection.load_collection(
    'SENTINEL1_GRD',
    spatial_extent={'west':2.59003,'east':2.8949,'south':51.069,'north':51.2206},
    temporal_extent=['2019-10-10','2019-10-10'],
    bands=['VH','VV']
)

normalized = s1grd.ard_normalized_radar_backscatter()

job = normalized.execute_batch()
job.get_results().download_files("output")
```


### Other GRD collections

When working with other GRD data, an implementation based on Orfeo Toolbox is used:

- [Orfeo docs](https://www.orfeo-toolbox.org/CookBook/Applications/app_SARCalibration.html)
- [Implementation](https://github.com/Open-EO/openeo-geopyspark-driver/blob/master/openeogeotrellis/collections/s1backscatter_orfeo.py)

The Orfeo implementation currently only supports sigma0 computation, and is not CARD4L compliant.

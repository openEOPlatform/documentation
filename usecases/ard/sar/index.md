# Analysis-Ready Data for SAR (Sentinel-1)

Data from synthetic aperture radar sensors requires significant preprocessing to be calibrated and normalized for terrain.
This is referred to as backscatter computation, and supported by
[sar_backscatter](https://processes.openeo.org/draft/#sar_backscatter) and the CARD4L compliant variant
[ard_normalized_radar_backscatter](https://processes.openeo.org/draft/#ard_normalized_radar_backscatter)

The user should load a datacube containing raw SAR data, such as Sentinel-1 GRD. On the resulting datacube, the
`openeo.rest.datacube.DataCube.sar_backscatter` method can be invoked. The CEOS CARD4L variant is:
`openeo.rest.datacube.DataCube.ard_normalized_radar_backscatter`. These processes are tightly coupled to
metadata from specific sensors, so it is not possible to apply other processes to the datacube first,
with the exception of specifying filters in space and time.


This section shows a few working examples for these processes.

## EODC backend


EODC supports sar_backscatter, based on the [Sentinel-1 toolbox](https://sentinel.esa.int/web/sentinel/toolboxes/sentinel-1).

## Terrascope backend


When working with the Sentinelhub SENTINEL1_GRD collection, both sar processes can be used. The underlying implementation is
provided by [Sentinelhub](https://docs.sentinel-hub.com/api/latest/data/sentinel-1-grd/#processing-options), and offers full
CARD4L compliant processing options.

This is an example of `openeo.rest.datacube.DataCube.ard_normalized_radar_backscatter`:

    s1grd = (connection.load_collection('SENTINEL1_GRD', bands=['VH', 'VV'])
     .filter_bbox(west=2.59003, east=2.8949, north=51.2206, south=51.069, crs="EPSG:4326")
     .filter_temporal(extent=["2019-10-10","2019-10-10"]))

    job = s1grd.ard_normalized_radar_backscatter().execute_batch()

    for asset in job.get_results().get_assets():
        asset.download()

When working with other GRD data, an implementation based on Orfeo Toolbox is used:

- [Orfeo docs](https://www.orfeo-toolbox.org/CookBook/Applications/app_SARCalibration.html)
- [Implementation](https://github.com/Open-EO/openeo-geopyspark-driver/blob/master/openeogeotrellis/collections/s1backscatter_orfeo.py)

The Orfeo implementation currently only supports sigma0 computation, and is not CARD4L compliant.

# Analysis-Ready Data for SAR (Sentinel-1)

## Backscatter computation

Data from synthetic aperture radar (SAR) sensors requires significant preprocessing to be calibrated and normalized for terrain.
This is referred to as backscatter computation, and provider in openEO Platform by
- the [`sar_backscatter` process](../../../processes/index.md#sar_backscatter) 
- and its CARD4L compliant variant, the
[`ard_normalized_radar_backscatter` process](../../../processes/index.md#ard_normalized_radar_backscatter)

To perform a backscatter computation, the user has to load an
[raw SAR data](/data-collections/?q=GRD) with the `load_collection` process
and immediately apply ône of the processes to it.

<CodeSwitcher>
<template v-slot:py>

```python
# Load the data. You have to specify a collection ID, spatial_extent and temporal_extent
datacube = connection.load_collection(...)
# Either apply
datacube = datacube.sar_backscatter()
# or 
datacube = datacube.ard_normalized_radar_backscatter()
```

For more details see the Python client documentation for the respective methods:
- [`DataCube.sar_backscatter`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.sar_backscatter)
- [`DataCube.ard_normalized_radar_backscatter`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.ard_normalized_radar_backscatter)

</template>

<template v-slot:js>

```js
// Load the data. You have to specify a collection ID, spatial_extent and temporal_extent
var builder = await connection.buildProcess();
var datacube = builder.load_collection(...);
// Either apply
datacube = builder.sar_backscatter(datacube);
// or 
datacube = builder.ard_normalized_radar_backscatter(datacube);
```

</template>
</CodeSwitcher>

::: warning
These correction algorithms are typically tightly coupled with the raw data,
so it is important they are applied immediately after the `load_collection` process.
It is recommended to avoid any other operations in between.
:::

## Reference implementations

This section shows a few working examples for these processes.

::: tip Note
Please note that you need to connect and authenticate to openEO Platform first before you
can execute any of the code snippets below.
Details can be found in the corresponding Getting Started guides.
:::

### Sentinel-1 toolbox (provided by EODC)

EODC supports the `sar_backscatter` process, which internally uses the [Sentinel-1 toolbox](https://sentinel.esa.int/web/sentinel/toolboxes/sentinel-1).

There are [two collections](/data-collections/?q=S1_GRD_SIGMA0_) available at this back-end right now:
`S1_GRD_SIGMA0_ASCENDING` and `S1_GRD_SIGMA0_DESCENDING`. Below is an example for one of them:

<CodeSwitcher>
<template v-slot:py>

```python
datacube = connection.load_collection(
    'S1_GRD_SIGMA0_ASCENDING',
    spatial_extent = {'west': 2.59003, 'east': 2.8949, 'south': 51.069, 'north': 51.2206},
    temporal_extent = ['2019-10-10', '2019-10-10']
)
datacube = datacube.sar_backscatter()
job = datacube.execute_batch(format = 'GTiff')
job.get_results().download_files("sar-nrb")
```

</template>

<template v-slot:js>

```js
var builder = await connection.buildProcess();
var datacube = builder.load_collection(
    'S1_GRD_SIGMA0_ASCENDING',
    {west: 2.59003, east: 2.8949, south: 51.069, north: 51.2206},
    ['2019-10-10', '2019-10-10']
);
datacube = builder.sar_backscatter(datacube);
var result = builder.save_result(datacube, 'GTiff');
var job = await connection.createJob(result, 'Backscatter for Sentinel-1');
```

</template>
</CodeSwitcher>

### CARD4L NRB for `SENTINEL1_GRD` collection (provided by Sentinel Hub)

When working with the Sentinel Hub based [`SENTINEL1_GRD` collection](/data-collections/?q=SENTINEL1_GRD), both SAR backscatter processes can be used.
The underlying implementation is provided by
[Sentinel Hub](https://docs.sentinel-hub.com/api/latest/data/sentinel-1-grd/#processing-options), and offers full CARD4L compliant processing options.

<CodeSwitcher>
<template v-slot:py>

```python
datacube = connection.load_collection(
    'SENTINEL1_GRD',
    spatial_extent = {'west': 2.59003, 'east': 2.8949, 'south': 51.069, 'north': 51.2206},
    temporal_extent = ['2019-10-10', '2019-10-10'],
    bands = ['VH','VV']
)
datacube = datacube.ard_normalized_radar_backscatter()
job = datacube.execute_batch(format = 'GTiff')
job.get_results().download_files("sar-nrb")
```

</template>

<template v-slot:js>

```js
var builder = await connection.buildProcess();
var datacube = builder.load_collection(
    'SENTINEL1_GRD',
    {west: 2.59003, east: 2.8949, south: 51.069, north: 51.2206},
    ['2019-10-10', '2019-10-10'],
    ['VH','VV']
);
datacube = builder.ard_normalized_radar_backscatter(datacube);
var result = builder.save_result(datacube, 'GTiff');
var job = await connection.createJob(result, 'Backscatter for Sentinel-1');
```

</template>
</CodeSwitcher>

### Orfeo for other GRD collections (provided by VITO / TerraScope)

When working with other GRD data, an [implementation](https://github.com/Open-EO/openeo-geopyspark-driver/blob/master/openeogeotrellis/collections/s1backscatter_orfeo.py) based on [Orfeo Toolbox](https://www.orfeo-toolbox.org/CookBook/Applications/app_SARCalibration.html) is used.

The Orfeo implementation currently only supports sigma0 computation, and is **not CARD4L compliant**.
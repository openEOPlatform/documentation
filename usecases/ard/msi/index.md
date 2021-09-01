# Analysis-Ready Data for Multi-Spectral Imagery (Sentinel-2)

## Atmospheric correction

The [atmospheric correction](../../../processes/index.md#atmospheric_correction) process can apply a chosen
method on raw 'L1C' data. The supported methods and input datasets depend on the back-end, because not every method is
validated or works on any dataset, and different back-ends try to offer a variety of options. This gives you as a user
more options to run and compare different methods, and select the most suitable one for your case.

To perform an [atmospheric correction](../../../processes/index.md#atmospheric_correction), the user has to load an
[uncorrected L1C optical dataset](/data-collections/?q=L1C) with the `load_collection` process
and immediately apply the `atmospheric_correction` process to it.

The CARD4L variant of this process is `ard_surface_reflectance`.
This process generates Analysis-Ready Data (ARD) following the [CEOS CARD4L specifications](https://ceos.org/ard/index.html),
and thus can perform additional processing steps, like a BRDF correction, that are not yet available as a separate process.

<CodeSwitcher>
<template v-slot:py>

```python
# Load the data. You have to specify a collection ID, spatial_extent and temporal_extent
datacube = connection.load_collection(...)
# Either apply
datacube = datacube.atmospheric_correction()
# or 
datacube = datacube.ard_surface_reflectance(atmospheric_correction_method = '...', cloud_detection_method = '...')
```

For more details see the Python client documentation for the respective methods:
- [`DataCube.atmospheric_correction`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.atmospheric_correction)
- [`DataCube.ard_surface_reflectance`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.ard_surface_reflectance)

</template>

<template v-slot:js>

```js
// Load the data. You have to specify a collection ID, spatial_extent and temporal_extent
var builder = await connection.buildProcess();
var datacube = builder.load_collection(...);
// Either apply
datacube = builder.atmospheric_correction(datacube);
// or 
datacube = builder.ard_surface_reflectance(
    datacube,
    '...', // atmospheric_correction_method
    '...' // cloud_detection_method
);
```

</template>
</CodeSwitcher>

::: warning
These correction algorithms are typically tightly coupled with the raw data,
so it is important they are applied immediately after the `load_collection` process.
It is recommended to avoid any other operations in between.
:::

### Reference implementations

This section shows a few working examples for these processes.

::: tip Note
Please note that you need to connect and authenticate to openEO Platform first before you
can execute any of the code snippets below.
Details can be found in the corresponding Getting Started guides.
:::

#### FORCE toolbox (provided by EODC)

EODC supports the `ard_surface_reflectance` process, which internally uses the [FORCE toolbox](https://github.com/davidfrantz/force).

This is an example of applying FORCE:

<!-- ToDo: Check spatial and temporal extents below -->

<CodeSwitcher>
<template v-slot:py>

```python
datacube = connection.load_collection(
    'SENTINEL2_L1C',
    spatial_extent = {'west': 3.75, 'east': 4.08, 'south': 51.29, 'north': 51.39},
    temporal_extent = ['2017-03-07', '2017-03-07'],
)
datacube.ard_surface_reflectance(atmospheric_correction_method = 'FORCE', cloud_detection_method = 'Fmask').download('force.tif', format = 'GTiff')
```

</template>

<template v-slot:js>

```js
var builder = await connection.buildProcess();
var datacube = builder.load_collection(
    'SENTINEL2_L1C',
    { west: 3.75, east: 4.08, south: 51.29, north: 51.39 },
    ['2017-03-07', '2017-03-07']
);
datacube = builder.ard_surface_reflectance(datacube, 'FORCE', 'Fmask');
var result = builder.save_result(datacube, 'GTiff');
var job = await connection.createJob(result, 'ARD for Sentinel-2 MSI');
```

</template>
</CodeSwitcher>

#### iCor / SMAC (provided by VITO / TerraScope)

The Terrascope back-end implements `atmospheric_correction` with iCor and SMAC as methods.
The version of [iCor](https://remotesensing.vito.be/case/icor) only offers basic atmoshperic correction features,
without special options for water products.
SMAC is implemented based on: <https://github.com/olivierhagolle/SMAC>
Both methods have been tested with Sentinel-2 as input.
The viewing and sun angles need to be selected by the user to make them available for the algorithm.

This is an example of applying iCor:

<CodeSwitcher>
<template v-slot:py>

```python
datacube = connection.load_collection(
    'SENTINEL2_L1C_SENTINELHUB',
    spatial_extent = {'west': 3.75, 'east': 4.08, 'south': 51.29, 'north': 51.39},
    temporal_extent = ['2017-03-07', '2017-03-07'],
    bands = ['B04', 'B03', 'B02', 'B09', 'B8A', 'B11', 'sunAzimuthAngles', 'sunZenithAngles', 'viewAzimuthMean', 'viewZenithMean']
)
datacube.atmospheric_correction(method = 'iCor').download('rgb-icor.geotiff', format = 'GTiff')
```

</template>

<template v-slot:js>

```js
var builder = await connection.buildProcess();
var datacube = builder.load_collection(
    'SENTINEL2_L1C_SENTINELHUB',
    { west: 3.75, east: 4.08, south: 51.29, north: 51.39 },
    ['2017-03-07', '2017-03-07'],
    ['B04', 'B03', 'B02', 'B09', 'B8A', 'B11', 'sunAzimuthAngles', 'sunZenithAngles', 'viewAzimuthMean', 'viewZenithMean']
);
datacube = builder.atmospheric_correction(datacube, 'iCor');
var result = builder.save_result(datacube, 'GTiff');
var job = await connection.createJob(result, 'Atmospherically corrected Sentinel-2 MSI');
```

</template>
</CodeSwitcher>
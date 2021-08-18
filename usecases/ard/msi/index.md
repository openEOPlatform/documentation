# Analysis-Ready Data for Multi-Spectral Imagery (Sentinel-2)


## Atmospheric correction


The [atmospheric correction](https://processes.openeo.org/draft/#atmospheric_correction) process can apply a chosen
method on raw 'L1C' data. The supported methods and input datasets depend on the back-end, because not every method is
validated or works on any dataset, and different back-ends try to offer a variety of options. This gives you as a user
more options to run and compare different methods, and select the most suitable one for your case.


To perform an [atmospheric correction](https://processes.openeo.org/draft/#atmospheric_correction), the user has to
load an uncorrected L1C optical dataset. On the resulting datacube, the `openeo.rest.datacube.DataCube.atmospheric_correction`
method can be invoked. Note that it may not be possible to apply certain processes to the raw input data: preprocessing
algorithms can be tightly coupled with the raw data, making it hard or impossible for the back-end to perform operations
in between loading and correcting the data.

The CARD4L variant of this process is: `openeo.rest.datacube.DataCube.ard_surface_reflectance`. This process follows
CEOS specifications, and thus can perform additional processing steps, like a BRDF correction, that are not yet available as a
separate process.

### Reference implementations


This section shows a few working examples for these processes.

#### EODC back-end


EODC supports ard_surface_reflectance, based on the FORCE toolbox. (https://github.com/davidfrantz/force)

#### Terrascope back-end

The Terrascope back-end supports `openeo.rest.datacube.DataCube.atmospheric_correction` with iCor and SMAC as methods.
The version of iCor only offers basic atmoshperic correction features, without special options for water products: https://remotesensing.vito.be/case/icor
SMAC is implemented based on: https://github.com/olivierhagolle/SMAC
Both methods have been tested with Sentinel-2 as input. The viewing and sun angles need to be selected by the user to make them
available for the algorithm.

This is an example of applying iCor:

    l1c = connection.load_collection("SENTINEL2_L1C_SENTINELHUB",
            spatial_extent={'west':3.758216409030558,'east':4.087806252,'south':51.291835566,'north':51.3927399,'crs':'EPSG:4326'},
            temporal_extent=["2017-03-07","2017-03-07"],bands=['B04','B03','B02','B09','B8A','B11','sunAzimuthAngles','sunZenithAngles','viewAzimuthMean','viewZenithMean'] )
    l1c.atmospheric_correction(method="iCor").download("rgb-icor.geotiff",format="GTiff")

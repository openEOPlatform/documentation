# STAC Catalog profile

This document lists the requirements for a data provider that wants to make a dataset available as a 
new collection in the openEO platform. More specifically, it defines the requirements for STAC catalogs. The STAC specification
is also used within openEO, and is a common choice in the EO community.

The requirements and guidelines in this document serve mostly as clarifications to STAC itself. It does not aim to contradict or overrule
the STAC specification, and if this is perceived to be the case, the STAC specification should get precedence. It may however further constrain
STAC in cases where it allows too much freedom.

## Scope

This profile aims to add a minimal set of requirements to STAC that is needed for a catalog to be compatible with openEO backends.
Requirements that are optional, for instance because they enhance efficiency, are indicated as such.

This profile is limited in scope to the most common types of raster EO datasets in the sense of how they are organized. It does not aim to define guidelines
for very complex cases, or cover evey possible type of (EO) dataset. 

### Dataset organization

1. STAC collections will be mapped to openEO collections
2. All STAC products in the same collection have the same set of 'bands', that are defined at collection level. This allows backends to look up the selected bands in a product.
3. Assets in a product are raster files that contain a single band. 


### Raster format

1. Cloud native, georeferenced, raster formats shall be used. Common examples include (cloud optimized) geotiff and jpeg2000. 
2. Rasters data is provided as regularly gridded data
3. Georeferencing shall be based on standard projection systems.
4. Overviews or pyramids are optional, they enhance viewing performance but are not required for processing at full resolution.

### Data access

1. STAC assets should contain a direct link to the raster file itself. 
2. Assets links use the http(s) or S3 scheme.
3. [HTTP RANGE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests) requests shall be supported, to request parts of an asset.

### Authentication

Integration of federated data access can be made more complex if the data provider imposes complex authentication schemes. 
Currently we aim for catalogs that allow the openEO backend to log in with a single account for all data access. A more complex
setup would be to make the login depend on the user making the openEO request.

1. The STAC API itself should preferably be publicly accessible, avoiding the need for login.
2. Asset links may require authentication.
3. One of the following authentication schemes should be supported:
      1. Basic authentication
      2. S3 authentication headers

## STAC metadata

### Data cube extension

For collection-level metadata, the datacube extension needs to be used to define the dimensions:
Please see <https://github.com/stac-extensions/datacube>


### Projection information
openEO backends require knowledge about the projection system, which should be provided at the collection level if it is the same for all products.
Collections with multiple projections, for instance based on UTM, can specify it at product level.
The [proj:epsg](https://github.com/stac-extensions/projection#item-properties-or-asset-fields) property is used to specify the projection.

### Product geometry

The product geometry specifies the footprint of the data in the raster file. It may be used by the backend for spatial filtering, 
so any pixel outside of the footprint may not be loaded by the backend. The geometry is provided in EPSG:4326, but may be interpreted in the 
product projection system.

### Common properties
openEO allows collections to be filtered by property, just like STAC catalogs. This means that most property filters are forwarded 'as-is' to the STAC catalog.
It helps openEO users a lot if collections use the same property wherever possible. The STAC extensions define such common properties.

These are some often used examples:
- [eo:cloud_cover](https://github.com/stac-extensions/eo#eocloud_cover) for cloud cover percentage
- [sat:orbit_state](https://github.com/stac-extensions/sat#satorbit_state) for orbit direction (ascending/descending)





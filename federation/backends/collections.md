# Collections

When back-ends offer/mirror the same datasets, it is required to align names and metadata. For the following collections and metadata an agreement has been achieved. These are all Copernicus Missions, and the standard names refer to the archives prepared and distributed by ESA. If it is not possible/desirable to use this name as collection id, a 'common_name' can be added next to the 'id' property to identify the collection as a standard archive.


- SENTINEL1_GRD
- SENTINEL2_L1C
- [SENTINEL2_L2A](#sentinel2-l2a)
- SENTINEL3_OLCI_L1B

## Sentinel2-L2A

The common name for this collection is 'SENTINEL2_L2A'. It refers to the L2A products generated by the Sen2Cor software, which can be configured to be compatible with the ESA generated products. Note that the products in the ESA archive were also processed with different versions of Sen2Cor, so it is not possible to specify a very specific version or configuration of the processing chain. 


### Bands

Band names for spectral bands follow the Bxx naming convention used by ESA. For example: B01, B02, B03, B08, B8A, B12

- `SCL` = the Sen2Cor scene classification band
- `approximateViewAzimuth` = collective term for the mean and accurate viewing azimuth angle. Depending on which backend is processing the data, the mean angle (for Sentinel Hub) or the accurate angle (for Terrascope) is used. If the accurate angle (`viewAzimuthAngles`) or the mean angle (`viewAzimuthMean`) is explicitly specified, the data is processed on the backend that holds the specified band.
- `viewZenithMean` = collective term for the mean and accurate viewing zenith angle. Depending on which backend is processing the data, the mean angle (for Sentinel Hub) or the accurate angle (for Terrascope) is used. If the accurate angle (`viewZenithMean`) or the mean angle (`viewZenithAngles`) is explicitly specified, the data is processed on the backend that holds those bands.
- `sunAzimuthAngles`/`sunZenithAngles` = collective term for the exact sun azimuth and sun zenith angle.

## Common Properties

We list here a set of common properties, that can be relevant for multiple collections. Collections are strongly encouraged to use these properties instead of using a different name for the same property.

### Common

- [sat:orbit_state](https://github.com/stac-extensions/sat#satorbit_state)
- [sat:relative_orbit](https://github.com/stac-extensions/sat#satrelative_orbit)

### Optical instruments

- [eo:cloud_cover](https://github.com/stac-extensions/eo#eocloud_cover)
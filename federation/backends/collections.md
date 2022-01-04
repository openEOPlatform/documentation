# Collections

If back-ends offer/mirror the same datasets, it is required to align the metadata.
For the following datasets an agreement has been achieved:

## Sentinel L2A

### Bands
- `approximateViewAzimuth` = collective term for the mean and accurate viewing azimuth angle. Depending on which backend is processing the data, the mean angle (for Sentinel Hub) or the accurate angle (for Terrascope) is used. If the accurate angle (`viewAzimuthAngles`) or the mean angle (`viewAzimuthMean`) is explicitly specified, the data is processed on the backend that holds the specified band.
- `viewZenithMean` = collective term for the mean and accurate viewing zenith angle. Depending on which backend is processing the data, the mean angle (for Sentinel Hub) or the accurate angle (for Terrascope) is used. If the accurate angle (`viewZenithMean`) or the mean angle (`viewZenithAngles`) is explicitly specified, the data is processed on the backend that holds those bands.

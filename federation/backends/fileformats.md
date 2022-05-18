# File Formats

If back-ends offer/mirror the same file formats for both import and export, it is required to align them.
For file export through `save_result` for example, the output parameters and the structure of the data that is written to storage needs to be defined.
For the following file formats an agreement has been achieved:

- GeoTiff
- netCDF
- JSON

The idea of these guidelines is to align with what the formats and corresponding toolchains support as much as possible. 

## GeoTiff
Defaults:
- One timestamp per geotiff, as geotiffs do not support multiple timestamps.
- All datacube bands are stored in the same geotiff
- The full spatial extent is written to the same geotiff
- Cloud optimized
- For ideal support in the Web Editor (and other tools), the following guide is recommended to be followed: <https://github.com/Open-EO/openeo-web-editor/blob/master/docs/geotiff.md>

## netCDF
Defaults: 
- The full datacube is written to a single netCDF.
- The openEO dimension metadata is preserved in the netCDF file. 
- CF conventions (https://cfconventions.org/) are used where applicable.
- Data is chunked and compressed

## JSON
...

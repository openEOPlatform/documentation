# Best practices

openEO Platform offers different [file formats](/file-formats) for importing and exporting of data. Depending on the data cube that your process graph creates and on your later use case, some file formats are more suitable to export your data (`save_result`) in than others.

This page provides a brief overview of the most common use cases:

### Raster formats
- JPEG/PNG: data formats that are well suited for use in media/printing
  - not georeferenced (therefore only of limited use for further analysis)
  - limited to 3 (JPEG) or 4 (PNG) output bands (image channels)
  - usually contains data from 1 timestamp
- netCDF: ideal for time series data as it stores data in multi-dimensional arrays
  - georeferenced (x/y dimensions)
  - can store multiple bands (band dimension)
  - can store multiple timestamps (time dimension)
  - self-describing, portable and scalable
- GeoTiff: ideal for storing several bands in one file in cloud optimized format
  - georeferenced
  - can store multiple bands
  - a single GeoTiff corresponds to one timestamp (in combination with STAC, multi-temporal collections can be supported)
  - cloud optimized

More information on federation agreements on file formats, can be found [here](../federation/#file-formats) and [here](../federation/backends/fileformats.md).
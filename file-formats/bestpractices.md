# Best practices

openEO Platform offers different [file formats](/file-formats) for importing and exporting of data. Depending on the data cube that your process graph creates and on your later use case, some file formats are more suitable than others.

This page provides a brief overview of the most common use cases:

### Raster formats
- JPEG/PNG: data formats that are well suited for use in media/printing
  - not georeferenced (therefore only limited usable for further analysis)
  - limited to 3 (JPEG) or 4 (PNG) output bands (image channels)
  - usually contains data from 1 timestamp
- netCDF: ideal for time series data as it stores data in multi-dimensional arrays
  - georeferenced (x/y dimensions)
  - can store multiple bands (band dimension)
  - can store multiple timestamps (time dimension)
  - self-describing, portable and scalable
- GeoTiff: 
  - georeferenced
  - can store multiple bands
  - usually describes data for one timestamp
  - cloud optimized

For more information on federation agreements on file formats, see [here](../federation/#file-formats) and [here](../federation/backends/fileformats.md).
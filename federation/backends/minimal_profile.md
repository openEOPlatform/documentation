# Minimal profile for openEO backends
This document describes the requirements for a backend that aims to provide minimal functionality for access and processing of gridded
earth observation data.

This document does not aim to contradict the openEO API, and when this is perceived to be the case, the definitions in the openEO API get precedence.
It is possible that requirements in this document do define additional constraints on top of the openEO API.

This profile is established because the openEO web service API is quite liberal if interpreted strictly. So a web service can be compliant to the API 
specification, but still be mostly incompatible with other backends, and existing usage patterns. By following this profile, implementors have a better
view on what is important.

## Scope
This minimal profile aims to help initial openEO implementations, that seek a least effort approach to achieve minimal compatibility with other backends.
Requirements in this profile are not sufficient for backends in the openEO platform federation.

## Mandatory endpoints

In the openEO API, all endpoints are optional and discoverable, except for the basic capabilities and versioning endpoints:
https://api.openeo.org/#tag/Capabilities
https://api.openeo.org/#tag/Capabilities/operation/connect

These are the endpoints that are required by this profile:



```
[
    {
      "methods": [
        "GET"
      ],
      "path": "/file_formats"
    },
    {
      "methods": [
        "GET"
      ],
      "path": "/collections"
    },
    {
      "methods": [
        "GET"
      ],
      "path": "/collections/{collection_id}"
    },
    {
      "methods": [
        "GET"
      ],
      "path": "/processes"
    },
    {
      "methods": [
        "GET",
        "POST"
      ],
      "path": "/jobs"
    },
    {
      "methods": [
        "GET",
        "DELETE"
      ],
      "path": "/jobs/{job_id}"
    },
    {
      "methods": [
        "GET",
        "POST",
        "DELETE"
      ],
      "path": "/jobs/{job_id}/results"
    }
  ],
```

## Batch job support

Support for openEO batch jobs is mandatory, but certain specific elements can be ommitted. The previous section indicates the exact endpoints and HTTP requests that need to be supported.


## File formats
[GeoTiff](./fileformats.md#geotiff) is the only mandatory output format.

## Collections
A minimal backend shall have at least one raster collection, allowing to build raster data cubes. 

## Processes

### Data Cubes

- `apply`: Apply a process to each pixel
- `apply_dimension`: Apply a process to pixels along a dimension
- `dimension_labels`: Get the dimension labels
- `filter_bands`: Filter the bands by names
- `filter_bbox`: Spatial filter using a bounding box
- `filter_spatial`: Spatial filter using geometries
- `filter_temporal`: Temporal filter for temporal intervals
- `load_collection`: Load a collection
- `mask`: Apply a raster mask
- `resample_spatial`: Resample and warp the spatial dimensions
- `save_result`: Save processed data

For backends with more than one collection:
- `merge_cubes`: Merge two data cubes
- `resample_cube_spatial`: Resample the spatial dimensions to match a target data cube


### Math
- `absolute`: Absolute value
- `add`: Addition of two numbers
- `arccos`: Inverse cosine
- `arcosh`: Inverse hyperbolic cosine
- `arcsin`: Inverse sine
- `arctan`: Inverse tangent
- `arctan2`: Inverse tangent of two numbers
- `arsinh`: Inverse hyperbolic sine
- `artanh`: Inverse hyperbolic tangent
- `ceil`: Round fractions up
- `clip`: Clip a value between a minimum and a maximum
- `constant`: Define a constant value -> pretty easy implementation
- `cos`: Cosine
- `cosh`: Hyperbolic cosine
- `divide`: Division of two numbers
- `e`: Euler's number
- `exp`: Exponentiation to the base e
- `floor`: Round fractions down
- `int`: Integer part of a number
- `linear_scale_range`: Linear transformation between two ranges
- `ln`: Natural logarithm
- `log`: Logarithm to a base
- `mod`: Modulo
- `multiply`: Multiplication of two numbers
- `pi`: Pi
- `power`: Exponentiation
- `round`: Round to a specified precision
- `sgn`: Signum
- `sin`: Sine
- `sinh`: Hyperbolic sine
- `sqrt`: Square root
- `subtract`: Subtraction of two numbers
- `tan`: Tangent
- `tanh`: Hyperbolic tangent

### Indices
- `normalized_difference`: Normalized difference

### Logic
- `and`: Logical AND
- `all`: Are all of the values true?
- `any`: Is at least one value true?
- `between`: Between comparison
- `eq`: Equal to comparison
- `gt`: Greater than comparison
- `gte`: Greater than or equal to comparison
- `if`: If-Then-Else conditional
- `is_infinite`: Value is an infinite number - **experimental**
- `is_nan`: Value is not a number
- `is_nodata`: Value is a no-data value
- `is_valid`: Value is valid data
- `lt`: Less than comparison
- `lte`: Less than or equal to comparison
- `neq`: Not equal to comparison
- `not`: Inverting a boolean
- `or`: Logical OR
- `xor`: Logical XOR (exclusive or)




# Processes

## Core Profile

As the openEO project defines a lot of processes, we need to define a core profile (i.e. a subset) that needs to be implemented on each back-end.
All processes specifications can be found at <https://processes.openeo.org>

### Data Cubes
- `add_dimension`: Add a new dimension
- `aggregate_spatial`: Zonal statistics for geometries
- `aggregate_temporal`: Temporal aggregations
- `aggregate_temporal_period`: Temporal aggregations based on calendar hierarchies
- `apply`: Apply a process to each pixel
- `apply_dimension`: Apply a process to pixels along a dimension
- `apply_kernel`: Apply a spatial convolution with a kernel
- `dimension_labels`: Get the dimension labels
- `drop_dimension`: Remove a dimension
- `filter_bands`: Filter the bands by names
- `filter_bbox`: Spatial filter using a bounding box
- `filter_spatial`: Spatial filter using geometries
- `filter_temporal`: Temporal filter for temporal intervals
- `load_collection`: Load a collection
- `load_result`: Load batch job results - **experimental**
- `mask`: Apply a raster mask
- `mask_polygon`: Apply a polygon mask
- `merge_cubes`: Merge two data cubes
- `reduce_dimension`: Reduce dimensions
- `rename_dimension`: Rename a dimension
- `rename_labels`: Rename dimension labels -> needed often for apply_dimension
- `resample_cube_spatial`: Resample the spatial dimensions to match a target data cube
- `resample_cube_temporal`: Resample temporal dimensions to match a target data cube - **experimental**
- `resample_spatial`: Resample and warp the spatial dimensions
- `save_result`: Save processed data

### Arrays / Reducers
- `array_append`: Append a value to an array - **experimental**
- `array_apply`: Apply a process to each array element
- `array_concat`: Merge two arrays - **experimental**
- `array_contains`: Check whether the array contains a given value
- `array_create`: Create an array - **experimental**
- `array_element`: Get an element from an array
- `array_filter`: Filter an array based on a condition
- `array_find`: Get the index for a value in an array
- `array_interpolate_linear`: One-dimensional linear interpolation for arrays - **experimental**
- `array_labels`: Get the labels for an array
- `array_modify`: Change the content of an array (insert, remove, update) - **experimental**
- `count`: Count the number of elements
- `extrema`: Minimum and maximum values
- `first`: First element
- `last`: Last element
- `max`: Maximum value
- `mean`: Arithmetic mean (average)
- `median`: Statistical median
- `min`: Minimum value
- `order`: Create a permutation
- `product`: Compute the product by multiplying numbers
- `rearrange`: Rearrange an array based on a permutation
- `sort`: Sort data
- `sum`: Compute the sum by adding up numbers

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
- `nan` - Not a Number - **experimental**
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

### Statistics / Indices
- `ndvi`: Normalized Difference Vegetation Index
- `normalized_difference`: Normalized difference
- `quantiles`: Quantiles
- `sd`: Standard deviation
- `variance`: Variance

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
# Feature engineering

Feature engineering refers to extracting a number of discriminative features from a single pixel timeseries or even
a time series of EO data tiles. These features then allow an expert rule-based decision approach to classify pixels, or 
to train a model using techniques such as random forest or neural networks for classification.

Concrete examples of such features include simple things such as the percentiles or standard deviation of a vegetation index or band value,
the mean value for given month, or more advanced cases such as phenological or texture information.

In general, data scientists like to explore the usefullness of a given feature set for a use case, or may even 
define new features. In some cases, the openEO processes will allow computing them, and in others, a 'user defined 
function' may be used to compute features that are not directly supported in openEO.

In this section, we will show how to combine openEO functionality into a basic feature engineering pipeline. 
 
 
 ## Data preparation

To correctly compute and use statistics over a timeseries, gap-free composites
at fixed timesteps are n
The goal of temporal aggregation is to create gap-free composites, at equidistant temporal intervals. In the case of optical data, it is often cloudmasked before this step, which introduces a lot of ‘nodata’ values. 
 ```python
composite = sentinel2_cube.aggregate_temporal_period(period="month", reducer="mean")
interpolated = composite.apply_dimension(dimension="t", process="array_interpolate_linear")
```

## Computing statistics over time

When computing statistics over time, the time dimension is fully reduced per band, and for each band, a number of statistics
can be computed.

In this example, we'll compute three quantiles, the mean and the standard deviation for each band.
After computing the actual features, we also make sure to reset band names to meaningful values.

The effect of specifying `target_dimension='bands'` is that the 'time' dimension is removed, and replaced by the 'bands' 
dimension. 

 ```python

from openeo.processes import ProcessBuilder, array_concat
def compute_features(input_timeseries:ProcessBuilder):
    return array_concat(input_timeseries.quantiles(probabilities=[0.1,0.5,0.9]),[input_timeseries.mean(), input_timeseries.sd()])

features = interpolated.apply_dimension(dimension='t',target_dimension='bands', process=compute_features)

features = features.rename_labels('bands',[band + "_" + stat for band in interpolated.metadata.band_names for stat in ["p10","p50","p90","mean","sd"]])

```

Now, a complete datacube with features is available for further usage. To see a fully working example, you can check
out [this notebook](https://notebooks.terrascope.be/user/driesj/lab/tree/Public/openeo/SRR2_notebooks/UC3%20-%20Crop%20type%20feature%20engineering.ipynb).


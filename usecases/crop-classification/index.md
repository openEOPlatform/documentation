# Crop classification

The constantly increasing demand of food has resulted in a highly intensified agricultural production. This intensification on the one
hand requires more planning and management, and on the other, threatens ecosystem services that need to be monitored by scientists
and decision makers who rely on detailed spatial information of crop cover in agricultural areas. 

Crop classification on a large scale is a challenging task, but with the recent advances in satellite sensor technology and the push 
of a.o. the ESA for higher resolution open satellite data with a frequent revisit time this task has become possible.

There are various approaches to crop classification. One can use basic rule-based classification, or use more sophisticated methods such
as one of various machine learning models. In this example, we will show both of these approaches. 

Generally, any classification task will contain the following steps:
* (1) Preprocessing & feature engineering
* (2) Training
* (3) Classification & model evaluation

We will have a more detailed look on all three of these steps, and provide code examples along the way.

## 1. Preprocessing & feature engineering
Feature engineering refers to extracting a number of discriminative features from a single pixel timeseries or even
a time series of EO data tiles. These features then allow an expert rule-based decision approach to classify pixels, or 
to train a model using techniques such as random forest or neural networks for classification.

Concrete examples of such features include simple things such as the percentiles or standard deviation of a vegetation index or band value,
the mean value for given month, or more advanced cases such as phenological or texture information.

In general, data scientists like to explore the usefulness of a given feature set for a use case, or may even
define new features. In some cases, the openEO processes will allow computing them, and in others, a 'user defined 
function' may be used to compute features that are not directly supported in openEO.

In this section, we will show how to combine openEO functionality into a basic feature engineering pipeline. 
 
### 1.1. Data preparation

To correctly compute and use statistics over a timeseries, gap-free composites
at fixed timesteps are necessary.
The goal of temporal aggregation is to create gap-free composites, at equidistant temporal intervals.
In the case of optical data, it is often cloudmasked before this step, which introduces a lot of gaps ("no-data" values).

Example:

<CodeSwitcher>
<template v-slot:py>

```python
# Create monthly composite
composite = sentinel2_cube.aggregate_temporal_period(
    period = "month",
    reducer = "mean"
)
# Fill gaps with linear interpolation
interpolated = composite.apply_dimension(
    dimension = "t",
    process = "array_interpolate_linear"
)
```

</template>

<template v-slot:js>

```js
// Create monthly composite
var mean = function(data) {
    return this.mean(data)
};
var composite = builder.aggregate_temporal_period(sentinel2_cube, "month", mean));
// Fill gaps with linear interpolation
var interpolated = builder.apply_dimension(composite, "array_interpolate_linear", "t");
```

</template>
</CodeSwitcher>

### 1.2. Computing statistics over time

When computing statistics over time, the time dimension is fully reduced per band, and for each band, a number of statistics
can be computed.

In this example, we'll compute three quantiles, the mean and the standard deviation for each band.
After computing the actual features, we also make sure to reset band names to meaningful values.

The effect of setting `target_dimension` to `bands` is that the 'time' dimension is removed, and replaced by the 'bands' 
dimension. 

<CodeSwitcher>
<template v-slot:py>

 ```python
from openeo.processes import ProcessBuilder, array_concat

def compute_features(input_timeseries: ProcessBuilder):
    return array_concat(
        input_timeseries.quantiles(probabilities=[0.1, 0.5, 0.9]),
        [input_timeseries.mean(), input_timeseries.sd()],
    )

features = interpolated.apply_dimension(
    dimension='t',
    process=compute_features,
    target_dimension='bands',
)

new_band_names = [
    band + "_" + stat
    for band in interpolated.metadata.band_names
    for stat in ["p10", "p50", "p90", "mean", "sd"]
]
features = features.rename_labels('bands', new_band_names)
```

</template>

<template v-slot:js>

```js
// Create monthly composite
var computeFeatures = function(data) {
    return this.array_concat([
        this.quantiles(data, [0.1, 0.5, 0.9]),
        [this.mean(data),  this.sd(data)]
    ]);
};
var features = builder.apply_dimension(interpolated, computeFeatures, 't', 'bands');

var collectionBands = ['B1', 'B2', ...]; // Fill this with the bands you've available in the data cube
var stats = ["p10", "p50", "p90", "mean", "sd"];
var newBandNames = [];
for(let band of collectionBands) {
    for(let stat of stats) {
        newBandNames.push(band + "_" + stat);
    }
}
features = features.rename_labels(features, 'bands', newBandNames);
```

</template>
</CodeSwitcher>

Now, a complete datacube with features is available for further usage.
To see a fully working example, you can check out 
[this Python notebook](https://github.com/openEOPlatform/SRR2_notebooks/blob/main/UC3%20-%20Crop%20type%20feature%20engineering%20(rule-based).ipynb).


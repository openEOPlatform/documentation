# Forest Change Detection

Spatially and temporally explicit information of forest ecosystems is essential for a broad range of applications and Earth observation has become a key instrument for forest management and for monitoring forest cover dynamics.
Forest change detection tries to identify critical variations in the time series signal, with a strong focus on forests (e.g., illegal deforestation, wind throw, fire). 
Forests follow a seasonal growth: during the summer months, they carry more leaves which leads to higher surface reflectance whereas in winter the reflectance will be much lower. This up and down in the surface reflectance of vegetated areas, can be mapped as a sinusoidal function with peaks in the vegetative periods (summer) and valleys in between. Knowing the shape of this sinusoidal function allow us to inspect disturbances, checking how much the new signal differ from the reference harmonic behavior.
 
 |![](https://user-images.githubusercontent.com/31700619/131147116-f0b94015-cde2-4630-9fe6-4a854f8d2474.png) |
 |:--:|
 | <b>Fig 1: Sample result from the curve fitting and prediction steps. In blue the S2 B08 data and in orange the predicted values following the harmonic seasonal function.
</b> |

This approach can be applied to single pixels, looking into a particular area of interest, or more in general over a wide area, where each pixel time series is treated independently.

In this section, we will show how to combine openEO functionality into a basic change detection pipeline.

## Data preparation
To correctly find the right fitting for the harmonic function, we need cloud-free data if using optical data, or shadow masked data if using radar data, over a timeseries of at least two years (but more is better!). Pixels covered by clouds or shadows deviate from the expected trend of the vegetation and therefore we must start with pre-processed data.

## Seasonal curve fitting
Supposing that the training input data is a cloud-free Sentinel-2 timeseries we can write the following Python code using the openEO client to find the optimal function coefficients:

    def fit_function(x:ProcessBuilder,parameters):
        pi=math.pi
        a0 = array_element(parameters,0)
        a1 = array_element(parameters,1)
        a2 = array_element(parameters,2)
        return a0 +a1*cos(2*pi/31557600*x) + a2* sin(2*pi/31557600*x)
    # 31557600 are the seconds in one year
    args_fit_curve= {
        "parameters": [1,1,1], # Initial guess of the parameters
        "dimension": 't',      # Fit the function along the temporal dimension
        "function": l2a_bands._get_callback(fit_function, parent_parameters=["data","parameters"])}

    curve_fitting = l2a_bands.fit_curve(**args_fit_curve)

## Predicting values
With the seasonal function coefficients, we can predict the expected value for a particular time step. In the following case, we are computing the values following the seasonal trend for the training time steps:

    args_dimension_labels= {
        "data": THIS,
        "dimension": "t"}
    temporal_labels = l2a_bands.process("dimension_labels",args_dimension_labels)
    args_predict_curve= {
        "data": THIS,
        "parameters": curve_fitting_loaded,
        "dimension": 't',
        "function": l2a_bands_clipped._get_callback(fit_function, parent_parameters=["data","parameters"]),
        "labels": temporal_labels}

    curve_prediction = l2a_bands_clipped.process("predict_curve",args_predict_curve)

The difference between the training data and the predicted values following the seasonal model is a key information, which is used to perform the change detection with new data. Please have a look at the reference notebook for the complete pipeline:

https://github.com/openEOPlatform/SRR2_notebooks/blob/main/UC6%20-%20Forest%20Dynamics.ipynb

# NO₂ monitoring

TROPOMI is the name of a sensor on board of the Sentinel-5 Precursor (S5P) satellite, developed to monitor atmospheric chemistry.

This use case analyses Sentinel 5P imagery, focusing in particular on NO₂ measurements. Compared to other variables measured by TROPOMI, NO₂ is of high interest not only because of its direct relation with environmental health, but also because the main sources are typically known, because it is not transported over long distances and because the total column values measured by TROPOMI are strong indication of the ground level values.

NO₂ values will be analysed globally, over a full year (e.g., 2018). The analysis will allow for regridding to 10 km x 10 km grids, and allow the user to set threshold values for the quality flag andthe cloud cover. Noise and gaps due to quality flag or cloud cover will be removed by computing daily, 30-day smoothed values, using kernel smoothing of the time series. Interactions will involve (i) interaction with daily, color-coded maps including interactive and automatic time animation, (ii) the display of time series of smoothed, raw, and 30-day maximum values for locations selected by user mouse clicks, and (iii) the comparison of time series of user-selected hot spots with time series of averages for selected regions or for global averages.

- The R Shiny app to explore the data is available [here](https://github.com/Open-EO/r4openeo-usecases/tree/main/uc3-s5p-dashboard).
- An additional Python notebook for this use case can be found [here](https://github.com/openEOPlatform/sample-notebooks/blob/main/sentinel-5p.ipynb).

<CodeSwitcher>
<template v-slot:py>

```python
year = 2019
# Münster
extent = {
    "type": "Polygon",
    "coordinates": [[
        [7.737228350528245,51.86687168604513],
        [7.507741544165615,51.86687168604513],
        [7.507741544165615,52.05013100121914],
        [7.737228350528245,52.05013100121914],
        [7.737228350528245,51.86687168604513]
    ]]
}
moving_average_window = 31
method = "max" # mean or max or min


udf = openeo.UDF("""
from pandas import Series
import numpy as np

def apply_timeseries(series: Series, context: dict) -> Series:
    return np.convolve(series, np.ones({n})/{n}, mode='same')
""".format(n = moving_average_window))


datacube = connection.load_collection("TERRASCOPE_S5P_L3_NO2_TD_V1", spatial_extent = extent, temporal_extent = [f"{year}-01-01", f"{year}-12-31"])
datacube = datacube.apply_dimension(dimension = "t", process = "array_interpolate_linear")
if method == "mean":
    datacube = datacube.apply_dimension(dimension = "t", process = udf)
datacube = datacube.aggregate_spatial(geometries = extent, reducer = method)
datacube = datacube.save_result(format = "JSON")


results = connection.execute(datacube)
results = {k: v[0][0] for k, v in result.items()}
```

</template>
<template v-slot:r>

```r

```

</template>
<template v-slot:js>

*No JavaScript code available yet.*

</template>
</CodeSwitcher>

![min/max/mean NO2 chart](chart.png)
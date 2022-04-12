# Dynamic land cover service

In this notebook we will be studying land cover mapping. Land cover mapping has been done since the onset of remote sensing, and LC products have been identified as a fundamental variable needed for studying the functional and morphological changes occurring in the Earth's ecosystems and the environment, and plays therefore an important role in studying climate change and carbon circulation (Congalton et al., 2014; Feddema et al., 2005; Sellers et al., 1997). In addition to that, it provides valuable information for policy development and a wide range of applications within natural sciences and life sciences, making it one of the most widely studied applications within remote sensing (Yu et al., 2014, Tucker et al., 1985; Running, 2008; Yang et al., 2013).

With this variety in application fields comes a variety of user needs. Depending on the use case, there may be large differences in the target labels desired, the target year(s) requested, the output resolution needed, the featureset used, the stratification strategy employed, and more. The goal of this use case is to show that OpenEO as a platform can deal with this variability, and we will do so through creating a userfriendly interface in which the user can set a variety of parameters that will tailor the pipeline from -reference set & L2A+GRD > to model > to inference- to the users needs.

To see the most basic version of the dynamic land cover service, you can check out [this Python notebook](https://github.com/openEOPlatform/SRR3_notebooks/blob/main/notebooks/Demo%20UC9.ipynb). If you'd like to have a look at some more advanced use cases, such as the use of stratification and the incorporation of extra datasets, have a look at [this Python notebook](https://github.com/openEOPlatform/SRR3_notebooks/blob/main/notebooks/Demo%20UC9%20with%20stratification.ipynb). This last notebook will show features that we will not show in this tutorial.

In this notebook, helper functionality from [this repository](https://github.com/openEOPlatform/openeo-classification) is used. It contains amongst others the entire feature building engineering workflow, so if you are interested in knowing how to do that or if you want to make more customizations towards your own use case, have a look at it. Note that the repository is not finalized, as it is a general repository also used for other purposes.

![heelbelgie](https://user-images.githubusercontent.com/10434651/162210357-48389c4a-d58c-46da-972d-14f6ade2312e.png)

## Methodology
### Reference data
The reference dataset used in this section is the Land Use/Cover Area frame Survey (LUCAS) Copernicus dataset of 2018. LUCAS is an evenly spaced in-situ land use and land cover ground survey exercise that extends over the entire of the European Union. The Copernicus module extends up to 51m in four cardinal directions to delineate polygons for each of these points. The final product contains about 60,000 polygons, from which subsequent points can be sampled (d'Andrimont et al., 2021). You as a user can specify how many points to sample from these polygons to train your model. In addition, the user can upload extra target data to improve performance.

### Input data
The service created runs on features constructed from GRD sigma0 and L2A data. This data will be accessed through OpenEO platform from Terrascope and SentinelHub. You, as a user, can determine a time range, though the year should be kept to 2018, as that is the year in which the LUCAS Copernicus dataset was assembled. Data from other years can be extracted for prediction, provided that the user uploads their own reference set.

### Preprocessing
The L2A data has been masked using the sen2cor sceneclassification, with a buffering approach developed at VITO and made available as a process called mask_scl_dilation. From the Sentinel-1 GRD collection, backscatter is calculated.


### Feature engineering
We select and calculate the following products from our input collections:
- 7 indices (NDVI, NDMI, NDGI, ANIR, NDRE1, NDRE2, NDRE5) and 2 bands (B06, B12) from the L2A collection
- VV, VH and VV/VH (ratio) from the GRD sigma0 collection

As you user you are however free to select other S2 indices; if you are interested in doing so, please refer to the [advanced notebook](https://github.com/openEOPlatform/SRR3_notebooks/blob/main/notebooks/Demo%20UC9%20with%20stratification.ipynb).

All layers are rescaled to 0 to 30000 for computational efficiency. The indices/bands are then aggregated temporally (for Sentinel-2 data: 10-day window using the median. For Sentinel-1 data: 12 day window using the mean. The median was used for the S2 collection instead of the mean to prevent possible artifacts caused by cloud shadows). The output is then interpolated linearly and the S1 cube is resampled spatially to a 10m resolution. Finally, 10 features are calculated on each of the band dimensions. These 10 features are the standard deviation, 25th, 50th and 75th percentile, and 6 equidistant t-steps. Through this procedure, we end up with a total of 120 features (12 bands x 10 features).

### Model
Where previously models had to be trained outside of openEO, we can now train Random Forest models in openEO itself. Hyperparameter tuning can be performed using a custom hyperparameter set. After training, the model is validated and used for prediction.

## Implementation
First, we load in a dataset with target labels. In order for the model to work, the target labels need to be integers. Also, we extract some target points from the target polygons.

<CodeSwitcher>
<template v-slot:py>

 ```python
import openeo
import geopandas as gpd
from openeo_classification.landuse_classification import *
from sklearn.model_selection import train_test_split
import json
from pathlib import Path

mask = box(4.4, 50.2, 5.6, 51.2)
y = gpd.read_file("https://artifactory.vgt.vito.be/auxdata-public/openeo/LUCAS_2018_Copernicus.gpkg",mask=mask)
y["geometry"] = y["geometry"].apply(lambda x: x.centroid)
y["LC1"] = y["LC1"].apply(lambda x: ord(x[0])-65)
y_train, y_test = train_test_split(y, test_size=0.25, random_state=333)
 ```

</template>
<template v-slot:js>

*No JavaScript code available yet.*

</template>
</CodeSwitcher>

Next, we will create our featureset and use this featureset to train a model. The indices from which you calculate features can be adjusted by a parameter, but if you'd want you could even create the entire feature engineering pipeline yourself. If you are interested in knowing how to do so, you can dive a little bit deeper into the openEO code found [here](https://github.com/openEOPlatform/openeo-classification/blob/main/src/openeo_classification/features.py).

<CodeSwitcher>
<template v-slot:py>

 ```python
features, feature_list = load_lc_features("terrascope", "both", datetime.date(2018, 3, 1), datetime.date(2018, 10, 31))
X = features.aggregate_spatial(json.loads(y_train.to_json()), reducer="mean")
ml_model = X.fit_class_random_forest(target=json.loads(y_train.to_json()), num_trees=nrtrees.value)
model = ml_model.save_ml_model()
training_job = model.create_job()
training_job.start_and_wait()
 ```

</template>
<template v-slot:js>

*No JavaScript code available yet.*

</template>
</CodeSwitcher>

Subsequently, we can calculate a number of validation metrics from our test set. To do so, we do inference for the points of our y-test set and write these predictions out to a netCDF. The function `calculate_validation_metrics` (not part of openEO itself, but simply a client-side helper function) then loads in the y-test geojson and the netCDF with predicted values, extracts the points and stores the predicted values alongside their actual target labels in a dataframe.

<CodeSwitcher>
<template v-slot:py>

 ```python
base_path = Path.cwd() / "results" / "testarea"
validation_path = base_path / "validation"
validation_path.mkdir(parents=True,exist_ok=True)

y_test.to_file(filename=str(validation_path / 'y_test.geojson'),driver="GeoJSON")
cube = features.filter_spatial(json.loads(y_test["geometry"].to_json()))
predicted = cube.predict_random_forest(model=training_job, dimension="bands").linear_scale_range(0,255,0,255)
test_job = predicted.execute_batch(out_format="netCDF")
test_job.get_results().download_files(str(validation_path))

gdf, final_res = calculate_validation_metrics(
    path_to_test_geojson=str(validation_path / 'y_test.geojson'), 
    path_to_test_raster=str(validation_path / "openEO.nc"))
 ```

</template>
<template v-slot:js>

*No JavaScript code available yet.*

</template>
</CodeSwitcher>

After inspecting the metrics and possibly further finetuning the model or dataset, we can do inference on an area of choice and write the result out to a netCDF or GTiff. Happy mapping!


<CodeSwitcher>
<template v-slot:py>

 ```python
features, feature_list = load_lc_features("terrascope", "both", datetime.date(2018, 3, 1), datetime.date(2018, 10, 31), processing_opts=dict(tile_size=256))

cube = features.filter_spatial(json.loads(aoi_inference.data[0]))
cube = features.filter_bbox({
    'west':5.1,'east':5.2,'south':50.7,'north':50.8
})
predicted = cube.predict_random_forest(
    model=training_job,
    dimension="bands"
).linear_scale_range(0,255,0,255)
inf_job = predicted.execute_batch(out_format="GTiff")
inf_job.get_results().download_files(str(base_path / "prediction"))
 ```

</template>
<template v-slot:js>

*No JavaScript code available yet.*

</template>
</CodeSwitcher>


![tile31UFS](https://user-images.githubusercontent.com/10434651/162389189-f20d8b4d-6509-4965-bf13-60590438d75c.png)
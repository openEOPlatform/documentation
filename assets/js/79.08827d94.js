(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{504:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dynamic-land-cover-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-land-cover-service"}},[t._v("#")]),t._v(" Dynamic land cover service")]),t._v(" "),a("p",[t._v("In this notebook we will be studying land cover mapping. Land cover mapping has been done since the onset of remote sensing, and LC products have been identified as a fundamental variable needed for studying the functional and morphological changes occurring in the Earth's ecosystems and the environment, and plays therefore an important role in studying climate change and carbon circulation (Congalton et al., 2014; Feddema et al., 2005; Sellers et al., 1997). In addition to that, it provides valuable information for policy development and a wide range of applications within natural sciences and life sciences, making it one of the most widely studied applications within remote sensing (Yu et al., 2014, Tucker et al., 1985; Running, 2008; Yang et al., 2013).")]),t._v(" "),a("p",[t._v("With this variety in application fields comes a variety of user needs. Depending on the use case, there may be large differences in the target labels desired, the target year(s) requested, the output resolution needed, the featureset used, the stratification strategy employed, and more. The goal of this use case is to show that OpenEO as a platform can deal with this variability, and we will do so through creating a userfriendly interface in which the user can set a variety of parameters that will tailor the pipeline from -reference set & L2A+GRD > to model > to inference- to the users needs.")]),t._v(" "),a("p",[t._v("In this notebook, helper functionality from "),a("a",{attrs:{href:"https://github.com/openEOPlatform/openeo-classification",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repository"),a("OutboundLink")],1),t._v(" is used. It contains amongst others the entire feature building engineering workflow, so if you are interested in knowing how to do that or if you want to make more customizations towards your own use case, have a look at it. Note that the repository is not finalized, as it is a general repository also used for other purposes.")]),t._v(" "),a("p",[t._v("A full notebook for this use case can be found "),a("a",{attrs:{href:"https://github.com/openEOPlatform/sample-notebooks/blob/main/Dynamic%20land%20cover%20mapping.ipynb",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/10434651/162210357-48389c4a-d58c-46da-972d-14f6ade2312e.png",alt:"heelbelgie"}})]),t._v(" "),a("h2",{attrs:{id:"methodology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methodology"}},[t._v("#")]),t._v(" Methodology")]),t._v(" "),a("h3",{attrs:{id:"reference-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-data"}},[t._v("#")]),t._v(" Reference data")]),t._v(" "),a("p",[t._v("The reference dataset used in this section is the Land Use/Cover Area frame Survey (LUCAS) Copernicus dataset of 2018. LUCAS is an evenly spaced in-situ land use and land cover ground survey exercise that extends over the entire of the European Union. The Copernicus module extends up to 51m in four cardinal directions to delineate polygons for each of these points. The final product contains about 60,000 polygons, from which subsequent points can be sampled (d'Andrimont et al., 2021). You as a user can specify how many points to sample from these polygons to train your model. In addition, the user can upload extra target data to improve performance.")]),t._v(" "),a("h3",{attrs:{id:"input-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-data"}},[t._v("#")]),t._v(" Input data")]),t._v(" "),a("p",[t._v("The service created runs on features constructed from GRD sigma0 and L2A data. This data will be accessed through OpenEO platform from Terrascope and Sentinel Hub. You, as a user, can determine a time range, though the year should be kept to 2018, as that is the year in which the LUCAS Copernicus dataset was assembled. Data from other years can be extracted for prediction, provided that the user uploads their own reference set.")]),t._v(" "),a("h3",{attrs:{id:"preprocessing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preprocessing"}},[t._v("#")]),t._v(" Preprocessing")]),t._v(" "),a("p",[t._v("The L2A data has been masked using the sen2cor sceneclassification, with a buffering approach developed at VITO and made available as a process called mask_scl_dilation. From the Sentinel-1 GRD collection, backscatter is calculated.")]),t._v(" "),a("h3",{attrs:{id:"feature-engineering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-engineering"}},[t._v("#")]),t._v(" Feature engineering")]),t._v(" "),a("p",[t._v("We select and calculate the following products from our input collections:")]),t._v(" "),a("ul",[a("li",[t._v("7 indices (NDVI, NDMI, NDGI, ANIR, NDRE1, NDRE2, NDRE5) and 2 bands (B06, B12) from the L2A collection")]),t._v(" "),a("li",[t._v("VV, VH and VV/VH (ratio) from the GRD sigma0 collection")])]),t._v(" "),a("p",[t._v("All layers are rescaled to 0 to 30000 for computational efficiency. The indices/bands are then aggregated temporally (for Sentinel-2 data: 10-day window using the median. For Sentinel-1 data: 12 day window using the mean. The median was used for the S2 collection instead of the mean to prevent possible artifacts caused by cloud shadows). The output is then interpolated linearly and the S1 cube is resampled spatially to a 10m resolution. Finally, 10 features are calculated on each of the band dimensions. These 10 features are the standard deviation, 25th, 50th and 75th percentile, and 6 equidistant t-steps. Through this procedure, we end up with a total of 120 features (12 bands x 10 features).")]),t._v(" "),a("h3",{attrs:{id:"model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[t._v("#")]),t._v(" Model")]),t._v(" "),a("p",[t._v("Where previously models had to be trained outside of openEO, we can now train Random Forest models in openEO itself. Hyperparameter tuning can be performed using a custom hyperparameter set. After training, the model is validated and used for prediction.")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("First, we load in a dataset with target labels. In order for the model to work, the target labels need to be integers. Also, we extract some target points from the target polygons.")]),t._v(" "),a("CodeSwitcher",{scopedSlots:t._u([{key:"py",fn:function(){return[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" openeo\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" geopandas "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" gpd\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" openeo_classification"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landuse_classification "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model_selection "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" train_test_split\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pathlib "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Path\n\nmask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gpd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://artifactory.vgt.vito.be/auxdata-public/openeo/LUCAS_2018_Copernicus.gpkg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mask"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geometry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geometry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("centroid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LC1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LC1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("ord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" train_test_split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" random_state"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("333")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0},{key:"js",fn:function(){return[a("p",[a("em",[t._v("No JavaScript code available yet.")])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("Next, we will create our featureset and use this featureset to train a model. The indices from which you calculate features can be adjusted by a parameter, but if you'd want you could even create the entire feature engineering pipeline yourself. If you are interested in knowing how to do so, you can dive a little bit deeper into the openEO code found "),a("a",{attrs:{href:"https://github.com/openEOPlatform/openeo-classification/blob/main/src/openeo_classification/features.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("CodeSwitcher",{scopedSlots:t._u([{key:"py",fn:function(){return[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" feature_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" load_lc_features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terrascope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"both"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aggregate_spatial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reducer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mean"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nml_model "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit_class_random_forest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_trees"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nrtrees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ml_model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save_ml_model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntraining_job "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntraining_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start_and_wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0},{key:"js",fn:function(){return[a("p",[a("em",[t._v("No JavaScript code available yet.")])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("Subsequently, we can calculate a number of validation metrics from our test set. To do so, we do inference for the points of our y-test set and write these predictions out to a netCDF. The function "),a("code",[t._v("calculate_validation_metrics")]),t._v(" (not part of openEO itself, but simply a client-side helper function) then loads in the y-test geojson and the netCDF with predicted values, extracts the points and stores the predicted values alongside their actual target labels in a dataframe.")]),t._v(" "),a("CodeSwitcher",{scopedSlots:t._u([{key:"py",fn:function(){return[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("base_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"results"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testarea"')]),t._v("\nvalidation_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" base_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"validation"')]),t._v("\nvalidation_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mkdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("exist_ok"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ny_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validation_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y_test.geojson'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GeoJSON"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_spatial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geometry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npredicted "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("predict_random_forest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("training_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dimension"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bands"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linear_scale_range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntest_job "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" predicted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute_batch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("out_format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"netCDF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntest_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download_files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validation_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ngdf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" final_res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" calculate_validation_metrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   path_to_test_geojson"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validation_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'y_test.geojson'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n   path_to_test_raster"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("validation_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openEO.nc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0},{key:"js",fn:function(){return[a("p",[a("em",[t._v("No JavaScript code available yet.")])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("After inspecting the metrics and possibly further finetuning the model or dataset, we can do inference on an area of choice and write the result. Happy mapping!")]),t._v(" "),a("CodeSwitcher",{scopedSlots:t._u([{key:"py",fn:function(){return[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" feature_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" load_lc_features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"terrascope"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"both"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_bbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'west'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'east'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'south'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'north'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50.8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npredicted "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("predict_random_forest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("training_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   dimension"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bands"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linear_scale_range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninf_job "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" predicted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute_batch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("out_format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GTiff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninf_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download_files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prediction"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0},{key:"js",fn:function(){return[a("p",[a("em",[t._v("No JavaScript code available yet.")])])]},proxy:!0}])}),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/10434651/162389189-f20d8b4d-6509-4965-bf13-60590438d75c.png",alt:"tile31UFS"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);
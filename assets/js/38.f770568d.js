(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{356:function(t,s,a){t.exports=a.p+"assets/img/Composition_sen2like.3f40cbdd.png"},357:function(t,s,a){t.exports=a.p+"assets/img/RGBplot_sen2like.fa72de81.png"},358:function(t,s,a){t.exports=a.p+"assets/img/NDVIplot_sen2like.7165c449.png"},359:function(t,s,a){t.exports=a.p+"assets/img/WE_graph.c65299ba.png"},588:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sen2like"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sen2like"}},[t._v("#")]),t._v(" Sen2Like")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),s("p",[t._v("To use this service, you have to be registered at openEO platform. If you are not yet registered, you can apply "),s("a",{attrs:{href:"https://openeo.cloud/#plans",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("The sen2like processor was developed by ESA as part of the "),s("a",{attrs:{href:"https://www.copernicus.eu/en",target:"_blank",rel:"noopener noreferrer"}},[t._v("EU Copernicus program"),s("OutboundLink")],1),t._v(". It creates Sentinel-2 like (Level-2F) fused surface reflectances by harmonizing Sentinel-2 and Landsat 8/Landsat 9 to increase the temporal revisits. Based on the resulting L2F product, multiple indices can be computed, such as the NDVI and LAI.\nThe fusion also involves the upscaling of Landsat 8/Landsat 9 data to Sentinel-2 resolution. The Level 2F includes Blue, Green, Red Landsat 8 image bands rescaled to 10.0 m pixel spacing.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(356),alt:"image"}})]),t._v(" "),s("p",[s("a",{attrs:{href:"https://openeo.cloud/",target:"_blank",rel:"noopener noreferrer"}},[t._v("openEO"),s("OutboundLink")],1),t._v(" provides an option to run the sen2like processor on the requested extent on an openEO backend. The backend takes care of getting the required input data and the computational resources to run sen2like on. openEO users can start sen2like jobs on the backend and download the results.")]),t._v(" "),s("p",[t._v("This document describes how to use the sen2like processor in OpenEO for a requested spatio-temporal extent. We’ve prepared a "),s("a",{attrs:{href:"https://github.com/eodcgmbh/sen2like/blob/master/openeo/openeo-sen2like.ipynb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jupyter Notebook"),s("OutboundLink")],1),t._v(" that you can use to run the process.")]),t._v(" "),s("h2",{attrs:{id:"_1-sen2like-for-rgb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-sen2like-for-rgb"}},[t._v("#")]),t._v(" 1. sen2like for RGB")]),t._v(" "),s("h3",{attrs:{id:"openeo-sen2like-processing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openeo-sen2like-processing"}},[t._v("#")]),t._v(" openEO sen2like processing")]),t._v(" "),s("p",[t._v("To start the sen2like openEO processing, we need to connect to the EODC openEO backend.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" openeo\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" openeo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datacube "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PGNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" THIS\n\neodc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://openeo.eodc.eu/openeo/1.1.0/"')]),t._v("\n\nconn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openeo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eodc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authenticate_oidc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("describe_process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sen2like"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("As sen2like can only process "),s("code",[t._v("SENTINEL2_L1C")]),t._v(" data, we chose this as our collection and specify the spatial and temporal extent and the bands to compute. Here we chose the Band 02, Band 03 and Band 04 as they are the bands for true Colors (RGB).\nThe sen2like processing automatically includes the Landsat 8 & 9 data into the computation, so we do not need to call it explicitely. The processing also automatically includes other additional data, such as the digital elevation model and data from the Copernicus Atmosphere Monitoring Service.")]),t._v(" "),s("p",[t._v("We aditionally set the parameters:")]),t._v(" "),s("ul",[s("li",[t._v("target_product: can be L2F or L2H, usually L2F as it is the 'final' fused product")]),t._v(" "),s("li",[t._v("cloud_cover: is between 1 and 100. A high cloud cover can make data inaccurate, so we ignore files with a higher cloud cover than 50%.")]),t._v(" "),s("li",[t._v("export_original_files: can be True or False - if True, the .SAFE folders are an output of the openEO process as well.")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("collection      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SENTINEL2_L1C'")]),t._v("\nspatial_extent  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"west"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"east"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"south"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("46.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"north"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("46.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ntemporal_extent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-07-01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-09-30"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nbands "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B02"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B03"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B04"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nS2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" spatial_extent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("spatial_extent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temporal_extent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("temporal_extent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bands"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsen2like "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" S2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sen2like'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" THIS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'target_product'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'L2F'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export_original_files'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cloud_cover'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),s("p",[t._v("Additionally, we can make use of other openEO processes. Here, the data is aggregated to produce monthly means and stored in NetCDF files.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("sen2like_month "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sen2like"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aggregate_temporal_period"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mean"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" period"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"month"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsen2like_nc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sen2like_month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save_result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NetCDF"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("We create and start the openEO job.\nTo reuse the results without uploading them again, we need to know the job id. To see the job status the job.status() function has to be called.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sen2like_nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start_job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\njob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("When the job is finished, the results can be downloaded.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("results "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmetadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"explore-the-openeo-l2f-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explore-the-openeo-l2f-results"}},[t._v("#")]),t._v(" Explore the openEO L2F results")]),t._v(" "),s("p",[t._v("To create a plot of our data, we need the libraries numpy, xarray and matplotlib.pyplot. First, the desired data set must be selected.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("open_mfdataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EU010M_E051N014T1_20230930T000000.nc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("To get a true color image the colors need to get adjusted. Then, we can plot our data.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("brg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B04"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B04"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbrg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B04"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nbrg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B03"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\nbrg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B02"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.6")]),t._v("\nbrg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("brg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("astype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uint8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("figure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("figsize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RGB sen2like Maribor, September 2022"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("brg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cmap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'brg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(357),alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"_2-sen2like-for-ndvi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-sen2like-for-ndvi"}},[t._v("#")]),t._v(" 2. sen2like for NDVI")]),t._v(" "),s("p",[t._v("The Normalized difference vegetation index is a metric for quantifying the health and density of vegetation using eo data.\nFirst, we need to add the connection of the EODC backend as described above.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" openeo\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" openeo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datacube "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PGNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" THIS\n\neodc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://openeo.eodc.eu/openeo/1.1.0/"')]),t._v("\n\nconn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openeo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eodc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authenticate_oidc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("describe_process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sen2like"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("To calculate the NDVI the red band (04) and the band for the near infrared (08) are needed. The other values are the same as above.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("collection      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SENTINEL2_L1C'")]),t._v("\nspatial_extent  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"west"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"east"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"south"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("46.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"north"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("46.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ntemporal_extent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-09-01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-09-30"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nbands "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B04"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B08"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nS2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" spatial_extent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("spatial_extent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temporal_extent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("temporal_extent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bands"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsen2like "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" S2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sen2like'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" THIS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'target_product'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'L2F'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export_original_files'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cloud_cover'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),s("p",[t._v("Additionally, we can make use of other openEO processes. The nir and red bands of the data are combined to the NDVI and stored in NetCDF files.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("sen2like_ndvi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sen2like"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ndvi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B08"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B04"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsen2like_nc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sen2like_ndvi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save_result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NetCDF"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("We create and start the openEO batch job:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sen2like_nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start_job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("When the job is finished, the results can be downloaded.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("results "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmetadata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"explore-the-openeo-l2f-ndvi-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explore-the-openeo-l2f-ndvi-results"}},[t._v("#")]),t._v(" Explore the openEO L2F NDVI results")]),t._v(" "),s("p",[t._v("Here, we only need to load the data and plot the results.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("figure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("figsize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NDVI sen2like Maribor, September 2022"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cmap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Greens'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("colorbar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:a(358),alt:"image"}})]),t._v(" "),s("h2",{attrs:{id:"_3-sen2like-processing-in-the-openeo-web-editor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-sen2like-processing-in-the-openeo-web-editor"}},[t._v("#")]),t._v(" 3. Sen2Like processing in the openeo web editor")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://editor.openeo.org/?server=https%3A%2F%2Fopeneo.eodc.eu%2Fopeneo%2F1.1.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("openEO web editor"),s("OutboundLink")],1),t._v(" is another way to use the Sen2Like processor. To interact with the server, you need to log in first.")]),t._v(" "),s("p",[t._v("When the editor is opened, you can see all previous batch jobs at the bottom, all available collections and processes on the left hand side and the main editor window on the top right side of the window. You can build your own graphs by connecting collections and processes.")]),t._v(" "),s("p",[t._v("The processing graph for the Sen2Like processor looks like this:\n"),s("img",{attrs:{src:a(359),alt:"image"}})]),t._v(" "),s("p",[t._v("The structure is the same as in the notebooks. First, the Sentinel-2 data is selected. Then the Sen2Like process is executed, which is then filtered by time, extent and bands. The new data is then saved and can be used individually.")]),t._v(" "),s("p",[t._v("Below the graph, you can switch between the "),s("code",[t._v("Visual Model")]),t._v(" and "),s("code",[t._v("Code")]),t._v(". The Visual Model is the processing graph and Code is the JSON code of the built processing graph and can also be customized. The processing graph then automatically updates again.")]),t._v(" "),s("p",[t._v("The JSON Code for Sen2Like looks like this.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n  "process_graph": {\n    "loadcollection1": {\n      "process_id": "load_collection",\n      "arguments": {\n        "bands": [\n          "B02",\n          "B03",\n          "B04",\n          "B05",\n          "B06",\n          "B07",\n          "B08",\n          "B8A",\n          "B11",\n          "B12"\n        ],\n        "id": "SENTINEL2_L1C",\n        "spatial_extent": {\n          "west": 15.2,\n          "east": 17.6,\n          "south": 47.9,\n          "north": 49.5\n        },\n        "temporal_extent": [\n          "2023-06-01",\n          "2023-09-30"\n        ]\n      }\n    },\n    "sen2like1": {\n      "process_id": "sen2like",\n      "arguments": {\n        "data": {\n          "from_node": "loadcollection1"\n        }\n      }\n    },\n    "filtertemporal1": {\n      "process_id": "filter_temporal",\n      "arguments": {\n        "data": {\n          "from_node": "sen2like1"\n        },\n        "extent": [\n          "2023-06-01",\n          "2023-06-30"\n        ]\n      }\n    },\n    "filterbbox1": {\n      "process_id": "filter_bbox",\n      "arguments": {\n        "data": {\n          "from_node": "filtertemporal1"\n        },\n        "extent": {\n          "west": 16.6,\n          "east": 16.7,\n          "north": 48,\n          "south": 47.9\n        }\n      }\n    },\n    "filterbands1": {\n      "process_id": "filter_bands",\n      "arguments": {\n        "bands": [\n          "B02",\n          "B03",\n          "B04"\n        ],\n        "data": {\n          "from_node": "filterbbox1"\n        }\n      }\n    },\n    "saveresult1": {\n      "process_id": "save_result",\n      "arguments": {\n        "data": {\n          "from_node": "filterbands1"\n        },\n        "format": "NetCDF",\n        "options": {}\n      },\n      "result": true\n    }\n  },\n  "parameters": []\n}\n')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
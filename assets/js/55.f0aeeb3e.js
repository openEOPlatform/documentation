(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{480:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"analysis-ready-data-for-sar-sentinel-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#analysis-ready-data-for-sar-sentinel-1"}},[t._v("#")]),t._v(" Analysis-Ready Data for SAR (Sentinel-1)")]),t._v(" "),s("p",[t._v("Executable code for this guide can be found in a "),s("a",{attrs:{href:"https://github.com/openEOPlatform/sample-notebooks/blob/main/openEO%20Platform%20-%20Radar%20ARD.ipynb",target:"_blank",rel:"noopener noreferrer"}},[t._v("dedicated notebook"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"backscatter-computation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backscatter-computation"}},[t._v("#")]),t._v(" Backscatter computation")]),t._v(" "),s("p",[t._v("Data from synthetic aperture radar (SAR) sensors requires significant preprocessing to be calibrated and normalized for terrain.\nThis is referred to as backscatter computation, and provider in openEO Platform by")]),t._v(" "),s("ul",[s("li",[t._v("the "),s("RouterLink",{attrs:{to:"/processes/#sar_backscatter"}},[s("code",[t._v("sar_backscatter")]),t._v(" process")])],1),t._v(" "),s("li",[t._v("and its CARD4L compliant variant, the\n"),s("RouterLink",{attrs:{to:"/processes/#ard_normalized_radar_backscatter"}},[s("code",[t._v("ard_normalized_radar_backscatter")]),t._v(" process")])],1)]),t._v(" "),s("p",[t._v("To perform a backscatter computation, the user has to load an\n"),s("a",{attrs:{href:"/data-collections/?q=GRD"}},[t._v("raw SAR data")]),t._v(" with the "),s("code",[t._v("load_collection")]),t._v(" process\nand immediately apply ône of the processes to it.")]),t._v(" "),s("CodeSwitcher",{scopedSlots:t._u([{key:"py",fn:function(){return[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load the data. You have to specify a collection ID, spatial_extent and temporal_extent")]),t._v("\ndatacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Either apply")]),t._v("\ndatacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sar_backscatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or ")]),t._v("\ndatacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ard_normalized_radar_backscatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("For more details see the Python client documentation for the respective methods:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.sar_backscatter",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("DataCube.sar_backscatter")]),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.ard_normalized_radar_backscatter",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("DataCube.ard_normalized_radar_backscatter")]),s("OutboundLink")],1)])])]},proxy:!0},{key:"js",fn:function(){return[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Load the data. You have to specify a collection ID, spatial_extent and temporal_extent")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" builder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildProcess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" datacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load_collection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Either apply")]),t._v("\ndatacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sar_backscatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or ")]),t._v("\ndatacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ard_normalized_radar_backscatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("These correction algorithms are typically tightly coupled with the raw data,\nso it is important they are applied immediately after the "),s("code",[t._v("load_collection")]),t._v(" process.\nIt is recommended to avoid any other operations in between.")])]),t._v(" "),s("h2",{attrs:{id:"reference-implementations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementations"}},[t._v("#")]),t._v(" Reference implementations")]),t._v(" "),s("p",[t._v("This section shows a few working examples for these processes.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Please note that you need to connect and authenticate to openEO Platform first before you\ncan execute any of the code snippets below.\nDetails can be found in the corresponding Getting Started guides.")])]),t._v(" "),s("h3",{attrs:{id:"sentinel-1-toolbox-provided-by-eodc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-1-toolbox-provided-by-eodc"}},[t._v("#")]),t._v(" Sentinel-1 toolbox (provided by EODC)")]),t._v(" "),s("p",[t._v("EODC supports the "),s("code",[t._v("sar_backscatter")]),t._v(" process, which internally uses the "),s("a",{attrs:{href:"https://sentinel.esa.int/web/sentinel/toolboxes/sentinel-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentinel-1 toolbox"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("There are "),s("a",{attrs:{href:"/data-collections/?q=S1_GRD_SIGMA0_"}},[t._v("two collections")]),t._v(" available at this back-end right now:\n"),s("code",[t._v("S1_GRD_SIGMA0_ASCENDING")]),t._v(" and "),s("code",[t._v("S1_GRD_SIGMA0_DESCENDING")]),t._v(". Below is an example for one of them:")]),t._v(" "),s("CodeSwitcher",{scopedSlots:t._u([{key:"py",fn:function(){return[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("datacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'S1_GRD_SIGMA0_ASCENDING'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    spatial_extent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'west'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.59003")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'east'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.8949")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'south'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.069")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'north'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.2206")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    temporal_extent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sar_backscatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute_batch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GTiff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download_files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sar-nrb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0},{key:"js",fn:function(){return[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" builder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildProcess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" datacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load_collection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'S1_GRD_SIGMA0_ASCENDING'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("west")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.59003")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("east")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.8949")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("south")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.069")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("north")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.2206")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndatacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sar_backscatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save_result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GTiff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createJob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Backscatter for Sentinel-1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),s("h3",{attrs:{id:"card4l-nrb-for-sentinel1-grd-collection-provided-by-sentinel-hub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#card4l-nrb-for-sentinel1-grd-collection-provided-by-sentinel-hub"}},[t._v("#")]),t._v(" CARD4L NRB for "),s("code",[t._v("SENTINEL1_GRD")]),t._v(" collection (provided by Sentinel Hub)")]),t._v(" "),s("p",[t._v("When working with the Sentinel Hub based "),s("a",{attrs:{href:"/data-collections/?q=SENTINEL1_GRD"}},[s("code",[t._v("SENTINEL1_GRD")]),t._v(" collection")]),t._v(", both SAR backscatter processes can be used.\nThe underlying implementation is provided by\n"),s("a",{attrs:{href:"https://docs.sentinel-hub.com/api/latest/data/sentinel-1-grd/#processing-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sentinel Hub"),s("OutboundLink")],1),t._v(", and offers full CARD4L compliant processing options.")]),t._v(" "),s("CodeSwitcher",{scopedSlots:t._u([{key:"py",fn:function(){return[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("datacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SENTINEL1_GRD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    spatial_extent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'west'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.59003")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'east'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.8949")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'south'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.069")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'north'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.2206")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    temporal_extent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bands "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VH'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VV'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ard_normalized_radar_backscatter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njob "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute_batch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GTiff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("download_files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sar-nrb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]},proxy:!0},{key:"js",fn:function(){return[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" builder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildProcess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" datacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load_collection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SENTINEL1_GRD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("west")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.59003")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("east")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.8949")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("south")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.069")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("north")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51.2206")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-10-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VH'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VV'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndatacube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ard_normalized_radar_backscatter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save_result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datacube"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GTiff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createJob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Backscatter for Sentinel-1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]},proxy:!0}])}),t._v(" "),s("h3",{attrs:{id:"orfeo-for-other-grd-collections-provided-by-vito-terrascope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#orfeo-for-other-grd-collections-provided-by-vito-terrascope"}},[t._v("#")]),t._v(" Orfeo for other GRD collections (provided by VITO / TerraScope)")]),t._v(" "),s("p",[t._v("When working with other GRD data, an "),s("a",{attrs:{href:"https://github.com/Open-EO/openeo-geopyspark-driver/blob/master/openeogeotrellis/collections/s1backscatter_orfeo.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("implementation"),s("OutboundLink")],1),t._v(" based on "),s("a",{attrs:{href:"https://www.orfeo-toolbox.org/CookBook/Applications/app_SARCalibration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Orfeo Toolbox"),s("OutboundLink")],1),t._v(" is used.")]),t._v(" "),s("p",[t._v("The Orfeo implementation currently only supports sigma0 computation, and is "),s("strong",[t._v("not CARD4L compliant")]),t._v(".")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);
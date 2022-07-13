(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{305:function(t,e,a){t.exports=a.p+"assets/img/federation.668f395b.png"},477:function(t,e,a){"use strict";a.r(e);var s=a(4),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"federation-aspects-and-known-issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#federation-aspects-and-known-issues"}},[t._v("#")]),t._v(" Federation Aspects and Known Issues")]),t._v(" "),e("p",[t._v("openEO Platform is a federated platform. This means that multiple independent 'back-ends',\nwhich all support the openEO interface, are combined into a single instance. From the outside,\nit appears to be a single platform, but you get access to data collections and processing resources from\nmultiple instances.")]),t._v(" "),e("p",[t._v("This image gives you a look at platforms that make up the federation:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(305),alt:"openeo.cloud federation"}})]),t._v(" "),e("p",[t._v("At this time, the federation can not yet entirely hide the fact that it is built out of\nseparate components:")]),t._v(" "),e("ul",[e("li",[t._v("Within the same processing request, you can only use collections from the same back-end")]),t._v(" "),e("li",[t._v("Some processes are not (fully) supported by all back-ends.")]),t._v(" "),e("li",[t._v("If a back-end requires data from an external source, bandwidth limitations may result in slower processing.")])]),t._v(" "),e("h2",{attrs:{id:"data-collections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-collections"}},[t._v("#")]),t._v(" Data Collections")]),t._v(" "),e("p",[t._v("The federation exposes the "),e("em",[t._v("union")]),t._v(" of the data collections of each of the underlying back-ends.\nWhen a processing request is submitted to the federated platform, the input collections are used to determine to which back-end the actual processing work should be delegated to.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("For the technical discussion on collection federation, see "),e("a",{attrs:{href:"https://github.com/Open-EO/openeo-aggregator/issues/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open-EO/openeo-aggregator#5"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"terrascope"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terrascope"}},[t._v("#")]),t._v(" Terrascope")]),t._v(" "),e("p",[t._v("Terrascope hosts a number of collections itself.\nFor coarse resolution data (e.g. 100 m resolution) this is often the full archive,\nwhile for medium resolution (Sentinel 1, 2) data is only offered for selected areas.")]),t._v(" "),e("p",[t._v("Additional data can be processed upon request, if it is not available from another provider.\nThis may result in an additional cost for processing and storage.")]),t._v(" "),e("h3",{attrs:{id:"sentinelhub"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sentinelhub"}},[t._v("#")]),t._v(" SentinelHub")]),t._v(" "),e("p",[t._v("The Terrascope back-end also integrates with SentinelHub (part of Euro Data Cube) to give you\naccess to additional collections.\nThis practically means that data needs to be transferred from SentinelHub to the Terrascope data center before it can be processed.\nThis works very well for small areas, or a 100x100km MGRS tile in batch mode,\nbut is not yet recommended for processing medium size to large countries or continents.")]),t._v(" "),e("p",[t._v("The collection metadata of the Terrascope back-end tries to clearly identify which collections are served by SentinelHub.")]),t._v(" "),e("h4",{attrs:{id:"commercial-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commercial-data"}},[t._v("#")]),t._v(" Commercial Data")]),t._v(" "),e("p",[t._v("openEO Platform provides direct access to commercial data. Currently, data must be purchased directly through Sentinel Hub (see Sentinel Hub documentation on purchasing commercial data "),e("a",{attrs:{href:"https://docs.sentinel-hub.com/api/latest/api/data-import/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v("), but we are working to support ordering commercial data directly from the platform in the future.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Experimental usage")]),t._v(" "),e("p",[t._v("The below described way of how to connect to commercial data is currently only supported by the pyhton client and experimental. As such the behavior might still change in the future.")])]),t._v(" "),e("p",[t._v("Data is accessed as part of the load_collection process and via a "),e("code",[t._v("featureflags")]),t._v(" argument. To access the data, you must:")]),t._v(" "),e("ul",[e("li",[t._v("select the commercial data provider in "),e("code",[t._v("collection_id")]),t._v(" (e.g. "),e("code",[t._v('collection_id="PLANETSCOPE"')]),t._v(")")]),t._v(" "),e("li",[t._v("set the Sentinel Hub BYOC collection ID ("),e("code",[t._v("byoc-{id}")]),t._v(") as "),e("code",[t._v("featureflags")]),t._v(" argument (e.g. "),e("code",[t._v("datacube._pg.arguments['featureflags'] = {'byoc_collection_id': byoc_collection_id}")]),t._v(")")])]),t._v(" "),e("p",[t._v("Full example of loading a commercial data collection:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("toc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_collection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    collection_id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PLANETSCOPE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    spatial_extent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"west"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("104.86")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"south"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.85")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"east"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("106.11")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"north"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.37")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    temporal_extent"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-03-01"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-12-31"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bands"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntoc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_pg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arguments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'featureflags'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'byoc_collection_id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" byoc_collection_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("List of currently supported commercial data providers:")]),t._v(" "),e("ul",[e("li",[t._v("PlanetScope (ID: "),e("a",{attrs:{href:"https://openeo.cloud/data-collections/view/?id=PLANETSCOPE",target:"_blank",rel:"noopener noreferrer"}},[t._v("PLANETSCOPE"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),e("h3",{attrs:{id:"eodc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eodc"}},[t._v("#")]),t._v(" EODC")]),t._v(" "),e("p",[t._v("EODC provides Sentinel-1 (GRH), Sentinel-2 and Sentinel-3 Level-1 globally. On top, pre-processed Level-2 data is\navailable on request (this may result in additional costs). In detail Gamma0 data processed with SNAP and optical ARD\nproducts processed with FORCE are provided.")]),t._v(" "),e("p",[t._v("If the available pre-processed collections are not sufficient, there is on option to perform ARD processing on demand\nwith SNAP respectively FORCE. This may again result in additional costs for processing and storage.")]),t._v(" "),e("p",[t._v("Currently most processes are only available for Level-2 data. Only the ARD processes can be executed on Level-1 data. Also\nonly either ARD processes "),e("strong",[t._v("or")]),t._v(' "standard" processes can be used in one process graph. Combining both types of processes\nis not yet supported. One option to nevertheless achieve a combination of process types is to run ARD on Level-1 data,\nsave the results of the job, and then in a second job load results and perform additional computations.')]),t._v(" "),e("h2",{attrs:{id:"processes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#processes"}},[t._v("#")]),t._v(" Processes")]),t._v(" "),e("p",[t._v("Each of the underlying back-ends of the federation can define its own set of available processes,\nbut there is in practice a very large common ground across these back-ends.\nAs such, the federation's listing of available processes is the "),e("em",[t._v("intersection")]),t._v("\nof the process sets of each of the underlying back-ends.\nThis is the most straightforward combination with the least surprise.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Advanced/experimental usage")]),t._v(" "),e("p",[t._v("A savvy user that knows which underlying back-end will execute their job\ncan however still submit process graphs with processes that are available\non that back-end but fall outside the intersection,\nas the federation will just forward the process graph as-is to that back-end.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("For the technical discussion on process federation, see "),e("a",{attrs:{href:"https://github.com/Open-EO/openeo-aggregator/issues/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open-EO/openeo-aggregator#4"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"file-formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#file-formats"}},[t._v("#")]),t._v(" File formats")]),t._v(" "),e("p",[t._v("The federation currently lists the "),e("em",[t._v("union")]),t._v(" of import/export file formats available\nat each of the underlying back-ends.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("For the technical discussion on file format federation, see "),e("a",{attrs:{href:"https://github.com/Open-EO/openeo-aggregator/issues/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open-EO/openeo-aggregator#1"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"registration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[t._v("#")]),t._v(" Registration")]),t._v(" "),e("p",[t._v("Due to the federated nature of openEO Platform,\nyou may still want to register with an individual service provider,\nfor example to get direct support or better resource prioritization.\nThis depends on which "),e("RouterLink",{attrs:{to:"/data-collections/"}},[t._v("data sets")]),t._v(" and "),e("RouterLink",{attrs:{to:"/processes/"}},[t._v("processes")]),t._v(" you need to use.")],1),t._v(" "),e("h3",{attrs:{id:"terrascope-registration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terrascope-registration"}},[t._v("#")]),t._v(" Terrascope Registration")]),t._v(" "),e("p",[t._v("If you plan to use any "),e("RouterLink",{attrs:{to:"/data-collections/"}},[t._v("data set")]),t._v(" that is "),e("em",[t._v("'provided by Terrascope'")]),t._v(" or "),e("em",[t._v("'provided by SentinelHub'")]),t._v(",\nyou can follow the steps below to set up a "),e("em",[t._v("Terrascope account")]),t._v(",\nwhich helps to prioritize and speed up the processing requests.")],1),t._v(" "),e("p",[t._v("Luckily, Terrascope also uses the EGI check-in as authentication service,\nso you can quickly use your existing EGI account from the\n"),e("RouterLink",{attrs:{to:"/join/free_tier.html"}},[t._v("Free Tier")]),t._v(" or the "),e("RouterLink",{attrs:{to:"/join/early_adopter.html"}},[t._v("Early Adopter program")]),t._v("\nto bootstrap a new Terrascope account.")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("If you already have an existing Terrascope account, you can also link your EGI account to it,\nwhich should happen automatically (based on a common email address) if you follow the procedure below.")])]),t._v(" "),e("p",[t._v("Go to the "),e("a",{attrs:{href:"https://terrascope.be",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terrascope portal"),e("OutboundLink")],1),t._v(" to set up the Terrascope account,\nclick the '"),e("em",[t._v("sign in")]),t._v("' menu item at the top, and pick the "),e("em",[t._v("'EduGAIN and social logins'")]),t._v(" to log in.\nAfter a one-time registration process, you should have access to all Terrascope services\nusing your institution or (social) platform credentials.")]),t._v(" "),e("h2",{attrs:{id:"batch-jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#batch-jobs"}},[t._v("#")]),t._v(" Batch jobs")]),t._v(" "),e("p",[t._v("As discussed above, when the federated platform receives a processing request, such as a batch job,\nit will automatically determine to which back-end this request should be delegated for actual processing.")]),t._v(" "),e("h3",{attrs:{id:"managed-job-splitting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#managed-job-splitting"}},[t._v("#")]),t._v(" Managed job splitting")]),t._v(" "),e("p",[t._v("In addition to this basic delegation feature, the federation also provides more advanced (pre)processing capabilities.\nFor instance, the federation platform can be instructed to split up a single batch job in multiple sub-jobs\nand distribute these across one or more processing back-ends.\nThe federation platform will automatically create, start and keep track of these sub-jobs\nwhile the user just have to interact with a single job: e.g. check the overall processing status,\ndownload the combined result assets, ...")]),t._v(" "),e("p",[t._v("Currently, spatial tile-based splitting is supported as splitting strategy\nand it can be enabled by providing a specific job option when submitting the batch job.\nFor example, using the openEO Python Client, instruct the federation platform to\nsplit up datacube processing in UTM based tiles of 20km by 20km:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("job "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_job"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    job_options"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tile_grid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utm-20km"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v('This creates a virtual master job on the level of the federation platform and real batch jobs\non the appropriate processing back-ends.\nSubsequent interaction (starting the jobs, polling their status, requesting the result assets, ...)\ncan be done through the "master" '),e("code",[t._v("job")]),t._v(" object created above, in the same way as with normal batch jobs.")])])}),[],!1,null,null,null);e.default=o.exports}}]);
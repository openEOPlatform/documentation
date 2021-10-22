(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{297:function(e,t,s){e.exports=s.p+"assets/img/federation.3d70dbbc.png"},465:function(e,t,s){"use strict";s.r(t);var o=s(4),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"federation-aspects-amd-known-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#federation-aspects-amd-known-issues"}},[e._v("#")]),e._v(" Federation Aspects amd Known Issues")]),e._v(" "),o("p",[e._v("openEO Platform is a federated platform. This means that multiple independent 'back-ends',\nwhich all support the openEO interface, are combined into a single instance. From the outside,\nit appears to be a single platform, but you get access to data collections and processing resources from\nmultiple instances.")]),e._v(" "),o("p",[e._v("This image gives you a look at platforms that make up the federation:")]),e._v(" "),o("p",[o("img",{attrs:{src:s(297),alt:"openeo.cloud federation"}})]),e._v(" "),o("p",[e._v("At this time, the federation can not yet entirely hide the fact that it is built out of\nseparate components:")]),e._v(" "),o("ul",[o("li",[e._v("Within the same processing request, you can only use collections from the same back-end")]),e._v(" "),o("li",[e._v("Some processes are not (fully) supported on all back-ends.")]),e._v(" "),o("li",[e._v("When a back-end requires data from an external source, bandwidth limitations may result in slower processing.")])]),e._v(" "),o("h2",{attrs:{id:"data-collections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-collections"}},[e._v("#")]),e._v(" Data Collections")]),e._v(" "),o("p",[e._v("The federation exposes the "),o("em",[e._v("union")]),e._v(" of the data collections of each of the underlying back-ends.\nWhen a processing request is submitted to the federated platform,\nthe input collections are used to determine to which back-end\nthe actual processing work should be delegated to.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("For the technical discussion on collection federation, see "),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-aggregator/issues/5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open-EO/openeo-aggregator#5"),o("OutboundLink")],1)])]),e._v(" "),o("h3",{attrs:{id:"terrascope"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#terrascope"}},[e._v("#")]),e._v(" Terrascope")]),e._v(" "),o("p",[e._v("Terrascope hosts a number of collections itself.\nFor coarse resolution data (e.g. 100m resolution), this is often the full archive,\nwhile for medium resolution (Sentinel 1, 2) data is only offered for selected areas.")]),e._v(" "),o("p",[e._v("Additional data can be processed upon request, if it is not available from another provider.\nThis may result in an additional cost for processing and storage.")]),e._v(" "),o("h3",{attrs:{id:"sentinelhub"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sentinelhub"}},[e._v("#")]),e._v(" SentinelHub")]),e._v(" "),o("p",[e._v("The Terrascope back-end also integrates with SentinelHub (part of Euro Data Cube) to give you\naccess to additional collections.\nThis practically means that data needs to be transferred from SentinelHub to the Terrascope data center before it can be processed.\nThis works very well for small areas, or a 100x100km MGRS tile in batch mode,\nbut is not yet recommended for processing medium size to large countries or continents.")]),e._v(" "),o("p",[e._v("The collection metadata of the Terrascope back-end tries to clearly identify which collections are served by SentinelHub.")]),e._v(" "),o("h3",{attrs:{id:"eodc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eodc"}},[e._v("#")]),e._v(" EODC")]),e._v(" "),o("p",[e._v("EODC provides Sentinel-1 (GRH), Sentinel-2 and Sentinel-3 Level-1 globally. On top, pre-processed Level-2 data is\navailable on request (this may result in additional costs). In detail Gamma0 data processed with SNAP and optical ARD\nproducts processed with FORCE are provided.")]),e._v(" "),o("p",[e._v("If available pre-processed collections are not sufficient, there is the possibility to perform ARD processing on demand\nwith SNAP respectively FORCE. This may again result in additional costs for processing and storage.")]),e._v(" "),o("p",[e._v("Currently most processes are only available for Level-2 data. Only the ARD processes can be executed on Level-1 data. Also\nonly either ARD processes "),o("strong",[e._v("or")]),e._v(' "standard" processes can be used in one process graph. Combining both types of processes\nis not yet supported. One option to nevertheless achieve a combination of process types is to run ARD on Level-1 data\nsave the results of the job, and then in a second job load results and perform additional computations.')]),e._v(" "),o("h2",{attrs:{id:"processes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#processes"}},[e._v("#")]),e._v(" Processes")]),e._v(" "),o("p",[e._v("Each of the underlying back-end of the federation can define its own set of available processes,\nbut there is in practice a very large common ground across these back-ends.\nAs such, the federation's listing of available processes is the "),o("em",[e._v("intersection")]),e._v("\nof the process sets of each of the underlying back-ends.\nThis is the most straightforward combination with the least surprise.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Advanced/experimental usage")]),e._v(" "),o("p",[e._v("A savvy user that knows which underlying back-end will execute their job\ncan however still submit process graphs with processes that are available\non that back-end but fall outside the intersection,\nas the federation will just forward the process graph as-is to that back-end.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("For the technical discussion on process federation, see "),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-aggregator/issues/4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open-EO/openeo-aggregator#4"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"file-formats"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#file-formats"}},[e._v("#")]),e._v(" File formats")]),e._v(" "),o("p",[e._v("The federation currently lists the "),o("em",[e._v("union")]),e._v(" of import/export file formats available\nat each of the underlying back-ends.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("For the technical discussion on file format federation, see "),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-aggregator/issues/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open-EO/openeo-aggregator#1"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"registration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[e._v("#")]),e._v(" Registration")]),e._v(" "),o("p",[e._v("Due to the federated nature of openEO Platform,\nyou may still want to register with an individual service provider,\nfor example to get direct support or better resource prioritization.\nThis depends on which "),o("RouterLink",{attrs:{to:"/data-collections/"}},[e._v("data sets")]),e._v(" and "),o("RouterLink",{attrs:{to:"/processes/"}},[e._v("processes")]),e._v(" you need to use.")],1),e._v(" "),o("h3",{attrs:{id:"terrascope-registration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#terrascope-registration"}},[e._v("#")]),e._v(" Terrascope Registration")]),e._v(" "),o("p",[e._v("If you plan to use any "),o("RouterLink",{attrs:{to:"/data-collections/"}},[e._v("data set")]),e._v(" that is "),o("em",[e._v("'provided by Terrascope'")]),e._v(" or "),o("em",[e._v("'provided by SentinelHub'")]),e._v(",\nyou can follow the steps below to set up a "),o("em",[e._v("Terrascope account")]),e._v(",\nwhich helps to prioritize and speed up the processing requests.")],1),e._v(" "),o("p",[e._v("Luckily, Terrascope also uses the EGI check-in as authentication service,\nso you can quickly use your "),o("RouterLink",{attrs:{to:"/authentication/"}},[e._v("existing EGI account")]),e._v("\nto bootstrap a new Terrascope account.")],1),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("If you already have an existing Terrascope account, you can also link your EGI account to it,\nwhich should happen automatically (based on a common email address) if you follow the procedure below.")])]),e._v(" "),o("p",[e._v("Go to the "),o("a",{attrs:{href:"https://terrascope.be",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terrascope portal"),o("OutboundLink")],1),e._v(" to set up the Terrascope account,\nclick the '"),o("em",[e._v("sign in")]),e._v("' menu item at the top, and pick the "),o("em",[e._v("'EduGAIN and social logins'")]),e._v(" to log in.\nAfter a one time registration process you should have access to all Terrascope services\nusing your institution or (social) platform credentials.")])])}),[],!1,null,null,null);t.default=a.exports}}]);
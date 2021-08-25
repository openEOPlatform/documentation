(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{456:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"r-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#r-client"}},[t._v("#")]),t._v(" R Client")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Before you install the R client module into your R environment, please make sure that you have at least R version 3.6. Older versions might also work, but were not tested.")]),t._v(" "),a("p",[t._v("Stable releases can be installed from the master branch or one of the releases of the "),a("a",{attrs:{href:"https://github.com/Open-EO/openeo-r-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github repository"),a("OutboundLink")],1),t._v(" using "),a("code",[t._v("install_github")]),t._v(" from the devtools package using the following command:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("devtools"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("install_github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Open-EO/openeo-r-client"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("TRUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Please make sure to have the package 'devtools' installed. If it is not installed use "),a("code",[t._v('install.packages("devtools")')]),t._v(".")])]),t._v(" "),a("p",[t._v("If you want to install the development version, please use the "),a("code",[t._v('ref="develop"')]),t._v(" in the prior installation command.\nIt may contain more features, but may also be unstable.")]),t._v(" "),a("p",[t._v("If this gives you an error, something went wrong with the installation so please check the requirements again.")]),t._v(" "),a("p",[t._v("If you have still troubles installing the package, feel free to leave an issue at the "),a("a",{attrs:{href:"https://github.com/Open-EO/openeo-r-client/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub project"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Now that the installation was successfully finished, we can load the package and connect to openEO compliant back-ends.\nIn the following chapters we quickly walk through the main features of the R client.")]),t._v(" "),a("h2",{attrs:{id:"connecting-to-openeo-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-openeo-platform"}},[t._v("#")]),t._v(" Connecting to openEO Platform")]),t._v(" "),a("p",[t._v("First we need to establish a connection to the openEO Platform back-end, which is available at "),a("code",[t._v("https://openeo.cloud")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("library"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("openeo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://openeo.cloud"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The object stored as variable "),a("code",[t._v("con")]),t._v(" is a connection and resembles the "),a("code",[t._v("OpenEOClient")]),t._v(" - an object, that bundles all information and functions to interact with the back-end. It can be used explicitly in all of the functions to determine which connection has to be used (usually parameter "),a("code",[t._v("con")]),t._v("). If only one connection is active, then you can omit the parameter, because the last active connection is always stored in a package environment and used if no specific connection was present (see "),a("code",[t._v("?active_connection")]),t._v(" in the package documentation).")]),t._v(" "),a("p",[t._v("The capabilities of the back-end and the collections are generally publicly available, unless the data collections are proprietary and licensing issues prevent the back-end provider from publishing the collection. For the publicly available information you do not need to have an account on the back-end for reading them.")]),t._v(" "),a("h3",{attrs:{id:"collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collections"}},[t._v("#")]),t._v(" Collections")]),t._v(" "),a("p",[t._v("Collections represent the basic data the back-end provides (e.g. Sentinel 1 collection) and are therefore often used as input data for job executions ("),a("a",{attrs:{href:"https://openeo.org/documentation/1.0/glossary.html#eo-data-collections",target:"_blank",rel:"noopener noreferrer"}},[t._v("more info on collections"),a("OutboundLink")],1),t._v(").\nWith the following code snippet you can get all available collection names and their description. The collection list and its entries have their own implementations of the "),a("code",[t._v("print")]),t._v(" function. The collection list object is coerced into a "),a("code",[t._v("data.frame")]),t._v(" only for printing purposes and the collection for the collection some key information are printed.")]),t._v(" "),a("p",[t._v("To get the collection list can be indexed by the collections ID to get the more details about the overview information. With the "),a("code",[t._v("describe_collection")]),t._v(" function you can get an even more detailed information about the collection.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# get the collection list")]),t._v("\ncollections "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list_collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print an overview of the available collections (printed as data.frame or tibble)")]),t._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# to print more of the reduced overview metadata")]),t._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("collections"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("SENTINEL1_GRD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Dictionary of the full metadata of the "SENTINEL1_GRD" collection (dict)')]),t._v("\ns2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" describe_collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SENTINEL1_GRD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or use the collection entry from the list, e.g. collections$SENTINEL1_GRD")]),t._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("In general all metadata objects are based on lists, so you can use "),a("code",[t._v("str()")]),t._v(" to get the structure of the list and address fields by the "),a("code",[t._v("$")]),t._v(" operator.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If the package is used with RStudio the metadata can also be nicely rendered as a web page in the viewer panel by running "),a("code",[t._v('collection_viewer(x="SENTINEL1_GRD")')]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"processes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#processes"}},[t._v("#")]),t._v(" Processes")]),t._v(" "),a("p",[t._v("Processes in openEO are tasks that can be applied to (EO) data.\nThe input of a process might be the output of another process, so that several connected processes form a new (user-defined) process itself.\nTherefore, a process resembles the smallest unit of task descriptions in openEO ("),a("a",{attrs:{href:"https://openeo.org/documentation/1.0/glossary.html#processes",target:"_blank",rel:"noopener noreferrer"}},[t._v("more details on processes"),a("OutboundLink")],1),t._v(").\nThe following code snippet shows how to get the available processes.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# List of available openEO processes with full metadata")]),t._v("\nprocesses "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list_processes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# List of available openEO processes by identifiers (string)")]),t._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("processes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# print metadata of the process with ID "load_collection"')]),t._v("\nprint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("processes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("load_collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("list_processes()")]),t._v(" method returns a list of process metadata objects that the back-end provides.\nEach process list entry is a more complex list object (called 'ProcessInfo') and contains the process identifier and additional metadata about the process, such as expected arguments and return types.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("As for the collection, processes can also be rendered as a web page in the viewer panel, if RStudio is used. In order to open the viewer use "),a("code",[t._v("process_viewer()")]),t._v(" with either a particular process ("),a("code",[t._v('process_viewer("load_collection")')]),t._v(") or you can pass on all processes ("),a("code",[t._v("process_viewer(processes)")]),t._v("). When all processes are chosen, there is also a search bar and a category tree.")])]),t._v(" "),a("p",[t._v("For other graphical overviews of the openEO processes, there is an "),a("RouterLink",{attrs:{to:"/getting-started/processes.html"}},[t._v("online documentation")]),t._v(" for general process descriptions and the "),a("a",{attrs:{href:"https://hub.openeo.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("openEO Hub"),a("OutboundLink")],1),t._v(" for back-end specific process descriptions.")],1),t._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")]),t._v(" "),a("p",[t._v("TODO (WWU/EURAC)")]),t._v(" "),a("p",[t._v("In the code snippets above, authentication is usually not necessary, since we only fetch general information about the back-end.\nTo run your own jobs at the back-end or to access job results, you need to authenticate at the back-end.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://openid.net/connect/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenID Connect (OIDC)"),a("OutboundLink")],1),t._v(" authentication can be used to authenticate with openEO Platform.")]),t._v(" "),a("p",[t._v("The following code snippet shows how to log in via OIDC authentication:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Action required")]),t._v(" "),a("p",[a("strong",[t._v("Unfortunately, you need to request a "),a("em",[t._v("Client ID")]),t._v(" and a "),a("em",[t._v("Client Secret")]),t._v(" for this from the openEO Platform support due to the R client not being officially supported by openEO Platform!")]),t._v("\nOnce you have received the "),a("em",[t._v("Client ID")]),t._v(" and a "),a("em",[t._v("Client Secret")]),t._v(", you can can continue with the instructions below.")])]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# get supported OIDC providers which the back-end supports")]),t._v("\noidc_providers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list_oidc_providers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nlogin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("login_type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oidc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oidc_providers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("some_provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        client_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        secret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Calling this method opens your system web browser, with which you can authenticate yourself on the back-end authentication system.\nAfter that the website will give you the instructions to go back to the python client, where your connection has logged your account in.\nThis means, that every call that comes after that via the connection variable is executed by your user account.")]),t._v(" "),a("p",[t._v("As OpenID Connect authentication is a bit more complex and depends on the environment your are using it in, please refer to the general "),a("RouterLink",{attrs:{to:"/authentication/"}},[t._v("Authentication documentation for openEO Platform")]),t._v(" for more information.")],1),t._v(" "),a("h2",{attrs:{id:"creating-a-user-defined-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-user-defined-process"}},[t._v("#")]),t._v(" Creating a (user-defined) process")]),t._v(" "),a("p",[t._v("Now that we know how to discover the back-end and how to authenticate, lets continue by creating a new batch job to process some data.")]),t._v(" "),a("p",[t._v("First we need to create a process builder object that carries all the available predefined openEO processes of the connected back-end as attached R functions with the parameters stated in the process metadata.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" processes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The functions of the builder return process nodes, which represent a particular result in the workflow. As one of the first steps we need to select the source data collection.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("datacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("load_collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SENTINEL1_GRD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  spatial_extent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("west "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.06")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" south "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.06")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" east "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" north "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  temporal_extent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-03-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-04-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VV"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("This results in a process node that represents a "),a("a",{attrs:{href:"https://openeo.org/documentation/1.0/glossary.html#spatial-datacubes",target:"_blank",rel:"noopener noreferrer"}},[t._v("datacube"),a("OutboundLink")],1),t._v(' and contains the "SENTINEL1_GRD" data restricted to the given spatial extent, the given temporal extent and the given bands .')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can also filter the datacube at a later stage by using the following filter methods:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("datacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("load_collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SENTINEL1_GRD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("filter_bbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" extent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("west"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.06")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" south"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.06")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" east"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" north"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("filter_temporal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("extent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-03-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2017-04-01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndatacube "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("filter_bands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VV"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Still, it is recommended to always use the filters in "),a("code",[t._v("load_collection")]),t._v(" to avoid loading too much data upfront.")])]),t._v(" "),a("p",[t._v("Having the input data ready, we want to apply a process on the datacube.\nTherefore, we can call the process directly on the datacube object, which then returns a datacube with the process applied.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("min_reducer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  return"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nreduced "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("reduce_dimension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datacube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reducer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" min_reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dimension"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The datacube is now reduced by the time dimension named "),a("code",[t._v("t")]),t._v(', by taking the minimum value of the timeseries values. Now the datacube has no time dimension left. Other so called "reducer" processes exist, e.g. for computing maximum and mean values.')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Everything applied to the datacube at this point is neither executed locally on your machine nor executed on the back-end.\nIt just defines the input data and process chain the back-end needs to apply when it sends the datacube to the back-end and executes it there.\nHow this can be done is the topic of the next chapter.")])]),t._v(" "),a("p",[t._v("After applying all processes you want to execute, we need to tell the back-end to export the datacube, for example as GeoTiff:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("formats "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list_file_formats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("save_result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reduced"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" formats"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("`GTIFF"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ZIP`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The first line retrieves the back-ends offered input and output formats. The second line creates the result node, which stores the data as a zipped GeoTiff.")]),t._v(" "),a("h2",{attrs:{id:"batch-job-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-job-management"}},[t._v("#")]),t._v(" Batch Job Management")]),t._v(" "),a("p",[t._v("After you have finished working on your (user-defined) process, we can now send it to the back-end and start the execution.\nIn openEO, an execution of a (user-defined) process is called a "),a("a",{attrs:{href:"https://openeo.org/documentation/1.0/glossary.html#data-processing-modes",target:"_blank",rel:"noopener noreferrer"}},[t._v("(batch) job"),a("OutboundLink")],1),t._v(".\nTherefore, we need to create a job at the back-end using our datacube, giving it the title "),a("code",[t._v("Example Title")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("job "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("graph"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("create_job")]),t._v(" method sends all necessary information to the back-end and creates a new job, which gets returned.\nAfter this, the job is just created, but has not started the execution at the back-end yet.\nIt needs to be queued for processing explicitly:")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("start_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("After the job was executed, status updates can be fetched by using the "),a("code",[t._v("list_jobs()")]),t._v(" function. This function returns a list of job descriptions, which can be indexed with the jobs ID to limit the search results. But remember that only "),a("code",[t._v("list_jobs()")]),t._v(" refreshes this list. So, to monitor a job you have to iteratively call the job ("),a("code",[t._v("describe_job()")]),t._v(") or the job list "),a("code",[t._v("list_jobs()")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("jobs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list_jobs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njobs "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# printed as a tibble or data.frame, but the object is a list")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or use the job id (in this example 'cZ2ND0Z5nhBFNQFq') as index to get a particular job overview")]),t._v("\njobs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("cZ2ND0Z5nhBFNQFq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# alternatively request detailed information about the job")]),t._v("\ndescribe_job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("When the job is finished, calling "),a("code",[t._v("download_results()")]),t._v(" will download the results of a job. Using "),a("code",[t._v("list_results()")]),t._v(" will return an overview about the created files and their download link or it states the error message, in case of an error.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# list the processed results")]),t._v("\nlist_results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# download all the files into a folder on the file system")]),t._v("\ndownload_results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" folder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/some/folder/on/filesystem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The printing behavior and the actual data structure might differ!")])]),t._v(" "),a("h2",{attrs:{id:"additional-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[t._v("#")]),t._v(" Additional Information")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Open-EO/openeo-r-client/tree/master/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Examples"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Open-EO/openeo-r-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Repository"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("for function documentation, use R's "),a("code",[t._v("?")]),t._v(" function")])])])}),[],!1,null,null,null);e.default=n.exports}}]);
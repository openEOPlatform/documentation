(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{475:function(e,t,o){"use strict";o.r(t);var a=o(4),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"collections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collections"}},[e._v("#")]),e._v(" Collections")]),e._v(" "),t("p",[e._v("This page describes requirements on STAC collection metadata for backend providers in the openEO platform federation. These requirements should be considered an addition to what is already required by the "),t("a",{attrs:{href:"https://api.openeo.org/#tag/EO-Data-Discovery/operation/describe-collection",target:"_blank",rel:"noopener noreferrer"}},[e._v("openEO API"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("When back-ends offer/mirror the same datasets, it is required to align names and metadata. For the following collections and metadata an agreement has been achieved. These are all Copernicus Missions, and the standard names refer to the archives prepared and distributed by ESA. If it is not possible/desirable to use this name as collection id, a 'common_name' can be added next to the 'id' property to identify the collection as a standard archive.")]),e._v(" "),t("ul",[t("li",[e._v("SENTINEL1_GRD")]),e._v(" "),t("li",[e._v("SENTINEL2_L1C")]),e._v(" "),t("li",[t("a",{attrs:{href:"#sentinel2-l2a"}},[e._v("SENTINEL2_L2A")])]),e._v(" "),t("li",[e._v("SENTINEL3_OLCI_L1B")])]),e._v(" "),t("h2",{attrs:{id:"common-naming-convention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-naming-convention"}},[e._v("#")]),e._v(" Common naming convention")]),e._v(" "),t("p",[e._v("In order to achieve a uniform structure for all collections on the platform and thus make it easier for users to navigate between collections, it is recommended to follow the common naming convention*:")]),e._v(" "),t("ul",[t("li",[e._v('Names should be written in capital letters ("all caps")')]),e._v(" "),t("li",[e._v("Names should consist of a combination of different optional attributes (see table)")]),e._v(" "),t("li",[e._v("The different attributes should be separated by an underscore")])]),e._v(" "),t("p",[e._v("Very roughly speaking, collections can be divided into two groups (in reality it is more of a spectrum with all gradations in between):")]),e._v(" "),t("ul",[t("li",[e._v("collections containing raw data (or processing levels of that data) measured directly by a satellite (or an other measurement platform) and often distributed by the platform operator (e.g., ESA)")]),e._v(" "),t("li",[e._v("derived collections, which are based on (pre-processed) raw data that has been processed to create a collection with a specific purpose (e.g., a land cover map) and are often distributed by the institution (or a service of an institution) that created the collection")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Attribute")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Examples")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Provider")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("Often used for derived collections produced or order by the listed provider.")]),e._v(" "),t("td",[t("code",[e._v("ESA")]),e._v(", "),t("code",[e._v("CNSE")]),e._v(", "),t("code",[e._v("EMODNET")]),e._v(", "),t("code",[e._v("TERRASCOPE")]),e._v(". "),t("code",[e._v("CAMS")]),e._v(", "),t("code",[e._v("CGLS")])])]),e._v(" "),t("tr",[t("td",[e._v("Satellite/Platform")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("Name of the satellite/platform that acquired the data in the collection.")]),e._v(" "),t("td",[t("code",[e._v("SENTINEL2")]),e._v(", "),t("code",[e._v("LANDSAT8")]),e._v(", "),t("code",[e._v("PALSAR2")])])]),e._v(" "),t("tr",[t("td",[e._v("Processing level")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("Name of the level to which the data was processed (often processed raw data).")]),e._v(" "),t("td",[t("code",[e._v("L2A")]),e._v(", "),t("code",[e._v("L3")]),e._v(", "),t("code",[e._v("L2_1")])])]),e._v(" "),t("tr",[t("td",[e._v("Version")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("Often used for derived collections that are produced in several versions.")]),e._v(" "),t("td",[t("code",[e._v("V1")]),e._v(", "),t("code",[e._v("V2")])])]),e._v(" "),t("tr",[t("td",[e._v("Resolution")]),e._v(" "),t("td",[e._v("string ("),t("code",[e._v("number + unit")]),e._v(" or "),t("code",[e._v("string")]),e._v(")")]),e._v(" "),t("td",[e._v("Usually added, if the resolution is of particular importance for the collection (e.g., novel product with this resolution) for the collection.")]),e._v(" "),t("td",[t("code",[e._v("10M")]),e._v(", "),t("code",[e._v("120M")]),e._v(", "),t("code",[e._v("EUROPE")]),e._v(", "),t("code",[e._v("GLOBAL")])])]),e._v(" "),t("tr",[t("td",[e._v("Product Description")]),e._v(" "),t("td",[e._v("string")]),e._v(" "),t("td",[e._v("Human readable description of the data within the collection. Can also be an abbreviation or acronym.")]),e._v(" "),t("td",[t("code",[e._v("LAND_COVER_MAP")]),e._v(", "),t("code",[e._v("WORLDCOVER")]),e._v(", "),t("code",[e._v("NDVI")]),e._v(", "),t("code",[e._v("LAI")])])]),e._v(" "),t("tr",[t("td",[e._v("Year")]),e._v(" "),t("td",[e._v("number")]),e._v(" "),t("td",[e._v("Often used for derived products that where updated in the specified year or created based on data of the specified year.")]),e._v(" "),t("td",[t("code",[e._v("2022")])])])])]),e._v(" "),t("p",[e._v("Collections containing raw data or processing levels of that data often use a combination of satellite/platform and processing level (e.g., "),t("code",[e._v("SENTINEL2_L1C")]),e._v(" ). Derived collections often use a combination of provider and product description (e.g., CNES_LAND_COVER_MAP).")]),e._v(" "),t("p",[e._v("*Some existing collections may not strictly follow this naming convention as they were added to the platform prior to this agreement.")]),e._v(" "),t("h2",{attrs:{id:"sentinel2-l2a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sentinel2-l2a"}},[e._v("#")]),e._v(" Sentinel2-L2A")]),e._v(" "),t("p",[e._v("The common name for this collection is 'SENTINEL2_L2A'. It refers to the L2A products generated by the Sen2Cor software, which can be configured to be compatible with the ESA generated products. Note that the products in the ESA archive were also processed with different versions of Sen2Cor, so it is not possible to specify a very specific version or configuration of the processing chain.")]),e._v(" "),t("h3",{attrs:{id:"bands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bands"}},[e._v("#")]),e._v(" Bands")]),e._v(" "),t("p",[e._v("Band names for spectral bands follow the Bxx naming convention used by ESA. For example: B01, B02, B03, B08, B8A, B12")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("SCL")]),e._v(" = the Sen2Cor scene classification band")]),e._v(" "),t("li",[t("code",[e._v("approximateViewAzimuth")]),e._v(" = collective term for the mean and accurate viewing azimuth angle. Depending on which backend is processing the data, the mean angle (for Sentinel Hub) or the accurate angle (for Terrascope) is used. If the accurate angle ("),t("code",[e._v("viewAzimuthAngles")]),e._v(") or the mean angle ("),t("code",[e._v("viewAzimuthMean")]),e._v(") is explicitly specified, the data is processed on the backend that holds the specified band.")]),e._v(" "),t("li",[t("code",[e._v("viewZenithMean")]),e._v(" = collective term for the mean and accurate viewing zenith angle. Depending on which backend is processing the data, the mean angle (for Sentinel Hub) or the accurate angle (for Terrascope) is used. If the accurate angle ("),t("code",[e._v("viewZenithMean")]),e._v(") or the mean angle ("),t("code",[e._v("viewZenithAngles")]),e._v(") is explicitly specified, the data is processed on the backend that holds those bands.")]),e._v(" "),t("li",[t("code",[e._v("sunAzimuthAngles")]),e._v("/"),t("code",[e._v("sunZenithAngles")]),e._v(" = collective term for the exact sun azimuth and sun zenith angle.")])]),e._v(" "),t("h2",{attrs:{id:"common-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-properties"}},[e._v("#")]),e._v(" Common Properties")]),e._v(" "),t("p",[e._v("We list here a set of common properties, that can be relevant for multiple collections. Collections are strongly encouraged to use these properties instead of using a different name for the same property.")]),e._v(" "),t("h3",{attrs:{id:"common"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[e._v("#")]),e._v(" Common")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/stac-extensions/sat#satorbit_state",target:"_blank",rel:"noopener noreferrer"}},[e._v("sat:orbit_state"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/stac-extensions/sat#satrelative_orbit",target:"_blank",rel:"noopener noreferrer"}},[e._v("sat:relative_orbit"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"optical-instruments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optical-instruments"}},[e._v("#")]),e._v(" Optical instruments")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/stac-extensions/eo#eocloud_cover",target:"_blank",rel:"noopener noreferrer"}},[e._v("eo:cloud_cover"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"sar-instruments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sar-instruments"}},[e._v("#")]),e._v(" SAR instruments")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/stac-extensions/sar#item-properties-or-asset-fields",target:"_blank",rel:"noopener noreferrer"}},[e._v("sar:instrument_mode"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);
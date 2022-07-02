(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{474:function(e,t,o){"use strict";o.r(t);var a=o(4),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"file-formats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-formats"}},[e._v("#")]),e._v(" File Formats")]),e._v(" "),t("p",[e._v("If back-ends offer/mirror the same file formats for both import and export, it is required to align them.\nFor file export through "),t("code",[e._v("save_result")]),e._v(" for example, the output parameters and the structure of the data that is written to storage needs to be defined.\nFor the following file formats an agreement has been achieved:")]),e._v(" "),t("ul",[t("li",[e._v("GeoTiff")]),e._v(" "),t("li",[e._v("netCDF")]),e._v(" "),t("li",[e._v("JSON")])]),e._v(" "),t("p",[e._v("The idea of these guidelines is to align with what the formats and corresponding toolchains support as much as possible.")]),e._v(" "),t("h2",{attrs:{id:"geotiff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geotiff"}},[e._v("#")]),e._v(" GeoTiff")]),e._v(" "),t("p",[e._v("Defaults:")]),e._v(" "),t("ul",[t("li",[e._v("One timestamp per geotiff, as geotiffs do not support multiple timestamps.")]),e._v(" "),t("li",[e._v("All datacube bands are stored in the same geotiff")]),e._v(" "),t("li",[e._v("The full spatial extent is written to the same geotiff")]),e._v(" "),t("li",[e._v("Cloud optimized")]),e._v(" "),t("li",[e._v("For ideal support in the Web Editor (and other tools), the following guide is recommended to be followed: "),t("a",{attrs:{href:"https://github.com/Open-EO/openeo-web-editor/blob/master/docs/geotiff.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Open-EO/openeo-web-editor/blob/master/docs/geotiff.md"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"netcdf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#netcdf"}},[e._v("#")]),e._v(" netCDF")]),e._v(" "),t("p",[e._v("Defaults:")]),e._v(" "),t("ul",[t("li",[e._v("The full datacube is written to a single netCDF.")]),e._v(" "),t("li",[e._v("The openEO dimension metadata is preserved in the netCDF file.")]),e._v(" "),t("li",[e._v("CF conventions (https://cfconventions.org/) are used where applicable.")]),e._v(" "),t("li",[e._v("Data is chunked and compressed")])]),e._v(" "),t("h2",{attrs:{id:"json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[e._v("#")]),e._v(" JSON")]),e._v(" "),t("p",[e._v("...")])])}),[],!1,null,null,null);t.default=s.exports}}]);
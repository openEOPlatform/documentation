(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{169:function(e,t,r){},185:function(e,t,r){"use strict";r(169)},195:function(e,t,r){"use strict";r.r(t);var a={name:"ProcessParameter",props:{parameter:Object,processUrl:String},components:{DeprecationNotice:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,447)),Description:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,274)),ExperimentalNotice:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,446)),JsonSchema:()=>Promise.all([r.e(0),r.e(21)]).then(r.bind(null,434))},computed:{defaultValue(){return JSON.stringify(this.parameter.default)}}},s=(r(185),r(4)),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-component process-parameter"},[r("h4",[r("code",[e._v(e._s(e.parameter.name))]),e._v(" "),e.parameter.optional?e._e():r("strong",{staticClass:"required",attrs:{title:"required"}},[e._v("*")]),e._v(" "),void 0!==e.parameter.default?r("code",{staticClass:"default"},[e._v(" = "+e._s(e.defaultValue))]):e._e()]),e._v(" "),r("div",{staticClass:"details"},[e.parameter.description?r("Description",{attrs:{description:e.parameter.description,processUrl:e.processUrl}}):e._e(),e._v(" "),!0===e.parameter.deprecated?r("DeprecationNotice",{attrs:{entity:"parameter"}}):e._e(),e._v(" "),!0===e.parameter.experimental?r("ExperimentalNotice",{attrs:{entity:"parameter"}}):e._e(),e._v(" "),e.parameter.schema?r("div",{staticClass:"json-schema-container"},[r("JsonSchema",{attrs:{schema:e.parameter.schema,processUrl:e.processUrl}})],1):e._e()],1)])}),[],!1,null,null,null);t.default=i.exports}}]);
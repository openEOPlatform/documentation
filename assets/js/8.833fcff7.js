(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{248:function(t,e,a){},362:function(t,e,a){"use strict";a(248)},439:function(t,e,a){"use strict";a.r(e);var r=a(154),s={name:"ObjectTree",components:{"openeo-object-tree":()=>Promise.resolve().then(a.bind(null,439))},props:{data:{default:null},collapseAfter:{type:Number,default:10}},data:()=>({expand:!1}),computed:{isSingleValue(){return Array.isArray(this.data)&&1===this.data.length&&0===r.a.size(this.data[0])},size(){return"object"==typeof this.data?r.a.size(this.data):1},indicesShown(){if(!Array.isArray(this.data))return[];let t=this.data;return!this.expand&&null!==this.collapseAfter&&this.size>this.collapseAfter&&(t=Array(this.collapseAfter)),[...t.keys()]}},beforeCreate(){r.a.enableHtmlProps(this)},methods:{prettifyKey:t=>r.a.prettifyString(t),show(){this.expand=!0},isStructured:t=>r.a.size(t)>0,format:t=>null===t?"N/A":!0===t?"✔️":!1===t?"❌":"object"==typeof t&&0===r.a.size(t)?"Empty":"function"==typeof t?"JavaScript Function":"symbol"==typeof t?"JavaScript Symbol":null,isUrl(t){if("string"==typeof t)try{return new URL(t),!0}catch(t){}return!1}}},n=(a(362),a(4)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-component object-tree",class:{inline:0===t.size}},[0===t.size?a("em",[t._v(t._s(t.format(t.data)))]):Array.isArray(t.data)?[a("ol",t._l(t.indicesShown,(function(e){return a("li",{key:e},[t.isStructured(t.data[e])?a("openeo-object-tree",{attrs:{data:t.data[e]}}):t.isUrl(t.data[e])?a("a",{attrs:{href:t.data[e],target:"_blank"}},[t._v(t._s(t.data[e]))]):t.format(t.data[e])?a("em",[t._v(t._s(t.format(t.data[e])))]):[t._v(t._s(t.data[e]))]],2)})),0),t._v(" "),t.size!==t.indicesShown.length?a("button",{attrs:{type:"button"},on:{click:t.show}},[t._v("Show all "+t._s(t.data.length)+" entries")]):t._e()]:"object"==typeof t.data?a("ul",t._l(t.data,(function(e,r){return a("li",{key:r},[a("strong",[t._v(t._s(t.prettifyKey(r)))]),t._v(": \n\t\t\t"),t.isStructured(e)?a("openeo-object-tree",{attrs:{data:e}}):t.isUrl(e)?a("a",{attrs:{href:e,target:"_blank"}},[t._v(t._s(e))]):t.format(e)?a("em",[t._v(t._s(t.format(e)))]):[t._v(t._s(e))]],2)})),0):[t._v(t._s(t.data))]],2)}),[],!1,null,null,null);e.default=i.exports}}]);
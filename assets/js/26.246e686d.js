(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{171:function(e,t,r){},190:function(e,t,r){"use strict";r(171)},280:function(e,t,r){"use strict";r.r(t);var s=r(176),n=r.n(s),a=r(153);n.a.Registry.externalRenderer=!0;var i={name:"StacFields",components:{Process:()=>Promise.all([r.e(0),r.e(22)]).then(r.bind(null,274))},props:{metadata:{type:Object,default:()=>({})},headingTag:{type:String,default:"h3"},ignore:{type:Array,default:()=>[]},type:{type:String,required:!0},context:{type:Object,default:()=>({})}},computed:{ignoreFn(){return this.ignore.length>0?e=>!this.ignore.includes(e):null},fields(){if("Collection"===this.type){let e=a.a.deepClone(this.metadata);a.a.isObject(e.summaries)||(e.summaries={});for(let t in e)("version"===t||"cube:dimensions"!==t&&t.includes(":"))&&(e.summaries[t]=[e[t]]);return n.a.formatSummaries(e,this.ignoreFn)}if("Item"===this.type)return n.a.formatItemProperties(this.metadata,this.ignoreFn);if("Asset"===this.type)return n.a.formatAsset(this.metadata,this.context,this.ignoreFn);throw new Error("Not implemented yet")}},methods:{label:(e,t={})=>n.a.label(e,t)}},o=(r(190),r(4)),l=Object(o.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"vue-component stac stac-fields metadata"},[e._l(e.fields,(function(t){return[r(e.headingTag,{key:t.extension,tag:"component",domProps:{innerHTML:e._s(t.label||"General")}}),e._v(" "),r("section",{key:"section_"+t.extension,staticClass:"group"},e._l(t.properties,(function(s,n){return r("div",{key:t.extension+n,staticClass:"tabular",class:{wrap:Boolean(s.custom||s.items)},attrs:{id:"field_"+n}},[r("label",{attrs:{title:n},domProps:{innerHTML:e._s(s.label)}}),e._v(" "),r("div",{staticClass:"value"},[e._t(n,(function(){return[s.items?r("table",{staticClass:"table"},[r("thead",[r("tr",[Array.isArray(s.formatted)?e._e():r("th",[e._v(" ")]),e._v(" "),e._l(s.itemOrder,(function(t){return r("th",{key:t,domProps:{innerHTML:e._s(s.items[t].label)}})}))],2)]),e._v(" "),r("tbody",e._l(s.formatted,(function(t,n){return r("tr",{key:n},[Array.isArray(s.formatted)?e._e():r("th",[e._v(e._s(n))]),e._v(" "),e._l(s.itemOrder,(function(s){return r("td",{key:s+"_"+n,domProps:{innerHTML:e._s(t[s])}})}))],2)})),0)]):"card4l:processing_chain"===n?r("Process",{staticClass:"inline",attrs:{process:s.value,provideDownload:!1,showGraph:!0}}):s.formatted?r("div",{staticClass:"formatted",domProps:{innerHTML:e._s(s.formatted)}}):[e._v(e._s(s.value))]]}),{prop:s,field:n})],2)])})),0)]}))],2)}),[],!1,null,null,null);t.default=l.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{201:function(e,t,s){},228:function(e,t,s){"use strict";s(201)},307:function(e,t,s){"use strict";s.r(t);var r=s(208),n=s.n(r),i=s(155);const a=["stac_version","stac_extensions","id","type","title","description","keywords","providers","license","extent","summaries","links","assets","item_assets","conformsTo","deprecated","cube:dimensions"];n.a.Registry.externalRenderer=!0;var o={name:"StacFields",components:{Process:()=>Promise.all([s.e(0),s.e(35)]).then(s.bind(null,300))},props:{metadata:{type:Object,default:()=>({})},headingTag:{type:String,default:"h3"},ignore:{type:Array,default:()=>[]},type:{type:String,required:!0},context:{type:Object,default:()=>({})}},computed:{ignoreFn(){return this.ignore.length>0?e=>!this.ignore.includes(e):null},fields(){if("Collection"===this.type){let e=i.a.deepClone(this.metadata);i.a.isObject(e.summaries)||(e.summaries={});for(let t in e)a.includes(t)||(e.summaries[t]=[e[t]]);return n.a.formatSummaries(e,this.ignoreFn)}if("Item"===this.type)return n.a.formatItemProperties(this.metadata,this.ignoreFn);if("Asset"===this.type)return n.a.formatAsset(this.metadata,this.context,this.ignoreFn);throw new Error("Not implemented yet")}},methods:{label:(e,t={})=>n.a.label(e,t)}},l=(s(228),s(4)),d=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"vue-component stac stac-fields metadata"},[e._l(e.fields,(function(s){return[t(e.headingTag,{key:s.extension,tag:"component",domProps:{innerHTML:e._s(s.label||"General")}}),e._v(" "),t("section",{key:"section_"+s.extension,staticClass:"group"},e._l(s.properties,(function(r,n){return t("div",{key:s.extension+n,staticClass:"tabular",class:{wrap:Boolean(r.custom||r.items)},attrs:{id:"field_"+n}},[t("label",{attrs:{title:n},domProps:{innerHTML:e._s(r.label)}}),e._v(" "),t("div",{staticClass:"value"},[e._t(n,(function(){return[r.items?t("table",{staticClass:"table"},[t("thead",[t("tr",[Array.isArray(r.formatted)?e._e():t("th",[e._v(" ")]),e._v(" "),e._l(r.itemOrder,(function(s){return t("th",{key:s,domProps:{innerHTML:e._s(r.items[s].label)}})}))],2)]),e._v(" "),t("tbody",e._l(r.formatted,(function(s,n){return t("tr",{key:n},[Array.isArray(r.formatted)?e._e():t("th",[e._v(e._s(n))]),e._v(" "),e._l(r.itemOrder,(function(r){return t("td",{key:`${r}_${n}`,domProps:{innerHTML:e._s(s[r])}})}))],2)})),0)]):"card4l:processing_chain"===n?t("Process",{staticClass:"inline",attrs:{process:r.value,provideDownload:!1,showGraph:!0}}):r.formatted?t("div",{staticClass:"formatted",domProps:{innerHTML:e._s(r.formatted)}}):[e._v(e._s(r.value))]]}),{prop:r,field:n})],2)])})),0)]}))],2)}),[],!1,null,null,null);t.default=d.exports}}]);
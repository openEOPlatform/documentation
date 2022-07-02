(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{238:function(t,e,s){},239:function(t,e,s){},332:function(t,e,s){"use strict";s(238)},333:function(t,e,s){"use strict";s(239)},454:function(t,e,s){"use strict";s.r(e);var n=s(154),a=s(156),o={name:"FileFormats",components:{SearchableList:()=>n.a.loadAsyncComponent(Promise.all([s.e(0),s.e(9)]).then(s.bind(null,283))),FileFormat:()=>n.a.loadAsyncComponent(Promise.all([s.e(0),s.e(26)]).then(s.bind(null,462)))},mixins:[a.a],props:{formats:{type:Object,default:()=>({})},showInput:{type:Boolean,default:!0},showOutput:{type:Boolean,default:!0},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"File Formats"},collapsed:{type:Boolean,default:null},missing:{type:Array,default:null},...a.a.props},computed:{showAll(){return this.showInput&&this.showOutput},typesToShow(){let t=[];return this.showInput&&t.push("input"),this.showOutput&&t.push("output"),t},fileFormats(){let t=[];for(let s of this.typesToShow)for(var e in this.formats[s]){let n=Object.assign({id:`${e}-${s}`,name:e,type:s},this.formats[s][e]);t.push(n)}return t}},beforeCreate(){n.a.enableHtmlProps(this)},methods:{detailsToggled(...t){this.$emit("detailsToggled",...t)}}},i=(s(332),s(4)),l=Object(i.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vue-component file-formats"},[e("SearchableList",{attrs:{data:t.fileFormats,summaryKey:"title",keywordsKey:"gis_data_types",showSummaryOnExpand:!1,externalSearchTerm:t.searchTerm,sort:t.sort,offerDetails:t.offerDetails,heading:t.heading,collapsed:t.collapsed},on:{detailsToggled:t.detailsToggled},scopedSlots:t._u([{key:"heading",fn:function(e){return[t._t("heading",null,null,e)]}},t.missing?{key:"content-start",fn:function(){return[e("FederationMissingNotice",{attrs:{missing:t.missing,federation:t.federation}})]},proxy:!0}:null,{key:"summary",fn:function(s){return[t._t("summary",(function(){return[e("strong",{staticClass:"inline"},[t._v(t._s(s.item.name))]),t._v(" "),e("ul",{staticClass:"badges small inline"},[t.showAll&&"input"===s.item.type?e("li",{staticClass:"badge option1"},[t._v("Import")]):t._e(),t._v(" "),t.showAll&&"output"===s.item.type?e("li",{staticClass:"badge option2"},[t._v("Export")]):t._e(),t._v(" "),Array.isArray(s.item.gis_data_types)?t._l(s.item.gis_data_types,(function(s){return e("li",{key:s,staticClass:"badge gis"},[t._v(t._s(s))])})):t._e()],2),e("br"),t._v(" "),e("small",[t._v(t._s(s.summary.summary))])]}),null,s)]}},{key:"details",fn:function(s){return[e("FileFormat",{attrs:{id:s.summary.identifier,format:s.item,type:s.item.type,federation:t.federation},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"hidden"})]},proxy:!0},{key:"badges",fn:function(){return[e("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(e){return[t._t("file-format-before-description",null,null,e)]}},{key:"end",fn:function(e){return[t._t("file-format-end",null,null,e)]}}],null,!0)})]}}],null,!0)})],1)}),[],!1,null,null,null).exports;const r=s(185);var u={name:"FileFormatsSpec",components:{FileFormats:l},data:()=>({formats:null}),async created(){let t=await r("https://openeocloud.vito.be/openeo/1.0.0/file_formats");this.formats=t.data}},f=(s(333),Object(i.a)(u,(function(){var t=this._self._c;return t("section",[this.formats?t("div",{staticClass:"columns"},[t("FileFormats",{attrs:{heading:"File Formats for Import",formats:this.formats,showOutput:!1}}),this._v(" "),t("FileFormats",{attrs:{heading:"File Formats for Export",formats:this.formats,showInput:!1}})],1):t("p",[this._v("Loading data...")])])}),[],!1,null,"29137bd5",null));e.default=f.exports}}]);
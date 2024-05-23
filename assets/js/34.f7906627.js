(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{262:function(e,t,o){},263:function(e,t,o){},358:function(e,t,o){"use strict";o(262)},359:function(e,t,o){"use strict";o(263)},474:function(e,t,o){"use strict";o.r(t);var n=o(154),l=o(162),a={name:"Collections",components:{Collection:()=>n.a.loadAsyncComponent(Promise.all([o.e(0),o.e(1),o.e(22)]).then(o.bind(null,476))),SearchableList:()=>n.a.loadAsyncComponent(Promise.all([o.e(0),o.e(12)]).then(o.bind(null,306)))},mixins:[l.a],props:{collections:{type:Array,default:()=>[]},mapOptions:{type:Object,default:()=>({})},searchTerm:{type:String,default:null},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},heading:{type:String,default:"Collections"},collapsed:{type:Boolean,default:null},loadAdditionalData:{type:Function,default:null},showKeywords:{type:Boolean,default:!1},hideDeprecated:{type:Boolean,default:!1},deprecatedFilter:{type:Boolean,default:!1},missing:{type:Array,default:null},...l.a.props},beforeCreate(){n.a.enableHtmlProps(this)},methods:{detailsToggled(...e){this.$emit("detailsToggled",...e)}}},i=(o(358),o(4)),s=Object(i.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component collections"},[t("SearchableList",{attrs:{data:e.collections,identifierKey:"id",summaryKey:"title",keywordsKey:"keywords",showKeywords:e.showKeywords,showSummaryOnExpand:!1,externalSearchTerm:e.searchTerm,externalHideDeprecated:e.hideDeprecated,deprecatedFilter:e.deprecatedFilter,sort:e.sort,offerDetails:e.offerDetails,heading:e.heading,collapsed:e.collapsed,loadAdditionalData:e.loadAdditionalData,allowCopy:""},on:{detailsToggled:e.detailsToggled},scopedSlots:e._u([{key:"heading",fn:function(t){return[e._t("heading",null,null,t)]}},e.missing?{key:"content-start",fn:function(){return[t("FederationMissingNotice",{attrs:{missing:e.missing,federation:e.federation}})]},proxy:!0}:null,{key:"summary",fn:function(t){return[e._t("summary",null,null,t)]}},{key:"details",fn:function(o){return[t("Collection",{attrs:{data:o.item,mapOptions:e.mapOptions,federation:e.federation},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{staticClass:"hidden"})]},proxy:!0},{key:"before-description",fn:function(t){return[e._t("collection-before-description",null,null,t)]}},{key:"end",fn:function(t){return[e._t("collection-end",null,null,t)]}},{key:"spatial-extents",fn:function(t){return[e._t("collection-spatial-extents",null,null,t)]}},{key:"temporal-extents",fn:function(t){return[e._t("collection-temporal-extents",null,null,t)]}}],null,!0)})]}}],null,!0)})],1)}),[],!1,null,null,null).exports;const r=o(221);var c={name:"DataCollections",components:{Collections:s},data:()=>({collections:null,searchTerm:null,mapOptions:{basemap:"https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3BlbmVvLXBsYXRmb3JtLXd3dSIsImEiOiJja3g0emUzdHIyZ2hpMnVwOGJ2ZmE1OWpoIn0.7IBhFVs-X2Glb0QHUq8riA",attribution:'© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'}}),async mounted(){const e=new URLSearchParams(window.location.search).get("q");"string"==typeof e&&e.length>0&&(this.searchTerm=e);let t=await r("https://openeocloud.vito.be/openeo/1.0.0/collections");this.collections=t.data.collections},methods:{loadCollection:async(e,t)=>(await r("https://openeocloud.vito.be/openeo/1.0.0/collections/"+t)).data,hasPreview(e){if(n.a.isObject(e)&&Array.isArray(e.links)){let t=e.links.find(e=>n.a.isObject(e)&&"string"==typeof e.rel&&["xyz","wmts"].includes(e.rel.toLowerCase()));return Boolean(t)}return!1}}},d=(o(359),Object(i.a)(c,(function(){var e=this,t=e._self._c;return t("section",[e.collections?t("Collections",{attrs:{collections:e.collections,showKeywords:!0,searchTerm:e.searchTerm,loadAdditionalData:e.loadCollection,mapOptions:e.mapOptions,heading:"Data Collections"},scopedSlots:e._u([{key:"collection-before-description",fn:function(o){return[e.hasPreview(o.data)?t("form",{staticClass:"editor-preview",attrs:{target:"_blank",action:"https://editor.openeo.cloud"}},[t("input",{attrs:{type:"hidden",name:"preview-collection"},domProps:{value:o.data.id}}),e._v(" "),t("button",{attrs:{type:"submit"}},[e._v("Show Preview in openEO Platform Editor")])]):e._e()]}}])}):t("p",[e._v("Loading data...")])],1)}),[],!1,null,"7078f05a",null));t.default=d.exports}}]);
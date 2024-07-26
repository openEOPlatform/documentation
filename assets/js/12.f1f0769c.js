(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{201:function(e,t,i){"use strict";t.a={data:()=>({canCopy:!1}),mounted(){this.canCopy=navigator&&navigator.clipboard&&"function"==typeof navigator.clipboard.writeText},methods:{copyText(e,t=null,i=null){if(this.canCopy){const a=navigator.clipboard.writeText(e);t&&a.then(t),i&&a.catch(i)}},toggleIcon(e,t){if(e){let i=e.innerText;e.innerText=t,setTimeout(()=>e.innerText=i,2e3)}}}}},202:function(e,t,i){},234:function(e,t,i){"use strict";i(202)},335:function(e,t,i){"use strict";i.r(t);var a=i(154),s=i(250),r=i(201),l=i(0),n={name:"SearchableList",components:{Loading:s.a,SearchBox:()=>Promise.all([i.e(0),i.e(47)]).then(i.bind(null,336))},mixins:[r.a],props:{data:{type:[Array,Object],default:()=>[]},identifierKey:{type:String,default:"id"},summaryKey:{type:String,default:"summary"},keywordsKey:{type:String,default:null},showKeywords:{type:Boolean,default:!1},externalSearchTerm:{type:String,default:null},searchPlaceholder:{type:String,default:"Search"},sort:{type:Boolean,default:!0},offerDetails:{type:Boolean,default:!0},showSummaryOnExpand:{type:Boolean,default:!0},heading:{type:String,default:null},collapsed:{type:Boolean,default:null},searchMinLength:{type:Number,default:2},loadAdditionalData:{type:Function,default:null},allowCopy:{type:Boolean,default:!1},externalHideDeprecated:{type:Boolean,default:!1},deprecatedFilter:{type:Boolean,default:!1},externalHideExperimental:{type:Boolean,default:!1},experimentalFilter:{type:Boolean,default:!1}},data(){return{searchTerm:"",showDetails:{},showList:!this.collapsed||null,hideDeprecated:this.externalHideDeprecated,hideExperimental:this.externalHideExperimental,summaries:[]}},watch:{loadAdditionalData:{handler(){this.generateSummaries(this.summaries)}},data:{immediate:!0,handler(e,t){e!==t&&this.generateSummaries(e)}},externalSearchTerm:{immediate:!0,handler(e){this.searchTerm="string"==typeof e?e:""}},externalHideDeprecated:{immediate:!0,handler(e){this.hideDeprecated=e}},externalHideExperimental:{immediate:!0,handler(e){this.hideExperimental=e}},summaries:{immediate:!0,handler(){this.$emit("summaries",this.summaries)}},searchTerm(){this.filter()},hideDeprecated(){null!==this.hideDeprecatedByDefault&&this.filter()},hideExperimental(){null!==this.hideExperimentalByDefault&&this.filter()},collapsed(e){!1===e?this.showList=!0:null!==this.showList&&(this.showList=!1)}},computed:{totalCount(){return a.a.size(this.data)},filteredCount(){return this.hasActiveFilter()?this.summaries.filter(e=>!0===e.show).length:null}},created(){this.filter()},methods:{hasActiveFilter(){return this.searchTerm.length>=this.searchMinLength||null!==this.hideDeprecatedByDefault&&this.hideDeprecated||null!==this.hideExperimentalByDefault&&this.hideExperimental},filter(){const e=this.searchTerm.length>=this.searchMinLength;this.summaries.forEach(t=>{let i=!0;null!==this.hideDeprecatedByDefault&&this.hideDeprecated&&t.deprecated||null!==this.hideExperimentalByDefault&&this.hideExperimental&&t.experimental?i=!1:e&&(i=a.a.search(this.searchTerm,[t.identifier,t.summary].concat(t.keywords))),this.$set(t,"show",i)}),this.$emit("summaries",this.summaries)},copyIdentifier(e,t){if(this.allowCopy){const i=e.composedPath()[0];this.copyText(t.identifier,()=>this.toggleIcon(i,"✅"),()=>this.toggleIcon(i,"❌"))}},generateSummaries(){let e="function"==typeof this.loadAdditionalData,t=[];for(let i in this.data){let a=this.data[i],s={identifier:i,summary:"",show:!0,loaded:!e,index:i,experimental:a.experimental,deprecated:a.deprecated,data:null};"string"==typeof this.identifierKey&&"string"==typeof a[this.identifierKey]&&(s.identifier=a[this.identifierKey]),"string"==typeof this.summaryKey&&"string"==typeof a[this.summaryKey]&&(s.summary=a[this.summaryKey]),"string"==typeof this.keywordsKey&&Array.isArray(a[this.keywordsKey])?s.keywords=a[this.keywordsKey]:s.keywords=[];let r=l.a.observable(s);r.data=a,t.push(r)}this.sort&&t.sort((e,t)=>a.a.compareStringCaseInsensitive(e.identifier,t.identifier)),this.summaries=t},toggleHeading(e=null){null!==this.collapsed&&(this.showList=null===e?!this.showList:e,this.$emit("headingToggled",this.showList),this.$parent&&this.$parent.$emit("headingToggled",this.showList))},async toggleDetails(e,t){if(!this.offerDetails)return;if(void 0===t&&(t=!this.showDetails[e]),void 0===this.showDetails[e]&&!1===t)return;this.$set(this.showDetails,e,t);let i=this.summaries[e];if(t&&"function"==typeof this.loadAdditionalData&&!i.loaded)try{i.data=await this.loadAdditionalData(i.index,i.identifier,i.data),i.loaded=!0}catch(e){console.error(e)}this.$emit("detailsToggled",t,i.index,i.identifier,i.data)}}},d=(i(234),i(4)),o=Object(d.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component searchable-list",class:{expandable:null!==e.collapsed,expanded:e.showList,noResults:0===e.filteredCount}},[e._t("heading",(function(){return[e.heading?t("h2",{staticClass:"heading",on:{click:function(t){return e.toggleHeading(null)}}},[e._v("\n\t\t\t"+e._s(e.heading)+"\n\t\t\t"),null!==e.filteredCount&&e.filteredCount!==e.totalCount?[e._v("("+e._s(e.filteredCount)+"/"+e._s(e.totalCount)+")")]:[e._v("("+e._s(e.totalCount)+")")]],2):e._e()]}),{filteredCount:e.filteredCount,totalCount:e.totalCount}),e._v(" "),null!==e.showList?t("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showList,expression:"showList === true"}],staticClass:"body"},[e._t("content-start"),e._v(" "),0===e.totalCount?[t("p",[e._v("No data available.")])]:[t("section",{staticClass:"action-bar"},[null===e.externalSearchTerm?t("SearchBox",{attrs:{placeholder:e.searchPlaceholder,minLength:e.searchMinLength},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}):e._e(),e._v(" "),e.deprecatedFilter?t("label",{staticClass:"deprecated",attrs:{title:"Show deprecated elements?"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hideDeprecated,expression:"hideDeprecated"}],attrs:{type:"checkbox","true-value":!1,"false-value":!0},domProps:{checked:Array.isArray(e.hideDeprecated)?e._i(e.hideDeprecated,null)>-1:e._q(e.hideDeprecated,!1)},on:{change:function(t){var i=e.hideDeprecated,a=t.target,s=!a.checked;if(Array.isArray(i)){var r=e._i(i,null);a.checked?r<0&&(e.hideDeprecated=i.concat([null])):r>-1&&(e.hideDeprecated=i.slice(0,r).concat(i.slice(r+1)))}else e.hideDeprecated=s}}}),e._v("\n\t\t\t\t\tShow deprecated\n\t\t\t\t")]):e._e(),e._v(" "),e.experimentalFilter?t("label",{staticClass:"experimental",attrs:{title:"Show experimental elements?"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hideExperimental,expression:"hideExperimental"}],attrs:{type:"checkbox","true-value":!1,"false-value":!0},domProps:{checked:Array.isArray(e.hideExperimental)?e._i(e.hideExperimental,null)>-1:e._q(e.hideExperimental,!1)},on:{change:function(t){var i=e.hideExperimental,a=t.target,s=!a.checked;if(Array.isArray(i)){var r=e._i(i,null);a.checked?r<0&&(e.hideExperimental=i.concat([null])):r>-1&&(e.hideExperimental=i.slice(0,r).concat(i.slice(r+1)))}else e.hideExperimental=s}}}),e._v("\n\t\t\t\t\tShow experimental\n\t\t\t\t")]):e._e()],1),e._v(" "),e._t("after-search-box",null,{filteredCount:e.filteredCount,summaries:e.summaries}),e._v(" "),0===e.filteredCount?t("p",[e._v("No search results found.")]):t("ul",{staticClass:"list",class:{expandable:e.offerDetails}},e._l(e.summaries,(function(i,a){return t("li",{directives:[{name:"show",rawName:"v-show",value:i.show,expression:"summary.show"}],key:i.identifier,class:{expanded:e.showDetails[a]}},[t("summary",{staticClass:"summary",class:{experimental:i.experimental,deprecated:i.deprecated},on:{click:function(t){return e.toggleDetails(a)}}},[e._t("summary",(function(){return[t("strong",[e._v("\n\t\t\t\t\t\t\t\t"+e._s(i.identifier)+"\n\t\t\t\t\t\t\t\t"),e.allowCopy&&e.canCopy?t("span",{staticClass:"copy",attrs:{title:"Copy identifier"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.copyIdentifier(t,i)}}},[e._v("📋")]):e._e()]),e._v(" "),i.summary?t("small",{class:{hideOnExpand:!e.showSummaryOnExpand}},[e._v(e._s(i.summary))]):e._e(),e._v(" "),e.showKeywords&&i.keywords.length>0?t("ul",{staticClass:"badges small block hideOnExpand"},e._l(i.keywords,(function(i){return t("li",{key:i,staticClass:"badge"},[e._v(e._s(i))])})),0):e._e()]}),{summary:i,item:i.data})],2),e._v(" "),"boolean"==typeof e.showDetails[a]?t("div",{directives:[{name:"show",rawName:"v-show",value:!0===e.showDetails[a],expression:"showDetails[i] === true"}],staticClass:"details"},[i.loaded?e._t("details",(function(){return[e._v("\n\t\t\t\t\t\t\tNo details available!\n\t\t\t\t\t\t")]}),{summary:i,item:i.data}):t("Loading")],2):e._e()])})),0)]],2):e._e()],2)}),[],!1,null,null,null);t.default=o.exports}}]);
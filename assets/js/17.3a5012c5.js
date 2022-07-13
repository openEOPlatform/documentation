(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,5,30],{157:function(t,e,s){},162:function(t,e,s){"use strict";s(157)},174:function(t,e,s){},178:function(t,e,s){"use strict";s.r(e);var r=s(177),a=s(154),n={name:"Description",props:{description:{type:String,default:""},preprocessor:{type:Function,default:null},processor:{type:Function,default:null},processUrl:{type:String,default:null},compact:{type:Boolean,default:!1},allowHTML:{type:Boolean,default:!1}},beforeCreate(){a.a.enableHtmlProps(this)},methods:{markup(t){if("string"!=typeof t)return"";"string"==typeof this.processUrl&&(t=t.replace(/(^|[^\w`])``(\w+)\(\)``(?![\w`])/g,(t,e,s)=>`${e}@pid:${s}@@`));var e=new r.Parser,s=new r.HtmlRenderer({safe:!this.allowHTML,smart:!0});"function"==typeof this.preprocessor&&(t=this.preprocessor(t));var a=e.parse(t),n=s.render(a);return"function"==typeof this.processor&&(n=this.processor(n)),"string"==typeof this.processUrl&&(n=n.replace(/@pid:(\w+)@@/g,(t,e)=>this.linkToProcess(e))),n},linkToProcess(t){return`<code><a href="${this.processUrl.replace("${}",encodeURIComponent(t))}" target="${this.processUrl.startsWith("#")?"_self":"_blank"}" class="process-link">${t}</a></code>`}}},i=(s(162),s(4)),o=Object(i.a)(n,(function(){return(0,this._self._c)("div",{staticClass:"vue-component styled-description",class:{compact:this.compact},domProps:{innerHTML:this._s(this.markup(this.description))}})}),[],!1,null,null,null);e.default=o.exports},195:function(t,e,s){"use strict";s(174)},262:function(t,e,s){},286:function(t,e,s){"use strict";s.r(e);var r=s(179),a=s.n(r),n=s(154);a.a.Registry.externalRenderer=!0;var i={name:"StacFields",components:{Process:()=>Promise.all([s.e(0),s.e(22)]).then(s.bind(null,282))},props:{metadata:{type:Object,default:()=>({})},headingTag:{type:String,default:"h3"},ignore:{type:Array,default:()=>[]},type:{type:String,required:!0},context:{type:Object,default:()=>({})}},computed:{ignoreFn(){return this.ignore.length>0?t=>!this.ignore.includes(t):null},fields(){if("Collection"===this.type){let t=n.a.deepClone(this.metadata);n.a.isObject(t.summaries)||(t.summaries={});for(let e in t)("version"===e||"cube:dimensions"!==e&&e.includes(":"))&&(t.summaries[e]=[t[e]]);return a.a.formatSummaries(t,this.ignoreFn)}if("Item"===this.type)return a.a.formatItemProperties(this.metadata,this.ignoreFn);if("Asset"===this.type)return a.a.formatAsset(this.metadata,this.context,this.ignoreFn);throw new Error("Not implemented yet")}},methods:{label:(t,e={})=>a.a.label(t,e)}},o=(s(195),s(4)),l=Object(o.a)(i,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"vue-component stac stac-fields metadata"},[t._l(t.fields,(function(s){return[e(t.headingTag,{key:s.extension,tag:"component",domProps:{innerHTML:t._s(s.label||"General")}}),t._v(" "),e("section",{key:"section_"+s.extension,staticClass:"group"},t._l(s.properties,(function(r,a){return e("div",{key:s.extension+a,staticClass:"tabular",class:{wrap:Boolean(r.custom||r.items)},attrs:{id:"field_"+a}},[e("label",{attrs:{title:a},domProps:{innerHTML:t._s(r.label)}}),t._v(" "),e("div",{staticClass:"value"},[t._t(a,(function(){return[r.items?e("table",{staticClass:"table"},[e("thead",[e("tr",[Array.isArray(r.formatted)?t._e():e("th",[t._v(" ")]),t._v(" "),t._l(r.itemOrder,(function(s){return e("th",{key:s,domProps:{innerHTML:t._s(r.items[s].label)}})}))],2)]),t._v(" "),e("tbody",t._l(r.formatted,(function(s,a){return e("tr",{key:a},[Array.isArray(r.formatted)?t._e():e("th",[t._v(t._s(a))]),t._v(" "),t._l(r.itemOrder,(function(r){return e("td",{key:`${r}_${a}`,domProps:{innerHTML:t._s(s[r])}})}))],2)})),0)]):"card4l:processing_chain"===a?e("Process",{staticClass:"inline",attrs:{process:r.value,provideDownload:!1,showGraph:!0}}):r.formatted?e("div",{staticClass:"formatted",domProps:{innerHTML:t._s(r.formatted)}}):[t._v(t._s(r.value))]]}),{prop:r,field:a})],2)])})),0)]}))],2)}),[],!1,null,null,null);e.default=l.exports},385:function(t,e,s){"use strict";s(262)},466:function(t,e,s){"use strict";s.r(e);var r=s(179),a=s(178),n=s(286),i={name:"Asset",components:{Description:a.default,StacFields:n.default},props:{asset:{type:Object,required:!0},id:{type:String,required:!0},context:{type:Object,default:()=>({})}},data:()=>({ignore:["href","title","description","type","roles"]}),computed:{fileFormat(){return this.asset.type?r.Formatters.formatMediaType(this.asset.type):null}}},o=(s(385),s(4)),l=Object(o.a)(i,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"vue-component asset"},[e("h4",[e("ul",{staticClass:"badges actions"},[e("li",{staticClass:"badge action download"},[e("a",{staticClass:"badge-fill",attrs:{href:t.asset.href,target:"_blank",download:""}},[t._v("\n          Download '"+t._s(t.asset.title||t.id)+"'\n          "),t.fileFormat?[t._v("as "+t._s(t.fileFormat))]:t._e()],2)])]),t._v(" "),Array.isArray(t.asset.roles)?e("ul",{staticClass:"badges"},t._l(t.asset.roles,(function(s){return e("li",{key:s,staticClass:"badge",class:"data"===s?"green":"secondary"},[t._v(t._s(s))])})),0):t._e()]),t._v(" "),t.asset.description?e("Description",{attrs:{description:t.asset.description,compact:!0}}):t._e(),t._v(" "),e("StacFields",{attrs:{type:"Asset",metadata:t.asset,ignore:t.ignore,title:"",context:t.context,headingTag:"h5"}})],1)}),[],!1,null,null,null);e.default=l.exports}}]);
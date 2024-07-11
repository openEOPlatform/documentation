(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{199:function(e,s,t){},200:function(e,s,t){},227:function(e,s,t){"use strict";t(199)},228:function(e,s,t){"use strict";t(200)},301:function(e,s,t){"use strict";t.r(s);var r=t(154),a={name:"ProcessExample",props:{id:Number,example:Object,processId:String,processParameters:Array,processUrl:String},components:{Description:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,209))},computed:{identifier(){return"#"+(this.id+1)},title(){return this.example.title?this.example.title+" ("+this.identifier+")":"Example "+this.identifier},renderedArguments(){var e=[];for(var s in this.processParameters){var t=this.processParameters[s];if(void 0!==this.example.arguments[t.name]){var a=this.example.arguments[t.name];let s;s=r.a.isObject(a)&&a.from_parameter?'<em title="Variable">$'+r.a.htmlentities(a.from_parameter)+"</em>":r.a.isObject(a)&&a.from_node?'<em title="Result from other process">$'+r.a.htmlentities(a.from_node)+"</em>":JSON.stringify(a),e.push('<span class="param-name">'+t.name+'</span> = <span class="argument">'+s+"</span>")}}var n="";return void 0!==this.example.returns&&(n=' => <span class="return-value">'+JSON.stringify(this.example.returns)+"</span>"),'<span class="process-name">'+this.processId+"</span>("+e.join(", ")+")"+n}}},n=(t(227),t(4)),i=Object(n.a)(a,(function(){var e=this,s=e._self._c;return s("div",{staticClass:"vue-component process-example"},[s("h4",[e._v(e._s(e.title))]),e._v(" "),s("div",{staticClass:"content"},[e.example.description?s("Description",{attrs:{description:e.example.description,processUrl:e.processUrl,compact:!0}}):e._e(),e._v(" "),e.example.arguments?s("div",{staticClass:"arguments"},[s("code",{domProps:{innerHTML:e._s(e.renderedArguments)}})]):e._e()],1)])}),[],!1,null,null,null).exports,o=t(162),c={name:"Process",components:{JsonSchema:()=>Promise.all([t.e(0),t.e(30)]).then(t.bind(null,473)),DeprecationNotice:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,489)),Description:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,209)),ExperimentalNotice:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,490)),ModelBuilder:()=>Promise.all([t.e(0),t.e(21)]).then(t.bind(null,469)),ProcessExample:i,ProcessParameter:()=>Promise.all([t.e(0),t.e(14)]).then(t.bind(null,241)),LinkList:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,306))},mixins:[o.a],props:{process:{type:Object,default:()=>({})},namespace:{type:String,default:null},provideDownload:{type:Boolean,default:!0},processUrl:String,showGraph:{type:Boolean,default:!1},...o.a.props},computed:{displayableNamespace(){let e=this.process.namespace||this.namespace;return"backend"===e?"":"user"===e?"user-defined":e},id(){return this.process.id||"unnamed"},parameters(){return Array.isArray(this.process.parameters)?this.process.parameters:[]},returns(){return r.a.isObject(this.process.returns)?this.process.returns:{}},signature(e=!0){return r.a.formatProcessSignature(this,e)},exampleLinks(){return Array.isArray(this.process.links)?this.process.links.filter(e=>"example"===e.rel):[]}},beforeCreate(){r.a.enableHtmlProps(this)},methods:{hasElements:e=>"object"==typeof e&&null!==e&&Object.keys(e).length>0,formatCategory:e=>e.replace("_"," "),download(){let e="data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.process,null,2)),s=document.createElement("a");s.setAttribute("href",e),s.setAttribute("download",this.id+".json"),document.body.appendChild(s),s.click(),s.remove()}}},p=(t(228),Object(n.a)(c,(function(){var e=this,s=e._self._c;return s("article",{staticClass:"vue-component process"},[e.process.id?e._t("title",(function(){return[s("a",{staticClass:"anchor",attrs:{name:e.process.id}}),e._v(" "),s("h2",[e._v("\n\t\t\t"+e._s(e.process.id)+"\n\t\t\t"),e.displayableNamespace?s("span",{staticClass:"namespace"},[e._v(" — "+e._s(e.displayableNamespace))]):e._e()])]}),{vBind:e.$props,displayableNamespace:e.displayableNamespace}):e._e(),e._v(" "),e.process.summary||e.process.deprecated||e.process.experimental?[s("summary",[e._v("\n\t\t\t"+e._s(e.process.summary)+"\n\t\t\t"),e.process.deprecated||e.process.experimental?[e.process.summary?[e._v(" — ")]:e._e(),e._v(" "),e.process.deprecated?s("strong",{staticClass:"deprecated"},[e._v("deprecated")]):e._e(),e._v(" "),e.process.experimental?s("strong",{staticClass:"experimental"},[e._v("experimental")]):e._e()]:e._e()],2)]:e._e(),e._v(" "),e.provideDownload||e.hasElements(e.process.categories)?[s("div",{staticClass:"process-bar"},[e.hasElements(e.process.categories)?s("ul",{staticClass:"badges categories"},e._l(e.process.categories,(function(t){return s("li",{key:t,staticClass:"badge category",domProps:{textContent:e._s(e.formatCategory(t))}})})),0):e._e(),e._v(" "),e.provideDownload?s("ul",{staticClass:"badges actions"},[s("li",{staticClass:"badge action download"},[s("a",{staticClass:"badge-fill",on:{click:e.download}},[e._v("Download JSON")])])]):e._e()])]:e._e(),e._v(" "),e._t("before-description",null,{vBind:e.$props}),e._v(" "),e.process.description?s("section",{staticClass:"description"},[s("h3",[e._v("Description")]),e._v(" "),s("code",{staticClass:"signature",domProps:{innerHTML:e._s(e.signature)}}),e._v(" "),s("Description",{attrs:{description:e.process.description,processUrl:e.processUrl}}),e._v(" "),e.process.deprecated?s("DeprecationNotice",{attrs:{entity:"process"}}):e._e(),e._v(" "),e.process.experimental?s("ExperimentalNotice",{attrs:{entity:"process"}}):e._e(),e._v(" "),e.process["federation:backends"]?s("FederationNotice",{attrs:{backends:e.process["federation:backends"],federation:e.federation,entity:"process"}}):e._e()],1):e._e(),e._v(" "),s("section",{staticClass:"parameters"},[s("h3",[e._v("Parameters")]),e._v(" "),e._l(e.parameters,(function(t){return s("ProcessParameter",{key:t.name,attrs:{parameter:t,processUrl:e.processUrl,federation:e.federation}})})),e._v(" "),0===e.parameters.length?s("p",[e._v("This process has no parameters.")]):e._e()],2),e._v(" "),s("section",{staticClass:"returns"},[s("h3",[e._v("Return Value")]),e._v(" "),e.returns.description||e.returns.schema?[e.returns.description?s("Description",{attrs:{description:e.returns.description,processUrl:e.processUrl}}):e._e(),e._v(" "),e.returns.schema?s("div",{staticClass:"json-schema-container"},[s("JsonSchema",{attrs:{schema:e.returns.schema}})],1):e._e()]:s("p",[e._v("The return value has not been defined.")])],2),e._v(" "),e.hasElements(e.process.exceptions)?s("section",{staticClass:"exceptions"},[s("h3",[e._v("Errors/Exceptions")]),e._v(" "),s("ul",e._l(e.process.exceptions,(function(t,r){return s("li",{key:r,staticClass:"exception"},[s("code",[e._v(e._s(r))]),e._v(" "),t.http?s("span",{staticClass:"http-code"},[e._v(" — HTTP "+e._s(t.http))]):e._e(),e._v(" "),t.code?s("span",{staticClass:"error-code"},[e._v(" — "+e._s(t.code))]):e._e(),e._v(" "),t.description?s("Description",{attrs:{description:t.description,processUrl:e.processUrl,compact:!0}}):e._e(),e._v(" "),t.message?s("div",{staticClass:"message"},[e._v("Message: "),s("em",[e._v(e._s(t.message))])]):e._e()],1)})),0)]):e._e(),e._v(" "),e.hasElements(e.process.examples)?s("section",{staticClass:"examples"},[s("h3",[e._v("Examples")]),e._v(" "),e._l(e.process.examples,(function(t,r){return s("ProcessExample",{key:r,attrs:{id:r,example:t,processId:e.id,processParameters:e.parameters,processUrl:e.processUrl}})})),e._v(" "),s("LinkList",{attrs:{links:e.exampleLinks,heading:"Processes",headingTag:"h4"}})],2):e._e(),e._v(" "),s("section",{staticClass:"links"},[s("LinkList",{attrs:{links:e.process.links,heading:"See Also",headingTag:"h3",ignoreRel:["self","example"]}})],1),e._v(" "),e.showGraph&&e.process.process_graph?s("section",{staticClass:"process-graph"},[s("h3",[e._v("Processing Instructions")]),e._v(" "),s("div",{staticClass:"graph"},[e._t("process-graph",(function(){return[s("ModelBuilder",{attrs:{id:e.id,value:e.process,explicitZoom:!0}})]}),{vBind:e.$props})],2)]):e._e(),e._v(" "),e._t("end",null,{vBind:e.$props})],2)}),[],!1,null,null,null));s.default=p.exports}}]);
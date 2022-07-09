(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{207:function(t,e,a){},208:function(t,e,a){},222:function(t,e,a){},289:function(t,e,a){"use strict";a(207)},290:function(t,e,a){"use strict";a(208)},304:function(t,e,a){"use strict";a(222)},443:function(t,e,a){"use strict";var s={name:"AlgoliaSearchBox",props:["options"],data:()=>({placeholder:void 0}),watch:{$lang(t){this.update(this.options,t)},options(t){this.update(t,this.$lang)}},mounted(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize(t){Promise.all([Promise.all([a.e(0),a.e(12)]).then(a.t.bind(null,447,7)),Promise.all([a.e(0),a.e(12)]).then(a.t.bind(null,448,7))]).then(([e])=>{e=e.default;const{algoliaOptions:a={}}=t;e(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:a.facetFilters||[]},a),handleSelected:(t,e,a)=>{const{pathname:s,hash:n}=new URL(a.url);if(a.url.includes("://docs.openeo.cloud")){const t=s.replace(this.$site.base,"/"),e=decodeURIComponent(n);this.$router.push(`${t}${e}`)}else window.location.href=a.url}}))})},update(t){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t)}}},n=(a(290),a(4)),i=Object(n.a)(s,(function(){var t=this._self._c;return t("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[t("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.a=i.exports},451:function(t,e,a){"use strict";a.r(e);var s=a(288),n=a.n(s),i={name:"Home",components:{NavLink:a(205).a},props:["blog"],computed:{data(){return this.$page.frontmatter}}},r=(a(289),a(4)),o=Object(r.a)(i,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[e("img",{attrs:{src:"/images/logo.png",alt:"openEO Platform"}}),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:{link:"https://openeo.org/documentation/1.0/datacubes.html",text:"Data Cubes"}}}),t._v(" "),e("NavLink",{staticClass:"action-button",attrs:{item:{link:"/getting-started/editor/",text:"Editor"}}}),t._v(" "),e("NavLink",{staticClass:"action-button",attrs:{item:{link:"/getting-started/javascript/",text:"JavaScript"}}}),t._v(" "),e("NavLink",{staticClass:"action-button",attrs:{item:{link:"/getting-started/jupyterlab/",text:"JupyterLab"}}}),t._v(" "),e("NavLink",{staticClass:"action-button",attrs:{item:{link:"/getting-started/python/",text:"Python"}}}),t._v(" "),e("NavLink",{staticClass:"action-button",attrs:{item:{link:"/getting-started/r/",text:"R"}}})],1),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),e("Content",{staticClass:"theme-default-content custom"})],1)}),[function(){var t=this._self._c;return t("p",{staticClass:"description"},[this._v("\n      This is the user manual for the European EO cloud service provider "),t("strong",[this._v("openEO Platform")]),this._v(".\n      Get started now:\n    ")])},function(){var t=this._self._c;return t("p",{staticClass:"description"},[this._v("\n      If you can't find what you are looking for, please submit a request to our "),t("a",{attrs:{href:"https://forums.openeo.cloud",target:"_blank"}},[this._v("community forums")]),this._v(" or "),t("a",{attrs:{href:"https://openeo.cloud/contact/",target:"_blank"}},[this._v("contact us")]),this._v(" directly.\n    ")])},function(){var t=this._self._c;return t("p",{staticClass:"description"},[this._v("\n      You can also go back to the "),t("a",{attrs:{href:"https://openeo.cloud",target:"_blank"}},[this._v("project website at openeo.cloud")]),this._v(" to find the less technical details.\n    ")])}],!1,null,null,null).exports,l=a(441),c=a(440),h=a(442);const u=/#.*$/,p=/\.(md|html)$/,d=/\/$/,g=/^[a-z]+:/i;function f(t){return decodeURI(t).replace(u,"").replace(p,"")}function m(t){return g.test(t)}function b(t){if(m(t))return t;const e=t.match(u),a=e?e[0]:"",s=f(t);return d.test(s)?t:s+".html"+a}function v(t,e,a){if(m(e))return{type:"external",path:e};a&&(e=function(t,e,a){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const n=e.split("/");a&&n[n.length-1]||n.pop();const i=t.replace(/^\//,"").split("/");for(let t=0;t<i.length;t++){const e=i[t];".."===e?n.pop():"."!==e&&n.push(e)}""!==n[0]&&n.unshift("");return n.join("/")}(e,a));const s=f(e);for(let e=0;e<t.length;e++)if(f(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:b(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function _(t,e,a,s){const{pages:n,themeConfig:i}=a,r=s&&i.locales&&i.locales[s]||i;if("auto"===(t.frontmatter.sidebar||r.sidebar||i.sidebar))return C(t);const o=r.sidebar||i.sidebar;if(o){const{base:a,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const s in e)if(0===(a=t,/(\.html|\/)$/.test(a)?a:a+"/").indexOf(encodeURI(s)))return{base:s,config:e[s]};var a;return{}}(e,o);return"auto"===s?C(t):s?s.map(t=>function t(e,a,s,n=1){if("string"==typeof e)return v(a,e,s);if(Array.isArray(e))return Object.assign(v(a,e[0],s),{title:e[1]});{const i=e.children||[];return 0===i.length&&e.path?Object.assign(v(a,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:i.map(e=>t(e,a,s,n+1)),collapsable:!1!==e.collapsable}}}(t,n,a)):[]}return[]}function C(t){const e=function(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}var S={name:"Layout",components:{Home:o,Page:c.a,Sidebar:h.a,Navbar:l.a},data:()=>({isSidebarOpen:!1}),computed:{shouldShowFullpage(){return!!this.$page.frontmatter.fullpage},shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!this.shouldShowFullpage&&!t.news&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return _(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},filters:{date:t=>n()(t).format("MMMM D, YYYY")},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},$=(a(304),Object(r.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):t.$page.frontmatter.news?e("main",{staticClass:"page"},[e("div",{staticClass:"theme-default-content news"},[e("h1",[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),e("small",{staticClass:"news-meta"},[t._v("Written\n        "),t.$page.frontmatter.date?[t._v("on "),e("em",[t._v(t._s(t._f("date")(t.$page.frontmatter.date)))])]:t._e(),t._v(" "),t.$page.frontmatter.author?[t._v("by "),e("em",[t._v(t._s(t.$page.frontmatter.author))])]:t._e(),t._v(".\n      ")],2),t._v(" "),e("Content")],1)]):t.shouldShowFullpage?e("main",{staticClass:"fullpage",class:{page:!t.$page.frontmatter.stripCSS}},[e("Content",{staticClass:"fullpage-content"})],1):t.$page.frontmatter.custom?e("main",{staticClass:"page"},[e("Content",{staticClass:"theme-default-content custom"})],1):e("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2)],1)}),[],!1,null,null,null));e.default=$.exports}}]);
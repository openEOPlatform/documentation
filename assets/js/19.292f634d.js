(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{376:function(e,t,s){"use strict";s.r(t);var n={name:"ApiSpec",computed:{specUrl:()=>"/assets/openapi.yaml"},data:()=>({yOffset:0}),mounted(){this.yOffset=Math.round(document.querySelector("header").getBoundingClientRect().bottom);var e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js",document.getElementsByTagName("head")[0].appendChild(e)}},a=s(4),c=Object(a.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"apiSpec"},[t("redoc",{attrs:{"spec-url":this.specUrl,"path-in-middle-panel":"true","expand-responses":"200,201,202,203,204","scroll-y-offset":this.yOffset}})],1)}),[],!1,null,null,null);t.default=c.exports}}]);
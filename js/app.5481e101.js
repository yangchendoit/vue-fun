(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ad517a3e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"c851da2d"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-fun/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07f5":function(e,t,n){"use strict";var r=n("f256"),a=n.n(r);a.a},"4dcb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("5c96"),o=n.n(a),u=(n("0fae"),n("f13c")),i=n.n(u),c=n("58ca"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],f=(n("7c55"),n("2877")),d={},p=Object(f["a"])(d,s,l,!1,null,null,null),h=p.exports,v=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("just have fun")]),n("h2",{on:{click:function(t){return e.navigateTo("css")}}},[e._v("css")]),n("h2",{on:{click:function(t){return e.navigateTo("canvas")}}},[e._v("canvas")]),n("h2",{on:{click:function(t){return e.navigateTo("lottery")}}},[e._v("lottery")]),e._m(0),n("div",{staticClass:"caps"}),n("canvas",{attrs:{id:"canvas"}})])},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frame"},[n("div"),n("div"),n("div")])}],g=(n("6c7b"),{name:"hello",head:function(){return{title:"just have fun",meta:[{hid:"description",name:"description",content:"一个有趣的项目"},{hid:"keywords",name:"keywords",content:"css,canvas,lottery"}]}},data:function(){return{}},mounted:function(){this.initCanvas()},methods:{initCanvas:function(){var e=function(){var e,t,n,r,a=700,o=500,u=function(){e=document.getElementById("canvas"),t=e.getContext("2d"),e.width=a,e.height=o,t.fillStyle="white",t.fillRect(0,0,a,o),t.fill(),n=t.getImageData(0,0,a,o),r=n.data,setInterval(i,30)},i=function(){for(var e=0;e<r.length;e+=4){var a=255*Math.random()+50;r[e]=a,r[e+1]=a,r[e+2]=a}t.putImageData(n,0,0)};return{init:u}}();e.init()},navigateTo:function(e){this.$router.push({path:e})}}}),y=g,w=(n("07f5"),Object(f["a"])(y,m,b,!1,null,"4c08ead8",null)),_=w.exports;r["default"].use(v["a"]);var j=new v["a"]({routes:[{path:"/",name:"index",component:_},{path:"/canvas",name:"canvas",component:function(){return n.e("about").then(n.bind(null,"e605"))}},{path:"/css",name:"css",component:function(){return n.e("about").then(n.bind(null,"6392"))}},{path:"/lottery",name:"lottery",component:function(){return n.e("about").then(n.bind(null,"5650"))}}]}),k=n("2f62");r["default"].use(k["a"]);var E=new k["a"].Store({state:{},mutations:{},actions:{}});n("a481"),n("3b2b");r["default"].filter("phoneNumberHidden",(function(e){var t=new RegExp("(\\d{3})(\\d{4})(\\d{4})");return e.replace(t,"$1****$3")}));n("4dcb");r["default"].config.productionTip=!1,r["default"].use(o.a),r["default"].use(i.a),r["default"].use(c["a"],{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"}),new r["default"]({router:j,store:E,render:function(e){return e(h)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},f256:function(e,t,n){}});
//# sourceMappingURL=app.5481e101.js.map
!function(c){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],i=0,l=[];i<r.length;i++)n=r[i],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(c[t]=o[t]);for(p&&p(e);l.length;)l.shift()();return f.push.apply(f,a||[]),u()}function u(){for(var e,t=0;t<f.length;t++){for(var n=f[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==s[a]&&(r=!1)}r&&(f.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},s={0:0},f=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=c,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=r;f.push([10,1]),u()}({10:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(8);var f=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(m,r.Component),c(m.prototype,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h2",null,NL_NAME," sachith is running on port ",NL_PORT," inside ",NL_OS," ",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",null,"v ",NL_VERSION," ")),o.a.createElement("input",{type:"button",style:this.state.btnRamUsage,value:"Get Ram Usage",onClick:function(){e.ramUsage(),e.isRamBtnClicked()}}),1===this.state.isbtnRamUsage?o.a.createElement("p",{id:"ram",style:this.state.pStyles},"Available Memory :",o.a.createElement("span",{id:"aMem",style:this.state.spanStyles},this.state.aMemVal),"Total Memory :",o.a.createElement("span",{id:"tMem",style:this.state.spanStyles},this.state.tMemVal)):"")}},{key:"ramUsage",value:function(){Neutralino.computer.getRamUsage(function(e){var t=(e.ram.available/1048576).toFixed(3)+" GB";this.setState({aMemVal:t});var n=(e.ram.total/1048576).toFixed(3)+" GB";this.setState({tMemVal:n})}.bind(this),function(){this.setState({aMemVal:"Error While Executing"})}.bind(this))}}]),m),p=n(3);function m(){var e,t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=this,r=(e=u(m)).call.apply(e,[this].concat(a)),(t=!r||"object"!==l(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n):r).state={aMemVal:"bb",tMemVal:"aa",spanStyles:{margin:10},isbtnRamUsage:0,btnRamUsage:{color:" #fff",backgroundColor:"#28a745",borderColor:"#28a745",borderRadius:"0.25rem",fontWeight:400,textAlign:"center",border:"1px solid transparent",padding:".375rem .75rem",fontSize:" 1rem",lineHeight:"1.5",cursor:"pointer"}},t.isRamBtnClicked=function(){t.setState({isbtnRamUsage:1})},t}Neutralino.init({load:function(){},pingSuccessCallback:function(){},pingFailCallback:function(){}}),i.a.render(o.a.createElement(f,null),document.getElementById("root")),p.a()},3:function(e,n,r){"use strict";(function(e){function t(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}r.d(n,"a",function(){return t}),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))}).call(this,r(9))},8:function(e,t,n){}});
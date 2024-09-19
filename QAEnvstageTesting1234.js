(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,"/* Chatbot container */\n.chatbot-container {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 1000;\n}\n\n/* Chatbot icon */\n.arist-Chatbot .chatbot-icon {\n    cursor: pointer;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background-color: #f1f1f1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.arist-Chatbot .chatbot-icon svg {\n    width: 44px;\n    height: 39px;\n}\n\n/* Chatbot modal */\n.arist-Chatbot .chatbot-modal {\n    position: fixed;\n    bottom: 80px;\n    right: 20px;\n    width: 400px;\n    /* max-height: 400px; */\n    background: white;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n/* Chatbot header */\n.arist-Chatbot .header {\n    background-color: var(--header-background-color, #DA291C); /* Default color */\n    color: var(--header-text-color, white); /* Default color */\n    padding: 10px;\n    font-size: 16px;\n    \n}\n\n.arist-Chatbot .header .close-button {\n    cursor: pointer;\n    font-size: 40px;\n    \n}\n.arist-Chatbot .close-button-container{\n    display: flex;\n    justify-content: space-between;\n}\n.arist-Chatbot .svg-container{\n    display: flex;\n    justify-content: center;\n}\n\n\n/* Chat messages container */\n.arist-Chatbot .chat-messages {\n    flex: 1;\n    padding: 10px;\n    overflow-y: auto;\n    height: 50vh;\n    background-color: var(--chatWindow-background-color, white);\n}\n\n/* Input container */\n.arist-Chatbot .input-container {\n    display: flex;\n    border-top: 1px solid #ccc;\n}\n\n/* Input area */\n.arist-Chatbot .input-area {\n    flex: 1;\n    border: none;\n    padding: 10px;\n    font-size: 14px;\n}\n\n.arist-Chatbot .input-area:focus {\n    outline: none;\n}\n\n/* Send button */\n.arist-Chatbot .send-button {\n    background: none;\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n    font-size: 20px;\n    color: #DA291C;\n}\n\n/* Message */\n.arist-Chatbot .message {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    font-family: var(--font-family, 'Poppins'); /* Default font family */;\n    font-size: 12px;\n    line-height: 18px;\n    font-weight: 400;\n}\n\n  /* ----- pop up modal -----  */\n\n  /* Modal styles */\n  .arist-Chatbot .modal {\n    display: none;\n    position: fixed;\n    z-index: 9999;\n    padding-top: 50px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n  }\n  \n  .arist-Chatbot .modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60vw;\n  }\n  \n  .arist-Chatbot .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .arist-Chatbot .close:hover,\n  .arist-Chatbot .close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  \n  .arist-Chatbot .loading-screen {\n    display: none;\n    position: fixed;\n    z-index: 9999;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    color: white;\n    font-size: 30px;\n    text-align: center;\n    padding-top: 20%;\n}\n#filePreview{\n    height: 80vh;\n    overflow: auto;\n    margin-top: 5vh;\n}\n\n/* ------ header logo & Text------ */\n\n.arist-Chatbot .head-logo{  \n        display: flex;\n        flex-direction: row-reverse;\n        align-items: center;  \n        margin-left: 5%;\n}\n.arist-Chatbot h3.head-text{\n    margin-left: 2rem;\n    font-family: var(--font-family, 'Poppins'); /* Default font family */;\n    font-size: 20px;\n    line-height: 30px;\n    font-weight: 500;\n}\n.arist-Chatbot h2.body-head{\n    font-family: var(--font-family, 'Poppins'); /* Default font family */;\n    font-size: 20px;\n    line-height: 30px;\n    font-weight: 500;\n}\n\n/* -------chat window ------ */\n\n.arist-Chatbot .message {\n    display: flex;\n    align-items: flex-start;\n}\n.arist-Chatbot .message.user {\n    display: flex;\n    flex-direction: row-reverse;\n}\n.arist-Chatbot svg.user-Icon {\n    margin-left: 20px;\n    width: 27px;\n    height: 27px;\n}\n.arist-Chatbot svg.bot-Icon {\n    margin-right: 20px;\n    width: 27px;\n    height: 27px;\n}\n\n/* ----------Authentication window ----------------- */\n.arist-Chatbot .auth-modal{\n    padding: 10px;    \n    height: 50vh;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.arist-Chatbot .auth-button{\n    width: 192px;\n    height: 52px;\n    border-radius: 10px;\n    color: white;\n    border: 1px solid #ccc;\n    background-color: #DA291C;\n    border-color: #DA291C;\n    font-size: medium;\n    margin: 20px 0;    \n    box-sizing: border-box;\n}\n.arist-Chatbot .auth-input {\n    width: 85%;\n    height: 8vh;\n    padding: 10px;\n    margin: 20px 0;\n    border: 1px solid #ccc;\n    border-radius: 11px;\n    box-sizing: border-box;\n    font-size: 16px;\n    background-color: #f9f9f9;\n    border-color: #DA291C;\n    text-align: center;\n}\n.arist-Chatbot .auth-input:focus{\n    border-color: #DA291C;\n}\n\n/* -------- document alignment inside chatbot --------------- */\n.arist-Chatbot .file-button{\n    margin-left: 3vw;\n    color: #0066FF;\n    outline: none;\n    background: none;\n    border: none;\n    cursor: pointer;\n\n}\n\n/* ---------feedback---------------------- */\n.arist-Chatbot .userFeedback{\n    margin-left: 3vw;\n    font-family: var(--font-family, 'Poppins'); /* Default font family */;\n    font-size: 12px;\n    line-height: 18px;\n    font-weight: 400;\n}\n.arist-Chatbot .feedback-text{\n    margin-right: 10px;\n}\n.arist-Chatbot .mR{\n    margin-right: 10px;\n}\n.arist-Chatbot .thumbs-feeback{\n    cursor: pointer;\n}\n.arist-Chatbot .feedback-button{\n    width: 100px;\n    height: 40px;\n    border-radius: 10px;\n    color: white;\n    border: 1px solid #ccc;\n    background-color: var(--header-background-color, #DA291C); /* Default color */;\n    border-color: var(--header-background-color, #DA291C); /* Default color */;\n    font-size: medium;\n    margin: 20px 0;    \n    box-sizing: border-box;\n}\n.arist-Chatbot .feedback-input-area{\n    min-width: 80%;\n    max-width: 80%;\n    max-height: 60px;\n    min-height: 60px;\n    margin-left: 3vw;\n    vertical-align: top;\n    text-align: left;\n    border: 1px solid #ccc; /* Add border */\n    border-radius: 4px; /* Round the corners */\n}\n.arist-Chatbot .feebackButtonParentdiv{\n    display: flex;\n    justify-content: space-between;\n    margin-right: 2vw;\n}\n.arist-Chatbot .char-counter{\n    margin-left: 3vw;\n    font-family: var(--font-family, 'Poppins');\n    font-size: 12px;\n    line-height: 18px;\n    font-weight: 400;\n    color: #5c5858;\n}\n/* ------------- loading ------------- */\n.arist-Chatbot .loading{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 10px;\n    background-color: var(--chatWindow-background-color, white);\n}\n/* ----------- prompt ----------- */\n.arist-Chatbot .promptClass{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    position: relative;\n    height: 100%;\n    justify-content: flex-end;\n}\n\n.arist-Chatbot .prompt-btn{\n    margin-top: 10px;\n    padding: 8px 30px;   \n    border-radius:  50px;\n    border: 1px;\n    background: #f0f0f0;\n    word-break: break-all;\n}\n.arist-Chatbot .prompt-btn:hover {   \n    background-color: #cfc9c994;\n    box-shadow: 0 4px 20px #fefefe;\n    transform: scale(1.05);\n    cursor: pointer;\n}\n.arist-Chatbot .greeting-message{\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    position: relative;\n    top: 35%;\n    bottom: 65%;\n    color: linear-gradient(90deg, yellow, orange);\n\n}\n\n/* ----------- loader css ----------- */\n.arist-Chatbot .loader-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 10vh;\n}\n\n.arist-Chatbot .bouncing-dots {\n    display: flex;\n    justify-content: space-between;\n    width: 60px;\n}\n\n.arist-Chatbot .dot {\n    width: 15px;\n    height: 15px;\n    background-color: #FF5C35;\n    border-radius: 50%;\n    animation: bounce 1.5s infinite;\n}\n\n.arist-Chatbot .dot:nth-child(1) {\n    animation-delay: 0s;\n}\n\n.arist-Chatbot .dot:nth-child(2) {\n    animation-delay: 0.3s;\n}\n\n.arist-Chatbot .dot:nth-child(3) {\n    animation-delay: 0.6s;\n}\n\n@keyframes bounce {\n    0%, 100% {\n        transform: translateY(0);\n    }\n    50% {\n        transform: translateY(-20px);\n    }\n}\n@keyframes blink {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  .arist-Chatbot .greeting-message h3 {\n    animation: blink 2.5s infinite;\n    background: linear-gradient(#DA291C, rgb(228, 112, 4));\n    -webkit-background-clip: text;\n            background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n/* ----- loading message ---------- */\n.arist-Chatbot .loading-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* height: 5vh; */\n}\n\n.arist-Chatbot .loading-text {\n    font-size: 14px;\n    font-weight: bold;\n    color: #483c3c;\n}\n\n.arist-Chatbot .dots::after {\n    content: '';\n    display: inline-block;\n    width: 1em;\n    text-align: left;\n    animation: dots 1.5s steps(4, end) infinite;\n}\n\n@keyframes dots {\n    0%, 20% {\n        content: '';\n    }\n    40% {\n        content: '.';\n    }\n    60% {\n        content: '..';\n    }\n    80%, 100% {\n        content: '...';\n    }\n}\n\n\n/* ------------ responsive ------------------- */\n\n@media only screen and (min-width: 320px) and (max-width: 600px) {\n    .arist-Chatbot .chatbot-modal {\n        \n        width: 90vw;\n        \n    }\n}\n",""]);const c=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=o(h,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),l=0;l<a.length;l++){var d=n(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),s=n.n(c),l=n(56),d=n.n(l),u=n(540),p=n.n(u),h=n(113),f=n.n(h),m=n(365),b={};function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function y(){y=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),c=new j(r||[]);return o(i,"_invoke",{value:T(t,n,c)}),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p="suspendedStart",h="suspendedYield",f="executing",m="completed",b={};function v(){}function x(){}function w(){}var C={};l(C,i,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(P([])));E&&E!==n&&r.call(E,i)&&(C=E);var L=w.prototype=v.prototype=Object.create(C);function A(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==g(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function T(e,n,r){var o=p;return function(a,i){if(o===f)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var s=H(c,r);if(s){if(s===b)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var l=u(e,n,r);if("normal"===l.type){if(o=r.done?m:h,l.arg===b)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function H(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,H(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var a=u(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,b;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,b):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(g(e)+" is not iterable")}return x.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=l(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},A(S.prototype),l(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(d(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},A(L),l(L,s,"Generator"),l(L,i,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),b}},e}function x(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function w(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){x(a,r,o,i,c,"next",t)}function c(t){x(a,r,o,i,c,"throw",t)}i(void 0)}))}}function C(){var t=document.querySelector('meta[name="subscription-key"]');return t?t.getAttribute("content"):""}b.styleTagTransform=f(),b.setAttributes=d(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(m.A,b),m.A&&m.A.locals&&m.A.locals;var k=C(),E=window.location.href,L="",A="",S=new Headers({token:k,url:E});console.log(E);var T="https://arisqatbackend.azurewebsites.net",H="https://standalonechatbot.azurewebsites.net/api/standaloneChatbot",I="https://qastandalone-g9fharfdbjgndhhp.eastus-01.azurewebsites.net";function M(){return M=w(y().mark((function t(e){var n,r,o,a;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(T,"/api/KeyVaultValues/GetKeyIV"),t.next=4,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})});case 4:if((r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:throw o=t.sent,Z.addMessage("Bot",o.message),new Error("HTTP error! Status: ".concat(r.status));case 11:return t.next=13,r.json();case 13:return a=t.sent,A=a.key,L=a.iv,t.abrupt("return",{Getkey:A,Getiv:L});case 19:t.prev=19,t.t0=t.catch(0),console.error("Error fetching Key and IV:",t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,19]])}))),M.apply(this,arguments)}function j(t){return P.apply(this,arguments)}function P(){return(P=w(y().mark((function t(e){var n,r,o,a,i,c;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(new TextEncoder).encode(A),r=(new TextEncoder).encode(L),t.next=4,crypto.subtle.importKey("raw",n,{name:"AES-CBC"},!1,["encrypt"]);case 4:return o=t.sent,a=(new TextEncoder).encode(e),t.next=8,crypto.subtle.encrypt({name:"AES-CBC",iv:r},o,a);case 8:return i=t.sent,c=btoa(String.fromCharCode.apply(String,function(t){if(Array.isArray(t))return v(t)}(s=new Uint8Array(i))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(s)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),t.abrupt("return",c);case 11:case"end":return t.stop()}var s}),t)})))).apply(this,arguments)}console.log(T),console.log(H),console.log(I);var D,N,O,V,F,z,_,B,q,G,R,Z=(D="".concat(H,"?param="),N=!1,O=!1,V=!1,F="",z="",_="",B=document.documentElement.getAttribute("data-icon-url"),q=document.documentElement.getAttribute("data-chaticon-url"),G=document.documentElement.getAttribute("data-header-text"),{createChatBotUI:function(){var t=document.createElement("div");t.classList.add("chatbot-container"),t.classList.add("arist-Chatbot");var e=document.createElement("div");e.classList.add("chatbot-icon"),t.appendChild(e);var n=document.createElement("img");n.setAttribute("src",q),n.setAttribute("width","44"),n.setAttribute("height","39"),n.setAttribute("alt","Arist Chat Icon"),e.appendChild(n);var r=document.createElement("div");r.classList.add("chatbot-modal"),r.style.display="none";var o=document.createElement("div");o.classList.add("header");var a=document.createElement("div");a.classList.add("head-logo");var i=document.createElement("h3");i.classList.add("head-text"),i.textContent=G,a.append(i);var c=document.createElement("div");c.classList.add("svg-container");var s=document.createElement("img");s.setAttribute("src",B),s.setAttribute("width","35"),s.setAttribute("height","31"),s.setAttribute("alt","Arist Icon"),a.append(s);var l=document.createElement("div");l.classList.add("close-button-container");var d=document.createElement("span");d.classList.add("close-button"),d.innerHTML="&times;",d.addEventListener("click",(function(){u.innerHTML="",m.innerHTML="",L.value="",r.style.display="none",e.style.display="flex",Z()})),l.appendChild(a),l.appendChild(d),o.appendChild(l),o.appendChild(c),r.appendChild(o);var u=document.createElement("div");u.classList.add("chat-messages"),r.appendChild(u);var p=document.createElement("div");function h(){var t=document.createElement("div");t.id="greetingDiv",t.classList.add("greeting-message");var e=document.createElement("h3");e.innerHTML="Hello!<br>Setting things up for you.<br>Please wait a moment, and you'll be ready to start!",t.appendChild(e);var n=document.createElement("div");n.id="loaderContainerId",n.className="loader-container";var r=document.querySelector(".bouncing-dots");r?r.innerHTML="":((r=document.createElement("div")).className="bouncing-dots",n.appendChild(r));for(var o=0;o<3;o++){var a=document.createElement("div");a.className="dot",a.id="dotId-".concat(o),a.innerHTML="",r.appendChild(a)}t.appendChild(n),u.appendChild(t)}p.id="loadingdiv",p.classList.add("loading"),r.appendChild(p);var f=document.createElement("div");f.classList.add("input-container");var m=document.createElement("input");m.classList.add("input-area"),m.setAttribute("type","text"),m.setAttribute("placeholder","Please type your question"),f.appendChild(m);var b=document.createElement("button");b.classList.add("send-button"),b.innerHTML="&#x27A4;",b.addEventListener("click",(function(){R(),J(),Z()})),m.addEventListener("keydown",(function(t){if("Enter"===t.key){V&&u.removeChild(C);var e=u.querySelector(".promptClass");e&&u.removeChild(e),R(),J(),Z()}})),f.appendChild(b),r.appendChild(f),t.appendChild(r),document.body.appendChild(t),e.addEventListener("click",(function(){k?(r.style.display="block",e.style.display="none",function(){rt.apply(this,arguments)}()):console.error("Subscription key is null.")}));var g=document.createElementNS("http://www.w3.org/2000/svg","svg");g.setAttribute("xmlns","http://www.w3.org/2000/svg"),g.setAttribute("width","16"),g.setAttribute("height","15"),g.setAttribute("viewBox","0 0 16 15"),g.setAttribute("fill","none"),g.classList.add("mR","thumbs-feeback"),g.onclick=function(){N||(g.style.stroke="#adff2f",v.style.stroke="none",R()),Q(1,"",F,z,_),V=!0,N=!0,O=!1},g.innerHTML='<path d="M12 15H3.75V5.25L9 0L9.9375 0.9375C10.025 1.025 10.0969 1.14375 10.1531 1.29375C10.2094 1.44375 10.2375 1.5875 10.2375 1.725V1.9875L9.4125 5.25H14.25C14.65 5.25 15 5.4 15.3 5.7C15.6 6 15.75 6.35 15.75 6.75V8.25C15.75 8.3375 15.7375 8.43125 15.7125 8.53125C15.6875 8.63125 15.6625 8.725 15.6375 8.8125L13.3875 14.1C13.275 14.35 13.0875 14.5625 12.825 14.7375C12.5625 14.9125 12.2875 15 12 15ZM5.25 13.5H12L14.25 8.25V6.75H7.5L8.5125 2.625L5.25 5.8875V13.5ZM3.75 5.25V6.75H1.5V13.5H3.75V15H0V5.25H3.75Z" fill="#D9D9D9"/>\n';var v=document.createElementNS("http://www.w3.org/2000/svg","svg");v.setAttribute("xmlns","http://www.w3.org/2000/svg"),v.setAttribute("width","17"),v.setAttribute("height","15"),v.setAttribute("viewBox","0 0 17 15"),v.setAttribute("fill","none"),v.classList.add("thumbs-feeback"),v.onclick=function(){O||(O&&(u.removeChild(L),u.removeChild(M)),A.appendChild(T),M.appendChild(A),M.appendChild(P),u.appendChild(L),u.appendChild(M),U(),v.style.stroke="#ff4500e0",g.style.stroke="none"),V=!0,O=!0,N=!1},v.innerHTML='\n    <path d="M4.19556 0H12.4456V9.75L7.19556 15L6.25806 14.0625C6.17056 13.975 6.09868 13.8563 6.04243 13.7063C5.98618 13.5563 5.95806 13.4125 5.95806 13.275V13.0125L6.78306 9.75H1.94556C1.54556 9.75 1.19556 9.6 0.895557 9.3C0.595557 9 0.445557 8.65 0.445557 8.25V6.75C0.445557 6.6625 0.458057 6.56875 0.483057 6.46875C0.508057 6.36875 0.533057 6.275 0.558057 6.1875L2.80806 0.9C2.92056 0.65 3.10806 0.4375 3.37056 0.2625C3.63306 0.0875 3.90806 0 4.19556 0ZM10.9456 1.5H4.19556L1.94556 6.75V8.25H8.69556L7.68306 12.375L10.9456 9.1125V1.5ZM12.4456 9.75V8.25H14.6956V1.5H12.4456V0H16.1956V9.75H12.4456Z" fill="#D9D9D9"/>\n';var x=document.createElementNS("http://www.w3.org/2000/svg","svg");x.setAttribute("xmlns","http://www.w3.org/2000/svg"),x.setAttribute("width","2"),x.setAttribute("height","20"),x.setAttribute("viewBox","0 0 2 20"),x.setAttribute("fill","none"),x.classList.add("mR"),x.innerHTML='\n            <path d="M1 0V20" stroke="#D9D9D9"/>\n        ';var C=document.createElement("div");C.classList.add("userFeedback");var E=document.createElement("span");E.classList.add("feedback-text"),E.textContent="Is this conversation helpful so far?";var L=document.createElement("textarea");L.classList.add("feedback-input-area"),L.setAttribute("type","text"),L.setAttribute("placeholder","Please add feedback");var A=document.createElement("div"),T=document.createElement("span");T.classList.add("char-counter"),L.addEventListener("input",(function(){T.textContent="".concat(L.value.length,"/").concat(500),L.value.length>=500&&(L.value=L.value.slice(0,499)),U()}));var M=document.createElement("div");M.classList.add("feebackButtonParentdiv");var P=document.createElement("button");function R(){var t=u.querySelector(".feedback-input-area"),e=u.querySelector(".feebackButtonParentdiv");t&&e&&(u.removeChild(t),u.removeChild(e))}function Z(){N=!1,O=!1,V=!1,g.style.stroke="none",v.style.stroke="none"}function U(){""!=L.value?(P.style.cursor="pointer",P.disabled=!1):(P.style.cursor="not-allowed",P.disabled=!0)}function Y(){var t=new Date,e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return"".concat(e,"-").concat(n,"-").concat(r)}function J(){var t=m.value.trim();if(""!==t){$("You",t);var e=performance.now();(function(t){return W.apply(this,arguments)})(t).then((function(){var n=performance.now();!function(t,e){tt.apply(this,arguments)}(Math.floor((n-e)/1e3),t)})).catch((function(t){console.error("Error calling API:",t)})),m.value="",u.scrollTop=u.scrollHeight}}P.classList.add("feedback-button"),P.textContent="Submit",P.onclick=function(){Q(0,L.value.trim(),F,z,_),R(),L.value=""};var K="";function W(){return(W=w(y().mark((function t(e){var n,r,o,a,i,c;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="task=getResponse&query=".concat(encodeURIComponent(e)),t.next=3,j(n);case 3:return r=t.sent,o="".concat(D).concat(r),it(),p.appendChild(ot),m.disabled=!0,t.prev=6,t.next=9,fetch(o,{headers:S});case 9:if((a=t.sent).ok){t.next=12;break}throw new Error("Network response was not ok "+a.statusText);case 12:if(!(i=a.headers.get("content-type"))||!i.includes("application/json")){t.next=19;break}return t.next=16,a.json();case 16:c=t.sent,t.next=22;break;case 19:return t.next=21,a.text();case 21:c=t.sent;case 22:c.message?($("Bot",c.message),c.filepath&&c.filepath.forEach((function(t){t.filename&&$("Reference",t.filename,t.filetoken,!0)}))):$("Bot","Sorry, I did not understand that."),F=e,z=c.message,_=c.responseId,t.next=35;break;case 28:t.prev=28,t.t0=t.catch(6),console.error("Error:",t.t0),$("Bot","An error occurred while processing your request."),F=e,z=null,et(t.t0,F);case 35:return t.prev=35,C.appendChild(E),C.appendChild(g),C.appendChild(x),C.appendChild(v),u.appendChild(C),p.textContent="",m.disabled=!1,document.getElementById("loadingId")&&ot.removeChild(at),t.finish(35);case 42:case"end":return t.stop()}}),t,null,[[6,28,35,42]])})))).apply(this,arguments)}function $(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=document.createElement("div");if(o.classList.add("message"),r){var a=document.createElement("button");e.includes("_page_")?(e=(e=e.replace(/\.[^/.]+$/,"")).replace("_page_"," - "),a.textContent=e):a.textContent=e,a.classList.add("file-button"),a.addEventListener("click",(function(){var t=encodeURIComponent(n);try{var e="".concat(I,"/knowledgebase/document/").concat(t,"/").concat(_);window.open(e,"_blank")}catch(t){console.error("Error:",t),$("Bot","An error occurred while fetching the file.")}})),o.appendChild(a)}else"You"===t?(t='\n                            <svg xmlns="http://www.w3.org/2000/svg" class="user-Icon" width="27"  height="27" viewBox="0 0 27 27" fill="none">\n                                <circle cx="13.5" cy="13.5" r="13.5" fill="black"/>\n                                <path d="M17.5762 9.228V10.81H13.5022V13.316H16.6242V14.87H13.5022V19H11.5422V9.228H17.5762Z" fill="white"/>\n                            </svg>',o.classList.add("user")):(t='\n                            <svg xmlns="http://www.w3.org/2000/svg" class="bot-Icon" width="27" height="27" viewBox="0 0 27 27" fill="none">\n                    <circle cx="13.5" cy="13.5" r="13.5" fill="#DA291C"/>\n                    <path d="M15.8853 8L21.2982 19.7678H19.8054L14.3503 8H15.8853Z" fill="#FFFEFE"/>\n                    <path d="M12.9498 8L18.3626 19.7678H16.8692L11.4148 8H12.9498Z" fill="#FFFEFE"/>\n                    <path d="M11.4135 8L6 19.7678H7.49337L12.9478 8H11.4135Z" fill="#FFFEFE"/>\n                    </svg>',o.classList.add("arist-Bot")),o.innerHTML="<strong>".concat(t,"</strong> ").concat(e);document.querySelector(".chat-messages").appendChild(o)}function Q(t,e,n,r,o){return X.apply(this,arguments)}function X(){return X=w(y().mark((function t(e,n,r,o,a){var i,c,s,l,d;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=Y(),t.next=4,j("task=feedback");case 4:return c=t.sent,K=c,s="".concat(D).concat(K),l={query:r,response:o,isLike:e,comment:n,date:i,responseId:a},t.prev=8,t.next=11,fetch(s,{method:"POST",headers:S,body:JSON.stringify(l)});case 11:if((d=t.sent).ok){t.next=14;break}throw new Error("Network response was not ok "+d.statusText);case 14:return t.next=16,d.text();case 16:t.sent,t.next=22;break;case 19:t.prev=19,t.t0=t.catch(8),console.error("Failed to submit feedback:",t.t0);case 22:case"end":return t.stop()}}),t,null,[[8,19]])}))),X.apply(this,arguments)}function tt(){return(tt=w(y().mark((function t(e,n){var r,o,a,i,c;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Y(),t.next=4,j("task=responseTime");case 4:return o=t.sent,K=o,a="".concat(D).concat(K),i={responseTime:e,query:n,date:r},t.prev=8,t.next=11,fetch(a,{method:"POST",headers:S,body:JSON.stringify(i)});case 11:if((c=t.sent).ok){t.next=14;break}throw new Error("Network response was not ok "+c.statusText);case 14:return t.next=16,c.text();case 16:t.sent,t.next=22;break;case 19:t.prev=19,t.t0=t.catch(8),console.error("Error logging response time:",t.t0);case 22:case"end":return t.stop()}}),t,null,[[8,19]])})))).apply(this,arguments)}function et(t,e){return nt.apply(this,arguments)}function nt(){return(nt=w(y().mark((function t(e,n){var r,o,a,i,c;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Y(),t.next=4,j("task=error");case 4:return o=t.sent,K=o,a="".concat(D).concat(K),i={errorMessage:e,query:n,date:r},t.prev=8,t.next=11,fetch(a,{method:"POST",headers:S,body:JSON.stringify(i)});case 11:if((c=t.sent).ok){t.next=14;break}throw new Error("Network response was not ok "+c.statusText);case 14:return t.next=16,c.text();case 16:t.sent,t.next=22;break;case 19:t.prev=19,t.t0=t.catch(8),console.error("Error logging response time:",t.t0);case 22:case"end":return t.stop()}}),t,null,[[8,19]])})))).apply(this,arguments)}function rt(){return(rt=w(y().mark((function t(){var e,n,r,o,a,i,c;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(H,"?task=getPrompts"),p.textContent="",h(),m.disabled=!0,t.prev=2,t.next=5,fetch(e,{headers:S});case 5:if((n=t.sent).ok){t.next=8;break}throw new Error("Network response was not ok "+n.statusText);case 8:if(!(r=n.headers.get("content-type"))||!r.includes("application/json")){t.next=15;break}return t.next=12,n.json();case 12:o=t.sent,t.next=18;break;case 15:return t.next=17,n.text();case 17:o=t.sent;case 18:(a=document.createElement("div")).classList.add("promptClass"),o.forEach((function(t){var e=document.createElement("button");e.classList.add("prompt-btn"),e.textContent=t,e.addEventListener("click",(function(){u.removeChild(a),m.value=t,J()})),a.appendChild(e)})),u.appendChild(a),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(2),console.error("Error:",t.t0);case 27:return t.prev=27,m.disabled=!1,i=document.getElementById("greetingDiv"),(c=document.getElementById("loaderContainerId"))&&c.remove(),i&&i.remove(),t.finish(27);case 34:case"end":return t.stop()}}),t,null,[[2,24,27,34]])})))).apply(this,arguments)}var ot=document.createElement("div"),at=document.createElement("div");function it(){ot.className="loading-container",at.className="loading-text",at.id="loadingId";var t=document.createElement("span");t.className="dots",at.textContent="Processing your request. Please hold on",at.appendChild(t),ot.appendChild(at)}},getSubscriptionKey:C});document.addEventListener("DOMContentLoaded",(function(){Z.createChatBotUI()})),(R=document.createElement("link")).href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap",R.rel="stylesheet",document.head.appendChild(R),function(){M.apply(this,arguments)}(k)})();
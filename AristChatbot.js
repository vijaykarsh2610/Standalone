(()=>{"use strict";var t={365:(t,n,e)=>{e.d(n,{A:()=>s});var o=e(601),a=e.n(o),r=e(314),i=e.n(r)()(a());i.push([t.id,"/* Chatbot container */\n.chatbot-container {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    z-index: 1000;\n}\n\n/* Chatbot icon */\n.arist-Chatbot .chatbot-icon {\n    cursor: pointer;\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    background-color: #f1f1f1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.arist-Chatbot .chatbot-icon svg {\n    width: 44px;\n    height: 39px;\n}\n\n/* Chatbot modal */\n.arist-Chatbot .chatbot-modal {\n    position: fixed;\n    bottom: 80px;\n    right: 20px;\n    width: 400px;\n    /* max-height: 400px; */\n    background: white;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n/* Chatbot header */\n.arist-Chatbot .header {\n    background-color: var(--header-background-color, #DA291C); /* Default color */\n    color: var(--header-text-color, white); /* Default color */\n    padding: 10px;\n    font-size: 16px;\n    \n}\n\n.arist-Chatbot .header .close-button {\n    cursor: pointer;\n    font-size: 40px;\n    \n}\n.arist-Chatbot .close-button-container{\n    display: flex;\n    justify-content: space-between;\n}\n.arist-Chatbot .svg-container{\n    display: flex;\n    justify-content: center;\n}\n\n\n/* Chat messages container */\n.arist-Chatbot .chat-messages {\n    flex: 1;\n    padding: 10px;\n    overflow-y: auto;\n    height: 50vh;\n}\n\n/* Input container */\n.arist-Chatbot .input-container {\n    display: flex;\n    border-top: 1px solid #ccc;\n}\n\n/* Input area */\n.arist-Chatbot .input-area {\n    flex: 1;\n    border: none;\n    padding: 10px;\n    font-size: 14px;\n}\n\n.arist-Chatbot .input-area:focus {\n    outline: none;\n}\n\n/* Send button */\n.arist-Chatbot .send-button {\n    background: none;\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n    font-size: 20px;\n    color: #DA291C;\n}\n\n/* Message */\n.arist-Chatbot .message {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    font-family: var(--font-family, 'Poppins'); /* Default font family */;\n    font-size: 12px;\n    line-height: 18px;\n    font-weight: 400;\n}\n\n  /* ----- pop up modal -----  */\n\n  /* Modal styles */\n  .arist-Chatbot .modal {\n    display: none;\n    position: fixed;\n    z-index: 9999;\n    padding-top: 50px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0,0,0);\n    background-color: rgba(0,0,0,0.4);\n  }\n  \n  .arist-Chatbot .modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60vw;\n  }\n  \n  .arist-Chatbot .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .arist-Chatbot .close:hover,\n  .arist-Chatbot .close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  \n  .arist-Chatbot .loading-screen {\n    display: none;\n    position: fixed;\n    z-index: 9999;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    color: white;\n    font-size: 30px;\n    text-align: center;\n    padding-top: 20%;\n}\n#filePreview{\n    height: 80vh;\n    overflow: auto;\n    margin-top: 5vh;\n}\n\n/* ------ header logo & Text------ */\n\n.arist-Chatbot .head-logo{  \n        display: flex;\n        flex-direction: row-reverse;\n        align-items: center;  \n        margin-left: 5%;\n}\n.arist-Chatbot h3.head-text{\n    margin-left: 2rem;\n    font-family: var(--font-family, 'Poppins'); /* Default font family */;\n    font-size: 20px;\n    line-height: 30px;\n    font-weight: 500;\n}\n.arist-Chatbot h2.body-head{\n    font-family: var(--font-family, 'Poppins'); /* Default font family */;\n    font-size: 20px;\n    line-height: 30px;\n    font-weight: 500;\n}\n\n/* -------chat window ------ */\n\n.arist-Chatbot .message {\n    display: flex;\n    align-items: flex-start;\n}\n.arist-Chatbot .message.user {\n    display: flex;\n    flex-direction: row-reverse;\n}\n.arist-Chatbot svg.user-Icon {\n    margin-left: 20px;\n    width: 27px;\n    height: 27px;\n}\n.arist-Chatbot svg.bot-Icon {\n    margin-right: 20px;\n    width: 27px;\n    height: 27px;\n}\n\n/* ----------Authentication window ----------------- */\n.arist-Chatbot .auth-modal{\n    padding: 10px;    \n    height: 50vh;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.arist-Chatbot .auth-button{\n    width: 192px;\n    height: 52px;\n    border-radius: 10px;\n    color: white;\n    border: 1px solid #ccc;\n    background-color: #DA291C;\n    border-color: #DA291C;\n    font-size: medium;\n    margin: 20px 0;    \n    box-sizing: border-box;\n}\n.arist-Chatbot .auth-input {\n    width: 85%;\n    height: 8vh;\n    padding: 10px;\n    margin: 20px 0;\n    border: 1px solid #ccc;\n    border-radius: 11px;\n    box-sizing: border-box;\n    font-size: 16px;\n    background-color: #f9f9f9;\n    border-color: #DA291C;\n    text-align: center;\n}\n.arist-Chatbot .auth-input:focus{\n    border-color: #DA291C;\n}\n\n/* -------- document alignment inside chatbot --------------- */\n.arist-Chatbot .file-button{\n    margin-left: 3vw;\n    color: #0066FF;\n    outline: none;\n    background: none;\n    border: none;\n    cursor: pointer;\n\n}\n\n/* ---------feedback---------------------- */\n.arist-Chatbot .userFeedback{\n    margin-left: 3vw;\n    font-family: var(--font-family, 'Poppins'); /* Default font family */;\n    font-size: 12px;\n    line-height: 18px;\n    font-weight: 400;\n}\n.arist-Chatbot .feedback-text{\n    margin-right: 10px;\n}\n.arist-Chatbot .mR{\n    margin-right: 10px;\n}\n.arist-Chatbot .thumbs-feeback{\n    cursor: pointer;\n}\n.arist-Chatbot .feedback-button{\n    width: 100px;\n    height: 40px;\n    border-radius: 10px;\n    color: white;\n    border: 1px solid #ccc;\n    background-color: var(--header-background-color, #DA291C); /* Default color */;\n    border-color: var(--header-background-color, #DA291C); /* Default color */;\n    font-size: medium;\n    margin: 20px 0;    \n    box-sizing: border-box;\n}\n.arist-Chatbot .feedback-input-area{\n    width: 80%;\n    height: 64px;\n    margin-left: 3vw;\n}\n.arist-Chatbot .feebackButtonParentdiv{\n    display: flex;\n    justify-content: flex-end;\n    margin-right: 2vw;\n}\n\n/* ------------- loading ------------- */\n.arist-Chatbot .loading{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 10px;\n}\n\n/* ------------ responsive ------------------- */\n\n@media only screen and (min-width: 320px) and (max-width: 600px) {\n    .arist-Chatbot .chatbot-modal {\n        \n        width: 90vw;\n        \n    }\n}\n",""]);const s=i},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var r={},i=[],s=0;s<t.length;s++){var d=t[s],c=o.base?d[0]+o.base:d[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=e(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=a(h,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var r=o(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<r.length;i++){var s=e(r[i]);n[s].references--}for(var d=o(t,a),c=0;c<r.length;c++){var l=e(r[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},659:t=>{var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,a&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return t[o](r,r.exports,e),r.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0;var o=e(72),a=e.n(o),r=e(825),i=e.n(r),s=e(659),d=e.n(s),c=e(56),l=e.n(c),p=e(540),u=e.n(p),h=e(113),f=e.n(h),b=e(365),m={};function g(){var t=document.querySelector('meta[name="subscription-key"]');return t?t.getAttribute("content"):""}m.styleTagTransform=f(),m.setAttributes=l(),m.insert=d().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),a()(b.A,m),b.A&&b.A.locals&&b.A.locals;var v=g();const x=new Headers({token:v});var C,w=function(){var t=!1,n=!1,e=!1;const o=document.documentElement.getAttribute("data-icon-url"),a=document.documentElement.getAttribute("data-chaticon-url"),r=document.documentElement.getAttribute("data-header-text");return{createChatBotUI:function(){var i=document.createElement("div");i.classList.add("chatbot-container"),i.classList.add("arist-Chatbot");var s=document.createElement("div");s.classList.add("chatbot-icon"),i.appendChild(s);var d=document.createElement("img");d.setAttribute("src",a),d.setAttribute("width","44"),d.setAttribute("height","39"),d.setAttribute("alt","Arist Chat Icon"),s.appendChild(d);var c=document.createElement("div");c.classList.add("chatbot-modal"),c.style.display="none";var l=document.createElement("div");l.classList.add("header");var p=document.createElement("div");p.classList.add("head-logo");var u=document.createElement("h3");u.classList.add("head-text"),u.textContent=r,p.append(u);var h=document.createElement("div");h.classList.add("svg-container");var f=document.createElement("img");f.setAttribute("src",o),f.setAttribute("width","35"),f.setAttribute("height","31"),f.setAttribute("alt","Arist Icon"),p.append(f);var b=document.createElement("div");b.classList.add("close-button-container");var m=document.createElement("span");m.classList.add("close-button"),m.innerHTML="&times;",m.addEventListener("click",(function(){g.innerHTML="",c.style.display="none",s.style.display="flex",T()})),b.appendChild(p),b.appendChild(m),l.appendChild(b),l.appendChild(h),c.appendChild(l);var g=document.createElement("div");g.classList.add("chat-messages"),c.appendChild(g);var C=document.createElement("div");C.classList.add("loading"),c.appendChild(C);var w=document.createElement("div");w.classList.add("input-container");var y=document.createElement("input");y.classList.add("input-area"),y.setAttribute("type","text"),y.setAttribute("placeholder","Please type your question"),w.appendChild(y);var L=document.createElement("button");L.classList.add("send-button"),L.innerHTML="&#x27A4;",L.addEventListener("click",(function(){F(),T()})),y.addEventListener("keydown",(function(n){"Enter"===n.key&&(e&&(t||(g.removeChild(V),g.removeChild(z),g.removeChild(H))),F(),T())})),w.appendChild(L),c.appendChild(w),i.appendChild(c),document.body.appendChild(i),s.addEventListener("click",(function(){v?(c.style.display="block",s.style.display="none"):console.error("Subscription key is null.")}));var k=document.createElementNS("http://www.w3.org/2000/svg","svg");k.setAttribute("xmlns","http://www.w3.org/2000/svg"),k.setAttribute("width","16"),k.setAttribute("height","15"),k.setAttribute("viewBox","0 0 16 15"),k.setAttribute("fill","none"),k.classList.add("mR","thumbs-feeback"),k.onclick=function(){t||(k.style.stroke="#adff2f",A.style.stroke="none",n&&(g.removeChild(V),g.removeChild(z))),e=!0,t=!0,n=!1},k.innerHTML='<path d="M12 15H3.75V5.25L9 0L9.9375 0.9375C10.025 1.025 10.0969 1.14375 10.1531 1.29375C10.2094 1.44375 10.2375 1.5875 10.2375 1.725V1.9875L9.4125 5.25H14.25C14.65 5.25 15 5.4 15.3 5.7C15.6 6 15.75 6.35 15.75 6.75V8.25C15.75 8.3375 15.7375 8.43125 15.7125 8.53125C15.6875 8.63125 15.6625 8.725 15.6375 8.8125L13.3875 14.1C13.275 14.35 13.0875 14.5625 12.825 14.7375C12.5625 14.9125 12.2875 15 12 15ZM5.25 13.5H12L14.25 8.25V6.75H7.5L8.5125 2.625L5.25 5.8875V13.5ZM3.75 5.25V6.75H1.5V13.5H3.75V15H0V5.25H3.75Z" fill="#D9D9D9"/>\n';var A=document.createElementNS("http://www.w3.org/2000/svg","svg");A.setAttribute("xmlns","http://www.w3.org/2000/svg"),A.setAttribute("width","17"),A.setAttribute("height","15"),A.setAttribute("viewBox","0 0 17 15"),A.setAttribute("fill","none"),A.classList.add("thumbs-feeback"),A.onclick=function(){n||(n&&(g.removeChild(V),g.removeChild(z)),z.appendChild(I),g.appendChild(V),g.appendChild(z),A.style.stroke="#ff4500e0",k.style.stroke="none"),e=!0,n=!0,t=!1},A.innerHTML='\n    <path d="M4.19556 0H12.4456V9.75L7.19556 15L6.25806 14.0625C6.17056 13.975 6.09868 13.8563 6.04243 13.7063C5.98618 13.5563 5.95806 13.4125 5.95806 13.275V13.0125L6.78306 9.75H1.94556C1.54556 9.75 1.19556 9.6 0.895557 9.3C0.595557 9 0.445557 8.65 0.445557 8.25V6.75C0.445557 6.6625 0.458057 6.56875 0.483057 6.46875C0.508057 6.36875 0.533057 6.275 0.558057 6.1875L2.80806 0.9C2.92056 0.65 3.10806 0.4375 3.37056 0.2625C3.63306 0.0875 3.90806 0 4.19556 0ZM10.9456 1.5H4.19556L1.94556 6.75V8.25H8.69556L7.68306 12.375L10.9456 9.1125V1.5ZM12.4456 9.75V8.25H14.6956V1.5H12.4456V0H16.1956V9.75H12.4456Z" fill="#D9D9D9"/>\n';var E=document.createElementNS("http://www.w3.org/2000/svg","svg");E.setAttribute("xmlns","http://www.w3.org/2000/svg"),E.setAttribute("width","2"),E.setAttribute("height","20"),E.setAttribute("viewBox","0 0 2 20"),E.setAttribute("fill","none"),E.classList.add("mR"),E.innerHTML='\n            <path d="M1 0V20" stroke="#D9D9D9"/>\n        ';var H=document.createElement("div");H.classList.add("userFeedback");var M=document.createElement("span");function D(){H.appendChild(M),H.appendChild(k),H.appendChild(E),H.appendChild(A),g.appendChild(H)}M.classList.add("feedback-text"),M.textContent="Is this conversation helpful so far?";var V=document.createElement("input");V.classList.add("feedback-input-area"),V.setAttribute("type","text"),V.setAttribute("placeholder","Please add feedback");var z=document.createElement("div");z.classList.add("feebackButtonParentdiv");var I=document.createElement("button");function T(){t=!1,n=!1,e=!1,k.style.stroke="none",A.style.stroke="none"}function F(){var t=y.value.trim();""!==t&&(S("You",t),function(t){const n=`https://standalonechatbot.azurewebsites.net/api/standaloneChatbot?task=getResponse&query=${encodeURIComponent(t)}`;C.textContent="Loading...",y.disabled=!0,fetch(n,{headers:x}).then((t=>{if(!t.ok)throw new Error("Network response was not ok "+t.statusText);return t.json()})).then((t=>{t.message?(S("Bot",t.message),t.filepath&&t.filepath.forEach((function(t){S("Reference",t,!0)}))):S("Bot","Sorry, I did not understand that."),D(),C.textContent="",y.disabled=!1})).catch((t=>{console.error("Error:",t),S("Bot","An error occurred while processing your request."),D(),C.textContent="",y.disabled=!1}))}(t),y.value="",g.scrollTop=g.scrollHeight)}function S(t,n,e=!1){var o=document.createElement("div");if(o.classList.add("message"),e){var a=document.createElement("button");a.textContent=n,a.classList.add("file-button"),a.addEventListener("click",(function(){const t=`https://standalonechatbot.azurewebsites.net/api/standaloneChatbot?task=getfile&file_name=${encodeURIComponent(n)}`;fetch(t).then((t=>{if(!t.ok)throw new Error("Network response was not ok "+t.statusText);return t.blob()})).then((t=>{const e=n.split(".").pop().toLowerCase(),o=URL.createObjectURL(t);"pdf"===e&&window.open(o,"_blank")})).catch((t=>{console.error("Error:",t),S("Bot","An error occurred while fetching the file.")}))})),o.appendChild(a)}else"You"===t?(t='\n                            <svg xmlns="http://www.w3.org/2000/svg" class="user-Icon" width="27"  height="27" viewBox="0 0 27 27" fill="none">\n                                <circle cx="13.5" cy="13.5" r="13.5" fill="black"/>\n                                <path d="M17.5762 9.228V10.81H13.5022V13.316H16.6242V14.87H13.5022V19H11.5422V9.228H17.5762Z" fill="white"/>\n                            </svg>',o.classList.add("user")):(t='\n                            <svg xmlns="http://www.w3.org/2000/svg" class="bot-Icon" width="27" height="27" viewBox="0 0 27 27" fill="none">\n                    <circle cx="13.5" cy="13.5" r="13.5" fill="#DA291C"/>\n                    <path d="M15.8853 8L21.2982 19.7678H19.8054L14.3503 8H15.8853Z" fill="#FFFEFE"/>\n                    <path d="M12.9498 8L18.3626 19.7678H16.8692L11.4148 8H12.9498Z" fill="#FFFEFE"/>\n                    <path d="M11.4135 8L6 19.7678H7.49337L12.9478 8H11.4135Z" fill="#FFFEFE"/>\n                    </svg>',o.classList.add("arist-Bot")),o.innerHTML=`<strong>${t}</strong> ${n}`;document.querySelector(".chat-messages").appendChild(o)}I.classList.add("feedback-button"),I.textContent="Submit"},getSubscriptionKey:g}}();document.addEventListener("DOMContentLoaded",(function(){w.createChatBotUI()})),(C=document.createElement("link")).href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap",C.rel="stylesheet",document.head.appendChild(C)})();
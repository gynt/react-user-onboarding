/*! For license information please see main.fec9799e.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-user-onboarding-example"]=this["webpackJsonpreact-user-onboarding-example"]||[]).push([[0],[,function(e,t,n){},,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/plus.5e88ea2b.svg"},function(e,t,n){"use strict";n.r(t);n(1);var o=n(0),a=n.n(o),r=n(3),l=n.n(r),c=n(4);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function s(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function u(e,t){return e(t={exports:{}},t.exports),t.exports}var m="function"===typeof Symbol&&Symbol.for,d=m?Symbol.for("react.element"):60103,p=m?Symbol.for("react.portal"):60106,f=m?Symbol.for("react.fragment"):60107,b=m?Symbol.for("react.strict_mode"):60108,y=m?Symbol.for("react.profiler"):60114,h=m?Symbol.for("react.provider"):60109,g=m?Symbol.for("react.context"):60110,E=m?Symbol.for("react.async_mode"):60111,v=m?Symbol.for("react.concurrent_mode"):60111,N=m?Symbol.for("react.forward_ref"):60112,w=m?Symbol.for("react.suspense"):60113,x=m?Symbol.for("react.suspense_list"):60120,C=m?Symbol.for("react.memo"):60115,k=m?Symbol.for("react.lazy"):60116,O=m?Symbol.for("react.block"):60121,j=m?Symbol.for("react.fundamental"):60117,T=m?Symbol.for("react.responder"):60118,R=m?Symbol.for("react.scope"):60119;function _(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case d:switch(e=e.type){case E:case v:case f:case y:case b:case w:return e;default:switch(e=e&&e.$$typeof){case g:case N:case k:case C:case h:return e;default:return t}}case p:return t}}}function S(e){return _(e)===v}var I={AsyncMode:E,ConcurrentMode:v,ContextConsumer:g,ContextProvider:h,Element:d,ForwardRef:N,Fragment:f,Lazy:k,Memo:C,Portal:p,Profiler:y,StrictMode:b,Suspense:w,isAsyncMode:function(e){return S(e)||_(e)===E},isConcurrentMode:S,isContextConsumer:function(e){return _(e)===g},isContextProvider:function(e){return _(e)===h},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===d},isForwardRef:function(e){return _(e)===N},isFragment:function(e){return _(e)===f},isLazy:function(e){return _(e)===k},isMemo:function(e){return _(e)===C},isPortal:function(e){return _(e)===p},isProfiler:function(e){return _(e)===y},isStrictMode:function(e){return _(e)===b},isSuspense:function(e){return _(e)===w},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===f||e===v||e===y||e===b||e===w||e===x||"object"===typeof e&&null!==e&&(e.$$typeof===k||e.$$typeof===C||e.$$typeof===h||e.$$typeof===g||e.$$typeof===N||e.$$typeof===j||e.$$typeof===T||e.$$typeof===R||e.$$typeof===O)},typeOf:_},P=(u((function(e,t){0})),u((function(e){e.exports=I})),Object.getOwnPropertySymbols),W=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;function $(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}})()&&Object.assign;var L="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function B(e,t,n,o,a){}B.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function H(){}function V(){}V.resetWarningCache=H;var M=u((function(e){e.exports=function(){function e(e,t,n,o,a,r){if(r!==L){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:V,resetWarningCache:H};return n.PropTypes=n,n}()}));function A(e,t,n){void 0===n&&(n=window);var a=Object(o.useRef)();Object(o.useEffect)((function(){a.current=t}),[t]),Object(o.useEffect)((function(){if(n&&n.addEventListener){var t=function(e){return a.current(e)};return n.addEventListener(e,t),function(){n.removeEventListener(e,t)}}}),[e,n])}var U={"modal-pane":"_3WGgp","modal-content":"_315cL","modal-header":"_19ZDP","modal-body":"_3-4yw",close:"_2E3lY",bold:"_o2-tb",clearfix:"_1n3Lk","align-center":"_2t0S1","button-primary":"_1szgW","button-secondary":"_3t0Wm","show-modal":"_r3Qnu"},z=function(e){for(var t,n=e.intro,r=e.index,l=e.setIndex,c=e.className,i=e.maxLength,u=e.isVisible,m=e.onClose,d=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["intro","index","setIndex","className","maxLength","isVisible","onClose"]),p=function(e){return e>=0&&e<=i-1},f=function(){p(r-1)?l(r-1):y()},b=function(){p(r+1)?l(r+1):y()},y=function(){m(),l(0)},h=s(document.getElementsByTagName("section"));!(t=h()).done;){var g=t.value;document.body.removeChild(g)}return A("keydown",Object(o.useCallback)((function(e){var t=(e=e||window.event).keyCode;[38,39].includes(t)?b():[40,37].includes(t)?f():27===t&&y()}))),a.a.createElement("div",{className:c+" "+U["modal-pane"]+" "+(u&&U["show-modal"])},a.a.createElement("div",{className:""+U["modal-content"]},a.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/6-512.png"}),a.a.createElement("div",{className:U["modal-header"]+" "+U["fixed-top"]},a.a.createElement("h4",null),a.a.createElement("span",{className:U.close,onClick:m})),a.a.createElement("div",{className:""+U["modal-body"]},d.children,n?a.a.createElement("div",{className:U["align-center"]},a.a.createElement("button",{className:U["button-primary"],onClick:b},"Yes, show me"),a.a.createElement("button",{className:U["button-secondary"],onClick:y},"Not right now")):r===i-1?a.a.createElement("div",{className:U["align-center"]},a.a.createElement("button",{className:U["button-secondary"],onClick:f},"previous"),a.a.createElement("button",{className:U["button-primary"],onClick:y},"End Tour")):a.a.createElement("div",{className:U["align-center"]},a.a.createElement("button",{className:U["button-secondary"],onClick:f},"previous"),a.a.createElement("button",{className:U["button-primary"],onClick:b},"next")))))};z.propTypes={intro:M.bool.isRequired,index:M.number.isRequired,setIndex:M.func.isRequired,className:M.string,maxLength:M.number.isRequired,isVisible:M.bool.isRequired,onClose:M.func.isRequired},z.defaultProps={isVisible:!1};var D={container:"_ijPnU",tooltipContent:"_2hASn",fadeIn:"_3xW5u",sm:"_88Wrj",md:"_Ks2th",close:"_3s8Eb",arrow:"_33nJ1",top:"_3QwLY",right:"_37Jt9",left:"_26cC8",center:"_1x_r7",bottom:"_Kl1rb","align-center":"_2Q31f","button-primary":"_1hnkw","button-secondary":"_2rcQQ",exclude:"_zIGqj",overlayZ:"_1WC86"},G=function(e){var t=e&&e.getBoundingClientRect()||[],n=t.width,o=t.height,a=0,r=0,l=0,c=0;if(e.offsetParent)do{a+=e.offsetLeft,l+=e.offsetTop,e=e.offsetParent}while(e);return r=a+n,c=l+o,{left:a=a>=0?a:0,right:r=r>=0?r:0,top:l=l>=0?l:0,bottom:c=c>=0?c:0}},J=function(e){var t,n=e.index,r=e.setIndex,l=e.selectedData,c=e.maxLength,i=e.title,u=e.isVisible,m=e.onClose,d=Object(o.useRef)(null),p=Object(o.useRef)(null),f=Object(o.useState)(null),b=f[0],y=f[1],h=Object(o.useState)(null),g=h[0],E=h[1],v=Object(o.useState)([null,""]),N=v[0],w=v[1],x=Object(o.useState)(!1),C=x[0],k=x[1],O=Object(o.useState)(!1)[1];Object(o.useEffect)((function(){if(p.current&&!b){var e=p.current||[],t=e.offsetWidth,n=e.offsetHeight;y({offsetWidth:t,offsetHeight:n})}}),[p]);var j=function(e){return e>=0&&e<=c-1},T=function(){q.style.removeProperty("z-index"),j(n-1)?r(n-1):_()},R=function(){q.style.removeProperty("z-index"),j(n+1)?r(n+1):_()},_=function(){S(),m(),r(0)},S=function(){for(var e,t=s(document.getElementsByTagName("section"));!(e=t()).done;){var n=e.value;document.body.removeChild(n)}q.style.zIndex=0},I=function(e,t){var n=e||[],o=n.width,a=n.height,r=G(q)||[],l=r.top;return[{position:"absolute",background:"transparent",left:r.left+"px",width:o+"px",height:a+"px",top:l+"px",opacity:1},function(e){var t=document.body,n=t.scrollWidth,o=t.scrollHeight;if(e){var a=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);o=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),n=a}var r=q.getBoundingClientRect(),l=r.left,c=r.right,i=r.top,s=r.bottom,u=b||[],m=u.offsetWidth,d=u.offsetHeight,p=n<c+m,f=o<s+d,y=l<m,h=i<d;return f?y&&!p||!p?"right":p&&!y?"left":f&&!h?"top":"center":"bottom"}(t)]},P=function(e){var t=G(e).top,n=(p.current.getBoundingClientRect()||[]).height,o=parseInt(t-n);(function(e,t){var n=e.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight;return!(Math.floor(100-(n.top>=0?0:n.top)/(+-n.height/1)*100)<t||Math.floor(100-(n.bottom-o)/n.height*100)<t)})(e,100)||window.scrollTo(0,o)},W=l.attachToId,q=document.getElementById(W);Object(o.useEffect)((function(){var e;j(n)&&(q.style.zIndex=999,0!==document.getElementsByTagName("section").length||C||((e=document.createElement("section")).style.overflow="scroll",e.style.width=document.body.scrollWidth+"px",e.style.height=document.body.scrollHeight+"px",document.body.prepend(e)),function(){var e=q&&q.getBoundingClientRect();E(e),O(!1)}(),console.log("TRIGGER.."),P(p.current))}),[n]);var $=Object(o.useCallback)((function(e){var t=(e=e||window.event).keyCode;[38,39].includes(t)?R():[40,37].includes(t)?T():27===t&&(S(),k(!0),_())})),L=Object(o.useCallback)((function(){var e=q&&q.getBoundingClientRect();E(e),O(!1);var t=document.getElementsByTagName("section"),n=t&&t[0];n&&(n.style.width=document.body.scrollWidth+"px",n.style.height=document.body.scrollHeight+"px")})),B=Object(o.useCallback)((function(){var e=q&&q.getBoundingClientRect();E(e),O(!0);var t=e?I(e,!0):[],n=t[0],o=t[1];w([n,o])}));A("keydown",$),A("resize",L),A("mousemove",B),A("scroll",B),Object(o.useEffect)((function(){var e=g?I(g,!1):[],t=e[0],n=e[1];w([t,n])}),[g]);var H=N[0],V=N[1];return console.log(p.current&&function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=document.documentElement.clientHeight&&t.right<=document.documentElement.clientWidth}(p.current)),a.a.createElement("div",((t={className:D.container,"data-testid":"tooltip",ref:d}).className="exclude",t.style=H,t),a.a.createElement("div",{"data-testid":"tooltip-placeholder"}),u&&a.a.createElement("div",{ref:p,className:D.tooltipContent+" "+D[V],"data-testid":"tooltip-content"},a.a.createElement("span",{className:D.arrow}),a.a.createElement("p",{style:{textAlign:"right"}},a.a.createElement("span",{className:""+D.close,onClick:m})),i,a.a.createElement("div",{className:D["align-center"]},a.a.createElement("button",{className:D["button-secondary"],onClick:T},"Prev"),a.a.createElement("button",{className:D["button-primary"],onClick:R},"Next"))))};J.propTypes={index:M.number.isRequired,setIndex:M.func.isRequired,selectedData:M.object.isRequired,maxLength:M.number.isRequired,title:M.object.isRequired,isVisible:M.bool.isRequired,onClose:M.func.isRequired};var Q="_3rS0E",F="_3a-Cs",K="_T5Wmi",Y="_VWNpD",Z="_9Ojvx",X="_342p1",ee="_2R6VH",te="_1OmM8",ne="_3PCpd",oe=function(e){var t,n=e.index,r=e.setIndex,l=e.maxLength,c=e.title,i=e.isVisible,u=e.onClose,m=Object(o.useRef)(null),d=Object(o.useState)(!1),p=d[0],f=d[1],b=function(e){return e>=0&&e<=l-1},y=function(){b(n-1)?r(n-1):g()},h=function(){b(n+1)?r(n+1):g()},g=function(){E(),u(),r(0)},E=function(){for(var e,t=s(document.getElementsByTagName("section"));!(e=t()).done;){var n=e.value;document.body.removeChild(n)}};Object(o.useEffect)((function(){if(b(n)){var e;0!==document.getElementsByTagName("section").length||p||((e=document.createElement("section")).style.width=document.body.scrollWidth+"px",e.style.height=document.body.scrollHeight+"px",document.body.prepend(e));var t=m&&m.current;t&&v(t)}}),[n,m]);var v=function(e){var t=G(e).top,n=e.offsetHeight;console.log(t,n),function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(e)||window.scrollTo(0,t)};return A("keydown",Object(o.useCallback)((function(e){var t=(e=e||window.event).keyCode;[38,39].includes(t)?(console.log("Forward Keys"),h()):[40,37].includes(t)?(console.log("Back Keys"),y()):27===t&&(console.log("Cancel Keys"),E(),f(!0),g())}))),a.a.createElement("div",((t={className:Q,"data-testid":"tooltip"}).className="exclude",t.style={width:"100px",height:"100px",position:"fixed",bottom:0,left:0,zIndex:999},t),a.a.createElement("div",{"data-testid":"tooltip-placeholder"},a.a.createElement("img",{className:F,style:{bottom:window.innerHeight+window.screenY+" px"},src:"https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/6-512.png"})),i&&a.a.createElement("div",{ref:m,className:K+" "+X,"data-testid":"tooltip-content"},a.a.createElement("span",{className:Z}),a.a.createElement("p",{className:Y,onClick:u}),c,a.a.createElement("div",{className:ee},a.a.createElement("button",{className:ne,onClick:y},"Prev"),a.a.createElement("button",{className:te,onClick:h},"Next"))))};oe.propTypes={index:M.number.isRequired,setIndex:M.func.isRequired,maxLength:M.number.isRequired,title:M.object.isRequired,isVisible:M.bool.isRequired,onClose:M.func.isRequired};var ae=function(e){var t=e.story,n=e.isVisible,r=e.onClose,l=Object(o.useState)(0),c=l[0],i=l[1],u=Object(o.useState)(!1),m=u[0],d=u[1];Object(o.useEffect)((function(){d(n),n||p()}),[n]);var p=function(){for(var e,t=s(document.getElementsByTagName("section"));!(e=t()).done;){var n=e.value;document.body.removeChild(n)}},f=t[c];return m?a.a.createElement("div",null,"modal"===f.component?a.a.createElement(z,{index:c,onClose:r,isVisible:m,setIndex:i,maxLength:t.length,className:f.className,intro:f.intro||!1},f.children):"tooltip"===f.component?a.a.createElement(J,{index:c,selectedData:f,setIndex:i,maxLength:t.length,isVisible:m,className:f.className,onClose:r,title:f.children}):"speech-bubble"===f.component?a.a.createElement(oe,{index:c,setIndex:i,maxLength:t.length,className:f.className,isVisible:m,onClose:r,title:f.children}):null):null};ae.propTypes={story:M.array.isRequired,isVisible:M.bool.isRequired,onClose:M.func.isRequired},ae.defaultProps={isVisible:!1};var re=ae;n(10);var le=()=>{const e=Object(o.useState)(!1),t=Object(c.a)(e,2),r=t[0],l=t[1],i=[{component:"modal",intro:!0,className:"hello",children:a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("b",null,"Hi there")," ",a.a.createElement("span",{role:"img","aria-label":"hello"},"\ud83d\udc4b")),a.a.createElement("p",null,"Welcome to React User Onboarding Demo App. This is a sample illustration of how the library can be implemented in your existing web apps."),a.a.createElement("p",null,'Would you like to have a tour to see how it works? (If you skip, you can click the "Quick Onboarding Tour" button to get started again)'))},{component:"tooltip",attachToId:"elem1",children:a.a.createElement("div",null,a.a.createElement("p",null,"This shows the list of all the tasks you have added"))},{component:"tooltip",attachToId:"elem2",children:a.a.createElement("div",null,a.a.createElement("p",null,"Enter a keyword to search the tasks you have added already."))},{component:"tooltip",attachToId:"elem3",children:a.a.createElement("div",null,a.a.createElement("p",null,"Click to add more tasks."))},{component:"speech-bubble",children:a.a.createElement("div",null,a.a.createElement("p",null,"This is a speech bubble, you can add more information or guide instruction or explanation here."))},{component:"tooltip",attachToId:"elem4",children:a.a.createElement("div",null,a.a.createElement("p",null,'Click on this space to show only "Important" tasks.'))},{component:"tooltip",attachToId:"elem5",children:a.a.createElement("div",null,a.a.createElement("p",null,'Click on this space to show only "Urgent" tasks.'))},{component:"tooltip",attachToId:"elem6",children:a.a.createElement("div",null,a.a.createElement("p",null,'Click on this space to show only "Not Important & Not Urgent" tasks.'))},{component:"modal",intro:!1,children:a.a.createElement("div",null,a.a.createElement("p",null,"Thanks Damilola!"),a.a.createElement("p",null,"You have now come to the end of the onboarding demo."))}];return a.a.createElement("div",{className:"app-container row"},a.a.createElement("div",{className:"intro col-md-12 col-lg-4 p-0"},a.a.createElement("div",null,a.a.createElement("h2",null,"Hello there! ",a.a.createElement("span",{role:"img","aria-label":"hello"},"\ud83d\udc4b")),a.a.createElement("h1",null,"Get your priorities right with too-doo!"),a.a.createElement("p",null,"The most effective to-do app you'll ever need. Inspired by Eisenhower."),a.a.createElement("button",{className:"button-start",onClick:()=>l(!0)},"Quick Onboarding Tour"))),a.a.createElement("div",{className:"appss col-md-12 col-lg-8 p-0s mb-4"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-6 app-right p-0"},a.a.createElement("div",{className:"row-3"},a.a.createElement("div",{className:"col-8 bg-pink box",id:"elem2"},a.a.createElement("h1",null,"02"),a.a.createElement("p",null,"Important And Urgent")),a.a.createElement("div",{className:"col-4 bg-yellow box",id:"elem4"},a.a.createElement("p",{className:"small rotate-90"},a.a.createElement("span",{className:"bigger"},"05")," Important but Not Urgent"))),a.a.createElement("div",{className:"row-1"},a.a.createElement("div",{className:"col bg-green box",id:"elem5"},a.a.createElement("p",{className:"small"},"Not Important and Urgent"),a.a.createElement("p",{className:"small"},"02")),a.a.createElement("div",{className:"col bg-blue box",id:"elem6"},a.a.createElement("p",{className:"small"},"Not Important and Not Urgent"),a.a.createElement("p",{className:"small"},"02")),a.a.createElement("button",{className:"btn-fab",id:"elem3"},a.a.createElement("img",{alt:"btn-plus",src:n(11)})))),a.a.createElement("div",{className:"col-md-6 app-left p-0s",id:"elem1"},a.a.createElement("form",null,a.a.createElement("input",{placeholder:"Search today tasks",id:"elem2"})),a.a.createElement("h4",null,"What ",a.a.createElement("u",null,"today")," is like for you."),a.a.createElement("div",{className:"todo-list"},a.a.createElement("p",null,"URGENT & IMPORTANT"),[{title:"Get feedback to Stacy about designs",description:"",urgency:1,status:"pending",deadline:"July 28th"}].map(({title:e,urgency:t},n)=>a.a.createElement("div",{className:"todo-list-item urgency".concat(t),key:n},a.a.createElement("p",null,e))),a.a.createElement("p",null,"IMPORTANT"),[{title:"Finalize Q2 review & Q3 strategic planning",description:"",urgency:2,status:"pending",deadline:"July 28th"},{title:"Read the Eisenhower Matrix guide",description:"",urgency:2,status:"pending",deadline:"July 28th"}].map(({title:e,urgency:t},n)=>a.a.createElement("div",{className:"todo-list-item urgency".concat(t),key:n},a.a.createElement("p",null,e))),a.a.createElement("p",null,"URGENT"),[{title:"Pick a venue for end-of-summer celebration",description:"",urgency:3,status:"pending",deadline:"July 28th"}].map(({title:e,urgency:t},n)=>a.a.createElement("div",{className:"todo-list-item urgency".concat(t),key:n},a.a.createElement("p",null,e))),a.a.createElement("p",null,"NOT URGENT & NOT IMPORTANT"),[{title:"Respond to Kyle's email about travel recommendations",description:"",urgency:4,status:"pending",deadline:"July 28th"}].map(({title:e,urgency:t},n)=>a.a.createElement("div",{className:"todo-list-item urgency".concat(t),key:n},a.a.createElement("p",null,e))))))),a.a.createElement(re,{story:i,isVisible:r,onClose:()=>l(!1)}))};l.a.render(a.a.createElement(le,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.fec9799e.chunk.js.map
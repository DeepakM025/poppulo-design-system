"use strict";var e,r=require("react"),t=require("styled-components"),o={exports:{}},n={};var a,i,s={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function l(){return a||(a=1,"production"!==process.env.NODE_ENV&&function(){function e(r){if(null==r)return null;if("function"==typeof r)return r.$$typeof===A?null:r.displayName||r.name||null;if("string"==typeof r)return r;switch(r){case $:return"Fragment";case S:return"Portal";case O:return"Profiler";case _:return"StrictMode";case N:return"Suspense";case T:return"SuspenseList"}if("object"==typeof r)switch("number"==typeof r.tag&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case R:return(r.displayName||"Context")+".Provider";case C:return(r._context.displayName||"Context")+".Consumer";case E:var t=r.render;return(r=r.displayName)||(r=""!==(r=t.displayName||t.name||"")?"ForwardRef("+r+")":"ForwardRef"),r;case D:return null!==(t=r.displayName||null)?t:e(r.type)||"Memo";case P:t=r._payload,r=r._init;try{return e(r(t))}catch(e){}}return null}function t(e){return""+e}function o(e){try{t(e);var r=!1}catch(e){r=!0}if(r){var o=(r=console).error,n="function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",n),t(e)}}function n(){}function a(e){if(void 0===L)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);L=r&&r[1]||"",W=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+L+e+W}function i(e,r){if(!e||q)return"";var t=K.get(e);if(void 0!==t)return t;q=!0,t=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var o;o=X.H,X.H=null,function(){if(0===H){m=console.log,b=console.info,g=console.warn,x=console.error,v=console.group,h=console.groupCollapsed,k=console.groupEnd;var e={configurable:!0,enumerable:!0,value:n,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}H++}();try{var i={DetermineComponentFrameRoot:function(){try{if(r){var t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var o=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){o=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){o=e}(t=e())&&"function"==typeof t.catch&&t.catch((function(){}))}}catch(e){if(e&&o&&"string"==typeof e.stack)return[e.stack,o.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),c=l[0],p=l[1];if(c&&p){var f=c.split("\n"),u=p.split("\n");for(l=s=0;s<f.length&&!f[s].includes("DetermineComponentFrameRoot");)s++;for(;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;if(s===f.length||l===u.length)for(s=f.length-1,l=u.length-1;1<=s&&0<=l&&f[s]!==u[l];)l--;for(;1<=s&&0<=l;s--,l--)if(f[s]!==u[l]){if(1!==s||1!==l)do{if(s--,0>--l||f[s]!==u[l]){var d="\n"+f[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),"function"==typeof e&&K.set(e,d),d}}while(1<=s&&0<=l);break}}}finally{q=!1,X.H=o,function(){if(0==--H){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Y({},e,{value:m}),info:Y({},e,{value:b}),warn:Y({},e,{value:g}),error:Y({},e,{value:x}),group:Y({},e,{value:v}),groupCollapsed:Y({},e,{value:h}),groupEnd:Y({},e,{value:k})})}0>H&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=t}return f=(f=e?e.displayName||e.name:"")?a(f):"","function"==typeof e&&K.set(e,f),f}function l(e){if(null==e)return"";if("function"==typeof e){var r=e.prototype;return i(e,!(!r||!r.isReactComponent))}if("string"==typeof e)return a(e);switch(e){case N:return a("Suspense");case T:return a("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case E:return e=i(e.render,!1);case D:return l(e.type);case P:r=e._payload,e=e._init;try{return l(e(r))}catch(e){}}return""}function c(){var e=X.A;return null===e?null:e.getOwner()}function p(){var r=e(this.type);return B[r]||(B[r]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),void 0!==(r=this.props.ref)?r:null}function f(r,t,n,a,i,s){if("string"==typeof r||"function"==typeof r||r===$||r===O||r===_||r===N||r===T||r===z||"object"==typeof r&&null!==r&&(r.$$typeof===P||r.$$typeof===D||r.$$typeof===R||r.$$typeof===C||r.$$typeof===E||r.$$typeof===M||void 0!==r.getModuleId)){var l=t.children;if(void 0!==l)if(a)if(U(l)){for(a=0;a<l.length;a++)u(l[a],r);Object.freeze&&Object.freeze(l)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else u(l,r)}else l="",(void 0===r||"object"==typeof r&&null!==r&&0===Object.keys(r).length)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),null===r?a="null":U(r)?a="array":void 0!==r&&r.$$typeof===j?(a="<"+(e(r.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):a=typeof r,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,l);if(I.call(t,"key")){l=e(r);var f=Object.keys(t).filter((function(e){return"key"!==e}));a=0<f.length?"{key: someKey, "+f.join(": ..., ")+": ...}":"{key: someKey}",G[l+a]||(f=0<f.length?"{"+f.join(": ..., ")+": ...}":"{}",console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',a,l,f,l),G[l+a]=!0)}if(l=null,void 0!==n&&(o(n),l=""+n),function(e){if(I.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(t)&&(o(t.key),l=""+t.key),"key"in t)for(var d in n={},t)"key"!==d&&(n[d]=t[d]);else n=t;return l&&function(e,r){function t(){J||(J=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(n,"function"==typeof r?r.displayName||r.name||"Unknown":r),function(e,r,t,o,n,a){return t=a.ref,e={$$typeof:j,type:e,key:r,props:a,_owner:n},null!==(void 0!==t?t:null)?Object.defineProperty(e,"ref",{enumerable:!1,get:p}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}(r,l,s,0,c(),n)}function u(e,r){if("object"==typeof e&&e&&e.$$typeof!==V)if(U(e))for(var t=0;t<e.length;t++){var o=e[t];d(o)&&y(o,r)}else if(d(e))e._store&&(e._store.validated=1);else if(null===e||"object"!=typeof e?t=null:t="function"==typeof(t=F&&e[F]||e["@@iterator"])?t:null,"function"==typeof t&&t!==e.entries&&(t=t.call(e))!==e)for(;!(e=t.next()).done;)d(e.value)&&y(e.value,r)}function d(e){return"object"==typeof e&&null!==e&&e.$$typeof===j}function y(r,t){if(r._store&&!r._store.validated&&null==r.key&&(r._store.validated=1,t=function(r){var t="",o=c();return o&&(o=e(o.type))&&(t="\n\nCheck the render method of `"+o+"`."),t||(r=e(r))&&(t="\n\nCheck the top-level render call using <"+r+">."),t}(t),!Q[t])){Q[t]=!0;var o="";r&&null!=r._owner&&r._owner!==c()&&(o=null,"number"==typeof r._owner.tag?o=e(r._owner.type):"string"==typeof r._owner.name&&(o=r._owner.name),o=" It was passed a child from "+o+".");var n=X.getCurrentStack;X.getCurrentStack=function(){var e=l(r.type);return n&&(e+=n()||""),e},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),X.getCurrentStack=n}}var m,b,g,x,v,h,k,w=r,j=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),R=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),F=Symbol.iterator,A=Symbol.for("react.client.reference"),X=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.prototype.hasOwnProperty,Y=Object.assign,M=Symbol.for("react.client.reference"),U=Array.isArray,H=0;n.__reactDisabledLog=!0;var L,W,J,q=!1,K=new("function"==typeof WeakMap?WeakMap:Map),V=Symbol.for("react.client.reference"),B={},G={},Q={};s.Fragment=$,s.jsx=function(e,r,t,o,n){return f(e,r,t,!1,0,n)},s.jsxs=function(e,r,t,o,n){return f(e,r,t,!0,0,n)}}()),s}var c=(i||(i=1,"production"===process.env.NODE_ENV?o.exports=function(){if(e)return n;e=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function o(e,t,o){var n=null;if(void 0!==o&&(n=""+o),void 0!==t.key&&(n=""+t.key),"key"in t)for(var a in o={},t)"key"!==a&&(o[a]=t[a]);else o=t;return t=o.ref,{$$typeof:r,type:e,key:n,ref:void 0!==t?t:null,props:o}}return n.Fragment=t,n.jsx=o,n.jsxs=o,n}():o.exports=l()),o.exports);const p=t.button`
    font-family: "Funnel Sans", sans-serif;
    border-radius: ${({rounded:e})=>e?"30px":"4px"};
    font-size: ${({size:e})=>"sm"===e?"12px":"md"===e?"14px":"lg"===e?"16px":"18px"};
    padding: ${({size:e})=>"sm"===e?"6px 12px":"md"===e?"8px 14px":"lg"===e?"10px 16px":"12px 20px"};
    cursor: pointer;
    background-color: ${({backgroundColor:e,variant:r})=>"secondary"===r&&e?"transparent":e||("primary"===r?"#4f39f6":"transparent")};
    color: ${({variant:e,backgroundColor:r})=>"secondary"===e?r||"#4f39f6":"#fff"};
    border: ${({variant:e,backgroundColor:r})=>"primary"===e&&r||"secondary"===e&&r?`1px solid ${r}`:"1px solid #4f39f6"};
    letter-spacing: 0.7px;
    &:hover {
        opacity: 0.9;
    }
`,f=t.div`
  position: relative;
  display: inline-block;
`,u=t.div`
font-family: "Funnel Sans", sans-serif;
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  padding: 8px 12px;
  border-radius: 4px;
  position: absolute;
  z-index: 10;
  white-space: nowrap;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  
  /* Arrow */
  &::after {
    content: "";
    position: absolute;
    border-style: solid;
  }

  /* Positioning */
  ${({"data-position":e})=>"top"===e&&t.css`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    
    &::after {
      border-width: 6px 6px 0 6px;
      border-color: black transparent transparent transparent;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
    }
  `}

  ${({"data-position":e})=>"bottom"===e&&t.css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8px;
    
    &::after {
      border-width: 0 6px 6px 6px;
      border-color: transparent transparent black transparent;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
    }
  `}

  ${({"data-position":e})=>"left"===e&&t.css`
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 8px;
    
    &::after {
      border-width: 6px 0 6px 6px;
      border-color: transparent transparent transparent black;
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
    }
  `}

  ${({"data-position":e})=>"right"===e&&t.css`
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 8px;
    
    &::after {
      border-width: 6px 6px 6px 0;
      border-color: transparent black transparent transparent;
      left: -6px;
      top: 50%;
      transform: translateY(-50%);
    }
  `}

  /* Show Tooltip on Hover */
  ${f}:hover & {
    visibility: visible;
    opacity: 1;
  }
`,d=t.div`
    font-family: "Funnel Sans", sans-serif;
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 280px;
    position: absolute;
    max-width: 400px;
    right: 10px;
    top: 10px;
    z-index: 99;

    ${({status:e})=>"success"===e&&t.css`
            background: #f0fdf4;
            color: #065f46;
        `}

    ${({status:e})=>"error"===e&&t.css`
            background: #fef2f2;
            color: #b91c1c;
        `}
`,y=t.div`
    font-size: 1rem;
    margin-right: 10px;

    ${({status:e})=>"success"===e&&t.css`
            color: #047857;
        `}

    ${({status:e})=>"error"===e&&t.css`
            color: #b91c1c;
        `}
`,m=t.div`
    flex-grow: 1;
`,b=t.p`
    font-weight: 600;
    letter-spacing: 0.7px;
    margin: 0;
`,g=t.p`
    margin: 2px 0 0;
    font-size: 14px;
    color: inherit;
`,x=t.button`
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin-left: auto;
    color: inherit;
`;exports.Button=({label:e,variant:r="secondary",size:t="md",backgroundColor:o="",rounded:n=!1,onClick:a})=>c.jsx(p,{variant:r,size:t,backgroundColor:o,rounded:n,onClick:a,children:e}),exports.Notification=({title:e,description:t,duration:o=5e3,status:n="success"})=>{const[a,i]=r.useState(!0);return r.useEffect((()=>{const e=setTimeout((()=>{i(!1)}),o);return()=>clearTimeout(e)}),[o]),a?c.jsxs(d,{status:n,children:[c.jsxs(y,{status:n,children:["success"===n?"✔":"✖"," "]}),c.jsxs(m,{children:[c.jsx(b,{children:e}),c.jsx(g,{children:t})]}),c.jsx(x,{onClick:()=>i(!1),children:"×"})]}):null},exports.Tooltip=({text:e,position:r="right",children:t})=>c.jsxs(f,{children:[t,c.jsx(u,{"data-position":r,children:e})]});
//# sourceMappingURL=index.js.map

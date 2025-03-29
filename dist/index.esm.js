import e,{useState as r,useEffect as t}from"react";import o,{css as n}from"styled-components";var a,i={exports:{}},s={};var l,c,p={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function f(){return l||(l=1,"production"!==process.env.NODE_ENV&&function(){function r(e){if(null==e)return null;if("function"==typeof e)return e.$$typeof===A?null:e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case $:return"Fragment";case S:return"Portal";case O:return"Profiler";case _:return"StrictMode";case N:return"Suspense";case D:return"SuspenseList"}if("object"==typeof e)switch("number"==typeof e.tag&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case R:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case E:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case P:return null!==(t=e.displayName||null)?t:r(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return r(e(t))}catch(e){}}return null}function t(e){return""+e}function o(e){try{t(e);var r=!1}catch(e){r=!0}if(r){var o=(r=console).error,n="function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",n),t(e)}}function n(){}function a(e){if(void 0===L)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);L=r&&r[1]||"",W=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+L+e+W}function i(e,r){if(!e||K)return"";var t=V.get(e);if(void 0!==t)return t;K=!0,t=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var o;o=X.H,X.H=null,function(){if(0===H){m=console.log,b=console.info,g=console.warn,v=console.error,h=console.group,x=console.groupCollapsed,k=console.groupEnd;var e={configurable:!0,enumerable:!0,value:n,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}H++}();try{var i={DetermineComponentFrameRoot:function(){try{if(r){var t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var o=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){o=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){o=e}(t=e())&&"function"==typeof t.catch&&t.catch((function(){}))}}catch(e){if(e&&o&&"string"==typeof e.stack)return[e.stack,o.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),c=l[0],p=l[1];if(c&&p){var f=c.split("\n"),u=p.split("\n");for(l=s=0;s<f.length&&!f[s].includes("DetermineComponentFrameRoot");)s++;for(;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;if(s===f.length||l===u.length)for(s=f.length-1,l=u.length-1;1<=s&&0<=l&&f[s]!==u[l];)l--;for(;1<=s&&0<=l;s--,l--)if(f[s]!==u[l]){if(1!==s||1!==l)do{if(s--,0>--l||f[s]!==u[l]){var d="\n"+f[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),"function"==typeof e&&V.set(e,d),d}}while(1<=s&&0<=l);break}}}finally{K=!1,X.H=o,function(){if(0==--H){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Y({},e,{value:m}),info:Y({},e,{value:b}),warn:Y({},e,{value:g}),error:Y({},e,{value:v}),group:Y({},e,{value:h}),groupCollapsed:Y({},e,{value:x}),groupEnd:Y({},e,{value:k})})}0>H&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=t}return f=(f=e?e.displayName||e.name:"")?a(f):"","function"==typeof e&&V.set(e,f),f}function s(e){if(null==e)return"";if("function"==typeof e){var r=e.prototype;return i(e,!(!r||!r.isReactComponent))}if("string"==typeof e)return a(e);switch(e){case N:return a("Suspense");case D:return a("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case E:return e=i(e.render,!1);case P:return s(e.type);case T:r=e._payload,e=e._init;try{return s(e(r))}catch(e){}}return""}function l(){var e=X.A;return null===e?null:e.getOwner()}function c(){var e=r(this.type);return B[e]||(B[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),void 0!==(e=this.props.ref)?e:null}function f(e,t,n,a,i,s){if("string"==typeof e||"function"==typeof e||e===$||e===O||e===_||e===N||e===D||e===z||"object"==typeof e&&null!==e&&(e.$$typeof===T||e.$$typeof===P||e.$$typeof===R||e.$$typeof===C||e.$$typeof===E||e.$$typeof===M||void 0!==e.getModuleId)){var p=t.children;if(void 0!==p)if(a)if(U(p)){for(a=0;a<p.length;a++)u(p[a],e);Object.freeze&&Object.freeze(p)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else u(p,e)}else p="",(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(p+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),null===e?a="null":U(e)?a="array":void 0!==e&&e.$$typeof===j?(a="<"+(r(e.type)||"Unknown")+" />",p=" Did you accidentally export a JSX literal instead of a component?"):a=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,p);if(I.call(t,"key")){p=r(e);var f=Object.keys(t).filter((function(e){return"key"!==e}));a=0<f.length?"{key: someKey, "+f.join(": ..., ")+": ...}":"{key: someKey}",G[p+a]||(f=0<f.length?"{"+f.join(": ..., ")+": ...}":"{}",console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',a,p,f,p),G[p+a]=!0)}if(p=null,void 0!==n&&(o(n),p=""+n),function(e){if(I.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return void 0!==e.key}(t)&&(o(t.key),p=""+t.key),"key"in t)for(var d in n={},t)"key"!==d&&(n[d]=t[d]);else n=t;return p&&function(e,r){function t(){J||(J=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(n,"function"==typeof e?e.displayName||e.name||"Unknown":e),function(e,r,t,o,n,a){return t=a.ref,e={$$typeof:j,type:e,key:r,props:a,_owner:n},null!==(void 0!==t?t:null)?Object.defineProperty(e,"ref",{enumerable:!1,get:c}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}(e,p,s,0,l(),n)}function u(e,r){if("object"==typeof e&&e&&e.$$typeof!==q)if(U(e))for(var t=0;t<e.length;t++){var o=e[t];d(o)&&y(o,r)}else if(d(e))e._store&&(e._store.validated=1);else if(null===e||"object"!=typeof e?t=null:t="function"==typeof(t=F&&e[F]||e["@@iterator"])?t:null,"function"==typeof t&&t!==e.entries&&(t=t.call(e))!==e)for(;!(e=t.next()).done;)d(e.value)&&y(e.value,r)}function d(e){return"object"==typeof e&&null!==e&&e.$$typeof===j}function y(e,t){if(e._store&&!e._store.validated&&null==e.key&&(e._store.validated=1,t=function(e){var t="",o=l();return o&&(o=r(o.type))&&(t="\n\nCheck the render method of `"+o+"`."),t||(e=r(e))&&(t="\n\nCheck the top-level render call using <"+e+">."),t}(t),!Q[t])){Q[t]=!0;var o="";e&&null!=e._owner&&e._owner!==l()&&(o=null,"number"==typeof e._owner.tag?o=r(e._owner.type):"string"==typeof e._owner.name&&(o=e._owner.name),o=" It was passed a child from "+o+".");var n=X.getCurrentStack;X.getCurrentStack=function(){var r=s(e.type);return n&&(r+=n()||""),r},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,o),X.getCurrentStack=n}}var m,b,g,v,h,x,k,w=e,j=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),R=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),F=Symbol.iterator,A=Symbol.for("react.client.reference"),X=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.prototype.hasOwnProperty,Y=Object.assign,M=Symbol.for("react.client.reference"),U=Array.isArray,H=0;n.__reactDisabledLog=!0;var L,W,J,K=!1,V=new("function"==typeof WeakMap?WeakMap:Map),q=Symbol.for("react.client.reference"),B={},G={},Q={};p.Fragment=$,p.jsx=function(e,r,t,o,n){return f(e,r,t,!1,0,n)},p.jsxs=function(e,r,t,o,n){return f(e,r,t,!0,0,n)}}()),p}var u=(c||(c=1,"production"===process.env.NODE_ENV?i.exports=function(){if(a)return s;a=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(r,t,o){var n=null;if(void 0!==o&&(n=""+o),void 0!==t.key&&(n=""+t.key),"key"in t)for(var a in o={},t)"key"!==a&&(o[a]=t[a]);else o=t;return t=o.ref,{$$typeof:e,type:r,key:n,ref:void 0!==t?t:null,props:o}}return s.Fragment=r,s.jsx=t,s.jsxs=t,s}():i.exports=f()),i.exports);const d=o.button`
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
`,y=({label:e,variant:r="secondary",size:t="md",backgroundColor:o="",rounded:n=!1,onClick:a})=>u.jsx(d,{variant:r,size:t,backgroundColor:o,rounded:n,onClick:a,children:e}),m=o.div`
  position: relative;
  display: inline-block;
`,b=o.div`
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
  ${({"data-position":e})=>"top"===e&&n`
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

  ${({"data-position":e})=>"bottom"===e&&n`
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

  ${({"data-position":e})=>"left"===e&&n`
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

  ${({"data-position":e})=>"right"===e&&n`
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
  ${m}:hover & {
    visibility: visible;
    opacity: 1;
  }
`,g=({text:e,position:r="right",children:t})=>u.jsxs(m,{children:[t,u.jsx(b,{"data-position":r,children:e})]}),v=o.div`
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

    ${({status:e})=>"success"===e&&n`
            background: #f0fdf4;
            color: #065f46;
        `}

    ${({status:e})=>"error"===e&&n`
            background: #fef2f2;
            color: #b91c1c;
        `}
`,h=o.div`
    font-size: 1rem;
    margin-right: 10px;

    ${({status:e})=>"success"===e&&n`
            color: #047857;
        `}

    ${({status:e})=>"error"===e&&n`
            color: #b91c1c;
        `}
`,x=o.div`
    flex-grow: 1;
`,k=o.p`
    font-weight: 600;
    letter-spacing: 0.7px;
    margin: 0;
`,w=o.p`
    margin: 2px 0 0;
    font-size: 14px;
    color: inherit;
`,j=o.button`
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin-left: auto;
    color: inherit;
`,S=({title:e,description:o,duration:n=5e3,status:a="success"})=>{const[i,s]=r(!0);return t((()=>{const e=setTimeout((()=>{s(!1)}),n);return()=>clearTimeout(e)}),[n]),i?u.jsxs(v,{status:a,children:[u.jsxs(h,{status:a,children:["success"===a?"✔":"✖"," "]}),u.jsxs(x,{children:[u.jsx(k,{children:e}),u.jsx(w,{children:o})]}),u.jsx(j,{onClick:()=>s(!1),children:"×"})]}):null};export{y as Button,S as Notification,g as Tooltip};
//# sourceMappingURL=index.esm.js.map

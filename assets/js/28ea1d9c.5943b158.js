/*! For license information please see 28ea1d9c.5943b158.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[138755],{814365:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var t=n(824246),o=n(511151);const c={id:"plugin-catalog-backend-module-openapi.openapirefprocessor.fromconfig",title:"OpenApiRefProcessor.fromConfig()",description:"API reference for OpenApiRefProcessor.fromConfig()"},a=void 0,i={id:"reference/plugin-catalog-backend-module-openapi.openapirefprocessor.fromconfig",title:"OpenApiRefProcessor.fromConfig()",description:"API reference for OpenApiRefProcessor.fromConfig()",source:"@site/../docs/reference/plugin-catalog-backend-module-openapi.openapirefprocessor.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-openapi.openapirefprocessor.fromconfig",permalink:"/docs/reference/plugin-catalog-backend-module-openapi.openapirefprocessor.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-openapi.openapirefprocessor.fromconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-openapi.openapirefprocessor.fromconfig",title:"OpenApiRefProcessor.fromConfig()",description:"API reference for OpenApiRefProcessor.fromConfig()"}},u={},s=[{value:"Parameters",id:"parameters",level:2}];function f(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-openapi",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-openapi"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-openapi.openapirefprocessor",children:(0,t.jsx)(r.code,{children:"OpenApiRefProcessor"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-openapi.openapirefprocessor.fromconfig",children:(0,t.jsx)(r.code,{children:"fromConfig"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"static fromConfig(config: Config, options: {\n        logger: Logger;\n        reader: UrlReader;\n    }): OpenApiRefProcessor;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"config"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsxs)(r.td,{children:["{ logger: Logger; reader: ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.urlreaderservice",children:"UrlReader"}),"; }"]}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-openapi.openapirefprocessor",children:"OpenApiRefProcessor"})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},371426:(e,r,n)=>{var t=n(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,c={},s=null,f=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,t)&&!u.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:i.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}function b(){}function _(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var v=_.prototype=new b;v.constructor=_,h(v,g.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,t){var o,c={},a=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)x.call(r,o)&&!R.hasOwnProperty(o)&&(c[o]=r[o]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];c.children=s}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===c[o]&&(c[o]=u[o]);return{$$typeof:n,type:e,key:a,ref:i,props:c,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,o,c,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case t:u=!0}}if(u)return a=a(u=e),e=""===c?"."+E(u,0):c,j(a)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),O(a,r,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),r.push(a)),1;if(u=0,c=""===c?".":c+":",j(e))for(var s=0;s<e.length;s++){var f=c+E(i=e[s],s);u+=O(i,r,o,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(i=e.next()).done;)u+=O(i=i.value,r,o,f=c+E(i,s++),a);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function w(e,r,n){if(null==e)return e;var t=[],o=0;return O(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},I={transition:null},T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};r.Children={map:w,forEach:function(e,r,n){w(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return w(e,(function(){r++})),r},toArray:function(e){return w(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=o,r.Profiler=a,r.PureComponent=_,r.StrictMode=c,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,i=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in r)x.call(r,s)&&!R.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==u?u[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:n,type:e.type,key:c,ref:a,props:o,_owner:i}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=C,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return A.current.useCallback(e,r)},r.useContext=function(e){return A.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return A.current.useDeferredValue(e)},r.useEffect=function(e,r){return A.current.useEffect(e,r)},r.useId=function(){return A.current.useId()},r.useImperativeHandle=function(e,r,n){return A.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return A.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return A.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return A.current.useMemo(e,r)},r.useReducer=function(e,r,n){return A.current.useReducer(e,r,n)},r.useRef=function(e){return A.current.useRef(e)},r.useState=function(e){return A.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return A.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return A.current.useTransition()},r.version="18.2.0"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>a});var t=n(667294);const o={},c=t.createContext(o);function a(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);
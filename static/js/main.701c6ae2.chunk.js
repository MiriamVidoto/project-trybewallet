/*! For license information please see main.701c6ae2.chunk.js.LICENSE.txt */
(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{32:function(t,e,r){t.exports=r(47)},37:function(t,e,r){},47:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(18),i=r.n(o),c=r(21),u=(r(37),r(9)),l=r(2),s=r(14),h=r(7),f=r(8),p=r(11),d=r(10),m=r(16);function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var d={};c(d,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(L([])));y&&y!==e&&r.call(y,a)&&(d=y);var g=p.prototype=h.prototype=Object.create(d);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var y=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){var t;return Object(h.a)(this,r),(t=e.call(this)).validateButton=function(){var e=t.state,r=e.email,n=e.password.length>=6,a=r.match(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);return n&&a},t.handleChange=function(e){var r=e.target,n=r.name,a=r.value;t.setState(Object(s.a)({},n,a),(function(){return t.setState({buttonDisabled:!t.validateButton()})}))},t.handleClick=function(){var e=t.props,r=e.history;(0,e.loginDispatch)(t.state.email),r.push("/carteira")},t.state={email:"",password:"",buttonDisabled:!0},t}return Object(f.a)(r,[{key:"render",value:function(){var t=this.state,e=t.email,r=t.password,n=t.buttonDisabled;return a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement("label",{htmlFor:"email"},"Email:",a.a.createElement("input",{type:"email",id:"email",name:"email","data-testid":"email-input",value:e,onChange:this.handleChange})),a.a.createElement("label",{htmlFor:"password"},"Senha:",a.a.createElement("input",{type:"password",id:"password",name:"password","data-testid":"password-input",placeholder:"min 6 d\xedgitos",value:r,onChange:this.handleChange})),a.a.createElement("button",{type:"button",disabled:n,onClick:this.handleClick},"Entrar"))}}]),r}(a.a.Component),g=Object(u.b)(null,(function(t){return{loginDispatch:function(e){return t(function(t){return{type:"USER_EMAIL",email:t}}(e))}}}))(y),E=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){return Object(h.a)(this,r),e.apply(this,arguments)}return Object(f.a)(r,[{key:"render",value:function(){var t=this.props,e=t.userEmail,r=t.expenses.reduce((function(t,e){return t+Number(e.value)*Number(e.exchangeRates[e.currency].ask)}),0);return a.a.createElement("div",null,a.a.createElement("span",{"data-testid":"email-field"},"Email: ".concat(e)),a.a.createElement("span",null,"Despesa total:"),a.a.createElement("span",{"data-testid":"total-field"},r.toFixed(2)),a.a.createElement("span",{"data-testid":"header-currency-field"},"BRL"))}}]),r}(n.Component),b=Object(u.b)((function(t){return{userEmail:t.user.email,expenses:t.wallet.expenses}}))(E),w=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){var t;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).handleClickDelet=function(e){var r=e.target,n=t.props,a=n.expenses,o=n.newExpensesDispatch,i=r.id;o(a.filter((function(t){return t.id!==Number(i)})))},t.handleClickEdit=function(e){var r=e.target;(0,t.props.editDispatch)(r.id)},t}return Object(f.a)(r,[{key:"render",value:function(){var t=this,e=this.props.expenses;return a.a.createElement("div",null,a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Descri\xe7\xe3o"),a.a.createElement("th",null,"Tag"),a.a.createElement("th",null,"M\xe9todo de pagamento"),a.a.createElement("th",null,"Valor"),a.a.createElement("th",null,"Moeda"),a.a.createElement("th",null,"C\xe2mbio utilizado"),a.a.createElement("th",null,"Valor convertido"),a.a.createElement("th",null,"Moeda de convers\xe3o"),a.a.createElement("th",null,"Editar/Excluir"))),a.a.createElement("tbody",null,e.map((function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,e.description),a.a.createElement("td",null,e.tag),a.a.createElement("td",null,e.method),a.a.createElement("td",null,Number(e.value).toFixed(2)),a.a.createElement("td",null,e.exchangeRates[e.currency].name),a.a.createElement("td",null,Number(e.exchangeRates[e.currency].ask).toFixed(2)),a.a.createElement("td",null,Number(e.value*e.exchangeRates[e.currency].ask).toFixed(2)),a.a.createElement("td",null,"BRL"),a.a.createElement("td",null,a.a.createElement("button",{type:"button","data-testid":"edit-btn",id:e.id,onClick:t.handleClickEdit},"Editar"),a.a.createElement("button",{type:"button","data-testid":"delete-btn",id:e.id,onClick:t.handleClickDelet},"Excluir")))})))))}}]),r}(n.Component),x=Object(u.b)((function(t){return{expenses:t.wallet.expenses}}),(function(t){return{newExpensesDispatch:function(e){return t({type:"NEW_DATA_EXPENSES",newExpensesData:e})},editDispatch:function(e,r){return t(function(t){return{type:"EDIT_EXPENSE",id:t}}(e))}}}))(w);function j(){j=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var s={};function h(){}function f(){}function p(){}var d={};c(d,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==e&&r.call(v,a)&&(d=v);var y=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var O=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){var t;return Object(h.a)(this,r),(t=e.call(this)).handleChange=function(e){var r=e.target,n=r.name,a=r.value;t.setState(Object(s.a)({},n,a))},t.handleClick=Object(m.a)(j().mark((function e(){var r,n;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.props.getCurrenciesQuotes,e.next=3,r();case 3:n=t.props.quotes,t.setState((function(t){return{id:t.id+1,exchangeRates:n}}),(function(){(0,t.props.expenseDispatch)(t.state),t.setState({value:"",description:""})}));case 5:case"end":return e.stop()}}),e)}))),t.state={value:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",description:"",id:-1,exchangeRates:{}},t}return Object(f.a)(r,[{key:"componentDidMount",value:function(){(0,this.props.getCurrencies)()}},{key:"render",value:function(){var t=this.props.currencies,e=this.state,r=e.value,n=e.currency,o=e.method,i=e.tag,c=e.description;return a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("label",{htmlFor:"value"},"Valor:",a.a.createElement("input",{"data-testid":"value-input",id:"value",name:"value",value:r,onChange:this.handleChange})),a.a.createElement("label",{htmlFor:"currency"},"Moeda:",a.a.createElement("select",{"data-testid":"currency-input",name:"currency",id:"currency",value:n,onChange:this.handleChange},t.map((function(t){return a.a.createElement("option",{key:t},t)})))),a.a.createElement("label",{htmlFor:"method"},"M\xe9todo de pagamento:",a.a.createElement("select",{"data-testid":"method-input",name:"method",id:"method",value:o,onChange:this.handleChange},["Dinheiro","Cart\xe3o de cr\xe9dito","Cart\xe3o de d\xe9bito"].map((function(t){return a.a.createElement("option",{key:t},t)})))),a.a.createElement("label",{htmlFor:"tag"},"Categoria:",a.a.createElement("select",{"data-testid":"tag-input",name:"tag",id:"tag",value:i,onChange:this.handleChange},["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"].map((function(t){return a.a.createElement("option",{key:t},t)})))),a.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",a.a.createElement("input",{"data-testid":"description-input",id:"description",name:"description",value:c,onChange:this.handleChange})),a.a.createElement("button",{type:"button",onClick:this.handleClick},"Adicionar despesa")))}}]),r}(n.Component),L=Object(u.b)((function(t){return{currencies:t.wallet.currencies,quotes:t.wallet.quotes}}),(function(t){return{getCurrencies:function(){return t(function(){var t=Object(m.a)(v().mark((function t(e){var r,n,a;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,a=Object.keys(n).filter((function(t){return"USDT"!==t})),e({type:"GET_CURRENCIES",currencies:a});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getCurrenciesQuotes:function(){return t(function(){var t=Object(m.a)(v().mark((function t(e){var r,n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,e({type:"GET_QUOTAS",quotes:n});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},expenseDispatch:function(e){return t(function(t){return{type:"ADD_DATA_EXPENSE",expenseData:t}}(e))}}}))(O),k=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){return Object(h.a)(this,r),e.apply(this,arguments)}return Object(f.a)(r,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"TrybeWallet"),a.a.createElement(b,null),a.a.createElement(L,null),a.a.createElement(x,null))}}]),r}(a.a.Component);var _=function(){return a.a.createElement("div",null,a.a.createElement(l.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:g}),a.a.createElement(l.a,{path:"/carteira",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=r(12),S=r(29),D=r(30),N=r(4),T={email:""},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"USER_EMAIL":return Object(N.a)(Object(N.a)({},t),{},{email:e.email});default:return t}},F=r(31),G={currencies:[],expenses:[],editor:!1,idToEdit:"",quotes:{}},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_DATA_EXPENSE":return Object(N.a)(Object(N.a)({},t),{},{expenses:[].concat(Object(F.a)(t.expenses),[e.expenseData])});case"NEW_DATA_EXPENSES":return Object(N.a)(Object(N.a)({},t),{},{expenses:e.newExpensesData});case"EDIT_EXPENSE":return Object(N.a)(Object(N.a)({},t),{},{idToEdit:e.id,editor:!0});case"END_EDIT_EXPENSE":return Object(N.a)(Object(N.a)({},t),{},{editor:!1,idToEdit:"",expenses:e.newExpenses});case"GET_CURRENCIES":return Object(N.a)(Object(N.a)({},t),{},{currencies:e.currencies});case"GET_QUOTAS":return Object(N.a)(Object(N.a)({},t),{},{quotes:e.quotes});default:return t}},R=Object(C.combineReducers)({user:A,wallet:P}),I=Object(C.createStore)(R,Object(D.composeWithDevTools)(Object(C.applyMiddleware)(S.a)));window.Cypress&&(window.store=I);var M=I;i.a.render(a.a.createElement(u.a,{store:M},a.a.createElement(c.a,null,a.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.701c6ae2.chunk.js.map
(self.webpackChunkmikemooredev=self.webpackChunkmikemooredev||[]).push([[999,734],{2297:function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,{default:function(){return l}}),n(8674),n(1539),n(8304),n(489),n(2419),n(2526),n(1817),n(2165),n(8783),n(6992),n(3948);var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(f,t);var e,n,i,l,c=(i=f,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(i);if(l){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function f(){return o(this,f),c.apply(this,arguments)}return e=f,(n=[{key:"initialize",value:function(){this.setupData()}},{key:"setupListeners",value:function(){var t=this;this.els.formEl&&this.els.formEl.addEventListener("submit",(function(e){return t.contactFormSubmit(e)}))}},{key:"setupData",value:function(){this.data={formIsValid:!0}}},{key:"contactFormSubmit",value:function(t){var e=this;if(t.preventDefault(),this.contactFormValidate()){var n=this.els.formEl,i=new FormData(t.target);fetch(n.action,{method:n.method,body:i,headers:{Accept:"application/json"}}).then((function(t){e.els.notificationEl.innerHTML="Thanks for your submission!",n.reset()})).catch((function(t){e.els.notificationEl.innerHTML="Oops! There was a problem submitting your form"}))}}},{key:"setNotificationHTML",value:function(t,e){t&&(t.innerHTML=e)}},{key:"validateInput",value:function(t,e,n){if(t){if(t.value.length)return t.classList.remove("isDanger"),t.setAttribute("aria-invalid","false"),this.setNotificationHTML(e,""),!0;t.classList.add("isDanger"),t.setAttribute("aria-invalid","true"),this.data.formIsValid=!1,this.setNotificationHTML(e,n)}return!1}},{key:"contactFormValidate",value:function(){return this.data.formIsValid=!0,this.validateInput(this.els.nameEl,this.els.nameNotificationEl,"Please enter your name."),this.validateInput(this.els.emailEl,this.els.emailNotificationEl,"Please enter a valid email address."),this.validateEmail(this.els.emailEl,this.els.emailNotificationEl,"Please enter a valid email address."),this.validateInput(this.els.phoneEl,this.els.phoneNotificationEl,"Please enter a valid phone number."),this.validatePhone(this.els.phoneEl,this.els.phoneNotificationEl,"Please enter a valid phone number."),this.validateInput(this.els.messageEl,this.els.messageNotificationEl,"Please enter a message."),this.data.formIsValid}},{key:"validateEmail",value:function(t,e,n){return t&&t.value.length&&this.regexTest(t.value,/\S+@\S+\.\S+/)?(t.setAttribute("aria-invalid","false"),!0):(this.setNotificationHTML(e,n),t.setAttribute("aria-invalid","true"),!1)}},{key:"validatePhone",value:function(t,e,n){return t&&t.value.length&&this.regexTest(t.value,/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/)?(t.setAttribute("aria-invalid","false"),!0):(this.setNotificationHTML(e,n),t.setAttribute("aria-invalid","true"),!1)}},{key:"regexTest",value:function(t,e){return e.test(t)}},{key:"methods",get:function(){return["setupData","contactFormSubmit","contactFormValidate","validateEmail","validatePhone","validateInput","regexTest","setNotificationHTML"]}}])&&r(e.prototype,n),f}(n(2734).default)},2734:function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e),n.d(e,{default:function(){return r}}),n(4747),n(5306),n(4916),n(2222),n(7327),n(6699),n(2023),n(7941),n(2526),n(1817),n(1539),n(2165),n(8783),n(6992),n(3948);var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setupModule(e)}var e,n;return e=t,(n=[{key:"initialize",value:function(){}},{key:"setupListeners",value:function(){}},{key:"setupModule",value:function(t){this.el=t,this.identifier=t.dataset.module,this.data=t.dataset,this.els={},this.bindMethods(this.defaultMethods),this.bindMethods(this.methods),this.setupEls(),this.setupListeners(),this.setupModel(),this.setupInputListeners()}},{key:"bindMethods",value:function(t){var e=this;t.forEach((function(t){e[t]=e[t].bind(e)}))}},{key:"getElementAlias",value:function(t){return t.dataset.el.replace("".concat(this.identifier,"."),"").replace(/-([a-z])/g,(function(t,e){return e.toUpperCase()}))}},{key:"setupEls",value:function(){var t=this;this.el.querySelectorAll('[data-el^="'.concat(this.identifier,'"]')).forEach((function(e){var n=t.getElementAlias(e),o="".concat(n,"El"),r="".concat(o,"s");t.els[o]=t.els[o]?t.els[o]:e,t.els[r]="object"===i(t.els[r])?t.els[r]:[];var a=t.el.querySelector('[data-model="'.concat(t.identifier,".").concat(n,'"]'));a&&(e.modelEl=a),t.els[r].push(e)}))}},{key:"setupModel",value:function(){var t=this;this.model={},this.elKeys.filter((function(e){return t.inputTypes.includes(t.els[e].nodeName)})).forEach((function(e){t.model[t.getElementAlias(t.els[e])]=""}))}},{key:"setupInputListeners",value:function(){var t=this;this.modelElKeys.forEach((function(e){t.els[e].modelEl&&t.els[e].addEventListener("input",(function(n){var i=n.target;t.model[t.getElementAlias(t.els[e])]=i.value,t.els[e].modelEl.innerHTML=i.value}))}))}},{key:"elKeys",get:function(){return Object.keys(this.els)}},{key:"modelElKeys",get:function(){var t=this;return this.elKeys.filter((function(e){return t.inputTypes.includes(t.els[e].nodeName)}))}},{key:"inputTypes",get:function(){return["INPUT","TEXTAREA"]}},{key:"defaultMethods",get:function(){return["initialize","setupModule","setupEls","setupListeners","setupInputListeners","getElementAlias"]}},{key:"methods",get:function(){return[]}}])&&o(e.prototype,n),t}()},7065:function(t,e,n){"use strict";var i=n(3099),o=n(111),r=[].slice,a={},s=function(t,e,n){if(!(e in a)){for(var i=[],o=0;o<e;o++)i[o]="a["+o+"]";a[e]=Function("C,a","return new C("+i.join(",")+")")}return a[e](t,n)};t.exports=Function.bind||function(t){var e=i(this),n=r.call(arguments,1),a=function(){var i=n.concat(r.call(arguments));return this instanceof a?s(e,i.length,i):e.apply(t,i)};return o(e.prototype)&&(a.prototype=e.prototype),a}},489:function(t,e,n){var i=n(2109),o=n(7293),r=n(7908),a=n(9518),s=n(8544);i({target:"Object",stat:!0,forced:o((function(){a(1)})),sham:!s},{getPrototypeOf:function(t){return a(r(t))}})},8304:function(t,e,n){n(2109)({target:"Object",stat:!0},{setPrototypeOf:n(7674)})},2419:function(t,e,n){var i=n(2109),o=n(5005),r=n(3099),a=n(9670),s=n(111),u=n(30),l=n(7065),c=n(7293),f=o("Reflect","construct"),h=c((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),p=!c((function(){f((function(){}))})),d=h||p;i({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(t,e){r(t),a(e);var n=arguments.length<3?t:r(arguments[2]);if(p&&!h)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var i=[null];return i.push.apply(i,e),new(l.apply(t,i))}var o=n.prototype,c=u(s(o)?o:Object.prototype),d=Function.apply.call(t,c,e);return s(d)?d:c}})}}]);
//# sourceMappingURL=999.script.js.map
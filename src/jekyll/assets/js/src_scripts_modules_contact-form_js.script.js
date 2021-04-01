(self["webpackChunkmikemooredev"] = self["webpackChunkmikemooredev"] || []).push([["src_scripts_modules_contact-form_js"],{

/***/ "./src/scripts/modules/contact-form.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/contact-form.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _default; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _module_Module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./module/Module */ "./src/scripts/modules/module/Module.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_Module) {
  _inherits(_default, _Module);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      this.setupData();
    }
  }, {
    key: "setupListeners",
    value: function setupListeners() {
      var _this = this;

      if (this.els.formEl) {
        this.els.formEl.addEventListener('submit', function (e) {
          return _this.contactFormSubmit(e);
        });
      }
    }
  }, {
    key: "setupData",
    value: function setupData() {
      this.data = {
        formIsValid: true,
        mail: {
          options: {
            apiKey: '091BC1A3C79AABA6D03D33F7B28445D6776F77C21C35F92B949525AA797AB8C92171DA7992E664C67BD0A429FC18628A',
            username: 'mike.moore88@googlemail.com'
          }
        }
      };
    }
  }, {
    key: "contactFormSubmit",
    value: function contactFormSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      if (this.contactFormValidate()) {
        window.grecaptcha.ready(function () {
          // do request for recaptcha token
          // response is promise with passed token
          window.grecaptcha.execute(_this2.recaptchaSitekey).then(function (token) {
            // add token value to form
            _this2.onRecaptchaVerify(token);
          });
        });
      }
    }
  }, {
    key: "setNotificationHTML",
    value: function setNotificationHTML(notificationEl, notificationHTML) {
      if (notificationEl) {
        notificationEl.innerHTML = notificationHTML;
      }
    }
  }, {
    key: "validateInput",
    value: function validateInput(inputEl, notificationEl, notificationHTML) {
      if (inputEl) {
        if (!inputEl.value.length) {
          inputEl.classList.add('isDanger');
          this.data.formIsValid = false;
          this.setNotificationHTML(notificationEl, notificationHTML);
        } else {
          inputEl.classList.remove('isDanger');
          this.setNotificationHTML(notificationEl, '');
          return true;
        }
      }

      return false;
    }
  }, {
    key: "contactFormValidate",
    value: function contactFormValidate() {
      this.data.formIsValid = true;
      this.validateInput(this.els.nameEl, this.els.nameNotificationEl, 'Please enter your name.');
      this.validateInput(this.els.emailEl, this.els.emailNotificationEl, 'Please enter a valid email address.');
      this.validateEmail(this.els.emailEl, this.els.emailNotificationEl, 'Please enter a valid email address.');
      this.validateInput(this.els.phoneEl, this.els.phoneNotificationEl, 'Please enter a valid phone number.');
      this.validatePhone(this.els.phoneEl, this.els.phoneNotificationEl, 'Please enter a valid phone number.');
      this.validateInput(this.els.messageEl, this.els.messageNotificationEl, 'Please enter a message.');
      return this.data.formIsValid;
    }
  }, {
    key: "onRecaptchaVerify",
    value: function onRecaptchaVerify(recaptchaToken) {
      console.log(recaptchaToken);

      var elasticemail = __webpack_require__(/*! elasticemail */ "./node_modules/elasticemail/index.js");

      var client = elasticemail.createClient({
        username: this.data.options.username,
        apiKey: this.data.options.apiKey
      });
      var bodyText = "Name: ".concat(this.els.nameEl.value, " \r\n") + "Email: ".concat(this.els.emailEl.value, " \r\n") + "Phone: ".concat(this.els.phoneEl.value, " \r\n") + "Message: ".concat(this.els.messageEl.value, " \r\n\r\n");
      var message = {
        "subject": 'New Enquiry',
        "to": 'me@mikemoore.dev',
        "from": 'noreply@mikemoore.dev',
        "fromName": this.els.nameEl.value,
        "sender": this.els.emailEl.value,
        "senderName": this.els.nameEl.value,
        "replyTo": this.els.emailEl.value,
        "replyToName": this.els.nameEl.value,
        "bodyText": bodyText,
        "bodyType": 'Plain',
        "isTransactional": true
      };
      client.mailer.send(message, function (err, result) {
        if (err) {
          this.setNotificationHTML(this.els.notificationEl, "<p class=\"isDanger boxed\">".concat(err, "</p>"));
          return console.error(err);
        }

        if (result.success) {
          this.setNotificationHTML(this.els.notificationEl, "<p class=\"isSuccess boxed\">Thank you for getting in touch, I'll get back to you as soon as possible.</p>");
        } else {
          this.setNotificationHTML(this.els.notificationEl, "<p class=\"isDanger boxed\">Oops, it looks like something went wrong, please email me directly at <a href=\"mailto:".concat(emailParams.to, "\" title=\"Direct email: ").concat(emailParams.to, "\">").concat(emailParams.to, "</a></p>"));
        }

        console.log(result);
      });
    }
  }, {
    key: "onRecaptchaExpired",
    value: function onRecaptchaExpired() {
      this.setNotificationHTML(this.els.notificationEl, "<p class=\"isDanger\">There has been an error processing your enquiry, please refresh the page and try again.</p>");
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(emailEl, notificationEl, notificationHTML) {
      if (emailEl && emailEl.value.length && this.regexTest(emailEl.value, /\S+@\S+\.\S+/)) {
        return true;
      }

      this.setNotificationHTML(notificationEl, notificationHTML);
      return false;
    }
  }, {
    key: "validatePhone",
    value: function validatePhone(phoneEl, notificationEl, notificationHTML) {
      if (phoneEl && phoneEl.value.length && this.regexTest(phoneEl.value, /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/)) {
        return true;
      }

      this.setNotificationHTML(notificationEl, notificationHTML);
      return false;
    }
  }, {
    key: "regexTest",
    value: function regexTest(text, regex) {
      return regex.test(text);
    }
  }, {
    key: "recaptchaSize",
    get: function get() {
      return this.el && this.el.dataset && this.el.dataset.recaptchaSize ? this.el.dataset.recaptchaSize : null;
    }
  }, {
    key: "recaptchaSitekey",
    get: function get() {
      return this.el && this.el.dataset && this.el.dataset.recaptchaSitekey ? this.el.dataset.recaptchaSitekey : null;
    }
  }, {
    key: "methods",
    get: function get() {
      return ['setupData', 'contactFormSubmit', 'contactFormValidate', 'onRecaptchaVerify', 'onRecaptchaExpired', 'validateEmail', 'validatePhone', 'validateInput', 'regexTest', 'setNotificationHTML'];
    }
  }]);

  return _default;
}(_module_Module__WEBPACK_IMPORTED_MODULE_11__.default);



/***/ }),

/***/ "./src/scripts/modules/module/Module.js":
/*!**********************************************!*\
  !*** ./src/scripts/modules/module/Module.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Module; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Module = /*#__PURE__*/function () {
  function Module(element) {
    _classCallCheck(this, Module);

    this.setupModule(element);
  }

  _createClass(Module, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "setupListeners",
    value: function setupListeners() {}
  }, {
    key: "setupModule",
    value: function setupModule(element) {
      this.el = element;
      this.identifier = element.dataset.module;
      this.data = element.dataset;
      this.els = {};
      this.bindMethods(this.defaultMethods);
      this.bindMethods(this.methods);
      this.setupEls();
      this.setupListeners();
      this.setupModel();
      this.setupInputListeners();
    }
  }, {
    key: "bindMethods",
    value: function bindMethods(methodNames) {
      var _this = this;

      methodNames.forEach(function (method) {
        _this[method] = _this[method].bind(_this);
      });
    }
  }, {
    key: "getElementAlias",
    value: function getElementAlias(element) {
      return element.dataset.el.replace("".concat(this.identifier, "."), "").replace(/-([a-z])/g, function (m, w) {
        return w.toUpperCase();
      });
    }
  }, {
    key: "setupEls",
    value: function setupEls() {
      var _this2 = this;

      var els = this.el.querySelectorAll("[data-el^=\"".concat(this.identifier, "\"]"));
      els.forEach(function (el) {
        var alias = _this2.getElementAlias(el);

        var singleElAlias = "".concat(alias, "El");
        var pluralElAlias = "".concat(singleElAlias, "s");
        _this2.els[singleElAlias] = _this2.els[singleElAlias] ? _this2.els[singleElAlias] : el;
        _this2.els[pluralElAlias] = _typeof(_this2.els[pluralElAlias]) === "object" ? _this2.els[pluralElAlias] : [];

        var modelEl = _this2.el.querySelector("[data-model=\"".concat(_this2.identifier, ".").concat(alias, "\"]"));

        if (modelEl) {
          el.modelEl = modelEl;
        }

        _this2.els[pluralElAlias].push(el);
      });
    }
  }, {
    key: "setupModel",
    value: function setupModel() {
      var _this3 = this;

      this.model = {};
      this.elKeys.filter(function (elKey) {
        return _this3.inputTypes.includes(_this3.els[elKey].nodeName);
      }).forEach(function (elKey) {
        _this3.model[_this3.getElementAlias(_this3.els[elKey])] = "";
      });
    }
  }, {
    key: "setupInputListeners",
    value: function setupInputListeners() {
      var _this4 = this;

      this.modelElKeys.forEach(function (elKey) {
        if (_this4.els[elKey].modelEl) {
          _this4.els[elKey].addEventListener('input', function (_ref) {
            var target = _ref.target;
            _this4.model[_this4.getElementAlias(_this4.els[elKey])] = target.value;
            _this4.els[elKey].modelEl.innerHTML = target.value;
          });
        }
      });
    }
  }, {
    key: "elKeys",
    get: function get() {
      return Object.keys(this.els);
    }
  }, {
    key: "modelElKeys",
    get: function get() {
      var _this5 = this;

      return this.elKeys.filter(function (elKey) {
        return _this5.inputTypes.includes(_this5.els[elKey].nodeName);
      });
    }
  }, {
    key: "inputTypes",
    get: function get() {
      return ['INPUT', 'TEXTAREA'];
    }
  }, {
    key: "defaultMethods",
    get: function get() {
      return ['initialize', 'setupModule', 'setupEls', 'setupListeners', 'setupInputListeners', 'getElementAlias'];
    }
  }, {
    key: "methods",
    get: function get() {
      return [];
    }
  }]);

  return Module;
}();



/***/ }),

/***/ "?dba7":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=src_scripts_modules_contact-form_js.script.js.map
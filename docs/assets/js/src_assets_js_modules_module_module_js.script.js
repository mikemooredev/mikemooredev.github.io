(self["webpackChunkmikemooredev"] = self["webpackChunkmikemooredev"] || []).push([["src_assets_js_modules_module_module_js"],{

/***/ "./src/assets/js/modules/module/module.js":
/*!************************************************!*\
  !*** ./src/assets/js/modules/module/module.js ***!
  \************************************************/
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




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Module = /*#__PURE__*/function () {
  function Module(element) {
    _classCallCheck(this, Module);

    this.setup(element);
  }

  _createClass(Module, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "setupListeners",
    value: function setupListeners() {}
  }, {
    key: "setup",
    value: function setup(element) {
      this.el = element;
      this.identifier = element.dataset.module;
      this.data = element.dataset;
      this.els = {};
      this.setup = this.setup.bind(this);
      this.setupEls = this.setupEls.bind(this);
      this.setupListeners = this.setupListeners.bind(this);
      this.setupEls();
    }
  }, {
    key: "setupEls",
    value: function setupEls() {
      var _this = this;

      this.el.querySelectorAll("[data-el^=\"".concat(this.identifier, "\"]")).forEach(function (el, index) {
        var singleAlias = el.dataset.el.replace("".concat(_this.identifier, "."), "") + "El";
        var pluralAlias = "".concat(singleAlias, "s");
        if (!index) _this.els[singleAlias] = el;
        _this.els[pluralAlias] = typeof _this.els[pluralAlias] === "array" || [];

        _this.els[pluralAlias].push(el);
      });
    }
  }]);

  return Module;
}();



/***/ })

}]);
//# sourceMappingURL=src_assets_js_modules_module_module_js.script.js.map
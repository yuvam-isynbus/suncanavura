(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Oruga_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/Autocomplete.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/Autocomplete.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _autocompleteCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocompleteCore.js */ "./resources/js/Autocomplete/autocompleteCore.js");
/* harmony import */ var _util_uniqueId_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/uniqueId.js */ "./resources/js/Autocomplete/util/uniqueId.js");
/* harmony import */ var _util_getRelativePosition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/getRelativePosition.js */ "./resources/js/Autocomplete/util/getRelativePosition.js");
/* harmony import */ var _util_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/debounce.js */ "./resources/js/Autocomplete/util/debounce.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Autocomplete",
  inheritAttrs: false,
  emits: ['update', 'submit'],
  props: {
    search: {
      type: Function,
      required: true
    },
    baseClass: {
      type: String,
      "default": "autocomplete"
    },
    autoSelect: {
      type: Boolean,
      "default": false
    },
    getResultValue: {
      type: Function,
      "default": function _default(result) {
        return result;
      }
    },
    defaultValue: {
      type: String,
      "default": ""
    },
    debounceTime: {
      type: Number,
      "default": 100
    }
  },
  data: function data() {
    var core = new _autocompleteCore_js__WEBPACK_IMPORTED_MODULE_0__.default({
      search: this.search,
      autoSelect: this.autoSelect,
      setValue: this.setValue,
      onUpdate: this.handleUpdate,
      onSubmit: this.handleSubmit,
      onShow: this.handleShow,
      onHide: this.handleHide,
      onLoading: this.handleLoading,
      onLoaded: this.handleLoaded
    });

    if (this.debounceTime > 0) {
      core.handleInput = (0,_util_debounce_js__WEBPACK_IMPORTED_MODULE_3__.default)(core.handleInput, this.debounceTime);
    }

    return {
      core: core,
      value: this.defaultValue,
      resultListId: (0,_util_uniqueId_js__WEBPACK_IMPORTED_MODULE_1__.default)("".concat(this.baseClass, "-result-list-")),
      results: [],
      selectedIndex: -1,
      expanded: false,
      loading: false,
      position: "below",
      resetPosition: true
    };
  },
  computed: {
    rootProps: function rootProps() {
      return {
        "class": this.baseClass,
        style: {
          position: "relative"
        },
        "data-expanded": this.expanded,
        "data-loading": this.loading,
        "data-position": this.position
      };
    },
    inputProps: function inputProps() {
      return _objectSpread({
        "class": "".concat(this.baseClass, "-input"),
        value: this.value,
        role: "combobox",
        autocomplete: "off",
        autocapitalize: "off",
        autocorrect: "off",
        spellcheck: "false",
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-owns": this.resultListId,
        "aria-expanded": this.expanded ? "true" : "false",
        "aria-activedescendant": this.selectedIndex > -1 ? this.resultProps[this.selectedIndex].id : ""
      }, this.$attrs);
    },
    inputListeners: function inputListeners() {
      return {
        input: this.handleInput,
        keydown: this.core.handleKeyDown,
        focus: this.core.handleFocus,
        blur: this.core.handleBlur
      };
    },
    resultListProps: function resultListProps() {
      var yPosition = this.position === "below" ? "top" : "bottom";
      return {
        id: this.resultListId,
        "class": "".concat(this.baseClass, "-result-list"),
        role: "listbox",
        style: _defineProperty({
          position: "absolute",
          zIndex: 1,
          width: "100%",
          visibility: this.expanded ? "visible" : "hidden",
          pointerEvents: this.expanded ? "auto" : "none"
        }, yPosition, "100%")
      };
    },
    resultListListeners: function resultListListeners() {
      return {
        mousedown: this.core.handleResultMouseDown,
        click: this.core.handleResultClick
      };
    },
    resultProps: function resultProps() {
      var _this = this;

      return this.results.map(function (result, index) {
        return _objectSpread({
          id: "".concat(_this.baseClass, "-result-").concat(index),
          "class": "".concat(_this.baseClass, "-result"),
          "data-result-index": index,
          role: "option"
        }, _this.selectedIndex === index ? {
          "aria-selected": "true"
        } : {});
      });
    }
  },
  mounted: function mounted() {
    document.body.addEventListener("click", this.handleDocumentClick);
  },
  beforeUnmount: function beforeUnmount() {
    document.body.removeEventListener("click", this.handleDocumentClick);
  },
  updated: function updated() {
    if (!this.$refs.input || !this.$refs.resultList) {
      return;
    }

    if (this.resetPosition && this.results.length > 0) {
      this.resetPosition = false;
      this.position = (0,_util_getRelativePosition_js__WEBPACK_IMPORTED_MODULE_2__.default)(this.$refs.input, this.$refs.resultList);
    }

    this.core.checkSelectedResultVisible(this.$refs.resultList);
  },
  methods: {
    setValue: function setValue(result) {
      this.value = result ? this.getResultValue(result) : "";
    },
    handleUpdate: function handleUpdate(results, selectedIndex) {
      this.results = results;
      this.selectedIndex = selectedIndex;
      this.$emit("update", results, selectedIndex);
    },
    handleShow: function handleShow() {
      this.expanded = true;
    },
    handleHide: function handleHide() {
      this.expanded = false;
      this.resetPosition = true;
    },
    handleLoading: function handleLoading() {
      this.loading = true;
    },
    handleLoaded: function handleLoaded() {
      this.loading = false;
    },
    handleInput: function handleInput(event) {
      this.value = event.target.value;
      this.core.handleInput(event);
    },
    handleSubmit: function handleSubmit(selectedResult) {
      this.$emit("submit", selectedResult);
    },
    handleDocumentClick: function handleDocumentClick(event) {
      if (this.$refs.root.contains(event.target)) {
        return;
      }

      this.core.hideResults();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/CustomInput.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/CustomInput.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: String,
      "default": ""
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Oruga.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Oruga.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Autocomplete_Autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Autocomplete/Autocomplete */ "./resources/js/Autocomplete/Autocomplete.vue");
/* harmony import */ var _Autocomplete_CustomInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Autocomplete/CustomInput */ "./resources/js/Autocomplete/CustomInput.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Autocomplete: _Autocomplete_Autocomplete__WEBPACK_IMPORTED_MODULE_0__.default,
    CustomInput: _Autocomplete_CustomInput__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      focused: false,
      value: "",
      results: []
    };
  },
  computed: {
    noResults: function noResults() {
      return this.value && this.results.length === 0;
    }
  },
  methods: {
    search: function search(input) {
      this.value = input;

      if (input.length < 1) {
        this.results = [];
      } else {
        this.results = countries.filter(function (country) {
          return country.toLowerCase().startsWith(input.toLowerCase());
        });
      }

      return this.results;
    },
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    }
  }
});
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo Democratic Republic", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji"];

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/Autocomplete.vue?vue&type=template&id=5713c2a1":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/Autocomplete.vue?vue&type=template&id=5713c2a1 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  ref: "root"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    rootProps: $options.rootProps,
    inputProps: $options.inputProps,
    inputListeners: $options.inputListeners,
    resultListProps: $options.resultListProps,
    resultListListeners: $options.resultListListeners,
    results: $data.results,
    resultProps: $options.resultProps
  })], 512
  /* NEED_PATCH */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/CustomInput.vue?vue&type=template&id=3dcb1cb0":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/CustomInput.vue?vue&type=template&id=3dcb1cb0 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    type: "text",
    value: $props.value
  }, _ctx.$attrs), null, 16
  /* FULL_PROPS */
  , ["value"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Oruga.vue?vue&type=template&id=56367d1a":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Oruga.vue?vue&type=template&id=56367d1a ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "p-8"
};
var _hoisted_2 = {
  "class": "max-w-3xl mx-auto"
};
var _hoisted_3 = {
  key: 0,
  "class": "autocomplete-result-list",
  style: {
    "position": "absolute",
    "z-index": "1",
    "width": "100%",
    "top": "100%"
  }
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
  "class": "autocomplete-result"
}, " No results found ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_custom_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("custom-input");

  var _component_autocomplete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("autocomplete");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h1 class=\"text-2xl text-red-600\">{{ selected }}</h1> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_autocomplete, {
    search: $options.search,
    placeholder: "Search for a country",
    "aria-label": "Search for a country"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var rootProps = _ref.rootProps,
          inputProps = _ref.inputProps,
          inputListeners = _ref.inputListeners,
          resultListProps = _ref.resultListProps,
          resultListListeners = _ref.resultListListeners,
          results = _ref.results,
          resultProps = _ref.resultProps;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", rootProps, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_custom_input, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(inputProps, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(inputListeners), {
        "class": ['autocomplete-input', {
          'autocomplete-input-no-results': $options.noResults
        }, {
          'autocomplete-input-focused': $data.focused
        }],
        onFocus: $options.handleFocus,
        onBlur: $options.handleBlur
      }), null, 16
      /* FULL_PROPS */
      , ["class", "onFocus", "onBlur"]), $options.noResults ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", _hoisted_3, [_hoisted_4])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(resultListProps, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(resultListListeners)), [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(results, function (result, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
          key: resultProps[index].id
        }, resultProps[index]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(result), 17
        /* TEXT, FULL_PROPS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      ))], 16
      /* FULL_PROPS */
      )], 16
      /* FULL_PROPS */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["search"])])]);
}

/***/ }),

/***/ "./resources/js/Autocomplete/autocompleteCore.js":
/*!*******************************************************!*\
  !*** ./resources/js/Autocomplete/autocompleteCore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_closest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/closest.js */ "./resources/js/Autocomplete/util/closest.js");
/* harmony import */ var _util_isPromise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isPromise.js */ "./resources/js/Autocomplete/util/isPromise.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var AutocompleteCore = function AutocompleteCore() {
  var _this = this;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      search = _ref.search,
      _ref$autoSelect = _ref.autoSelect,
      autoSelect = _ref$autoSelect === void 0 ? false : _ref$autoSelect,
      _ref$setValue = _ref.setValue,
      setValue = _ref$setValue === void 0 ? function () {} : _ref$setValue,
      _ref$setAttribute = _ref.setAttribute,
      setAttribute = _ref$setAttribute === void 0 ? function () {} : _ref$setAttribute,
      _ref$onUpdate = _ref.onUpdate,
      onUpdate = _ref$onUpdate === void 0 ? function () {} : _ref$onUpdate,
      _ref$onSubmit = _ref.onSubmit,
      onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
      _ref$onShow = _ref.onShow,
      onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
      _ref$onHide = _ref.onHide,
      onHide = _ref$onHide === void 0 ? function () {} : _ref$onHide,
      _ref$onLoading = _ref.onLoading,
      onLoading = _ref$onLoading === void 0 ? function () {} : _ref$onLoading,
      _ref$onLoaded = _ref.onLoaded,
      onLoaded = _ref$onLoaded === void 0 ? function () {} : _ref$onLoaded;

  _classCallCheck(this, AutocompleteCore);

  _defineProperty(this, "value", '');

  _defineProperty(this, "searchCounter", 0);

  _defineProperty(this, "results", []);

  _defineProperty(this, "selectedIndex", -1);

  _defineProperty(this, "handleInput", function (event) {
    var value = event.target.value;

    _this.updateResults(value);

    _this.value = value;
  });

  _defineProperty(this, "handleKeyDown", function (event) {
    var key = event.key;

    switch (key) {
      case 'Up': // IE/Edge

      case 'Down': // IE/Edge

      case 'ArrowUp':
      case 'ArrowDown':
        {
          var selectedIndex = key === 'ArrowUp' || key === 'Up' ? _this.selectedIndex - 1 : _this.selectedIndex + 1;
          event.preventDefault();

          _this.handleArrows(selectedIndex);

          break;
        }

      case 'Tab':
        {
          _this.selectResult();

          break;
        }

      case 'Enter':
        {
          var selectedResult = _this.results[_this.selectedIndex];

          _this.selectResult();

          _this.onSubmit(selectedResult);

          break;
        }

      case 'Esc': // IE/Edge

      case 'Escape':
        {
          _this.hideResults();

          _this.setValue();

          break;
        }

      default:
        return;
    }
  });

  _defineProperty(this, "handleFocus", function (event) {
    var value = event.target.value;

    _this.updateResults(value);

    _this.value = value;
  });

  _defineProperty(this, "handleBlur", function () {
    _this.hideResults();
  });

  _defineProperty(this, "handleResultMouseDown", function (event) {
    event.preventDefault();
  });

  _defineProperty(this, "handleResultClick", function (event) {
    var target = event.target;
    var result = (0,_util_closest_js__WEBPACK_IMPORTED_MODULE_0__.default)(target, '[data-result-index]');

    if (result) {
      _this.selectedIndex = parseInt(result.dataset.resultIndex, 10);
      var selectedResult = _this.results[_this.selectedIndex];

      _this.selectResult();

      _this.onSubmit(selectedResult);
    }
  });

  _defineProperty(this, "handleArrows", function (selectedIndex) {
    // Loop selectedIndex back to first or last result if out of bounds
    var resultsCount = _this.results.length;
    _this.selectedIndex = (selectedIndex % resultsCount + resultsCount) % resultsCount; // Update results and aria attributes

    _this.onUpdate(_this.results, _this.selectedIndex);
  });

  _defineProperty(this, "selectResult", function () {
    var selectedResult = _this.results[_this.selectedIndex];

    if (selectedResult) {
      _this.setValue(selectedResult);
    }

    _this.hideResults();
  });

  _defineProperty(this, "updateResults", function (value) {
    var currentSearch = ++_this.searchCounter;

    _this.onLoading();

    _this.search(value).then(function (results) {
      if (currentSearch !== _this.searchCounter) {
        return;
      }

      _this.results = results;

      _this.onLoaded();

      if (_this.results.length === 0) {
        _this.hideResults();

        return;
      }

      _this.selectedIndex = _this.autoSelect ? 0 : -1;

      _this.onUpdate(_this.results, _this.selectedIndex);

      _this.showResults();
    });
  });

  _defineProperty(this, "showResults", function () {
    _this.setAttribute('aria-expanded', true);

    _this.onShow();
  });

  _defineProperty(this, "hideResults", function () {
    _this.selectedIndex = -1;
    _this.results = [];

    _this.setAttribute('aria-expanded', false);

    _this.setAttribute('aria-activedescendant', '');

    _this.onUpdate(_this.results, _this.selectedIndex);

    _this.onHide();
  });

  _defineProperty(this, "checkSelectedResultVisible", function (resultsElement) {
    var selectedResultElement = resultsElement.querySelector("[data-result-index=\"".concat(_this.selectedIndex, "\"]"));

    if (!selectedResultElement) {
      return;
    }

    var resultsPosition = resultsElement.getBoundingClientRect();
    var selectedPosition = selectedResultElement.getBoundingClientRect();

    if (selectedPosition.top < resultsPosition.top) {
      // Element is above viewable area
      resultsElement.scrollTop -= resultsPosition.top - selectedPosition.top;
    } else if (selectedPosition.bottom > resultsPosition.bottom) {
      // Element is below viewable area
      resultsElement.scrollTop += selectedPosition.bottom - resultsPosition.bottom;
    }
  });

  this.search = (0,_util_isPromise_js__WEBPACK_IMPORTED_MODULE_1__.default)(search) ? search : function (value) {
    return Promise.resolve(search(value));
  };
  this.autoSelect = autoSelect;
  this.setValue = setValue;
  this.setAttribute = setAttribute;
  this.onUpdate = onUpdate;
  this.onSubmit = onSubmit;
  this.onShow = onShow;
  this.onHide = onHide;
  this.onLoading = onLoading;
  this.onLoaded = onLoaded;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutocompleteCore);

/***/ }),

/***/ "./resources/js/Autocomplete/util/closest.js":
/*!***************************************************!*\
  !*** ./resources/js/Autocomplete/util/closest.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matches_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches.js */ "./resources/js/Autocomplete/util/matches.js");
// Polyfill for element.closest, to support Internet Explorer. It's a relatively
// simple polyfill, so we'll just include it rather than require the user to
// include the polyfill themselves. Adapted from
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill


var closestPolyfill = function closestPolyfill(el, selector) {
  var element = el;

  while (element && element.nodeType === 1) {
    if ((0,_matches_js__WEBPACK_IMPORTED_MODULE_0__.default)(element, selector)) {
      return element;
    }

    element = element.parentNode;
  }

  return null;
};

var closest = function closest(element, selector) {
  return element.closest ? element.closest(selector) : closestPolyfill(element, selector);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closest);

/***/ }),

/***/ "./resources/js/Autocomplete/util/debounce.js":
/*!****************************************************!*\
  !*** ./resources/js/Autocomplete/util/debounce.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);

/***/ }),

/***/ "./resources/js/Autocomplete/util/getRelativePosition.js":
/*!***************************************************************!*\
  !*** ./resources/js/Autocomplete/util/getRelativePosition.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Calculates whether element2 should be above or below element1. Always
// places element2 below unless all of the following:
// 1. There isn't enough visible viewport below to fit element2
// 2. There is more room above element1 than there is below
// 3. Placing elemen2 above 1 won't overflow window
var getRelativePosition = function getRelativePosition(element1, element2) {
  var position1 = element1.getBoundingClientRect();
  var position2 = element2.getBoundingClientRect();
  var positionAbove =
  /* 1 */
  position1.bottom + position2.height > window.innerHeight &&
  /* 2 */
  window.innerHeight - position1.bottom < position1.top &&
  /* 3 */
  window.pageYOffset + position1.top - position2.height > 0;
  return positionAbove ? 'above' : 'below';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRelativePosition);

/***/ }),

/***/ "./resources/js/Autocomplete/util/isPromise.js":
/*!*****************************************************!*\
  !*** ./resources/js/Autocomplete/util/isPromise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Returns true if the value has a "then" function. Adapted from
// https://github.com/graphql/graphql-js/blob/499a75939f70c4863d44149371d6a99d57ff7c35/src/jsutils/isPromise.js
var isPromise = function isPromise(value) {
  return Boolean(value && typeof value.then === 'function');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPromise);

/***/ }),

/***/ "./resources/js/Autocomplete/util/matches.js":
/*!***************************************************!*\
  !*** ./resources/js/Autocomplete/util/matches.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Polyfill for element.matches, to support Internet Explorer. It's a relatively
// simple polyfill, so we'll just include it rather than require the user to
// include the polyfill themselves. Adapted from
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
var matches = function matches(element, selector) {
  return element.matches ? element.matches(selector) : element.msMatchesSelector ? element.msMatchesSelector(selector) : element.webkitMatchesSelector ? element.webkitMatchesSelector(selector) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (matches);

/***/ }),

/***/ "./resources/js/Autocomplete/util/uniqueId.js":
/*!****************************************************!*\
  !*** ./resources/js/Autocomplete/util/uniqueId.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Generates a unique ID, with optional prefix. Adapted from
// https://github.com/lodash/lodash/blob/61acdd0c295e4447c9c10da04e287b1ebffe452c/uniqueId.js
var idCounter = 0;

var uniqueId = function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return "".concat(prefix).concat(++idCounter);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uniqueId);

/***/ }),

/***/ "./resources/js/Autocomplete/Autocomplete.vue":
/*!****************************************************!*\
  !*** ./resources/js/Autocomplete/Autocomplete.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Autocomplete_vue_vue_type_template_id_5713c2a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autocomplete.vue?vue&type=template&id=5713c2a1 */ "./resources/js/Autocomplete/Autocomplete.vue?vue&type=template&id=5713c2a1");
/* harmony import */ var _Autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Autocomplete.vue?vue&type=script&lang=js */ "./resources/js/Autocomplete/Autocomplete.vue?vue&type=script&lang=js");



_Autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Autocomplete_vue_vue_type_template_id_5713c2a1__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Autocomplete/Autocomplete.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Autocomplete/CustomInput.vue":
/*!***************************************************!*\
  !*** ./resources/js/Autocomplete/CustomInput.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomInput_vue_vue_type_template_id_3dcb1cb0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomInput.vue?vue&type=template&id=3dcb1cb0 */ "./resources/js/Autocomplete/CustomInput.vue?vue&type=template&id=3dcb1cb0");
/* harmony import */ var _CustomInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomInput.vue?vue&type=script&lang=js */ "./resources/js/Autocomplete/CustomInput.vue?vue&type=script&lang=js");



_CustomInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _CustomInput_vue_vue_type_template_id_3dcb1cb0__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_CustomInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Autocomplete/CustomInput.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CustomInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Oruga.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Oruga.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Oruga_vue_vue_type_template_id_56367d1a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Oruga.vue?vue&type=template&id=56367d1a */ "./resources/js/Pages/Oruga.vue?vue&type=template&id=56367d1a");
/* harmony import */ var _Oruga_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Oruga.vue?vue&type=script&lang=js */ "./resources/js/Pages/Oruga.vue?vue&type=script&lang=js");



_Oruga_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Oruga_vue_vue_type_template_id_56367d1a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Oruga_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Oruga.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Oruga_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Autocomplete/Autocomplete.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Autocomplete/Autocomplete.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Autocomplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Autocomplete.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/Autocomplete.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Autocomplete/CustomInput.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Autocomplete/CustomInput.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CustomInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/CustomInput.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Oruga.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Oruga.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Oruga_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Oruga_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Oruga.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Oruga.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Autocomplete/Autocomplete.vue?vue&type=template&id=5713c2a1":
/*!**********************************************************************************!*\
  !*** ./resources/js/Autocomplete/Autocomplete.vue?vue&type=template&id=5713c2a1 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Autocomplete_vue_vue_type_template_id_5713c2a1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Autocomplete_vue_vue_type_template_id_5713c2a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Autocomplete.vue?vue&type=template&id=5713c2a1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/Autocomplete.vue?vue&type=template&id=5713c2a1");


/***/ }),

/***/ "./resources/js/Autocomplete/CustomInput.vue?vue&type=template&id=3dcb1cb0":
/*!*********************************************************************************!*\
  !*** ./resources/js/Autocomplete/CustomInput.vue?vue&type=template&id=3dcb1cb0 ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomInput_vue_vue_type_template_id_3dcb1cb0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CustomInput_vue_vue_type_template_id_3dcb1cb0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CustomInput.vue?vue&type=template&id=3dcb1cb0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Autocomplete/CustomInput.vue?vue&type=template&id=3dcb1cb0");


/***/ }),

/***/ "./resources/js/Pages/Oruga.vue?vue&type=template&id=56367d1a":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Oruga.vue?vue&type=template&id=56367d1a ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Oruga_vue_vue_type_template_id_56367d1a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Oruga_vue_vue_type_template_id_56367d1a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Oruga.vue?vue&type=template&id=56367d1a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Oruga.vue?vue&type=template&id=56367d1a");


/***/ })

}]);
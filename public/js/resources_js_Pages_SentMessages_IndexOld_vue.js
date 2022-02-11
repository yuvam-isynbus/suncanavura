(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_SentMessages_IndexOld_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* import Layout from "@/Shared/Layout";
import Show from "@/Pages/Messages/Show";
import SendingMessageCard from "@/Shared/SendingMessageCard";
import SendMessage from "@/Shared/SendMessage";
import SearchInput from "@/Shared/SearchInput";
import probable from "@/mixins/probable"; */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Houses"
  },
  mixins: [probable],
  layout: function layout(h, page) {
    return h(Layout, [h(Show, {
      props: {// house: page.data.props.house
      }
    }, [page])]);
  },
  components: {
    SendingMessageCard: SendingMessageCard,
    SearchInput: SearchInput,
    SendMessage: SendMessage
  },
  props: {
    messages: Array
  },
  data: function data() {
    return {
      replayMessage: null,
      errors: [],
      searchRoute: "messages.sent_messages.index"
    };
  },
  methods: {
    replayClicked: function replayClicked(message) {
      this.messages.map(function (item) {
        return item.replay = false;
      });
      message.replay = true;
    },
    cancel: function cancel(message) {
      message.replay = false;
      this.replayMessage = null;
      this.errors = [];
    },
    deleteMessage: function deleteMessage(message) {
      this.$inertia.post(this.route("messages.delete.sent"), {
        id: message.id
      }, {
        replace: false,
        preserveScroll: true,
        preserveState: true
      }).then(function () {
        console.log("message deleted");
      });
    },
    sendMessage: function sendMessage(message) {
      var _this = this;

      this.$inertia.post(this.route("messages.users.rooms.sendmessage.store", [message.data.receiver_id, message.data.room_id]), {
        message: this.replayMessage,
        redirect: "messages.sent_messages.index",
        id: message.id
      }).then(function () {
        if (_this.$page.errors.message) {
          _this.errors = _this.$page.errors.message;
        } else {
          message.replay = false; // console.log("PPPP");
          // this.$inertia.visit("/sent_messages");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=template&id=62809a32":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=template&id=62809a32 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-gray-400 px-4 py-8 sm:p-4"
};
var _hoisted_2 = {
  "class": "mb-6 mt-2 flex justify-between items-center"
};
var _hoisted_3 = {
  "class": "flex justify-between"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_search_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("search-input");

  var _component_send_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("send-message");

  var _component_sending_message_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("sending-message-card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h1 class=\"mb-4 font-bold text-3xl\">Sent messages</h1> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_search_input, {
    modelValue: _ctx.form.search,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.form.search = $event;
    }),
    "class": "w-full max-w-sm mr-4",
    onReset: _ctx.reset
  }, null, 8
  /* PROPS */
  , ["modelValue", "onReset"])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.messages, function (message) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_sending_message_card, {
      key: message.id,
      message: message
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
          "class": "block mt-2 mb-4 cursor-pointer text-blue-500 hover:text-orange font-semibold",
          onClick: function onClick($event) {
            return $options.replayClicked(message);
          }
        }, "Send new message", 8
        /* PROPS */
        , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
          "class": "block ml-2 mt-2 mb-4 cursor-pointer text-red-600 hover:text-orange font-semibold",
          onClick: function onClick($event) {
            return $options.deleteMessage(message);
          },
          "preserve-scroll": ""
        }, "Delete", 8
        /* PROPS */
        , ["onClick"])]), message.replay ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_send_message, {
          key: 0,
          modelValue: $data.replayMessage,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return $data.replayMessage = $event;
          }),
          errors: $data.errors,
          onSendMessage: function onSendMessage($event) {
            return $options.sendMessage(message);
          },
          onCancel: function onCancel($event) {
            return $options.cancel(message);
          }
        }, null, 8
        /* PROPS */
        , ["modelValue", "errors", "onSendMessage", "onCancel"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["message"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./resources/js/Pages/SentMessages/IndexOld.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/SentMessages/IndexOld.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexOld_vue_vue_type_template_id_62809a32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexOld.vue?vue&type=template&id=62809a32 */ "./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=template&id=62809a32");
/* harmony import */ var _IndexOld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexOld.vue?vue&type=script&lang=js */ "./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=script&lang=js");



_IndexOld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _IndexOld_vue_vue_type_template_id_62809a32__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_IndexOld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/SentMessages/IndexOld.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_IndexOld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexOld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexOld_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexOld.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=template&id=62809a32":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=template&id=62809a32 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexOld_vue_vue_type_template_id_62809a32__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexOld_vue_vue_type_template_id_62809a32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexOld.vue?vue&type=template&id=62809a32 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/SentMessages/IndexOld.vue?vue&type=template&id=62809a32");


/***/ })

}]);
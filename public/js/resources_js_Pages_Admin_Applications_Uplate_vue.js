(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Applications_Uplate_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: String,
    url: String,
    uuid: String
  },
  watch: {
    title: {
      immediate: true,
      handler: function handler(title) {
        document.title = title;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/SuperAdminLayout.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/SuperAdminLayout.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_Notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/Notifications */ "./resources/js/Shared/Notifications.vue");
/* harmony import */ var _Menu_NewMenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Menu/NewMenuItem */ "./resources/js/Menu/NewMenuItem.vue");
/* harmony import */ var _Menu_DesktopMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Menu/DesktopMenu */ "./resources/js/Menu/DesktopMenu.vue");
/* harmony import */ var _Menu_MobileMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Menu/MobileMenu */ "./resources/js/Menu/MobileMenu.vue");
/* harmony import */ var _Menu_adminmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Menu/adminmenu */ "./resources/js/Menu/adminmenu.js");
/* harmony import */ var _Menu_usermenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Menu/usermenu */ "./resources/js/Menu/usermenu.js");


 // import FlashMessages from "@/Shared/FlashMessages";







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Notifications: _Shared_Notifications__WEBPACK_IMPORTED_MODULE_3__.default,
    NewMenuItem: _Menu_NewMenuItem__WEBPACK_IMPORTED_MODULE_4__.default,
    DesktopMenu: _Menu_DesktopMenu__WEBPACK_IMPORTED_MODULE_5__.default,
    MobileMenu: _Menu_MobileMenu__WEBPACK_IMPORTED_MODULE_6__.default // FlashMessages,

  },
  props: {
    title: String,
    resource: String,
    indexRoute: String,
    action: String,
    type: String
  },
  setup: function setup() {
    var isMenuOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isDropdownOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    function menuClosed() {
      isMenuOpen.value = false;
    }

    return {
      isMenuOpen: isMenuOpen,
      isDropdownOpen: isDropdownOpen,
      menuClosed: menuClosed
    };
  },
  mounted: function mounted() {
    var _this = this;

    document.addEventListener("click", function (event) {
      if (_this.$refs.dropdown && !_this.$refs.dropdown.contains(event.target)) {
        _this.isDropdownOpen = false;
      }
    });
    var id = this.$page.props.authuser.id;
    window.Echo["private"]("App.Models.User." + id).notification(function (notification) {
      // console.log(notification)
      _this.$inertia.reload();

      _this.$notify({
        group: "common",
        title: "Nova informacija!",
        type: "info",
        text: notification.notice
      }, 2000);
    });
    /* window.Echo.private("notifications").listen("Verified", (e) => {
      this.$inertia.reload();
      this.$notify(
            {
              group: "common",
              title: "Uspjeh!",
              type: "success",
              text: "Verificiran je novi korisnik",
            },
            2000
          );
    }); */

    /*     this.$notify(
            {
              group: "common",
              title: "Uspjeh!",
              type: "success",
              text: 'LA LA',
            },
            20000
          ); */

    var flash = this.$page.props.flash;

    if (flash.success || flash.status) {
      /* this.$toasted.show(flash.success ? flash.success : flash.status, {
        theme: "outline",
        position: "bottom-right",
        type: "success",
        duration: 3000,
      }); */
    }
  },
  methods: {
    url: function url() {
      return location.pathname.substr(1);
    },
    logout: function logout() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default().post(route("logout"), null, {
        headers: {
          "X-CSRF-TOKEN": this.$page.props.csrf.token
        }
      }).then(function () {
        return window.location.href = _this2.route("login");
      });
    }
  },
  computed: {
    menuItems: function menuItems() {
      return this.type && this.type === "user" ? _Menu_usermenu__WEBPACK_IMPORTED_MODULE_8__.default : _Menu_adminmenu__WEBPACK_IMPORTED_MODULE_7__.default;
    },
    userName: function userName() {
      return this.$page.props.authuser.name;
    },
    isAdmin: function isAdmin() {
      return this.$page.props.authuser.role === "admin";
    },
    userAvatar: function userAvatar() {
      return this.$page.props.authuser.profile_photo_url;
    }
  },
  watch: {
    "$page.flash": {
      handler: function handler() {
        this.show = true;
        var flash = this.$page.props.flash;

        if (flash !== null && flash !== void 0 && flash.success || flash !== null && flash !== void 0 && flash.status) {
          /* this.$toasted.show(flash.success ? flash.success : flash.status, {
            theme: "outline",
            position: "bottom-right",
            type: "success",
            duration: 3000,
          }); */
          this.$notify({
            group: "common",
            title: "Uspjeh!",
            type: "success",
            text: flash.success ? flash.success : flash.status
          }, 2000);
        } else if (Object.keys(this.$page.props.errors).length > 0) {
          /* this.$toasted.show("There is a form error.", {
            theme: "outline",
            position: "bottom-right",
            type: "error",
            duration: 3000,
          }); */
          this.$notify({
            group: "common",
            title: "Upsss!",
            type: "error",
            text: "Pogreška u ispunjavanju polja!"
          }, 2000);
        }
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/DesktopMenu.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/DesktopMenu.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Menu_NewMenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Menu/NewMenuItem */ "./resources/js/Menu/NewMenuItem.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
// import Icon from "@/Shared/Icon";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    // Icon,
    NewMenuItem: _Menu_NewMenuItem__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    url: String,
    items: Array
  },
  methods: {
    isActive: function isActive(url1, url2) {
      return url1.split("/")[0] === url2.split("/")[0] && url1.split("/")[1] === url2.split("/")[1];
    },
    isUrl: function isUrl() {
      var _this = this;

      for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
        urls[_key] = arguments[_key];
      }

      if (urls[0] === "") {
        return this.url === "";
      }

      return urls.filter(function (url) {
        return _this.url.startsWith(url);
      }).length;
    },
    linkClicked: function linkClicked(routeName) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit(routeName, {
        onSuccess: function onSuccess(page) {}
      });
    },
    goToLandingPage: function goToLandingPage() {
      window.location.href = this.route("naslovna");
    }
  },
  computed: {
    filteredItems: function filteredItems() {
      return this.items.filter(function (item) {
        return item.showItem === true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/MobileMenu.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/MobileMenu.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Menu_NewMenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Menu/NewMenuItem */ "./resources/js/Menu/NewMenuItem.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ["menuclosed"],
  components: {
    NewMenuItem: _Menu_NewMenuItem__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    url: String,
    isMenuOpen: Boolean,
    items: Array
  },
  methods: {
    closeMenu: function closeMenu() {
      this.$emit("menuclosed");
    },
    linkClicked: function linkClicked(routeName) {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.visit(routeName, {
        onSuccess: function onSuccess(page) {
          return _this.$emit("menuclosed");
        }
      });
    },
    goToLandingPage: function goToLandingPage() {
      window.location.href = this.route("naslovna");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/NewMenuItem.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/NewMenuItem.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Shared_NewIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/NewIcon */ "./resources/js/Shared/NewIcon.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NewIcon: _Shared_NewIcon__WEBPACK_IMPORTED_MODULE_0__.default
  },
  emits: ["linkclicked"],
  props: {
    active: Boolean,
    label: String,
    iconName: String,
    routeName: String,
    unreadMessages: Boolean,
    unreadNotices: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Shared_ConfirmModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/ConfirmModal */ "./resources/js/Shared/ConfirmModal.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ["close", "confirm"],
  components: {
    ConfirmModal: _Shared_ConfirmModal__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    showModal: Boolean,
    actionLabel: String,
    message: String
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit("close"); // this.form.reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Shared_DialogModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/DialogModal */ "./resources/js/Shared/DialogModal.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ["close"],
  components: {
    DialogModal: _Shared_DialogModal__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    showModal: Boolean,
    sponsor: Object
  },
  watch: {
    sponsor: function sponsor(val) {
      this.form.name = val.name;
      this.sponsorId = val.id;
    }
  },
  data: function data() {
    return {
      sponsorId: null,
      form: this.$inertia.form({
        name: ""
      })
    };
  },
  computed: {
    sponsorLabel: function sponsorLabel() {
      return this.sponsorId ? 'Izmjenite ime sponzora' : 'Unesite ime sponzora';
    }
  },
  methods: {
    submitSponsor: function submitSponsor() {
      var _this = this;

      var url = this.sponsorId ? route("admin.sponsors.update", this.sponsorId) : route("admin.sponsors.store");
      var method = this.sponsorId ? {
        _method: "PUT"
      } : {};
      this.form.transform(function (data) {
        return _objectSpread(_objectSpread({}, method), data);
      }).post(url, {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return _this.closeModal();
        },
        onError: function onError() {}
      });
    },
    closeModal: function closeModal() {
      this.$emit("close");
      this.sponsorId = null;
      this.form.reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Layout_SuperAdminLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layout/SuperAdminLayout */ "./resources/js/Layout/SuperAdminLayout.vue");
/* harmony import */ var _Layout_NestedLayoutAdminApplication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layout/NestedLayoutAdminApplication */ "./resources/js/Layout/NestedLayoutAdminApplication.vue");
/* harmony import */ var _Pages_Admin_Applications_CreateSponsor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Pages/Admin/Applications/CreateSponsor */ "./resources/js/Pages/Admin/Applications/CreateSponsor.vue");
/* harmony import */ var _Pages_Admin_Applications_ConfirmDelete_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Pages/Admin/Applications/ConfirmDelete.vue */ "./resources/js/Pages/Admin/Applications/ConfirmDelete.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inheritAttrs: false,
  layout: function layout(h, page) {
    return h(_Layout_SuperAdminLayout__WEBPACK_IMPORTED_MODULE_0__.default, {
      resource: "Prijava",
      indexRoute: "admin.applications.index" // action: page.props.application.name,

    }, function () {
      return [page];
    });
  },
  components: {
    CreateSponsor: _Pages_Admin_Applications_CreateSponsor__WEBPACK_IMPORTED_MODULE_2__.default,
    ConfirmDelete: _Pages_Admin_Applications_ConfirmDelete_vue__WEBPACK_IMPORTED_MODULE_3__.default
  },
  props: {
    application: Object,
    sponsors: Array
  },
  mounted: function mounted() {
    var _this = this;

    window.Echo["private"]("applications").listen("TimelineEvent", function (e) {
      _this.$inertia.reload();
    });
  },
  data: function data() {
    return {
      showModal: false,
      sponsor: {},
      showConfirmModal: false,
      deleteSponsor: null
    };
  },
  methods: {
    createNote: function createNote() {
      this.showModal = true; // this.modalValue = ''
    },
    editSponsor: function editSponsor(sponsor) {
      this.showModal = true;
      this.sponsor = _objectSpread({}, sponsor);
    },
    confirmSponsorDeletion: function confirmSponsorDeletion(sponsor) {
      this.showConfirmModal = true;
      this.deleteSponsor = sponsor;
    },
    modalClose: function modalClose() {
      this.showConfirmModal = false;
      this.deleteSponsor = null;
    },
    destroySponsor: function destroySponsor() {
      var _this2 = this;

      this.$inertia["delete"](this.route("admin.sponsors.destroy", this.deleteSponsor.id), {
        onSuccess: function onSuccess(page) {
          return _this2.showConfirmModal = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ConfirmModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ConfirmModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Shared_ModalNew__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/ModalNew */ "./resources/js/Shared/ModalNew.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ModalNew: _Shared_ModalNew__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    show: {
      "default": false
    },
    closeable: {
      "default": true
    }
  },
  methods: {
    close: function close() {
      this.$emit("close");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Shared_ModalNew__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/ModalNew */ "./resources/js/Shared/ModalNew.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ["close"],
  components: {
    ModalNew: _Shared_ModalNew__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    show: {
      "default": false
    },
    closeable: {
      "default": true
    }
  },
  methods: {
    close: function close() {
      this.$emit("close");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ["close"],
  props: {
    show: {
      "default": false
    },
    closeable: {
      "default": true
    },
    closeIcon: {
      "default": true
    }
  },
  methods: {
    close: function close() {
      if (this.closeable) {
        this.$emit("close");
      }
    },
    closeOnEscape: function closeOnEscape(e) {
      if (e.key === "Escape" && this.show) {
        this.close();
      }
    }
  },
  watch: {
    show: function show(val) {
      if (val) {
        this.$nextTick(function () {
          var _document$querySelect, _document$querySelect2;

          return ((_document$querySelect = document.querySelector("input")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.focus()) || ((_document$querySelect2 = document.querySelector("textarea")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.focus());
        });
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
    }
  },
  created: function created() {
    document.addEventListener("keydown", this.closeOnEscape);
  },
  unmounted: function unmounted() {
    document.removeEventListener("keydown", this.closeOnEscape);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NewIcon.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NewIcon.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    name: String,
    active: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notifications.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notifications.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: String
  },
  methods: {
    borderClass: function borderClass(type) {
      switch (type) {
        case "error":
          return "border-red-300";
          break;

        case "success":
          return "border-green-200 ";
          break;

        case "info":
          return "border-yellow-200 ";
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=template&id=5377e3d9":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=template&id=5377e3d9 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-6 sm:mt-2 2xl:mt-5"
};
var _hoisted_2 = {
  "class": "px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl border-b"
};
var _hoisted_3 = {
  "class": "-mb-px flex space-x-8",
  "aria-label": "Tabs"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Podaci o prijavi ");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Dokumenti ");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Povijest prijave ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Uplate ");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Bilješke ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Current: \"border-pink-500 text-indigo-600\", Default: \"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300\" "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.applications.show', $props.uuid),
    "class": ["whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm", $props.url == 'admin/applications' ? 'border-pink-500 text-gray-900 ' : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'],
    "aria-current": "page"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.applications.documents', $props.uuid),
    "class": ["whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm", $props.url == 'admin/applications/documents' ? 'border-pink-500 text-gray-900 ' : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'],
    "aria-current": "page"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.applications.timeline', $props.uuid),
    "class": ["whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm", $props.url == 'admin/applications/timeline' ? 'border-pink-500 text-gray-900 ' : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'],
    "aria-current": "page"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.applications.payments.index', $props.uuid),
    "class": ["whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm", $props.url == 'admin/applications/payments' ? 'border-pink-500 text-gray-900 ' : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'],
    "aria-current": "page"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.applications.notes.index', $props.uuid),
    "class": ["whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm", $props.url == 'admin/applications/notes' ? 'border-pink-500 text-gray-900 ' : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'],
    "aria-current": "page"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/SuperAdminLayout.vue?vue&type=template&id=c37314d6":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/SuperAdminLayout.vue?vue&type=template&id=c37314d6 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "h-screen flex overflow-hidden"
};
var _hoisted_2 = {
  "class": "hidden lg:flex lg:flex-shrink-0"
};
var _hoisted_3 = {
  "class": "flex flex-col w-64"
};
var _hoisted_4 = {
  id: "main-modal",
  "class": "flex-1 overflow-auto focus:outline-none",
  tabindex: "0"
};
var _hoisted_5 = {
  "class": "relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 transition ease-in-out duration-150",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 6h16M4 12h8m-8 6h16"
})], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "flex-1 flex justify-between px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8 xl:max-w-screen-2xl border-b"
};
var _hoisted_8 = {
  "class": "flex-1 flex"
};
var _hoisted_9 = {
  "class": "my-auto font-bold text-2xl"
};
var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  key: 2,
  "class": "text-gray-900 font-medium"
};
var _hoisted_12 = {
  key: 3
};
var _hoisted_13 = {
  "class": "ml-4 flex items-center md:ml-6"
};
var _hoisted_14 = {
  "class": "ml-3 relative",
  ref: "dropdown"
};
var _hoisted_15 = {
  "class": "hidden ml-3 text-gray-700 text-sm leading-5 font-medium lg:block"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
};
var _hoisted_18 = {
  "class": "py-1 rounded-md bg-white shadow-xs",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "user-menu"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Profile");

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Dashboard");

var _hoisted_21 = {
  "class": "flex-1 relative pb-8 z-0 overflow-y-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_notifications = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("notifications");

  var _component_MobileMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MobileMenu");

  var _component_DesktopMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DesktopMenu");

  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_notifications), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Off-canvas menu for mobile, show/hide based on off-canvas menu state. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MobileMenu, {
    isMenuOpen: $setup.isMenuOpen,
    url: $options.url(),
    onMenuclosed: $setup.menuClosed,
    items: $options.menuItems
  }, null, 8
  /* PROPS */
  , ["isMenuOpen", "url", "onMenuclosed", "items"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Static sidebar for desktop "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sidebar component, swap this element with another sidebar if you like "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DesktopMenu, {
    url: $options.url(),
    items: $options.menuItems
  }, null, 8
  /* PROPS */
  , ["url", "items"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.isMenuOpen = true;
    }),
    "class": "px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-600 lg:hidden",
    "aria-label": "Open sidebar"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: menu-alt-1 "), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Title bar "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_9, [$props.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.resource ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_inertia_link, {
    key: 1,
    "class": "text-gray-600 hover:text-gray-700",
    href: _ctx.route($props.indexRoute)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.resource), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.action ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_11, " / ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.action ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.action), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Profile dropdown "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:bg-gray-100 lg:p-2 lg:rounded-md lg:hover:bg-gray-10 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.isDropdownOpen = !$setup.isDropdownOpen;
    }),
    "class": "flex items-center w-full rounded-md shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-rose-400",
    id: "user-menu",
    "aria-label": "User menu",
    "aria-haspopup": "true"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    "class": "h-8 w-8 rounded-full",
    src: $options.userAvatar,
    alt: ""
  }, null, 8
  /* PROPS */
  , ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.userName), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: chevron-down "), _hoisted_16])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n              Profile dropdown panel, show/hide based on dropdown state.\n\n              Entering: \"transition ease-out duration-100\"\n                From: \"transform opacity-0 scale-95\"\n                To: \"transform opacity-100 scale-100\"\n              Leaving: \"transition ease-in duration-75\"\n                From: \"transform opacity-100 scale-100\"\n                To: \"transform opacity-0 scale-95\"\n            "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    "enter-active-class": "transition ease-out duration-100 transform",
    "enter-from-class": "opacity-0 scale-95",
    "enter-to-class": "opacity-100 scale-100",
    "leave-active-class": "transition ease-in duration-75 transform",
    "leave-from-class": "opacity-100 scale-100",
    "leave-to-class": "opacity-0 scale-95"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [$options.isAdmin && $props.type !== 'profile' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_inertia_link, {
        key: 0,
        href: _ctx.route('user.profile.data'),
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $setup.isDropdownOpen = false;
        }),
        "class": "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150",
        role: "menuitem"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_19];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.isAdmin && $props.type === 'profile' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_inertia_link, {
        key: 1,
        href: _ctx.route('admin.dashboard'),
        onClick: _cache[4] || (_cache[4] = function ($event) {
          return $setup.isDropdownOpen = false;
        }),
        "class": "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150",
        role: "menuitem"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_20];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
        onClick: _cache[5] || (_cache[5] = function () {
          return $options.logout && $options.logout.apply($options, arguments);
        }),
        "class": "cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150",
        role: "menuitem"
      }, "Logout")])], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.isDropdownOpen]])];
    }),
    _: 1
    /* STABLE */

  })], 512
  /* NEED_PATCH */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("main", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main slot "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/DesktopMenu.vue?vue&type=template&id=681ff9e9":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/DesktopMenu.vue?vue&type=template&id=681ff9e9 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col h-0 flex-1"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 border-b border-gray-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span\n        class=\"text-2xl font-bold text-white cursor-pointer\"\n        @click=\"goToLandingPage\"\n        >VURA:CLUB</span\n      > "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "/"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "h-11",
  src: "/img/logo_2.jpg",
  alt: "Sunčana vura"
})])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "flex-1 flex flex-col overflow-y-auto"
};
var _hoisted_4 = {
  "class": "flex-1 px-2 py-4 bg-gray-800 space-y-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NewMenuItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NewMenuItem");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.items, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: item.label
    }, [!item.superAdmin || item.superAdmin && _ctx.$page.props.authuser.superadmin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NewMenuItem, {
      key: 0,
      label: item.label,
      iconName: item.iconName,
      routeName: item.routeName,
      active: $options.isActive($props.url, item.url),
      unreadMessages: item.unreadMessages,
      unreadNotices: item.unreadNotices,
      onLinkclicked: $options.linkClicked
    }, null, 8
    /* PROPS */
    , ["label", "iconName", "routeName", "active", "unreadMessages", "unreadNotices", "onLinkclicked"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/MobileMenu.vue?vue&type=template&id=70c15343":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/MobileMenu.vue?vue&type=template&id=70c15343 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "lg:hidden"
};
var _hoisted_2 = {
  "class": "fixed inset-0 flex z-40"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "absolute inset-0 bg-gray-600 opacity-75"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-gray-900"
};
var _hoisted_5 = {
  "class": "absolute top-0 right-0 -mr-12 pt-2"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 text-white",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
})], -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex-shrink-0 flex items-center px-4 h-16 border-b border-gray-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span\n                class=\"text-2xl font-bold text-white cursor-pointer\"\n                @click=\"goToLandingPage\"\n                >VURA:CLUB</span\n              > "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "/"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "h-11",
  src: "/img/logo_2.jpg",
  alt: "Sunčana vura"
})])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "mt-5 flex-1 h-0 overflow-y-auto"
};
var _hoisted_9 = {
  "class": "px-2 space-y-1"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex-shrink-0 w-14"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Dummy element to force sidebar to shrink to fit close icon ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NewMenuItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NewMenuItem");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    "leave-active-class": "transition-opacity ease-linear duration-300",
    "leave-from-class": "opacity-100",
    "leave-to-class": "opacity-100"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n          Off-canvas menu overlay, show/hide based on off-canvas menu state.\n\n          Entering: \"transition-opacity ease-linear duration-300\"\n            From: \"opacity-0\"\n            To: \"opacity-100\"\n          Leaving: \"transition-opacity ease-linear duration-300\"\n            From: \"opacity-100\"\n            To: \"opacity-0\"\n        "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition-opacity ease-linear duration-300",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition-opacity ease-linear duration-300",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "class": "fixed inset-0",
            onClick: _cache[1] || (_cache[1] = function () {
              return $options.closeMenu && $options.closeMenu.apply($options, arguments);
            })
          }, [_hoisted_3], 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.isMenuOpen]])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n          Off-canvas menu, show/hide based on off-canvas menu state.\n\n          Entering: \"transition ease-in-out duration-300 transform\"\n            From: \"-translate-x-full\"\n            To: \"translate-x-0\"\n          Leaving: \"transition ease-in-out duration-300 transform\"\n            From: \"translate-x-0\"\n            To: \"-translate-x-full\"\n        "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition ease-in-out duration-300 transform",
        "enter-from-class": "-translate-x-full",
        "enter-to-class": "translate-x-0",
        "leave-active-class": "transition ease-in-out duration-300 transform",
        "leave-from-class": "translate-x-0",
        "leave-to-class": "-translate-x-full"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
            onClick: _cache[2] || (_cache[2] = function () {
              return $options.closeMenu && $options.closeMenu.apply($options, arguments);
            }),
            "class": "flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
            "aria-label": "Close sidebar"
          }, [_hoisted_6], 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.isMenuOpen]])]), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.items, function (item) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              key: item.label
            }, [!item.superAdmin || item.superAdmin && _ctx.$page.props.authuser.superadmin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_NewMenuItem, {
              key: 0,
              label: item.label,
              iconName: item.iconName,
              routeName: item.routeName,
              active: $props.url === item.url,
              unreadMessages: item.unreadMessages,
              onLinkclicked: $options.linkClicked
            }, null, 8
            /* PROPS */
            , ["label", "iconName", "routeName", "active", "unreadMessages", "onLinkclicked"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
            /* STABLE_FRAGMENT */
            );
          }), 128
          /* KEYED_FRAGMENT */
          ))])])], 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.isMenuOpen]])];
        }),
        _: 1
        /* STABLE */

      }), _hoisted_10])], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.isMenuOpen]])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/NewMenuItem.vue?vue&type=template&id=5fbf85a0":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/NewMenuItem.vue?vue&type=template&id=5fbf85a0 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "flex ml-2 rounded-full bg-gray-300 text-gray-800 w-6 h-6"
};
var _hoisted_2 = {
  key: 0,
  "class": "m-auto font-semibold font-mono"
};
var _hoisted_3 = {
  key: 1,
  "class": "flex ml-2 rounded-full bg-gray-300 text-gray-800 w-6 h-6"
};
var _hoisted_4 = {
  key: 0,
  "class": "m-auto font-semibold font-mono"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_new_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("new-icon");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("a", {
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.$emit('linkclicked', $props.routeName);
    }, ["prevent"])),
    href: "#",
    "class": ["hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md", [$props.active ? 'bg-gray-900 text-white' : 'text-gray-300']]
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_new_icon, {
    name: $props.iconName,
    active: $props.active
  }, null, 8
  /* PROPS */
  , ["name", "active"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label) + " ", 1
  /* TEXT */
  ), $props.unreadMessages ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [$props.unreadMessages ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.authuser.unread_messages), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.unreadNotices ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_3, [$props.unreadNotices ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.authuser.unread_notices), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=template&id=591a1788":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=template&id=591a1788 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: outline/exclamation "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 text-red-600",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
})])], -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "mt-3 text-center sm:mt-5"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "text-lg leading-6 font-medium text-gray-900",
  id: "modal-headline"
}, " Da li ste sigurni? ", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "flex mt-2"
};
var _hoisted_5 = {
  "class": "mx-auto px-4 py-1 rounded bg-red-100 text-sm text-red-600 font-semibold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_confirm_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("confirm-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_confirm_modal, {
    show: $props.showModal,
    onClose: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.$emit('close');
    })
  }, {
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message), 1
      /* TEXT */
      )])])])];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        type: "button",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.$emit('confirm');
        }),
        "class": "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm\n        px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700\n        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:col-start-2 sm:text-sm"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.actionLabel), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.$emit('close');
        }),
        type: "button",
        "class": "mt-3 w-full inline-flex justify-center rounded-md border\n        border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium\n        text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2\n        focus:ring-gray-500 sm:mt-0 sm:col-start-1 sm:text-sm"
      }, " Odustani ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=template&id=c80bd80a":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=template&id=c80bd80a ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-rose-100 sm:mx-0 sm:h-10 sm:w-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: exclamation "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 text-rose-600",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
})])], -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "text-lg leading-6 font-medium text-gray-900",
  id: "modal-headline"
};
var _hoisted_3 = {
  "class": "mt-4"
};
var _hoisted_4 = {
  key: 0,
  "class": "mt-2 text-sm text-red-600"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_dialog_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("dialog-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_dialog_modal, {
    show: $props.showModal,
    onClose: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.$emit('close');
    })
  }, {
    icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    content: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.sponsorLabel), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <base-input\n          v-model=\"form.price\"\n          :error=\"form.errors.price\"\n          type=\"text\"\n          autocomplete=\"off\"\n        /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
        type: "text",
        id: "sponsor",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.form.name = $event;
        }),
        "class": ["block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md", {
          'border-red-400': $data.form.errors
        }]
      }, null, 2
      /* CLASS */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.name]]), $data.form.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.errors.name), 1
      /* TEXT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        type: "button",
        onClick: _cache[2] || (_cache[2] = function () {
          return $options.submitSponsor && $options.submitSponsor.apply($options, arguments);
        }),
        "class": [{
          'opacity-25': $data.form.processing
        }, "inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"],
        disabled: $data.form.processing
      }, " Unesi ", 10
      /* CLASS, PROPS */
      , ["disabled"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return _ctx.$emit('close');
        }),
        type: "button",
        "class": "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      }, " Odustani ")];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["show"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=template&id=13a39394":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=template&id=13a39394 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-4xl"
};
var _hoisted_2 = {
  "class": ""
};
var _hoisted_3 = {
  "aria-labelledby": "notes-title"
};
var _hoisted_4 = {
  "class": "bg-white shadow sm:rounded-lg sm:overflow-hidden"
};
var _hoisted_5 = {
  "class": "divide-y divide-gray-200"
};
var _hoisted_6 = {
  "class": "px-4 py-5 sm:px-6 flex justify-between"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  id: "notes-title",
  "class": "text-lg font-medium text-gray-900"
}, " Uplate ", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "px-4 py-6 sm:px-6"
};
var _hoisted_9 = {
  key: 0,
  "class": "space-y-2"
};
var _hoisted_10 = {
  "class": "flex justify-between mt-1 text-gray-900"
};
var _hoisted_11 = {
  "class": "space-x-2"
};
var _hoisted_12 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_create_sponsor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("create-sponsor");

  var _component_confirm_delete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("confirm-delete");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Comments"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.createNote && $options.createNote.apply($options, arguments);
    }),
    type: "submit",
    "class": "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  }, " Dodaj novog sponzora ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [$props.sponsors.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.sponsors, function (sponsor) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
      "class": "py-3 border-b border-gray-200",
      key: sponsor.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(sponsor.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      onClick: function onClick($event) {
        return $options.editSponsor(sponsor);
      },
      type: "button",
      "class": "text-blue-500 hover:text-blue-400 font-medium focus:outline-none"
    }, " Izmjeni ", 8
    /* PROPS */
    , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      onClick: function onClick($event) {
        return $options.confirmSponsorDeletion(sponsor);
      },
      type: "button",
      "class": "text-red-600 hover:text-red-500 font-medium focus:outline-none"
    }, " Izbriši ", 8
    /* PROPS */
    , ["onClick"])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("p", _hoisted_12, " Nema unesenih sponzora "))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_create_sponsor, {
    sponsor: $data.sponsor,
    showModal: $data.showModal,
    onClose: _cache[2] || (_cache[2] = function ($event) {
      return $data.showModal = false;
    })
  }, null, 8
  /* PROPS */
  , ["sponsor", "showModal"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_confirm_delete, {
    actionLabel: "Izbriši",
    message: "Brisanje dovodi do trajnog gubitka poadataka",
    showModal: $data.showConfirmModal,
    onClose: $options.modalClose,
    onConfirm: $options.destroySponsor
  }, null, 8
  /* PROPS */
  , ["showModal", "onClose", "onConfirm"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ConfirmModal.vue?vue&type=template&id=415916ae":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ConfirmModal.vue?vue&type=template&id=415916ae ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "sm:flex sm:items-start"
};
var _hoisted_2 = {
  "class": "w-full mt-3 text-center sm:mt-0 sm:ml-6 sm:mr-8 sm:text-left"
};
var _hoisted_3 = {
  "class": "mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_modal_new = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modal-new");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modal_new, {
    show: $props.show,
    closeable: $props.closeable,
    onClose: $options.close,
    closeIcon: false
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "content")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer")])];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["show", "closeable", "onClose"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "sm:flex sm:items-start"
};
var _hoisted_2 = {
  "class": "w-full mt-3 text-center sm:mt-0 sm:ml-6 sm:mr-8 sm:text-left"
};
var _hoisted_3 = {
  "class": "mt-5 sm:ml-12 sm:pl-4 sm:flex"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_modal_new = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modal-new");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modal_new, {
    show: $props.show,
    closeable: $props.closeable,
    onClose: $options.close
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "content")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer")])];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["show", "closeable", "onClose"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed z-10 inset-0 overflow-y-auto"
};
var _hoisted_2 = {
  "class": "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "absolute inset-0 bg-gray-500 opacity-75"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6",
  role: "dialog",
  "aria-modal": "true",
  "aria-labelledby": "modal-headline"
};
var _hoisted_6 = {
  key: 0,
  "class": "hidden sm:block absolute top-0 right-0 pt-4 pr-4"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "sr-only"
}, "Close", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "body"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    "leave-active-class": "duration-200"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "ease-out duration-300",
        "enter-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "ease-in duration-200",
        "leave-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "class": "fixed inset-0 transition-opacity",
            onClick: _cache[1] || (_cache[1] = function () {
              return $options.close && $options.close.apply($options, arguments);
            }),
            "aria-hidden": "true"
          }, [_hoisted_3], 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.show]])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" This element is to trick the browser into centering the modal contents. "), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "ease-out duration-300",
        "enter-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
        "leave-active-class": "ease-in duration-200",
        "leave-class": "opacity-100 translate-y-0 sm:scale-100",
        "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [$props.closeIcon ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
            type: "button",
            onClick: _cache[2] || (_cache[2] = function () {
              return $options.close && $options.close.apply($options, arguments);
            }),
            "class": "bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: x "), _hoisted_8])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.show]])];
        }),
        _: 3
        /* FORWARDED */

      })])], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.show]])];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NewIcon.vue?vue&type=template&id=87d90de6":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NewIcon.vue?vue&type=template&id=87d90de6 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: home "), $props.name === 'home' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    key: 0,
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_1], 2
  /* CLASS */
  )) : $props.name === 'shopping-bag' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: shopping-bag "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_2], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'currency-euro' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: currency-euro "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_3], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'user-circle' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 3
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: user-circle "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_4], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'key' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 4
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: key "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_5], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'cake' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 5
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: cake "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_6], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'cash' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 6
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: cash "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_7], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'color-swatch' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 7
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: color-swatch "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_8], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'emoji-happy' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 8
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: emoji-happy "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_9], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'inbox' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 9
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: inbox "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_10], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'bell' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 10
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: bell "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_11], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'information-circle' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 11
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: information-circle "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_12], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'table' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 12
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: table "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_13], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'users' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 13
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: users "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    "class": "group-hover:text-gray-300 mr-4 h-6 w-6"
  }, _ctx.$attrs, {
    "class": [$props.active ? 'text-gray-300' : 'text-gray-400'],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }), [_hoisted_14], 16
  /* FULL_PROPS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'user-add' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 14
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: user-add "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    "class": "group-hover:text-gray-300 mr-4 h-6 w-6"
  }, _ctx.$attrs, {
    "class": [$props.active ? 'text-gray-300' : 'text-gray-400'],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }), [_hoisted_15], 16
  /* FULL_PROPS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'sparkles' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 15
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: sparkles "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    "class": "group-hover:text-gray-300 mr-4 h-6 w-6"
  }, _ctx.$attrs, {
    "class": [$props.active ? 'text-gray-300' : 'text-gray-400'],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }), [_hoisted_16], 16
  /* FULL_PROPS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : $props.name === 'photograph' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 16
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: photograph "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    "class": ["group-hover:text-gray-300 mr-4 h-6 w-6", [$props.active ? 'text-gray-300' : 'text-gray-400']],
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_17], 2
  /* CLASS */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notifications.vue?vue&type=template&id=4f94173c":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notifications.vue?vue&type=template&id=4f94173c ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "z-50 fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
};
var _hoisted_2 = {
  "class": "max-w-sm w-full"
};
var _hoisted_3 = {
  key: 0,
  "class": "p-4"
};
var _hoisted_4 = {
  "class": "flex items-start"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: outline/exclamation-circle "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
})])], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "ml-3 w-0 flex-1 pt-0.5"
};
var _hoisted_7 = {
  "class": "text-sm font-semibold text-red-500"
};
var _hoisted_8 = {
  "class": "mt-1 text-sm text-gray-500"
};
var _hoisted_9 = {
  "class": "ml-4 flex-shrink-0 flex"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "sr-only"
}, "Close", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_12 = {
  key: 1,
  "class": "p-4"
};
var _hoisted_13 = {
  "class": "flex items-start"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: outline/check-circle "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
})])], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "ml-3 w-0 flex-1 pt-0.5"
};
var _hoisted_16 = {
  "class": "text-sm font-medium text-gray-900"
};
var _hoisted_17 = {
  "class": "mt-1 text-sm text-gray-500"
};
var _hoisted_18 = {
  "class": "ml-4 flex-shrink-0 flex"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "sr-only"
}, "Close", -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_21 = {
  key: 2,
  "class": "p-4"
};
var _hoisted_22 = {
  "class": "flex items-start"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: outline/check-circle "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
})])], -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "ml-3 w-0 flex-1 pt-0.5"
};
var _hoisted_25 = {
  "class": "text-sm font-medium text-gray-900"
};
var _hoisted_26 = {
  "class": "mt-1 text-sm text-gray-500"
};
var _hoisted_27 = {
  "class": "ml-4 flex-shrink-0 flex"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "sr-only"
}, "Close", -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_notification = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("notification");

  var _component_notificationGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("notificationGroup");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_notificationGroup, {
    group: "common",
    position: "bottom"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [!_ctx.$page.props.popstate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_notification, {
        key: 0
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
          var notifications = _ref.notifications,
              close = _ref.close;
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(notifications, function (notification) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
              key: notification.id,
              "class": [$options.borderClass(notification.type), "max-w-sm w-full bg-white border shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"]
            }, [notification.type === 'error' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notification.title), 1
            /* TEXT */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notification.text), 1
            /* TEXT */
            )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
              onClick: function onClick($event) {
                return close(notification.id);
              },
              "class": "bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: solid/x "), _hoisted_11], 8
            /* PROPS */
            , ["onClick"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), notification.type === 'success' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notification.title), 1
            /* TEXT */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notification.text), 1
            /* TEXT */
            )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
              onClick: function onClick($event) {
                return close(notification.id);
              },
              "class": "bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: solid/x "), _hoisted_20], 8
            /* PROPS */
            , ["onClick"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), notification.type === 'info' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notification.title), 1
            /* TEXT */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(notification.text), 1
            /* TEXT */
            )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
              onClick: function onClick($event) {
                return close(notification.id);
              },
              "class": "bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Heroicon name: solid/x "), _hoisted_29], 8
            /* PROPS */
            , ["onClick"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
            /* CLASS */
            );
          }), 128
          /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./resources/js/Menu/adminmenu.js":
/*!****************************************!*\
  !*** ./resources/js/Menu/adminmenu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  url: 'admin/dashboard',
  label: 'Početna',
  iconName: 'home',
  routeName: route('admin.dashboard')
}, {
  url: 'admin/users',
  label: 'Korisnici',
  iconName: 'users',
  routeName: route('admin.users.index', {
    remember: 'forget'
  })
}, {
  url: 'user/application/start',
  label: 'Prijave',
  iconName: 'table',
  routeName: route('admin.applications.index', {
    remember: 'forget'
  })
}, {
  url: 'admin/payments',
  label: 'Uplate',
  iconName: 'currency-euro',
  routeName: route('admin.payments.index', {
    remember: 'forget'
  })
}, {
  url: 'messages/received_messages',
  label: 'Poruke',
  iconName: 'inbox',
  routeName: route('messages.received_messages.index', {
    remember: 'forget'
  }),
  unreadMessages: true
}, {
  url: 'admin/notices',
  label: 'Obavijesti',
  iconName: 'bell',
  routeName: route('admin.notices.index', {
    remember: 'forget'
  }),
  unreadNotices: true
}, {
  url: 'admin/sponsors',
  label: 'Sponzori',
  iconName: 'sparkles',
  routeName: route('admin.sponsors.index', {
    remember: 'forget'
  })
}, {
  url: 'user/profile/data',
  label: 'Profil',
  iconName: 'user-circle',
  routeName: route('user.profile.data')
}, {
  url: 'admin/administrators',
  label: 'Administratori',
  iconName: 'user-add',
  routeName: route('admin.administrators', {
    remember: 'forget'
  }),
  superAdmin: true
}]);

/***/ }),

/***/ "./resources/js/Menu/usermenu.js":
/*!***************************************!*\
  !*** ./resources/js/Menu/usermenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  url: 'user/dashboard',
  label: 'Početna',
  iconName: 'home',
  routeName: route('user.dashboard')
}, {
  url: 'user/profile/data',
  label: 'Profil',
  iconName: 'user-circle',
  // routeName: route('admin.users.index', { remember: 'forget' }),
  routeName: route('user.profile.data')
}, {
  url: 'user/application/start',
  label: 'Prijava',
  iconName: 'cash',
  // routeName: route('admin.orders.index', { remember: 'forget' }),
  routeName: route('user.application.form')
}, {
  url: 'user/conversation',
  label: 'Poruke',
  iconName: 'inbox',
  // routeName: route('admin.products.index', { remember: 'forget' }),
  routeName: route('user.conversation'),
  unreadMessages: true
}]);

/***/ }),

/***/ "./resources/js/Layout/NestedLayoutAdminApplication.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Layout/NestedLayoutAdminApplication.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _NestedLayoutAdminApplication_vue_vue_type_template_id_5377e3d9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NestedLayoutAdminApplication.vue?vue&type=template&id=5377e3d9 */ "./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=template&id=5377e3d9");
/* harmony import */ var _NestedLayoutAdminApplication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NestedLayoutAdminApplication.vue?vue&type=script&lang=js */ "./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=script&lang=js");



_NestedLayoutAdminApplication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NestedLayoutAdminApplication_vue_vue_type_template_id_5377e3d9__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_NestedLayoutAdminApplication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Layout/NestedLayoutAdminApplication.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NestedLayoutAdminApplication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Layout/SuperAdminLayout.vue":
/*!**************************************************!*\
  !*** ./resources/js/Layout/SuperAdminLayout.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _SuperAdminLayout_vue_vue_type_template_id_c37314d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuperAdminLayout.vue?vue&type=template&id=c37314d6 */ "./resources/js/Layout/SuperAdminLayout.vue?vue&type=template&id=c37314d6");
/* harmony import */ var _SuperAdminLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuperAdminLayout.vue?vue&type=script&lang=js */ "./resources/js/Layout/SuperAdminLayout.vue?vue&type=script&lang=js");



_SuperAdminLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _SuperAdminLayout_vue_vue_type_template_id_c37314d6__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_SuperAdminLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Layout/SuperAdminLayout.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SuperAdminLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Menu/DesktopMenu.vue":
/*!*******************************************!*\
  !*** ./resources/js/Menu/DesktopMenu.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _DesktopMenu_vue_vue_type_template_id_681ff9e9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopMenu.vue?vue&type=template&id=681ff9e9 */ "./resources/js/Menu/DesktopMenu.vue?vue&type=template&id=681ff9e9");
/* harmony import */ var _DesktopMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopMenu.vue?vue&type=script&lang=js */ "./resources/js/Menu/DesktopMenu.vue?vue&type=script&lang=js");



_DesktopMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _DesktopMenu_vue_vue_type_template_id_681ff9e9__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_DesktopMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Menu/DesktopMenu.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DesktopMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Menu/MobileMenu.vue":
/*!******************************************!*\
  !*** ./resources/js/Menu/MobileMenu.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _MobileMenu_vue_vue_type_template_id_70c15343__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileMenu.vue?vue&type=template&id=70c15343 */ "./resources/js/Menu/MobileMenu.vue?vue&type=template&id=70c15343");
/* harmony import */ var _MobileMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileMenu.vue?vue&type=script&lang=js */ "./resources/js/Menu/MobileMenu.vue?vue&type=script&lang=js");



_MobileMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _MobileMenu_vue_vue_type_template_id_70c15343__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_MobileMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Menu/MobileMenu.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MobileMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Menu/NewMenuItem.vue":
/*!*******************************************!*\
  !*** ./resources/js/Menu/NewMenuItem.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _NewMenuItem_vue_vue_type_template_id_5fbf85a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewMenuItem.vue?vue&type=template&id=5fbf85a0 */ "./resources/js/Menu/NewMenuItem.vue?vue&type=template&id=5fbf85a0");
/* harmony import */ var _NewMenuItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewMenuItem.vue?vue&type=script&lang=js */ "./resources/js/Menu/NewMenuItem.vue?vue&type=script&lang=js");



_NewMenuItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NewMenuItem_vue_vue_type_template_id_5fbf85a0__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_NewMenuItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Menu/NewMenuItem.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NewMenuItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/ConfirmDelete.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/ConfirmDelete.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ConfirmDelete_vue_vue_type_template_id_591a1788__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmDelete.vue?vue&type=template&id=591a1788 */ "./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=template&id=591a1788");
/* harmony import */ var _ConfirmDelete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmDelete.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=script&lang=js");



_ConfirmDelete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ConfirmDelete_vue_vue_type_template_id_591a1788__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ConfirmDelete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/ConfirmDelete.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ConfirmDelete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/CreateSponsor.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/CreateSponsor.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _CreateSponsor_vue_vue_type_template_id_c80bd80a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateSponsor.vue?vue&type=template&id=c80bd80a */ "./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=template&id=c80bd80a");
/* harmony import */ var _CreateSponsor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateSponsor.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=script&lang=js");



_CreateSponsor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _CreateSponsor_vue_vue_type_template_id_c80bd80a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_CreateSponsor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/CreateSponsor.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CreateSponsor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Uplate.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Uplate.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Uplate_vue_vue_type_template_id_13a39394__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uplate.vue?vue&type=template&id=13a39394 */ "./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=template&id=13a39394");
/* harmony import */ var _Uplate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Uplate.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=script&lang=js");



_Uplate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Uplate_vue_vue_type_template_id_13a39394__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Uplate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Applications/Uplate.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Uplate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/ConfirmModal.vue":
/*!**********************************************!*\
  !*** ./resources/js/Shared/ConfirmModal.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ConfirmModal_vue_vue_type_template_id_415916ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmModal.vue?vue&type=template&id=415916ae */ "./resources/js/Shared/ConfirmModal.vue?vue&type=template&id=415916ae");
/* harmony import */ var _ConfirmModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/ConfirmModal.vue?vue&type=script&lang=js");



_ConfirmModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ConfirmModal_vue_vue_type_template_id_415916ae__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ConfirmModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/ConfirmModal.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ConfirmModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/DialogModal.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/DialogModal.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _DialogModal_vue_vue_type_template_id_79416519__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogModal.vue?vue&type=template&id=79416519 */ "./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519");
/* harmony import */ var _DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogModal.vue?vue&type=script&lang=js */ "./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js");



_DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _DialogModal_vue_vue_type_template_id_79416519__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/DialogModal.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/ModalNew.vue":
/*!******************************************!*\
  !*** ./resources/js/Shared/ModalNew.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ModalNew_vue_vue_type_template_id_1e55538f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalNew.vue?vue&type=template&id=1e55538f */ "./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f");
/* harmony import */ var _ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalNew.vue?vue&type=script&lang=js */ "./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js");



_ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ModalNew_vue_vue_type_template_id_1e55538f__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/ModalNew.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/NewIcon.vue":
/*!*****************************************!*\
  !*** ./resources/js/Shared/NewIcon.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _NewIcon_vue_vue_type_template_id_87d90de6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewIcon.vue?vue&type=template&id=87d90de6 */ "./resources/js/Shared/NewIcon.vue?vue&type=template&id=87d90de6");
/* harmony import */ var _NewIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewIcon.vue?vue&type=script&lang=js */ "./resources/js/Shared/NewIcon.vue?vue&type=script&lang=js");



_NewIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NewIcon_vue_vue_type_template_id_87d90de6__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_NewIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/NewIcon.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NewIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Shared/Notifications.vue":
/*!***********************************************!*\
  !*** ./resources/js/Shared/Notifications.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Notifications_vue_vue_type_template_id_4f94173c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=4f94173c */ "./resources/js/Shared/Notifications.vue?vue&type=template&id=4f94173c");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js */ "./resources/js/Shared/Notifications.vue?vue&type=script&lang=js");



_Notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Notifications_vue_vue_type_template_id_4f94173c__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Shared/Notifications.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NestedLayoutAdminApplication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NestedLayoutAdminApplication_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NestedLayoutAdminApplication.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layout/SuperAdminLayout.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Layout/SuperAdminLayout.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SuperAdminLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SuperAdminLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SuperAdminLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/SuperAdminLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Menu/DesktopMenu.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Menu/DesktopMenu.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DesktopMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/DesktopMenu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Menu/MobileMenu.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Menu/MobileMenu.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MobileMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/MobileMenu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Menu/NewMenuItem.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Menu/NewMenuItem.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewMenuItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewMenuItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewMenuItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/NewMenuItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDelete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDelete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConfirmDelete.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateSponsor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateSponsor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateSponsor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Uplate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Uplate_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Uplate.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/ConfirmModal.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/ConfirmModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConfirmModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ConfirmModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DialogModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DialogModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalNew_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalNew.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/NewIcon.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/NewIcon.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NewIcon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Notifications.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Notifications.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notifications.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notifications.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=template&id=5377e3d9":
/*!********************************************************************************************!*\
  !*** ./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=template&id=5377e3d9 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NestedLayoutAdminApplication_vue_vue_type_template_id_5377e3d9__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NestedLayoutAdminApplication_vue_vue_type_template_id_5377e3d9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NestedLayoutAdminApplication.vue?vue&type=template&id=5377e3d9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/NestedLayoutAdminApplication.vue?vue&type=template&id=5377e3d9");


/***/ }),

/***/ "./resources/js/Layout/SuperAdminLayout.vue?vue&type=template&id=c37314d6":
/*!********************************************************************************!*\
  !*** ./resources/js/Layout/SuperAdminLayout.vue?vue&type=template&id=c37314d6 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SuperAdminLayout_vue_vue_type_template_id_c37314d6__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SuperAdminLayout_vue_vue_type_template_id_c37314d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SuperAdminLayout.vue?vue&type=template&id=c37314d6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layout/SuperAdminLayout.vue?vue&type=template&id=c37314d6");


/***/ }),

/***/ "./resources/js/Menu/DesktopMenu.vue?vue&type=template&id=681ff9e9":
/*!*************************************************************************!*\
  !*** ./resources/js/Menu/DesktopMenu.vue?vue&type=template&id=681ff9e9 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopMenu_vue_vue_type_template_id_681ff9e9__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DesktopMenu_vue_vue_type_template_id_681ff9e9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DesktopMenu.vue?vue&type=template&id=681ff9e9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/DesktopMenu.vue?vue&type=template&id=681ff9e9");


/***/ }),

/***/ "./resources/js/Menu/MobileMenu.vue?vue&type=template&id=70c15343":
/*!************************************************************************!*\
  !*** ./resources/js/Menu/MobileMenu.vue?vue&type=template&id=70c15343 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileMenu_vue_vue_type_template_id_70c15343__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MobileMenu_vue_vue_type_template_id_70c15343__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MobileMenu.vue?vue&type=template&id=70c15343 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/MobileMenu.vue?vue&type=template&id=70c15343");


/***/ }),

/***/ "./resources/js/Menu/NewMenuItem.vue?vue&type=template&id=5fbf85a0":
/*!*************************************************************************!*\
  !*** ./resources/js/Menu/NewMenuItem.vue?vue&type=template&id=5fbf85a0 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewMenuItem_vue_vue_type_template_id_5fbf85a0__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewMenuItem_vue_vue_type_template_id_5fbf85a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewMenuItem.vue?vue&type=template&id=5fbf85a0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Menu/NewMenuItem.vue?vue&type=template&id=5fbf85a0");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=template&id=591a1788":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=template&id=591a1788 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDelete_vue_vue_type_template_id_591a1788__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmDelete_vue_vue_type_template_id_591a1788__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConfirmDelete.vue?vue&type=template&id=591a1788 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/ConfirmDelete.vue?vue&type=template&id=591a1788");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=template&id=c80bd80a":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=template&id=c80bd80a ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateSponsor_vue_vue_type_template_id_c80bd80a__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateSponsor_vue_vue_type_template_id_c80bd80a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateSponsor.vue?vue&type=template&id=c80bd80a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/CreateSponsor.vue?vue&type=template&id=c80bd80a");


/***/ }),

/***/ "./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=template&id=13a39394":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=template&id=13a39394 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Uplate_vue_vue_type_template_id_13a39394__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Uplate_vue_vue_type_template_id_13a39394__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Uplate.vue?vue&type=template&id=13a39394 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Applications/Uplate.vue?vue&type=template&id=13a39394");


/***/ }),

/***/ "./resources/js/Shared/ConfirmModal.vue?vue&type=template&id=415916ae":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/ConfirmModal.vue?vue&type=template&id=415916ae ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmModal_vue_vue_type_template_id_415916ae__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConfirmModal_vue_vue_type_template_id_415916ae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConfirmModal.vue?vue&type=template&id=415916ae */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ConfirmModal.vue?vue&type=template&id=415916ae");


/***/ }),

/***/ "./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519":
/*!***************************************************************************!*\
  !*** ./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DialogModal_vue_vue_type_template_id_79416519__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DialogModal_vue_vue_type_template_id_79416519__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DialogModal.vue?vue&type=template&id=79416519 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/DialogModal.vue?vue&type=template&id=79416519");


/***/ }),

/***/ "./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f":
/*!************************************************************************!*\
  !*** ./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalNew_vue_vue_type_template_id_1e55538f__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModalNew_vue_vue_type_template_id_1e55538f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModalNew.vue?vue&type=template&id=1e55538f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/ModalNew.vue?vue&type=template&id=1e55538f");


/***/ }),

/***/ "./resources/js/Shared/NewIcon.vue?vue&type=template&id=87d90de6":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/NewIcon.vue?vue&type=template&id=87d90de6 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewIcon_vue_vue_type_template_id_87d90de6__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewIcon_vue_vue_type_template_id_87d90de6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewIcon.vue?vue&type=template&id=87d90de6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/NewIcon.vue?vue&type=template&id=87d90de6");


/***/ }),

/***/ "./resources/js/Shared/Notifications.vue?vue&type=template&id=4f94173c":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/Notifications.vue?vue&type=template&id=4f94173c ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notifications_vue_vue_type_template_id_4f94173c__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Notifications_vue_vue_type_template_id_4f94173c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Notifications.vue?vue&type=template&id=4f94173c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Notifications.vue?vue&type=template&id=4f94173c");


/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store/alat/moduleAlat.js */ "./resources/assets/frontend/store/alat/moduleAlat.js");
/* harmony import */ var _store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../store/notifikasi/moduleNotifikasi.js */ "./resources/assets/frontend/store/notifikasi/moduleNotifikasi.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {
    totalAlat: function totalAlat() {
      // console.log(this.$store.state.dataAlat.jumlah);
      return this.$store.state.dataAlat.jumlah;
    },
    totalNotifikasi: function totalNotifikasi() {
      return this.$store.state.dataNotifikasi.jumlah;
    }
  },
  created: function created() {
    if (!_store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered) {
      this.$store.registerModule("dataAlat", _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataAlat/fetchDataAlat")["catch"](function (err) {
      console.error(err);
    });

    if (!_store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_2__["default"].isRegistered) {
      this.$store.registerModule("dataNotifikasi", _store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      _store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_2__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataNotifikasi/fetchDataNotifikasi")["catch"](function (err) {
      console.error(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/Dashboard.vue?vue&type=template&id=3a801d9a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/Dashboard.vue?vue&type=template&id=3a801d9a& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "CpuIcon",
              "icon-right": "",
              statistic: _vm.totalAlat,
              statisticTitle: "Jumlah Alat"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "ActivityIcon",
              "icon-right": "",
              statistic: "2",
              statisticTitle: "Alat Terkoneksi",
              color: "success"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "ActivityIcon",
              "icon-right": "",
              statistic: "0",
              statisticTitle: "Alat Tidak Terkoneksi",
              color: "danger"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" },
        [
          _c("statistics-card-line", {
            staticClass: "mb-base",
            attrs: {
              hideChart: "",
              icon: "AlertOctagonIcon",
              "icon-right": "",
              statistic: _vm.totalNotifikasi,
              statisticTitle: "Kasus Kebocoran",
              color: "warning"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/frontend/store/notifikasi/moduleNotifikasi.js":
/*!************************************************************************!*\
  !*** ./resources/assets/frontend/store/notifikasi/moduleNotifikasi.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleNotifikasiState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleNotifikasiState.js */ "./resources/assets/frontend/store/notifikasi/moduleNotifikasiState.js");
/* harmony import */ var _moduleNotifikasiActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleNotifikasiActions.js */ "./resources/assets/frontend/store/notifikasi/moduleNotifikasiActions.js");
/* harmony import */ var _moduleNotifikasiGetters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleNotifikasiGetters.js */ "./resources/assets/frontend/store/notifikasi/moduleNotifikasiGetters.js");
/* harmony import */ var _moduleNotifikasiMutations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleNotifikasiMutations.js */ "./resources/assets/frontend/store/notifikasi/moduleNotifikasiMutations.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleNotifikasiState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleNotifikasiMutations_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  actions: _moduleNotifikasiActions_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  getters: _moduleNotifikasiGetters_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./resources/assets/frontend/store/notifikasi/moduleNotifikasiActions.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/frontend/store/notifikasi/moduleNotifikasiActions.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../axios.js */ "./resources/assets/frontend/axios.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  fetchDataNotifikasi: function fetchDataNotifikasi(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("api/v1/notifikasi").then(function (response) {
        // console.log(response.data.data)
        commit("SET_NOTIFIKASI", response.data.data.data);
        commit("SET_TOTAL", response.data.data.total);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/assets/frontend/store/notifikasi/moduleNotifikasiGetters.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/frontend/store/notifikasi/moduleNotifikasiGetters.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/assets/frontend/store/notifikasi/moduleNotifikasiMutations.js":
/*!*********************************************************************************!*\
  !*** ./resources/assets/frontend/store/notifikasi/moduleNotifikasiMutations.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find-index */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_1__);




/* harmony default export */ __webpack_exports__["default"] = ({
  ADD_ITEM: function ADD_ITEM(state, item) {
    state.notifikasi.unshift(item);
  },
  SET_NOTIFIKASI: function SET_NOTIFIKASI(state, notifikasi) {
    state.notifikasi = notifikasi; // console.log(state.alat)
  },
  SET_TOTAL: function SET_TOTAL(state, notifikasi) {
    state.jumlah = notifikasi; // console.log(state.alat)
  },
  UPDATE_NOTIFIKASI: function UPDATE_NOTIFIKASI(state, notifikasi) {
    var productIndex = state.notifikasi.findIndex(function (p) {
      return p._id == notifikasi._id;
    });
    Object.assign(state.notifikasi[productIndex], notifikasi);
  },
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.notifikasi.findIndex(function (p) {
      return p._id == itemId;
    });
    state.notifikasi.splice(ItemIndex, 1);
  }
});

/***/ }),

/***/ "./resources/assets/frontend/store/notifikasi/moduleNotifikasiState.js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/frontend/store/notifikasi/moduleNotifikasiState.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  notifikasi: [],
  jumlah: 0
});

/***/ }),

/***/ "./resources/assets/frontend/views/Dashboard.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/frontend/views/Dashboard.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_3a801d9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=3a801d9a& */ "./resources/assets/frontend/views/Dashboard.vue?vue&type=template&id=3a801d9a&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/assets/frontend/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_3a801d9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_3a801d9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/frontend/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/frontend/views/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/frontend/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--10-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/frontend/views/Dashboard.vue?vue&type=template&id=3a801d9a&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/frontend/views/Dashboard.vue?vue&type=template&id=3a801d9a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_3a801d9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=3a801d9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/Dashboard.vue?vue&type=template&id=3a801d9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_3a801d9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_3a801d9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
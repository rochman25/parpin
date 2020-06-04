(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ././../../../store/notifikasi/moduleNotifikasi.js */ "./resources/assets/frontend/store/notifikasi/moduleNotifikasi.js");
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
  data: function data() {
    return {
      val: false,
      isMounted: false
    };
  },
  computed: {
    notifikasi: function notifikasi() {
      return this.$store.state.dataNotifikasi.notifikasi;
    }
  },
  methods: function methods() {},
  created: function created() {
    if (!_store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule("dataNotifikasi", _store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataNotifikasi/fetchDataNotifikasi")["catch"](function (err) {
      console.error(err);
    });
  },
  mounted: function mounted() {
    this.isMounted = true;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=template&id=c46799ac&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=template&id=c46799ac& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { attrs: { title: "Notifikasi Alat" } }, [
    _c("p", [
      _vm._v("Berikut daftar notifikasi alat yang terbagi menjadi 2 : ")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "demo-alignment" },
      [
        _c(
          "vs-list",
          [
            _c("vs-list-header", {
              attrs: {
                "icon-pack": "feather",
                icon: "icon-alert-octagon",
                title: "Notifikasi Bocor",
                color: "danger"
              }
            }),
            _vm._v(" "),
            _vm._l(_vm.notifikasi, function(ntf) {
              return _c(
                "vs-list",
                { key: ntf.index },
                [
                  ntf.category == "danger"
                    ? _c(
                        "vs-list-item",
                        {
                          attrs: {
                            "icon-pack": "feather",
                            icon: "icon-alert-octagon",
                            color: "success",
                            title: ntf.title,
                            subtitle: ntf.msg
                          }
                        },
                        [
                          _c(
                            "vs-row",
                            [
                              _c(
                                "vs-col",
                                { attrs: { "vs-w": "6" } },
                                [
                                  ntf.status == 1
                                    ? _c("vs-chip", {
                                        attrs: { color: "#C5C1C1" }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  ntf.status == 0
                                    ? _c("vs-chip", {
                                        attrs: { color: "primary" }
                                      })
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                { attrs: { "vs-w": "6" } },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      attrs: {
                                        size: "small",
                                        color: "primary",
                                        type: "border",
                                        "icon-pack": "feather",
                                        icon: "icon-eye"
                                      }
                                    },
                                    [_vm._v("detail")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            }),
            _vm._v(" "),
            _c("vs-list-header", {
              attrs: {
                "icon-pack": "feather",
                icon: "icon-alert-octagon",
                title: "Notifikasi Waspada",
                color: "warning"
              }
            }),
            _vm._v(" "),
            _vm._l(_vm.notifikasi, function(ntf) {
              return _c(
                "vs-list",
                { key: ntf.index },
                [
                  ntf.category == "warning"
                    ? _c(
                        "vs-list-item",
                        {
                          attrs: {
                            "icon-pack": "feather",
                            icon: "icon-alert-octagon",
                            color: "success",
                            title: ntf.title,
                            subtitle: ntf.msg
                          }
                        },
                        [
                          _c(
                            "vs-row",
                            [
                              _c(
                                "vs-col",
                                { attrs: { "vs-w": "6" } },
                                [
                                  ntf.status == 1
                                    ? _c("vs-chip", {
                                        attrs: { color: "#C5C1C1" }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  ntf.status == 0
                                    ? _c("vs-chip", {
                                        attrs: { color: "primary" }
                                      })
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                { attrs: { "vs-w": "6" } },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      attrs: {
                                        size: "small",
                                        color: "primary",
                                        type: "border",
                                        "icon-pack": "feather",
                                        icon: "icon-eye"
                                      }
                                    },
                                    [_vm._v("detail")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            })
          ],
          2
        )
      ],
      1
    )
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

/***/ "./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_notifikasi_vue_vue_type_template_id_c46799ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_notifikasi.vue?vue&type=template&id=c46799ac& */ "./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=template&id=c46799ac&");
/* harmony import */ var _view_notifikasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view_notifikasi.vue?vue&type=script&lang=js& */ "./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_notifikasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_notifikasi_vue_vue_type_template_id_c46799ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_notifikasi_vue_vue_type_template_id_c46799ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_notifikasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib??ref--10-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view_notifikasi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_notifikasi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=template&id=c46799ac&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=template&id=c46799ac& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_notifikasi_vue_vue_type_template_id_c46799ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view_notifikasi.vue?vue&type=template&id=c46799ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Notifikasi/view_notifikasi.vue?vue&type=template&id=c46799ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_notifikasi_vue_vue_type_template_id_c46799ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_notifikasi_vue_vue_type_template_id_c46799ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
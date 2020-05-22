(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../store/alat/moduleAlat.js */ "./resources/assets/frontend/store/alat/moduleAlat.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../components/statistics-cards/StatisticsCardLine */ "./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _analyticData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analyticData.js */ "./resources/assets/frontend/views/pages/Alat/analyticData.js");
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
      center: {
        lat: 10.0,
        lng: 10.0
      },
      markers: [{
        position: {
          lat: 10.0,
          lng: 10.0
        }
      }, {
        position: {
          lat: 11.0,
          lng: 11.0
        }
      }],
      supportTracker: {
        analyticsData: {
          openTickets: 163,
          meta: {
            Status: "online",
            // "": 63,
            "Waktu Response": 0.23 + " detik"
          }
        },
        series: [100]
      },
      analyticsData: _analyticData_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      item_data: null,
      error_occured: false,
      error_msg: "",
      available_item_colors: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
      opt_color: "#7367F0"
    };
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    alat: function alat() {
      return this.$store.state.dataAlat.alat;
    }
  },
  methods: {
    toggleItemInWishList: function toggleItemInWishList(item) {
      this.$store.dispatch("eCommerce/toggleItemInWishList", item);
    },
    toggleItemInCart: function toggleItemInCart(item) {
      this.$store.dispatch("eCommerce/toggleItemInCart", item);
    },
    fetch_item_details: function fetch_item_details(id) {//   this.algolia_index.getObject(id, (err, content) => {
      //     if (err) {
      //       this.error_occured = true;
      //       this.error_msg = err.message;
      //       console.error(err);
      //     } else {
      //       this.item_data = content;
      //     }
      //   });
    }
  },
  created: function created() {
    if (!_store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule("dataAlat", _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataAlat/fetchDetailAlat", this.$route.params.id)["catch"](function (err) {
      console.error(err);
    }); // console.log(this.$store.state.dataAlat)
    // this.fetch_item_details(this.$route.params.item_id);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n#item-detail-page .color-radio {\n  height: 2.28rem;\n  width: 2.28rem;\n}\n#item-detail-page .color-radio > div {\n  top: 50%;\n}\n[dir=ltr] #item-detail-page .color-radio > div {\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n[dir=rtl] #item-detail-page .color-radio > div {\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n[dir] #item-detail-page .item-features {\n  background-color: #f7f7f7;\n}\n[dir] .theme-dark #item-detail-page .item-features {\n  background-color: #171e49;\n}\n[dir=ltr] #item-detail-page .product-sales-meta-list .vs-list--icon {\n  padding-left: 0;\n}\n[dir=rtl] #item-detail-page .product-sales-meta-list .vs-list--icon {\n  padding-right: 0;\n}\n[dir] #item-detail-page .related-product-swiper .swiper-wrapper {\n  padding-bottom: 2rem;\n}\n[dir] #item-detail-page .related-product-swiper .swiper-wrapper > .swiper-slide {\n  background-color: #f7f7f7;\n  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.1), 0 5px 12px 0 rgba(0, 0, 0, 0.08) !important;\n}\n[dir] .theme-dark #item-detail-page .related-product-swiper .swiper-wrapper > .swiper-slide {\n  background-color: #262c49;\n}\n#item-detail-page .related-product-swiper .swiper-button-next,\n#item-detail-page .related-product-swiper .swiper-button-prev {\n  -webkit-filter: hue-rotate(40deg);\n          filter: hue-rotate(40deg);\n}\n[dir] #item-detail-page .related-product-swiper .swiper-button-next, [dir] #item-detail-page .related-product-swiper .swiper-button-prev {\n  transform: scale(0.5);\n}\n[dir=ltr] #item-detail-page .related-product-swiper .swiper-button-next {\n  right: 0;\n}\n[dir=rtl] #item-detail-page .related-product-swiper .swiper-button-next {\n  left: 0;\n}\n[dir=ltr] #item-detail-page .related-product-swiper .swiper-button-prev {\n  left: 0;\n}\n[dir=rtl] #item-detail-page .related-product-swiper .swiper-button-prev {\n  right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailAlat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=template&id=a709680a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=template&id=a709680a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { attrs: { id: "item-detail-page" } },
    [
      _c(
        "vx-card",
        [
          _c("template", { slot: "no-body" }, [
            _c("div", { staticClass: "item-content" }, [
              _c("div", { staticClass: "product-details p-6" }, [
                _c("div", { staticClass: "vx-row mt-6" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "vx-col md:w-2/5 w-full flex items-center justify-center"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "product-img-container w-3/5 mx-auto mb-10 md:mb-0"
                        },
                        [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: {
                              src: __webpack_require__(/*! ../../../assets/images/pages/eCommerce/Algolia-logo.png */ "./resources/assets/frontend/assets/images/pages/eCommerce/Algolia-logo.png")
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col md:w-3/5 w-full" },
                    [
                      _c("h3", [_vm._v(_vm._s(_vm.alat.nama))]),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c(
                        "vs-list",
                        { staticClass: "product-sales-meta-list px-0 pt-4" },
                        [
                          _c("vs-list-item", {
                            staticClass: "p-0 border-none",
                            attrs: {
                              title: "Sensor",
                              "icon-pack": "feather",
                              icon: "icon-truck"
                            }
                          }),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.alat.sensor))]),
                          _vm._v(" "),
                          _c("vs-list-item", {
                            staticClass: "p-0 border-none",
                            attrs: {
                              title: "Microcontroller",
                              "icon-pack": "feather",
                              icon: "icon-dollar-sign"
                            }
                          }),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.alat.micro))])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row" }, [
                        _c("div", { staticClass: "vx-col w-full" }, [
                          _c("p", { staticClass: "my-2" }, [
                            _c("span", [_vm._v("Status")]),
                            _vm._v(" "),
                            _c("span", { staticClass: "mx-2" }, [_vm._v("-")]),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-success" }, [
                              _vm._v("Online")
                            ]),
                            _vm._v(" OR\n                    "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v("Offline")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-col w-full" })
                      ])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "py-24 mb-16 mt-10 text-center item-features" },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c("div", { staticClass: "vx-col md:w-1/2 w-full" }, [
                      _c(
                        "div",
                        { staticClass: "w-full mx-auto mb-16 md:mb-0" },
                        [
                          _c("feather-icon", {
                            staticClass: "block mb-4",
                            attrs: {
                              icon: "PieChartIcon",
                              svgClasses:
                                "h-12 w-12 text-primary stroke-current"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "font-semibold text-lg" }, [
                            _vm._v("Statistik Alat")
                          ]),
                          _vm._v(" "),
                          _vm.supportTracker.analyticsData
                            ? _c(
                                "div",
                                { attrs: { slot: "no-body" }, slot: "no-body" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "vx-row text-center" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "vx-col w-full lg:w-5/5 md:w-full sm:w-5/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-3"
                                        },
                                        [
                                          _c("vue-apex-charts", {
                                            attrs: {
                                              type: "radialBar",
                                              height: "350",
                                              options:
                                                _vm.analyticsData
                                                  .supportTrackerRadialBar
                                                  .chartOptions,
                                              series: _vm.supportTracker.series
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-col md:w-1/2 w-full" }, [
                      _c(
                        "div",
                        { staticClass: "w-full mx-auto mb-16 md:mb-0" },
                        [
                          _c("feather-icon", {
                            staticClass: "block mb-4",
                            attrs: {
                              icon: "MapIcon",
                              svgClasses:
                                "h-12 w-12 text-primary stroke-current"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "font-semibold text-lg" }, [
                            _vm._v("Lokasi Alat")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              attrs: { id: "extra-component-google-map-demo" }
                            },
                            [
                              _c(
                                "GmapMap",
                                {
                                  staticStyle: {
                                    width: "100%",
                                    height: "400px"
                                  },
                                  attrs: {
                                    center: _vm.center,
                                    zoom: 7,
                                    "map-type-id": "terrain"
                                  }
                                },
                                _vm._l(_vm.markers, function(m, index) {
                                  return _c("GmapMarker", {
                                    key: index,
                                    attrs: {
                                      position: m.position,
                                      clickable: true,
                                      draggable: true
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.center = m.position
                                      }
                                    }
                                  })
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/frontend/assets/images/pages/eCommerce/Algolia-logo.png":
/*!**********************************************************************************!*\
  !*** ./resources/assets/frontend/assets/images/pages/eCommerce/Algolia-logo.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/Algolia-logo.png?224640caab6194bdfc027e442bb2374c";

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/DetailAlat.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/DetailAlat.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailAlat_vue_vue_type_template_id_a709680a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailAlat.vue?vue&type=template&id=a709680a& */ "./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=template&id=a709680a&");
/* harmony import */ var _DetailAlat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailAlat.vue?vue&type=script&lang=js& */ "./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DetailAlat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailAlat.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DetailAlat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailAlat_vue_vue_type_template_id_a709680a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailAlat_vue_vue_type_template_id_a709680a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/frontend/views/pages/Alat/DetailAlat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib??ref--10-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailAlat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailAlat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=template&id=a709680a&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=template&id=a709680a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_template_id_a709680a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailAlat.vue?vue&type=template&id=a709680a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=template&id=a709680a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_template_id_a709680a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailAlat_vue_vue_type_template_id_a709680a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/analyticData.js":
/*!********************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/analyticData.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  supportTrackerRadialBar: {
    // chartData: {
    //     totalTickets: 163,
    //     openTickets: 103,
    //     lastResponse: '1d',
    // },
    // series: [83],
    chartOptions: {
      plotOptions: {
        radialBar: {
          size: 158,
          offsetY: -30,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: "rgba(0,0,0,0)",
            strokeWidth: '100%'
          },
          dataLabels: {
            value: {
              offsetY: 30,
              color: '#99a2ac',
              fontSize: '3rem'
            }
          }
        }
      },
      colors: ['#5eb089'],
      fill: {
        type: 'gradient',
        gradient: {
          enabled: true,
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#EA5455'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      chart: {
        sparkline: {}
      },
      labels: ['Tekanan Air']
    }
  }
});

/***/ })

}]);
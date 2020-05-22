(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);





 //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      //   algolia_index: algoliasearch(
      //     "latency",
      //     "6be0576ff61c053d5f9a3225e2a90f76"
      //   ).initIndex("instant_search"),
      item_data: null,
      error_occured: false,
      error_msg: "",
      available_item_colors: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
      opt_color: "#7367F0"
    };
  },
  computed: {
    item_qty: function item_qty() {
      var item = this.$store.getters["eCommerce/getCartItem"](this.item_data.objectID);
      return Object.keys(item).length ? item.quantity : 1;
    },
    itemColor: function itemColor() {
      return function (obj) {
        var style_obj = {};
        obj.style.forEach(function (p) {
          style_obj[p] = obj.color;
        });
        return style_obj;
      };
    },
    isInWishList: function isInWishList() {
      var _this = this;

      return function (itemId) {
        return _this.$store.getters["eCommerce/isInWishList"](itemId);
      };
    },
    isInCart: function isInCart() {
      var _this2 = this;

      return function (itemId) {
        return _this2.$store.getters["eCommerce/isInCart"](itemId);
      };
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
    this.fetch_item_details(this.$route.params.item_id);
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    hide(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


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
                              src:
                                "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/01.png"
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
                      _c("h3", [_vm._v("Nama Item")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "my-2" }, [
                        _c("span", { staticClass: "mr-2" }, [_vm._v("by")]),
                        _vm._v(" "),
                        _c("span", [_vm._v("brand item")])
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "flex items-center flex-wrap" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "text-2xl leading-none font-medium text-primary mr-4 mt-2"
                          },
                          [_vm._v("harga")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "pl-4 mr-2 mt-2 border border-solid d-theme-border-grey-light border-t-0 border-b-0 border-r-0"
                          },
                          [
                            _c("star-rating", {
                              attrs: {
                                "show-rating": false,
                                "star-size": 20,
                                "read-only": ""
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "cursor-pointer leading-none mt-2" },
                          [_vm._v("424 ratings")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("p", [_vm._v("deskripsi")]),
                      _vm._v(" "),
                      _c(
                        "vs-list",
                        { staticClass: "product-sales-meta-list px-0 pt-4" },
                        [
                          _c("vs-list-item", {
                            staticClass: "p-0 border-none",
                            attrs: {
                              title: "Free Sheeping",
                              "icon-pack": "feather",
                              icon: "icon-truck"
                            }
                          }),
                          _vm._v(" "),
                          _c("vs-list-item", {
                            staticClass: "p-0 border-none",
                            attrs: {
                              title: "EMI options available",
                              "icon-pack": "feather",
                              icon: "icon-dollar-sign"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row" }, [
                        _c("div", { staticClass: "vx-col w-full" }, [
                          _c("span", { staticClass: "text-xl font-medium" }, [
                            _vm._v("Color")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex flex-wrap items-center mt-2" },
                            _vm._l(_vm.available_item_colors, function(color) {
                              return _c(
                                "div",
                                {
                                  key: color,
                                  staticClass:
                                    "color-radio rounded-full mx-1 border-2 border-solid cursor-pointer relative",
                                  class: {
                                    "border-transparent": _vm.opt_color != color
                                  },
                                  style: _vm.itemColor({
                                    color: color,
                                    style: ["borderColor"]
                                  }),
                                  on: {
                                    click: function($event) {
                                      _vm.opt_color = color
                                    }
                                  }
                                },
                                [
                                  _c("div", {
                                    staticClass:
                                      "h-6 w-6 rounded-full absolute",
                                    style: _vm.itemColor({
                                      color: color,
                                      style: ["backgroundColor"]
                                    })
                                  })
                                ]
                              )
                            }),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("vs-divider"),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row" }, [
                        _c("div", { staticClass: "vx-col w-full" }, [
                          _c("p", { staticClass: "my-2" }, [
                            _c("span", [_vm._v("Available")]),
                            _vm._v(" "),
                            _c("span", { staticClass: "mx-2" }, [_vm._v("-")]),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-success" }, [
                              _vm._v("In Stock")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-col w-full" }, [
                          _c(
                            "div",
                            { staticClass: "flex flex-wrap items-start mb-4" },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "mr-4 mb-4",
                                  attrs: {
                                    "icon-pack": "feather",
                                    icon: "icon-shopping-cart"
                                  }
                                },
                                [_vm._v("ADD TO CART")]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  staticClass: "mr-4 mb-4",
                                  attrs: {
                                    "icon-pack": "feather",
                                    icon: "icon-shopping-cart"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.$router
                                        .push({ name: "ecommerce-checkout" })
                                        .catch(function(err) {})
                                    }
                                  }
                                },
                                [_vm._v("VIEW IN CART")]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  key: "filled",
                                  staticClass: "mb-4",
                                  attrs: {
                                    "icon-pack": "feather",
                                    icon: "icon-heart",
                                    color: "danger"
                                  }
                                },
                                [_vm._v("WHISHLIST")]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-button",
                                {
                                  key: "border",
                                  staticClass: "mb-4",
                                  attrs: {
                                    type: "border",
                                    "icon-pack": "feather",
                                    icon: "icon-heart",
                                    color: "danger"
                                  }
                                },
                                [_vm._v("WHISHLIST")]
                              )
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col flex flex-wrap items-center" },
                          [
                            _c("vs-button", {
                              staticClass: "mr-4",
                              attrs: {
                                type: "border",
                                "icon-pack": "feather",
                                color: "#1551b1",
                                icon: "icon-facebook",
                                radius: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("vs-button", {
                              staticClass: "mr-4",
                              attrs: {
                                type: "border",
                                "icon-pack": "feather",
                                color: "#00aaff",
                                icon: "icon-twitter",
                                radius: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("vs-button", {
                              staticClass: "mr-4",
                              attrs: {
                                type: "border",
                                "icon-pack": "feather",
                                color: "#c4302b",
                                icon: "icon-youtube",
                                radius: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("vs-button", {
                              staticClass: "mr-4",
                              attrs: {
                                type: "border",
                                "icon-pack": "feather",
                                color: "#405DE6",
                                icon: "icon-instagram",
                                radius: ""
                              }
                            })
                          ],
                          1
                        )
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
                    _c("div", { staticClass: "vx-col md:w-1/3 w-full" }, [
                      _c(
                        "div",
                        { staticClass: "w-64 mx-auto mb-16 md:mb-0" },
                        [
                          _c("feather-icon", {
                            staticClass: "block mb-4",
                            attrs: {
                              icon: "AwardIcon",
                              svgClasses:
                                "h-12 w-12 text-primary stroke-current"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "font-semibold text-lg" }, [
                            _vm._v("100% Original")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mt-2" }, [
                            _vm._v(
                              "Chocolate bar candy canes ice cream toffee cookie halvah."
                            )
                          ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-col md:w-1/3 w-full" }, [
                      _c(
                        "div",
                        { staticClass: "w-64 mx-auto mb-16 md:mb-0" },
                        [
                          _c("feather-icon", {
                            staticClass: "block mb-4",
                            attrs: {
                              icon: "ClockIcon",
                              svgClasses:
                                "h-12 w-12 text-primary stroke-current"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "font-semibold text-lg" }, [
                            _vm._v("10 Day Replacement")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mt-2" }, [
                            _vm._v(
                              "Marshmallow biscuit donut dragée fruitcake wafer."
                            )
                          ])
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-col md:w-1/3 w-full" }, [
                      _c(
                        "div",
                        { staticClass: "w-64 mx-auto" },
                        [
                          _c("feather-icon", {
                            staticClass: "block mb-4",
                            attrs: {
                              icon: "ShieldIcon",
                              svgClasses:
                                "h-12 w-12 text-primary stroke-current"
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "font-semibold text-lg" }, [
                            _vm._v("1 Year Warranty")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mt-2" }, [
                            _vm._v(
                              "Cotton candy gingerbread cake I love sugar sweet."
                            )
                          ])
                        ],
                        1
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "related-products text-center px-6" },
              [
                _c(
                  "div",
                  { staticClass: "related-headings mb-8 text-center" },
                  [
                    _c("h2", { staticClass: "uppercase" }, [
                      _vm._v("Related Products")
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("People also search for this items")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "swiper",
                  {
                    key: _vm.$vs.rtl,
                    staticClass: "related-product-swiper px-12 py-6",
                    attrs: {
                      options: _vm.swiperOption,
                      dir: _vm.$vs.rtl ? "rtl" : "ltr"
                    }
                  },
                  [
                    _vm._l(_vm.related_items, function(item) {
                      return _c(
                        "swiper-slide",
                        {
                          key: item.objectId,
                          staticClass: "p-6 rounded cursor-pointer"
                        },
                        [
                          _c("div", { staticClass: "item-heading mb-4" }, [
                            _c(
                              "p",
                              { staticClass: "text-lg font-semibold truncate" },
                              [_vm._v(_vm._s(item.name))]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-sm" }, [
                              _c("span", { staticClass: "mr-2" }, [
                                _vm._v("by")
                              ]),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(item.brand))])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "img-container w-32 mx-auto my-base"
                            },
                            [
                              _c("img", {
                                staticClass: "responsive",
                                attrs: { src: item.image, alt: item.name }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "item-meta" },
                            [
                              _c("star-rating", {
                                staticClass: "justify-center",
                                attrs: {
                                  "show-rating": false,
                                  rating: item.rating,
                                  "star-size": 14,
                                  "read-only": ""
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-lg font-medium text-primary"
                                },
                                [_vm._v("$" + _vm._s(item.price))]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "swiper-button-prev",
                      attrs: { slot: "button-prev" },
                      slot: "button-prev"
                    }),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "swiper-button-next",
                      attrs: { slot: "button-next" },
                      slot: "button-next"
                    })
                  ],
                  2
                )
              ],
              1
            )
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



/***/ })

}]);
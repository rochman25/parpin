(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/DetailAlat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../store/alat/moduleAlat.js */ "./resources/assets/frontend/store/alat/moduleAlat.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/statistics-cards/StatisticsCardLine */ "./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _analyticData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analyticData.js */ "./resources/assets/frontend/views/pages/Alat/analyticData.js");



 //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isMounted: false,
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
      goalOverview: {},
      revenueComparisonLine: {
        analyticsData: {
          thisMonth: 99999999999 // lastMonth: 73683

        },
        series: [{
          name: "",
          data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
        }]
      },
      supportTracker: {
        analyticsData: {
          openTickets: 163,
          meta: {
            Status: "offline",
            "Waktu Response": 0 + " detik"
          }
        },
        series: [0]
      },
      analyticsData: _analyticData_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      item_data: null,
      error_occured: false,
      error_msg: "",
      available_item_colors: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
      opt_color: "#7367F0"
    };
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default.a,
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: {
    alat: function alat() {
      var _this = this;

      var d_alat = this.$store.state.dataAlat.alat;
      var subscription = this.$ws.socket.getSubscription("alat:" + d_alat._id);

      if (!subscription) {
        subscription = this.$ws.subscribe("alat:" + d_alat._id);
      }

      subscription.on("message", function (data) {
        var arus = data.arus / 500 * 100;
        _this.supportTracker.series = [arus.toFixed(2)];
        _this.supportTracker.analyticsData.meta.Status = data.status; // this.$ws.$on('alat:'|message', this.handleAboutMessageEvent);

        console.log("Message subscribe with id " + _this.d_alat, _this.supportTracker);
      });
      this.$set(this.revenueComparisonLine.series, 0, {
        name: d_alat.nama,
        data: []
      });
      this.setSeries(this.$store.state.dataAlat.arus);
      return d_alat;
    },
    sensor: function sensor() {
      return this.$store.state.dataAlat.alat.sensor;
    },
    micro: function micro() {
      return this.$store.state.dataAlat.alat.micro;
    }
  },
  methods: {
    toggleItemInWishList: function toggleItemInWishList(item) {
      this.$store.dispatch("eCommerce/toggleItemInWishList", item);
    },
    toggleItemInCart: function toggleItemInCart(item) {
      this.$store.dispatch("eCommerce/toggleItemInCart", item);
    },
    setSeries: function setSeries(arus) {
      var _this2 = this; // console.log(arus)
      // arus.map((item, index) => this.$set(this.revenueComparisonLine.series,0,{
      //   data:item.arus
      // }));


      var arr = [];
      arus.map(function (item, index) {
        return arr.push(item.arus);
      });
      arr.map(function (item, index) {
        return _this2.$set(_this2.revenueComparisonLine.series[0].data, index, item);
      }); // this.$set(this.revenueComparisonLine.series,{
      //   data:arr
      // })
      // console.log(arr)

      console.log(this.revenueComparisonLine.series);
    }
  },
  created: function created() {
    if (!_store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_2__["default"].isRegistered) {
      this.$store.registerModule("dataAlat", _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_2__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataAlat/fetchDetailAlat", this.$route.params.id)["catch"](function (err) {
      console.error(err);
    });
    this.$store.dispatch("dataAlat/fetchStatisticArus", this.$route.params.id)["catch"](function (err) {
      console.error(err);
    }); // this.$store.commit("SET_ALAT_ID", this.alat._id);
    // console.log(this.$store.state.dataAlat)
    // this.fetch_item_details(this.$route.params.item_id);
  },
  mounted: function mounted() {
    this.isMounted = true;
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
module.exports = ''.repeat || function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.github.io/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  // eslint-disable-next-line max-statements
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    var multiply = function (n, c) {
      var index = -1;
      var c2 = c;
      while (++index < 6) {
        c2 += n * data[index];
        data[index] = c2 % 1e7;
        c2 = floor(c2 / 1e7);
      }
    };

    var divide = function (n) {
      var index = 6;
      var c = 0;
      while (--index >= 0) {
        c += data[index];
        data[index] = floor(c / n);
        c = (c % n) * 1e7;
      }
    };

    var dataToString = function () {
      var index = 6;
      var s = '';
      while (--index >= 0) {
        if (s !== '' || index === 0 || data[index] !== 0) {
          var t = String(data[index]);
          s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
        }
      } return s;
    };

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        result = dataToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        result = dataToString() + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
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
                      _c("p", { staticClass: "my-2" }, [
                        _c("span", { staticClass: "mr-2" }, [_vm._v("id")]),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.alat._id))])
                      ]),
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
                              icon: "icon-rss"
                            }
                          }),
                          _vm._v(" "),
                          _vm.sensor
                            ? _c("p", [
                                _vm._v(
                                  "Nama Sensor : " + _vm._s(_vm.sensor.nama)
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.sensor
                            ? _c("p", [
                                _vm._v(
                                  "Model Sensor : " + _vm._s(_vm.sensor.model)
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.sensor
                            ? _c("p", [
                                _vm._v(
                                  "Working Range : " +
                                    _vm._s(_vm.sensor.working_range)
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.sensor
                            ? _c("p", [
                                _vm._v(
                                  "Water Pressure : " +
                                    _vm._s(_vm.sensor.water_pressure)
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("vs-list-item", {
                            staticClass: "p-0 border-none",
                            attrs: {
                              title: "Microcontroller",
                              "icon-pack": "feather",
                              icon: "icon-cpu"
                            }
                          }),
                          _vm._v(" "),
                          _vm.micro
                            ? _c("p", [
                                _vm._v(
                                  "Nama Microcontroller : " +
                                    _vm._s(_vm.micro.nama)
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.micro
                            ? _c("p", [
                                _vm._v(
                                  "Model Microcontroller : " +
                                    _vm._s(_vm.micro.model)
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.micro
                            ? _c("p", [
                                _vm._v(
                                  "Connection Type : " +
                                    _vm._s(_vm.micro.connection_type)
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("vs-divider")
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
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/1 w-full" },
                      [
                        _c("feather-icon", {
                          staticClass: "block mb-4",
                          attrs: {
                            icon: "PieChartIcon",
                            svgClasses: "h-12 w-12 text-primary stroke-current"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "font-semibold text-lg" }, [
                          _vm._v("Statistik Alat")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-col md:w-1/2 w-full" }, [
                      _c(
                        "div",
                        { staticClass: "w-full mx-auto mb-16 md:mb-0" },
                        [
                          _c("div", { staticClass: "vx-row text-center" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "vx-col p-10 w-full md:mb-0 mb-16 mx-auto"
                              },
                              [
                                _c(
                                  "vx-card",
                                  { attrs: { title: "Statistik Alat" } },
                                  [
                                    _c(
                                      "template",
                                      { slot: "actions" },
                                      [
                                        _c("feather-icon", {
                                          attrs: {
                                            icon: "SettingsIcon",
                                            svgClasses: "w-6 h-6 text-grey"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "p-6 pb-0",
                                        attrs: { slot: "no-body" },
                                        slot: "no-body"
                                      },
                                      [
                                        _c("vue-apex-charts", {
                                          attrs: {
                                            type: "line",
                                            height: "300",
                                            options:
                                              _vm.analyticsData
                                                .revenueComparisonLine
                                                .chartOptions,
                                            series:
                                              _vm.revenueComparisonLine.series
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  2
                                )
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-col md:w-1/2 w-full" }, [
                      _c(
                        "div",
                        { staticClass: "w-full mx-auto mb-16 md:mb-0" },
                        [
                          _c("div", { staticClass: "vx-row text-center" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "vx-col p-10 w-full md:mb-0 mb-16 mx-auto"
                            },
                            [
                              _c(
                                "vx-card",
                                { attrs: { title: _vm.alat.nama } },
                                [
                                  _vm.supportTracker.analyticsData
                                    ? _c(
                                        "div",
                                        {
                                          attrs: { slot: "no-body" },
                                          slot: "no-body"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "vx-row text-center"
                                            },
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
                                                      height: "300",
                                                      options:
                                                        _vm.analyticsData
                                                          .supportTrackerRadialBar
                                                          .chartOptions,
                                                      series:
                                                        _vm.supportTracker
                                                          .series
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "flex flex-row justify-between px-8 pb-4 mt-0"
                                            },
                                            _vm._l(
                                              _vm.supportTracker.analyticsData
                                                .meta,
                                              function(val, key) {
                                                return _c(
                                                  "p",
                                                  {
                                                    key: key,
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      { staticClass: "block" },
                                                      [_vm._v(_vm._s(key))]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-2xl font-semibold"
                                                      },
                                                      [_vm._v(_vm._s(val))]
                                                    )
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row" }, [
                    _c("div", { staticClass: "vx-col md:w-1/1 w-full" }, [
                      _c(
                        "div",
                        { staticClass: "w-full p-10 mx-auto mb-16 md:mb-0" },
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
                              staticClass: "mt-10",
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
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__);


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
            size: "65%"
          },
          track: {
            background: "rgba(0,0,0,0)",
            strokeWidth: "100%"
          },
          dataLabels: {
            value: {
              offsetY: 30,
              color: "#99a2ac",
              fontSize: "3rem"
            }
          }
        }
      },
      colors: ["#5eb089"],
      fill: {
        type: "gradient",
        gradient: {
          enabled: true,
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#EA5455"],
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
      labels: ["Tekanan Air"]
    }
  },
  revenueComparisonLine: {
    // series: [{
    //         name: "This Month",
    //         data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
    //     },
    //     {
    //         name: "Last Month",
    //         data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000]
    //     }
    // ],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.1
        }
      },
      stroke: {
        curve: "smooth",
        dashArray: [0, 8],
        width: [4, 2]
      },
      grid: {
        borderColor: "#e7e7e7"
      },
      legend: {
        show: false
      },
      colors: ["#F97794", "#b8c2cc"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          inverseColors: false,
          gradientToColors: ["#7367F0", "#b8c2cc"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      xaxis: {
        labels: {
          style: {
            cssClass: "text-grey fill-current"
          }
        },
        axisTicks: {
          show: false
        },
        categories: ["01", "05", "09", "13", "17", "21", "26", "31"],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            cssClass: "text-grey fill-current"
          },
          formatter: function formatter(val) {
            return val > 999 ? (val / 1000).toFixed(1) + "k" : val;
          }
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  }
});

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _media_zaenur_1EFEDA3CFEDA0C41_dev_parpin_parpin_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../store/alat/moduleAlat.js */ "./resources/assets/frontend/store/alat/moduleAlat.js");
/* harmony import */ var _store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../store/notifikasi/moduleNotifikasi.js */ "./resources/assets/frontend/store/notifikasi/moduleNotifikasi.js");










 //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  data: function data() {
    return {
      themeColors: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
      lineAreaChartSpline: {
        series: [{
          name: "series1",
          data: [10, 1, 2, 3, 4, 5, 1000, 200, 100, 100, 100, 200, 300, 400, 100]
        }, {
          name: "series2",
          data: [20, 2, 3, 10, 200, 100, 100, 100, 200, 300, 400, 500, 100, 200, 300]
        }],
        chartOptions: {
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth"
          },
          colors: this.themeColors,
          xaxis: {
            type: "datetime",
            categories: [// "2018-09-19T00:00:00.891Z",
              // "2018-09-19T01:30:00.891Z",
              // "2018-09-19T02:30:00.891Z",
              // "2018-09-19T03:30:00.891Z",
              // "2018-09-19T04:30:00.891Z",
              // "2018-09-19T05:30:00.891Z",
              // "2018-09-19T06:30:00.891Z"
            ]
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm"
            }
          }
        }
      }
    };
  },
  computed: {
    totalAlat: function totalAlat() {
      this.setSeries(this.$store.state.dataAlat.alat, this.$store.state.dataAlat.arus); // console.log(this.$store.state.dataAlat.jumlah);

      return this.$store.state.dataAlat.jumlah;
    },
    totalNotifikasi: function totalNotifikasi() {
      return this.$store.state.dataNotifikasi.jumlah;
    },
    arus: function arus() {
      return this.$store.state.dataAlat.arus;
    }
  },
  methods: {
    elapsedTime: function elapsedTime(startTime) {
      var x = new Date(startTime);
      var now = new Date();
      var timeDiff = now - x;
      timeDiff /= 1000;
      var seconds = Math.round(timeDiff);
      timeDiff = Math.floor(timeDiff / 60);
      var minutes = Math.round(timeDiff % 60);
      timeDiff = Math.floor(timeDiff / 60);
      var hours = Math.round(timeDiff % 24);
      timeDiff = Math.floor(timeDiff / 24);
      var days = Math.round(timeDiff % 365);
      timeDiff = Math.floor(timeDiff / 365);
      var years = timeDiff;

      if (years > 0) {
        return years + (years > 1 ? " Years " : " Year ") + "ago";
      } else if (days > 0) {
        return days + (days > 1 ? " Days " : " Day ") + "ago";
      } else if (hours > 0) {
        return hours + (hours > 1 ? " Hrs " : " Hour ") + "ago";
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? " Mins " : " Min ") + "ago";
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? " sec ago" : "just now");
      }

      return "Just Now";
    },
    setSeries: function setSeries(alat, arus) {
      // var arus_ = [];
      // arus.forEach(function(item, index) {
      //   alat.forEach(function(item_, index_) {
      //     arus_[index_] = {alat_id: item_._id,name: item_.nama,data:[]};
      //     // console.log(item_._id)
      //     if(arus_[index_].alat_id == item.alat_id){
      //       console.log(item.arus)
      //     }
      //     // arus_[index_].name.data.push(item.arus)
      //     // console.log(item.alat_id);
      //     // if (item.alat_id == item_.alat_id) {
      //       // this.$set(this.lineAreaChartSpline.series, index_, {
      //       //   data: [item.arus]
      //       // })
      //     // }
      //   });
      //   // console.log(item);
      // });
      // console.log(arus_);
      // alat.forEach(function(item, index) {
      //   this.$store
      //     .dispatch("dataAlat/fetchStatisticArus", item._id)
      //     .catch(err => {
      //       console.error(err);
      //     });
      // });
      var group = arus.reduce(function (r, a) {
        // console.log("a", a);
        // console.log("r", r);
        r[a.alat_id] = [].concat(Object(_media_zaenur_1EFEDA3CFEDA0C41_dev_parpin_parpin_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(r[a.alat_id] || []), [a.arus]);
        return r;
      }, {});
      var categories = arus.reduce(function (r, a) {
        // console.log("a", a);
        // console.log("r", r);
        r[a.alat_id] = [].concat(Object(_media_zaenur_1EFEDA3CFEDA0C41_dev_parpin_parpin_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(r[a.alat_id] || []), [a.created_at]);
        return r;
      }, {}); // let created_at = arus.reduce((r, a) =)

      var arr = []; // console.log("group", categories);

      var i;

      for (i = 0; i < alat.length; i++) {
        // console.log(i.nama);
        // var anoArr = [];
        arr[i] = {};
        arr[i].name = alat[i].nama; // anoArr.push(group[alat[i]._id]);

        arr[i].data = [];
        arr[i].data.push(group[alat[i]._id]);
      } // console.log(categories);
      // arr.map((item, index) =>
      //   this.$set(this.lineAreaChartSpline.series, index, {
      //     name: item.name,
      //     data: item.data
      //   })
      // );


      categories.map(function (item, index) {
        return (// this.$set(
          //   this.lineAreaChartSpline.chartOptions.xaxis.categories,
          //   index,
          //   item
          // )
          console.log(index)
        );
      });
      console.log(this.lineAreaChartSpline);
    },
    setArusData: function setArusData(alat) {// this.$store.dispatch("dataAlat/fetchStatisticArus",id).catch(err => {
      //     console.error(err);
      // });
    }
  },
  created: function created() {
    if (!_store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_8__["default"].isRegistered) {
      this.$store.registerModule("dataAlat", _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
      _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_8__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataAlat/fetchDataAlat")["catch"](function (err) {
      console.error(err);
    });
    this.$store.dispatch("dataAlat/fetchStatisticArus")["catch"](function (err) {
      console.error(err);
    });

    if (!_store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_9__["default"].isRegistered) {
      this.$store.registerModule("dataNotifikasi", _store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
      _store_notifikasi_moduleNotifikasi_js__WEBPACK_IMPORTED_MODULE_9__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataNotifikasi/fetchDataNotifikasi")["catch"](function (err) {
      console.error(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
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
              statisticTitle: "Notifikasi Alat",
              color: "warning"
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col md:w-1/1 w-full mb-base" },
        [
          _c(
            "vx-card",
            { attrs: { title: "Statistik Harian Alat" } },
            [
              _c("vue-apex-charts", {
                attrs: {
                  type: "area",
                  height: "350",
                  options: _vm.lineAreaChartSpline.chartOptions,
                  series: _vm.lineAreaChartSpline.series
                }
              })
            ],
            1
          )
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
        var total = 0;
        commit("SET_NOTIFIKASI", response.data.data.data);

        for (var i = 0; i < response.data.data.data.length; i++) {
          // console.log(i)
          if (response.data.data.data[i].status == 0) {
            total += 1;
          }
        }

        commit("SET_TOTAL_NEW", total);
        commit("SET_TOTAL", response.data.data.total);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateItem: function updateItem(_ref2, item) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].put("/api/v1/notifikasi/update/".concat(item)).then(function (response) {
        console.log(response); // commit("UPDATE_NOTIFIKASI", response.data.data);

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
  SET_TOTAL_NEW: function SET_TOTAL_NEW(state, notifikasi) {
    state.jumlah_baru = notifikasi; // console.log(state.alat)
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
  jumlah: 0,
  jumlah_baru: 0
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
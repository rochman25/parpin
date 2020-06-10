(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../store/sensor/moduleSensor.js */ "./resources/assets/frontend/store/sensor/moduleSensor.js");
/* harmony import */ var _store_micro_moduleMicro_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../store/micro/moduleMicro.js */ "./resources/assets/frontend/store/micro/moduleMicro.js");

 //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  watch: {
    isSidebarActive: function isSidebarActive(val) {
      if (!val) return;

      if (Object.entries(this.data)._id === null) {
        this.initValues(); // this.$validator.reset();
      } else {
        // console.log(this.data)
        var _JSON$parse = JSON.parse(JSON.stringify(this.data)),
            nama = _JSON$parse.nama,
            _id = _JSON$parse._id,
            img = _JSON$parse.img,
            sensor = _JSON$parse.sensor,
            micro = _JSON$parse.micro;

        console.log(this.data);
        this.dataId = _id;
        this.dataSensor_ = sensor;
        this.dataImg = img;
        this.dataNama = nama;
        this.dataMicro_ = micro;
        this.initValues();
      } // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))

    }
  },
  data: function data() {
    return {
      dataId: null,
      dataNama: "",
      dataMicro_: null,
      dataImg: null,
      dataSensor_: null,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    };
  },
  computed: {
    isSidebarActiveLocal: {
      get: function get() {
        return this.isSidebarActive;
      },
      set: function set(val) {
        if (!val) {
          this.$emit("closeSidebar"); // this.$validator.reset()

          this.initValues();
        }
      }
    },
    isFormValid: function isFormValid() {//   return !this.errors.any() && this.dataName && this.dataCategory && (this.dataPrice > 0)
    },
    listSensor: function listSensor() {
      //   console.log(this.$store.state.dataAlat);
      return this.$store.state.dataSensor.sensor;
    },
    listMicro: function listMicro() {
      //   console.log(this.$store.state.dataAlat);
      return this.$store.state.dataMicro.micro;
    }
  },
  methods: {
    initValues: function initValues() {
      if (this.data._id) return;
      this.dataId = null;
      this.dataNama = "";
      this.dataSensor_ = null;
      this.dataMicro_ = null;
      this.dataImg = null;
    },
    submitData: function submitData() {
      var result = true; // this.$validator.validateAll().then(result => {

      if (result) {
        var obj = {
          id: this.dataId,
          nama: this.dataNama,
          img: this.dataImg,
          sensor_id: this.dataSensor_._id,
          micro_id: this.dataMicro_._id
        }; // console.log(obj);

        if (this.dataId !== null) {
          this.$store.dispatch("dataAlat/updateItem", obj)["catch"](function (err) {
            console.error(err);
          });
        } else {
          delete obj.id;
          obj.popularity = 0;
          this.$store.dispatch("dataAlat/addItem", obj)["catch"](function (err) {
            console.error(err);
          });
        }

        this.$emit("closeSidebar");
        this.initValues();
      } // });

    },
    updateCurrImg: function updateCurrImg(input) {
      var _this = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this.dataImg = e.target.result;
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    }
  },
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    "v-select": vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  created: function created() {
    if (!_store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_3__["default"].isRegistered) {
      this.$store.registerModule("dataSensor", _store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      _store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_3__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataSensor/fetchDataSensor")["catch"](function (err) {
      console.error(err);
    });

    if (!_store_micro_moduleMicro_js__WEBPACK_IMPORTED_MODULE_4__["default"].isRegistered) {
      this.$store.registerModule("dataMicro", _store_micro_moduleMicro_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      _store_micro_moduleMicro_js__WEBPACK_IMPORTED_MODULE_4__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataMicro/fetchDataMicro")["catch"](function (err) {
      console.error(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormAlat_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormAlat.vue */ "./resources/assets/frontend/views/pages/Alat/FormAlat.vue");
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






var topicName = "alat:5ebe4cd46246ed22f9afc08f";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isMounted: false,
      analyticsData: _analyticData_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      popupActive: false,
      ws_stat: false,
      test_series: new Array(),
      series: [0]
    };
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_3___default.a,
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine__WEBPACK_IMPORTED_MODULE_4__["default"],
    DataViewSidebar: _FormAlat_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: {
    list: function list() {
      //   console.log(this.$store.state.dataAlat);
      this.foo(this.$store.state.dataAlat.alat);
      return this.$store.state.dataAlat.alat;
    }
  },
  created: function created() {
    if (!_store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_2__["default"].isRegistered) {
      this.$store.registerModule("dataAlat", _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_2__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataAlat/fetchDataAlat")["catch"](function (err) {
      console.error(err);
    });
    console.log(this.$ws.socket);
  },
  mounted: function mounted() {
    this.isMounted = true; //ws
  },
  beforeDestroy: function beforeDestroy() {//Remove listeners when component destroy
    // this.$ws.$off(`${topicName}|message`, this.handleAboutMessageEvent);
    // this.$ws.$off("message", this.handleAboutMessageEvent);
  },
  methods: {
    addNewData: function addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    deleteData: function deleteData(id) {
      this.$store.dispatch("dataAlat/removeItem", id)["catch"](function (err) {
        console.error(err);
      });
    },
    editData: function editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      // console.log(data)
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    },
    navigate_to_detail_view: function navigate_to_detail_view(id) {
      this.$router.push({
        name: "parpin-detail-alat",
        params: {
          id: id
        }
      })["catch"](function () {});
    },
    handleAboutMessageEvent: function handleAboutMessageEvent(data) {// this.test_series[data.alat_id].supportTracker.series = [data.arus]
      // this.test_series[data.alat_id].supportTracker.analyticsData.meta.Status = data.status
      // console.log("handled in src/views/list_alat.vue", data);
    },
    sendHello: function sendHello() {
      this.$ws.$emitToServer(topicName, "message", {
        pesan: "haalllo"
      });
      this.handleAboutMessageEvent;
    },
    foo: function foo(item) {
      var i;

      for (i = 0; i < item.length; i++) {
        this.$store.commit("SET_ALAT_ID", item[i]);
        this.bar(item[i]._id);
        this.$set(this.test_series, item[i]._id, {
          supportTracker: {
            analyticsData: {
              openTickets: 163,
              meta: {
                Status: "offline",
                "Waktu Response": 0 + " detik"
              }
            },
            series: [this.$store.state.alat_id[item[i]._id].series]
          }
        });
      } // console.log(this.test_series);

    },
    bar: function bar(id) {
      var _this = this;

      var subscription = this.$ws.socket.getSubscription("alat:" + id);

      if (!subscription) {
        subscription = this.$ws.subscribe("alat:" + id);
      }

      subscription.on("message", function (data) {
        var arus = data.arus / 500 * 100;
        _this.test_series[id].supportTracker.series = [arus.toFixed(2)];
        _this.test_series[id].supportTracker.analyticsData.meta.Status = data.status; // this.$ws.$on('alat:'|message', this.handleAboutMessageEvent);

        console.log("Message subscribe with id " + id, _this.test_series[id]);
      });
    } // getSeriess(id) {
    //   // console.log(this.$store.state.alat_id[id]);
    //   // this.$ws.$on('|message', this.handleAboutMessageEvent);
    //   return [this.$store.state.alat_id[id].series];
    // }

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-new-data-sidebar[data-v-692be26e]  .vs-sidebar--background {\n  z-index: 52010;\n}\n.add-new-data-sidebar[data-v-692be26e]  .vs-sidebar {\n  z-index: 52010;\n  width: 400px;\n  max-width: 90vw;\n}\n[dir] .add-new-data-sidebar[data-v-692be26e]  .vs-sidebar .img-upload {\n  margin-top: 2rem;\n}\n[dir] .add-new-data-sidebar[data-v-692be26e]  .vs-sidebar .img-upload .con-img-upload {\n  padding: 0;\n}\n.add-new-data-sidebar[data-v-692be26e]  .vs-sidebar .img-upload .con-input-upload {\n  width: 100%;\n}\n[dir] .add-new-data-sidebar[data-v-692be26e]  .vs-sidebar .img-upload .con-input-upload {\n  margin: 0;\n}\n.scroll-area--data-list-add-new[data-v-692be26e] {\n  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#demo-card-analytics .tasks-today-container .tasks-today__task {\n  transition: background 0.15s ease-out;\n}\n#demo-card-analytics .tasks-today-container .tasks-today__task .tasks-today__actions {\n  display: none;\n}\n[dir] #demo-card-analytics .tasks-today-container .tasks-today__task:hover {\n  background: rgba(var(--vs-primary), 0.04);\n}\n#demo-card-analytics .tasks-today-container .tasks-today__task:hover .tasks-today__actions {\n  display: flex;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list_alat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=template&id=692be26e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=template&id=692be26e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "vs-sidebar",
    {
      staticClass: "add-new-data-sidebar items-no-padding",
      attrs: {
        "click-not-close": "",
        "position-right": "",
        parent: "body",
        "default-index": "1",
        color: "primary",
        spacer: ""
      },
      model: {
        value: _vm.isSidebarActiveLocal,
        callback: function($$v) {
          _vm.isSidebarActiveLocal = $$v
        },
        expression: "isSidebarActiveLocal"
      }
    },
    [
      _c(
        "div",
        { staticClass: "mt-6 flex items-center justify-between px-6" },
        [
          _c("h4", [
            _vm._v(
              _vm._s(
                Object.entries(this.data).length === 0 ? "TAMBAH" : "UPDATE"
              ) + " ALAT"
            )
          ]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "cursor-pointer",
            attrs: { icon: "XIcon" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.isSidebarActiveLocal = false
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider", { staticClass: "mb-0" }),
      _vm._v(" "),
      _c(
        "VuePerfectScrollbar",
        {
          key: _vm.$vs.rtl,
          staticClass: "scroll-area--data-list-add-new",
          attrs: { settings: _vm.settings }
        },
        [
          _c(
            "div",
            { staticClass: "p-6" },
            [
              _vm.dataImg
                ? [
                    _c(
                      "div",
                      {
                        staticClass:
                          "img-container w-64 mx-auto flex items-center justify-center"
                      },
                      [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: { src: _vm.dataImg, alt: "img" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modify-img flex justify-between mt-5" },
                      [
                        _c("input", {
                          ref: "updateImgInput",
                          staticClass: "hidden",
                          attrs: { type: "file", accept: "image/*" },
                          on: { change: _vm.updateCurrImg }
                        }),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            staticClass: "mr-4",
                            attrs: { type: "flat" },
                            on: {
                              click: function($event) {
                                return _vm.$refs.updateImgInput.click()
                              }
                            }
                          },
                          [_vm._v("Update Image")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-button",
                          {
                            attrs: { type: "flat", color: "#999" },
                            on: {
                              click: function($event) {
                                _vm.dataImg = null
                              }
                            }
                          },
                          [_vm._v("Remove Image")]
                        )
                      ],
                      1
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Nama Alat", name: "item-name" },
                model: {
                  value: _vm.dataNama,
                  callback: function($$v) {
                    _vm.dataNama = $$v
                  },
                  expression: "dataNama"
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "vs-select--label mt-5 w-full",
                  attrs: { for: "" }
                },
                [_vm._v("Tipe Sensor")]
              ),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  label: "nama",
                  options: _vm.listSensor,
                  dir: _vm.$vs.rtl ? "rtl" : "ltr"
                },
                model: {
                  value: _vm.dataSensor_,
                  callback: function($$v) {
                    _vm.dataSensor_ = $$v
                  },
                  expression: "dataSensor_"
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "vs-select--label mt-5", attrs: { for: "" } },
                [_vm._v("Tipe Microcontroller")]
              ),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  label: "nama",
                  options: _vm.listMicro,
                  dir: _vm.$vs.rtl ? "rtl" : "ltr"
                },
                model: {
                  value: _vm.dataMicro_,
                  callback: function($$v) {
                    _vm.dataMicro_ = $$v
                  },
                  expression: "dataMicro_"
                }
              }),
              _vm._v(" "),
              !_vm.dataImg
                ? _c(
                    "div",
                    { staticClass: "upload-img mt-5" },
                    [
                      _c("input", {
                        ref: "uploadImgInput",
                        staticClass: "hidden",
                        attrs: { type: "file", accept: "image/*" },
                        on: { change: _vm.updateCurrImg }
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-button",
                        {
                          on: {
                            click: function($event) {
                              return _vm.$refs.uploadImgInput.click()
                            }
                          }
                        },
                        [_vm._v("Upload Image")]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex flex-wrap items-center p-6",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "vs-button",
            { staticClass: "mr-6", on: { click: _vm.submitData } },
            [_vm._v("Submit")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { type: "border", color: "danger" },
              on: {
                click: function($event) {
                  _vm.isSidebarActiveLocal = false
                }
              }
            },
            [_vm._v("Cancel")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=template&id=4b0a9203&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=template&id=4b0a9203& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "demo-card-analytics" } },
    [
      _c("data-view-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c("div", { staticClass: "vx-col" }, [
          _c(
            "div",
            {
              staticClass:
                "btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
              on: { click: _vm.addNewData }
            },
            [
              _c("feather-icon", {
                attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-2 text-base text-primary" }, [
                _vm._v("Tambah Alat")
              ])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-row" },
        _vm._l(_vm.list, function(alatInfo, index) {
          return _c(
            "div",
            {
              key: index,
              staticClass: "vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base"
            },
            [
              _c(
                "vx-card",
                { attrs: { title: alatInfo.nama } },
                [
                  _c(
                    "template",
                    { slot: "actions" },
                    [
                      _c(
                        "vs-dropdown",
                        {
                          staticClass: "dd-actions cursor-pointer mb-4",
                          attrs: { "vs-trigger-click": "" }
                        },
                        [
                          _c("feather-icon", {
                            attrs: {
                              icon: "SettingsIcon",
                              svgClasses: "w-6 h-6 text-grey"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-menu",
                            [
                              _c("vs-dropdown-item", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "flex items-center",
                                    on: {
                                      click: function($event) {
                                        return _vm.navigate_to_detail_view(
                                          alatInfo._id
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "mr-2",
                                      attrs: {
                                        icon: "InfoIcon",
                                        svgClasses: "h-4 w-4"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Detail")])
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-dropdown-item", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "flex items-center",
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.editData(alatInfo)
                                      }
                                    }
                                  },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "mr-2",
                                      attrs: {
                                        icon: "EditIcon",
                                        svgClasses: "h-4 w-4"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Ubah")])
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-dropdown-item", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "flex items-center",
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.deleteData(alatInfo._id)
                                      }
                                    }
                                  },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "mr-2",
                                      attrs: {
                                        icon: "TrashIcon",
                                        svgClasses: "h-4 w-4"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Hapus")])
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.test_series[alatInfo._id].supportTracker.analyticsData
                    ? _c(
                        "div",
                        { attrs: { slot: "no-body" }, slot: "no-body" },
                        [
                          _c("div", { staticClass: "vx-row text-center" }, [
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
                                      _vm.analyticsData.supportTrackerRadialBar
                                        .chartOptions,
                                    series:
                                      _vm.test_series[alatInfo._id]
                                        .supportTracker.series
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex flex-row justify-between px-8 pb-5"
                            },
                            _vm._l(
                              _vm.test_series[alatInfo._id].supportTracker
                                .analyticsData.meta,
                              function(val, key) {
                                return _c(
                                  "p",
                                  { key: key, staticClass: "text-center" },
                                  [
                                    _c("span", { staticClass: "block" }, [
                                      _vm._v(_vm._s(key))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "text-2xl font-semibold" },
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
                ],
                2
              )
            ],
            1
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/frontend/store/micro/moduleMicro.js":
/*!**************************************************************!*\
  !*** ./resources/assets/frontend/store/micro/moduleMicro.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleMicroState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleMicroState.js */ "./resources/assets/frontend/store/micro/moduleMicroState.js");
/* harmony import */ var _moduleMicroMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleMicroMutations.js */ "./resources/assets/frontend/store/micro/moduleMicroMutations.js");
/* harmony import */ var _moduleMicroActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleMicroActions.js */ "./resources/assets/frontend/store/micro/moduleMicroActions.js");
/* harmony import */ var _moduleMicroGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleMicroGetters.js */ "./resources/assets/frontend/store/micro/moduleMicroGetters.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleMicroState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleMicroMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleMicroActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleMicroGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/assets/frontend/store/micro/moduleMicroActions.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/frontend/store/micro/moduleMicroActions.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../axios.js */ "./resources/assets/frontend/axios.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  fetchDataMicro: function fetchDataMicro(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("api/v1/microcontroller").then(function (response) {
        // console.log(response);
        commit("SET_MICRO", response.data.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  addItem: function addItem(_ref2, item) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/v1/microcontroller/add", {
        nama: item.nama,
        model: item.model,
        connection_type: item.cp
      }).then(function (response) {
        // console.log(response.data.data.microcontroller._id)
        commit("ADD_ITEM", Object.assign(item, {
          id: response.data.data.microcontroller._id
        }));
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateItem: function updateItem(_ref3, item) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].put("/api/v1/microcontroller/update/".concat(item.id), {
        nama: item.nama,
        model: item.model,
        connection_type: item.cp
      }).then(function (response) {
        // console.log(response)
        commit("UPDATE_MICRO", response.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeItem: function removeItem(_ref4, itemId) {
    var commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("/api/v1/microcontroller/delete?id=".concat(itemId)).then(function (response) {
        commit("REMOVE_ITEM", itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/assets/frontend/store/micro/moduleMicroGetters.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/frontend/store/micro/moduleMicroGetters.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/assets/frontend/store/micro/moduleMicroMutations.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/frontend/store/micro/moduleMicroMutations.js ***!
  \***********************************************************************/
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
    state.micro.unshift(item);
  },
  SET_MICRO: function SET_MICRO(state, micro) {
    state.micro = micro;
  },
  UPDATE_MICRO: function UPDATE_MICRO(state, micro) {
    var productIndex = state.micro.findIndex(function (p) {
      return p._id == micro._id;
    });
    Object.assign(state.micro[productIndex], micro);
  },
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.micro.findIndex(function (p) {
      return p._id == itemId;
    });
    state.micro.splice(ItemIndex, 1);
  }
});

/***/ }),

/***/ "./resources/assets/frontend/store/micro/moduleMicroState.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/frontend/store/micro/moduleMicroState.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  micro: []
});

/***/ }),

/***/ "./resources/assets/frontend/store/sensor/moduleSensor.js":
/*!****************************************************************!*\
  !*** ./resources/assets/frontend/store/sensor/moduleSensor.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleSensorState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleSensorState.js */ "./resources/assets/frontend/store/sensor/moduleSensorState.js");
/* harmony import */ var _moduleSensorMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleSensorMutations.js */ "./resources/assets/frontend/store/sensor/moduleSensorMutations.js");
/* harmony import */ var _moduleSensorActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleSensorActions.js */ "./resources/assets/frontend/store/sensor/moduleSensorActions.js");
/* harmony import */ var _moduleSensorGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleSensorGetters.js */ "./resources/assets/frontend/store/sensor/moduleSensorGetters.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleSensorState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleSensorMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleSensorActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleSensorGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/assets/frontend/store/sensor/moduleSensorActions.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/frontend/store/sensor/moduleSensorActions.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../axios.js */ "./resources/assets/frontend/axios.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  fetchDataSensor: function fetchDataSensor(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("api/v1/sensor").then(function (response) {
        // console.log(response)
        commit("SET_SENSOR", response.data.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  addItem: function addItem(_ref2, item) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/v1/sensor/add", {
        nama: item.nama,
        model: item.model,
        work_range: item.work_range,
        water_pressure: item.water_pressure
      }).then(function (response) {
        // console.log(response.data.data.sensor._id)
        commit("ADD_ITEM", Object.assign(item, {
          id: response.data.data.sensor._id
        }));
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  updateItem: function updateItem(_ref3, item) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].put("/api/v1/sensor/update/".concat(item.id), {
        nama: item.nama,
        model: item.model,
        work_range: item.work_range,
        water_pressure: item.water_pressure
      }).then(function (response) {
        // console.log(response)
        commit("UPDATE_SENSOR", response.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  },
  removeItem: function removeItem(_ref4, itemId) {
    var commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("/api/v1/sensor/delete?id=".concat(itemId)).then(function (response) {
        commit("REMOVE_ITEM", itemId);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/assets/frontend/store/sensor/moduleSensorGetters.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/frontend/store/sensor/moduleSensorGetters.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/assets/frontend/store/sensor/moduleSensorMutations.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/frontend/store/sensor/moduleSensorMutations.js ***!
  \*************************************************************************/
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
    state.sensor.unshift(item);
  },
  SET_SENSOR: function SET_SENSOR(state, sensor) {
    state.sensor = sensor;
  },
  UPDATE_SENSOR: function UPDATE_SENSOR(state, sensor) {
    var productIndex = state.sensor.findIndex(function (p) {
      return p._id == sensor._id;
    });
    Object.assign(state.sensor[productIndex], sensor);
  },
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.sensor.findIndex(function (p) {
      return p._id == itemId;
    });
    state.sensor.splice(ItemIndex, 1);
  }
});

/***/ }),

/***/ "./resources/assets/frontend/store/sensor/moduleSensorState.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/frontend/store/sensor/moduleSensorState.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  sensor: []
});

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/FormAlat.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/FormAlat.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormAlat_vue_vue_type_template_id_692be26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormAlat.vue?vue&type=template&id=692be26e&scoped=true& */ "./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=template&id=692be26e&scoped=true&");
/* harmony import */ var _FormAlat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormAlat.vue?vue&type=script&lang=js& */ "./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormAlat_vue_vue_type_style_index_0_id_692be26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true& */ "./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormAlat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormAlat_vue_vue_type_template_id_692be26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormAlat_vue_vue_type_template_id_692be26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "692be26e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/frontend/views/pages/Alat/FormAlat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib??ref--10-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormAlat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_style_index_0_id_692be26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=style&index=0&id=692be26e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_style_index_0_id_692be26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_style_index_0_id_692be26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_style_index_0_id_692be26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_style_index_0_id_692be26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_style_index_0_id_692be26e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=template&id=692be26e&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=template&id=692be26e&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_template_id_692be26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormAlat.vue?vue&type=template&id=692be26e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=template&id=692be26e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_template_id_692be26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAlat_vue_vue_type_template_id_692be26e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/list_alat.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/list_alat.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_alat_vue_vue_type_template_id_4b0a9203___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list_alat.vue?vue&type=template&id=4b0a9203& */ "./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=template&id=4b0a9203&");
/* harmony import */ var _list_alat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list_alat.vue?vue&type=script&lang=js& */ "./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _list_alat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list_alat.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_alat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_alat_vue_vue_type_template_id_4b0a9203___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_alat_vue_vue_type_template_id_4b0a9203___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/frontend/views/pages/Alat/list_alat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib??ref--10-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list_alat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list_alat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=template&id=4b0a9203&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=template&id=4b0a9203& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_template_id_4b0a9203___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list_alat.vue?vue&type=template&id=4b0a9203& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=template&id=4b0a9203&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_template_id_4b0a9203___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_alat_vue_vue_type_template_id_4b0a9203___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
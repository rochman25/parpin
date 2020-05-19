(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _chartConfigs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chartConfigs.js */ "./resources/assets/frontend/components/statistics-cards/chartConfigs.js");
/* harmony import */ var _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/utils/color.js */ "./resources/assets/frontend/assets/utils/color.js");















 //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    chartData: {// type: Array,
      // required: true
    },
    color: {
      type: String,
      "default": 'primary'
    },
    colorTo: {
      type: String
    },
    // chartType: {
    //     type: String,
    //     default: 'line-chart',
    // },
    type: {
      type: String,
      "default": 'line'
    },
    iconRight: {
      type: Boolean,
      "default": false
    },
    hideChart: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      chartOptions: null
    };
  },
  watch: {
    themePrimaryColor: function themePrimaryColor() {
      this.$refs.apexChart.updateOptions({
        theme: {
          monochrome: {
            color: this.getHex(this.color)
          }
        }
      });
    }
  },
  computed: {
    themePrimaryColor: function themePrimaryColor() {
      return this.$store.state.themePrimaryColor;
    }
  },
  methods: {
    getHex: function getHex(color) {
      if (_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_10__["default"].isColor(color)) {
        var rgb = window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(color));
        rgb = rgb.split(",");
        return "#" + ((1 << 24) + (Number(rgb[0]) << 16) + (Number(rgb[1]) << 8) + Number(rgb[2])).toString(16).slice(1);
      }

      return color;
    },
    gradientToColor: function gradientToColor(color) {
      var gradientToColors = {
        "primary": "#A9A2F6",
        "success": "#55DD92",
        "warning": "#ffc085",
        "danger": "#F97794"
      };
      return gradientToColors[color] ? gradientToColors[color] : gradientToColors["primary"];
    }
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_8___default.a
  },
  created: function created() {
    if (this.type == 'area') {
      // assign chart options
      this.chartOptions = Object.assign({}, _chartConfigs_js__WEBPACK_IMPORTED_MODULE_9__["default"].areaChartOptions);
      this.chartOptions['theme'] = {
        monochrome: {
          enabled: true,
          color: this.getHex(this.color),
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      };
    } else if (this.type == "line") {
      // Assign chart options
      this.chartOptions = JSON.parse(JSON.stringify(_chartConfigs_js__WEBPACK_IMPORTED_MODULE_9__["default"].lineChartOptions));
      this.chartOptions.fill.gradient.gradientToColors = [this.gradientToColor(this.colorTo || this.color)];
      this.chartOptions.colors = [this.getHex(this.color)];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/FormAlat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/resources/assets/frontend/views/pages/Alat/FormAlat.vue: Unexpected token, expected \",\" (139:9)\n\n\u001b[0m \u001b[90m 137 | \u001b[39m            countryName\u001b[33m:\u001b[39m \u001b[32m\"Australia\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 138 | \u001b[39m          }\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 139 | \u001b[39m        ]\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 140 | \u001b[39m        micro\u001b[33m:\u001b[39m [\u001b[0m\n\u001b[0m \u001b[90m 141 | \u001b[39m          {\u001b[0m\n\u001b[0m \u001b[90m 142 | \u001b[39m            countryCode\u001b[33m:\u001b[39m \u001b[32m\"DE\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    at Object._raise (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:742:17)\n    at Object.raiseWithData (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:735:17)\n    at Object.raise (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:729:17)\n    at Object.unexpected (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:8779:16)\n    at Object.expect (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:8765:28)\n    at Object.parseObj (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:10387:14)\n    at Object.parseExprAtom (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:10017:28)\n    at Object.parseExprAtom (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:4626:20)\n    at Object.parseExprSubscripts (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9624:23)\n    at Object.parseMaybeUnary (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9604:21)\n    at Object.parseExprOps (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9474:23)\n    at Object.parseMaybeConditional (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9447:23)\n    at Object.parseMaybeAssign (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9402:21)\n    at Object.parseExpression (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9354:23)\n    at Object.parseReturnStatement (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:11471:28)\n    at Object.parseStatementContent (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:11152:21)\n    at Object.parseStatement (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:11104:17)\n    at Object.parseBlockOrModuleBlockBody (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:11679:25)\n    at Object.parseBlockBody (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:11665:10)\n    at Object.parseBlock (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:11649:10)\n    at Object.parseFunctionBody (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:10656:24)\n    at Object.parseFunctionBodyAndFinish (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:10639:10)\n    at Object.parseMethod (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:10601:10)\n    at Object.parseObjectMethod (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:10517:19)\n    at Object.parseObjPropValue (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:10559:23)\n    at Object.parseObjectMember (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:10483:10)\n    at Object.parseObj (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:10396:25)\n    at Object.parseExprAtom (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:10017:28)\n    at Object.parseExprAtom (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:4626:20)\n    at Object.parseExprSubscripts (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9624:23)\n    at Object.parseMaybeUnary (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9604:21)\n    at Object.parseExprOps (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9474:23)\n    at Object.parseMaybeConditional (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9447:23)\n    at Object.parseMaybeAssign (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:9402:21)\n    at Object.parseExportDefaultExpression (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:12306:24)\n    at Object.parseExport (/media/zaenur/1EFEDA3CFEDA0C41/dev/parpin/parpin/node_modules/@babel/parser/lib/index.js:12208:31)");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Alat/list_alat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormAlat_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormAlat.vue */ "./resources/assets/frontend/views/pages/Alat/FormAlat.vue");
/* harmony import */ var _store_alat_moduleAlat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../store/alat/moduleAlat.js */ "./resources/assets/frontend/store/alat/moduleAlat.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../components/statistics-cards/StatisticsCardLine */ "./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ChangeTimeDurationDropdown.vue */ "./resources/assets/frontend/components/ChangeTimeDurationDropdown.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isMounted: false,
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
      analyticsData: _analyticData_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a,
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChangeTimeDurationDropdown: _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DataViewSidebar: _FormAlat_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    addNewData: function addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    deleteData: function deleteData(id) {
      this.$store.dispatch("dataSensor/removeItem", id)["catch"](function (err) {
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
    }
  },
  computed: {
    list: function list() {
      //   console.log(this.$store.state.dataAlat);
      return this.$store.state.dataAlat.alat;
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
  },
  mounted: function mounted() {
    this.isMounted = true;
    console.log(this.$store.state.dataAlat);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=0fb28182&functional=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=0fb28182&functional=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c(
    "vs-dropdown",
    {
      staticClass: "cursor-pointer",
      class: _vm.data.staticClass,
      attrs: { "vs-trigger-click": "" }
    },
    [
      _c(
        "small",
        { staticClass: "flex cursor-pointer" },
        [
          _c("span", [_vm._v("Last 7 days")]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "ml-1",
            attrs: { icon: "ChevronDownIcon", svgClasses: "h-4 w-4" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-dropdown-menu",
        { staticClass: "w-32" },
        [
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  _vm.listeners.timeDurationChanged
                    ? {
                        timeDurationChanged: _vm.listeners.timeDurationChanged(
                          "last-28-days"
                        )
                      }
                    : null
                }
              }
            },
            [_vm._v("Last 28 days")]
          ),
          _vm._v(" "),
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  _vm.listeners.timeDurationChanged
                    ? {
                        timeDurationChanged: _vm.listeners.timeDurationChanged(
                          "last-month"
                        )
                      }
                    : null
                }
              }
            },
            [_vm._v("Last Month")]
          ),
          _vm._v(" "),
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  _vm.listeners.timeDurationChanged
                    ? {
                        timeDurationChanged: _vm.listeners.timeDurationChanged(
                          "last-year"
                        )
                      }
                    : null
                }
              }
            },
            [_vm._v("Last Year")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=04e8f626&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=04e8f626& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { staticClass: "overflow-hidden" }, [
    _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
      _c(
        "div",
        {
          staticClass: "p-6",
          class: {
            "flex justify-between flex-row-reverse items-center": _vm.iconRight,
            "text-center": !_vm.iconRight && _vm.hideChart,
            "pb-0": !_vm.hideChart
          }
        },
        [
          _c("feather-icon", {
            staticClass: "p-3 inline-flex rounded-full",
            class: ["text-" + _vm.color, { "mb-4": !_vm.iconRight }],
            style: { background: "rgba(var(--vs-" + _vm.color + "),.15)" },
            attrs: { icon: _vm.icon }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "truncate" }, [
            _c("h2", { staticClass: "mb-1 font-bold" }, [
              _vm._v(_vm._s(_vm.statistic))
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.statisticTitle))])
          ])
        ],
        1
      ),
      _vm._v(" "),
      !_vm.hideChart
        ? _c(
            "div",
            { staticClass: "line-area-chart" },
            [
              _c("vue-apex-charts", {
                ref: "apexChart",
                attrs: {
                  type: _vm.type,
                  height: "100",
                  width: "100%",
                  options: _vm.chartOptions,
                  series: _vm.chartData
                }
              })
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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
              _c("v-select", {
                attrs: {
                  label: "Type Sensor",
                  options: _vm.sensor,
                  dir: _vm.$vs.rtl ? "rtl" : "ltr"
                }
              }),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  label: "Type Microcontroller",
                  options: _vm.micro,
                  dir: _vm.$vs.rtl ? "rtl" : "ltr"
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
                  _c("template", { slot: "actions" }),
                  _vm._v(" "),
                  _vm.supportTracker.analyticsData
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
                                    series: _vm.supportTracker.series
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
                              _vm.supportTracker.analyticsData.meta,
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

/***/ "./resources/assets/frontend/components/ChangeTimeDurationDropdown.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/frontend/components/ChangeTimeDurationDropdown.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangeTimeDurationDropdown_vue_vue_type_template_id_0fb28182_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeTimeDurationDropdown.vue?vue&type=template&id=0fb28182&functional=true& */ "./resources/assets/frontend/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=0fb28182&functional=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ChangeTimeDurationDropdown_vue_vue_type_template_id_0fb28182_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangeTimeDurationDropdown_vue_vue_type_template_id_0fb28182_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/frontend/components/ChangeTimeDurationDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/frontend/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=0fb28182&functional=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/assets/frontend/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=0fb28182&functional=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeTimeDurationDropdown_vue_vue_type_template_id_0fb28182_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangeTimeDurationDropdown.vue?vue&type=template&id=0fb28182&functional=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=0fb28182&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeTimeDurationDropdown_vue_vue_type_template_id_0fb28182_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeTimeDurationDropdown_vue_vue_type_template_id_0fb28182_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue":
/*!**************************************************************************************!*\
  !*** ./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticsCardLine_vue_vue_type_template_id_04e8f626___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=template&id=04e8f626& */ "./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=04e8f626&");
/* harmony import */ var _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticsCardLine_vue_vue_type_template_id_04e8f626___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticsCardLine_vue_vue_type_template_id_04e8f626___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--10-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=04e8f626&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=04e8f626& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_04e8f626___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=template&id=04e8f626& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=04e8f626&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_04e8f626___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_04e8f626___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/frontend/components/statistics-cards/chartConfigs.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/frontend/components/statistics-cards/chartConfigs.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  areaChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: [{
      y: 0,
      offsetX: 0,
      offsetY: 0,
      padding: {
        left: 0,
        right: 0
      }
    }],
    tooltip: {
      x: {
        show: false
      }
    }
  },
  lineChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      type: 'line',
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 4,
        opacity: 0.10
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      type: 'numeric'
    },
    // colors: ['#7367F0'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        // gradientToColors: ['#A9A2F6'],
        shadeIntensity: 1,
        type: 'horizontal',
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
    tooltip: {
      x: {
        show: false
      }
    }
  }
});

/***/ }),

/***/ "./resources/assets/frontend/store/alat/moduleAlat.js":
/*!************************************************************!*\
  !*** ./resources/assets/frontend/store/alat/moduleAlat.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleAlatState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleAlatState.js */ "./resources/assets/frontend/store/alat/moduleAlatState.js");
/* harmony import */ var _moduleAlatActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleAlatActions.js */ "./resources/assets/frontend/store/alat/moduleAlatActions.js");
/* harmony import */ var _moduleAlatGetters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleAlatGetters.js */ "./resources/assets/frontend/store/alat/moduleAlatGetters.js");
/* harmony import */ var _moduleAlatMutations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleAlatMutations.js */ "./resources/assets/frontend/store/alat/moduleAlatMutations.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleAlatState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleAlatMutations_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  actions: _moduleAlatActions_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  getters: _moduleAlatGetters_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./resources/assets/frontend/store/alat/moduleAlatActions.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/frontend/store/alat/moduleAlatActions.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../axios.js */ "./resources/assets/frontend/axios.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  fetchDataAlat: function fetchDataAlat(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("api/v1/alat").then(function (response) {
        // console.log(response)
        commit("SET_ALAT", response.data.data.data);
        resolve(response);
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/assets/frontend/store/alat/moduleAlatGetters.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/frontend/store/alat/moduleAlatGetters.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/assets/frontend/store/alat/moduleAlatMutations.js":
/*!*********************************************************************!*\
  !*** ./resources/assets/frontend/store/alat/moduleAlatMutations.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_ALAT: function SET_ALAT(state, alat) {
    state.alat = alat; // console.log(state.alat)
  }
});

/***/ }),

/***/ "./resources/assets/frontend/store/alat/moduleAlatState.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/frontend/store/alat/moduleAlatState.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  alat: []
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
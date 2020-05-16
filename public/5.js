(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../store/sensor/moduleSensor.js */ "./resources/assets/frontend/store/sensor/moduleSensor.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isMounted: false
    };
  },
  computed: {
    list: function list() {
      return this.$store.state.dataSensor.sensor;
    }
  },
  created: function created() {
    if (!_store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule("dataSensor", _store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }

    this.$store.dispatch("dataSensor/fetchDataSensor")["catch"](function (err) {
      console.error(err);
    });
  },
  mounted: function mounted() {
    this.isMounted = true; // console.log(this.list)
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=template&id=086125bb&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=template&id=086125bb& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "vx-card",
    { attrs: { title: "Daftar Sensor", subtitle: "List data sensor" } },
    [
      _c(
        "div",
        [
          _c(
            "vs-table",
            {
              attrs: { "max-items": "3", pagination: "", data: _vm.list },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr },
                        [
                          _c("vs-td", { attrs: { data: data[indextr].nama } }, [
                            _vm._v(_vm._s(data[indextr].nama))
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].model } },
                            [_vm._v(_vm._s(data[indextr].model))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].working_range } },
                            [_vm._v(_vm._s(data[indextr].working_range))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].water_pressure } },
                            [_vm._v(_vm._s(data[indextr].water_pressure))]
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("Nama")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Model")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Working Range")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Water Pressure")])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



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
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_SENSOR: function SET_SENSOR(state, sensor) {
    state.sensor = sensor;
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

/***/ "./resources/assets/frontend/views/pages/Sensor/list_sensor.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Sensor/list_sensor.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_sensor_vue_vue_type_template_id_086125bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list_sensor.vue?vue&type=template&id=086125bb& */ "./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=template&id=086125bb&");
/* harmony import */ var _list_sensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list_sensor.vue?vue&type=script&lang=js& */ "./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_sensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_sensor_vue_vue_type_template_id_086125bb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_sensor_vue_vue_type_template_id_086125bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/frontend/views/pages/Sensor/list_sensor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_sensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib??ref--10-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list_sensor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_sensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=template&id=086125bb&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=template&id=086125bb& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_sensor_vue_vue_type_template_id_086125bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./list_sensor.vue?vue&type=template&id=086125bb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=template&id=086125bb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_sensor_vue_vue_type_template_id_086125bb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_sensor_vue_vue_type_template_id_086125bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
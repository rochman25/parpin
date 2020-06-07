(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);

 //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            model = _JSON$parse.model,
            working_range = _JSON$parse.working_range,
            water_pressure = _JSON$parse.water_pressure;

        console.log(this.data);
        this.dataId = _id;
        this.dataModel = model;
        this.dataImg = img;
        this.dataNama = nama;
        this.dataWr = working_range;
        this.dataWp = water_pressure;
        this.initValues();
      } // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))

    }
  },
  data: function data() {
    return {
      dataId: null,
      dataNama: "",
      dataModel: null,
      dataImg: null,
      dataWr: null,
      dataWp: null,
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
    }
  },
  methods: {
    initValues: function initValues() {
      if (this.data._id) return;
      this.dataId = null;
      this.dataNama = "";
      this.dataModel = null;
      this.dataWr = null;
      this.dataWp = null;
      this.dataImg = null;
    },
    submitData: function submitData() {
      var result = true; // this.$validator.validateAll().then(result => {

      if (result) {
        var obj = {
          id: this.dataId,
          nama: this.dataNama,
          img: this.dataImg,
          model: this.dataModel,
          work_range: this.dataWr,
          water_pressure: this.dataWp
        };

        if (this.dataId !== null) {
          this.$store.dispatch("dataSensor/updateItem", obj)["catch"](function (err) {
            console.error(err);
          });
        } else {
          delete obj.id;
          obj.popularity = 0;
          this.$store.dispatch("dataSensor/addItem", obj)["catch"](function (err) {
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
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Sensor/list_sensor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSensor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSensor.vue */ "./resources/assets/frontend/views/pages/Sensor/FormSensor.vue");
/* harmony import */ var _store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../store/sensor/moduleSensor.js */ "./resources/assets/frontend/store/sensor/moduleSensor.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DataViewSidebar: _FormSensor_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isMounted: false,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  computed: {
    list: function list() {
      return this.$store.state.dataSensor.sensor;
    }
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
  created: function created() {
    if (!_store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered) {
      this.$store.registerModule("dataSensor", _store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      _store_sensor_moduleSensor_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered = true;
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-new-data-sidebar[data-v-6280ee2e]  .vs-sidebar--background {\n  z-index: 52010;\n}\n.add-new-data-sidebar[data-v-6280ee2e]  .vs-sidebar {\n  z-index: 52010;\n  width: 400px;\n  max-width: 90vw;\n}\n[dir] .add-new-data-sidebar[data-v-6280ee2e]  .vs-sidebar .img-upload {\n  margin-top: 2rem;\n}\n[dir] .add-new-data-sidebar[data-v-6280ee2e]  .vs-sidebar .img-upload .con-img-upload {\n  padding: 0;\n}\n.add-new-data-sidebar[data-v-6280ee2e]  .vs-sidebar .img-upload .con-input-upload {\n  width: 100%;\n}\n[dir] .add-new-data-sidebar[data-v-6280ee2e]  .vs-sidebar .img-upload .con-input-upload {\n  margin: 0;\n}\n.scroll-area--data-list-add-new[data-v-6280ee2e] {\n  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=template&id=6280ee2e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=template&id=6280ee2e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
              ) + " SENSOR"
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
                attrs: { label: "Nama Sensor", name: "item-name" },
                model: {
                  value: _vm.dataNama,
                  callback: function($$v) {
                    _vm.dataNama = $$v
                  },
                  expression: "dataNama"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Model Sensor", name: "item-model" },
                model: {
                  value: _vm.dataModel,
                  callback: function($$v) {
                    _vm.dataModel = $$v
                  },
                  expression: "dataModel"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Working Range", name: "item-wr" },
                model: {
                  value: _vm.dataWr,
                  callback: function($$v) {
                    _vm.dataWr = $$v
                  },
                  expression: "dataWr"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: "Water Pressure", name: "item-wp" },
                model: {
                  value: _vm.dataWp,
                  callback: function($$v) {
                    _vm.dataWp = $$v
                  },
                  expression: "dataWp"
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
          _c("data-view-sidebar", {
            attrs: {
              isSidebarActive: _vm.addNewDataSidebar,
              data: _vm.sidebarData
            },
            on: { closeSidebar: _vm.toggleDataSidebar }
          }),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: { "max-items": "10", pagination: "", data: _vm.list },
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
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { staticClass: "whitespace-no-wrap" },
                            [
                              _c("feather-icon", {
                                attrs: {
                                  icon: "EditIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-primary stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.editData(tr)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("feather-icon", {
                                staticClass: "ml-2",
                                attrs: {
                                  icon: "TrashIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-danger stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.deleteData(tr._id)
                                  }
                                }
                              })
                            ],
                            1
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
                "div",
                {
                  staticClass:
                    "flex flex-wrap-reverse items-center flex-grow justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-wrap-reverse items-center data-list-btn-container"
                    },
                    [
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
                          _c(
                            "span",
                            { staticClass: "ml-2 text-base text-primary" },
                            [_vm._v("Tambah Sensor")]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
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
                  _c("vs-th", [_vm._v("Water Pressure")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Aksi")])
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

/***/ "./resources/assets/frontend/views/pages/Sensor/FormSensor.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Sensor/FormSensor.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormSensor_vue_vue_type_template_id_6280ee2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormSensor.vue?vue&type=template&id=6280ee2e&scoped=true& */ "./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=template&id=6280ee2e&scoped=true&");
/* harmony import */ var _FormSensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormSensor.vue?vue&type=script&lang=js& */ "./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormSensor_vue_vue_type_style_index_0_id_6280ee2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true& */ "./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormSensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormSensor_vue_vue_type_template_id_6280ee2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormSensor_vue_vue_type_template_id_6280ee2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6280ee2e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/frontend/views/pages/Sensor/FormSensor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/babel-loader/lib??ref--10-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSensor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_style_index_0_id_6280ee2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=style&index=0&id=6280ee2e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_style_index_0_id_6280ee2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_style_index_0_id_6280ee2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_style_index_0_id_6280ee2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_style_index_0_id_6280ee2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_style_index_0_id_6280ee2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=template&id=6280ee2e&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=template&id=6280ee2e&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_template_id_6280ee2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormSensor.vue?vue&type=template&id=6280ee2e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/frontend/views/pages/Sensor/FormSensor.vue?vue&type=template&id=6280ee2e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_template_id_6280ee2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormSensor_vue_vue_type_template_id_6280ee2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
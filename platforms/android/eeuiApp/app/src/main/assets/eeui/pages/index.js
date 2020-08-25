// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={_:function(t,e){var s=e.map(function(e){return e="[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e});if(typeof this.__m==='undefined'){this.__m=app.requireModule('debug')}this.__m.addLog(t,s)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}}}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/SliderBar/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/SliderBar/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weex-bindingx/lib/index.weex.js */ "./node_modules/weex-bindingx/lib/index.weex.js");
/* harmony import */ var weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = app.requireModule('animation');
var dom = app.requireModule('dom');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      env: 'weex',
      diffX1: 0,
      diffX2: 0,
      barWidth: 0,
      preventMoveEvent: true,
      minDist: 0,
      // selectRange: [0, 0],
      blockRadius: 28,
      DPR: 1,
      timeout: 100,
      lock: false,
      upval: undefined
    };
  },
  props: {
    selectRange: {
      type: Array,
      "default": [0, 0]
    },
    length: {
      type: Number,
      "default": 500
    },
    height: {
      type: Number,
      "default": 4
    },
    // 是否双滑块模式
    range: {
      type: Boolean,
      "default": false
    },
    // 最小值
    min: {
      type: Number,
      "default": 0
    },
    // 最大值
    max: {
      type: Number,
      "default": 100
    },
    // 最小取值范围，用于范围选择范围最小差值
    minDiff: {
      type: Number,
      "default": 5
    },
    // 设置当前取值。当 range 为 false 时，使用 number，否则用 [number, number]
    value: {
      type: [Number, Array],
      "default": 0
    },
    // 设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]
    defaultValue: {
      type: [Number, Array],
      "default": 0
    },
    // 值为 true 时，滑块为禁用状态
    disabled: {
      type: Boolean,
      "default": false
    },
    invalidColor: {
      type: String,
      "default": '#E0E0E0'
    },
    validColor: {
      type: String,
      "default": '#EE9900'
    },
    disabledColor: {
      type: String,
      "default": '#AAA'
    },
    indicatorColor: {
      type: String,
      "default": '#FFFFFF'
    },
    indicatorHeight: {
      type: Number,
      "default": 56
    }
  },
  watch: {
    value: function value(e) {
      if (this.lock) {
        return;
      }

      if (!this.range) {
        this.diffX1 = this._getDiffX(e || this.defaultValue);
      } else {
        this.diffX1 = this._getDiffX(e[0] || this.defaultValue[0]);
        this.diffX2 = this._getDiffX(e[1] || this.defaultValue[1]);
        this.barWidth = this.diffX2 - this.diffX1;
      }
    }
  },
  created: function created() {
    if (this.isWeb()) {
      this.env = 'web';
      this.DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    } else {
      this.DPR = app.config.env.scale;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.block1 = this.$refs['slide-block-1']; // 左侧滑块

    this.block2 = this.$refs['slide-block-2']; // 右侧滑块

    this.valueBar = this.$refs['value-bar']; // 黄色值条

    this.barContainer = this.$refs['bar-container']; // 滚动条容器

    if (!this.range) {
      this.diffX1 = this._getDiffX(this.value || this.defaultValue);
    } else {
      this.diffX1 = this._getDiffX(this.value[0] || this.defaultValue[0]);
      this.diffX2 = this._getDiffX(this.value[1] || this.defaultValue[1]);
      this.barWidth = this.diffX2 - this.diffX1;
    } // 是否支持expresstionBinding


    if (this.supportsEB() && weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default.a.prepare) {
      this.block1 && weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default.a.prepare({
        anchor: this.block1.ref,
        eventType: 'pan'
      });
      this.block2 && weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default.a.prepare({
        anchor: this.block2.ref,
        eventType: 'pan'
      });
      this.valueBar && weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default.a.prepare({
        anchor: this.valueBar.ref,
        eventType: 'pan'
      });
    }

    if (this.range) {
      this.selectRange = this.value || this.defaultValue; // 初始化范围选择返回数据

      this.minDist = this.minDiff / (this.max - this.min) * this.length; // 滑块1、2之前最小间距
    } // 由于框架在mounted后渲染是异步的不能确保元素渲染完成，需要异步执行


    setTimeout(function () {
      dom.getComponentRect(_this.barContainer, function (option) {
        var left = option.size.left;
        _this.leftDiffX = left;
      });
    }, 100);
  },
  computed: {
    containerStyle: function containerStyle() {
      return {
        width: "".concat(this.length + this.indicatorHeight, "px"),
        height: "".concat(this.indicatorHeight, "px")
      };
    },
    rangeBarStyle: function rangeBarStyle() {
      return {
        width: "".concat(this.length, "px"),
        height: "".concat(this.height, "px"),
        flexDirection: 'row',
        backgroundColor: this.invalidColor
      };
    },
    valueBarStyle: function valueBarStyle() {
      var left = 0;
      var width = 0;

      if (!this.range) {
        left = this.diffX1 - this.length;
        width = this.length;
      } else {
        left = this.diffX1;
        width = this.diffX2 - this.diffX1;
      }

      return {
        width: width + 'px',
        height: this.height + 'px',
        transform: "translateX(".concat(left, "px)"),
        backgroundColor: this.disabled ? this.disabledColor : this.validColor
      };
    },
    blockStyle1: function blockStyle1() {
      var left = this.diffX1;
      return {
        transform: "translateX(".concat(left, "px)"),
        backgroundColor: this.indicatorColor,
        width: "".concat(this.indicatorHeight, "px"),
        height: "".concat(this.indicatorHeight, "px"),
        borderRadius: "".concat(this.indicatorHeight / 2, "px")
      };
    },
    blockStyle2: function blockStyle2() {
      return {
        transform: "translateX(".concat(this.diffX2, "px)"),
        backgroundColor: this.indicatorColor,
        width: "".concat(this.indicatorHeight, "px"),
        height: "".concat(this.indicatorHeight, "px"),
        borderRadius: "".concat(this.indicatorHeight / 2, "px")
      };
    }
  },
  methods: {
    supportsEB: function supportsEB() {
      return weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default.a.isSupportBinding && !this.isWeb();
    },
    isWeb: function isWeb() {
      var platform = app.config.env.platform;
      return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isAndroid: function isAndroid() {
      var platform = app.config.env.platform;
      return platform.toLowerCase() === 'android';
    },
    updateValue: function updateValue(val) {
      this.upval = val;
      this.$emit('updateValue', val);
    },
    // 更新单选值或最小值
    appHandler1: function appHandler1(e) {
      var _this2 = this;

      var self = this;

      switch (e.state) {
        case 'start':
          self.bindBlock1();
          break;

        case 'move':
          dom.getComponentRect(this.block1, function (option) {
            var left = option.size.left;

            var value = _this2._getValue(left - _this2.leftDiffX);

            if (!_this2.range) {
              _this2.updateValue(value);
            } else {
              _this2.selectRange[0] = value;

              _this2.updateValue(_this2.selectRange);
            }
          });
          break;

        case 'end':
          break;

        default:
          break;
      }
    },
    // 更新最大值
    appHandler2: function appHandler2(e) {
      var _this3 = this;

      var self = this;

      switch (e.state) {
        case 'start':
          self.bindBlock2();
          break;

        case 'move':
          dom.getComponentRect(this.block2, function (option) {
            var left = option.size.left;
            _this3.selectRange[1] = _this3._getValue(left - _this3.leftDiffX);

            _this3.updateValue(_this3.selectRange);
          });
          break;

        case 'end':
          break;

        default:
          break;
      }
    },
    appStartHandler1: function appStartHandler1() {
      var _this4 = this;

      this.lock = true; // 由于android端不支持 horizontalpan 的move事件，使用setInterval hack方案

      if (this.isAndroid()) {
        this.firstInterval = setInterval(function () {
          dom.getComponentRect(_this4.block1, function (option) {
            var left = option.size.left;

            var value = _this4._getValue(left - _this4.leftDiffX);

            if (!_this4.range) {
              _this4.updateValue(value);
            } else {
              _this4.selectRange[0] = value;

              _this4.updateValue(_this4.selectRange);
            }
          });
        }, this.timeout);
      }
    },
    appStartHandler2: function appStartHandler2() {
      var _this5 = this;

      this.lock = true;

      if (this.isAndroid()) {
        // 由于android端不支持 horizontalpan 的move事件，使用setInterval hack方案
        this.secondInterval = setInterval(function () {
          dom.getComponentRect(_this5.block2, function (option) {
            var left = option.size.left;
            _this5.selectRange[1] = _this5._getValue(left - _this5.leftDiffX);

            _this5.updateValue(_this5.selectRange);
          });
        }, this.timeout);
      }
    },
    // 清除定时器
    appEndHandler: function appEndHandler() {
      this.lock = false;

      if (this.isAndroid()) {
        this.firstInterval && clearInterval(this.firstInterval);
        this.secondInterval && clearInterval(this.secondInterval);
      } //


      this.$emit('updateEnd', this.upval);
    },
    webStartHandler: function webStartHandler(e) {
      if (this.env === 'weex') {
        return;
      }

      this.startX = e.touch.clientX;
      this.startDiffX1 = this.diffX1;
      this.startDiffX2 = this.diffX2;
    },
    webMoveHandler1: function webMoveHandler1(e) {
      if (this.env === 'weex' || this.disabled) {
        return;
      }

      var deltaX = (e.touch.clientX - this.startX) * this.DPR;
      var diff = this.startDiffX1 + deltaX;
      var max = this.length;

      if (this.range) {
        max = this.diffX2 - this.minDist;
      }

      if (diff > 0 && diff < max) {
        this.diffX1 = diff;
        animation.transition(this.block1, {
          styles: {
            transform: "translateX(".concat(this.diffX1, "px)")
          }
        }, function () {});

        if (!this.range) {
          this.updateValue(this._getValue(this.diffX1));
        } else {
          this.selectRange[0] = this._getValue(this.diffX1);
          this.updateValue(this.selectRange);
        }
      }
    },
    webMoveHandler2: function webMoveHandler2(e) {
      if (this.env === 'weex' || this.disabled) {
        return;
      }

      var deltaX = (e.touch.clientX - this.startX) * this.DPR;
      var diff = this.startDiffX2 + deltaX;
      var min = this.diffX1 + this.minDist;
      var max = this.length;

      if (diff > min && diff < max) {
        this.diffX2 = diff;
        animation.transition(this.block2, {
          styles: {
            transform: "translateX(".concat(this.diffX2, "px)")
          }
        }, function () {});

        if (!this.range) {
          this.updateValue(this._getValue(this.diffX2));
        } else {
          this.selectRange[1] = this._getValue(this.diffX2);
          this.updateValue(this.selectRange);
        }
      }
    },
    bindBlock1: function bindBlock1() {
      var self = this; // 如果禁用，不行进行表达式绑定

      if (self.disabled) {
        weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default.a.unbind({
          token: this.gesToken1,
          eventType: 'pan'
        });
        this.gesToken1 = 0;
        return;
      } // 初始化按钮&条的大小范围


      var blockMax1 = 0;

      if (self.range) {
        blockMax1 = self.diffX2 - self.minDist;
      } else {
        blockMax1 = self.length;
      }

      var barMax1 = self.diffX2;

      if (!self.range) {
        var startLeft = self.diffX1 - blockMax1 - self.minDist;
        var props = [{
          element: self.block1.ref,
          property: 'transform.translateX',
          expression: "min(".concat(blockMax1, ", max(x + ").concat(self.diffX1, ", 0))")
        }, {
          element: self.valueBar.ref,
          property: 'transform.translateX',
          expression: "min(0, max(x + ".concat(startLeft, ", -").concat(blockMax1, "))")
        }];
        var gesTokenObj = weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default.a.bind({
          anchor: self.block1.ref,
          eventType: 'pan',
          props: props
        }, function (e) {
          if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
            var range = self.getRange(); // 限制diffX1范围

            self.diffX1 = self._restrictValue(range.rangeX1, self.diffX1 + e.deltaX);
            self.bindBlock1();
          }
        });
        this.gesToken1 = gesTokenObj.token;
      } else {
        // 选范围
        var _props = [{
          element: self.block1.ref,
          property: 'transform.translateX',
          expression: "min(".concat(blockMax1, ", max(x + ").concat(self.diffX1, ", 0))")
        }, {
          element: self.valueBar.ref,
          property: 'transform.translateX',
          expression: "min(".concat(blockMax1, ", max(x + ").concat(self.diffX1, ", 0))")
        }, {
          element: self.valueBar.ref,
          property: 'width',
          expression: "min(".concat(barMax1, ", max(0, ").concat(self.barWidth, " - x))")
        }];

        var _gesTokenObj = weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default.a.bind({
          anchor: self.block1.ref,
          eventType: 'pan',
          props: _props
        }, function (e) {
          if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
            var range = self.getRange();
            self.barWidth = self._restrictValue(range.rangeX1, self.barWidth - e.deltaX);
            self.diffX1 = self._restrictValue(range.rangeX1, self.diffX1 + e.deltaX);
            self.bindBlock1();
          }
        });

        this.gesToken1 = _gesTokenObj.token;
      }
    },
    bindBlock2: function bindBlock2() {
      var self = this; // 如果禁用，不行进行表达式绑定

      if (self.disabled) {
        weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default.a.unbind({
          token: this.gesToken2,
          eventType: 'pan'
        });
        this.gesToken2 = 0;
        return;
      } // 初始化按钮&条的大小范围


      var blockMax1 = 0;

      if (self.range) {
        blockMax1 = self.diffX2 - self.minDist;
      } else {
        blockMax1 = self.length;
      }

      var blockMax2 = self.length;
      var blockMin2 = self.diffX1 + self.minDist;
      var barMax2 = self.length - self.diffX1;
      var props = [{
        element: self.block2.ref,
        property: 'transform.translateX',
        expression: "min(".concat(blockMax2, ", max(x + ").concat(self.diffX2, ", ").concat(blockMin2, "))")
      }, {
        element: self.valueBar.ref,
        property: 'width',
        expression: "min(".concat(barMax2, ", max(0, x + ").concat(self.barWidth, "))")
      }];
      var gesTokenObj = weex_bindingx_lib_index_weex_js__WEBPACK_IMPORTED_MODULE_0___default.a.bind({
        anchor: self.block2.ref,
        eventType: 'pan',
        props: props
      }, function (e) {
        if (e.state === 'end' || e.state === 'cancel' || e.state === 'exit') {
          var range = self.getRange();
          self.barWidth = self._restrictValue([0, self.length - self.diffX1], self.barWidth + e.deltaX);
          self.diffX2 = self._restrictValue(range.rangeX2, self.diffX2 + e.deltaX);
          self.bindBlock2();
        }
      });
      this.gesToken2 = gesTokenObj.token;
    },
    // 获取diffx1 diffx2 取值范围
    getRange: function getRange() {
      if (!this.range) {
        return {
          rangeX1: [0, this.length]
        };
      } else {
        return {
          rangeX1: [0, this.diffX2 - this.minDist],
          rangeX2: [this.diffX1 + this.minDist, this.length]
        };
      }
    },
    // 限制取值范围
    _restrictValue: function _restrictValue(range, value) {
      if (range && range.length && range.length === 2) {
        if (value < range[0]) {
          return range[0];
        } else if (value > range[1]) {
          return range[1];
        } else {
          return value;
        }
      }
    },
    // 根据x方向偏移量计算value
    _getValue: function _getValue(diffX) {
      return Math.round(diffX / this.length * (this.max - this.min) + this.min);
    },
    // 根据value和length计算x方向偏移值
    _getDiffX: function _getDiffX(value) {
      return (value - this.min) / (this.max - this.min) * this.length;
    }
  }
});

/***/ }),

/***/ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!/Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/node_modules/babel-loader/lib!/Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SliderBar_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SliderBar/index */ "./src/components/SliderBar/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dom = app.requireModule('dom');
var audio = app.requireModule('eeuiAudio');
var animation = app.requireModule('animation');

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SliderBar: _components_SliderBar_index__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      photoDegree: 0,
      currentIndex: 0,
      playMode: 'list',
      playState: 'play',
      playLove: false,
      playLists: [],
      playIndex: -1,
      playInfo: {},
      lyricHeight: 0,
      lyricIndex: 0,
      lyricLock: false,
      lyricLists: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (typeof audio === 'undefined') {
      eeui.alert({
        title: '温馨提示',
        message: '检测到未安装audio插件，安装详细请登录https://eeui.app/'
      });
    }

    typeof audio !== 'undefined' && audio.setCallback(function (res) {
      _this.playInfo = res;
    }); //

    eeui.ajax({
      url: eeui.rewriteUrl('./json/data.json')
    }, function (result) {
      if (result.status === 'success') {
        var res = result.result;

        if (res.ret === 1) {
          _this.playLists = res.data;
          _this.playIndex = 0; //

          setTimeout(function () {
            _this.rotate();

            dom.getComponentRect(_this.$refs.myLyrics, function (option) {
              _this.lyricHeight = option.size.height;
            });
          }, 300);
        } else {
          eeui.alert({
            title: '温馨提示',
            message: '数据加载失败！'
          });
        }
      }
    });
  },
  watch: {
    playIndex: function playIndex(val) {
      this.lyricIndex = 0;
      this.lyricLists = this.playLists[val].lyric;
      typeof audio !== 'undefined' && audio.play(this.playLists[val].url);
    },
    playInfo: function playInfo(val) {
      var _this2 = this;

      if (val.status === 'compelete') {
        if (this.playMode === 'list') {
          this.nextPlay();
        } else {
          typeof audio !== 'undefined' && audio.play(this.playLists[this.playIndex].url);
        }
      } //


      var current = val.current / 1000,
          i = 0;
      this.lyricLists.some(function (item) {
        if (current <= _this2.dateToSecond(item.time)) {
          return true;
        }

        i++;
      });
      this.lyricIndex = Math.max(0, i - 1);

      if (this.lyricLock) {
        return;
      }

      var el = this.$refs['lyric_' + this.lyricIndex][0];
      dom.scrollToElement(el, {
        offset: this.lyricHeight / -2,
        animation: this.lyricIndex !== 0
      });
    }
  },
  methods: {
    rotate: function rotate() {
      var _this3 = this;

      this.photoDegree += 720;
      animation.transition(this.$refs.photo, {
        styles: {
          transform: 'rotate(' + this.photoDegree + 'deg)',
          transformOrigin: 'center center'
        },
        duration: 24000,
        timingFunction: 'linear'
      }, function () {
        _this3.rotate();
      });
    },
    changeHandler: function changeHandler(e) {
      this.currentIndex = e.index;
    },
    secondToDate: function secondToDate(result) {
      if (typeof result === 'undefined' || isNaN(result)) {
        return '00:00';
      }

      var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
      var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);
      var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);
      return h > 0 ? h + ':' + m + ':' + s : m + ':' + s;
    },
    dateToSecond: function dateToSecond(result) {
      var array = (result + '').split(':');
      var second = 0;

      if (array.length > 2) {
        second += parseFloat(array[0]) * 60 * 60;
        second += parseFloat(array[1]) * 60;
        second += parseFloat(array[2]);
      } else {
        second += parseFloat(array[0]) * 60;
        second += parseFloat(array[1]);
      }

      return second;
    },
    prevPlay: function prevPlay() {
      if (this.playLists.length === 0) {
        eeui.toast('播放列表为空！');
        return;
      }

      if (this.playLists.length === 1) {
        //只有一首歌重头开始
        typeof audio !== 'undefined' && audio.seek(0);
        return;
      }

      if (this.playIndex === 0) {
        //第一首时切换到最后一首
        this.playIndex = this.playLists.length - 1;
        return;
      }

      this.playIndex--;
    },
    nextPlay: function nextPlay() {
      if (this.playLists.length === 0) {
        eeui.toast('播放列表为空！');
        return;
      }

      if (this.playLists.length === 1) {
        //只有一首歌重头开始
        typeof audio !== 'undefined' && audio.seek(0);
        return;
      }

      if (this.playIndex === this.playLists.length - 1) {
        //播放最后一首时切换到第一首
        this.playIndex = 0;
        return;
      }

      this.playIndex++;
    },
    onpause: function onpause() {
      typeof audio !== 'undefined' && audio.pause();
      this.playState = 'pause';
    },
    onplay: function onplay() {
      typeof audio !== 'undefined' && audio.play(this.playLists[this.playIndex].url);
      this.playState = 'play';
    },
    updateEnd: function updateEnd(progress) {
      typeof audio !== 'undefined' && audio.seek(this.playInfo.duration * Math.min(99, progress) / 100);
    }
  }
});

/***/ }),

/***/ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-3bd5a916!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/SliderBar/index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-3bd5a916!/Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/SliderBar/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider-bar-container": {
    "justifyContent": "center",
    "alignItems": "center",
    "overflow": "hidden"
  },
  "range-bar": {
    "overflow": "hidden"
  },
  "value-bar": {
    "height": "4",
    "overflow": "hidden"
  },
  "slide-block": {
    "borderWidth": "1",
    "borderColor": "rgba(0,0,0,0.1)",
    "position": "absolute",
    "left": 0,
    "bottom": 0
  }
}

/***/ }),

/***/ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!/Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!/Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1,
    "backgroundColor": "#464646"
  },
  "background": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "top": {
    "marginBottom": "25",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "top-title": {
    "marginTop": "12",
    "marginBottom": 0,
    "height": "80",
    "lineHeight": "80",
    "textAlign": "center",
    "fontSize": "36",
    "color": "#ffffff"
  },
  "top-subtitle": {
    "height": "40",
    "lineHeight": "40",
    "textAlign": "center",
    "fontSize": "28",
    "color": "#ffffff"
  },
  "middle": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "position": "relative"
  },
  "middle-slider": {
    "flex": 1,
    "width": "750"
  },
  "middle-slider-item": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "middle-slider-image": {
    "width": "500",
    "height": "500",
    "borderRadius": "250",
    "backgroundColor": "rgba(255,255,255,0.1)",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "middle-slider-image-photo": {
    "width": "468",
    "height": "468",
    "borderRadius": "234"
  },
  "middle-slider-lyrics": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": "58",
    "paddingBottom": "78"
  },
  "middle-lyrics-main": {
    "flex": 1,
    "width": "750"
  },
  "middle-lyrics-item": {
    "height": "64",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "middle-lyrics-text": {
    "fontSize": "30",
    "color": "rgba(255,255,255,0.5)"
  },
  "middle-lyrics-active": {
    "fontSize": "32",
    "color": "#ffffff"
  },
  "middle-onelyrics": {
    "height": "88",
    "marginTop": "12",
    "marginRight": 0,
    "marginBottom": "12",
    "marginLeft": 0,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "middle-onelyrics-text": {
    "fontSize": "28",
    "color": "rgba(255,255,255,0.5)"
  },
  "middle-dot": {
    "position": "absolute",
    "left": 0,
    "bottom": "32",
    "right": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "middle-dot-item": {
    "marginTop": 0,
    "marginRight": "6",
    "marginBottom": 0,
    "marginLeft": "6",
    "width": "14",
    "height": "14",
    "borderRadius": "7",
    "backgroundColor": "rgba(255,255,255,0.5)"
  },
  "middle-dot-active": {
    "marginTop": 0,
    "marginRight": "6",
    "marginBottom": 0,
    "marginLeft": "6",
    "width": "30",
    "height": "14",
    "borderRadius": "7",
    "backgroundColor": "rgba(255,255,255,0.8)"
  },
  "bottom-time": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bottom-time-val": {
    "width": "100",
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "26"
  },
  "bottom-time-progress": {
    "width": "450",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bottom-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": "36",
    "marginRight": 0,
    "marginBottom": "64",
    "marginLeft": 0
  },
  "bottom-item-image": {
    "width": "76",
    "height": "76",
    "marginTop": 0,
    "marginRight": "24",
    "marginBottom": 0,
    "marginLeft": "24"
  },
  "bottom-item-image-center": {
    "width": "98",
    "height": "98",
    "marginTop": 0,
    "marginRight": "24",
    "marginBottom": 0,
    "marginLeft": "24"
  }
}

/***/ }),

/***/ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-3bd5a916!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/SliderBar/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-3bd5a916!/Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/SliderBar/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "bar-container",
    staticClass: ["slider-bar-container"],
    style: _vm.containerStyle
  }, [_c('div', {
    staticClass: ["range-bar"],
    style: _vm.rangeBarStyle
  }, [_c('div', {
    ref: "value-bar",
    staticClass: ["value-bar"],
    style: _vm.valueBarStyle
  }, [_c('div')])]), _c('div', {
    ref: "slide-block-1",
    staticClass: ["slide-block"],
    style: _vm.blockStyle1,
    attrs: {
      "preventMoveEvent": _vm.preventMoveEvent
    },
    on: {
      "panstart": _vm.webStartHandler,
      "panmove": _vm.webMoveHandler1,
      "touchstart": _vm.appStartHandler1,
      "touchend": _vm.appEndHandler,
      "horizontalpan": _vm.appHandler1
    }
  }, [_c('div')]), (_vm.range) ? _c('div', {
    ref: "slide-block-2",
    staticClass: ["slide-block"],
    style: _vm.blockStyle2,
    attrs: {
      "preventMoveEvent": _vm.preventMoveEvent
    },
    on: {
      "panstart": _vm.webStartHandler,
      "panmove": _vm.webMoveHandler2,
      "touchstart": _vm.appStartHandler2,
      "touchend": _vm.appEndHandler,
      "horizontalpan": _vm.appHandler2
    }
  }, [_c('div')]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!/Users/march/.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('image', {
    staticClass: ["background"],
    attrs: {
      "src": './images/bg' + (_vm.playIndex % 3) + '.png',
      "resize": "stretch"
    }
  }), _c('div', {
    staticClass: ["top"]
  }, [_c('text', {
    staticClass: ["top-title"]
  }, [_vm._v(_vm._s(_vm.playIndex > -1 ? _vm.playLists[_vm.playIndex].title : ''))]), _c('text', {
    staticClass: ["top-subtitle"]
  }, [_vm._v(_vm._s(_vm.playIndex > -1 ? _vm.playLists[_vm.playIndex].author : ''))])]), _c('div', {
    staticClass: ["middle"]
  }, [_c('slider', {
    staticClass: ["middle-slider"],
    attrs: {
      "autoPlay": false,
      "infinite": false
    },
    on: {
      "change": _vm.changeHandler
    }
  }, [_c('div', {
    staticClass: ["middle-slider-item"]
  }, [_c('div', {
    staticClass: ["middle-slider-image"]
  }, [_c('image', {
    ref: "photo",
    staticClass: ["middle-slider-image-photo"],
    attrs: {
      "src": _vm.playIndex > -1 ? _vm.playLists[_vm.playIndex].image : '',
      "resize": "cover"
    }
  })]), _c('div', {
    staticClass: ["middle-onelyrics"]
  }, [_c('text', {
    staticClass: ["middle-onelyrics-text"]
  }, [_vm._v(_vm._s(_vm.playIndex > -1 ? _vm.lyricLists[_vm.lyricIndex].text : ''))])])]), _c('div', {
    staticClass: ["middle-slider-lyrics"]
  }, [_c('scroller', {
    ref: "myLyrics",
    staticClass: ["middle-lyrics-main"],
    on: {
      "touchstart": function($event) {
        _vm.lyricLock = true
      },
      "touchend": function($event) {
        _vm.lyricLock = false
      }
    }
  }, _vm._l((_vm.lyricLists), function(item, index) {
    return _c('div', {
      ref: 'lyric_' + index,
      refInFor: true,
      staticClass: ["middle-lyrics-item"]
    }, [_c('text', {
      class: [index === _vm.lyricIndex ? 'middle-lyrics-active' : 'middle-lyrics-text']
    }, [_vm._v(_vm._s(item.text))])])
  }))])]), _c('div', {
    staticClass: ["middle-dot"]
  }, [_c('div', {
    class: [_vm.currentIndex === 0 ? 'middle-dot-active' : 'middle-dot-item']
  }), _c('div', {
    class: [_vm.currentIndex === 1 ? 'middle-dot-active' : 'middle-dot-item']
  })])]), _c('div', {
    staticClass: ["bottom"]
  }, [_c('div', {
    staticClass: ["bottom-time"]
  }, [_c('text', {
    staticClass: ["bottom-time-val"]
  }, [_vm._v(_vm._s(_vm.secondToDate(_vm.playInfo.current / 1000)))]), _c('div', {
    staticClass: ["bottom-time-progress"]
  }, [_c('slider-bar', {
    attrs: {
      "length": 400,
      "indicator": true,
      "value": Math.min(100, (_vm.playInfo.percent || 0) * 100),
      "validColor": "#ffcd32",
      "indicatorColor": "#ffcd32",
      "indicatorHeight": 38
    },
    on: {
      "updateEnd": _vm.updateEnd
    }
  })], 1), _c('text', {
    staticClass: ["bottom-time-val"]
  }, [_vm._v(_vm._s(_vm.secondToDate(_vm.playInfo.duration / 1000)))])]), _c('div', {
    staticClass: ["bottom-item"]
  }, [(_vm.playMode === 'list') ? _c('image', {
    staticClass: ["bottom-item-image"],
    attrs: {
      "src": "root://pages/images/cycle-list.png"
    },
    on: {
      "click": function($event) {
        _vm.playMode = 'one'
      }
    }
  }) : _c('image', {
    staticClass: ["bottom-item-image"],
    attrs: {
      "src": "root://pages/images/cycle-one.png"
    },
    on: {
      "click": function($event) {
        _vm.playMode = 'list'
      }
    }
  }), _c('image', {
    staticClass: ["bottom-item-image"],
    attrs: {
      "src": "root://pages/images/prev.png"
    },
    on: {
      "click": _vm.prevPlay
    }
  }), (_vm.playState === 'play') ? _c('image', {
    staticClass: ["bottom-item-image-center"],
    attrs: {
      "src": "root://pages/images/pause.png"
    },
    on: {
      "click": _vm.onpause
    }
  }) : _c('image', {
    staticClass: ["bottom-item-image-center"],
    attrs: {
      "src": "root://pages/images/play.png"
    },
    on: {
      "click": _vm.onplay
    }
  }), _c('image', {
    staticClass: ["bottom-item-image"],
    attrs: {
      "src": "root://pages/images/next.png"
    },
    on: {
      "click": _vm.nextPlay
    }
  }), (!_vm.playLove) ? _c('image', {
    staticClass: ["bottom-item-image"],
    attrs: {
      "src": "root://pages/images/love-not.png"
    },
    on: {
      "click": function($event) {
        _vm.playLove = true
      }
    }
  }) : _c('image', {
    staticClass: ["bottom-item-image"],
    attrs: {
      "src": "root://pages/images/love.png"
    },
    on: {
      "click": function($event) {
        _vm.playLove = false
      }
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "./node_modules/weex-bindingx/lib/index.weex.js":
/*!******************************************************!*\
  !*** ./node_modules/weex-bindingx/lib/index.weex.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

!function (e) {
  if ("object" == ( false ? undefined : _typeof2(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (n, t, i) {
    i.exports = e();
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
}(function () {
  return function (e) {
    var n = {};

    function t(i) {
      if (n[i]) return n[i].exports;
      var r = n[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }

    return t.m = e, t.c = n, t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: i
      });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return t.d(n, "a", n), n;
    }, t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }, t.p = "", t(t.s = 0);
  }([function (e, n, t) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
      return _typeof2(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
    },
        r = t(1);

    function o(e) {
      try {
        if (void 0 !== ("undefined" == typeof weex ? "undefined" : i(weex)) && weex.requireModule) return weex.requireModule(e);
      } catch (e) {}

      return window.require("@weex-module/" + e);
    }

    var s = !0,
        a = !0,
        l = void 0;

    try {
      l = o("bindingx"), s = !0;
    } catch (e) {
      s = !1;
    }

    if (!l || !l.bind) try {
      l = o("binding"), s = !0;
    } catch (e) {
      s = !1;
    }
    if (!(s = !!(l && l.bind && l.unbind && l.getComputedStyle))) try {
      l = o("expressionBinding"), a = !0;
    } catch (e) {
      a = !1;
    }

    function u(e) {
      if (void 0 !== e) {
        try {
          e = JSON.parse(e);
        } catch (e) {}

        var n = {};
        if ("string" == typeof e ? n.origin = e : e && (n.origin = e.origin, n.transformed = e.transformed), n.transformed || n.origin) return n.transformed = n.transformed || (0, r.parse)(n.origin), n;
      }
    }

    a = !(!l || !l.bind && !l.createBinding), n["default"] = {
      isSupportNewBinding: s,
      isSupportBinding: a,
      _bindingInstances: [],
      bind: function bind(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
        if (!e) throw new Error("should pass options for binding");

        if (function (e) {
          e && (e.exitExpression = u(e.exitExpression), e.props && e.props.forEach(function (e) {
            e.expression = u(e.expression);
          }));
        }(e), l && a) {
          if (s) return l.bind(e, e && "timing" === e.eventType ? function (e) {
            return function () {
              var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if ("function" == typeof e) return e({
                state: "end" === n.state ? "exit" : n.state,
                t: void 0 !== n.t ? n.t : n.deltaT
              });
            };
          }(n) : n);
          l.enableBinding(e.anchor, e.eventType), l.createBinding(e.anchor, e.eventType, "", function (e) {
            if (e && e.props) return e.props.map(function (e) {
              return {
                element: e.element,
                property: e.property,
                expression: e.expression.transformed
              };
            });
          }(e), n);
        }
      },
      unbind: function unbind(e) {
        if (!e) throw new Error("should pass options for binding");
        if (l && a) return s ? l.unbind(e) : l.disableBinding(e.anchor, e.eventType);
      },
      unbindAll: function unbindAll() {
        if (l && a) return s ? l.unbindAll() : l.disableAll();
      },
      prepare: function prepare(e) {
        if (l && a) return s ? l.prepare(e) : l.enableBinding(e.anchor, e.eventType);
      },
      getComputedStyle: function getComputedStyle(e) {
        return s ? l.getComputedStyle(e) : {};
      }
    }, e.exports = n["default"];
  }, function (module, exports, __webpack_require__) {
    !function (e, n) {
      module.exports = n();
    }("undefined" != typeof self && self, function () {
      return function (e) {
        var n = {};

        function t(i) {
          if (n[i]) return n[i].exports;
          var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
          };
          return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
        }

        return t.m = e, t.c = n, t.d = function (e, n, i) {
          t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
          });
        }, t.n = function (e) {
          var n = e && e.__esModule ? function () {
            return e["default"];
          } : function () {
            return e;
          };
          return t.d(n, "a", n), n;
        }, t.o = function (e, n) {
          return Object.prototype.hasOwnProperty.call(e, n);
        }, t.p = "", t(t.s = 0);
      }([function (module, exports, __webpack_require__) {
        "use strict";

        var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
          return _typeof2(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
        },
            lex = {
          InputElementDiv: "<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>",
          InputElementRegExp: "<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>",
          ReservedWord: "<Keyword>|<NullLiteral>|<BooleanLiteral>",
          WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,
          LineTerminator: /[\n\r\u2028\u2029]/,
          Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,
          NullLiteral: /null(?![_$a-zA-Z0-9])/,
          BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/,
          Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/,
          Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,
          DivPunctuator: /\/=|\//,
          NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,
          StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,
          RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/
        };

        function XRegExp(e, n, t) {
          var i = [n];

          var r = function n(r) {
            var o = new RegExp();
            return o.compile(r.replace(/<([^>]+)>/g, function (t, r) {
              return e[r] ? (i.push(r), e[r] instanceof RegExp ? "(" + e[r].source + ")" : "(" + n(e[r]).source + ")") : "";
            }), t), o;
          }(e[n]);

          this.exec = function (e) {
            var n = r.exec(e);
            if (null == n) return null;

            for (var t = new String(n[0]), o = 0; o < i.length; o++) {
              n[o] && (t[i[o]] = n[o]);
            }

            return t;
          }, Object.defineProperty(this, "lastIndex", {
            get: function get() {
              return r.lastIndex;
            },
            set: function set(e) {
              r.lastIndex = e;
            }
          });
        }

        function LexicalParser() {
          var e,
              n = new XRegExp(lex, "InputElementDiv", "g"),
              t = new XRegExp(lex, "InputElementRegExp", "g");
          Object.defineProperty(this, "source", {
            get: function get() {
              return e;
            },
            set: function set(i) {
              e = i, n.lastIndex = 0, t.lastIndex = 0;
            }
          }), this.reset = function () {
            n.lastIndex = 0, t.lastIndex = 0;
          }, this.getNextToken = function (i) {
            var r,
                o = n.lastIndex,
                s = (r = i ? n : t).exec(e);
            if (s && r.lastIndex - o > s.length) throw new SyntaxError("Unexpected token ILLEGAL");
            return n.lastIndex = r.lastIndex, t.lastIndex = r.lastIndex, s;
          };
        }

        var rules = {
          IdentifierName: [["Identifier"]],
          Literal: [["NullLiteral"], ["BooleanLiteral"], ["NumericLiteral"], ["StringLiteral"], ["RegularExpressionLiteral"]],
          PrimaryExpression: [["Identifier"], ["Literal"], ["(", "Expression", ")"]],
          CallExpression: [["PrimaryExpression", "Arguments"], ["CallExpression", "Arguments"]],
          Arguments: [["(", ")"], ["(", "ArgumentList", ")"]],
          ArgumentList: [["ConditionalExpression"], ["ArgumentList", ",", "ConditionalExpression"]],
          LeftHandSideExpression: [["PrimaryExpression"], ["CallExpression"]],
          UnaryExpression: [["LeftHandSideExpression"], ["void", "UnaryExpression"], ["+", "UnaryExpression"], ["-", "UnaryExpression"], ["~", "UnaryExpression"], ["!", "UnaryExpression"]],
          ExponentiationExpression: [["UnaryExpression"], ["ExponentiationExpression", "**", "UnaryExpression"]],
          MultiplicativeExpression: [["MultiplicativeExpression", "/", "ExponentiationExpression"], ["ExponentiationExpression"], ["MultiplicativeExpression", "*", "ExponentiationExpression"], ["MultiplicativeExpression", "%", "ExponentiationExpression"]],
          AdditiveExpression: [["MultiplicativeExpression"], ["AdditiveExpression", "+", "MultiplicativeExpression"], ["AdditiveExpression", "-", "MultiplicativeExpression"]],
          ShiftExpression: [["AdditiveExpression"], ["ShiftExpression", "<<", "AdditiveExpression"], ["ShiftExpression", ">>", "AdditiveExpression"], ["ShiftExpression", ">>>", "AdditiveExpression"]],
          RelationalExpression: [["ShiftExpression"], ["RelationalExpression", "<", "ShiftExpression"], ["RelationalExpression", ">", "ShiftExpression"], ["RelationalExpression", "<=", "ShiftExpression"], ["RelationalExpression", ">=", "ShiftExpression"], ["RelationalExpression", "instanceof", "ShiftExpression"], ["RelationalExpression", "in", "ShiftExpression"]],
          EqualityExpression: [["RelationalExpression"], ["EqualityExpression", "==", "RelationalExpression"], ["EqualityExpression", "!=", "RelationalExpression"], ["EqualityExpression", "===", "RelationalExpression"], ["EqualityExpression", "!==", "RelationalExpression"]],
          BitwiseANDExpression: [["EqualityExpression"], ["BitwiseANDExpression", "&", "EqualityExpression"]],
          BitwiseXORExpression: [["BitwiseANDExpression"], ["BitwiseXORExpression", "^", "BitwiseANDExpression"]],
          BitwiseORExpression: [["BitwiseXORExpression"], ["BitwiseORExpression", "|", "BitwiseXORExpression"]],
          LogicalANDExpression: [["BitwiseORExpression"], ["LogicalANDExpression", "&&", "BitwiseORExpression"]],
          LogicalORExpression: [["LogicalANDExpression"], ["LogicalORExpression", "||", "LogicalANDExpression"]],
          ConditionalExpression: [["LogicalORExpression"], ["LogicalORExpression", "?", "LogicalORExpression", ":", "LogicalORExpression"]],
          Expression: [["ConditionalExpression"], ["Expression", ",", "ConditionalExpression"]],
          Program: [["Expression"]]
        };

        function _Symbol(e, n) {
          this.name = e, this.token = n, this.childNodes = [], this.toString = function (e) {
            if (e || (e = ""), 1 == this.childNodes.length) return this.childNodes[0].toString(e);

            for (var n = e + this.name + (void 0 != this.token && this.name != this.token ? ":" + this.token : "") + "\n", t = 0; t < this.childNodes.length; t++) {
              n += this.childNodes[t].toString(e + "    ");
            }

            return n;
          };
        }

        function SyntacticalParser() {
          var e = {
            Program: "$"
          },
              n = {};
          !function e(t) {
            n[JSON.stringify(t)] = t;

            for (var i = Object.getOwnPropertyNames(t); i.length;) {
              var r = i.shift();
              rules[r] && rules[r].forEach(function (e) {
                t[e[0]] || i.push(e[0]);
                var n = t;
                e.forEach(function (e) {
                  n[e] || (n[e] = {}), n = n[e];
                }), t[r].$div && (n.$div = !0), n.$reduce = r, n.$count = e.length;
              });
            }

            for (var o in t) {
              "object" != _typeof(t[o]) || "$" == o.charAt(0) || t[o].$closure || (n[JSON.stringify(t[o])] ? t[o] = n[JSON.stringify(t[o])] : e(t[o]));
            }

            t.$closure = !0;
          }(e);
          var t = [],
              i = [e],
              r = e;
          this.insertSymbol = function (e, n) {
            for (; !r[e.name] && r.$reduce;) {
              for (var o = r.$count, s = new _Symbol(r.$reduce); o--;) {
                s.childNodes.push(t.pop()), i.pop();
              }

              r = i[i.length - 1], this.insertSymbol(s);
            }

            if (r = r[e.name], t.push(e), i.push(r), !r) throw new Error();
            return r.$div;
          }, this.reset = function () {
            r = e, t = [], i = [e];
          }, Object.defineProperty(this, "grammarTree", {
            get: function get() {
              try {
                for (; r.$reduce;) {
                  for (var e = r.$count, n = new _Symbol(r.$reduce); e--;) {
                    n.childNodes.push(t.pop()), i.pop();
                  }

                  r = i[i.length - 1], this.insertSymbol(n);
                }

                if (t.length > 0 && r[";"]) return this.insertSymbol(new _Symbol(";", ";")), this.grammarTree;
                if (1 != t.length || "Program" != t[0].name) throw new Error();
              } catch (e) {
                throw new SyntaxError("Unexpected end of input");
              }

              return t[0];
            }
          });
        }

        function Parser() {
          this.lexicalParser = new LexicalParser(), this.syntacticalParser = new SyntacticalParser();
          var e = {};
          ["NullLiteral", "BooleanLiteral", "NumericLiteral", "StringLiteral", "RegularExpressionLiteral", "Identifier", "**", "=>", "{", "}", "(", ")", "[", "]", ".", ";", ",", "<", ">", "<=", ">=", "==", "!=", "===", "!==", "+", "-", "*", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "=", "+=", "-=", "*=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", "/", "/=", "instanceof", "typeof", "new", "void", "debugger", "this", "delete", "in"].forEach(function (n) {
            Object.defineProperty(e, n, {});
          }), this.reset = function () {
            this.lexicalParser.reset(), this.syntacticalParser.reset();
          }, this.parse = function (n, t) {
            var i,
                r = this,
                o = !1;
            this.lexicalParser.source = n;

            for (var s = !1; i = this.lexicalParser.getNextToken(s);) {
              t && t(i);

              try {
                if (Object.getOwnPropertyNames(i).some(function (n) {
                  return !!e.hasOwnProperty(n) && (s = r.syntacticalParser.insertSymbol(new _Symbol(n, i), o), o = !1, !0);
                })) continue;
                (i.Keyword || i.Punctuator || i.DivPunctuator) && e.hasOwnProperty(i.toString()) && (s = this.syntacticalParser.insertSymbol(new _Symbol(i.toString(), i), o));
              } catch (e) {
                throw new SyntaxError("Unexpected token " + i);
              }
            }

            return this.syntacticalParser.grammarTree;
          };
        }

        var parser = new Parser();

        function JavaScriptExpression(text) {
          parser.reset(), this.tree = parser.parse(text), this.paths = [];
          var context = Object.create(null),
              me = this,
              pathIndex = Object.create(null);

          function checkSimple(e) {
            for (var n = e; n.childNodes.length <= 1 && "MemberExpression" !== n.name;) {
              n = n.childNodes[0];
            }

            "MemberExpression" === n.name ? me.isSimple = !0 : me.isSimple = !1;
          }

          function walk(e) {
            if ("CallExpression" === e.name && "CallExpression" !== e.childNodes[e.childNodes.length - 1].name) {
              getPath(e.childNodes[1]);
              walk(e.childNodes[0]);
            } else if ("NewExpression" === e.name && 1 === e.childNodes.length) getPath(e.childNodes[0]);else if ("MemberExpression" === e.name && 1 === e.childNodes.length) getPath(e);else for (var n = 0; n < e.childNodes.length; n++) {
              walk(e.childNodes[n]);
            }
          }

          function getPath(e) {
            var n;
            if ("IdentifierName" === e.childNodes[0].name) return (n = getPath(e.childNodes[2])) && (n = n.concat(e.childNodes[0].childNodes[0].token.toString())), createPath(n), n;
            if ("PrimaryExpression" === e.childNodes[0].name) return "Identifier" === e.childNodes[0].childNodes[0].name ? (createPath(n = [e.childNodes[0].childNodes[0].token.toString()]), n) : null;
            if ("]" === e.childNodes[0].name) return getPath(e.childNodes[3]), walk(e.childNodes[1]), null;
            if ("Arguments" === e.childNodes[0].name) return walk(e.childNodes[0]), walk(e.childNodes[1]), null;

            for (var t = 0; t < e.childNodes.length; t++) {
              walk(e.childNodes[t]);
            }
          }

          function createPath(e) {
            for (var n = context, t = 0; t < e.length - 1; t++) {
              n[e[t]] || (n[e[t]] = Object.create(null)), n = n[e[t]];
            }

            me.paths.push(e), pathIndex[e.join(".")] = !1;
          }

          this.isSimple, this.isConst, walk(this.tree), checkSimple(this.tree), 0 === this.paths.length && (this.isConst = !0), this.setter = function (e) {
            for (var n = context, t = 0; t < e.length - 1; t++) {
              n[e[t]] || (n[e[t]] = Object.create(null)), n = n[e[t]];
            }

            return {
              isCompleted: function isCompleted() {
                for (var e in pathIndex) {
                  if (!pathIndex[e]) return !1;
                }

                return !0;
              },
              set: function set(i) {
                return pathIndex[e.join(".")] || (pathIndex[e.join(".")] = !0), n[e[t]] = i, this.isCompleted() ? me.exec() : void 0;
              }
            };
          }, this.valueOf = this.exec = function () {
            try {
              return function () {
                return eval(text);
              }.call(context);
            } catch (e) {}
          };
        }

        function visit(e) {
          var n,
              t = e.childNodes.slice().reverse(),
              i = t.filter(function (e) {
            return !e.token || !e.token.Punctuator;
          });
          if ("UnaryExpression" === e.name && 2 === t.length && "-" === t[0].name && 1 === i.length) return (n = visit(i[0])).value = -n.value, n;

          if ("Arguments" === e.name) {
            for (var r = [], o = i[0]; o;) {
              3 === o.childNodes.length && (r.unshift(o.childNodes[0]), o = o.childNodes[2]), 1 === o.childNodes.length && (r.unshift(o.childNodes[0]), o = null);
            }

            return {
              type: "Arguments",
              children: r.map(function (e) {
                return visit(e);
              })
            };
          }

          if (i && 1 === i.length) return n = visit(i[0]);

          if (e.token && ["NullLiteral", "BooleanLiteral", "NumericLiteral", "StringLiteral", "Identifier"].some(function (n) {
            return e.token[n];
          })) {
            var s = Object.keys(e.token).filter(function (e) {
              return e.match(/Literal/) || e.match(/Identifier/);
            })[0];
            return {
              type: s,
              value: {
                NullLiteral: null,
                BooleanLiteral: Boolean(e.token),
                NumericLiteral: Number(e.token),
                StringLiteral: e.token,
                Identifier: e.token
              }[s]
            };
          }

          return "CallExpression" === e.name ? {
            type: "CallExpression",
            children: [visit(t[0]), visit(t[1])]
          } : {
            type: t.filter(function (e) {
              return e.token && e.token.Punctuator;
            })[0].name,
            children: t.filter(function (e) {
              return !e.token || !e.token.Punctuator;
            }).map(function (e) {
              return visit(e);
            })
          };
        }

        function parse(e) {
          var n = new JavaScriptExpression(e);
          return JSON.stringify(visit(n.tree), null);
        }

        module.exports = {
          parse: parse
        };
      }]);
    });
  }]);
});

/***/ }),

/***/ "./src/components/SliderBar/index.js":
/*!*******************************************!*\
  !*** ./src/components/SliderBar/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./src/components/SliderBar/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./src/components/SliderBar/index.vue":
/*!********************************************!*\
  !*** ./src/components/SliderBar/index.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-3bd5a916!../../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-3bd5a916!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/SliderBar/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/SliderBar/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-3bd5a916!../../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-3bd5a916!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/SliderBar/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/march/WebProjects/musix/src/components/SliderBar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3bd5a916"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./src/pages/index.vue?entry=true":
/*!****************************************!*\
  !*** ./src/pages/index.vue?entry=true ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-57509004!../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-57509004!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/node_modules/babel-loader/lib/index.js!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-57509004!../../../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-57509004!../../.nvm/versions/node/v12.18.2/lib/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/march/WebProjects/musix/src/pages/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57509004"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });
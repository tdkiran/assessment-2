webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/booking/room-form.js":
/*!*****************************************!*\
  !*** ./components/booking/room-form.js ***!
  \*****************************************/
/*! exports provided: RoomForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomForm", function() { return RoomForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app_config */ "./app_config/index.js");








var _jsxFileName = "/Users/tdkiran/Desktop/assessment-2/components/booking/room-form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



var RoomFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "room-form__RoomFormContainer",
  componentId: "sc-16rbohw-0"
})(["display:flex;justify-content:space-between;"]);
var FormItem = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "room-form__FormItem",
  componentId: "sc-16rbohw-1"
})(["padding:10px;"]);

var occupantOptionsTemplate = function occupantOptionsTemplate(count) {
  return __jsx("option", {
    value: count,
    key: count,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, count);
};

var RoomForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RoomForm, _Component);

  function RoomForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RoomForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(RoomForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleOccupantSelection", function (e) {
      var _this$props = _this.props,
          selectOccupant = _this$props.selectOccupant,
          occupantInfo = _this$props.occupantInfo,
          roomId = _this$props.roomId;
      var occupantSelectionInfo = e.target.dataset.type === 'adult' ? {
        adult: Number(e.target.value),
        children: occupantInfo.children
      } : {
        adult: occupantInfo.adult,
        children: Number(e.target.value)
      };
      selectOccupant(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        roomId: roomId
      }, occupantSelectionInfo));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RoomForm, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$occupant = _this$props2.occupantInfo,
          adult = _this$props2$occupant.adult,
          children = _this$props2$occupant.children,
          active = _this$props2.active;
      return __jsx(RoomFormContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("label", {
        "for": "adult-occupant-selection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Adult"), " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), "(18+)"), __jsx("select", {
        value: adult,
        onChange: this.handleOccupantSelection,
        "data-type": "adult",
        disabled: !active,
        id: "adult-occupant-selection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, _app_config__WEBPACK_IMPORTED_MODULE_10__["listOfAdults"] && _app_config__WEBPACK_IMPORTED_MODULE_10__["listOfAdults"].map(occupantOptionsTemplate))), __jsx(FormItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("label", {
        "for": "children-occupant-selection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Adult"), " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), "(0-17)"), __jsx("select", {
        value: children,
        onChange: this.handleOccupantSelection,
        "data-type": "children",
        disabled: !active,
        id: "children-occupant-selection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, _app_config__WEBPACK_IMPORTED_MODULE_10__["listOfAdults"] && _app_config__WEBPACK_IMPORTED_MODULE_10__["listOfChildrens"].map(occupantOptionsTemplate))));
    }
  }]);

  return RoomForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/***/ })

})
//# sourceMappingURL=index.js.6532519e334bb16c4301.hot-update.js.map
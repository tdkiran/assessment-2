webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/common/card.js":
/*!***********************************!*\
  !*** ./components/common/card.js ***!
  \***********************************/
/*! exports provided: AppCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCard", function() { return AppCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







var _jsxFileName = "/Users/tdkiran/Desktop/assessment-2/components/common/card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var Card = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "card__Card",
  componentId: "sc-1g0x190-0"
})(["border:2px solid #ddd;border-radius:5px;margin:10px;", ""], function (props) {
  return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["background:#ccc;border-color:#ccc;"]);
});
var CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "card__CardTitle",
  componentId: "sc-1g0x190-1"
})(["font-size:12px;font-weight:bold;padding:5px;border-top-right-radius:3px;border-top-left-radius:3px;background:#ddd;", ""], function (props) {
  return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["background:#ccc;"]);
});
var CardContent = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "card__CardContent",
  componentId: "sc-1g0x190-2"
})(["padding:10px;", ""], function (props) {
  return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["css"])(["pointer-events:none;"]);
});
var AppCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppCard, _Component);

  function AppCard(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppCard).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      var _this$props = _this.props,
          roomId = _this$props.roomId,
          deSelectRoom = _this$props.deSelectRoom,
          selectRoom = _this$props.selectRoom;

      if (e.target.checked) {
        selectRoom(roomId);
      } else {
        deSelectRoom(roomId);
      }

      ;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppCard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          children = _this$props2.children,
          hideOption = _this$props2.hideOption,
          testId = _this$props2.testId,
          active = _this$props2.active;
      return __jsx(Card, {
        disabled: !active,
        "data-testid": "room-".concat(testId),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(CardTitle, {
        disabled: !active,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, !hideOption && __jsx("input", {
        type: "checkbox",
        checked: active,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), title), __jsx(CardContent, {
        disabled: !active,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, children));
    }
  }]);

  return AppCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/***/ })

})
//# sourceMappingURL=index.js.e131230dea8febb5d241.hot-update.js.map
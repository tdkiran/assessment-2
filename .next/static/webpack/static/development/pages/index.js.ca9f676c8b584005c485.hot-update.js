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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");








var _jsxFileName = "/Users/tdkiran/Desktop/with-redux/components/common/card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n        pointer-events: none;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    padding: 10px;\n\n    ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n        background: #ccc;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    font-size: 12px;\n    font-weight: bold;\n    padding: 5px;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px;\n    background: #ddd;\n\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n        background: #ccc;\n        border-color: #ccc;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    border: 2px solid #ddd;\n    border-radius: 5px;\n    margin: 10px;\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Card = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject(), function (props) {
  return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject2());
});
var CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject3(), function (props) {
  return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject4());
});
var CardContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject5(), function (props) {
  return props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(_templateObject6());
});
var AppCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppCard, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AppCard, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.selected !== nextProps.selected) {
        return {
          selected: nextProps.selected
        };
      }

      return null;
    }
  }]);

  function AppCard() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppCard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(AppCard).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "toggleSelection", function () {
      var selected = _this.props.selected;

      _this.props.onSelectionChange(!selected);
    });

    _this.state = {
      selected: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AppCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          selectable = _this$props.selectable,
          selected = _this$props.selected,
          testId = _this$props.testId;
      var shouldDisable = selectable ? !this.state.selected : false;
      return __jsx(Card, {
        disabled: shouldDisable,
        "data-testid": "room-".concat(testId),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(CardTitle, {
        disabled: shouldDisable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, selectable && __jsx("input", {
        type: "checkbox",
        checked: selected,
        onChange: this.toggleSelection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), title), __jsx(CardContent, {
        disabled: shouldDisable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, children));
    }
  }]);

  return AppCard;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/***/ })

})
//# sourceMappingURL=index.js.ca9f676c8b584005c485.hot-update.js.map
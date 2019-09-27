webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/booking/room.js":
/*!************************************!*\
  !*** ./components/booking/room.js ***!
  \************************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/card */ "./components/common/card.js");
/* harmony import */ var _room_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room-form */ "./components/booking/room-form.js");





var _jsxFileName = "/Users/tdkiran/Desktop/with-redux/components/booking/room.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Room =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Room, _Component);

  function Room() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Room);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Room).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Room, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          roomId = _this$props.roomId,
          title = _this$props.title,
          available = _this$props.available,
          selected = _this$props.selected,
          onSelectionChange = _this$props.onSelectionChange,
          selectOccupant = _this$props.selectOccupant,
          _this$props$occupants = _this$props.occupants,
          occupants = _this$props$occupants === void 0 ? {} : _this$props$occupants;
      return __jsx(_common_card__WEBPACK_IMPORTED_MODULE_6__["AppCard"], {
        title: title,
        selected: selected,
        selectable: available,
        onSelectionChange: onSelectionChange,
        testId: roomId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx(_room_form__WEBPACK_IMPORTED_MODULE_7__["RoomForm"], {
        selected: selected,
        occupants: occupants[roomId],
        selectOccupant: selectOccupant.bind(this, roomId),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }));
    }
  }]);

  return Room;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/***/ })

})
//# sourceMappingURL=index.js.60a88b815be3943935c2.hot-update.js.map
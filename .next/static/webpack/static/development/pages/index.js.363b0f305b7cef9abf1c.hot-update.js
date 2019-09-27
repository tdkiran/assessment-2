webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/booking/booking.js":
/*!***************************************!*\
  !*** ./components/booking/booking.js ***!
  \***************************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/card */ "./components/common/card.js");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./room */ "./components/booking/room.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");







var _jsxFileName = "/Users/tdkiran/Desktop/with-redux/components/booking/booking.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\ndisplay: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var BookingContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());
var Booking =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Booking, _Component);

  function Booking() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Booking);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Booking).call(this));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Booking, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(room, selected) {
      var _this$props = this.props,
          _rooms = _this$props.rooms,
          selectRoom = _this$props.selectRoom,
          deSelectRoom = _this$props.deSelectRoom,
          resetSelection = _this$props.resetSelection;

      var rooms = _rooms.filter(function (r) {
        return r.available;
      }); // resetSelection();


      var index = rooms.indexOf(room);
      rooms.slice(0, index + 1).forEach(function (_ref) {
        var roomId = _ref.roomId;
        return selectRoom(roomId);
      });
      rooms.slice(index + 11).forEach(function (_ref2) {
        var roomId = _ref2.roomId;
        return deSelectRoom(roomId);
      });

      if (selected) {
        deSelectRoom(room.roomId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          rooms = _this$props2.rooms,
          _this$props2$selected = _this$props2.selectedRoomIds,
          selectedRoomIds = _this$props2$selected === void 0 ? [] : _this$props2$selected,
          selectOccupant = _this$props2.selectOccupant;
      return __jsx(BookingContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, rooms.map(function (room) {
        return __jsx(_room__WEBPACK_IMPORTED_MODULE_9__["Room"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, room, {
          selectOccupant: selectOccupant,
          selected: selectedRoomIds.includes(room.roomId),
          onSelectionChange: _this.onSelectionChange.bind(_this, room),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }));
      }));
    }
  }]);

  return Booking;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/***/ })

})
//# sourceMappingURL=index.js.363b0f305b7cef9abf1c.hot-update.js.map
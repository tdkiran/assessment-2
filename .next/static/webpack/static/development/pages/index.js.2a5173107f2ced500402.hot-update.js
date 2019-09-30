webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_booking_booking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/booking/booking */ "./components/booking/booking.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _reducers_actions_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/actions-creators */ "./reducers/actions-creators.js");




var mapDispatchToProps = {
  selectRoom: _reducers_actions_creators__WEBPACK_IMPORTED_MODULE_3__["selectRoom"],
  deSelectRoom: _reducers_actions_creators__WEBPACK_IMPORTED_MODULE_3__["deSelectRoom"],
  selectOccupant: _reducers_actions_creators__WEBPACK_IMPORTED_MODULE_3__["selectOccupant"],
  initState: _reducers_actions_creators__WEBPACK_IMPORTED_MODULE_3__["initState"]
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    appState: state,
    bookingInfo: Object(_reducers__WEBPACK_IMPORTED_MODULE_2__["roomInfo"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_booking_booking__WEBPACK_IMPORTED_MODULE_1__["Booking"]));

/***/ })

})
//# sourceMappingURL=index.js.2a5173107f2ced500402.hot-update.js.map
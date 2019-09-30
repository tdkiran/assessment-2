webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./app_config/index.js":
/*!*****************************!*\
  !*** ./app_config/index.js ***!
  \*****************************/
/*! exports provided: defaultRoomInfo, defaultSelectedRoomId, defaultOccupent, listOfAdults, listOfChildrens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRoomInfo", function() { return defaultRoomInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSelectedRoomId", function() { return defaultSelectedRoomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOccupent", function() { return defaultOccupent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listOfAdults", function() { return listOfAdults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listOfChildrens", function() { return listOfChildrens; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);

//Default Room
var defaultNumberOfRooms = 4;

var createDefaultRooms = function createDefaultRooms(current, index) {
  return {
    roomId: index,
    title: "Room ".concat(index + 1)
  };
};

var defaultRoomInfo = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
  length: defaultNumberOfRooms
}, createDefaultRooms);
var defaultSelectedRoomId = 0; // Default Occupant config

var defaultAdultsOccupent = 1;
var defaultChild = 0;
var defaultOccupent = {
  defaultAdultsOccupent: defaultAdultsOccupent,
  defaultChild: defaultChild
}; //Occupant selections

var listOfAdults = [1, 2];
var listOfChildrens = [0, 1, 2];

/***/ })

})
//# sourceMappingURL=_app.js.18304d2c8fbb03657217.hot-update.js.map
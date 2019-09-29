webpackHotUpdate("static/development/pages/index.js",{

/***/ "./reducers/actions-creators.js":
/*!**************************************!*\
  !*** ./reducers/actions-creators.js ***!
  \**************************************/
/*! exports provided: actionTypes, selectRoom, deSelectRoom, resetSelection, selectOccupant, initState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRoom", function() { return selectRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deSelectRoom", function() { return deSelectRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSelection", function() { return resetSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOccupant", function() { return selectOccupant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

// TYPES
var actionTypes = {
  SELECT_ROOM: 'SELECT_ROOM',
  DESELECT_ROOM: 'DESELECT_ROOM',
  RESET_SELECTION: 'RESET_SELECTION',
  SELECT_OCCUPANT: 'SELECT_OCCUPANT',
  INIT_STATE: 'INIT_STATE'
}; // ACTIONS

var selectRoom = function selectRoom(roomId) {
  return {
    type: actionTypes.SELECT_ROOM,
    roomId: roomId
  };
};
var deSelectRoom = function deSelectRoom(roomId) {
  return {
    type: actionTypes.DESELECT_ROOM,
    roomId: roomId
  };
};
var resetSelection = function resetSelection() {
  return {
    type: actionTypes.RESET_SELECTION
  };
};
var selectOccupant = function selectOccupant(occupantInfo) {
  return {
    type: actionTypes.SELECT_OCCUPANT,
    occupantInfo: occupantInfo
  };
};
var initState = function initState(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: actionTypes.INIT_STATE
  }, state);
};

/***/ })

})
//# sourceMappingURL=index.js.22de370a1c43da4080a5.hot-update.js.map
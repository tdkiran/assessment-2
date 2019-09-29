webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default, getActiveRooms, getOccupantSelectionInfo, roomInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveRooms", function() { return getActiveRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOccupantSelectionInfo", function() { return getOccupantSelectionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomInfo", function() { return roomInfo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _actions_creators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions-creators */ "./reducers/actions-creators.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app_config */ "./app_config/index.js");






function activeRooms() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_creators__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].SELECT_ROOM:
      {
        return action.roomId + 1;
      }

    case _actions_creators__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].DESELECT_ROOM:
      {
        return action.roomId;
      }

    case _actions_creators__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].INIT_STATE:
      {
        return action.activeRooms;
      }

    default:
      {
        return state;
      }
  }
}

function occupantSelectionInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
    adult: 1,
    children: 0,
    roomId: 0
  }];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_creators__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].SELECT_OCCUPANT:
      {
        var newOccupantInfo = state.filter(function (occupantInfo) {
          return occupantInfo.roomId !== action.occupantInfo.roomId;
        }).concat([action.occupantInfo]);
        return newOccupantInfo;
      }

    case _actions_creators__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].SELECT_ROOM:
      {
        var _activeRooms = action.roomId;
        return state.filter(function (occupantInfo) {
          return occupantInfo.roomId <= _activeRooms;
        });
      }

    case _actions_creators__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].DESELECT_ROOM:
      {
        var _activeRooms2 = action.roomId;
        return state.filter(function (occupantInfo) {
          return occupantInfo.roomId < _activeRooms2;
        });
      }

    case _actions_creators__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].INIT_STATE:
      {
        return action.occupantSelectionInfo;
      }

    default:
      {
        return state;
      }
  }
} // Root Reducer


var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  activeRooms: activeRooms,
  occupantSelectionInfo: occupantSelectionInfo
});
/* harmony default export */ __webpack_exports__["default"] = (reducer); // selector

var getActiveRooms = function getActiveRooms(state) {
  return state.activeRooms;
};
var getOccupantSelectionInfo = function getOccupantSelectionInfo(state) {
  return state.occupantSelectionInfo;
};
var roomInfo = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getActiveRooms, getOccupantSelectionInfo, function (activeRooms, occupantSelectionInfo) {
  var defaultRoom = {
    adult: 1,
    children: 0
  };
  var currentRoomInfo = _app_config__WEBPACK_IMPORTED_MODULE_4__["defaultRoomInfo"].map(function (roomInfo) {
    var roomId = roomInfo.roomId;
    var occupantInfo = occupantSelectionInfo.find(function (occInfo) {
      return occInfo.roomId === roomId;
    });
    return occupantInfo ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, roomInfo, {
      occupantInfo: occupantInfo,
      active: true,
      hideOption: roomId === 0 ? true : false
    }) : Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, roomInfo, {
      occupantInfo: defaultRoom,
      active: roomId + 1 <= activeRooms,
      hideOption: roomId === 0 ? true : false
    });
  });
  return currentRoomInfo;
});

/***/ })

})
//# sourceMappingURL=_app.js.e7474d29d0b8d4de7ae6.hot-update.js.map
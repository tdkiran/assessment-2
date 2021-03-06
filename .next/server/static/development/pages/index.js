module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

//Config
//Default Room
const defaultNumberOfRooms = 4;

const createDefaultRooms = (current, index) => ({
  roomId: index,
  title: `Room ${index + 1}`
});

const defaultRoomInfo = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()({
  length: defaultNumberOfRooms
}, createDefaultRooms);
const defaultSelectedRoomId = 0; // Default Occupant config

const defaultAdultsOccupent = 1;
const defaultChild = 0;
const defaultOccupent = {
  defaultAdultsOccupent,
  defaultChild
}; //Occupant selections

const listOfAdults = [1, 2];
const listOfChildrens = [0, 1, 2];

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room */ "./components/booking/room.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/Users/tdkiran/Desktop/assessment-2/components/booking/booking.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



const BookingContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "booking__BookingContainer",
  componentId: "sc-1yql2l7-0"
})(["display:flex;flex-direction:column;align-items:start"]);
const RoomsContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "booking__RoomsContainer",
  componentId: "sc-1yql2l7-1"
})(["display:flex;"]);
const SubmitForm = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.button.withConfig({
  displayName: "booking__SubmitForm",
  componentId: "sc-1yql2l7-2"
})(["padding:10px;margin-left:10px;border:solid 2px Gray;border-radius:5px;background-color:#ddd;font-weight:bold;"]);
class Booking extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "saveBooking", () => {
      const {
        appState
      } = this.props;
      localStorage.setItem('bookings', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(appState));
      alert('Current selection have been saved');
    });
  }

  componentDidMount() {
    const {
      initState
    } = this.props;
    const localState = JSON.parse(localStorage.getItem('bookings')) || null;

    if (localState) {
      initState(localState);
    }
  }

  render() {
    const {
      bookingInfo,
      selectRoom,
      deSelectRoom,
      selectOccupant
    } = this.props;
    return __jsx(BookingContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(RoomsContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, bookingInfo.map(room => __jsx(_room__WEBPACK_IMPORTED_MODULE_4__["Room"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, room, {
      selectRoom: selectRoom,
      deSelectRoom: deSelectRoom,
      selectOccupant: selectOccupant,
      key: room.roomId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })))), __jsx(SubmitForm, {
      type: "submit",
      "data-testid": "submit",
      onClick: this.saveBooking,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Submit"));
  }

}

/***/ }),

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app_config */ "./app_config/index.js");


var _jsxFileName = "/Users/tdkiran/Desktop/assessment-2/components/booking/room-form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const RoomFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "room-form__RoomFormContainer",
  componentId: "sc-16rbohw-0"
})(["display:flex;justify-content:space-between;"]);
const FormItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "room-form__FormItem",
  componentId: "sc-16rbohw-1"
})(["padding:10px;"]);

const occupantOptionsTemplate = count => __jsx("option", {
  value: count,
  key: count,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, count);

class RoomForm extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleOccupantSelection", e => {
      const {
        selectOccupant,
        occupantInfo,
        roomId
      } = this.props;
      const occupantSelectionInfo = e.target.dataset.type === 'adult' ? {
        adult: Number(e.target.value),
        children: occupantInfo.children
      } : {
        adult: occupantInfo.adult,
        children: Number(e.target.value)
      };
      selectOccupant(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        roomId
      }, occupantSelectionInfo));
    });
  }

  render() {
    const {
      occupantInfo: {
        adult,
        children
      },
      active,
      roomId
    } = this.props;
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
      for: `adult-occupant-selection-room-${roomId}`,
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
      id: `adult-occupant-selection-room-${roomId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, _app_config__WEBPACK_IMPORTED_MODULE_4__["listOfAdults"] && _app_config__WEBPACK_IMPORTED_MODULE_4__["listOfAdults"].map(occupantOptionsTemplate))), __jsx(FormItem, {
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
      for: `children-occupant-selection-room-${roomId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Children"), " ", __jsx("br", {
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
      id: `children-occupant-selection-room-${roomId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, _app_config__WEBPACK_IMPORTED_MODULE_4__["listOfChildrens"] && _app_config__WEBPACK_IMPORTED_MODULE_4__["listOfChildrens"].map(occupantOptionsTemplate))));
  }

}

/***/ }),

/***/ "./components/booking/room.js":
/*!************************************!*\
  !*** ./components/booking/room.js ***!
  \************************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/card */ "./components/common/card.js");
/* harmony import */ var _room_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-form */ "./components/booking/room-form.js");

var _jsxFileName = "/Users/tdkiran/Desktop/assessment-2/components/booking/room.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Room extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleOccupantSelection", () => {
      this.props.selectOccupant(this.props.roomId);
    });
  }

  render() {
    const {
      roomId,
      title,
      hideOption,
      selectRoom,
      selectOccupant,
      active,
      deSelectRoom,
      occupantInfo
    } = this.props;
    return __jsx(_common_card__WEBPACK_IMPORTED_MODULE_2__["AppCard"], {
      roomId: roomId,
      title: title,
      hideOption: hideOption,
      active: active,
      selectRoom: selectRoom,
      deSelectRoom: deSelectRoom,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(_room_form__WEBPACK_IMPORTED_MODULE_3__["RoomForm"], {
      selectOccupant: selectOccupant,
      occupantInfo: occupantInfo,
      roomId: roomId,
      active: active,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./components/common/card.js":
/*!***********************************!*\
  !*** ./components/common/card.js ***!
  \***********************************/
/*! exports provided: AppCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCard", function() { return AppCard; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/tdkiran/Desktop/assessment-2/components/common/card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Card = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "card__Card",
  componentId: "sc-1g0x190-0"
})(["border:2px solid #ddd;border-radius:5px;margin:10px;", ""], props => props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background:#ccc;border-color:#ccc;"]));
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "card__CardTitle",
  componentId: "sc-1g0x190-1"
})(["font-size:12px;font-weight:bold;padding:5px;border-top-right-radius:3px;border-top-left-radius:3px;background:#ddd;", ""], props => props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["background:#ccc;"]));
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "card__CardContent",
  componentId: "sc-1g0x190-2"
})(["padding:10px;", ""], props => props.disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["pointer-events:none;"]));
class AppCard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", e => {
      const {
        roomId,
        deSelectRoom,
        selectRoom
      } = this.props;

      if (e.target.checked) {
        selectRoom(roomId);
      } else {
        deSelectRoom(roomId);
      }

      ;
    });
  }

  render() {
    const {
      title,
      children,
      hideOption,
      active,
      roomId
    } = this.props;
    return __jsx(Card, {
      disabled: !active,
      "data-testid": `room-${roomId}`,
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
      id: `check-room-${roomId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx("label", {
      for: `check-room-${roomId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, " ", title, " ")), __jsx(CardContent, {
      disabled: !active,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, children));
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_booking_booking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/booking/booking */ "./components/booking/booking.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _reducers_actions_creators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/actions-creators */ "./reducers/actions-creators.js");




const mapDispatchToProps = {
  selectRoom: _reducers_actions_creators__WEBPACK_IMPORTED_MODULE_3__["selectRoom"],
  deSelectRoom: _reducers_actions_creators__WEBPACK_IMPORTED_MODULE_3__["deSelectRoom"],
  selectOccupant: _reducers_actions_creators__WEBPACK_IMPORTED_MODULE_3__["selectOccupant"],
  initState: _reducers_actions_creators__WEBPACK_IMPORTED_MODULE_3__["initState"]
};

const mapStateToProps = state => ({
  appState: state,
  bookingInfo: Object(_reducers__WEBPACK_IMPORTED_MODULE_2__["roomInfo"])(state)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_booking_booking__WEBPACK_IMPORTED_MODULE_1__["Booking"]));

/***/ }),

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
const actionTypes = {
  SELECT_ROOM: 'SELECT_ROOM',
  DESELECT_ROOM: 'DESELECT_ROOM',
  RESET_SELECTION: 'RESET_SELECTION',
  SELECT_OCCUPANT: 'SELECT_OCCUPANT',
  INIT_STATE: 'INIT_STATE'
}; // ACTIONS

const selectRoom = roomId => {
  return {
    type: actionTypes.SELECT_ROOM,
    roomId
  };
};
const deSelectRoom = roomId => {
  return {
    type: actionTypes.DESELECT_ROOM,
    roomId
  };
};
const resetSelection = () => {
  return {
    type: actionTypes.RESET_SELECTION
  };
};
const selectOccupant = occupantInfo => {
  return {
    type: actionTypes.SELECT_OCCUPANT,
    occupantInfo
  };
};
const initState = state => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: actionTypes.INIT_STATE
  }, state);
};

/***/ }),

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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_creators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions-creators */ "./reducers/actions-creators.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app_config */ "./app_config/index.js");






function activeRooms(state = 1, action) {
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

function occupantSelectionInfo(state = [{
  adult: 1,
  children: 0,
  roomId: 0
}], action) {
  switch (action.type) {
    case _actions_creators__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].SELECT_OCCUPANT:
      {
        const newOccupantInfo = state.filter(occupantInfo => occupantInfo.roomId !== action.occupantInfo.roomId).concat([action.occupantInfo]);
        return newOccupantInfo;
      }

    case _actions_creators__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].SELECT_ROOM:
      {
        const activeRooms = action.roomId;
        return state.filter(occupantInfo => occupantInfo.roomId <= activeRooms);
      }

    case _actions_creators__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].DESELECT_ROOM:
      {
        const activeRooms = action.roomId;
        return state.filter(occupantInfo => occupantInfo.roomId < activeRooms);
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


const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  activeRooms,
  occupantSelectionInfo
});
/* harmony default export */ __webpack_exports__["default"] = (reducer); // selector

const getActiveRooms = state => state.activeRooms;
const getOccupantSelectionInfo = state => state.occupantSelectionInfo;
const roomInfo = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getActiveRooms, getOccupantSelectionInfo, (activeRooms, occupantSelectionInfo) => {
  const defaultRoom = {
    adult: 1,
    children: 0
  };
  const currentRoomInfo = _app_config__WEBPACK_IMPORTED_MODULE_4__["defaultRoomInfo"].map(roomInfo => {
    const roomId = roomInfo.roomId;
    const occupantInfo = occupantSelectionInfo.find(occInfo => occInfo.roomId === roomId);
    return occupantInfo ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, roomInfo, {
      occupantInfo,
      active: true,
      hideOption: roomId === _app_config__WEBPACK_IMPORTED_MODULE_4__["defaultSelectedRoomId"] ? true : false
    }) : Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, roomInfo, {
      occupantInfo: defaultRoom,
      active: roomId + 1 <= activeRooms,
      hideOption: roomId === 0 ? true : false
    });
  });
  return currentRoomInfo;
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tdkiran/Desktop/assessment-2/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
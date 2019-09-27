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



var _jsxFileName = "/Users/tdkiran/Desktop/with-redux/components/booking/booking.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



const BookingContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
display: flex;
flex-direction: column;
align-items: start
`;
const RoomsContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
    display: flex;
`;
class Booking extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "saveBooking", () => {
      const {
        appState
      } = this.props;
      localStorage.setItem('bookings', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(appState));
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

  onSelectionChange(room, selected) {
    const {
      rooms: _rooms,
      selectRoom,
      deSelectRoom,
      resetSelection
    } = this.props;

    const rooms = _rooms.filter(r => r.available);

    const index = rooms.indexOf(room);
    rooms.slice(0, index + 1).forEach(({
      roomId
    }) => selectRoom(roomId));
    rooms.slice(index + 1).forEach(({
      roomId
    }) => deSelectRoom(roomId));

    if (!selected) {
      deSelectRoom(room.roomId);
    }
  }

  render() {
    const {
      rooms,
      selectedRoomIds = [],
      selectOccupant
    } = this.props;
    return __jsx(BookingContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(RoomsContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, rooms.map(room => {
      return __jsx(_room__WEBPACK_IMPORTED_MODULE_4__["Room"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, room, {
        key: room.roomId,
        selectOccupant: selectOccupant,
        selected: selectedRoomIds.includes(room.roomId),
        onSelectionChange: this.onSelectionChange.bind(this, room),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }));
    })), __jsx("button", {
      type: "submit",
      onClick: this.saveBooking,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/tdkiran/Desktop/with-redux/components/booking/room-form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RoomFormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    display: flex;
    justify-content: space-between;
`;
const FormItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    padding: 10px;
`;
class RoomForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  onChange(type, e) {
    const {
      selectOccupant
    } = this.props;
    selectOccupant(type, e.target.value);
  }

  render() {
    const {
      occupants = {},
      selected
    } = this.props;
    return __jsx(RoomFormContainer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(FormItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Adult ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), "(18+)"), __jsx("select", {
      defaultValue: occupants.adult || '',
      onChange: this.onChange.bind(this, 'adult'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "1"), selected && __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "2"))), __jsx(FormItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Children ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), "(0-17)"), __jsx("select", {
      defaultValue: occupants.children || '',
      onChange: this.onChange.bind(this, 'children'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "0"), selected && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "1"), __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "2")))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/card */ "./components/common/card.js");
/* harmony import */ var _room_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-form */ "./components/booking/room-form.js");
var _jsxFileName = "/Users/tdkiran/Desktop/with-redux/components/booking/room.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Room extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      roomId,
      title,
      available,
      selected,
      onSelectionChange,
      selectOccupant,
      occupants = {}
    } = this.props;
    return __jsx(_common_card__WEBPACK_IMPORTED_MODULE_1__["AppCard"], {
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
    }, __jsx(_room_form__WEBPACK_IMPORTED_MODULE_2__["RoomForm"], {
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

var _jsxFileName = "/Users/tdkiran/Desktop/with-redux/components/common/card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Card = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    border: 2px solid #ddd;
    border-radius: 5px;
    margin: 10px;

    ${props => props.disabled && styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
        background: #ccc;
        border-color: #ccc;
    `}
`;
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    background: #ddd;

    ${props => props.disabled && styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
        background: #ccc;
    `}
`;
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    padding: 10px;

    ${props => props.disabled && styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
        pointer-events: none;
    `}
`;
class AppCard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.selected !== nextProps.selected) {
      return {
        selected: nextProps.selected
      };
    }

    return null;
  }

  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleSelection", () => {
      const {
        selected
      } = this.props;
      this.props.onSelectionChange(!selected);
    });

    this.state = {
      selected: false
    };
  }

  render() {
    const {
      title,
      children,
      selectable,
      selected,
      testId
    } = this.props;
    const shouldDisable = selectable ? !this.state.selected : false;
    return __jsx(Card, {
      disabled: shouldDisable,
      "data-testid": `room-${testId}`,
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

}

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_booking_booking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/booking/booking */ "./components/booking/booking.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store.js");




const mapDispatchToProps = {
  selectRoom: _store__WEBPACK_IMPORTED_MODULE_3__["selectRoom"],
  deSelectRoom: _store__WEBPACK_IMPORTED_MODULE_3__["deSelectRoom"],
  resetSelection: _store__WEBPACK_IMPORTED_MODULE_3__["resetSelection"],
  selectOccupant: _store__WEBPACK_IMPORTED_MODULE_3__["selectOccupant"],
  initState: _store__WEBPACK_IMPORTED_MODULE_3__["initState"]
};

const mapStateToProps = state => ({
  appState: state,
  rooms: Object(_store__WEBPACK_IMPORTED_MODULE_3__["getRooms"])(state),
  selectedRooms: Object(_store__WEBPACK_IMPORTED_MODULE_3__["getSelectedRooms"])(state),
  selectedRoomIds: Object(_store__WEBPACK_IMPORTED_MODULE_3__["getSelectedRoomIds"])(state),
  occupants: Object(_store__WEBPACK_IMPORTED_MODULE_3__["getOccupants"])(state)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_booking_booking__WEBPACK_IMPORTED_MODULE_2__["Booking"]));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, selectRoom, deSelectRoom, resetSelection, selectOccupant, initState, getSelectedRoomIds, getSelectedRooms, getOccupants, getRooms, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRoom", function() { return selectRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deSelectRoom", function() { return deSelectRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSelection", function() { return resetSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOccupant", function() { return selectOccupant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedRoomIds", function() { return getSelectedRoomIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedRooms", function() { return getSelectedRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOccupants", function() { return getOccupants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRooms", function() { return getRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);





function generateRooms() {
  const TOTAL_ROOMS = 4;
  const rooms = Array(TOTAL_ROOMS).fill(1).map((v, i) => ({
    roomId: i,
    title: `Room ${i + v}`,
    available: true,
    selected: false,
    adults: 0,
    children: 0
  })).reduce((byId, room) => {
    byId[room.roomId] = room;
    return byId;
  }, {});
  rooms[0].available = false;
  return rooms;
}

const AppInitialState = {
  rooms: generateRooms(),
  selectedRoomIds: [],
  occupants: {}
};
const actionTypes = {
  SELECT_ROOM: 'SELECT_ROOM',
  DESELECT_ROOM: 'DESELECT_ROOM',
  RESET_SELECTION: 'RESET_SELECTION',
  SELECT_OCCUPANT: 'SELECT_OCCUPANT',
  INIT_STATE: 'INIT_STATE'
}; // REDUCERS

const reducer = (state = AppInitialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ROOM:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        selectedRoomIds: [...state.selectedRoomIds, action.roomId]
      });

    case actionTypes.DESELECT_ROOM:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        selectedRoomIds: state.selectedRoomIds.filter(roomId => roomId !== action.roomId)
      });

    case actionTypes.RESET_SELECTION:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        selectedRoomIds: [],
        occupants: {}
      });

    case actionTypes.SELECT_OCCUPANT:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        occupants: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.occupants, {
          [action.roomId]: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.occupants[action.roomId], {
            [action.occupant_type]: action.qty
          })
        })
      });

    case actionTypes.INIT_STATE:
      return action.state;

    default:
      return state;
  }
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
const selectOccupant = (roomId, occupant_type, qty) => {
  return {
    type: actionTypes.SELECT_OCCUPANT,
    roomId,
    occupant_type,
    qty
  };
};
const initState = state => {
  return {
    type: actionTypes.INIT_STATE,
    state
  };
}; // selector

const getSelectedRoomIds = state => state.selectedRoomIds;
const getSelectedRooms = state => state.selectedRoomIds.map(roomId => state.rooms[roomId]);
const getOccupants = state => state.occupants;
const getRooms = state => _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(state.rooms); // init store

function initializeStore(initialState = AppInitialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])()));
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tdkiran/Desktop/with-redux/pages/index.js */"./pages/index.js");


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

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

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

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

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
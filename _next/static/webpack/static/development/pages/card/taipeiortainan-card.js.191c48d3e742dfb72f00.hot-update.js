webpackHotUpdate("static/development/pages/card/taipeiortainan-card.js",{

/***/ "./pages/card/taipeiortainan-card.tsx":
/*!********************************************!*\
  !*** ./pages/card/taipeiortainan-card.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaipeiOrTainanCard; });
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tabs/style */ "./node_modules/antd/lib/tabs/style/index.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/Card */ "./layouts/Card.tsx");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Section */ "./components/Section.tsx");
/* harmony import */ var _components_ClaimCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ClaimCard */ "./components/ClaimCard.tsx");
/* harmony import */ var _components_Discounts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Discounts */ "./components/Discounts.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Profile */ "./components/Profile.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./utils.ts");
/* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../fakeData */ "./fakeData.ts");


var _jsxFileName = "/Users/tse/Code/VisuallyLab/BiiMe-store-web/pages/card/taipeiortainan-card.tsx";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var CardCertificationName;

(function (CardCertificationName) {
  CardCertificationName["Taipei"] = "Taipei Card";
  CardCertificationName["Tainan"] = "Tainan Card";
})(CardCertificationName || (CardCertificationName = {}));

function TaipeiOrTainanCard(_ref) {
  var card = _ref.card,
      style = _ref.style,
      userInject = _ref.userInject;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_fakeData__WEBPACK_IMPORTED_MODULE_9__["fakeUser"]),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var qs = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseQs"])(window.location.href);
    setUser(_objectSpread({}, _fakeData__WEBPACK_IMPORTED_MODULE_9__["fakeUser"], userInject, qs));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_layouts_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "BiiMe - ".concat(card.name),
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fullscreen: true,
    first: true,
    alignItems: "flex-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a, {
    defaultActiveKey: "1",
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane, {
    tab: "Card",
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ClaimCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    card: card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Discounts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    discounts: _fakeData__WEBPACK_IMPORTED_MODULE_9__["discounts"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane, {
    tab: "Profile",
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Profile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })))));
}

TaipeiOrTainanCard.getInitialProps = function (_ref2) {
  var query = _ref2.query;

  switch (query.certificationName) {
    case CardCertificationName.Tainan:
      {
        return {
          style: {
            background: 'rgba(249, 121, 81, 0.42)'
          },
          card: _fakeData__WEBPACK_IMPORTED_MODULE_9__["tainanCard"],
          user: {
            issuerName: 'Tainan City Government'
          }
        };
      }

    case CardCertificationName.Taipei:
      {
        return {
          style: {
            background: 'rgba(31, 172, 227, 0.42)'
          },
          card: _fakeData__WEBPACK_IMPORTED_MODULE_9__["taipeiCard"],
          user: {
            issuerName: 'Taipei City Government'
          }
        };
      }
  }
};
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/card/taipeiortainan-card")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=taipeiortainan-card.js.191c48d3e742dfb72f00.hot-update.js.map
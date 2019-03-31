webpackHotUpdate("static/development/pages/store-list.js",{

/***/ "./pages/store-list.tsx":
/*!******************************!*\
  !*** ./pages/store-list.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoreList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Card */ "./layouts/Card.tsx");
/* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fakeData */ "./fakeData.ts");
var _jsxFileName = "/Users/tse/Code/VisuallyLab/BiiMe-store-web/pages/store-list.tsx";




function StoreList() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _fakeData__WEBPACK_IMPORTED_MODULE_3__["discounts"].map(function (data, idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "".concat(idx, ": ").concat(data.storeName),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4098976623", [data.cover]]]) + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4098976623", [data.cover]]]) + " " + "store-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4098976623", [data.cover]]]) + " " + "title-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4098976623", [data.cover]]]) + " " + "cover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4098976623", [data.cover]]]) + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, data.storeName)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: data.qrcode,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4098976623", [data.cover]]]) + " " + "qrcode",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "4098976623",
      css: ".container.__jsx-style-dynamic-selector{margin:16px 0;padding:16px;border-radius:10px;background-color:white;}.title-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 0;line-height:1.2;}.store-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7f7f7f;border-bottom:solid 0.5px;}.store-container.__jsx-style-dynamic-selector:last-child{border-bottom:none;}.title.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.85);font-weight:500;font-size:16px;margin-bottom:0.3em;}.cover.__jsx-style-dynamic-selector{background:white url(".concat(data.cover, ") no-repeat center / contain;border:solid 1px rgba(127,127,127,0.22);margin-right:0.5em;min-width:40px;min-height:40px;}.qrcode.__jsx-style-dynamic-selector{width:100px;height:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvcGFnZXMvc3RvcmUtbGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JzQixBQUc2QixBQU9ELEFBT0EsQUFRTSxBQUlPLEFBT29ELEFBUWxFLFlBQ0MsRUF6Q0EsS0FzQmYsSUFJa0IsRUFnQmxCLEVBekNxQixZQTBCSixPQXpCUSxRQTBCSCxlQXpCdEIsS0FJcUIsQUFPRyxBQWV4QixJQUk2Qyx3Q0FDeEIsbUJBQ0osZUFwQkksQUFxQkgsZUE1QkQsQ0E2QmpCLGNBNUJrQixnQkFDbEIsK0NBTWdCLGNBQ1ksMEJBQzVCIiwiZmlsZSI6Ii9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvcGFnZXMvc3RvcmUtbGlzdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZExheW91dCBmcm9tICcuLi9sYXlvdXRzL0NhcmQnO1xuXG5pbXBvcnQgeyBkaXNjb3VudHMgfSBmcm9tICcuLi9mYWtlRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0b3JlTGlzdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZExheW91dD5cbiAgICAgIHtkaXNjb3VudHMubWFwKChkYXRhLCBpZHgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2Ake2lkeH06ICR7ZGF0YS5zdG9yZU5hbWV9YH0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIiAvPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS5zdG9yZU5hbWV9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEucXJjb2RlfSBjbGFzc05hbWU9XCJxcmNvZGVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdG9yZS1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogIzdmN2Y3ZjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdG9yZS1jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY292ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoJHtkYXRhLmNvdmVyfSkgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XG4gICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTI3LCAxMjcsIDEyNywgMC4yMik7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnFyY29kZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9DYXJkTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/pages/store-list.tsx */"),
      dynamic: [data.cover],
      __self: this
    }));
  }));
}
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/store-list")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=store-list.js.df81d75a2b134278edae.hot-update.js.map
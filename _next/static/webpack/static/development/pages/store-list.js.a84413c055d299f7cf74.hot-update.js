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
      className: "jsx-155190146" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-155190146" + " " + "store-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-155190146" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, data.storeName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: data.qrcode,
      className: "jsx-155190146" + " " + "qrcode",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "155190146",
      css: ".container.jsx-155190146{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7f7f7f;border-bottom:solid 0.5px;margin:16px 0;padding:16px;border-radius:10px;background-color:white;}.container.jsx-155190146:last-child{border-bottom:none;}.title.jsx-155190146{color:rgba(0,0,0,0.85);font-weight:500;font-size:16px;margin-bottom:0.3em;}.qrcode.jsx-155190146{width:100px;height:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvcGFnZXMvc3RvcmUtbGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYXNCLEFBRzRCLEFBZ0JNLEFBSU8sQUFPZCxZQUNDLE9BWGYsSUFJa0IsRUFRbEIsY0FQaUIsZUFDSyxvQkF0QkUsQUF1QnhCLDhFQXRCcUIsNkZBQ0wsY0FDWSwwQkFFWixjQUNELGFBQ00sbUJBQ0ksdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvcGFnZXMvc3RvcmUtbGlzdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZExheW91dCBmcm9tICcuLi9sYXlvdXRzL0NhcmQnO1xuXG5pbXBvcnQgeyBkaXNjb3VudHMgfSBmcm9tICcuLi9mYWtlRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0b3JlTGlzdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZExheW91dD5cbiAgICAgIHtkaXNjb3VudHMubWFwKChkYXRhLCBpZHgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2Ake2lkeH06ICR7ZGF0YS5zdG9yZU5hbWV9YH0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLnN0b3JlTmFtZX08L2gzPlxuICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEucXJjb2RlfSBjbGFzc05hbWU9XCJxcmNvZGVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogIzdmN2Y3ZjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHg7XG5cbiAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RvcmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xcmNvZGUge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvQ2FyZExheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/pages/store-list.tsx */",
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
//# sourceMappingURL=store-list.js.a84413c055d299f7cf74.hot-update.js.map
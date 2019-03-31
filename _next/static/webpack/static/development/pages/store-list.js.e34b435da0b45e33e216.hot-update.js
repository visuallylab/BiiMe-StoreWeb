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
      className: "jsx-3273106375" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-3273106375" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, data.storeName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: data.qrcode,
      className: "jsx-3273106375" + " " + "qrcode",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3273106375",
      css: ".container.jsx-3273106375{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7f7f7f;border-bottom:solid 0.5px;margin:32px 0;padding:16px;border-radius:10px;background-color:white;}.container.jsx-3273106375:last-child{border-bottom:none;}.title.jsx-3273106375{color:rgba(0,0,0,0.85);font-weight:500;font-size:16px;margin-bottom:0.3em;}.qrcode.jsx-3273106375{width:100px;height:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvcGFnZXMvc3RvcmUtbGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3NCLEFBRzRCLEFBYU0sQUFJTyxBQU9kLFlBQ0MsT0FYZixJQUlrQixFQVFsQixjQVBpQixlQUNLLG9CQW5CRSxBQW9CeEIsOEVBbkJxQiw2RkFDTCxjQUNZLDBCQUVaLGNBQ0QsYUFDTSxtQkFDSSx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL1Zpc3VhbGx5TGFiL0JpaU1lLXN0b3JlLXdlYi9wYWdlcy9zdG9yZS1saXN0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkTGF5b3V0IGZyb20gJy4uL2xheW91dHMvQ2FyZCc7XG5cbmltcG9ydCB7IGRpc2NvdW50cyB9IGZyb20gJy4uL2Zha2VEYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcmVMaXN0KCkge1xuICByZXR1cm4gKFxuICAgIDxDYXJkTGF5b3V0PlxuICAgICAge2Rpc2NvdW50cy5tYXAoKGRhdGEsIGlkeCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YCR7aWR4fTogJHtkYXRhLnN0b3JlTmFtZX1gfSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS5zdG9yZU5hbWV9PC9oMz5cbiAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5xcmNvZGV9IGNsYXNzTmFtZT1cInFyY29kZVwiIC8+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjN2Y3ZjdmO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweDtcblxuICAgICAgICAgICAgICBtYXJnaW46IDMycHggMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucXJjb2RlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0NhcmRMYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/pages/store-list.tsx */",
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
//# sourceMappingURL=store-list.js.e34b435da0b45e33e216.hot-update.js.map
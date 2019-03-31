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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4098976623", [data.cover]]]) + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, data.storeName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: data.qrcode,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4098976623", [data.cover]]]) + " " + "qrcode",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "4098976623",
      css: ".container.__jsx-style-dynamic-selector{margin:16px 0;padding:16px;border-radius:10px;background-color:white;}.title-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 0;line-height:1.2;}.store-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7f7f7f;border-bottom:solid 0.5px;}.store-container.__jsx-style-dynamic-selector:last-child{border-bottom:none;}.title.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.85);font-weight:500;font-size:16px;margin-bottom:0.3em;}.cover.__jsx-style-dynamic-selector{background:white url(".concat(data.cover, ") no-repeat center / contain;border:solid 1px rgba(127,127,127,0.22);margin-right:0.5em;min-width:40px;min-height:40px;}.qrcode.__jsx-style-dynamic-selector{width:100px;height:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvcGFnZXMvc3RvcmUtbGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3NCLEFBRzZCLEFBT0QsQUFPQSxBQVFNLEFBSU8sQUFPb0QsQUFRbEUsWUFDQyxFQXpDQSxLQXNCZixJQUlrQixFQWdCbEIsRUF6Q3FCLFlBMEJKLE9BekJRLFFBMEJILGVBekJ0QixLQUlxQixBQU9HLEFBZXhCLElBSTZDLHdDQUN4QixtQkFDSixlQXBCSSxBQXFCSCxlQTVCRCxDQTZCakIsY0E1QmtCLGdCQUNsQiwrQ0FNZ0IsY0FDWSwwQkFDNUIiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL1Zpc3VhbGx5TGFiL0JpaU1lLXN0b3JlLXdlYi9wYWdlcy9zdG9yZS1saXN0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkTGF5b3V0IGZyb20gJy4uL2xheW91dHMvQ2FyZCc7XG5cbmltcG9ydCB7IGRpc2NvdW50cyB9IGZyb20gJy4uL2Zha2VEYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcmVMaXN0KCkge1xuICByZXR1cm4gKFxuICAgIDxDYXJkTGF5b3V0PlxuICAgICAge2Rpc2NvdW50cy5tYXAoKGRhdGEsIGlkeCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YCR7aWR4fTogJHtkYXRhLnN0b3JlTmFtZX1gfSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3JlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS5zdG9yZU5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnFyY29kZX0gY2xhc3NOYW1lPVwicXJjb2RlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RvcmUtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICM3ZjdmN2Y7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RvcmUtY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgdXJsKCR7ZGF0YS5jb3Zlcn0pIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xuICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDEyNywgMTI3LCAxMjcsIDAuMjIpO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5xcmNvZGUge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvQ2FyZExheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/pages/store-list.tsx */"),
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
//# sourceMappingURL=store-list.js.4e7e18b31835ca9794b8.hot-update.js.map
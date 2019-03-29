webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './components/Discounts.tsx':
    /*!**********************************!*\
  !*** ./components/Discounts.tsx ***!
  \**********************************/
    /*! exports provided: default, Discount */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return Discounts;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'Discount',
        function() {
          return Discount;
        },
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! styled-jsx/style */ './node_modules/styled-jsx/style.js',
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__,
      );
      var _jsxFileName =
        '/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx';

      function Discounts(_ref) {
        var discounts = _ref.discounts;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className: 'jsx-1825507181' + ' ' + 'container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'h3',
            {
              className: 'jsx-1825507181',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14,
              },
              __self: this,
            },
            'Discounts',
          ),
          discounts.map(function(discount, idx) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              Discount,
              {
                key: ''.concat(idx, ': ').concat(discount.storeName),
                data: discount,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                },
                __self: this,
              },
            );
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              styleId: '1825507181',
              css:
                '.container.jsx-1825507181{margin:16px 0;padding:16px;border-radius:10px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHeUIsY0FDRCxhQUNNLG1CQUNJLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvRGlzY291bnRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgVERpc2NvdW50ID0ge1xuICBjb3Zlcjogc3RyaW5nO1xuICBzdG9yZU5hbWU6IHN0cmluZztcbiAgZGlzY291bnRUZXh0OiBzdHJpbmc7XG59O1xuXG50eXBlIFRQcm9wcyA9IHtcbiAgZGlzY291bnRzOiBURGlzY291bnRbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc2NvdW50cyh7IGRpc2NvdW50cyB9OiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgzPkRpc2NvdW50czwvaDM+XG4gICAgICB7ZGlzY291bnRzLm1hcCgoZGlzY291bnQsIGlkeCkgPT4gKFxuICAgICAgICA8RGlzY291bnQga2V5PXtgJHtpZHh9OiAke2Rpc2NvdW50LnN0b3JlTmFtZX1gfSBkYXRhPXtkaXNjb3VudH0gLz5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERpc2NvdW50KHsgZGF0YSB9OiB7IGRhdGE6IFREaXNjb3VudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEuc3RvcmVOYW1lfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGF0YS5kaXNjb3VudFRleHR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjN2Y3ZjdmO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgdXJsKCR7ZGF0YS5jb3Zlcn0pIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTI3LCAxMjcsIDEyNywgMC4yMik7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
              __self: this,
            },
          ),
        );
      }
      function Discount(_ref2) {
        var data = _ref2.data;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className:
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([
                ['1821735951', [data.cover]],
              ]) +
              ' ' +
              'container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
            className:
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([
                ['1821735951', [data.cover]],
              ]) +
              ' ' +
              'cover',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
            },
            __self: this,
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                [['1821735951', [data.cover]]],
              ),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h3',
              {
                className:
                  styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                    [['1821735951', [data.cover]]],
                  ) +
                  ' ' +
                  'title',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                },
                __self: this,
              },
              data.storeName,
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className:
                  styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                    [['1821735951', [data.cover]]],
                  ) +
                  ' ' +
                  'description',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                },
                __self: this,
              },
              data.discountText,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              styleId: '1821735951',
              css: '.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7f7f7f;padding:12px 0;border-bottom:solid 0.5px;line-height:1.2;}.container.__jsx-style-dynamic-selector:last-child{border-bottom:none;}.title.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.85);font-weight:500;font-size:16px;margin-bottom:0.3em;}.description.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.45);font-size:14px;}.cover.__jsx-style-dynamic-selector{background:white url('.concat(
                data.cover,
                ') no-repeat center / contain;border:solid 1px rgba(127,127,127,0.22);margin-right:0.5em;width:25%;min-width:80px;min-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHd0IsQUFRTSxBQUlPLEFBT0EsQUFLb0QsbUJBZmhGLElBSWtCLEFBT0QsZUFDakIsQ0FQaUIsZUFDSyxvQkFkRCxBQWVyQixJQVM2Qyx3Q0FDeEIsbUJBQ1QsVUFDSyxlQUNDLEtBM0JGLFdBNEJoQixHQTNCaUIsZUFDVywwQkFDVixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL1Zpc3VhbGx5TGFiL0JpaU1lLXN0b3JlLXdlYi9jb21wb25lbnRzL0Rpc2NvdW50cy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFREaXNjb3VudCA9IHtcbiAgY292ZXI6IHN0cmluZztcbiAgc3RvcmVOYW1lOiBzdHJpbmc7XG4gIGRpc2NvdW50VGV4dDogc3RyaW5nO1xufTtcblxudHlwZSBUUHJvcHMgPSB7XG4gIGRpc2NvdW50czogVERpc2NvdW50W107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3VudHMoeyBkaXNjb3VudHMgfTogVFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMz5EaXNjb3VudHM8L2gzPlxuICAgICAge2Rpc2NvdW50cy5tYXAoKGRpc2NvdW50LCBpZHgpID0+IChcbiAgICAgICAgPERpc2NvdW50IGtleT17YCR7aWR4fTogJHtkaXNjb3VudC5zdG9yZU5hbWV9YH0gZGF0YT17ZGlzY291bnR9IC8+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3VudCh7IGRhdGEgfTogeyBkYXRhOiBURGlzY291bnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLnN0b3JlTmFtZX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2RhdGEuZGlzY291bnRUZXh0fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzdmN2Y3ZjtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY292ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlIHVybCgke2RhdGEuY292ZXJ9KSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDEyNywgMTI3LCAxMjcsIDAuMjIpO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
              ),
              dynamic: [data.cover],
              __self: this,
            },
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.567b1146a66cc49891df.hot-update.js.map

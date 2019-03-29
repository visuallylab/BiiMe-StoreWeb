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
                '.container.jsx-1825507181{margin:16px 0;padding:16px;border-radius:10px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHeUIsY0FDRCxhQUNNLG1CQUNJLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvRGlzY291bnRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgVERpc2NvdW50ID0ge1xuICBjb3Zlcjogc3RyaW5nO1xuICBzdG9yZU5hbWU6IHN0cmluZztcbiAgZGlzY291bnRUZXh0OiBzdHJpbmc7XG59O1xuXG50eXBlIFRQcm9wcyA9IHtcbiAgZGlzY291bnRzOiBURGlzY291bnRbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc2NvdW50cyh7IGRpc2NvdW50cyB9OiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgzPkRpc2NvdW50czwvaDM+XG4gICAgICB7ZGlzY291bnRzLm1hcCgoZGlzY291bnQsIGlkeCkgPT4gKFxuICAgICAgICA8RGlzY291bnQga2V5PXtgJHtpZHh9OiAke2Rpc2NvdW50LnN0b3JlTmFtZX1gfSBkYXRhPXtkaXNjb3VudH0gLz5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERpc2NvdW50KHsgZGF0YSB9OiB7IGRhdGE6IFREaXNjb3VudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEuc3RvcmVOYW1lfTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGF0YS5kaXNjb3VudFRleHR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjN2Y3ZjdmO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgdXJsKCR7ZGF0YS5jb3Zlcn0pIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMTI3LCAxMjcsIDEyNywgMC4yMik7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
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
                ['960749647', [data.cover]],
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
                ['960749647', [data.cover]],
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
                [['960749647', [data.cover]]],
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
                    [['960749647', [data.cover]]],
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
                    [['960749647', [data.cover]]],
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
              styleId: '960749647',
              css: '.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7f7f7f;padding:12px 0;border-bottom:solid 0.5px;line-height:1.2;}.container.__jsx-style-dynamic-selector:last-child{border-bottom:none;}.title.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.85);font-weight:500;font-size:16px;margin-bottom:0.3em;}.description.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.45);font-size:14px;}.cover.__jsx-style-dynamic-selector{background:white url('.concat(
                data.cover,
                ') no-repeat center / contain;border:solid 1px rgba(127,127,127,0.22);margin-right:0.5em;width:30%;height:80px;min-width:80px;min-height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHd0IsQUFRTSxBQUlPLEFBT0EsQUFLb0QsbUJBZmhGLElBSWtCLEFBT0QsZUFDakIsQ0FQaUIsZUFDSyxvQkFkRCxBQWVyQixJQVM2Qyx3Q0FDeEIsbUJBQ1QsVUFDRSxZQUNHLFFBM0JELE9BNEJFLE9BM0JELFNBNEJqQixNQTNCNEIsMEJBQ1YsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBURGlzY291bnQgPSB7XG4gIGNvdmVyOiBzdHJpbmc7XG4gIHN0b3JlTmFtZTogc3RyaW5nO1xuICBkaXNjb3VudFRleHQ6IHN0cmluZztcbn07XG5cbnR5cGUgVFByb3BzID0ge1xuICBkaXNjb3VudHM6IFREaXNjb3VudFtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzY291bnRzKHsgZGlzY291bnRzIH06IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDM+RGlzY291bnRzPC9oMz5cbiAgICAgIHtkaXNjb3VudHMubWFwKChkaXNjb3VudCwgaWR4KSA9PiAoXG4gICAgICAgIDxEaXNjb3VudCBrZXk9e2Ake2lkeH06ICR7ZGlzY291bnQuc3RvcmVOYW1lfWB9IGRhdGE9e2Rpc2NvdW50fSAvPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRGlzY291bnQoeyBkYXRhIH06IHsgZGF0YTogVERpc2NvdW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS5zdG9yZU5hbWV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkYXRhLmRpc2NvdW50VGV4dH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM3ZjdmN2Y7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoJHtkYXRhLmNvdmVyfSkgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgxMjcsIDEyNywgMTI3LCAwLjIyKTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
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
//# sourceMappingURL=taipei-card.js.cd8451037b0c68df703b.hot-update.js.map

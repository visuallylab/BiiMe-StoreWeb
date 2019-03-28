webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './components/Discounts.tsx':
    /*!**********************************!*\
  !*** ./components/Discounts.tsx ***!
  \**********************************/
    /*! exports provided: Discount, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'Discount',
        function() {
          return Discount;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return Discounts;
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

      function Discount(_ref) {
        var data = _ref.data;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className:
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([
                ['168933778', [data.cover]],
              ]) +
              ' ' +
              'container',
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
            className:
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([
                ['168933778', [data.cover]],
              ]) +
              ' ' +
              'cover',
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                [['168933778', [data.cover]]],
              ),
            },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h2',
              {
                className:
                  styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                    [['168933778', [data.cover]]],
                  ) +
                  ' ' +
                  'title',
              },
              data.storeName,
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className:
                  styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                    [['168933778', [data.cover]]],
                  ) +
                  ' ' +
                  'description',
              },
              data.discountText,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '168933778',
              dynamic: [data.cover],
            },
            '.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7F7F7F;padding:12px 0;border-bottom:solid .5px;}.container.__jsx-style-dynamic-selector:last-child{border-bottom:none;}.title.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.85);font-weight:500;font-size:16px;}.description.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.45);font-size:14px;}.cover.__jsx-style-dynamic-selector{background:white url('.concat(
              data.cover,
              ') no-repeat center / auto 95%;border:solid 1px #7F7F7F;margin-right:.5em;width:80px;height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHd0IsQUFPTSxBQUlPLEFBTUEsQUFLcUQsbUJBZGpGLElBSWtCLEFBTUQsZUFDakIsQ0FOaUIsZUFDakIsb0JBYnFCLEtBc0JNLHlCQUNQLGtCQUNQLFdBQ0MsWUFDZCxzQkF6QmdCLGNBQ0MsZUFDVSx5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL1Zpc3VhbGx5TGFiL0JpaU1lLXN0b3JlLXdlYi9jb21wb25lbnRzL0Rpc2NvdW50cy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFREaXNjb3VudCA9IHtcbiAgY292ZXI6IHN0cmluZztcbiAgc3RvcmVOYW1lOiBzdHJpbmc7XG4gIGRpc2NvdW50VGV4dDogc3RyaW5nO1xufTtcblxudHlwZSBUUHJvcHMgPSB7XG4gIGRpc2NvdW50czogVERpc2NvdW50W107XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRGlzY291bnQoeyBkYXRhIH06IHsgZGF0YTogVERpc2NvdW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS5zdG9yZU5hbWV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkYXRhLmRpc2NvdW50VGV4dH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM3RjdGN0Y7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIC41cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4OyBcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgdXJsKCR7ZGF0YS5jb3Zlcn0pIG5vLXJlcGVhdCBjZW50ZXIgLyBhdXRvIDk1JTtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjN0Y3RjdGO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzY291bnRzKHsgZGlzY291bnRzIH06IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICB7ZGlzY291bnRzLm1hcCgoZGlzY291bnQsIGlkeCkgPT4gKFxuICAgICAgICA8RGlzY291bnQga2V5PXtgJHtpZHh9OiAke2Rpc2NvdW50LnN0b3JlTmFtZX1gfSBkYXRhPXtkaXNjb3VudH0gLz5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
            ),
          ),
        );
      }
      function Discounts(_ref2) {
        var discounts = _ref2.discounts;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className: 'jsx-1825507181' + ' ' + 'container',
          },
          discounts.map(function(discount, idx) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              Discount,
              {
                key: ''.concat(idx, ': ').concat(discount.storeName),
                data: discount,
              },
            );
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '1825507181',
            },
            '.container.jsx-1825507181{margin:16px 0;padding:16px;border-radius:10px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEa0IsQUFHeUIsY0FDRCxhQUNNLG1CQUNJLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvRGlzY291bnRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgVERpc2NvdW50ID0ge1xuICBjb3Zlcjogc3RyaW5nO1xuICBzdG9yZU5hbWU6IHN0cmluZztcbiAgZGlzY291bnRUZXh0OiBzdHJpbmc7XG59O1xuXG50eXBlIFRQcm9wcyA9IHtcbiAgZGlzY291bnRzOiBURGlzY291bnRbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3VudCh7IGRhdGEgfTogeyBkYXRhOiBURGlzY291bnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntkYXRhLnN0b3JlTmFtZX08L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2RhdGEuZGlzY291bnRUZXh0fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzdGN0Y3RjtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgLjVweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7IFxuICAgICAgICB9XG5cbiAgICAgICAgLmNvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoJHtkYXRhLmNvdmVyfSkgbm8tcmVwZWF0IGNlbnRlciAvIGF1dG8gOTUlO1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM3RjdGN0Y7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3VudHMoeyBkaXNjb3VudHMgfTogVFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIHtkaXNjb3VudHMubWFwKChkaXNjb3VudCwgaWR4KSA9PiAoXG4gICAgICAgIDxEaXNjb3VudCBrZXk9e2Ake2lkeH06ICR7ZGlzY291bnQuc3RvcmVOYW1lfWB9IGRhdGE9e2Rpc2NvdW50fSAvPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.f3a724ffd0adc077cf21.hot-update.js.map

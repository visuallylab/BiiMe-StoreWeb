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
                ['268427808', [data.cover]],
              ]) +
              ' ' +
              'container',
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', {
            alt: 'store',
            src: data.cover,
            className:
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([
                ['268427808', [data.cover]],
              ]) +
              ' ' +
              'cover',
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                [['268427808', [data.cover]]],
              ),
            },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h2',
              {
                className:
                  styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                    [['268427808', [data.cover]]],
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
                    [['268427808', [data.cover]]],
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
              id: '268427808',
              dynamic: [data.cover],
            },
            '.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7F7F7F;padding:12px 0;border-bottom:solid .5px;}.container.__jsx-style-dynamic-selector:last-child{border-bottom:none;}.title.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.85);font-weight:500;font-size:16px;}.description.__jsx-style-dynamic-selector{color:rgba(0,0,0,0.45);font-size:14px;}.cover.__jsx-style-dynamic-selector{background:white url('.concat(
              data.cover,
              ') no-repeat center /contain;border:solid 1px;margin-right:.5em;width:80px;height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHd0IsQUFPTSxBQUlPLEFBTUEsQUFLbUQsbUJBZC9FLElBSWtCLEFBTUQsZUFDakIsQ0FOaUIsZUFDakIsb0JBYnFCLEdBc0JGLGlCQUNDLGtCQUNQLFdBQ0MsWUFDZCxnQ0F6QmdCLGNBQ0MsZUFDVSx5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL1Zpc3VhbGx5TGFiL0JpaU1lLXN0b3JlLXdlYi9jb21wb25lbnRzL0Rpc2NvdW50cy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFREaXNjb3VudCA9IHtcbiAgY292ZXI6IHN0cmluZztcbiAgc3RvcmVOYW1lOiBzdHJpbmc7XG4gIGRpc2NvdW50VGV4dDogc3RyaW5nO1xufTtcblxudHlwZSBUUHJvcHMgPSB7XG4gIGRpc2NvdW50czogVERpc2NvdW50W107XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRGlzY291bnQoeyBkYXRhIH06IHsgZGF0YTogVERpc2NvdW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJjb3ZlclwiIGFsdD1cInN0b3JlXCIgc3JjPXtkYXRhLmNvdmVyfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEuc3RvcmVOYW1lfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGF0YS5kaXNjb3VudFRleHR9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjN0Y3RjdGO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAuNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgXG4gICAgICAgIH1cblxuICAgICAgICAuY292ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlIHVybCgke2RhdGEuY292ZXJ9KSBuby1yZXBlYXQgY2VudGVyIC9jb250YWluO1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzY291bnRzKHsgZGlzY291bnRzIH06IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICB7ZGlzY291bnRzLm1hcCgoZGlzY291bnQsIGlkeCkgPT4gKFxuICAgICAgICA8RGlzY291bnQga2V5PXtgJHtpZHh9OiAke2Rpc2NvdW50LnN0b3JlTmFtZX1gfSBkYXRhPXtkaXNjb3VudH0gLz5cbiAgICAgICkpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
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
            '.container.jsx-1825507181{margin:16px 0;padding:16px;border-radius:10px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEa0IsQUFHeUIsY0FDRCxhQUNNLG1CQUNJLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvRGlzY291bnRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgVERpc2NvdW50ID0ge1xuICBjb3Zlcjogc3RyaW5nO1xuICBzdG9yZU5hbWU6IHN0cmluZztcbiAgZGlzY291bnRUZXh0OiBzdHJpbmc7XG59O1xuXG50eXBlIFRQcm9wcyA9IHtcbiAgZGlzY291bnRzOiBURGlzY291bnRbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3VudCh7IGRhdGEgfTogeyBkYXRhOiBURGlzY291bnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImNvdmVyXCIgYWx0PVwic3RvcmVcIiBzcmM9e2RhdGEuY292ZXJ9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS5zdG9yZU5hbWV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkYXRhLmRpc2NvdW50VGV4dH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM3RjdGN0Y7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIC41cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4OyBcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgdXJsKCR7ZGF0YS5jb3Zlcn0pIG5vLXJlcGVhdCBjZW50ZXIgL2NvbnRhaW47XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXNjb3VudHMoeyBkaXNjb3VudHMgfTogVFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIHtkaXNjb3VudHMubWFwKChkaXNjb3VudCwgaWR4KSA9PiAoXG4gICAgICAgIDxEaXNjb3VudCBrZXk9e2Ake2lkeH06ICR7ZGlzY291bnQuc3RvcmVOYW1lfWB9IGRhdGE9e2Rpc2NvdW50fSAvPlxuICAgICAgKSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.04244da68a1df20c0904.hot-update.js.map

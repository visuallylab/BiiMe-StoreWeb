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
            className: 'jsx-3000400005' + ' ' + 'container',
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('img', {
            alt: 'store',
            src: data.cover,
            className: 'jsx-3000400005' + ' ' + 'cover',
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'div',
            {
              className: 'jsx-3000400005',
            },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'h2',
              {
                className: 'jsx-3000400005' + ' ' + 'title',
              },
              data.storeName,
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              {
                className: 'jsx-3000400005' + ' ' + 'description',
              },
              data.discountText,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '3000400005',
            },
            '.container.jsx-3000400005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7F7F7F;padding:12px 0;border-bottom:solid .5px;}.container.jsx-3000400005:last-child{border-bottom:none;}.title.jsx-3000400005{color:rgba(0,0,0,0.85);font-weight:500;font-size:16px;}.description.jsx-3000400005{color:rgba(0,0,0,0.45);font-size:14px;}.cover.jsx-3000400005{border:solid;margin-right:.5em;width:80px;height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHd0IsQUFPTSxBQUlPLEFBTUEsQUFLYixhQUNLLE1BZnBCLElBSWtCLEFBTUQsUUFNSixPQUxiLENBTmlCLEdBWUgsWUFYZCxBQVlBLG9CQXpCcUIsNkZBQ0wsY0FDQyxlQUNVLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvRGlzY291bnRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgVERpc2NvdW50ID0ge1xuICBjb3Zlcjogc3RyaW5nO1xuICBzdG9yZU5hbWU6IHN0cmluZztcbiAgZGlzY291bnRUZXh0OiBzdHJpbmc7XG59O1xuXG50eXBlIFRQcm9wcyA9IHtcbiAgZGlzY291bnRzOiBURGlzY291bnRbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3VudCh7IGRhdGEgfTogeyBkYXRhOiBURGlzY291bnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImNvdmVyXCIgYWx0PVwic3RvcmVcIiBzcmM9e2RhdGEuY292ZXJ9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS5zdG9yZU5hbWV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkYXRhLmRpc2NvdW50VGV4dH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM3RjdGN0Y7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIC41cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4OyBcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc2NvdW50cyh7IGRpc2NvdW50cyB9OiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAge2Rpc2NvdW50cy5tYXAoKGRpc2NvdW50LCBpZHgpID0+IChcbiAgICAgICAgPERpc2NvdW50IGtleT17YCR7aWR4fTogJHtkaXNjb3VudC5zdG9yZU5hbWV9YH0gZGF0YT17ZGlzY291bnR9IC8+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
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
            '.container.jsx-1825507181{margin:16px 0;padding:16px;border-radius:10px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEa0IsQUFHeUIsY0FDRCxhQUNNLG1CQUNJLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvRGlzY291bnRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgVERpc2NvdW50ID0ge1xuICBjb3Zlcjogc3RyaW5nO1xuICBzdG9yZU5hbWU6IHN0cmluZztcbiAgZGlzY291bnRUZXh0OiBzdHJpbmc7XG59O1xuXG50eXBlIFRQcm9wcyA9IHtcbiAgZGlzY291bnRzOiBURGlzY291bnRbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBEaXNjb3VudCh7IGRhdGEgfTogeyBkYXRhOiBURGlzY291bnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImNvdmVyXCIgYWx0PVwic3RvcmVcIiBzcmM9e2RhdGEuY292ZXJ9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57ZGF0YS5zdG9yZU5hbWV9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkYXRhLmRpc2NvdW50VGV4dH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM3RjdGN0Y7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIC41cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4OyBcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc2NvdW50cyh7IGRpc2NvdW50cyB9OiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAge2Rpc2NvdW50cy5tYXAoKGRpc2NvdW50LCBpZHgpID0+IChcbiAgICAgICAgPERpc2NvdW50IGtleT17YCR7aWR4fTogJHtkaXNjb3VudC5zdG9yZU5hbWV9YH0gZGF0YT17ZGlzY291bnR9IC8+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.c7ded65e38279329e966.hot-update.js.map

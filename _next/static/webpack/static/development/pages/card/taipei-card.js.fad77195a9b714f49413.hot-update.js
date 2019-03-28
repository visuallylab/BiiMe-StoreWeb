webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './components/Discounts.tsx':
    /*!**********************************!*\
  !*** ./components/Discounts.tsx ***!
  \**********************************/
    /*! exports provided: default */
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
            key: 'storeName',
          },
          data.discountText,
        );
      }

      function Discounts(_ref2) {
        var discounts = _ref2.discounts;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className: 'jsx-3697373088' + ' ' + 'container',
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
              id: '3697373088',
            },
            '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCZ0IiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL1Zpc3VhbGx5TGFiL0JpaU1lLXN0b3JlLXdlYi9jb21wb25lbnRzL0Rpc2NvdW50cy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFREaXNjb3VudCA9IHtcbiAgY292ZXI6IHN0cmluZztcbiAgc3RvcmVOYW1lOiBzdHJpbmc7XG4gIGRpc2NvdW50VGV4dDogc3RyaW5nO1xufTtcblxudHlwZSBUUHJvcHMgPSB7XG4gIGRpc2NvdW50czogVERpc2NvdW50W107XG59XG5cbmZ1bmN0aW9uIERpc2NvdW50KHsgZGF0YSB9OiB7IGRhdGE6IFREaXNjb3VudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9XCJzdG9yZU5hbWVcIj57ZGF0YS5kaXNjb3VudFRleHR9PC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc2NvdW50cyh7IGRpc2NvdW50cyB9OiBUUHJvcHMpIHtcbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAge1xuXG4gICAgICBkaXNjb3VudHMubWFwKChkaXNjb3VudCwgaWR4KSA9PiA8RGlzY291bnQga2V5PXtgJHtpZHh9OiAke2Rpc2NvdW50LnN0b3JlTmFtZX1gfSBkYXRhPXtkaXNjb3VudH0gLz4pXG4gICAgfVxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufTsiXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.fad77195a9b714f49413.hot-update.js.map

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
          null,
          data.discountText,
        );
      }

      function Discounts(_ref2) {
        var discounts = _ref2.discounts;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className: 'jsx-3034830104' + ' ' + 'container',
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
              id: '3034830104',
            },
            '.container.jsx-3034830104{padding:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9EaXNjb3VudHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCZ0IsQUFHc0IsYUFDZiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvRGlzY291bnRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgVERpc2NvdW50ID0ge1xuICBjb3Zlcjogc3RyaW5nO1xuICBzdG9yZU5hbWU6IHN0cmluZztcbiAgZGlzY291bnRUZXh0OiBzdHJpbmc7XG59O1xuXG50eXBlIFRQcm9wcyA9IHtcbiAgZGlzY291bnRzOiBURGlzY291bnRbXTtcbn1cblxuZnVuY3Rpb24gRGlzY291bnQoeyBkYXRhIH06IHsgZGF0YTogVERpc2NvdW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PntkYXRhLmRpc2NvdW50VGV4dH08L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzY291bnRzKHsgZGlzY291bnRzIH06IFRQcm9wcykge1xuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICB7XG5cbiAgICAgIGRpc2NvdW50cy5tYXAoKGRpc2NvdW50LCBpZHgpID0+IDxEaXNjb3VudCBrZXk9e2Ake2lkeH06ICR7ZGlzY291bnQuc3RvcmVOYW1lfWB9IGRhdGE9e2Rpc2NvdW50fSAvPilcbiAgICB9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59OyJdfQ== */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Discounts.tsx */',
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.6dc19ebd03e2f87633ad.hot-update.js.map

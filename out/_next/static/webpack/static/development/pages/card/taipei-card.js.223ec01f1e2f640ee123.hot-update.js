webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './components/Section.tsx':
    /*!********************************!*\
  !*** ./components/Section.tsx ***!
  \********************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
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

      var Section = function Section(_ref) {
        var children = _ref.children,
          _ref$title = _ref.title,
          title = _ref$title === void 0 ? '' : _ref$title,
          _ref$textAlign = _ref.textAlign,
          textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
          _ref$fullscreen = _ref.fullscreen,
          fullscreen = _ref$fullscreen === void 0 ? false : _ref$fullscreen,
          _ref$alignItems = _ref.alignItems,
          alignItems = _ref$alignItems === void 0 ? 'center' : _ref$alignItems;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'section',
          {
            className:
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([
                ['1439478688', [alignItems, textAlign]],
              ]) +
              ' ' +
              'py align w-100 '.concat(fullscreen ? 'h-100' : ''),
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'h1',
            {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                [['1439478688', [alignItems, textAlign]]],
              ),
            },
            title,
          ),
          children,
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '1439478688',
              dynamic: [alignItems, textAlign],
            },
            '.h-100.__jsx-style-dynamic-selector{min-height:100vh;box-sizing:border-box;}.w-100.__jsx-style-dynamic-selector{width:100%;}.py.__jsx-style-dynamic-selector{padding-top:2vh;padding-bottom:2vh;}.align.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:'
              .concat(alignItems, ';-webkit-box-align:')
              .concat(alignItems, ';-ms-flex-align:')
              .concat(alignItems, ';align-items:')
              .concat(alignItems, ';text-align:')
              .concat(
                textAlign,
                ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9TZWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmdCLEFBRzBCLEFBSU4sQUFHSyxBQUlILFdBTmYsS0FHcUIsQ0FQRyxrQkFReEIsSUFQQSxtQ0FVeUIsbUdBQ2tCLHFMQUNELHdDQUMxQyIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvU2VjdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGV4dEFsaWduPzogJ2NlbnRlcicgfCAnbGVmdCcgfCAncmlnaHQnO1xuICBhbGlnbkl0ZW1zPzogJ2NlbnRlcicgfCAnZmxleC1zdGFydCcgfCAnZmxleC1lbmQnO1xuICBmdWxsc2NyZWVuPzogYm9vbGVhbjtcbiAgZmlyc3Q/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzYz86IHN0cmluZ1tdO1xufVxuXG5jb25zdCBTZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlID0gJycsXG4gIHRleHRBbGlnbiA9ICdsZWZ0JyxcbiAgZnVsbHNjcmVlbiA9IGZhbHNlLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG59KSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17YHB5IGFsaWduIHctMTAwICR7ZnVsbHNjcmVlbiA/ICdoLTEwMCcgOiAnJ31gfT5cbiAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oLTEwMCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgLnctMTAwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAucHkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMnZoO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICAgICAgfVxuICAgICAgLmFsaWduIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiAke2FsaWduSXRlbXN9O1xuICAgICAgICB0ZXh0LWFsaWduOiAke3RleHRBbGlnbn07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Section.tsx */',
              ),
          ),
        );
      };

      /* harmony default export */ __webpack_exports__['default'] = Section;

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.223ec01f1e2f640ee123.hot-update.js.map

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
          _ref$first = _ref.first,
          first = _ref$first === void 0 ? false : _ref$first,
          _ref$alignItems = _ref.alignItems,
          alignItems = _ref$alignItems === void 0 ? 'center' : _ref$alignItems;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'section',
          {
            className:
              styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([
                [
                  '847527886',
                  [first ? 'calc(.5vh + 64px)' : '.5vh', alignItems, textAlign],
                ],
              ]) +
              ' ' +
              'py align w-100 '.concat(fullscreen ? 'h-100' : ''),
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'h1',
            {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic(
                [
                  [
                    '847527886',
                    [
                      first ? 'calc(.5vh + 64px)' : '.5vh',
                      alignItems,
                      textAlign,
                    ],
                  ],
                ],
              ),
            },
            title,
          ),
          children,
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '847527886',
              dynamic: [
                first ? 'calc(.5vh + 64px)' : '.5vh',
                alignItems,
                textAlign,
              ],
            },
            '.h-100.__jsx-style-dynamic-selector{min-height:100vh;box-sizing:border-box;}.w-100.__jsx-style-dynamic-selector{width:100%;}.py.__jsx-style-dynamic-selector{padding-top:'
              .concat(
                first ? 'calc(.5vh + 64px)' : '.5vh',
                ';padding-bottom:.5vh;}.align.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:',
              )
              .concat(alignItems, ';-webkit-box-align:')
              .concat(alignItems, ';-ms-flex-align:')
              .concat(alignItems, ';align-items:')
              .concat(alignItems, ';text-align:')
              .concat(
                textAlign,
                ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9TZWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnVCLEFBRzBCLEFBSU4sQUFHOEIsQUFJNUIsV0FOZixNQUp3QixzQkFDeEIsRUFNc0Isb0JBQ3RCLGFBR3lCLG1HQUNrQixxTEFDRCx3Q0FDMUMiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL1Zpc3VhbGx5TGFiL0JpaU1lLXN0b3JlLXdlYi9jb21wb25lbnRzL1NlY3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRleHRBbGlnbj86ICdjZW50ZXInIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgYWxpZ25JdGVtcz86ICdjZW50ZXInIHwgJ2ZsZXgtc3RhcnQnIHwgJ2ZsZXgtZW5kJztcbiAgZnVsbHNjcmVlbj86IGJvb2xlYW47XG4gIGZpcnN0PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2M/OiBzdHJpbmdbXTtcbn1cblxuY29uc3QgU2VjdGlvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SVByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9ICcnLFxuICB0ZXh0QWxpZ24gPSAnbGVmdCcsXG4gIGZ1bGxzY3JlZW4gPSBmYWxzZSxcbiAgZmlyc3QgPSBmYWxzZSwgIFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG59KSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17YHB5IGFsaWduIHctMTAwICR7ZnVsbHNjcmVlbiA/ICdoLTEwMCcgOiAnJ31gfT5cbiAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g9e3RydWV9PntgXG4gICAgICAuaC0xMDAge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIC53LTEwMCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnB5IHtcbiAgICAgICAgcGFkZGluZy10b3A6ICR7Zmlyc3QgPyAnY2FsYyguNXZoICsgNjRweCknIDogJy41dmgnfTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41dmg7XG4gICAgICB9XG4gICAgICAuYWxpZ24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6ICR7YWxpZ25JdGVtc307XG4gICAgICAgIHRleHQtYWxpZ246ICR7dGV4dEFsaWdufTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Section.tsx */',
              ),
          ),
        );
      };

      /* harmony default export */ __webpack_exports__['default'] = Section;

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.a8c6ae02a0132d37694f.hot-update.js.map

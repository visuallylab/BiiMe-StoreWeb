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
                  '93678653',
                  [first ? 'calc(4vh + 64px)' : '4vh', alignItems, textAlign],
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
                    '93678653',
                    [first ? 'calc(4vh + 64px)' : '4vh', alignItems, textAlign],
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
              id: '93678653',
              dynamic: [
                first ? 'calc(4vh + 64px)' : '4vh',
                alignItems,
                textAlign,
              ],
            },
            '.h-100.__jsx-style-dynamic-selector{min-height:100vh;box-sizing:border-box;}.w-100.__jsx-style-dynamic-selector{width:100%;}.py.__jsx-style-dynamic-selector{padding-top:'
              .concat(
                first ? 'calc(4vh + 64px)' : '4vh',
                ';padding-bottom:4vh;}.align.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:',
              )
              .concat(alignItems, ';-webkit-box-align:')
              .concat(alignItems, ';-ms-flex-align:')
              .concat(alignItems, ';align-items:')
              .concat(alignItems, ';text-align:')
              .concat(
                textAlign,
                ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9TZWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnVCLEFBRzBCLEFBSU4sQUFHOEIsQUFJNUIsV0FOZixNQUp3QixzQkFDeEIsRUFNcUIsbUJBQ3JCLGNBR3lCLG1HQUNrQixxTEFDRCx3Q0FDMUMiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL1Zpc3VhbGx5TGFiL0JpaU1lLXN0b3JlLXdlYi9jb21wb25lbnRzL1NlY3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRleHRBbGlnbj86ICdjZW50ZXInIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgYWxpZ25JdGVtcz86ICdjZW50ZXInIHwgJ2ZsZXgtc3RhcnQnIHwgJ2ZsZXgtZW5kJztcbiAgZnVsbHNjcmVlbj86IGJvb2xlYW47XG4gIGZpcnN0PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2M/OiBzdHJpbmdbXTtcbn1cblxuY29uc3QgU2VjdGlvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SVByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9ICcnLFxuICB0ZXh0QWxpZ24gPSAnbGVmdCcsXG4gIGZ1bGxzY3JlZW4gPSBmYWxzZSxcbiAgZmlyc3QgPSBmYWxzZSxcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxufSkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e2BweSBhbGlnbiB3LTEwMCAke2Z1bGxzY3JlZW4gPyAnaC0xMDAnIDogJyd9YH0+XG4gICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PXt0cnVlfT57YFxuICAgICAgLmgtMTAwIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgICAudy0xMDAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5weSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAke2ZpcnN0ID8gJ2NhbGMoNHZoICsgNjRweCknIDogJzR2aCd9O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHZoO1xuICAgICAgfVxuICAgICAgLmFsaWduIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiAke2FsaWduSXRlbXN9O1xuICAgICAgICB0ZXh0LWFsaWduOiAke3RleHRBbGlnbn07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Section.tsx */',
              ),
          ),
        );
      };

      /* harmony default export */ __webpack_exports__['default'] = Section;

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.c43b46fd38c2b07b0c14.hot-update.js.map

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
                  '3343430856',
                  [first ? 'calc(8vh + 64px)' : '8vh', alignItems, textAlign],
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
                    '3343430856',
                    [first ? 'calc(8vh + 64px)' : '8vh', alignItems, textAlign],
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
              id: '3343430856',
              dynamic: [
                first ? 'calc(8vh + 64px)' : '8vh',
                alignItems,
                textAlign,
              ],
            },
            '.h-100.__jsx-style-dynamic-selector{height:100vh;box-sizing:border-box;}.w-100.__jsx-style-dynamic-selector{width:100%;}.py.__jsx-style-dynamic-selector{padding-top:'
              .concat(
                first ? 'calc(8vh + 64px)' : '8vh',
                ';padding-bottom:8vh;}.align.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:',
              )
              .concat(alignItems, ';-webkit-box-align:')
              .concat(alignItems, ';-ms-flex-align:')
              .concat(alignItems, ';align-items:')
              .concat(alignItems, ';text-align:')
              .concat(
                textAlign,
                ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9TZWN0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnVCLEFBR3NCLEFBSUYsQUFHOEIsQUFJNUIsV0FOZixFQUp3QixzQkFDeEIsTUFNcUIsbUJBQ3JCLGNBR3lCLG1HQUNrQixxTEFDRCx3Q0FDMUMiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL1Zpc3VhbGx5TGFiL0JpaU1lLXN0b3JlLXdlYi9jb21wb25lbnRzL1NlY3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRleHRBbGlnbj86ICdjZW50ZXInIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgYWxpZ25JdGVtcz86ICdjZW50ZXInIHwgJ2ZsZXgtc3RhcnQnIHwgJ2ZsZXgtZW5kJztcbiAgZnVsbHNjcmVlbj86IGJvb2xlYW47XG4gIGZpcnN0PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2M/OiBzdHJpbmdbXTtcbn1cblxuY29uc3QgU2VjdGlvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SVByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9ICcnLFxuICB0ZXh0QWxpZ24gPSAnbGVmdCcsXG4gIGZ1bGxzY3JlZW4gPSBmYWxzZSxcbiAgZmlyc3QgPSBmYWxzZSxcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxufSkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e2BweSBhbGlnbiB3LTEwMCAke2Z1bGxzY3JlZW4gPyAnaC0xMDAnIDogJyd9YH0+XG4gICAgPGgxPnt0aXRsZX08L2gxPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PXt0cnVlfT57YFxuICAgICAgLmgtMTAwIHtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIC53LTEwMCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnB5IHtcbiAgICAgICAgcGFkZGluZy10b3A6ICR7Zmlyc3QgPyAnY2FsYyg4dmggKyA2NHB4KScgOiAnOHZoJ307XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4dmg7XG4gICAgICB9XG4gICAgICAuYWxpZ24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6ICR7YWxpZ25JdGVtc307XG4gICAgICAgIHRleHQtYWxpZ246ICR7dGV4dEFsaWdufTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Section.tsx */',
              ),
          ),
        );
      };

      /* harmony default export */ __webpack_exports__['default'] = Section;

      /***/
    },

  /***/ './pages/card/taipei-card.tsx':
    /*!************************************!*\
  !*** ./pages/card/taipei-card.tsx ***!
  \************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/regenerator */ './node_modules/@babel/runtime-corejs2/regenerator/index.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ './node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var _layouts_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../../layouts/Card */ './layouts/Card.tsx',
      );
      /* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../../components/Section */ './components/Section.tsx',
      );

      function TaiPeiCard(_ref) {
        var did = _ref.did;
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _layouts_Card__WEBPACK_IMPORTED_MODULE_3__['default'],
          null,
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            _components_Section__WEBPACK_IMPORTED_MODULE_4__['default'],
            null,
            'Next stars: ',
            did,
          ),
        );
      }

      TaiPeiCard.getInitialProps =
        /*#__PURE__*/
        (function() {
          var _ref3 = Object(
            _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[
              'default'
            ],
          )(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
              function _callee(_ref2) {
                var query;
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          query = _ref2.query;
                          return _context.abrupt('return', {
                            did: query.did,
                          });

                        case 2:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  this,
                );
              },
            ),
          );

          return function(_x) {
            return _ref3.apply(this, arguments);
          };
        })();

      /* harmony default export */ __webpack_exports__['default'] = TaiPeiCard;

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.d28346bd6344e383efef.hot-update.js.map

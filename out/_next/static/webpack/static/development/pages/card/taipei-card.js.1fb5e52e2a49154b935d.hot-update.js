webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './components/Status.tsx':
    /*!*******************************!*\
  !*** ./components/Status.tsx ***!
  \*******************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return Status;
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

      function Status(props) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          {
            className: 'jsx-1825507181' + ' ' + 'container',
          },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'h1',
            {
              className: 'jsx-1825507181' + ' ' + 'status',
            },
            props.status,
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: '1825507181',
            },
            '.container.jsx-1825507181{margin:16px 0;padding:16px;border-radius:10px;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9TdGF0dXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFrQixBQUd5QixjQUNELGFBQ00sbUJBQ0ksdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9TdGF0dXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBUUHJvcHMgPSB7XG4gIHN0YXR1czogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdHVzKHByb3BzOiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInN0YXR1c1wiPntwcm9wcy5zdGF0dXN9PC9oMT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcblxufSJdfQ== */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Status.tsx */',
          ),
        );
      }

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
      /* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! antd/lib/tabs/style */ './node_modules/antd/lib/tabs/style/index.js',
      );
      /* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! antd/lib/tabs */ './node_modules/antd/lib/tabs/index.js',
      );
      /* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! antd/lib/card/style */ './node_modules/antd/lib/card/style/index.js',
      );
      /* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! antd/lib/card */ './node_modules/antd/lib/card/index.js',
      );
      /* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_card__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! axios */ './node_modules/axios/index.js',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_7__,
      );
      /* harmony import */ var _layouts_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../layouts/Card */ './layouts/Card.tsx',
      );
      /* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../../components/Section */ './components/Section.tsx',
      );
      /* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../../components/Status */ './components/Status.tsx',
      );
      /* harmony import */ var _components_Discounts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../../components/Discounts */ './components/Discounts.tsx',
      );
      /* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ../../fakeData */ './fakeData.ts',
      );

      function TaiPeiCard(_ref) {
        var user = _ref.user;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          _layouts_Card__WEBPACK_IMPORTED_MODULE_8__['default'],
          {
            style: {
              background: 'rgba(31, 172, 227, 0.42)',
            },
          },
          react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            _components_Section__WEBPACK_IMPORTED_MODULE_9__['default'],
            {
              fullscreen: true,
            },
            react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a,
              {
                defaultActiveKey: '1',
                size: 'large',
              },
              react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a.TabPane,
                {
                  tab: 'Card',
                  key: '1',
                },
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a,
                  {
                    style: {
                      width: '100%',
                      borderRadius: '10px',
                      border: 'none',
                    },
                    cover: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                      'img',
                      {
                        alt: 'Taipei Card',
                        src: '/static/taipei_card.png',
                      },
                    ),
                  },
                  react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta,
                    {
                      title: 'Taipei Card',
                      description:
                        'description # quisque tempus vehicula enim. Duis ut dolor nec augue blandit mattis in sed lectus. Cras vehicula tincidunt massa, in gravida libero fermentum quis.',
                    },
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  _components_Status__WEBPACK_IMPORTED_MODULE_10__['default'],
                  {
                    status: 'PASS',
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  _components_Discounts__WEBPACK_IMPORTED_MODULE_11__[
                    'default'
                  ],
                  {
                    discounts:
                      _fakeData__WEBPACK_IMPORTED_MODULE_12__['discounts'],
                  },
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a.TabPane,
                {
                  tab: 'Profile',
                  key: '2',
                },
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a,
                  {
                    style: {
                      width: '100%',
                      borderRadius: '10px',
                      border: 'none',
                    },
                    cover: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                      'img',
                      {
                        alt: 'Taipei Card',
                        src: '/static/taipei_card.png',
                      },
                    ),
                  },
                  react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta,
                    {
                      title: 'Taipei Card',
                      description:
                        'description # quisque tempus vehicula enim. Duis ut dolor nec augue blandit mattis in sed lectus. Cras vehicula tincidunt massa, in gravida libero fermentum quis.',
                    },
                  ),
                ),
              ),
            ),
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
                var query, user, res;
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          query = _ref2.query;
                          user = {
                            did: 'did',
                            name: 'Chihusan',
                            certificationName: 'Course Certification',
                            certificatedAte: '2019-03-26',
                            expiredAt: '2019-04-05',
                            issuerName: 'National Cheng Kung University',
                            transactionHash: 'xxx',
                            imageChecksum: 'xxxxxx',
                          };

                          if (!query.did) {
                            _context.next = 13;
                            break;
                          }

                          _context.prev = 3;
                          _context.next = 6;
                          return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(
                            'API'.concat(query.did),
                          );

                        case 6:
                          res = _context.sent;
                          user = res.data;
                          _context.next = 13;
                          break;

                        case 10:
                          _context.prev = 10;
                          _context.t0 = _context['catch'](3);
                          console.error(_context.t0);

                        case 13:
                          return _context.abrupt('return', {
                            user: user,
                          });

                        case 14:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  this,
                  [[3, 10]],
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
//# sourceMappingURL=taipei-card.js.1fb5e52e2a49154b935d.hot-update.js.map

webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './fakeData.ts':
    /*!*********************!*\
  !*** ./fakeData.ts ***!
  \*********************/
    /*! exports provided: discounts, fakeUser, taipeiCard, tainanCard */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'discounts',
        function() {
          return discounts;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'fakeUser',
        function() {
          return fakeUser;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'taipeiCard',
        function() {
          return taipeiCard;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'tainanCard',
        function() {
          return tainanCard;
        },
      );
      var discounts = [
        {
          cover: __webpack_require__(
            /*! ./static/cover_comebuy.png */ './static/cover_comebuy.png',
          ),
          storeName: 'Comebuy',
          discountText: '20% off on bubble tea',
        },
        {
          cover: __webpack_require__(
            /*! ./static/cover_moleskine.jpeg */ './static/cover_moleskine.jpeg',
          ),
          storeName: 'Moleskine',
          discountText: '5% off on classic notebook',
        },
        {
          cover: __webpack_require__(
            /*! ./static/cover_ikea.jpeg */ './static/cover_ikea.jpeg',
          ),
          storeName: 'Ikea',
          discountText: '10% off on food',
        },
        {
          cover: __webpack_require__(
            /*! ./static/cover_starbucks.jpeg */ './static/cover_starbucks.jpeg',
          ),
          storeName: 'Starbucks',
          discountText: 'buy caffe and get one free',
        },
      ];
      var fakeUser = {
        did: '128901802382173721372173',
        name: 'Chihusan',
        certificationName: 'Course Certification',
        certificatedAt: '2019-03-26',
        expiredAt: '2019-04-05',
        issuerName: 'National Cheng Kung University',
        transactionHash: 'xxx',
        imageChecksum: 'xxxxxx',
      };
      var taipeiCard = {
        name: 'Taipei Card',
        coverSrc: __webpack_require__(
          /*! ./static/taipei_card.png */ './static/taipei_card.png',
        ),
        description:
          'description #\n  quisque tempus vehicula enim. Duis ut dolor nec augue blandit mattis\n  in sed lectus. Cras vehicula tincidunt massa, in gravida libero\n  fermentum quis.',
      };
      var tainanCard = {
        name: 'Tainan Card',
        coverSrc: __webpack_require__(
          /*! ./static/tainan_card.png */ './static/tainan_card.png',
        ),
        description:
          'description #\n  quisque tempus vehicula enim. Duis ut dolor nec augue blandit mattis\n  in sed lectus. Cras vehicula tincidunt massa, in gravida libero\n  fermentum quis.',
      };

      /***/
    },

  /***/ './layouts/Card.tsx':
    /*!**************************!*\
  !*** ./layouts/Card.tsx ***!
  \**************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! antd/lib/row/style */ './node_modules/antd/lib/row/style/index.js',
      );
      /* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! antd/lib/row */ './node_modules/antd/lib/row/index.js',
      );
      /* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_row__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! antd/lib/col/style */ './node_modules/antd/lib/col/style/index.js',
      );
      /* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! antd/lib/col */ './node_modules/antd/lib/col/index.js',
      );
      /* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_col__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! antd/lib/layout/style */ './node_modules/antd/lib/layout/style/index.js',
      );
      /* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! antd/lib/layout */ './node_modules/antd/lib/layout/index.js',
      );
      /* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! styled-jsx/style */ './node_modules/styled-jsx/style.js',
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_7__,
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! next/head */ './node_modules/next/head.js',
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        next_head__WEBPACK_IMPORTED_MODULE_8__,
      );
      /* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../assets/style.less */ './assets/style.less',
      );
      /* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_style_less__WEBPACK_IMPORTED_MODULE_9__,
      );
      /* harmony import */ var _assets_card_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../assets/card.less */ './assets/card.less',
      );
      /* harmony import */ var _assets_card_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_card_less__WEBPACK_IMPORTED_MODULE_10__,
      );
      /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../constants */ './constants/index.ts',
      );

      var _jsxFileName =
        '/Users/tse/Code/VisuallyLab/BiiMe-store-web/layouts/Card.tsx';

      var CardLayout = function CardLayout(_ref) {
        var children = _ref.children,
          _ref$title = _ref.title,
          title =
            _ref$title === void 0
              ? _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_TITLE']
              : _ref$title,
          style = _ref.style;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a,
          {
            style: style,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26,
            },
            __self: this,
          },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            next_head__WEBPACK_IMPORTED_MODULE_8___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'title',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                },
                __self: this,
              },
              title,
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              charSet: 'utf-8',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'viewport',
              content: 'initial-scale=1.0, width=device-width',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'language',
              content: 'en',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'description',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_DESC'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('link', {
              rel: 'icon',
              type: 'image/x-icon',
              href: _constants__WEBPACK_IMPORTED_MODULE_11__['FAVICON_PATH'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('link', {
              rel: 'apple-touch-icon',
              href: _constants__WEBPACK_IMPORTED_MODULE_11__['LARGE_ICON_PATH'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:url',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_URL'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:title',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_TITLE'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:description',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_DESC'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:image',
              content:
                _constants__WEBPACK_IMPORTED_MODULE_11__['LARGE_ICON_PATH'],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40,
              },
              __self: this,
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'apple-mobile-web-app-status-bar-style',
              content: 'black',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41,
              },
              __self: this,
            }),
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
            {
              style: {
                background: 'rgb(22, 28, 53)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', {
              src: __webpack_require__(
                /*! ../static/logo_BiiMe.png */ './static/logo_BiiMe.png',
              ),
              alt: 'logo',
              style: {
                height: '130%',
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51,
              },
              __self: this,
            }),
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Content,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                type: 'flex',
                justify: 'center',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  xs: 20,
                  lg: 12,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                  },
                  __self: this,
                },
                children,
              ),
            ),
          ),
          globalStyles,
        );
      };

      var globalStyles = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a,
        {
          styleId: '3949631075',
          css:
            'h1{font-weight:400;font-size:2.5rem;-webkit-letter-spacing:0.1rem;-moz-letter-spacing:0.1rem;-ms-letter-spacing:0.1rem;letter-spacing:0.1rem;margin-top:12px;}p{font-size:20px;}@media only screen and (max-width:768px){h1{font-size:1.5rem;-webkit-letter-spacing:inherit;-moz-letter-spacing:inherit;-ms-letter-spacing:inherit;letter-spacing:inherit;}p{font-weight:300;font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvbGF5b3V0cy9DYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRXFCLEFBR3VCLEFBTUQsQUFLSSxBQUlELGVBUnBCLENBTm1CLEFBZUEsQ0FKUSxjQUt6QixFQWZzQiw2RkFXdEIsWUFWZ0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvbGF5b3V0cy9DYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ29sLCBMYXlvdXQsIFJvdyB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZS5sZXNzJztcbmltcG9ydCAnLi4vYXNzZXRzL2NhcmQubGVzcyc7XG5pbXBvcnQge1xuICBTSVRFX1RJVExFLFxuICBTSVRFX0RFU0MsXG4gIEZBVklDT05fUEFUSCxcbiAgTEFSR0VfSUNPTl9QQVRILFxuICBTSVRFX1VSTCxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxudHlwZSBUUHJvcHMgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG59O1xuXG5jb25zdCBDYXJkTGF5b3V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxUUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlID0gU0lURV9USVRMRSxcbiAgc3R5bGUsXG59KSA9PiAoXG4gIDxMYXlvdXQgc3R5bGU9e3N0eWxlfT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwibGFuZ3VhZ2VcIiBjb250ZW50PVwiZW5cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17U0lURV9ERVNDfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPXtGQVZJQ09OX1BBVEh9IC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj17TEFSR0VfSUNPTl9QQVRIfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtTSVRFX1VSTH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtTSVRFX1RJVExFfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e1NJVEVfREVTQ30gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtMQVJHRV9JQ09OX1BBVEh9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIiBjb250ZW50PVwiYmxhY2tcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8TGF5b3V0LkhlYWRlclxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMiwgMjgsIDUzKScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3JlcXVpcmUoJy4uL3N0YXRpYy9sb2dvX0JpaU1lLnBuZycpfVxuICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMTMwJScgfX1cbiAgICAgIC8+XG4gICAgPC9MYXlvdXQuSGVhZGVyPlxuICAgIDxMYXlvdXQuQ29udGVudD5cbiAgICAgIDxSb3cgdHlwZT1cImZsZXhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxDb2wgeHM9ezIwfSBsZz17MTJ9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0xheW91dC5Db250ZW50PlxuICAgIHtnbG9iYWxTdHlsZXN9XG4gIDwvTGF5b3V0PlxuKTtcblxuY29uc3QgZ2xvYmFsU3R5bGVzID0gKFxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIGgxIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICBgfTwvc3R5bGU+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/layouts/Card.tsx */',
          __self: undefined,
        },
      );
      /* harmony default export */ __webpack_exports__['default'] = CardLayout;

      /***/
    },

  /***/ './static/cover_comebuy.png':
    /*!**********************************!*\
  !*** ./static/cover_comebuy.png ***!
  \**********************************/
    /*! no static exports found */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/cover_comebuy-71153abb8e308778eaec8ccd8ecf1ae6.png';

      /***/
    },

  /***/ './static/cover_ikea.jpeg':
    /*!********************************!*\
  !*** ./static/cover_ikea.jpeg ***!
  \********************************/
    /*! no static exports found */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/cover_ikea-1991890228018f8e819a2fe89881388d.jpeg';

      /***/
    },

  /***/ './static/cover_moleskine.jpeg':
    /*!*************************************!*\
  !*** ./static/cover_moleskine.jpeg ***!
  \*************************************/
    /*! no static exports found */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/cover_moleskine-a3d89bf06aa43598a6cb6d67d0463ab4.jpeg';

      /***/
    },

  /***/ './static/cover_starbucks.jpeg':
    /*!*************************************!*\
  !*** ./static/cover_starbucks.jpeg ***!
  \*************************************/
    /*! no static exports found */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/cover_starbucks-9e10b10e66965924f4771f96a1e56126.jpeg';

      /***/
    },

  /***/ './static/logo_BiiMe.png':
    /*!*******************************!*\
  !*** ./static/logo_BiiMe.png ***!
  \*******************************/
    /*! no static exports found */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,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';

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.441702fafc196b0e85fe.hot-update.js.map

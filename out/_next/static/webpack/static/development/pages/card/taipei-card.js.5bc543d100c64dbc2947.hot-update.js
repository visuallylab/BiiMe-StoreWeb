webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './components/ClaimCard.tsx':
    /*!**********************************!*\
  !*** ./components/ClaimCard.tsx ***!
  \**********************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return ClaimCard;
        },
      );
      /* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! antd/lib/card/style */ './node_modules/antd/lib/card/style/index.js',
      );
      /* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! antd/lib/card */ './node_modules/antd/lib/card/index.js',
      );
      /* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_card__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./Status */ './components/Status.tsx',
      );

      function ClaimCard(props) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a,
          {
            style: {
              width: '100%',
              borderRadius: '10px',
              border: 'none',
            },
            cover: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'img',
              {
                alt: 'Taipei Card',
                src: '/static/taipei_card.png',
              },
            ),
          },
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a.Meta,
            {
              title: 'Taipei Card',
              description:
                'description # quisque tempus vehicula enim. Duis ut dolor nec augue blandit mattis in sed lectus. Cras vehicula tincidunt massa, in gravida libero fermentum quis.',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            _Status__WEBPACK_IMPORTED_MODULE_3__['default'],
            {
              status: 'PASS',
            },
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.5bc543d100c64dbc2947.hot-update.js.map

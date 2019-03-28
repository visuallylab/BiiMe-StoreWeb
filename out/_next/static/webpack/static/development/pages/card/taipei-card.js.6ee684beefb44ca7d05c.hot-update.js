webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './components/Profile.tsx':
    /*!********************************!*\
  !*** ./components/Profile.tsx ***!
  \********************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return Profile;
        },
      );
      /* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! antd/lib/list/style */ './node_modules/antd/lib/list/style/index.js',
      );
      /* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_list_style__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! antd/lib/list */ './node_modules/antd/lib/list/index.js',
      );
      /* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_list__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_2__,
      );

      function Profile(_ref) {
        var user = _ref.user;
        var transformMap = [
          'Did',
          'Name',
          'Certification Name',
          'Certificated At',
          'Expired At',
          'Issuer Name',
          'Transaction Hash',
          'Image Checksum',
        ];
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a,
          {
            itemLayout: 'horizontal',
            dataSource: transformMap,
            renderItem: function renderItem(key) {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a.Item,
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  'div',
                  null,
                  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'span',
                    {
                      className: 'name',
                    },
                    key,
                    ': ',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'span',
                    null,
                    user.name,
                  ),
                ),
              );
            },
          },
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.6ee684beefb44ca7d05c.hot-update.js.map

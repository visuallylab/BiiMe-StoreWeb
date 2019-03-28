webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js':
    /*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
        /*! core-js/library/fn/object/get-own-property-descriptor */ './node_modules/core-js/library/fn/object/get-own-property-descriptor.js',
      );

      /***/
    },

  /***/ './node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js':
    /*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
        /*! core-js/library/fn/object/get-own-property-symbols */ './node_modules/core-js/library/fn/object/get-own-property-symbols.js',
      );

      /***/
    },

  /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js':
    /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return _defineProperty;
        },
      );
      /* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../../core-js/object/define-property */ './node_modules/@babel/runtime-corejs2/core-js/object/define-property.js',
      );
      /* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__,
      );

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(
            obj,
            key,
            {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            },
          );
        } else {
          obj[key] = value;
        }

        return obj;
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js':
    /*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return _objectSpread;
        },
      );
      /* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../../core-js/object/get-own-property-descriptor */ './node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js',
      );
      /* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../core-js/object/get-own-property-symbols */ './node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js',
      );
      /* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../core-js/object/keys */ './node_modules/@babel/runtime-corejs2/core-js/object/keys.js',
      );
      /* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./defineProperty */ './node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js',
      );

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(
            source,
          );

          if (
            typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a ===
            'function'
          ) {
            ownKeys = ownKeys.concat(
              _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(
                source,
              ).filter(function(sym) {
                return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(
                  source,
                  sym,
                ).enumerable;
              }),
            );
          }

          ownKeys.forEach(function(key) {
            Object(
              _defineProperty__WEBPACK_IMPORTED_MODULE_3__['default'],
            )(target, key, source[key]);
          });
        }

        return target;
      }

      /***/
    },

  /***/ './node_modules/core-js/library/fn/object/get-own-property-descriptor.js':
    /*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      __webpack_require__(
        /*! ../../modules/es6.object.get-own-property-descriptor */ './node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js',
      );
      var $Object = __webpack_require__(
        /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
      ).Object;
      module.exports = function getOwnPropertyDescriptor(it, key) {
        return $Object.getOwnPropertyDescriptor(it, key);
      };

      /***/
    },

  /***/ './node_modules/core-js/library/fn/object/get-own-property-symbols.js':
    /*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      __webpack_require__(
        /*! ../../modules/es6.symbol */ './node_modules/core-js/library/modules/es6.symbol.js',
      );
      module.exports = __webpack_require__(
        /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
      ).Object.getOwnPropertySymbols;

      /***/
    },

  /***/ './node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js':
    /*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      var toIObject = __webpack_require__(
        /*! ./_to-iobject */ './node_modules/core-js/library/modules/_to-iobject.js',
      );
      var $getOwnPropertyDescriptor = __webpack_require__(
        /*! ./_object-gopd */ './node_modules/core-js/library/modules/_object-gopd.js',
      ).f;

      __webpack_require__(
        /*! ./_object-sap */ './node_modules/core-js/library/modules/_object-sap.js',
      )('getOwnPropertyDescriptor', function() {
        return function getOwnPropertyDescriptor(it, key) {
          return $getOwnPropertyDescriptor(toIObject(it), key);
        };
      });

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
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ './node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ './node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js',
      );
      /* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! antd/lib/tabs/style */ './node_modules/antd/lib/tabs/style/index.js',
      );
      /* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! antd/lib/tabs */ './node_modules/antd/lib/tabs/index.js',
      );
      /* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! axios */ './node_modules/axios/index.js',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var _layouts_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ../../layouts/Card */ './layouts/Card.tsx',
      );
      /* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ../../components/Section */ './components/Section.tsx',
      );
      /* harmony import */ var _components_ClaimCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../../components/ClaimCard */ './components/ClaimCard.tsx',
      );
      /* harmony import */ var _components_Discounts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../../components/Discounts */ './components/Discounts.tsx',
      );
      /* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../../components/Profile */ './components/Profile.tsx',
      );
      /* harmony import */ var _fakeData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ../../fakeData */ './fakeData.ts',
      );

      function TaiPeiCard(_ref) {
        var user = _ref.user;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _layouts_Card__WEBPACK_IMPORTED_MODULE_7__['default'],
          {
            style: {
              background: 'rgba(31, 172, 227, 0.42)',
            },
          },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            _components_Section__WEBPACK_IMPORTED_MODULE_8__['default'],
            {
              fullscreen: true,
              first: true,
              alignItems: 'flex-start',
            },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4___default.a,
              {
                defaultActiveKey: '1',
                size: 'large',
              },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4___default.a.TabPane,
                {
                  tab: 'Card',
                  key: '1',
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_ClaimCard__WEBPACK_IMPORTED_MODULE_9__['default'],
                  null,
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Discounts__WEBPACK_IMPORTED_MODULE_10__[
                    'default'
                  ],
                  {
                    discounts:
                      _fakeData__WEBPACK_IMPORTED_MODULE_12__['discounts'],
                  },
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                antd_lib_tabs__WEBPACK_IMPORTED_MODULE_4___default.a.TabPane,
                {
                  tab: 'Profile',
                  key: '2',
                },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Profile__WEBPACK_IMPORTED_MODULE_11__['default'],
                  {
                    user: user,
                  },
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
            _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[
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
                          user = Object(
                            _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[
                              'default'
                            ],
                          )(
                            {},
                            _fakeData__WEBPACK_IMPORTED_MODULE_12__['fakeUser'],
                          );

                          if (!query.did) {
                            _context.next = 13;
                            break;
                          }

                          _context.prev = 3;
                          _context.next = 6;
                          return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(
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
//# sourceMappingURL=taipei-card.js.28bdac2fa65f1d929849.hot-update.js.map

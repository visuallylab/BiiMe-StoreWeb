webpackHotUpdate('static/development/pages/index.js', {
  /***/ './components/Layout.tsx':
    /*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
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
      /* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! next-server/head */ './node_modules/next-server/head.js',
      );
      /* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        next_server_head__WEBPACK_IMPORTED_MODULE_8__,
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! next/link */ './node_modules/next/link.js',
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        next_link__WEBPACK_IMPORTED_MODULE_9__,
      );
      /* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../assets/style.less */ './assets/style.less',
      );
      /* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_style_less__WEBPACK_IMPORTED_MODULE_10__,
      );
      /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../constants */ './constants/index.ts',
      );

      var MyLayout = function MyLayout(_ref) {
        var children = _ref.children,
          _ref$title = _ref.title,
          title =
            _ref$title === void 0
              ? _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_TITLE']
              : _ref$title;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a,
          null,
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            next_server_head__WEBPACK_IMPORTED_MODULE_8___default.a,
            null,
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'title',
              null,
              title,
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              charSet: 'utf-8',
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'viewport',
              content: 'initial-scale=1.0, width=device-width',
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'language',
              content: 'en',
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0',
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'description',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_DESC'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('link', {
              rel: 'icon',
              type: 'image/x-icon',
              href: _constants__WEBPACK_IMPORTED_MODULE_11__['FAVICON_PATH'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('link', {
              rel: 'apple-touch-icon',
              href: _constants__WEBPACK_IMPORTED_MODULE_11__['LARGE_ICON_PATH'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:url',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_URL'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:title',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_TITLE'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:description',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_DESC'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:image',
              content:
                _constants__WEBPACK_IMPORTED_MODULE_11__['LARGE_ICON_PATH'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'apple-mobile-web-app-status-bar-style',
              content: 'black',
            }),
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
            {
              className: ''.concat(className, ' nav-fixed'),
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'span',
              null,
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'img',
                {
                  src: '/static/logo.svg',
                  alt: 'logo',
                  className: ''.concat(className, ' nav-logo'),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'span',
                {
                  className: 'nav-title',
                },
                _constants__WEBPACK_IMPORTED_MODULE_11__['NAV_TITLE'],
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'span',
              null,
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                next_link__WEBPACK_IMPORTED_MODULE_9___default.a,
                {
                  href: '/',
                },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'a',
                  null,
                  'Home',
                ),
              ),
              ' | ',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                next_link__WEBPACK_IMPORTED_MODULE_9___default.a,
                {
                  href: '/about/a',
                },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'a',
                  null,
                  'About',
                ),
              ),
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Content,
            null,
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                type: 'flex',
                justify: 'center',
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  xs: 20,
                  lg: 12,
                },
                children,
              ),
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Footer,
            null,
            ' Footer is here ',
          ),
          styles,
        );
      };

      var _styles$className = {
          styles: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a,
            {
              id: '4242595682',
            },
            '.nav-fixed.jsx-4242595682{position:fixed;z-index:2;width:100%;background-color:rgba(240,242,245,0.95);height:auto;padding:12px 36px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav-logo.jsx-4242595682{height:2.5rem;}.nav-title.jsx-4242595682{line-height:2.5rem;display:inline-block;font-size:15px;margin-left:10px;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);}',
          ),
          className: 'jsx-4242595682',
        },
        styles = _styles$className.styles,
        className = _styles$className.className;
      /* harmony default export */ __webpack_exports__['default'] = MyLayout;

      /***/
    },

  /***/ './constants/index.ts':
    /*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
    /*! exports provided: SITE_TITLE, SITE_DESC, SITE_URL, FAVICON_PATH, LARGE_ICON_PATH, NAV_TITLE */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'SITE_TITLE',
        function() {
          return SITE_TITLE;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'SITE_DESC',
        function() {
          return SITE_DESC;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'SITE_URL',
        function() {
          return SITE_URL;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'FAVICON_PATH',
        function() {
          return FAVICON_PATH;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'LARGE_ICON_PATH',
        function() {
          return LARGE_ICON_PATH;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'NAV_TITLE',
        function() {
          return NAV_TITLE;
        },
      );
      /* head meta tag data */
      var SITE_TITLE = 'Visually Lab';
      var SITE_DESC = 'visualize everything';
      var SITE_URL = 'localhost';
      var FAVICON_PATH = '/static/favicon.ico';
      var LARGE_ICON_PATH = '/static/large-icon.png';
      var NAV_TITLE = 'nav title';

      /***/
    },

  /***/ './node_modules/@babel/runtime-corejs2/core-js/json/stringify.js':
    /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
        /*! core-js/library/fn/json/stringify */ './node_modules/core-js/library/fn/json/stringify.js',
      );

      /***/
    },

  /***/ './node_modules/antd/lib/_util/isNumeric.js':
    /*!**************************************************!*\
  !*** ./node_modules/antd/lib/_util/isNumeric.js ***!
  \**************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports['default'] = void 0;

      var isNumeric = function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
      };

      var _default = isNumeric;
      exports['default'] = _default;

      /***/
    },

  /***/ './node_modules/antd/lib/layout/Sider.js':
    /*!***********************************************!*\
  !*** ./node_modules/antd/lib/layout/Sider.js ***!
  \***********************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports['default'] = void 0;

      var _configProvider = __webpack_require__(
        /*! ../config-provider */ './node_modules/antd/lib/config-provider/index.js',
      );

      var React = _interopRequireWildcard(
        __webpack_require__(/*! react */ './node_modules/react/index.js'),
      );

      var _reactLifecyclesCompat = __webpack_require__(
        /*! react-lifecycles-compat */ './node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js',
      );

      var _classnames = _interopRequireDefault(
        __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        ),
      );

      var _omit = _interopRequireDefault(
        __webpack_require__(
          /*! omit.js */ './node_modules/omit.js/es/index.js',
        ),
      );

      var PropTypes = _interopRequireWildcard(
        __webpack_require__(
          /*! prop-types */ './node_modules/antd/node_modules/prop-types/index.js',
        ),
      );

      var _icon = _interopRequireDefault(
        __webpack_require__(
          /*! ../icon */ './node_modules/antd/lib/icon/index.js',
        ),
      );

      var _isNumeric = _interopRequireDefault(
        __webpack_require__(
          /*! ../_util/isNumeric */ './node_modules/antd/lib/_util/isNumeric.js',
        ),
      );

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(obj, key)
                    : {};
                if (desc.get || desc.set) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
          }
          newObj['default'] = obj;
          return newObj;
        }
      }

      function _typeof(obj) {
        if (
          typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === 'function' &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === 'object' || typeof call === 'function')
        ) {
          return call;
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        }
        return self;
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      var __rest =
        (void 0 && (void 0).__rest) ||
        function(s, e) {
          var t = {};

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          }

          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
              var i = 0, p = Object.getOwnPropertySymbols(s);
              i < p.length;
              i++
            ) {
              if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
            }
          return t;
        };

      // matchMedia polyfill for
      // https://github.com/WickyNilliams/enquire.js/issues/82
      if (typeof window !== 'undefined') {
        var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
          return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {},
          };
        };

        window.matchMedia = window.matchMedia || matchMediaPolyfill;
      }

      var dimensionMap = {
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1600px',
      };

      var generateId = (function() {
        var i = 0;
        return function() {
          var prefix =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : '';
          i += 1;
          return ''.concat(prefix).concat(i);
        };
      })();

      var Sider =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(Sider, _React$Component);

          function Sider(props) {
            var _this;

            _classCallCheck(this, Sider);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(Sider).call(this, props),
            );

            _this.responsiveHandler = function(mql) {
              _this.setState({
                below: mql.matches,
              });

              var onBreakpoint = _this.props.onBreakpoint;

              if (onBreakpoint) {
                onBreakpoint(mql.matches);
              }

              if (_this.state.collapsed !== mql.matches) {
                _this.setCollapsed(mql.matches, 'responsive');
              }
            };

            _this.setCollapsed = function(collapsed, type) {
              if (!('collapsed' in _this.props)) {
                _this.setState({
                  collapsed: collapsed,
                });
              }

              var onCollapse = _this.props.onCollapse;

              if (onCollapse) {
                onCollapse(collapsed, type);
              }
            };

            _this.toggle = function() {
              var collapsed = !_this.state.collapsed;

              _this.setCollapsed(collapsed, 'clickTrigger');
            };

            _this.belowShowChange = function() {
              _this.setState({
                belowShow: !_this.state.belowShow,
              });
            };

            _this.renderSider = function(_ref) {
              var _classNames;

              var getPrefixCls = _ref.getPrefixCls;

              var _a = _this.props,
                customizePrefixCls = _a.prefixCls,
                className = _a.className,
                theme = _a.theme,
                collapsible = _a.collapsible,
                reverseArrow = _a.reverseArrow,
                trigger = _a.trigger,
                style = _a.style,
                width = _a.width,
                collapsedWidth = _a.collapsedWidth,
                others = __rest(_a, [
                  'prefixCls',
                  'className',
                  'theme',
                  'collapsible',
                  'reverseArrow',
                  'trigger',
                  'style',
                  'width',
                  'collapsedWidth',
                ]);

              var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
              var divProps = (0, _omit['default'])(others, [
                'collapsed',
                'defaultCollapsed',
                'onCollapse',
                'breakpoint',
                'onBreakpoint',
              ]);
              var rawWidth = _this.state.collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

              var siderWidth = (0, _isNumeric['default'])(rawWidth)
                ? ''.concat(rawWidth, 'px')
                : String(rawWidth); // special trigger when collapsedWidth == 0

              var zeroWidthTrigger =
                parseFloat(String(collapsedWidth || 0)) === 0
                  ? React.createElement(
                      'span',
                      {
                        onClick: _this.toggle,
                        className: ''
                          .concat(prefixCls, '-zero-width-trigger ')
                          .concat(prefixCls, '-zero-width-trigger-')
                          .concat(reverseArrow ? 'right' : 'left'),
                      },
                      React.createElement(_icon['default'], {
                        type: 'bars',
                      }),
                    )
                  : null;
              var iconObj = {
                expanded: reverseArrow
                  ? React.createElement(_icon['default'], {
                      type: 'right',
                    })
                  : React.createElement(_icon['default'], {
                      type: 'left',
                    }),
                collapsed: reverseArrow
                  ? React.createElement(_icon['default'], {
                      type: 'left',
                    })
                  : React.createElement(_icon['default'], {
                      type: 'right',
                    }),
              };
              var status = _this.state.collapsed ? 'collapsed' : 'expanded';
              var defaultTrigger = iconObj[status];
              var triggerDom =
                trigger !== null
                  ? zeroWidthTrigger ||
                    React.createElement(
                      'div',
                      {
                        className: ''.concat(prefixCls, '-trigger'),
                        onClick: _this.toggle,
                        style: {
                          width: siderWidth,
                        },
                      },
                      trigger || defaultTrigger,
                    )
                  : null;

              var divStyle = _extends({}, style, {
                flex: '0 0 '.concat(siderWidth),
                maxWidth: siderWidth,
                minWidth: siderWidth,
                width: siderWidth,
              });

              var siderCls = (0, _classnames['default'])(
                className,
                prefixCls,
                ''.concat(prefixCls, '-').concat(theme),
                ((_classNames = {}),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-collapsed'),
                  !!_this.state.collapsed,
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-has-trigger'),
                  collapsible && trigger !== null && !zeroWidthTrigger,
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-below'),
                  !!_this.state.below,
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-zero-width'),
                  parseFloat(siderWidth) === 0,
                ),
                _classNames),
              );
              return React.createElement(
                'aside',
                _extends(
                  {
                    className: siderCls,
                  },
                  divProps,
                  {
                    style: divStyle,
                  },
                ),
                React.createElement(
                  'div',
                  {
                    className: ''.concat(prefixCls, '-children'),
                  },
                  _this.props.children,
                ),
                collapsible || (_this.state.below && zeroWidthTrigger)
                  ? triggerDom
                  : null,
              );
            };

            _this.uniqueId = generateId('ant-sider-');
            var matchMedia;

            if (typeof window !== 'undefined') {
              matchMedia = window.matchMedia;
            }

            if (
              matchMedia &&
              props.breakpoint &&
              props.breakpoint in dimensionMap
            ) {
              _this.mql = matchMedia(
                '(max-width: '.concat(dimensionMap[props.breakpoint], ')'),
              );
            }

            var collapsed;

            if ('collapsed' in props) {
              collapsed = props.collapsed;
            } else {
              collapsed = props.defaultCollapsed;
            }

            _this.state = {
              collapsed: collapsed,
              below: false,
            };
            return _this;
          }

          _createClass(
            Sider,
            [
              {
                key: 'getChildContext',
                value: function getChildContext() {
                  return {
                    siderCollapsed: this.state.collapsed,
                    collapsedWidth: this.props.collapsedWidth,
                  };
                },
              },
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  if (this.mql) {
                    this.mql.addListener(this.responsiveHandler);
                    this.responsiveHandler(this.mql);
                  }

                  if (this.context.siderHook) {
                    this.context.siderHook.addSider(this.uniqueId);
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  if (this.mql) {
                    this.mql.removeListener(this.responsiveHandler);
                  }

                  if (this.context.siderHook) {
                    this.context.siderHook.removeSider(this.uniqueId);
                  }
                },
              },
              {
                key: 'render',
                value: function render() {
                  return React.createElement(
                    _configProvider.ConfigConsumer,
                    null,
                    this.renderSider,
                  );
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function getDerivedStateFromProps(nextProps) {
                  if ('collapsed' in nextProps) {
                    return {
                      collapsed: nextProps.collapsed,
                    };
                  }

                  return null;
                },
              },
            ],
          );

          return Sider;
        })(React.Component);

      Sider.__ANT_LAYOUT_SIDER = true;
      Sider.defaultProps = {
        collapsible: false,
        defaultCollapsed: false,
        reverseArrow: false,
        width: 200,
        collapsedWidth: 80,
        style: {},
        theme: 'dark',
      };
      Sider.childContextTypes = {
        siderCollapsed: PropTypes.bool,
        collapsedWidth: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
      };
      Sider.contextTypes = {
        siderHook: PropTypes.object,
      };
      (0, _reactLifecyclesCompat.polyfill)(Sider);
      var _default = Sider;
      exports['default'] = _default;

      /***/
    },

  /***/ './node_modules/antd/lib/layout/index.js':
    /*!***********************************************!*\
  !*** ./node_modules/antd/lib/layout/index.js ***!
  \***********************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports['default'] = void 0;

      var _layout = _interopRequireDefault(
        __webpack_require__(
          /*! ./layout */ './node_modules/antd/lib/layout/layout.js',
        ),
      );

      var _Sider = _interopRequireDefault(
        __webpack_require__(
          /*! ./Sider */ './node_modules/antd/lib/layout/Sider.js',
        ),
      );

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      _layout['default'].Sider = _Sider['default'];
      var _default = _layout['default'];
      exports['default'] = _default;

      /***/
    },

  /***/ './node_modules/antd/lib/layout/layout.js':
    /*!************************************************!*\
  !*** ./node_modules/antd/lib/layout/layout.js ***!
  \************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports['default'] = void 0;

      var React = _interopRequireWildcard(
        __webpack_require__(/*! react */ './node_modules/react/index.js'),
      );

      var PropTypes = _interopRequireWildcard(
        __webpack_require__(
          /*! prop-types */ './node_modules/antd/node_modules/prop-types/index.js',
        ),
      );

      var _classnames = _interopRequireDefault(
        __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        ),
      );

      var _configProvider = __webpack_require__(
        /*! ../config-provider */ './node_modules/antd/lib/config-provider/index.js',
      );

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(obj, key)
                    : {};
                if (desc.get || desc.set) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }

      function _typeof(obj) {
        if (
          typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === 'function' &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _nonIterableSpread()
        );
      }

      function _nonIterableSpread() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }

      function _iterableToArray(iter) {
        if (
          Symbol.iterator in Object(iter) ||
          Object.prototype.toString.call(iter) === '[object Arguments]'
        )
          return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }

      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === 'object' || typeof call === 'function')
        ) {
          return call;
        }
        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        }
        return self;
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, writable: true, configurable: true },
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      var __rest =
        (void 0 && (void 0).__rest) ||
        function(s, e) {
          var t = {};

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          }

          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
              var i = 0, p = Object.getOwnPropertySymbols(s);
              i < p.length;
              i++
            ) {
              if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
            }
          return t;
        };

      function generator(_ref) {
        var suffixCls = _ref.suffixCls,
          tagName = _ref.tagName;
        return function(BasicComponent) {
          return (
            /*#__PURE__*/
            (function(_React$Component) {
              _inherits(Adapter, _React$Component);

              function Adapter() {
                var _this;

                _classCallCheck(this, Adapter);

                _this = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(Adapter).apply(this, arguments),
                );

                _this.renderComponent = function(_ref2) {
                  var getPrefixCls = _ref2.getPrefixCls;
                  var customizePrefixCls = _this.props.prefixCls;
                  var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
                  return React.createElement(
                    BasicComponent,
                    _extends(
                      {
                        prefixCls: prefixCls,
                        tagName: tagName,
                      },
                      _this.props,
                    ),
                  );
                };

                return _this;
              }

              _createClass(Adapter, [
                {
                  key: 'render',
                  value: function render() {
                    return React.createElement(
                      _configProvider.ConfigConsumer,
                      null,
                      this.renderComponent,
                    );
                  },
                },
              ]);

              return Adapter;
            })(React.Component)
          );
        };
      }

      var Basic =
        /*#__PURE__*/
        (function(_React$Component2) {
          _inherits(Basic, _React$Component2);

          function Basic() {
            _classCallCheck(this, Basic);

            return _possibleConstructorReturn(
              this,
              _getPrototypeOf(Basic).apply(this, arguments),
            );
          }

          _createClass(Basic, [
            {
              key: 'render',
              value: function render() {
                var _a = this.props,
                  prefixCls = _a.prefixCls,
                  className = _a.className,
                  children = _a.children,
                  tagName = _a.tagName,
                  others = __rest(_a, [
                    'prefixCls',
                    'className',
                    'children',
                    'tagName',
                  ]);

                var classString = (0, _classnames['default'])(
                  className,
                  prefixCls,
                );
                return React.createElement(
                  tagName,
                  _extends(
                    {
                      className: classString,
                    },
                    others,
                  ),
                  children,
                );
              },
            },
          ]);

          return Basic;
        })(React.Component);

      var BasicLayout =
        /*#__PURE__*/
        (function(_React$Component3) {
          _inherits(BasicLayout, _React$Component3);

          function BasicLayout() {
            var _this2;

            _classCallCheck(this, BasicLayout);

            _this2 = _possibleConstructorReturn(
              this,
              _getPrototypeOf(BasicLayout).apply(this, arguments),
            );
            _this2.state = {
              siders: [],
            };
            return _this2;
          }

          _createClass(BasicLayout, [
            {
              key: 'getChildContext',
              value: function getChildContext() {
                var _this3 = this;

                return {
                  siderHook: {
                    addSider: function addSider(id) {
                      _this3.setState(function(state) {
                        return {
                          siders: [].concat(_toConsumableArray(state.siders), [
                            id,
                          ]),
                        };
                      });
                    },
                    removeSider: function removeSider(id) {
                      _this3.setState(function(state) {
                        return {
                          siders: state.siders.filter(function(currentId) {
                            return currentId !== id;
                          }),
                        };
                      });
                    },
                  },
                };
              },
            },
            {
              key: 'render',
              value: function render() {
                var _a = this.props,
                  prefixCls = _a.prefixCls,
                  className = _a.className,
                  children = _a.children,
                  hasSider = _a.hasSider,
                  tagName = _a.tagName,
                  others = __rest(_a, [
                    'prefixCls',
                    'className',
                    'children',
                    'hasSider',
                    'tagName',
                  ]);

                var classString = (0, _classnames['default'])(
                  className,
                  prefixCls,
                  _defineProperty(
                    {},
                    ''.concat(prefixCls, '-has-sider'),
                    typeof hasSider === 'boolean'
                      ? hasSider
                      : this.state.siders.length > 0,
                  ),
                );
                return React.createElement(
                  tagName,
                  _extends(
                    {
                      className: classString,
                    },
                    others,
                  ),
                  children,
                );
              },
            },
          ]);

          return BasicLayout;
        })(React.Component);

      BasicLayout.childContextTypes = {
        siderHook: PropTypes.object,
      };
      var Layout = generator({
        suffixCls: 'layout',
        tagName: 'section',
      })(BasicLayout);
      var Header = generator({
        suffixCls: 'layout-header',
        tagName: 'header',
      })(Basic);
      var Footer = generator({
        suffixCls: 'layout-footer',
        tagName: 'footer',
      })(Basic);
      var Content = generator({
        suffixCls: 'layout-content',
        tagName: 'main',
      })(Basic);
      Layout.Header = Header;
      Layout.Footer = Footer;
      Layout.Content = Content;
      var _default = Layout;
      exports['default'] = _default;

      /***/
    },

  /***/ './node_modules/antd/lib/layout/style/index.js':
    /*!*****************************************************!*\
  !*** ./node_modules/antd/lib/layout/style/index.js ***!
  \*****************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      __webpack_require__(
        /*! ../../style/index.less */ './node_modules/antd/lib/style/index.less',
      );

      __webpack_require__(
        /*! ./index.less */ './node_modules/antd/lib/layout/style/index.less',
      );

      /***/
    },

  /***/ './node_modules/core-js/library/fn/json/stringify.js':
    /*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      var core = __webpack_require__(
        /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
      );
      var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
      module.exports = function stringify(it) {
        // eslint-disable-line no-unused-vars
        return $JSON.stringify.apply($JSON, arguments);
      };

      /***/
    },

  /***/ './node_modules/define-properties/index.js':
    /*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var keys = __webpack_require__(
        /*! object-keys */ './node_modules/object-keys/index.js',
      );
      var hasSymbols =
        typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

      var toStr = Object.prototype.toString;
      var concat = Array.prototype.concat;
      var origDefineProperty = Object.defineProperty;

      var isFunction = function(fn) {
        return (
          typeof fn === 'function' && toStr.call(fn) === '[object Function]'
        );
      };

      var arePropertyDescriptorsSupported = function() {
        var obj = {};
        try {
          origDefineProperty(obj, 'x', { enumerable: false, value: obj });
          // eslint-disable-next-line no-unused-vars, no-restricted-syntax
          for (var _ in obj) {
            // jscs:ignore disallowUnusedVariables
            return false;
          }
          return obj.x === obj;
        } catch (e) {
          /* this is IE 8. */
          return false;
        }
      };
      var supportsDescriptors =
        origDefineProperty && arePropertyDescriptorsSupported();

      var defineProperty = function(object, name, value, predicate) {
        if (name in object && (!isFunction(predicate) || !predicate())) {
          return;
        }
        if (supportsDescriptors) {
          origDefineProperty(object, name, {
            configurable: true,
            enumerable: false,
            value: value,
            writable: true,
          });
        } else {
          object[name] = value;
        }
      };

      var defineProperties = function(object, map) {
        var predicates = arguments.length > 2 ? arguments[2] : {};
        var props = keys(map);
        if (hasSymbols) {
          props = concat.call(props, Object.getOwnPropertySymbols(map));
        }
        for (var i = 0; i < props.length; i += 1) {
          defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
        }
      };

      defineProperties.supportsDescriptors = !!supportsDescriptors;

      module.exports = defineProperties;

      /***/
    },

  /***/ './node_modules/function-bind/implementation.js':
    /*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      /* eslint no-invalid-this: 1 */

      var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
      var slice = Array.prototype.slice;
      var toStr = Object.prototype.toString;
      var funcType = '[object Function]';

      module.exports = function bind(that) {
        var target = this;
        if (typeof target !== 'function' || toStr.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slice.call(arguments, 1);

        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) {
              return result;
            }
            return this;
          } else {
            return target.apply(that, args.concat(slice.call(arguments)));
          }
        };

        var boundLength = Math.max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs.push('$' + i);
        }

        bound = Function(
          'binder',
          'return function (' +
            boundArgs.join(',') +
            '){ return binder.apply(this,arguments); }',
        )(binder);

        if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }

        return bound;
      };

      /***/
    },

  /***/ './node_modules/function-bind/index.js':
    /*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var implementation = __webpack_require__(
        /*! ./implementation */ './node_modules/function-bind/implementation.js',
      );

      module.exports = Function.prototype.bind || implementation;

      /***/
    },

  /***/ './node_modules/has-symbols/shams.js':
    /*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      /* eslint complexity: [2, 17], max-statements: [2, 33] */
      module.exports = function hasSymbols() {
        if (
          typeof Symbol !== 'function' ||
          typeof Object.getOwnPropertySymbols !== 'function'
        ) {
          return false;
        }
        if (typeof Symbol.iterator === 'symbol') {
          return true;
        }

        var obj = {};
        var sym = Symbol('test');
        var symObj = Object(sym);
        if (typeof sym === 'string') {
          return false;
        }

        if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
          return false;
        }

        // temp disabled per https://github.com/ljharb/object.assign/issues/17
        // if (sym instanceof Symbol) { return false; }
        // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
        // if (!(symObj instanceof Symbol)) { return false; }

        // if (typeof Symbol.prototype.toString !== 'function') { return false; }
        // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

        var symVal = 42;
        obj[sym] = symVal;
        for (sym in obj) {
          return false;
        } // eslint-disable-line no-restricted-syntax
        if (
          typeof Object.keys === 'function' &&
          Object.keys(obj).length !== 0
        ) {
          return false;
        }

        if (
          typeof Object.getOwnPropertyNames === 'function' &&
          Object.getOwnPropertyNames(obj).length !== 0
        ) {
          return false;
        }

        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }

        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }

        if (typeof Object.getOwnPropertyDescriptor === 'function') {
          var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }

        return true;
      };

      /***/
    },

  /***/ './node_modules/has/src/index.js':
    /*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var bind = __webpack_require__(
        /*! function-bind */ './node_modules/function-bind/index.js',
      );

      module.exports = bind.call(
        Function.call,
        Object.prototype.hasOwnProperty,
      );

      /***/
    },

  /***/ './node_modules/next/dist/client/link.js':
    /*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      /* global __NEXT_DATA__ */

      var _interopRequireDefault = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/interopRequireDefault */ './node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js',
      );

      var _stringify = _interopRequireDefault(
        __webpack_require__(
          /*! @babel/runtime-corejs2/core-js/json/stringify */ './node_modules/@babel/runtime-corejs2/core-js/json/stringify.js',
        ),
      );

      var _typeof2 = _interopRequireDefault(
        __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/typeof */ './node_modules/@babel/runtime-corejs2/helpers/typeof.js',
        ),
      );

      var _classCallCheck2 = _interopRequireDefault(
        __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/classCallCheck */ './node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js',
        ),
      );

      var _createClass2 = _interopRequireDefault(
        __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/createClass */ './node_modules/@babel/runtime-corejs2/helpers/createClass.js',
        ),
      );

      var _possibleConstructorReturn2 = _interopRequireDefault(
        __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ './node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js',
        ),
      );

      var _getPrototypeOf2 = _interopRequireDefault(
        __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/getPrototypeOf */ './node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js',
        ),
      );

      var _inherits2 = _interopRequireDefault(
        __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/inherits */ './node_modules/@babel/runtime-corejs2/helpers/inherits.js',
        ),
      );

      var __importStar =
        (void 0 && (void 0).__importStar) ||
        function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
          result['default'] = mod;
          return result;
        };

      var __importDefault =
        (void 0 && (void 0).__importDefault) ||
        function(mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod,
              };
        };

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var url_1 = __webpack_require__(/*! url */ './node_modules/url/url.js');

      var react_1 = __importStar(
        __webpack_require__(/*! react */ './node_modules/react/index.js'),
      );

      var prop_types_1 = __importDefault(
        __webpack_require__(
          /*! prop-types */ './node_modules/next/node_modules/prop-types/index.js',
        ),
      );

      var router_1 = __importStar(
        __webpack_require__(/*! next/router */ './node_modules/next/router.js'),
      );

      var utils_1 = __webpack_require__(
        /*! next-server/dist/lib/utils */ './node_modules/next-server/dist/lib/utils.js',
      );

      function isLocal(href) {
        var url = url_1.parse(href, false, true);
        var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
        return (
          !url.host ||
          (url.protocol === origin.protocol && url.host === origin.host)
        );
      }

      function memoizedFormatUrl(formatUrl) {
        var lastHref = null;
        var lastAs = null;
        var lastResult = null;
        return function(href, as) {
          if (href === lastHref && as === lastAs) {
            return lastResult;
          }

          var result = formatUrl(href, as);
          lastHref = href;
          lastAs = as;
          lastResult = result;
          return result;
        };
      }

      var Link =
        /*#__PURE__*/
        (function(_react_1$Component) {
          (0, _inherits2.default)(Link, _react_1$Component);

          function Link() {
            var _this;

            (0, _classCallCheck2.default)(this, Link);
            _this = (0, _possibleConstructorReturn2.default)(
              this,
              (0, _getPrototypeOf2.default)(Link).apply(this, arguments),
            ); // The function is memoized so that no extra lifecycles are needed
            // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

            _this.formatUrls = memoizedFormatUrl(function(href, asHref) {
              return {
                href:
                  href && (0, _typeof2.default)(href) === 'object'
                    ? utils_1.formatWithValidation(href)
                    : href,
                as:
                  asHref && (0, _typeof2.default)(asHref) === 'object'
                    ? utils_1.formatWithValidation(asHref)
                    : asHref,
              };
            });

            _this.linkClicked = function(e) {
              var _e$currentTarget = e.currentTarget,
                nodeName = _e$currentTarget.nodeName,
                target = _e$currentTarget.target;

              if (
                nodeName === 'A' &&
                ((target && target !== '_self') ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && e.nativeEvent.which === 2))
              ) {
                // ignore click for new tab / new window behavior
                return;
              }

              var _this$formatUrls = _this.formatUrls(
                  _this.props.href,
                  _this.props.as,
                ),
                href = _this$formatUrls.href,
                as = _this$formatUrls.as;

              if (!isLocal(href)) {
                // ignore click if it's outside our scope
                return;
              }

              var pathname = window.location.pathname;
              href = url_1.resolve(pathname, href);
              as = as ? url_1.resolve(pathname, as) : href;
              e.preventDefault(); //  avoid scroll for urls with anchor refs

              var scroll = _this.props.scroll;

              if (scroll == null) {
                scroll = as.indexOf('#') < 0;
              } // replace state instead of push if prop is present

              router_1.default[_this.props.replace ? 'replace' : 'push'](
                href,
                as,
                {
                  shallow: _this.props.shallow,
                },
              )
                .then(function(success) {
                  if (!success) return;

                  if (scroll) {
                    window.scrollTo(0, 0);
                    document.body.focus();
                  }
                })
                .catch(function(err) {
                  if (_this.props.onError) _this.props.onError(err);
                });
            };

            return _this;
          }

          (0, _createClass2.default)(Link, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                this.prefetch();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(prevProps) {
                if (
                  (0, _stringify.default)(this.props.href) !==
                  (0, _stringify.default)(prevProps.href)
                ) {
                  this.prefetch();
                }
              },
            },
            {
              key: 'prefetch',
              value: function prefetch() {
                if (!this.props.prefetch) return;
                if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

                var pathname = window.location.pathname;

                var _this$formatUrls2 = this.formatUrls(
                    this.props.href,
                    this.props.as,
                  ),
                  parsedHref = _this$formatUrls2.href;

                var href = url_1.resolve(pathname, parsedHref);
                router_1.default.prefetch(href);
              },
            },
            {
              key: 'render',
              value: function render() {
                var _this2 = this;

                var children = this.props.children;

                var _this$formatUrls3 = this.formatUrls(
                    this.props.href,
                    this.props.as,
                  ),
                  href = _this$formatUrls3.href,
                  as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

                if (typeof children === 'string') {
                  children = react_1.default.createElement('a', null, children);
                } // This will return the first child, if multiple are provided it will throw an error

                var child = react_1.Children.only(children);
                var props = {
                  onClick: function onClick(e) {
                    if (
                      child.props &&
                      typeof child.props.onClick === 'function'
                    ) {
                      child.props.onClick(e);
                    }

                    if (!e.defaultPrevented) {
                      _this2.linkClicked(e);
                    }
                  },
                }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
                // defined, we specify the current 'href', so that repetition is not needed by the user

                if (
                  this.props.passHref ||
                  (child.type === 'a' && !('href' in child.props))
                ) {
                  props.href = as || href;
                } // Add the ending slash to the paths. So, we can serve the
                // "<page>/index.html" directly.

                if (
                  props.href &&
                  typeof __NEXT_DATA__ !== 'undefined' &&
                  __NEXT_DATA__.nextExport
                ) {
                  props.href = router_1.Router._rewriteUrlForNextExport(
                    props.href,
                  );
                }

                return react_1.default.cloneElement(child, props);
              },
            },
          ]);
          return Link;
        })(react_1.Component);

      if (true) {
        var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

        var exact = __webpack_require__(
          /*! prop-types-exact */ './node_modules/prop-types-exact/build/index.js',
        );

        Link.propTypes = exact({
          href: prop_types_1.default.oneOfType([
            prop_types_1.default.string,
            prop_types_1.default.object,
          ]).isRequired,
          as: prop_types_1.default.oneOfType([
            prop_types_1.default.string,
            prop_types_1.default.object,
          ]),
          prefetch: prop_types_1.default.bool,
          replace: prop_types_1.default.bool,
          shallow: prop_types_1.default.bool,
          passHref: prop_types_1.default.bool,
          scroll: prop_types_1.default.bool,
          children: prop_types_1.default.oneOfType([
            prop_types_1.default.element,
            function(props, propName) {
              var value = props[propName];

              if (typeof value === 'string') {
                warn(
                  "Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>",
                );
              }

              return null;
            },
          ]).isRequired,
        });
      }

      exports.default = Link;

      /***/
    },

  /***/ './node_modules/next/link.js':
    /*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
        /*! ./dist/client/link */ './node_modules/next/dist/client/link.js',
      );

      /***/
    },

  /***/ './node_modules/object-keys/implementation.js':
    /*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var keysShim;
      if (!Object.keys) {
        // modified from https://github.com/es-shims/es5-shim
        var has = Object.prototype.hasOwnProperty;
        var toStr = Object.prototype.toString;
        var isArgs = __webpack_require__(
          /*! ./isArguments */ './node_modules/object-keys/isArguments.js',
        ); // eslint-disable-line global-require
        var isEnumerable = Object.prototype.propertyIsEnumerable;
        var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
        var hasProtoEnumBug = isEnumerable.call(function() {}, 'prototype');
        var dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor',
        ];
        var equalsConstructorPrototype = function(o) {
          var ctor = o.constructor;
          return ctor && ctor.prototype === o;
        };
        var excludedKeys = {
          $applicationCache: true,
          $console: true,
          $external: true,
          $frame: true,
          $frameElement: true,
          $frames: true,
          $innerHeight: true,
          $innerWidth: true,
          $outerHeight: true,
          $outerWidth: true,
          $pageXOffset: true,
          $pageYOffset: true,
          $parent: true,
          $scrollLeft: true,
          $scrollTop: true,
          $scrollX: true,
          $scrollY: true,
          $self: true,
          $webkitIndexedDB: true,
          $webkitStorageInfo: true,
          $window: true,
        };
        var hasAutomationEqualityBug = (function() {
          /* global window */
          if (typeof window === 'undefined') {
            return false;
          }
          for (var k in window) {
            try {
              if (
                !excludedKeys['$' + k] &&
                has.call(window, k) &&
                window[k] !== null &&
                typeof window[k] === 'object'
              ) {
                try {
                  equalsConstructorPrototype(window[k]);
                } catch (e) {
                  return true;
                }
              }
            } catch (e) {
              return true;
            }
          }
          return false;
        })();
        var equalsConstructorPrototypeIfNotBuggy = function(o) {
          /* global window */
          if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
            return equalsConstructorPrototype(o);
          }
          try {
            return equalsConstructorPrototype(o);
          } catch (e) {
            return false;
          }
        };

        keysShim = function keys(object) {
          var isObject = object !== null && typeof object === 'object';
          var isFunction = toStr.call(object) === '[object Function]';
          var isArguments = isArgs(object);
          var isString = isObject && toStr.call(object) === '[object String]';
          var theKeys = [];

          if (!isObject && !isFunction && !isArguments) {
            throw new TypeError('Object.keys called on a non-object');
          }

          var skipProto = hasProtoEnumBug && isFunction;
          if (isString && object.length > 0 && !has.call(object, 0)) {
            for (var i = 0; i < object.length; ++i) {
              theKeys.push(String(i));
            }
          }

          if (isArguments && object.length > 0) {
            for (var j = 0; j < object.length; ++j) {
              theKeys.push(String(j));
            }
          } else {
            for (var name in object) {
              if (
                !(skipProto && name === 'prototype') &&
                has.call(object, name)
              ) {
                theKeys.push(String(name));
              }
            }
          }

          if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

            for (var k = 0; k < dontEnums.length; ++k) {
              if (
                !(skipConstructor && dontEnums[k] === 'constructor') &&
                has.call(object, dontEnums[k])
              ) {
                theKeys.push(dontEnums[k]);
              }
            }
          }
          return theKeys;
        };
      }
      module.exports = keysShim;

      /***/
    },

  /***/ './node_modules/object-keys/index.js':
    /*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var slice = Array.prototype.slice;
      var isArgs = __webpack_require__(
        /*! ./isArguments */ './node_modules/object-keys/isArguments.js',
      );

      var origKeys = Object.keys;
      var keysShim = origKeys
        ? function keys(o) {
            return origKeys(o);
          }
        : __webpack_require__(
            /*! ./implementation */ './node_modules/object-keys/implementation.js',
          );

      var originalKeys = Object.keys;

      keysShim.shim = function shimObjectKeys() {
        if (Object.keys) {
          var keysWorksWithArguments = (function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
          })(1, 2);
          if (!keysWorksWithArguments) {
            Object.keys = function keys(object) {
              // eslint-disable-line func-name-matching
              if (isArgs(object)) {
                return originalKeys(slice.call(object));
              }
              return originalKeys(object);
            };
          }
        } else {
          Object.keys = keysShim;
        }
        return Object.keys || keysShim;
      };

      module.exports = keysShim;

      /***/
    },

  /***/ './node_modules/object-keys/isArguments.js':
    /*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var toStr = Object.prototype.toString;

      module.exports = function isArguments(value) {
        var str = toStr.call(value);
        var isArgs = str === '[object Arguments]';
        if (!isArgs) {
          isArgs =
            str !== '[object Array]' &&
            value !== null &&
            typeof value === 'object' &&
            typeof value.length === 'number' &&
            value.length >= 0 &&
            toStr.call(value.callee) === '[object Function]';
        }
        return isArgs;
      };

      /***/
    },

  /***/ './node_modules/object.assign/implementation.js':
    /*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      // modified from https://github.com/es-shims/es6-shim
      var keys = __webpack_require__(
        /*! object-keys */ './node_modules/object-keys/index.js',
      );
      var bind = __webpack_require__(
        /*! function-bind */ './node_modules/function-bind/index.js',
      );
      var canBeObject = function(obj) {
        return typeof obj !== 'undefined' && obj !== null;
      };
      var hasSymbols = __webpack_require__(
        /*! has-symbols/shams */ './node_modules/has-symbols/shams.js',
      )();
      var toObject = Object;
      var push = bind.call(Function.call, Array.prototype.push);
      var propIsEnumerable = bind.call(
        Function.call,
        Object.prototype.propertyIsEnumerable,
      );
      var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

      module.exports = function assign(target, source1) {
        if (!canBeObject(target)) {
          throw new TypeError('target must be an object');
        }
        var objTarget = toObject(target);
        var s, source, i, props, syms, value, key;
        for (s = 1; s < arguments.length; ++s) {
          source = toObject(arguments[s]);
          props = keys(source);
          var getSymbols =
            hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
          if (getSymbols) {
            syms = getSymbols(source);
            for (i = 0; i < syms.length; ++i) {
              key = syms[i];
              if (propIsEnumerable(source, key)) {
                push(props, key);
              }
            }
          }
          for (i = 0; i < props.length; ++i) {
            key = props[i];
            value = source[key];
            if (propIsEnumerable(source, key)) {
              objTarget[key] = value;
            }
          }
        }
        return objTarget;
      };

      /***/
    },

  /***/ './node_modules/object.assign/index.js':
    /*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var defineProperties = __webpack_require__(
        /*! define-properties */ './node_modules/define-properties/index.js',
      );

      var implementation = __webpack_require__(
        /*! ./implementation */ './node_modules/object.assign/implementation.js',
      );
      var getPolyfill = __webpack_require__(
        /*! ./polyfill */ './node_modules/object.assign/polyfill.js',
      );
      var shim = __webpack_require__(
        /*! ./shim */ './node_modules/object.assign/shim.js',
      );

      var polyfill = getPolyfill();

      defineProperties(polyfill, {
        getPolyfill: getPolyfill,
        implementation: implementation,
        shim: shim,
      });

      module.exports = polyfill;

      /***/
    },

  /***/ './node_modules/object.assign/polyfill.js':
    /*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var implementation = __webpack_require__(
        /*! ./implementation */ './node_modules/object.assign/implementation.js',
      );

      var lacksProperEnumerationOrder = function() {
        if (!Object.assign) {
          return false;
        }
        // v8, specifically in node 4.x, has a bug with incorrect property enumeration order
        // note: this does not detect the bug unless there's 20 characters
        var str = 'abcdefghijklmnopqrst';
        var letters = str.split('');
        var map = {};
        for (var i = 0; i < letters.length; ++i) {
          map[letters[i]] = letters[i];
        }
        var obj = Object.assign({}, map);
        var actual = '';
        for (var k in obj) {
          actual += k;
        }
        return str !== actual;
      };

      var assignHasPendingExceptions = function() {
        if (!Object.assign || !Object.preventExtensions) {
          return false;
        }
        // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
        // which is 72% slower than our shim, and Firefox 40's native implementation.
        var thrower = Object.preventExtensions({ 1: 2 });
        try {
          Object.assign(thrower, 'xy');
        } catch (e) {
          return thrower[1] === 'y';
        }
        return false;
      };

      module.exports = function getPolyfill() {
        if (!Object.assign) {
          return implementation;
        }
        if (lacksProperEnumerationOrder()) {
          return implementation;
        }
        if (assignHasPendingExceptions()) {
          return implementation;
        }
        return Object.assign;
      };

      /***/
    },

  /***/ './node_modules/object.assign/shim.js':
    /*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var define = __webpack_require__(
        /*! define-properties */ './node_modules/define-properties/index.js',
      );
      var getPolyfill = __webpack_require__(
        /*! ./polyfill */ './node_modules/object.assign/polyfill.js',
      );

      module.exports = function shimAssign() {
        var polyfill = getPolyfill();
        define(Object, { assign: polyfill }, {
          assign: function() {
            return Object.assign !== polyfill;
          },
        });
        return polyfill;
      };

      /***/
    },

  /***/ './node_modules/prop-types-exact/build/helpers/isPlainObject.js':
    /*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
    /*! no static exports found */
    /***/ function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _typeof =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function(obj) {
              return typeof obj;
            }
          : function(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            };

      exports['default'] = isPlainObject;
      function isPlainObject(x) {
        return (
          x &&
          (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' &&
          !Array.isArray(x)
        );
      }
      module.exports = exports['default'];
      //# sourceMappingURL=isPlainObject.js.map

      /***/
    },

  /***/ './node_modules/prop-types-exact/build/index.js':
    /*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports['default'] = forbidExtraProps;

      var _object = __webpack_require__(
        /*! object.assign */ './node_modules/object.assign/index.js',
      );

      var _object2 = _interopRequireDefault(_object);

      var _has = __webpack_require__(
        /*! has */ './node_modules/has/src/index.js',
      );

      var _has2 = _interopRequireDefault(_has);

      var _isPlainObject = __webpack_require__(
        /*! ./helpers/isPlainObject */ './node_modules/prop-types-exact/build/helpers/isPlainObject.js',
      );

      var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var zeroWidthSpace = '\u200B';
      var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
      var semaphore =
        typeof Symbol === 'function' && typeof Symbol['for'] === 'function'
          ? Symbol['for'](specialProperty)
          : /* istanbul ignore next */ specialProperty;

      function brand(fn) {
        return (0, _object2['default'])(
          fn,
          _defineProperty({}, specialProperty, semaphore),
        );
      }

      function isBranded(value) {
        return value && value[specialProperty] === semaphore;
      }

      function forbidExtraProps(propTypes) {
        if (!(0, _isPlainObject2['default'])(propTypes)) {
          throw new TypeError('given propTypes must be an object');
        }
        if (
          (0, _has2['default'])(propTypes, specialProperty) &&
          !isBranded(propTypes[specialProperty])
        ) {
          throw new TypeError(
            'Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`',
          );
        }

        return (0, _object2['default'])(
          {},
          propTypes,
          _defineProperty(
            {},
            specialProperty,
            brand(
              (function() {
                function forbidUnknownProps(props, _, componentName) {
                  var unknownProps = Object.keys(props).filter(function(prop) {
                    return !(0, _has2['default'])(propTypes, prop);
                  });
                  if (unknownProps.length > 0) {
                    return new TypeError(
                      String(componentName) +
                        ': unknown props found: ' +
                        String(unknownProps.join(', ')),
                    );
                  }
                  return null;
                }

                return forbidUnknownProps;
              })(),
            ),
          ),
        );
      }
      module.exports = exports['default'];
      //# sourceMappingURL=index.js.map

      /***/
    },

  /***/ './node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js':
    /*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
    /*! exports provided: polyfill */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'polyfill',
        function() {
          return polyfill;
        },
      );
      /**
       * Copyright (c) 2013-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      function componentWillMount() {
        // Call this.constructor.gDSFP to support sub-classes.
        var state = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state,
        );
        if (state !== null && state !== undefined) {
          this.setState(state);
        }
      }

      function componentWillReceiveProps(nextProps) {
        // Call this.constructor.gDSFP to support sub-classes.
        // Use the setState() updater to ensure state isn't stale in certain edge cases.
        function updater(prevState) {
          var state = this.constructor.getDerivedStateFromProps(
            nextProps,
            prevState,
          );
          return state !== null && state !== undefined ? state : null;
        }
        // Binding "this" is important for shallow renderer support.
        this.setState(updater.bind(this));
      }

      function componentWillUpdate(nextProps, nextState) {
        try {
          var prevProps = this.props;
          var prevState = this.state;
          this.props = nextProps;
          this.state = nextState;
          this.__reactInternalSnapshotFlag = true;
          this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
            prevProps,
            prevState,
          );
        } finally {
          this.props = prevProps;
          this.state = prevState;
        }
      }

      // React may warn about cWM/cWRP/cWU methods being deprecated.
      // Add a flag to suppress these warnings for this special case.
      componentWillMount.__suppressDeprecationWarning = true;
      componentWillReceiveProps.__suppressDeprecationWarning = true;
      componentWillUpdate.__suppressDeprecationWarning = true;

      function polyfill(Component) {
        var prototype = Component.prototype;

        if (!prototype || !prototype.isReactComponent) {
          throw new Error('Can only polyfill class components');
        }

        if (
          typeof Component.getDerivedStateFromProps !== 'function' &&
          typeof prototype.getSnapshotBeforeUpdate !== 'function'
        ) {
          return Component;
        }

        // If new component APIs are defined, "unsafe" lifecycles won't be called.
        // Error if any of these lifecycles are present,
        // Because they would work differently between older and newer (16.3+) versions of React.
        var foundWillMountName = null;
        var foundWillReceivePropsName = null;
        var foundWillUpdateName = null;
        if (typeof prototype.componentWillMount === 'function') {
          foundWillMountName = 'componentWillMount';
        } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
          foundWillMountName = 'UNSAFE_componentWillMount';
        }
        if (typeof prototype.componentWillReceiveProps === 'function') {
          foundWillReceivePropsName = 'componentWillReceiveProps';
        } else if (
          typeof prototype.UNSAFE_componentWillReceiveProps === 'function'
        ) {
          foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
        }
        if (typeof prototype.componentWillUpdate === 'function') {
          foundWillUpdateName = 'componentWillUpdate';
        } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
          foundWillUpdateName = 'UNSAFE_componentWillUpdate';
        }
        if (
          foundWillMountName !== null ||
          foundWillReceivePropsName !== null ||
          foundWillUpdateName !== null
        ) {
          var componentName = Component.displayName || Component.name;
          var newApiName =
            typeof Component.getDerivedStateFromProps === 'function'
              ? 'getDerivedStateFromProps()'
              : 'getSnapshotBeforeUpdate()';

          throw Error(
            'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
              componentName +
              ' uses ' +
              newApiName +
              ' but also contains the following legacy lifecycles:' +
              (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
              (foundWillReceivePropsName !== null
                ? '\n  ' + foundWillReceivePropsName
                : '') +
              (foundWillUpdateName !== null
                ? '\n  ' + foundWillUpdateName
                : '') +
              '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
              'https://fb.me/react-async-component-lifecycle-hooks',
          );
        }

        // React <= 16.2 does not support static getDerivedStateFromProps.
        // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
        // Newer versions of React will ignore these lifecycles if gDSFP exists.
        if (typeof Component.getDerivedStateFromProps === 'function') {
          prototype.componentWillMount = componentWillMount;
          prototype.componentWillReceiveProps = componentWillReceiveProps;
        }

        // React <= 16.2 does not support getSnapshotBeforeUpdate.
        // As a workaround, use cWU to invoke the new lifecycle.
        // Newer versions of React will ignore that lifecycle if gSBU exists.
        if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
          if (typeof prototype.componentDidUpdate !== 'function') {
            throw new Error(
              'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype',
            );
          }

          prototype.componentWillUpdate = componentWillUpdate;

          var componentDidUpdate = prototype.componentDidUpdate;

          prototype.componentDidUpdate = function componentDidUpdatePolyfill(
            prevProps,
            prevState,
            maybeSnapshot,
          ) {
            // 16.3+ will not execute our will-update method;
            // It will pass a snapshot value to did-update though.
            // Older versions will require our polyfilled will-update value.
            // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
            // Because for <= 15.x versions this might be a "prevContext" object.
            // We also can't just check "__reactInternalSnapshot",
            // Because get-snapshot might return a falsy value.
            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
            var snapshot = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : maybeSnapshot;

            componentDidUpdate.call(this, prevProps, prevState, snapshot);
          };
        }

        return Component;
      }

      /***/
    },

  /***/ './pages/index.tsx':
    /*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
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
      /* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! antd/lib/icon/style */ './node_modules/antd/lib/icon/style/index.js',
      );
      /* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! antd/lib/icon */ './node_modules/antd/lib/icon/index.js',
      );
      /* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @babel/runtime-corejs2/regenerator */ './node_modules/@babel/runtime-corejs2/regenerator/index.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ './node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ './node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/createClass */ './node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ './node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ './node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ './node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/inherits */ './node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ './node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_13__,
      );
      /* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        /*! ../components/Section */ './components/Section.tsx',
      );
      /* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
        /*! ../components/Layout */ './components/Layout.tsx',
      );

      var Index =
        /*#__PURE__*/
        (function(_React$Component) {
          Object(
            _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__[
              'default'
            ],
          )(Index, _React$Component);

          function Index() {
            var _getPrototypeOf2;

            var _this;

            Object(
              _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__[
                'default'
              ],
            )(this, Index);

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            _this = Object(
              _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__[
                'default'
              ],
            )(
              this,
              (_getPrototypeOf2 = Object(
                _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__[
                  'default'
                ],
              )(Index)).call.apply(_getPrototypeOf2, [this].concat(args)),
            );

            Object(
              _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[
                'default'
              ],
            )(
              Object(
                _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[
                  'default'
                ],
              )(_this),
              'state',
              {
                user: {
                  gender: '',
                  name: '',
                  region: '',
                  surname: '',
                  photo: '',
                },
              },
            );

            return _this;
          }

          Object(
            _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__[
              'default'
            ],
          )(Index, [
            {
              key: 'componentDidMount',
              value: (function() {
                var _componentDidMount = Object(
                  _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[
                    'default'
                  ],
                )(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(
                    function _callee() {
                      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                alert('yo');

                              case 1:
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

                function componentDidMount() {
                  return _componentDidMount.apply(this, arguments);
                }

                return componentDidMount;
              })(),
            },
            {
              key: 'render',
              value: function render() {
                var _this$state$user = this.state.user,
                  gender = _this$state$user.gender,
                  name = _this$state$user.name,
                  region = _this$state$user.region,
                  surname = _this$state$user.surname,
                  photo = _this$state$user.photo;
                return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                  _components_Layout__WEBPACK_IMPORTED_MODULE_15__['default'],
                  null,
                  react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                    _components_Section__WEBPACK_IMPORTED_MODULE_14__[
                      'default'
                    ],
                    {
                      fullscreen: true,
                    },
                    react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                      antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a,
                      {
                        hoverable: true,
                        style: {
                          width: 200,
                        },
                        cover: react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                          'img',
                          {
                            alt: 'avatar',
                            src: photo,
                          },
                        ),
                        actions: [
                          react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                            antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a,
                            {
                              key: 1,
                              type: 'like',
                            },
                          ),
                          react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                            antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a,
                            {
                              key: 2,
                              type: 'heart',
                            },
                          ),
                          react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                            antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a,
                            {
                              key: 3,
                              type: 'instagram',
                            },
                          ),
                        ],
                      },
                      react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                        antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a
                          .Meta,
                        {
                          title: ''.concat(name, ' ').concat(surname),
                          description: ''.concat(region, ', ').concat(gender),
                        },
                      ),
                    ),
                  ),
                );
              },
            },
          ]);

          return Index;
        })(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

      /* harmony default export */ __webpack_exports__['default'] = Index;

      /***/
    },
});
//# sourceMappingURL=index.js.745c457b0f22080f9473.hot-update.js.map

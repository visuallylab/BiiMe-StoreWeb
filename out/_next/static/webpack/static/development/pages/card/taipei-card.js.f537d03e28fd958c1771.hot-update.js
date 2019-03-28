webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './node_modules/antd/lib/avatar/index.js':
    /*!***********************************************!*\
  !*** ./node_modules/antd/lib/avatar/index.js ***!
  \***********************************************/
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

      var _icon = _interopRequireDefault(
        __webpack_require__(
          /*! ../icon */ './node_modules/antd/lib/icon/index.js',
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

      var Avatar =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(Avatar, _React$Component);

          function Avatar() {
            var _this;

            _classCallCheck(this, Avatar);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(Avatar).apply(this, arguments),
            );
            _this.state = {
              scale: 1,
              isImgExist: true,
            };

            _this.setScale = function() {
              if (!_this.avatarChildren || !_this.avatarNode) {
                return;
              }

              var childrenWidth = _this.avatarChildren.offsetWidth; // offsetWidth avoid affecting be transform scale

              var nodeWidth = _this.avatarNode.offsetWidth; // denominator is 0 is no meaning

              if (
                childrenWidth === 0 ||
                nodeWidth === 0 ||
                (_this.lastChildrenWidth === childrenWidth &&
                  _this.lastNodeWidth === nodeWidth)
              ) {
                return;
              }

              _this.lastChildrenWidth = childrenWidth;
              _this.lastNodeWidth = nodeWidth; // add 4px gap for each side to get better performance

              _this.setState({
                scale:
                  nodeWidth - 8 < childrenWidth
                    ? (nodeWidth - 8) / childrenWidth
                    : 1,
              });
            };

            _this.handleImgLoadError = function() {
              var onError = _this.props.onError;
              var errorFlag = onError ? onError() : undefined;

              if (errorFlag !== false) {
                _this.setState({
                  isImgExist: false,
                });
              }
            };

            _this.renderAvatar = function(_ref) {
              var _classNames, _classNames2;

              var getPrefixCls = _ref.getPrefixCls;

              var _a = _this.props,
                customizePrefixCls = _a.prefixCls,
                shape = _a.shape,
                size = _a.size,
                src = _a.src,
                srcSet = _a.srcSet,
                icon = _a.icon,
                className = _a.className,
                alt = _a.alt,
                others = __rest(_a, [
                  'prefixCls',
                  'shape',
                  'size',
                  'src',
                  'srcSet',
                  'icon',
                  'className',
                  'alt',
                ]);

              var _this$state = _this.state,
                isImgExist = _this$state.isImgExist,
                scale = _this$state.scale;
              var prefixCls = getPrefixCls('avatar', customizePrefixCls);
              var sizeCls = (0, _classnames['default'])(
                ((_classNames = {}),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-lg'),
                  size === 'large',
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-sm'),
                  size === 'small',
                ),
                _classNames),
              );
              var classString = (0, _classnames['default'])(
                prefixCls,
                className,
                sizeCls,
                ((_classNames2 = {}),
                _defineProperty(
                  _classNames2,
                  ''.concat(prefixCls, '-').concat(shape),
                  shape,
                ),
                _defineProperty(
                  _classNames2,
                  ''.concat(prefixCls, '-image'),
                  src && isImgExist,
                ),
                _defineProperty(
                  _classNames2,
                  ''.concat(prefixCls, '-icon'),
                  icon,
                ),
                _classNames2),
              );
              var sizeStyle =
                typeof size === 'number'
                  ? {
                      width: size,
                      height: size,
                      lineHeight: ''.concat(size, 'px'),
                      fontSize: icon ? size / 2 : 18,
                    }
                  : {};
              var children = _this.props.children;

              if (src && isImgExist) {
                children = React.createElement('img', {
                  src: src,
                  srcSet: srcSet,
                  onError: _this.handleImgLoadError,
                  alt: alt,
                });
              } else if (icon) {
                children = React.createElement(_icon['default'], {
                  type: icon,
                });
              } else {
                var childrenNode = _this.avatarChildren;

                if (childrenNode || scale !== 1) {
                  var transformString = 'scale('.concat(
                    scale,
                    ') translateX(-50%)',
                  );
                  var childrenStyle = {
                    msTransform: transformString,
                    WebkitTransform: transformString,
                    transform: transformString,
                  };
                  var sizeChildrenStyle =
                    typeof size === 'number'
                      ? {
                          lineHeight: ''.concat(size, 'px'),
                        }
                      : {};
                  children = React.createElement(
                    'span',
                    {
                      className: ''.concat(prefixCls, '-string'),
                      ref: function ref(node) {
                        return (_this.avatarChildren = node);
                      },
                      style: _extends({}, sizeChildrenStyle, childrenStyle),
                    },
                    children,
                  );
                } else {
                  children = React.createElement(
                    'span',
                    {
                      className: ''.concat(prefixCls, '-string'),
                      ref: function ref(node) {
                        return (_this.avatarChildren = node);
                      },
                    },
                    children,
                  );
                }
              }

              return React.createElement(
                'span',
                _extends({}, others, {
                  style: _extends({}, sizeStyle, others.style),
                  className: classString,
                  ref: function ref(node) {
                    return (_this.avatarNode = node);
                  },
                }),
                children,
              );
            };

            return _this;
          }

          _createClass(Avatar, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                this.setScale();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(prevProps) {
                this.setScale();

                if (prevProps.src !== this.props.src) {
                  this.setState({
                    isImgExist: true,
                    scale: 1,
                  });
                }
              },
            },
            {
              key: 'render',
              value: function render() {
                return React.createElement(
                  _configProvider.ConfigConsumer,
                  null,
                  this.renderAvatar,
                );
              },
            },
          ]);

          return Avatar;
        })(React.Component);

      exports['default'] = Avatar;
      Avatar.defaultProps = {
        shape: 'circle',
        size: 'default',
      };

      /***/
    },

  /***/ './node_modules/antd/lib/avatar/style/index.js':
    /*!*****************************************************!*\
  !*** ./node_modules/antd/lib/avatar/style/index.js ***!
  \*****************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      __webpack_require__(
        /*! ../../style/index.less */ './node_modules/antd/lib/style/index.less',
      );

      __webpack_require__(
        /*! ./index.less */ './node_modules/antd/lib/avatar/style/index.less',
      );

      /***/
    },

  /***/ './node_modules/antd/lib/icon/style/index.js':
    /*!***************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/index.js ***!
  \***************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      __webpack_require__(
        /*! ../../style/index.less */ './node_modules/antd/lib/style/index.less',
      );

      __webpack_require__(
        /*! ./index.less */ './node_modules/antd/lib/icon/style/index.less',
      );

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
      /* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! antd/lib/card/style */ './node_modules/antd/lib/card/style/index.js',
      );
      /* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_card_style__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! antd/lib/card */ './node_modules/antd/lib/card/index.js',
      );
      /* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_card__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! antd/lib/avatar/style */ './node_modules/antd/lib/avatar/style/index.js',
      );
      /* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! antd/lib/avatar */ './node_modules/antd/lib/avatar/index.js',
      );
      /* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! antd/lib/icon/style */ './node_modules/antd/lib/icon/style/index.js',
      );
      /* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! antd/lib/icon */ './node_modules/antd/lib/icon/index.js',
      );
      /* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_8__,
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! axios */ './node_modules/axios/index.js',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_9__,
      );
      /* harmony import */ var _layouts_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../../layouts/Card */ './layouts/Card.tsx',
      );
      /* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../../components/Section */ './components/Section.tsx',
      );

      function TaiPeiCard(_ref) {
        var user = _ref.user;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
          _layouts_Card__WEBPACK_IMPORTED_MODULE_10__['default'],
          null,
          react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
            _components_Section__WEBPACK_IMPORTED_MODULE_11__['default'],
            {
              fullscreen: true,
            },
            react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
              antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a,
              {
                style: {
                  width: 300,
                },
                cover: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                  'img',
                  {
                    alt: 'example',
                    src:
                      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                  },
                ),
                actions: [
                  react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                    antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a,
                    {
                      type: 'setting',
                    },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                    antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a,
                    {
                      type: 'edit',
                    },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                    antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a,
                    {
                      type: 'ellipsis',
                    },
                  ),
                ],
              },
              react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                antd_lib_card__WEBPACK_IMPORTED_MODULE_3___default.a.Meta,
                {
                  avatar: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(
                    antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5___default.a,
                    {
                      src:
                        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    },
                  ),
                  title: 'Card title',
                  description: 'This is the description',
                },
              ),
            ),
            ',',
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
                          return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(
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
//# sourceMappingURL=taipei-card.js.f537d03e28fd958c1771.hot-update.js.map

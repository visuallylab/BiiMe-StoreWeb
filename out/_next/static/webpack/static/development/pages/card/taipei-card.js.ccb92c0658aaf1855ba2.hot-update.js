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
      /* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! antd/lib/avatar/style */ './node_modules/antd/lib/avatar/style/index.js',
      );
      /* harmony import */ var antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_avatar_style__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! antd/lib/avatar */ './node_modules/antd/lib/avatar/index.js',
      );
      /* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! styled-jsx/style */ './node_modules/styled-jsx/style.js',
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_3__,
      );

      function Profile(_ref) {
        var user = _ref.user;
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          {
            className: 'jsx-3455652785' + ' ' + 'container',
          },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a,
            {
              src:
                'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              size: 64,
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-3455652785' + ' ' + 'item',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-3455652785' + ' ' + 'title',
              },
              'Did:\xA0',
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-3455652785',
              },
              user.did,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-3455652785' + ' ' + 'item',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-3455652785' + ' ' + 'title',
              },
              'Name:\xA0',
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-3455652785',
              },
              user.name,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-3455652785' + ' ' + 'item',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-3455652785' + ' ' + 'title',
              },
              'Certification Name:\xA0',
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-3455652785',
              },
              user.certificationName,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-3455652785' + ' ' + 'item',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-3455652785' + ' ' + 'title',
              },
              'Certificated At:\xA0',
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-3455652785',
              },
              user.certificatedAt,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-3455652785' + ' ' + 'item',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-3455652785' + ' ' + 'title',
              },
              'Expired At:\xA0',
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-3455652785',
              },
              user.expiredAt,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a,
            {
              id: '3455652785',
            },
            '.container.jsx-3455652785{margin:0 0 16px;padding:16px;border-radius:10px;background-color:white;}.title.jsx-3455652785{font-weight:500;font-size:16px;}.item.jsx-3455652785{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7F7F7F;padding:12px 0;font-size:14px;border-bottom:solid .5px;}.item.jsx-3455652785:last-child{border-bottom:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9Qcm9maWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2tCLEFBRzJCLEFBT0EsQUFLSCxBQVNNLGdCQXBCTixBQU9FLEdBY2pCLFVBcEJxQixFQU9yQixpQkFOeUIsdUJBQ3pCLEdBU3FCLDZGQUNMLGNBQ0MsZUFDQSxlQUNVLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IHR5cGUgVFVzZXIgPSB7XG4gIGRpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNlcnRpZmljYXRpb25OYW1lOiBzdHJpbmc7XG4gIGNlcnRpZmljYXRlZEF0OiBzdHJpbmc7XG4gIGV4cGlyZWRBdDogc3RyaW5nO1xuICBpc3N1ZXJOYW1lOiBzdHJpbmc7XG4gIHRyYW5zYWN0aW9uSGFzaDogc3RyaW5nO1xuICBpbWFnZUNoZWNrc3VtOiBzdHJpbmc7XG59O1xuXG50eXBlIFRQcm9wcyA9IHtcbiAgdXNlcjogVFVzZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoeyB1c2VyIH06IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8QXZhdGFyIHNyYz1cImh0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmdcIiBzaXplPXs2NH0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RGlkOiZuYnNwOzwvc3Bhbj48c3Bhbj57dXNlci5kaWR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5OYW1lOiZuYnNwOzwvc3Bhbj48c3Bhbj57dXNlci5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Q2VydGlmaWNhdGlvbiBOYW1lOiZuYnNwOzwvc3Bhbj48c3Bhbj57dXNlci5jZXJ0aWZpY2F0aW9uTmFtZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNlcnRpZmljYXRlZCBBdDombmJzcDs8L3NwYW4+PHNwYW4+e3VzZXIuY2VydGlmaWNhdGVkQXR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5FeHBpcmVkIEF0OiZuYnNwOzwvc3Bhbj48c3Bhbj57dXNlci5leHBpcmVkQXR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM3RjdGN0Y7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAuNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW06bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Profile.tsx */',
          ),
        );
      }

      /***/
    },

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
});
//# sourceMappingURL=taipei-card.js.ccb92c0658aaf1855ba2.hot-update.js.map

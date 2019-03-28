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
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a,
          {
            itemLayout: 'horizontal',
            dataSource: [{}, {}],
            renderItem: function renderItem(item) {
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
                    'Certification: ',
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

  /***/ './node_modules/antd/lib/empty/style/index.js':
    /*!****************************************************!*\
  !*** ./node_modules/antd/lib/empty/style/index.js ***!
  \****************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      __webpack_require__(
        /*! ../../style/index.less */ './node_modules/antd/lib/style/index.less',
      );

      __webpack_require__(
        /*! ./index.less */ './node_modules/antd/lib/empty/style/index.less',
      );

      /***/
    },

  /***/ './node_modules/antd/lib/list/Item.js':
    /*!********************************************!*\
  !*** ./node_modules/antd/lib/list/Item.js ***!
  \********************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports['default'] = exports.Meta = void 0;

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

      var _grid = __webpack_require__(
        /*! ../grid */ './node_modules/antd/lib/grid/index.js',
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

      var Meta = function Meta(props) {
        return React.createElement(
          _configProvider.ConfigConsumer,
          null,
          function(_ref) {
            var getPrefixCls = _ref.getPrefixCls;

            var customizePrefixCls = props.prefixCls,
              className = props.className,
              avatar = props.avatar,
              title = props.title,
              description = props.description,
              others = __rest(props, [
                'prefixCls',
                'className',
                'avatar',
                'title',
                'description',
              ]);

            var prefixCls = getPrefixCls('list', customizePrefixCls);
            var classString = (0, _classnames['default'])(
              ''.concat(prefixCls, '-item-meta'),
              className,
            );
            var content = React.createElement(
              'div',
              {
                className: ''.concat(prefixCls, '-item-meta-content'),
              },
              title &&
                React.createElement(
                  'h4',
                  {
                    className: ''.concat(prefixCls, '-item-meta-title'),
                  },
                  title,
                ),
              description &&
                React.createElement(
                  'div',
                  {
                    className: ''.concat(prefixCls, '-item-meta-description'),
                  },
                  description,
                ),
            );
            return React.createElement(
              'div',
              _extends({}, others, {
                className: classString,
              }),
              avatar &&
                React.createElement(
                  'div',
                  {
                    className: ''.concat(prefixCls, '-item-meta-avatar'),
                  },
                  avatar,
                ),
              (title || description) && content,
            );
          },
        );
      };

      exports.Meta = Meta;

      function getGrid(grid, t) {
        return grid[t] && Math.floor(24 / grid[t]);
      }

      var Item =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(Item, _React$Component);

          function Item() {
            var _this;

            _classCallCheck(this, Item);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(Item).apply(this, arguments),
            );

            _this.renderItem = function(_ref2) {
              var getPrefixCls = _ref2.getPrefixCls;
              var _this$context = _this.context,
                grid = _this$context.grid,
                itemLayout = _this$context.itemLayout;

              var _a = _this.props,
                customizePrefixCls = _a.prefixCls,
                children = _a.children,
                actions = _a.actions,
                extra = _a.extra,
                className = _a.className,
                others = __rest(_a, [
                  'prefixCls',
                  'children',
                  'actions',
                  'extra',
                  'className',
                ]);

              var prefixCls = getPrefixCls('list', customizePrefixCls);
              var actionsContent =
                actions &&
                actions.length > 0 &&
                React.createElement(
                  'ul',
                  {
                    className: ''.concat(prefixCls, '-item-action'),
                    key: 'actions',
                  },
                  actions.map(function(action, i) {
                    return React.createElement(
                      'li',
                      {
                        key: ''.concat(prefixCls, '-item-action-').concat(i),
                      },
                      action,
                      i !== actions.length - 1 &&
                        React.createElement('em', {
                          className: ''.concat(prefixCls, '-item-action-split'),
                        }),
                    );
                  }),
                );
              var itemChildren = React.createElement(
                'div',
                _extends({}, others, {
                  className: (0, _classnames['default'])(
                    ''.concat(prefixCls, '-item'),
                    className,
                    _defineProperty(
                      {},
                      ''.concat(prefixCls, '-item-no-flex'),
                      !_this.isFlexMode(),
                    ),
                  ),
                }),
                itemLayout === 'vertical' && extra
                  ? [
                      React.createElement(
                        'div',
                        {
                          className: ''.concat(prefixCls, '-item-main'),
                          key: 'content',
                        },
                        children,
                        actionsContent,
                      ),
                      React.createElement(
                        'div',
                        {
                          className: ''.concat(prefixCls, '-item-extra'),
                          key: 'extra',
                        },
                        extra,
                      ),
                    ]
                  : [
                      children,
                      actionsContent,
                      extra
                        ? React.cloneElement(extra, {
                            key: 'extra',
                          })
                        : null,
                    ],
              );
              return grid
                ? React.createElement(
                    _grid.Col,
                    {
                      span: getGrid(grid, 'column'),
                      xs: getGrid(grid, 'xs'),
                      sm: getGrid(grid, 'sm'),
                      md: getGrid(grid, 'md'),
                      lg: getGrid(grid, 'lg'),
                      xl: getGrid(grid, 'xl'),
                      xxl: getGrid(grid, 'xxl'),
                    },
                    itemChildren,
                  )
                : itemChildren;
            };

            return _this;
          }

          _createClass(Item, [
            {
              key: 'isItemContainsTextNode',
              value: function isItemContainsTextNode() {
                var children = this.props.children;
                var result;
                React.Children.forEach(children, function(element) {
                  if (typeof element === 'string') {
                    result = true;
                  }
                });
                return result;
              },
            },
            {
              key: 'isFlexMode',
              value: function isFlexMode() {
                var extra = this.props.extra;
                var itemLayout = this.context.itemLayout;

                if (itemLayout === 'vertical') {
                  return !!extra;
                }

                return !this.isItemContainsTextNode();
              },
            },
            {
              key: 'render',
              value: function render() {
                return React.createElement(
                  _configProvider.ConfigConsumer,
                  null,
                  this.renderItem,
                );
              },
            },
          ]);

          return Item;
        })(React.Component);

      exports['default'] = Item;
      Item.Meta = Meta;
      Item.contextTypes = {
        grid: PropTypes.any,
        itemLayout: PropTypes.string,
      };

      /***/
    },

  /***/ './node_modules/antd/lib/list/index.js':
    /*!*********************************************!*\
  !*** ./node_modules/antd/lib/list/index.js ***!
  \*********************************************/
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

      var _spin = _interopRequireDefault(
        __webpack_require__(
          /*! ../spin */ './node_modules/antd/lib/spin/index.js',
        ),
      );

      var _pagination = _interopRequireDefault(
        __webpack_require__(
          /*! ../pagination */ './node_modules/antd/lib/pagination/index.js',
        ),
      );

      var _grid = __webpack_require__(
        /*! ../grid */ './node_modules/antd/lib/grid/index.js',
      );

      var _Item = _interopRequireDefault(
        __webpack_require__(
          /*! ./Item */ './node_modules/antd/lib/list/Item.js',
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

      var List =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(List, _React$Component);

          function List() {
            var _this;

            _classCallCheck(this, List);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(List).apply(this, arguments),
            );
            _this.state = {
              paginationCurrent: 1,
            };
            _this.defaultPaginationProps = {
              current: 1,
              pageSize: 10,
              onChange: function onChange(page, pageSize) {
                var pagination = _this.props.pagination;

                _this.setState({
                  paginationCurrent: page,
                });

                if (pagination && pagination.onChange) {
                  pagination.onChange(page, pageSize);
                }
              },
              total: 0,
            };
            _this.keys = {};

            _this.renderItem = function(item, index) {
              var _this$props = _this.props,
                renderItem = _this$props.renderItem,
                rowKey = _this$props.rowKey;
              var key;

              if (typeof rowKey === 'function') {
                key = rowKey(item);
              } else if (typeof rowKey === 'string') {
                key = item[rowKey];
              } else {
                key = item.key;
              }

              if (!key) {
                key = 'list-item-'.concat(index);
              }

              _this.keys[index] = key;
              return renderItem(item, index);
            };

            _this.renderEmpty = function(prefixCls, renderEmpty) {
              var locale = _this.props.locale;
              return React.createElement(
                'div',
                {
                  className: ''.concat(prefixCls, '-empty-text'),
                },
                (locale && locale.emptyText) || renderEmpty('List'),
              );
            };

            _this.renderList = function(_ref) {
              var _classNames;

              var getPrefixCls = _ref.getPrefixCls,
                renderEmpty = _ref.renderEmpty;
              var paginationCurrent = _this.state.paginationCurrent;

              var _a = _this.props,
                customizePrefixCls = _a.prefixCls,
                bordered = _a.bordered,
                split = _a.split,
                className = _a.className,
                children = _a.children,
                itemLayout = _a.itemLayout,
                loadMore = _a.loadMore,
                pagination = _a.pagination,
                grid = _a.grid,
                dataSource = _a.dataSource,
                size = _a.size,
                rowKey = _a.rowKey,
                renderItem = _a.renderItem,
                header = _a.header,
                footer = _a.footer,
                loading = _a.loading,
                locale = _a.locale,
                rest = __rest(_a, [
                  'prefixCls',
                  'bordered',
                  'split',
                  'className',
                  'children',
                  'itemLayout',
                  'loadMore',
                  'pagination',
                  'grid',
                  'dataSource',
                  'size',
                  'rowKey',
                  'renderItem',
                  'header',
                  'footer',
                  'loading',
                  'locale',
                ]);

              var prefixCls = getPrefixCls('list', customizePrefixCls);
              var loadingProp = loading;

              if (typeof loadingProp === 'boolean') {
                loadingProp = {
                  spinning: loadingProp,
                };
              }

              var isLoading = loadingProp && loadingProp.spinning; // large => lg
              // small => sm

              var sizeCls = '';

              switch (size) {
                case 'large':
                  sizeCls = 'lg';
                  break;

                case 'small':
                  sizeCls = 'sm';

                default:
                  break;
              }

              var classString = (0, _classnames['default'])(
                prefixCls,
                className,
                ((_classNames = {}),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-vertical'),
                  itemLayout === 'vertical',
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-').concat(sizeCls),
                  sizeCls,
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-split'),
                  split,
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-bordered'),
                  bordered,
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-loading'),
                  isLoading,
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-grid'),
                  grid,
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-something-after-last-item'),
                  _this.isSomethingAfterLastItem(),
                ),
                _classNames),
              );

              var paginationProps = _extends(
                {},
                _this.defaultPaginationProps,
                {
                  total: dataSource.length,
                  current: paginationCurrent,
                },
                pagination || {},
              );

              var largestPage = Math.ceil(
                paginationProps.total / paginationProps.pageSize,
              );

              if (paginationProps.current > largestPage) {
                paginationProps.current = largestPage;
              }

              var paginationContent = pagination
                ? React.createElement(
                    'div',
                    {
                      className: ''.concat(prefixCls, '-pagination'),
                    },
                    React.createElement(
                      _pagination['default'],
                      _extends({}, paginationProps, {
                        onChange: _this.defaultPaginationProps.onChange,
                      }),
                    ),
                  )
                : null;

              var splitDataSource = _toConsumableArray(dataSource);

              if (pagination) {
                if (
                  dataSource.length >
                  (paginationProps.current - 1) * paginationProps.pageSize
                ) {
                  splitDataSource = _toConsumableArray(dataSource).splice(
                    (paginationProps.current - 1) * paginationProps.pageSize,
                    paginationProps.pageSize,
                  );
                }
              }

              var childrenContent;
              childrenContent =
                isLoading &&
                React.createElement('div', {
                  style: {
                    minHeight: 53,
                  },
                });

              if (splitDataSource.length > 0) {
                var items = splitDataSource.map(function(item, index) {
                  return _this.renderItem(item, index);
                });
                var childrenList = [];
                React.Children.forEach(items, function(child, index) {
                  childrenList.push(
                    React.cloneElement(child, {
                      key: _this.keys[index],
                    }),
                  );
                });
                childrenContent = grid
                  ? React.createElement(
                      _grid.Row,
                      {
                        gutter: grid.gutter,
                      },
                      childrenList,
                    )
                  : childrenList;
              } else if (!children && !isLoading) {
                childrenContent = _this.renderEmpty(prefixCls, renderEmpty);
              }

              var paginationPosition = paginationProps.position || 'bottom';
              return React.createElement(
                'div',
                _extends(
                  {
                    className: classString,
                  },
                  rest,
                ),
                (paginationPosition === 'top' ||
                  paginationPosition === 'both') &&
                  paginationContent,
                header &&
                  React.createElement(
                    'div',
                    {
                      className: ''.concat(prefixCls, '-header'),
                    },
                    header,
                  ),
                React.createElement(
                  _spin['default'],
                  loadingProp,
                  childrenContent,
                  children,
                ),
                footer &&
                  React.createElement(
                    'div',
                    {
                      className: ''.concat(prefixCls, '-footer'),
                    },
                    footer,
                  ),
                loadMore ||
                  ((paginationPosition === 'bottom' ||
                    paginationPosition === 'both') &&
                    paginationContent),
              );
            };

            return _this;
          }

          _createClass(List, [
            {
              key: 'getChildContext',
              value: function getChildContext() {
                return {
                  grid: this.props.grid,
                  itemLayout: this.props.itemLayout,
                };
              },
            },
            {
              key: 'isSomethingAfterLastItem',
              value: function isSomethingAfterLastItem() {
                var _this$props2 = this.props,
                  loadMore = _this$props2.loadMore,
                  pagination = _this$props2.pagination,
                  footer = _this$props2.footer;
                return !!(loadMore || pagination || footer);
              },
            },
            {
              key: 'render',
              value: function render() {
                return React.createElement(
                  _configProvider.ConfigConsumer,
                  null,
                  this.renderList,
                );
              },
            },
          ]);

          return List;
        })(React.Component);

      exports['default'] = List;
      List.Item = _Item['default'];
      List.childContextTypes = {
        grid: PropTypes.any,
        itemLayout: PropTypes.string,
      };
      List.defaultProps = {
        dataSource: [],
        bordered: false,
        split: true,
        loading: false,
        pagination: false,
      };

      /***/
    },

  /***/ './node_modules/antd/lib/list/style/index.js':
    /*!***************************************************!*\
  !*** ./node_modules/antd/lib/list/style/index.js ***!
  \***************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      __webpack_require__(
        /*! ../../style/index.less */ './node_modules/antd/lib/style/index.less',
      );

      __webpack_require__(
        /*! ./index.less */ './node_modules/antd/lib/list/style/index.less',
      );

      __webpack_require__(
        /*! ../../empty/style */ './node_modules/antd/lib/empty/style/index.js',
      );

      __webpack_require__(
        /*! ../../spin/style */ './node_modules/antd/lib/spin/style/index.js',
      );

      __webpack_require__(
        /*! ../../pagination/style */ './node_modules/antd/lib/pagination/style/index.js',
      );

      __webpack_require__(
        /*! ../../grid/style */ './node_modules/antd/lib/grid/style/index.js',
      );

      /***/
    },

  /***/ './node_modules/antd/lib/pagination/MiniSelect.js':
    /*!********************************************************!*\
  !*** ./node_modules/antd/lib/pagination/MiniSelect.js ***!
  \********************************************************/
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

      var _select = _interopRequireDefault(
        __webpack_require__(
          /*! ../select */ './node_modules/antd/lib/select/index.js',
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

      var MiniSelect =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(MiniSelect, _React$Component);

          function MiniSelect() {
            _classCallCheck(this, MiniSelect);

            return _possibleConstructorReturn(
              this,
              _getPrototypeOf(MiniSelect).apply(this, arguments),
            );
          }

          _createClass(MiniSelect, [
            {
              key: 'render',
              value: function render() {
                return React.createElement(
                  _select['default'],
                  _extends(
                    {
                      size: 'small',
                    },
                    this.props,
                  ),
                );
              },
            },
          ]);

          return MiniSelect;
        })(React.Component);

      exports['default'] = MiniSelect;
      MiniSelect.Option = _select['default'].Option;

      /***/
    },

  /***/ './node_modules/antd/lib/pagination/Pagination.js':
    /*!********************************************************!*\
  !*** ./node_modules/antd/lib/pagination/Pagination.js ***!
  \********************************************************/
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

      var _rcPagination = _interopRequireDefault(
        __webpack_require__(
          /*! rc-pagination */ './node_modules/rc-pagination/es/index.js',
        ),
      );

      var _en_US = _interopRequireDefault(
        __webpack_require__(
          /*! rc-pagination/lib/locale/en_US */ './node_modules/rc-pagination/lib/locale/en_US.js',
        ),
      );

      var _classnames = _interopRequireDefault(
        __webpack_require__(
          /*! classnames */ './node_modules/classnames/index.js',
        ),
      );

      var _MiniSelect = _interopRequireDefault(
        __webpack_require__(
          /*! ./MiniSelect */ './node_modules/antd/lib/pagination/MiniSelect.js',
        ),
      );

      var _icon = _interopRequireDefault(
        __webpack_require__(
          /*! ../icon */ './node_modules/antd/lib/icon/index.js',
        ),
      );

      var _select = _interopRequireDefault(
        __webpack_require__(
          /*! ../select */ './node_modules/antd/lib/select/index.js',
        ),
      );

      var _LocaleReceiver = _interopRequireDefault(
        __webpack_require__(
          /*! ../locale-provider/LocaleReceiver */ './node_modules/antd/lib/locale-provider/LocaleReceiver.js',
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

      var Pagination =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(Pagination, _React$Component);

          function Pagination() {
            var _this;

            _classCallCheck(this, Pagination);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(Pagination).apply(this, arguments),
            );

            _this.getIconsProps = function(prefixCls) {
              var prevIcon = React.createElement(
                'a',
                {
                  className: ''.concat(prefixCls, '-item-link'),
                },
                React.createElement(_icon['default'], {
                  type: 'left',
                }),
              );
              var nextIcon = React.createElement(
                'a',
                {
                  className: ''.concat(prefixCls, '-item-link'),
                },
                React.createElement(_icon['default'], {
                  type: 'right',
                }),
              );
              var jumpPrevIcon = React.createElement(
                'a',
                {
                  className: ''.concat(prefixCls, '-item-link'),
                },
                React.createElement(
                  'div',
                  {
                    className: ''.concat(prefixCls, '-item-container'),
                  },
                  React.createElement(_icon['default'], {
                    className: ''.concat(prefixCls, '-item-link-icon'),
                    type: 'double-left',
                  }),
                  React.createElement(
                    'span',
                    {
                      className: ''.concat(prefixCls, '-item-ellipsis'),
                    },
                    '\u2022\u2022\u2022',
                  ),
                ),
              );
              var jumpNextIcon = React.createElement(
                'a',
                {
                  className: ''.concat(prefixCls, '-item-link'),
                },
                React.createElement(
                  'div',
                  {
                    className: ''.concat(prefixCls, '-item-container'),
                  },
                  React.createElement(_icon['default'], {
                    className: ''.concat(prefixCls, '-item-link-icon'),
                    type: 'double-right',
                  }),
                  React.createElement(
                    'span',
                    {
                      className: ''.concat(prefixCls, '-item-ellipsis'),
                    },
                    '\u2022\u2022\u2022',
                  ),
                ),
              );
              return {
                prevIcon: prevIcon,
                nextIcon: nextIcon,
                jumpPrevIcon: jumpPrevIcon,
                jumpNextIcon: jumpNextIcon,
              };
            };

            _this.renderPagination = function(contextLocale) {
              var _a = _this.props,
                customizePrefixCls = _a.prefixCls,
                customizeSelectPrefixCls = _a.selectPrefixCls,
                className = _a.className,
                size = _a.size,
                customLocale = _a.locale,
                restProps = __rest(_a, [
                  'prefixCls',
                  'selectPrefixCls',
                  'className',
                  'size',
                  'locale',
                ]);

              var locale = _extends({}, contextLocale, customLocale);

              var isSmall = size === 'small';
              return React.createElement(
                _configProvider.ConfigConsumer,
                null,
                function(_ref) {
                  var getPrefixCls = _ref.getPrefixCls;
                  var prefixCls = getPrefixCls(
                    'pagination',
                    customizePrefixCls,
                  );
                  var selectPrefixCls = getPrefixCls(
                    'select',
                    customizeSelectPrefixCls,
                  );
                  return React.createElement(
                    _rcPagination['default'],
                    _extends(
                      {},
                      restProps,
                      {
                        prefixCls: prefixCls,
                        selectPrefixCls: selectPrefixCls,
                      },
                      _this.getIconsProps(prefixCls),
                      {
                        className: (0, _classnames['default'])(className, {
                          mini: isSmall,
                        }),
                        selectComponentClass: isSmall
                          ? _MiniSelect['default']
                          : _select['default'],
                        locale: locale,
                      },
                    ),
                  );
                },
              );
            };

            return _this;
          }

          _createClass(Pagination, [
            {
              key: 'render',
              value: function render() {
                return React.createElement(
                  _LocaleReceiver['default'],
                  {
                    componentName: 'Pagination',
                    defaultLocale: _en_US['default'],
                  },
                  this.renderPagination,
                );
              },
            },
          ]);

          return Pagination;
        })(React.Component);

      exports['default'] = Pagination;

      /***/
    },

  /***/ './node_modules/antd/lib/pagination/index.js':
    /*!***************************************************!*\
  !*** ./node_modules/antd/lib/pagination/index.js ***!
  \***************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports['default'] = void 0;

      var _Pagination = _interopRequireDefault(
        __webpack_require__(
          /*! ./Pagination */ './node_modules/antd/lib/pagination/Pagination.js',
        ),
      );

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var _default = _Pagination['default'];
      exports['default'] = _default;

      /***/
    },

  /***/ './node_modules/antd/lib/pagination/style/index.js':
    /*!*********************************************************!*\
  !*** ./node_modules/antd/lib/pagination/style/index.js ***!
  \*********************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      __webpack_require__(
        /*! ../../style/index.less */ './node_modules/antd/lib/style/index.less',
      );

      __webpack_require__(
        /*! ./index.less */ './node_modules/antd/lib/pagination/style/index.less',
      );

      __webpack_require__(
        /*! ../../select/style */ './node_modules/antd/lib/select/style/index.js',
      );

      /***/
    },

  /***/ './node_modules/antd/lib/select/index.js':
    /*!***********************************************!*\
  !*** ./node_modules/antd/lib/select/index.js ***!
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

      var PropTypes = _interopRequireWildcard(
        __webpack_require__(
          /*! prop-types */ './node_modules/antd/node_modules/prop-types/index.js',
        ),
      );

      var _rcSelect = _interopRequireWildcard(
        __webpack_require__(
          /*! rc-select */ './node_modules/rc-select/es/index.js',
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

      var _omit = _interopRequireDefault(
        __webpack_require__(
          /*! omit.js */ './node_modules/omit.js/es/index.js',
        ),
      );

      var _warning = _interopRequireDefault(
        __webpack_require__(
          /*! ../_util/warning */ './node_modules/antd/lib/_util/warning.js',
        ),
      );

      var _icon = _interopRequireDefault(
        __webpack_require__(
          /*! ../icon */ './node_modules/antd/lib/icon/index.js',
        ),
      );

      var _type = __webpack_require__(
        /*! ../_util/type */ './node_modules/antd/lib/_util/type.js',
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

      var SelectSizes = (0, _type.tuple)('default', 'large', 'small');
      var SelectPropTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        size: PropTypes.oneOf(SelectSizes),
        notFoundContent: PropTypes.any,
        showSearch: PropTypes.bool,
        optionLabelProp: PropTypes.string,
        transitionName: PropTypes.string,
        choiceTransitionName: PropTypes.string,
        id: PropTypes.string,
      }; // => It is needless to export the declaration of below two inner components.
      // export { Option, OptGroup };

      var Select =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(Select, _React$Component);

          function Select(props) {
            var _this;

            _classCallCheck(this, Select);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(Select).call(this, props),
            );

            _this.saveSelect = function(node) {
              _this.rcSelect = node;
            };

            _this.renderSelect = function(_ref) {
              var _classNames;

              var getContextPopupContainer = _ref.getPopupContainer,
                getPrefixCls = _ref.getPrefixCls,
                renderEmpty = _ref.renderEmpty;

              var _a = _this.props,
                customizePrefixCls = _a.prefixCls,
                _a$className = _a.className,
                className = _a$className === void 0 ? '' : _a$className,
                size = _a.size,
                mode = _a.mode,
                getPopupContainer = _a.getPopupContainer,
                removeIcon = _a.removeIcon,
                clearIcon = _a.clearIcon,
                menuItemSelectedIcon = _a.menuItemSelectedIcon,
                showArrow = _a.showArrow,
                restProps = __rest(_a, [
                  'prefixCls',
                  'className',
                  'size',
                  'mode',
                  'getPopupContainer',
                  'removeIcon',
                  'clearIcon',
                  'menuItemSelectedIcon',
                  'showArrow',
                ]);

              var rest = (0, _omit['default'])(restProps, ['inputIcon']);
              var prefixCls = getPrefixCls('select', customizePrefixCls);
              var cls = (0, _classnames['default'])(
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
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-show-arrow'),
                  showArrow,
                ),
                _classNames),
                className,
              );
              var optionLabelProp = _this.props.optionLabelProp;

              if (_this.isCombobox()) {
                // children 带 dom 结构时，无法填入输入框
                optionLabelProp = optionLabelProp || 'value';
              }

              var modeConfig = {
                multiple: mode === 'multiple',
                tags: mode === 'tags',
                combobox: _this.isCombobox(),
              };
              var finalRemoveIcon =
                (removeIcon &&
                  (React.isValidElement(removeIcon)
                    ? React.cloneElement(removeIcon, {
                        className: (0, _classnames['default'])(
                          removeIcon.props.className,
                          ''.concat(prefixCls, '-remove-icon'),
                        ),
                      })
                    : removeIcon)) ||
                React.createElement(_icon['default'], {
                  type: 'close',
                  className: ''.concat(prefixCls, '-remove-icon'),
                });
              var finalClearIcon =
                (clearIcon &&
                  (React.isValidElement(clearIcon)
                    ? React.cloneElement(clearIcon, {
                        className: (0, _classnames['default'])(
                          clearIcon.props.className,
                          ''.concat(prefixCls, '-clear-icon'),
                        ),
                      })
                    : clearIcon)) ||
                React.createElement(_icon['default'], {
                  type: 'close-circle',
                  theme: 'filled',
                  className: ''.concat(prefixCls, '-clear-icon'),
                });
              var finalMenuItemSelectedIcon =
                (menuItemSelectedIcon &&
                  (React.isValidElement(menuItemSelectedIcon)
                    ? React.cloneElement(menuItemSelectedIcon, {
                        className: (0, _classnames['default'])(
                          menuItemSelectedIcon.props.className,
                          ''.concat(prefixCls, '-selected-icon'),
                        ),
                      })
                    : menuItemSelectedIcon)) ||
                React.createElement(_icon['default'], {
                  type: 'check',
                  className: ''.concat(prefixCls, '-selected-icon'),
                });
              return React.createElement(
                _rcSelect['default'],
                _extends(
                  {
                    inputIcon: _this.renderSuffixIcon(prefixCls),
                    removeIcon: finalRemoveIcon,
                    clearIcon: finalClearIcon,
                    menuItemSelectedIcon: finalMenuItemSelectedIcon,
                    showArrow: showArrow,
                  },
                  rest,
                  modeConfig,
                  {
                    prefixCls: prefixCls,
                    className: cls,
                    optionLabelProp: optionLabelProp || 'children',
                    notFoundContent: _this.getNotFoundContent(renderEmpty),
                    getPopupContainer:
                      getPopupContainer || getContextPopupContainer,
                    ref: _this.saveSelect,
                  },
                ),
              );
            };

            (0, _warning['default'])(
              props.mode !== 'combobox',
              'Select',
              'The combobox mode is deprecated, ' +
                'it will be removed in next major version, ' +
                'please use AutoComplete instead',
            );
            return _this;
          }

          _createClass(Select, [
            {
              key: 'focus',
              value: function focus() {
                this.rcSelect.focus();
              },
            },
            {
              key: 'blur',
              value: function blur() {
                this.rcSelect.blur();
              },
            },
            {
              key: 'getNotFoundContent',
              value: function getNotFoundContent(renderEmpty) {
                var notFoundContent = this.props.notFoundContent;

                if (notFoundContent !== undefined) {
                  return notFoundContent;
                }

                if (this.isCombobox()) {
                  return null;
                }

                return renderEmpty('Select'); // if (this.isCombobox()) {
                //   // AutoComplete don't have notFoundContent defaultly
                //   return notFoundContent === undefined ? null : notFoundContent;
                // }
                // return renderEmpty('Select');
                // // return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
              },
            },
            {
              key: 'isCombobox',
              value: function isCombobox() {
                var mode = this.props.mode;
                return (
                  mode === 'combobox' ||
                  mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE
                );
              },
            },
            {
              key: 'renderSuffixIcon',
              value: function renderSuffixIcon(prefixCls) {
                var _this$props = this.props,
                  loading = _this$props.loading,
                  suffixIcon = _this$props.suffixIcon;

                if (suffixIcon) {
                  return React.isValidElement(suffixIcon)
                    ? React.cloneElement(suffixIcon, {
                        className: (0, _classnames['default'])(
                          suffixIcon.props.className,
                          ''.concat(prefixCls, '-arrow-icon'),
                        ),
                      })
                    : suffixIcon;
                }

                if (loading) {
                  return React.createElement(_icon['default'], {
                    type: 'loading',
                  });
                }

                return React.createElement(_icon['default'], {
                  type: 'down',
                  className: ''.concat(prefixCls, '-arrow-icon'),
                });
              },
            },
            {
              key: 'render',
              value: function render() {
                return React.createElement(
                  _configProvider.ConfigConsumer,
                  null,
                  this.renderSelect,
                );
              },
            },
          ]);

          return Select;
        })(React.Component);

      exports['default'] = Select;
      Select.Option = _rcSelect.Option;
      Select.OptGroup = _rcSelect.OptGroup;
      Select.SECRET_COMBOBOX_MODE_DO_NOT_USE =
        'SECRET_COMBOBOX_MODE_DO_NOT_USE';
      Select.defaultProps = {
        showSearch: false,
        transitionName: 'slide-up',
        choiceTransitionName: 'zoom',
      };
      Select.propTypes = SelectPropTypes;

      /***/
    },

  /***/ './node_modules/antd/lib/select/style/index.js':
    /*!*****************************************************!*\
  !*** ./node_modules/antd/lib/select/style/index.js ***!
  \*****************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      __webpack_require__(
        /*! ../../style/index.less */ './node_modules/antd/lib/style/index.less',
      );

      __webpack_require__(
        /*! ./index.less */ './node_modules/antd/lib/select/style/index.less',
      );

      __webpack_require__(
        /*! ../../empty/style */ './node_modules/antd/lib/empty/style/index.js',
      );

      /***/
    },

  /***/ './node_modules/antd/lib/spin/index.js':
    /*!*********************************************!*\
  !*** ./node_modules/antd/lib/spin/index.js ***!
  \*********************************************/
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

      var _omit = _interopRequireDefault(
        __webpack_require__(
          /*! omit.js */ './node_modules/omit.js/es/index.js',
        ),
      );

      var _debounce = _interopRequireDefault(
        __webpack_require__(
          /*! lodash/debounce */ './node_modules/lodash/debounce.js',
        ),
      );

      var _configProvider = __webpack_require__(
        /*! ../config-provider */ './node_modules/antd/lib/config-provider/index.js',
      );

      var _type = __webpack_require__(
        /*! ../_util/type */ './node_modules/antd/lib/_util/type.js',
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

      var SpinSizes = (0, _type.tuple)('small', 'default', 'large'); // Render indicator

      var defaultIndicator = null;

      function renderIndicator(prefixCls, props) {
        var indicator = props.indicator;
        var dotClassName = ''.concat(prefixCls, '-dot');

        if (React.isValidElement(indicator)) {
          return React.cloneElement(indicator, {
            className: (0, _classnames['default'])(
              indicator.props.className,
              dotClassName,
            ),
          });
        }

        if (React.isValidElement(defaultIndicator)) {
          return React.cloneElement(defaultIndicator, {
            className: (0, _classnames['default'])(
              defaultIndicator.props.className,
              dotClassName,
            ),
          });
        }

        return React.createElement(
          'span',
          {
            className: (0, _classnames['default'])(
              dotClassName,
              ''.concat(prefixCls, '-dot-spin'),
            ),
          },
          React.createElement('i', null),
          React.createElement('i', null),
          React.createElement('i', null),
          React.createElement('i', null),
        );
      }

      function shouldDelay(spinning, delay) {
        return !!spinning && !!delay && !isNaN(Number(delay));
      }

      var Spin =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(Spin, _React$Component);

          function Spin(props) {
            var _this;

            _classCallCheck(this, Spin);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(Spin).call(this, props),
            );

            _this.debouncifyUpdateSpinning = function(props) {
              var _ref = props || _this.props,
                delay = _ref.delay;

              if (delay) {
                _this.updateSpinning = (0, _debounce['default'])(
                  _this.originalUpdateSpinning,
                  delay,
                );
              }
            };

            _this.updateSpinning = function() {
              var spinning = _this.props.spinning;
              var currentSpinning = _this.state.spinning;

              if (currentSpinning !== spinning) {
                _this.setState({
                  spinning: spinning,
                });
              }
            };

            _this.renderSpin = function(_ref2) {
              var _classNames;

              var getPrefixCls = _ref2.getPrefixCls;

              var _a = _this.props,
                customizePrefixCls = _a.prefixCls,
                className = _a.className,
                size = _a.size,
                tip = _a.tip,
                wrapperClassName = _a.wrapperClassName,
                style = _a.style,
                restProps = __rest(_a, [
                  'prefixCls',
                  'className',
                  'size',
                  'tip',
                  'wrapperClassName',
                  'style',
                ]);

              var spinning = _this.state.spinning;
              var prefixCls = getPrefixCls('spin', customizePrefixCls);
              var spinClassName = (0, _classnames['default'])(
                prefixCls,
                ((_classNames = {}),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-sm'),
                  size === 'small',
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-lg'),
                  size === 'large',
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-spinning'),
                  spinning,
                ),
                _defineProperty(
                  _classNames,
                  ''.concat(prefixCls, '-show-text'),
                  !!tip,
                ),
                _classNames),
                className,
              ); // fix https://fb.me/react-unknown-prop

              var divProps = (0, _omit['default'])(restProps, [
                'spinning',
                'delay',
                'indicator',
              ]);
              var spinElement = React.createElement(
                'div',
                _extends({}, divProps, {
                  style: style,
                  className: spinClassName,
                }),
                renderIndicator(prefixCls, _this.props),
                tip
                  ? React.createElement(
                      'div',
                      {
                        className: ''.concat(prefixCls, '-text'),
                      },
                      tip,
                    )
                  : null,
              );

              if (_this.isNestedPattern()) {
                var containerClassName = (0, _classnames['default'])(
                  ''.concat(prefixCls, '-container'),
                  _defineProperty({}, ''.concat(prefixCls, '-blur'), spinning),
                );
                return React.createElement(
                  'div',
                  _extends({}, divProps, {
                    className: (0, _classnames['default'])(
                      ''.concat(prefixCls, '-nested-loading'),
                      wrapperClassName,
                    ),
                  }),
                  spinning &&
                    React.createElement(
                      'div',
                      {
                        key: 'loading',
                      },
                      spinElement,
                    ),
                  React.createElement(
                    'div',
                    {
                      className: containerClassName,
                      key: 'container',
                    },
                    _this.props.children,
                  ),
                );
              }

              return spinElement;
            };

            var spinning = props.spinning,
              delay = props.delay;
            var shouldBeDelayed = shouldDelay(spinning, delay);
            _this.state = {
              spinning: spinning && !shouldBeDelayed,
            };
            _this.originalUpdateSpinning = _this.updateSpinning;

            _this.debouncifyUpdateSpinning(props);

            return _this;
          }

          _createClass(
            Spin,
            [
              {
                key: 'isNestedPattern',
                value: function isNestedPattern() {
                  return !!(this.props && this.props.children);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  var updateSpinning = this.updateSpinning;

                  if (updateSpinning && updateSpinning.cancel) {
                    updateSpinning.cancel();
                  }
                },
              },
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  this.updateSpinning();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate() {
                  this.debouncifyUpdateSpinning();
                  this.updateSpinning();
                },
              },
              {
                key: 'render',
                value: function render() {
                  return React.createElement(
                    _configProvider.ConfigConsumer,
                    null,
                    this.renderSpin,
                  );
                },
              },
            ],
            [
              {
                key: 'setDefaultIndicator',
                value: function setDefaultIndicator(indicator) {
                  defaultIndicator = indicator;
                },
              },
            ],
          );

          return Spin;
        })(React.Component);

      Spin.defaultProps = {
        spinning: true,
        size: 'default',
        wrapperClassName: '',
      };
      Spin.propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        spinning: PropTypes.bool,
        size: PropTypes.oneOf(SpinSizes),
        wrapperClassName: PropTypes.string,
        indicator: PropTypes.element,
      };
      var _default = Spin;
      exports['default'] = _default;

      /***/
    },

  /***/ './node_modules/antd/lib/spin/style/index.js':
    /*!***************************************************!*\
  !*** ./node_modules/antd/lib/spin/style/index.js ***!
  \***************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      __webpack_require__(
        /*! ../../style/index.less */ './node_modules/antd/lib/style/index.less',
      );

      __webpack_require__(
        /*! ./index.less */ './node_modules/antd/lib/spin/style/index.less',
      );

      /***/
    },

  /***/ './node_modules/component-classes/index.js':
    /*!*************************************************!*\
  !*** ./node_modules/component-classes/index.js ***!
  \*************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      /**
       * Module dependencies.
       */

      try {
        var index = __webpack_require__(
          /*! indexof */ './node_modules/component-indexof/index.js',
        );
      } catch (err) {
        var index = __webpack_require__(
          /*! component-indexof */ './node_modules/component-indexof/index.js',
        );
      }

      /**
       * Whitespace regexp.
       */

      var re = /\s+/;

      /**
       * toString reference.
       */

      var toString = Object.prototype.toString;

      /**
       * Wrap `el` in a `ClassList`.
       *
       * @param {Element} el
       * @return {ClassList}
       * @api public
       */

      module.exports = function(el) {
        return new ClassList(el);
      };

      /**
       * Initialize a new ClassList for `el`.
       *
       * @param {Element} el
       * @api private
       */

      function ClassList(el) {
        if (!el || !el.nodeType) {
          throw new Error('A DOM element reference is required');
        }
        this.el = el;
        this.list = el.classList;
      }

      /**
       * Add class `name` if not already present.
       *
       * @param {String} name
       * @return {ClassList}
       * @api public
       */

      ClassList.prototype.add = function(name) {
        // classList
        if (this.list) {
          this.list.add(name);
          return this;
        }

        // fallback
        var arr = this.array();
        var i = index(arr, name);
        if (!~i) arr.push(name);
        this.el.className = arr.join(' ');
        return this;
      };

      /**
       * Remove class `name` when present, or
       * pass a regular expression to remove
       * any which match.
       *
       * @param {String|RegExp} name
       * @return {ClassList}
       * @api public
       */

      ClassList.prototype.remove = function(name) {
        if ('[object RegExp]' == toString.call(name)) {
          return this.removeMatching(name);
        }

        // classList
        if (this.list) {
          this.list.remove(name);
          return this;
        }

        // fallback
        var arr = this.array();
        var i = index(arr, name);
        if (~i) arr.splice(i, 1);
        this.el.className = arr.join(' ');
        return this;
      };

      /**
       * Remove all classes matching `re`.
       *
       * @param {RegExp} re
       * @return {ClassList}
       * @api private
       */

      ClassList.prototype.removeMatching = function(re) {
        var arr = this.array();
        for (var i = 0; i < arr.length; i++) {
          if (re.test(arr[i])) {
            this.remove(arr[i]);
          }
        }
        return this;
      };

      /**
       * Toggle class `name`, can force state via `force`.
       *
       * For browsers that support classList, but do not support `force` yet,
       * the mistake will be detected and corrected.
       *
       * @param {String} name
       * @param {Boolean} force
       * @return {ClassList}
       * @api public
       */

      ClassList.prototype.toggle = function(name, force) {
        // classList
        if (this.list) {
          if ('undefined' !== typeof force) {
            if (force !== this.list.toggle(name, force)) {
              this.list.toggle(name); // toggle again to correct
            }
          } else {
            this.list.toggle(name);
          }
          return this;
        }

        // fallback
        if ('undefined' !== typeof force) {
          if (!force) {
            this.remove(name);
          } else {
            this.add(name);
          }
        } else {
          if (this.has(name)) {
            this.remove(name);
          } else {
            this.add(name);
          }
        }

        return this;
      };

      /**
       * Return an array of classes.
       *
       * @return {Array}
       * @api public
       */

      ClassList.prototype.array = function() {
        var className = this.el.getAttribute('class') || '';
        var str = className.replace(/^\s+|\s+$/g, '');
        var arr = str.split(re);
        if ('' === arr[0]) arr.shift();
        return arr;
      };

      /**
       * Check if class `name` is present.
       *
       * @param {String} name
       * @return {ClassList}
       * @api public
       */

      ClassList.prototype.has = ClassList.prototype.contains = function(name) {
        return this.list
          ? this.list.contains(name)
          : !!~index(this.array(), name);
      };

      /***/
    },

  /***/ './node_modules/component-indexof/index.js':
    /*!*************************************************!*\
  !*** ./node_modules/component-indexof/index.js ***!
  \*************************************************/
    /*! no static exports found */
    /***/ function(module, exports) {
      module.exports = function(arr, obj) {
        if (arr.indexOf) return arr.indexOf(obj);
        for (var i = 0; i < arr.length; ++i) {
          if (arr[i] === obj) return i;
        }
        return -1;
      };

      /***/
    },

  /***/ './node_modules/css-animation/es/Event.js':
    /*!************************************************!*\
  !*** ./node_modules/css-animation/es/Event.js ***!
  \************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var START_EVENT_NAME_MAP = {
        transitionstart: {
          transition: 'transitionstart',
          WebkitTransition: 'webkitTransitionStart',
          MozTransition: 'mozTransitionStart',
          OTransition: 'oTransitionStart',
          msTransition: 'MSTransitionStart',
        },

        animationstart: {
          animation: 'animationstart',
          WebkitAnimation: 'webkitAnimationStart',
          MozAnimation: 'mozAnimationStart',
          OAnimation: 'oAnimationStart',
          msAnimation: 'MSAnimationStart',
        },
      };

      var END_EVENT_NAME_MAP = {
        transitionend: {
          transition: 'transitionend',
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'mozTransitionEnd',
          OTransition: 'oTransitionEnd',
          msTransition: 'MSTransitionEnd',
        },

        animationend: {
          animation: 'animationend',
          WebkitAnimation: 'webkitAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          OAnimation: 'oAnimationEnd',
          msAnimation: 'MSAnimationEnd',
        },
      };

      var startEvents = [];
      var endEvents = [];

      function detectEvents() {
        var testEl = document.createElement('div');
        var style = testEl.style;

        if (!('AnimationEvent' in window)) {
          delete START_EVENT_NAME_MAP.animationstart.animation;
          delete END_EVENT_NAME_MAP.animationend.animation;
        }

        if (!('TransitionEvent' in window)) {
          delete START_EVENT_NAME_MAP.transitionstart.transition;
          delete END_EVENT_NAME_MAP.transitionend.transition;
        }

        function process(EVENT_NAME_MAP, events) {
          for (var baseEventName in EVENT_NAME_MAP) {
            if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
              var baseEvents = EVENT_NAME_MAP[baseEventName];
              for (var styleName in baseEvents) {
                if (styleName in style) {
                  events.push(baseEvents[styleName]);
                  break;
                }
              }
            }
          }
        }

        process(START_EVENT_NAME_MAP, startEvents);
        process(END_EVENT_NAME_MAP, endEvents);
      }

      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        detectEvents();
      }

      function addEventListener(node, eventName, eventListener) {
        node.addEventListener(eventName, eventListener, false);
      }

      function removeEventListener(node, eventName, eventListener) {
        node.removeEventListener(eventName, eventListener, false);
      }

      var TransitionEvents = {
        // Start events
        startEvents: startEvents,

        addStartEventListener: function addStartEventListener(
          node,
          eventListener,
        ) {
          if (startEvents.length === 0) {
            window.setTimeout(eventListener, 0);
            return;
          }
          startEvents.forEach(function(startEvent) {
            addEventListener(node, startEvent, eventListener);
          });
        },
        removeStartEventListener: function removeStartEventListener(
          node,
          eventListener,
        ) {
          if (startEvents.length === 0) {
            return;
          }
          startEvents.forEach(function(startEvent) {
            removeEventListener(node, startEvent, eventListener);
          });
        },

        // End events
        endEvents: endEvents,

        addEndEventListener: function addEndEventListener(node, eventListener) {
          if (endEvents.length === 0) {
            window.setTimeout(eventListener, 0);
            return;
          }
          endEvents.forEach(function(endEvent) {
            addEventListener(node, endEvent, eventListener);
          });
        },
        removeEndEventListener: function removeEndEventListener(
          node,
          eventListener,
        ) {
          if (endEvents.length === 0) {
            return;
          }
          endEvents.forEach(function(endEvent) {
            removeEventListener(node, endEvent, eventListener);
          });
        },
      };

      /* harmony default export */ __webpack_exports__[
        'default'
      ] = TransitionEvents;

      /***/
    },

  /***/ './node_modules/css-animation/es/index.js':
    /*!************************************************!*\
  !*** ./node_modules/css-animation/es/index.js ***!
  \************************************************/
    /*! exports provided: isCssAnimationSupported, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isCssAnimationSupported',
        function() {
          return isCssAnimationSupported;
        },
      );
      /* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/typeof */ './node_modules/babel-runtime/helpers/typeof.js',
      );
      /* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./Event */ './node_modules/css-animation/es/Event.js',
      );
      /* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! component-classes */ './node_modules/component-classes/index.js',
      );
      /* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        component_classes__WEBPACK_IMPORTED_MODULE_2__,
      );

      var isCssAnimationSupported =
        _Event__WEBPACK_IMPORTED_MODULE_1__['default'].endEvents.length !== 0;
      var capitalPrefixes = [
        'Webkit',
        'Moz',
        'O',
        // ms is special .... !
        'ms',
      ];
      var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

      function getStyleProperty(node, name) {
        // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
        var style = window.getComputedStyle(node, null);
        var ret = '';
        for (var i = 0; i < prefixes.length; i++) {
          ret = style.getPropertyValue(prefixes[i] + name);
          if (ret) {
            break;
          }
        }
        return ret;
      }

      function fixBrowserByTimeout(node) {
        if (isCssAnimationSupported) {
          var transitionDelay =
            parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
          var transitionDuration =
            parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
          var animationDelay =
            parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
          var animationDuration =
            parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
          var time = Math.max(
            transitionDuration + transitionDelay,
            animationDuration + animationDelay,
          );
          // sometimes, browser bug
          node.rcEndAnimTimeout = setTimeout(function() {
            node.rcEndAnimTimeout = null;
            if (node.rcEndListener) {
              node.rcEndListener();
            }
          }, time * 1000 + 200);
        }
      }

      function clearBrowserBugTimeout(node) {
        if (node.rcEndAnimTimeout) {
          clearTimeout(node.rcEndAnimTimeout);
          node.rcEndAnimTimeout = null;
        }
      }

      var cssAnimation = function cssAnimation(
        node,
        transitionName,
        endCallback,
      ) {
        var nameIsObj =
          (typeof transitionName === 'undefined'
            ? 'undefined'
            : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(
                transitionName,
              )) === 'object';
        var className = nameIsObj ? transitionName.name : transitionName;
        var activeClassName = nameIsObj
          ? transitionName.active
          : transitionName + '-active';
        var end = endCallback;
        var start = void 0;
        var active = void 0;
        var nodeClasses = component_classes__WEBPACK_IMPORTED_MODULE_2___default()(
          node,
        );

        if (
          endCallback &&
          Object.prototype.toString.call(endCallback) === '[object Object]'
        ) {
          end = endCallback.end;
          start = endCallback.start;
          active = endCallback.active;
        }

        if (node.rcEndListener) {
          node.rcEndListener();
        }

        node.rcEndListener = function(e) {
          if (e && e.target !== node) {
            return;
          }

          if (node.rcAnimTimeout) {
            clearTimeout(node.rcAnimTimeout);
            node.rcAnimTimeout = null;
          }

          clearBrowserBugTimeout(node);

          nodeClasses.remove(className);
          nodeClasses.remove(activeClassName);

          _Event__WEBPACK_IMPORTED_MODULE_1__['default'].removeEndEventListener(
            node,
            node.rcEndListener,
          );
          node.rcEndListener = null;

          // Usually this optional end is used for informing an owner of
          // a leave animation and telling it to remove the child.
          if (end) {
            end();
          }
        };

        _Event__WEBPACK_IMPORTED_MODULE_1__['default'].addEndEventListener(
          node,
          node.rcEndListener,
        );

        if (start) {
          start();
        }
        nodeClasses.add(className);

        node.rcAnimTimeout = setTimeout(function() {
          node.rcAnimTimeout = null;
          nodeClasses.add(activeClassName);
          if (active) {
            setTimeout(active, 0);
          }
          fixBrowserByTimeout(node);
          // 30ms for firefox
        }, 30);

        return {
          stop: function stop() {
            if (node.rcEndListener) {
              node.rcEndListener();
            }
          },
        };
      };

      cssAnimation.style = function(node, style, callback) {
        if (node.rcEndListener) {
          node.rcEndListener();
        }

        node.rcEndListener = function(e) {
          if (e && e.target !== node) {
            return;
          }

          if (node.rcAnimTimeout) {
            clearTimeout(node.rcAnimTimeout);
            node.rcAnimTimeout = null;
          }

          clearBrowserBugTimeout(node);

          _Event__WEBPACK_IMPORTED_MODULE_1__['default'].removeEndEventListener(
            node,
            node.rcEndListener,
          );
          node.rcEndListener = null;

          // Usually this optional callback is used for informing an owner of
          // a leave animation and telling it to remove the child.
          if (callback) {
            callback();
          }
        };

        _Event__WEBPACK_IMPORTED_MODULE_1__['default'].addEndEventListener(
          node,
          node.rcEndListener,
        );

        node.rcAnimTimeout = setTimeout(function() {
          for (var s in style) {
            if (style.hasOwnProperty(s)) {
              node.style[s] = style[s];
            }
          }
          node.rcAnimTimeout = null;
          fixBrowserByTimeout(node);
        }, 0);
      };

      cssAnimation.setTransition = function(node, p, value) {
        var property = p;
        var v = value;
        if (value === undefined) {
          v = property;
          property = '';
        }
        property = property || '';
        capitalPrefixes.forEach(function(prefix) {
          node.style[prefix + 'Transition' + property] = v;
        });
      };

      cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

      /* harmony default export */ __webpack_exports__[
        'default'
      ] = cssAnimation;

      /***/
    },

  /***/ './node_modules/dom-align/es/adjustForViewport.js':
    /*!********************************************************!*\
  !*** ./node_modules/dom-align/es/adjustForViewport.js ***!
  \********************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./utils */ './node_modules/dom-align/es/utils.js',
      );

      function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
        var pos = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].clone(
          elFuturePos,
        );
        var size = {
          width: elRegion.width,
          height: elRegion.height,
        };

        if (overflow.adjustX && pos.left < visibleRect.left) {
          pos.left = visibleRect.left;
        }

        // Left edge inside and right edge outside viewport, try to resize it.
        if (
          overflow.resizeWidth &&
          pos.left >= visibleRect.left &&
          pos.left + size.width > visibleRect.right
        ) {
          size.width -= pos.left + size.width - visibleRect.right;
        }

        // Right edge outside viewport, try to move it.
        if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
          // 保证左边界和可视区域左边界对齐
          pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
        }

        // Top edge outside viewport, try to move it.
        if (overflow.adjustY && pos.top < visibleRect.top) {
          pos.top = visibleRect.top;
        }

        // Top edge inside and bottom edge outside viewport, try to resize it.
        if (
          overflow.resizeHeight &&
          pos.top >= visibleRect.top &&
          pos.top + size.height > visibleRect.bottom
        ) {
          size.height -= pos.top + size.height - visibleRect.bottom;
        }

        // Bottom edge outside viewport, try to move it.
        if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
          // 保证上边界和可视区域上边界对齐
          pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
        }

        return _utils__WEBPACK_IMPORTED_MODULE_0__['default'].mix(pos, size);
      }

      /* harmony default export */ __webpack_exports__[
        'default'
      ] = adjustForViewport;

      /***/
    },

  /***/ './node_modules/dom-align/es/align/align.js':
    /*!**************************************************!*\
  !*** ./node_modules/dom-align/es/align/align.js ***!
  \**************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../utils */ './node_modules/dom-align/es/utils.js',
      );
      /* harmony import */ var _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../getVisibleRectForElement */ './node_modules/dom-align/es/getVisibleRectForElement.js',
      );
      /* harmony import */ var _adjustForViewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../adjustForViewport */ './node_modules/dom-align/es/adjustForViewport.js',
      );
      /* harmony import */ var _getRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../getRegion */ './node_modules/dom-align/es/getRegion.js',
      );
      /* harmony import */ var _getElFuturePos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ../getElFuturePos */ './node_modules/dom-align/es/getElFuturePos.js',
      );
      /**
       * align dom node flexibly
       * @author yiminghe@gmail.com
       */

      // http://yiminghe.iteye.com/blog/1124720

      function isFailX(elFuturePos, elRegion, visibleRect) {
        return (
          elFuturePos.left < visibleRect.left ||
          elFuturePos.left + elRegion.width > visibleRect.right
        );
      }

      function isFailY(elFuturePos, elRegion, visibleRect) {
        return (
          elFuturePos.top < visibleRect.top ||
          elFuturePos.top + elRegion.height > visibleRect.bottom
        );
      }

      function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
        return (
          elFuturePos.left > visibleRect.right ||
          elFuturePos.left + elRegion.width < visibleRect.left
        );
      }

      function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
        return (
          elFuturePos.top > visibleRect.bottom ||
          elFuturePos.top + elRegion.height < visibleRect.top
        );
      }

      function flip(points, reg, map) {
        var ret = [];
        _utils__WEBPACK_IMPORTED_MODULE_0__['default'].each(points, function(
          p,
        ) {
          ret.push(
            p.replace(reg, function(m) {
              return map[m];
            }),
          );
        });
        return ret;
      }

      function flipOffset(offset, index) {
        offset[index] = -offset[index];
        return offset;
      }

      function convertOffset(str, offsetLen) {
        var n = void 0;
        if (/%$/.test(str)) {
          n =
            (parseInt(str.substring(0, str.length - 1), 10) / 100) * offsetLen;
        } else {
          n = parseInt(str, 10);
        }
        return n || 0;
      }

      function normalizeOffset(offset, el) {
        offset[0] = convertOffset(offset[0], el.width);
        offset[1] = convertOffset(offset[1], el.height);
      }

      /**
       * @param el
       * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
       * @param align
       */
      function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
        var points = align.points;
        var offset = align.offset || [0, 0];
        var targetOffset = align.targetOffset || [0, 0];
        var overflow = align.overflow;
        var source = align.source || el;
        offset = [].concat(offset);
        targetOffset = [].concat(targetOffset);
        overflow = overflow || {};
        var newOverflowCfg = {};
        var fail = 0;
        // 当前节点可以被放置的显示区域
        var visibleRect = Object(
          _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_1__['default'],
        )(source);
        // 当前节点所占的区域, left/top/width/height
        var elRegion = Object(
          _getRegion__WEBPACK_IMPORTED_MODULE_3__['default'],
        )(source);
        // 将 offset 转换成数值，支持百分比
        normalizeOffset(offset, elRegion);
        normalizeOffset(targetOffset, tgtRegion);
        // 当前节点将要被放置的位置
        var elFuturePos = Object(
          _getElFuturePos__WEBPACK_IMPORTED_MODULE_4__['default'],
        )(elRegion, tgtRegion, points, offset, targetOffset);
        // 当前节点将要所处的区域
        var newElRegion = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].merge(
          elRegion,
          elFuturePos,
        );

        // 如果可视区域不能完全放置当前节点时允许调整
        if (
          visibleRect &&
          (overflow.adjustX || overflow.adjustY) &&
          isTgtRegionVisible
        ) {
          if (overflow.adjustX) {
            // 如果横向不能放下
            if (isFailX(elFuturePos, elRegion, visibleRect)) {
              // 对齐位置反下
              var newPoints = flip(points, /[lr]/gi, {
                l: 'r',
                r: 'l',
              });
              // 偏移量也反下
              var newOffset = flipOffset(offset, 0);
              var newTargetOffset = flipOffset(targetOffset, 0);
              var newElFuturePos = Object(
                _getElFuturePos__WEBPACK_IMPORTED_MODULE_4__['default'],
              )(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

              if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
                fail = 1;
                points = newPoints;
                offset = newOffset;
                targetOffset = newTargetOffset;
              }
            }
          }

          if (overflow.adjustY) {
            // 如果纵向不能放下
            if (isFailY(elFuturePos, elRegion, visibleRect)) {
              // 对齐位置反下
              var _newPoints = flip(points, /[tb]/gi, {
                t: 'b',
                b: 't',
              });
              // 偏移量也反下
              var _newOffset = flipOffset(offset, 1);
              var _newTargetOffset = flipOffset(targetOffset, 1);
              var _newElFuturePos = Object(
                _getElFuturePos__WEBPACK_IMPORTED_MODULE_4__['default'],
              )(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

              if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
                fail = 1;
                points = _newPoints;
                offset = _newOffset;
                targetOffset = _newTargetOffset;
              }
            }
          }

          // 如果失败，重新计算当前节点将要被放置的位置
          if (fail) {
            elFuturePos = Object(
              _getElFuturePos__WEBPACK_IMPORTED_MODULE_4__['default'],
            )(elRegion, tgtRegion, points, offset, targetOffset);
            _utils__WEBPACK_IMPORTED_MODULE_0__['default'].mix(
              newElRegion,
              elFuturePos,
            );
          }
          var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
          var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
          // 检查反下后的位置是否可以放下了，如果仍然放不下：
          // 1. 复原修改过的定位参数
          if (isStillFailX || isStillFailY) {
            points = align.points;
            offset = align.offset || [0, 0];
            targetOffset = align.targetOffset || [0, 0];
          }
          // 2. 只有指定了可以调整当前方向才调整
          newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
          newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

          // 确实要调整，甚至可能会调整高度宽度
          if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
            newElRegion = Object(
              _adjustForViewport__WEBPACK_IMPORTED_MODULE_2__['default'],
            )(elFuturePos, elRegion, visibleRect, newOverflowCfg);
          }
        }

        // need judge to in case set fixed with in css on height auto element
        if (newElRegion.width !== elRegion.width) {
          _utils__WEBPACK_IMPORTED_MODULE_0__['default'].css(
            source,
            'width',
            _utils__WEBPACK_IMPORTED_MODULE_0__['default'].width(source) +
              newElRegion.width -
              elRegion.width,
          );
        }

        if (newElRegion.height !== elRegion.height) {
          _utils__WEBPACK_IMPORTED_MODULE_0__['default'].css(
            source,
            'height',
            _utils__WEBPACK_IMPORTED_MODULE_0__['default'].height(source) +
              newElRegion.height -
              elRegion.height,
          );
        }

        // https://github.com/kissyteam/kissy/issues/190
        // 相对于屏幕位置没变，而 left/top 变了
        // 例如 <div 'relative'><el absolute></div>
        _utils__WEBPACK_IMPORTED_MODULE_0__['default'].offset(
          source,
          {
            left: newElRegion.left,
            top: newElRegion.top,
          },
          {
            useCssRight: align.useCssRight,
            useCssBottom: align.useCssBottom,
            useCssTransform: align.useCssTransform,
            ignoreShake: align.ignoreShake,
          },
        );

        return {
          points: points,
          offset: offset,
          targetOffset: targetOffset,
          overflow: newOverflowCfg,
        };
      }

      /* harmony default export */ __webpack_exports__['default'] = doAlign;
      /**
       *  2012-04-26 yiminghe@gmail.com
       *   - 优化智能对齐算法
       *   - 慎用 resizeXX
       *
       *  2011-07-13 yiminghe@gmail.com note:
       *   - 增加智能对齐，以及大小调整选项
       **/

      /***/
    },

  /***/ './node_modules/dom-align/es/align/alignElement.js':
    /*!*********************************************************!*\
  !*** ./node_modules/dom-align/es/align/alignElement.js ***!
  \*********************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./align */ './node_modules/dom-align/es/align/align.js',
      );
      /* harmony import */ var _getOffsetParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../getOffsetParent */ './node_modules/dom-align/es/getOffsetParent.js',
      );
      /* harmony import */ var _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../getVisibleRectForElement */ './node_modules/dom-align/es/getVisibleRectForElement.js',
      );
      /* harmony import */ var _getRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ../getRegion */ './node_modules/dom-align/es/getRegion.js',
      );

      function isOutOfVisibleRect(target) {
        var visibleRect = Object(
          _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_2__['default'],
        )(target);
        var targetRegion = Object(
          _getRegion__WEBPACK_IMPORTED_MODULE_3__['default'],
        )(target);

        return (
          !visibleRect ||
          targetRegion.left + targetRegion.width <= visibleRect.left ||
          targetRegion.top + targetRegion.height <= visibleRect.top ||
          targetRegion.left >= visibleRect.right ||
          targetRegion.top >= visibleRect.bottom
        );
      }

      function alignElement(el, refNode, align) {
        var target = align.target || refNode;
        var refNodeRegion = Object(
          _getRegion__WEBPACK_IMPORTED_MODULE_3__['default'],
        )(target);

        var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

        return Object(_align__WEBPACK_IMPORTED_MODULE_0__['default'])(
          el,
          refNodeRegion,
          align,
          isTargetNotOutOfVisible,
        );
      }

      alignElement.__getOffsetParent =
        _getOffsetParent__WEBPACK_IMPORTED_MODULE_1__['default'];

      alignElement.__getVisibleRectForElement =
        _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_2__['default'];

      /* harmony default export */ __webpack_exports__[
        'default'
      ] = alignElement;

      /***/
    },

  /***/ './node_modules/dom-align/es/align/alignPoint.js':
    /*!*******************************************************!*\
  !*** ./node_modules/dom-align/es/align/alignPoint.js ***!
  \*******************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../utils */ './node_modules/dom-align/es/utils.js',
      );
      /* harmony import */ var _align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./align */ './node_modules/dom-align/es/align/align.js',
      );
      var _extends =
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

      /**
       * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
       * If client position provided, will internal convert to page position.
       */

      function alignPoint(el, tgtPoint, align) {
        var pageX = void 0;
        var pageY = void 0;

        var doc = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].getDocument(
          el,
        );
        var win = doc.defaultView || doc.parentWindow;

        var scrollX = _utils__WEBPACK_IMPORTED_MODULE_0__[
          'default'
        ].getWindowScrollLeft(win);
        var scrollY = _utils__WEBPACK_IMPORTED_MODULE_0__[
          'default'
        ].getWindowScrollTop(win);
        var viewportWidth = _utils__WEBPACK_IMPORTED_MODULE_0__[
          'default'
        ].viewportWidth(win);
        var viewportHeight = _utils__WEBPACK_IMPORTED_MODULE_0__[
          'default'
        ].viewportHeight(win);

        if ('pageX' in tgtPoint) {
          pageX = tgtPoint.pageX;
        } else {
          pageX = scrollX + tgtPoint.clientX;
        }

        if ('pageY' in tgtPoint) {
          pageY = tgtPoint.pageY;
        } else {
          pageY = scrollY + tgtPoint.clientY;
        }

        var tgtRegion = {
          left: pageX,
          top: pageY,
          width: 0,
          height: 0,
        };

        var pointInView =
          pageX >= 0 &&
          pageX <= scrollX + viewportWidth &&
          pageY >= 0 &&
          pageY <= scrollY + viewportHeight;

        // Provide default target point
        var points = [align.points[0], 'cc'];

        return Object(_align__WEBPACK_IMPORTED_MODULE_1__['default'])(
          el,
          tgtRegion,
          _extends({}, align, { points: points }),
          pointInView,
        );
      }

      /* harmony default export */ __webpack_exports__['default'] = alignPoint;

      /***/
    },

  /***/ './node_modules/dom-align/es/getAlignOffset.js':
    /*!*****************************************************!*\
  !*** ./node_modules/dom-align/es/getAlignOffset.js ***!
  \*****************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /**
       * 获取 node 上的 align 对齐点 相对于页面的坐标
       */

      function getAlignOffset(region, align) {
        var V = align.charAt(0);
        var H = align.charAt(1);
        var w = region.width;
        var h = region.height;

        var x = region.left;
        var y = region.top;

        if (V === 'c') {
          y += h / 2;
        } else if (V === 'b') {
          y += h;
        }

        if (H === 'c') {
          x += w / 2;
        } else if (H === 'r') {
          x += w;
        }

        return {
          left: x,
          top: y,
        };
      }

      /* harmony default export */ __webpack_exports__[
        'default'
      ] = getAlignOffset;

      /***/
    },

  /***/ './node_modules/dom-align/es/getElFuturePos.js':
    /*!*****************************************************!*\
  !*** ./node_modules/dom-align/es/getElFuturePos.js ***!
  \*****************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _getAlignOffset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./getAlignOffset */ './node_modules/dom-align/es/getAlignOffset.js',
      );

      function getElFuturePos(
        elRegion,
        refNodeRegion,
        points,
        offset,
        targetOffset,
      ) {
        var p1 = Object(
          _getAlignOffset__WEBPACK_IMPORTED_MODULE_0__['default'],
        )(refNodeRegion, points[1]);
        var p2 = Object(
          _getAlignOffset__WEBPACK_IMPORTED_MODULE_0__['default'],
        )(elRegion, points[0]);
        var diff = [p2.left - p1.left, p2.top - p1.top];

        return {
          left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
          top: elRegion.top - diff[1] + offset[1] - targetOffset[1],
        };
      }

      /* harmony default export */ __webpack_exports__[
        'default'
      ] = getElFuturePos;

      /***/
    },

  /***/ './node_modules/dom-align/es/getOffsetParent.js':
    /*!******************************************************!*\
  !*** ./node_modules/dom-align/es/getOffsetParent.js ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./utils */ './node_modules/dom-align/es/utils.js',
      );

      /**
       * 得到会导致元素显示不全的祖先元素
       */

      function getOffsetParent(element) {
        if (
          _utils__WEBPACK_IMPORTED_MODULE_0__['default'].isWindow(element) ||
          element.nodeType === 9
        ) {
          return null;
        }
        // ie 这个也不是完全可行
        /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
        // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
        //  In other browsers it only includes elements with position absolute, relative or
        // fixed, not elements with overflow set to auto or scroll.
        //        if (UA.ie && ieMode < 8) {
        //            return element.offsetParent;
        //        }
        // 统一的 offsetParent 方法
        var doc = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].getDocument(
          element,
        );
        var body = doc.body;
        var parent = void 0;
        var positionStyle = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].css(
          element,
          'position',
        );
        var skipStatic =
          positionStyle === 'fixed' || positionStyle === 'absolute';

        if (!skipStatic) {
          return element.nodeName.toLowerCase() === 'html'
            ? null
            : element.parentNode;
        }

        for (
          parent = element.parentNode;
          parent && parent !== body;
          parent = parent.parentNode
        ) {
          positionStyle = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].css(
            parent,
            'position',
          );
          if (positionStyle !== 'static') {
            return parent;
          }
        }
        return null;
      }

      /* harmony default export */ __webpack_exports__[
        'default'
      ] = getOffsetParent;

      /***/
    },

  /***/ './node_modules/dom-align/es/getRegion.js':
    /*!************************************************!*\
  !*** ./node_modules/dom-align/es/getRegion.js ***!
  \************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./utils */ './node_modules/dom-align/es/utils.js',
      );

      function getRegion(node) {
        var offset = void 0;
        var w = void 0;
        var h = void 0;
        if (
          !_utils__WEBPACK_IMPORTED_MODULE_0__['default'].isWindow(node) &&
          node.nodeType !== 9
        ) {
          offset = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].offset(node);
          w = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].outerWidth(node);
          h = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].outerHeight(node);
        } else {
          var win = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].getWindow(
            node,
          );
          offset = {
            left: _utils__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ].getWindowScrollLeft(win),
            top: _utils__WEBPACK_IMPORTED_MODULE_0__[
              'default'
            ].getWindowScrollTop(win),
          };
          w = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].viewportWidth(win);
          h = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].viewportHeight(
            win,
          );
        }
        offset.width = w;
        offset.height = h;
        return offset;
      }

      /* harmony default export */ __webpack_exports__['default'] = getRegion;

      /***/
    },

  /***/ './node_modules/dom-align/es/getVisibleRectForElement.js':
    /*!***************************************************************!*\
  !*** ./node_modules/dom-align/es/getVisibleRectForElement.js ***!
  \***************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./utils */ './node_modules/dom-align/es/utils.js',
      );
      /* harmony import */ var _getOffsetParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./getOffsetParent */ './node_modules/dom-align/es/getOffsetParent.js',
      );
      /* harmony import */ var _isAncestorFixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./isAncestorFixed */ './node_modules/dom-align/es/isAncestorFixed.js',
      );

      /**
       * 获得元素的显示部分的区域
       */
      function getVisibleRectForElement(element) {
        var visibleRect = {
          left: 0,
          right: Infinity,
          top: 0,
          bottom: Infinity,
        };
        var el = Object(
          _getOffsetParent__WEBPACK_IMPORTED_MODULE_1__['default'],
        )(element);
        var doc = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].getDocument(
          element,
        );
        var win = doc.defaultView || doc.parentWindow;
        var body = doc.body;
        var documentElement = doc.documentElement;

        // Determine the size of the visible rect by climbing the dom accounting for
        // all scrollable containers.
        while (el) {
          // clientWidth is zero for inline block elements in ie.
          if (
            (navigator.userAgent.indexOf('MSIE') === -1 ||
              el.clientWidth !== 0) &&
            // body may have overflow set on it, yet we still get the entire
            // viewport. In some browsers, el.offsetParent may be
            // document.documentElement, so check for that too.
            el !== body &&
            el !== documentElement &&
            _utils__WEBPACK_IMPORTED_MODULE_0__['default'].css(
              el,
              'overflow',
            ) !== 'visible'
          ) {
            var pos = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].offset(el);
            // add border
            pos.left += el.clientLeft;
            pos.top += el.clientTop;
            visibleRect.top = Math.max(visibleRect.top, pos.top);
            visibleRect.right = Math.min(
              visibleRect.right,
              // consider area without scrollBar
              pos.left + el.clientWidth,
            );
            visibleRect.bottom = Math.min(
              visibleRect.bottom,
              pos.top + el.clientHeight,
            );
            visibleRect.left = Math.max(visibleRect.left, pos.left);
          } else if (el === body || el === documentElement) {
            break;
          }
          el = Object(_getOffsetParent__WEBPACK_IMPORTED_MODULE_1__['default'])(
            el,
          );
        }

        // Set element position to fixed
        // make sure absolute element itself don't affect it's visible area
        // https://github.com/ant-design/ant-design/issues/7601
        var originalPosition = null;
        if (
          !_utils__WEBPACK_IMPORTED_MODULE_0__['default'].isWindow(element) &&
          element.nodeType !== 9
        ) {
          originalPosition = element.style.position;
          var position = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].css(
            element,
            'position',
          );
          if (position === 'absolute') {
            element.style.position = 'fixed';
          }
        }

        var scrollX = _utils__WEBPACK_IMPORTED_MODULE_0__[
          'default'
        ].getWindowScrollLeft(win);
        var scrollY = _utils__WEBPACK_IMPORTED_MODULE_0__[
          'default'
        ].getWindowScrollTop(win);
        var viewportWidth = _utils__WEBPACK_IMPORTED_MODULE_0__[
          'default'
        ].viewportWidth(win);
        var viewportHeight = _utils__WEBPACK_IMPORTED_MODULE_0__[
          'default'
        ].viewportHeight(win);
        var documentWidth = documentElement.scrollWidth;
        var documentHeight = documentElement.scrollHeight;

        // Reset element position after calculate the visible area
        if (element.style) {
          element.style.position = originalPosition;
        }

        if (
          Object(_isAncestorFixed__WEBPACK_IMPORTED_MODULE_2__['default'])(
            element,
          )
        ) {
          // Clip by viewport's size.
          visibleRect.left = Math.max(visibleRect.left, scrollX);
          visibleRect.top = Math.max(visibleRect.top, scrollY);
          visibleRect.right = Math.min(
            visibleRect.right,
            scrollX + viewportWidth,
          );
          visibleRect.bottom = Math.min(
            visibleRect.bottom,
            scrollY + viewportHeight,
          );
        } else {
          // Clip by document's size.
          var maxVisibleWidth = Math.max(
            documentWidth,
            scrollX + viewportWidth,
          );
          visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

          var maxVisibleHeight = Math.max(
            documentHeight,
            scrollY + viewportHeight,
          );
          visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
        }

        return visibleRect.top >= 0 &&
          visibleRect.left >= 0 &&
          visibleRect.bottom > visibleRect.top &&
          visibleRect.right > visibleRect.left
          ? visibleRect
          : null;
      }

      /* harmony default export */ __webpack_exports__[
        'default'
      ] = getVisibleRectForElement;

      /***/
    },

  /***/ './node_modules/dom-align/es/index.js':
    /*!********************************************!*\
  !*** ./node_modules/dom-align/es/index.js ***!
  \********************************************/
    /*! exports provided: alignElement, alignPoint, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _align_alignElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./align/alignElement */ './node_modules/dom-align/es/align/alignElement.js',
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'alignElement',
        function() {
          return _align_alignElement__WEBPACK_IMPORTED_MODULE_0__['default'];
        },
      );

      /* harmony import */ var _align_alignPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./align/alignPoint */ './node_modules/dom-align/es/align/alignPoint.js',
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'alignPoint',
        function() {
          return _align_alignPoint__WEBPACK_IMPORTED_MODULE_1__['default'];
        },
      );

      /* harmony default export */ __webpack_exports__['default'] =
        _align_alignElement__WEBPACK_IMPORTED_MODULE_0__['default'];

      /***/
    },

  /***/ './node_modules/dom-align/es/isAncestorFixed.js':
    /*!******************************************************!*\
  !*** ./node_modules/dom-align/es/isAncestorFixed.js ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return isAncestorFixed;
        },
      );
      /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./utils */ './node_modules/dom-align/es/utils.js',
      );

      function isAncestorFixed(element) {
        if (
          _utils__WEBPACK_IMPORTED_MODULE_0__['default'].isWindow(element) ||
          element.nodeType === 9
        ) {
          return false;
        }

        var doc = _utils__WEBPACK_IMPORTED_MODULE_0__['default'].getDocument(
          element,
        );
        var body = doc.body;
        var parent = null;
        for (
          parent = element.parentNode;
          parent && parent !== body;
          parent = parent.parentNode
        ) {
          var positionStyle = _utils__WEBPACK_IMPORTED_MODULE_0__[
            'default'
          ].css(parent, 'position');
          if (positionStyle === 'fixed') {
            return true;
          }
        }
        return false;
      }

      /***/
    },

  /***/ './node_modules/dom-align/es/propertyUtils.js':
    /*!****************************************************!*\
  !*** ./node_modules/dom-align/es/propertyUtils.js ***!
  \****************************************************/
    /*! exports provided: getTransformName, setTransitionProperty, getTransitionProperty, getTransformXY, setTransformXY */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getTransformName',
        function() {
          return getTransformName;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'setTransitionProperty',
        function() {
          return setTransitionProperty;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getTransitionProperty',
        function() {
          return getTransitionProperty;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getTransformXY',
        function() {
          return getTransformXY;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'setTransformXY',
        function() {
          return setTransformXY;
        },
      );
      var vendorPrefix = void 0;

      var jsCssMap = {
        Webkit: '-webkit-',
        Moz: '-moz-',
        // IE did it wrong again ...
        ms: '-ms-',
        O: '-o-',
      };

      function getVendorPrefix() {
        if (vendorPrefix !== undefined) {
          return vendorPrefix;
        }
        vendorPrefix = '';
        var style = document.createElement('p').style;
        var testProp = 'Transform';
        for (var key in jsCssMap) {
          if (key + testProp in style) {
            vendorPrefix = key;
          }
        }
        return vendorPrefix;
      }

      function getTransitionName() {
        return getVendorPrefix()
          ? getVendorPrefix() + 'TransitionProperty'
          : 'transitionProperty';
      }

      function getTransformName() {
        return getVendorPrefix()
          ? getVendorPrefix() + 'Transform'
          : 'transform';
      }

      function setTransitionProperty(node, value) {
        var name = getTransitionName();
        if (name) {
          node.style[name] = value;
          if (name !== 'transitionProperty') {
            node.style.transitionProperty = value;
          }
        }
      }

      function setTransform(node, value) {
        var name = getTransformName();
        if (name) {
          node.style[name] = value;
          if (name !== 'transform') {
            node.style.transform = value;
          }
        }
      }

      function getTransitionProperty(node) {
        return node.style.transitionProperty || node.style[getTransitionName()];
      }

      function getTransformXY(node) {
        var style = window.getComputedStyle(node, null);
        var transform =
          style.getPropertyValue('transform') ||
          style.getPropertyValue(getTransformName());
        if (transform && transform !== 'none') {
          var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
          return {
            x: parseFloat(matrix[12] || matrix[4], 0),
            y: parseFloat(matrix[13] || matrix[5], 0),
          };
        }
        return {
          x: 0,
          y: 0,
        };
      }

      var matrix2d = /matrix\((.*)\)/;
      var matrix3d = /matrix3d\((.*)\)/;

      function setTransformXY(node, xy) {
        var style = window.getComputedStyle(node, null);
        var transform =
          style.getPropertyValue('transform') ||
          style.getPropertyValue(getTransformName());
        if (transform && transform !== 'none') {
          var arr = void 0;
          var match2d = transform.match(matrix2d);
          if (match2d) {
            match2d = match2d[1];
            arr = match2d.split(',').map(function(item) {
              return parseFloat(item, 10);
            });
            arr[4] = xy.x;
            arr[5] = xy.y;
            setTransform(node, 'matrix(' + arr.join(',') + ')');
          } else {
            var match3d = transform.match(matrix3d)[1];
            arr = match3d.split(',').map(function(item) {
              return parseFloat(item, 10);
            });
            arr[12] = xy.x;
            arr[13] = xy.y;
            setTransform(node, 'matrix3d(' + arr.join(',') + ')');
          }
        } else {
          setTransform(
            node,
            'translateX(' +
              xy.x +
              'px) translateY(' +
              xy.y +
              'px) translateZ(0)',
          );
        }
      }

      /***/
    },

  /***/ './node_modules/dom-align/es/utils.js':
    /*!********************************************!*\
  !*** ./node_modules/dom-align/es/utils.js ***!
  \********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _propertyUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./propertyUtils */ './node_modules/dom-align/es/propertyUtils.js',
      );
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

      var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

      var getComputedStyleX = void 0;

      // https://stackoverflow.com/a/3485654/3040605
      function forceRelayout(elem) {
        var originalStyle = elem.style.display;
        elem.style.display = 'none';
        elem.offsetHeight; // eslint-disable-line
        elem.style.display = originalStyle;
      }

      function css(el, name, v) {
        var value = v;
        if (
          (typeof name === 'undefined' ? 'undefined' : _typeof(name)) ===
          'object'
        ) {
          for (var i in name) {
            if (name.hasOwnProperty(i)) {
              css(el, i, name[i]);
            }
          }
          return undefined;
        }
        if (typeof value !== 'undefined') {
          if (typeof value === 'number') {
            value = value + 'px';
          }
          el.style[name] = value;
          return undefined;
        }
        return getComputedStyleX(el, name);
      }

      function getClientPosition(elem) {
        var box = void 0;
        var x = void 0;
        var y = void 0;
        var doc = elem.ownerDocument;
        var body = doc.body;
        var docElem = doc && doc.documentElement;
        // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
        box = elem.getBoundingClientRect();

        // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
        // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
        // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

        x = box.left;
        y = box.top;

        // In IE, most of the time, 2 extra pixels are added to the top and left
        // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
        // IE6 standards mode, this border can be overridden by setting the
        // document element's border to zero -- thus, we cannot rely on the
        // offset always being 2 pixels.

        // In quirks mode, the offset can be determined by querying the body's
        // clientLeft/clientTop, but in standards mode, it is found by querying
        // the document element's clientLeft/clientTop.  Since we already called
        // getClientBoundingRect we have already forced a reflow, so it is not
        // too expensive just to query them all.

        // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
        // 窗口边框标准是设 documentElement ,quirks 时设置 body
        // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
        // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
        // 标准 ie 下 docElem.clientTop 就是 border-top
        // ie7 html 即窗口边框改变不了。永远为 2
        // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

        x -= docElem.clientLeft || body.clientLeft || 0;
        y -= docElem.clientTop || body.clientTop || 0;

        return {
          left: x,
          top: y,
        };
      }

      function getScroll(w, top) {
        var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
        var method = 'scroll' + (top ? 'Top' : 'Left');
        if (typeof ret !== 'number') {
          var d = w.document;
          // ie6,7,8 standard mode
          ret = d.documentElement[method];
          if (typeof ret !== 'number') {
            // quirks mode
            ret = d.body[method];
          }
        }
        return ret;
      }

      function getScrollLeft(w) {
        return getScroll(w);
      }

      function getScrollTop(w) {
        return getScroll(w, true);
      }

      function getOffset(el) {
        var pos = getClientPosition(el);
        var doc = el.ownerDocument;
        var w = doc.defaultView || doc.parentWindow;
        pos.left += getScrollLeft(w);
        pos.top += getScrollTop(w);
        return pos;
      }

      /**
       * A crude way of determining if an object is a window
       * @member util
       */
      function isWindow(obj) {
        // must use == for ie8
        /* eslint eqeqeq:0 */
        return obj !== null && obj !== undefined && obj == obj.window;
      }

      function getDocument(node) {
        if (isWindow(node)) {
          return node.document;
        }
        if (node.nodeType === 9) {
          return node;
        }
        return node.ownerDocument;
      }

      function _getComputedStyle(elem, name, cs) {
        var computedStyle = cs;
        var val = '';
        var d = getDocument(elem);
        computedStyle =
          computedStyle || d.defaultView.getComputedStyle(elem, null);

        // https://github.com/kissyteam/kissy/issues/61
        if (computedStyle) {
          val = computedStyle.getPropertyValue(name) || computedStyle[name];
        }

        return val;
      }

      var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
      var RE_POS = /^(top|right|bottom|left)$/;
      var CURRENT_STYLE = 'currentStyle';
      var RUNTIME_STYLE = 'runtimeStyle';
      var LEFT = 'left';
      var PX = 'px';

      function _getComputedStyleIE(elem, name) {
        // currentStyle maybe null
        // http://msdn.microsoft.com/en-us/library/ms535231.aspx
        var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

        // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
        // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
        // 在 ie 下不对，需要直接用 offset 方式
        // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

        // From the awesome hack by Dean Edwards
        // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
        // If we're not dealing with a regular pixel number
        // but a number that has a weird ending, we need to convert it to pixels
        // exclude left right for relativity
        if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
          // Remember the original values
          var style = elem.style;
          var left = style[LEFT];
          var rsLeft = elem[RUNTIME_STYLE][LEFT];

          // prevent flashing of content
          elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

          // Put in the new values to get a computed value out
          style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
          ret = style.pixelLeft + PX;

          // Revert the changed values
          style[LEFT] = left;

          elem[RUNTIME_STYLE][LEFT] = rsLeft;
        }
        return ret === '' ? 'auto' : ret;
      }

      if (typeof window !== 'undefined') {
        getComputedStyleX = window.getComputedStyle
          ? _getComputedStyle
          : _getComputedStyleIE;
      }

      function getOffsetDirection(dir, option) {
        if (dir === 'left') {
          return option.useCssRight ? 'right' : dir;
        }
        return option.useCssBottom ? 'bottom' : dir;
      }

      function oppositeOffsetDirection(dir) {
        if (dir === 'left') {
          return 'right';
        } else if (dir === 'right') {
          return 'left';
        } else if (dir === 'top') {
          return 'bottom';
        } else if (dir === 'bottom') {
          return 'top';
        }
      }

      // 设置 elem 相对 elem.ownerDocument 的坐标
      function setLeftTop(elem, offset, option) {
        // set position first, in-case top/left are set even on static elem
        if (css(elem, 'position') === 'static') {
          elem.style.position = 'relative';
        }
        var presetH = -999;
        var presetV = -999;
        var horizontalProperty = getOffsetDirection('left', option);
        var verticalProperty = getOffsetDirection('top', option);
        var oppositeHorizontalProperty = oppositeOffsetDirection(
          horizontalProperty,
        );
        var oppositeVerticalProperty = oppositeOffsetDirection(
          verticalProperty,
        );

        if (horizontalProperty !== 'left') {
          presetH = 999;
        }

        if (verticalProperty !== 'top') {
          presetV = 999;
        }
        var originalTransition = '';
        var originalOffset = getOffset(elem);
        if ('left' in offset || 'top' in offset) {
          originalTransition =
            Object(
              _propertyUtils__WEBPACK_IMPORTED_MODULE_0__[
                'getTransitionProperty'
              ],
            )(elem) || '';
          Object(
            _propertyUtils__WEBPACK_IMPORTED_MODULE_0__[
              'setTransitionProperty'
            ],
          )(elem, 'none');
        }
        if ('left' in offset) {
          elem.style[oppositeHorizontalProperty] = '';
          elem.style[horizontalProperty] = presetH + 'px';
        }
        if ('top' in offset) {
          elem.style[oppositeVerticalProperty] = '';
          elem.style[verticalProperty] = presetV + 'px';
        }
        // force relayout
        forceRelayout(elem);
        var old = getOffset(elem);
        var originalStyle = {};
        for (var key in offset) {
          if (offset.hasOwnProperty(key)) {
            var dir = getOffsetDirection(key, option);
            var preset = key === 'left' ? presetH : presetV;
            var off = originalOffset[key] - old[key];
            if (dir === key) {
              originalStyle[dir] = preset + off;
            } else {
              originalStyle[dir] = preset - off;
            }
          }
        }
        css(elem, originalStyle);
        // force relayout
        forceRelayout(elem);
        if ('left' in offset || 'top' in offset) {
          Object(
            _propertyUtils__WEBPACK_IMPORTED_MODULE_0__[
              'setTransitionProperty'
            ],
          )(elem, originalTransition);
        }
        var ret = {};
        for (var _key in offset) {
          if (offset.hasOwnProperty(_key)) {
            var _dir = getOffsetDirection(_key, option);
            var _off = offset[_key] - originalOffset[_key];
            if (_key === _dir) {
              ret[_dir] = originalStyle[_dir] + _off;
            } else {
              ret[_dir] = originalStyle[_dir] - _off;
            }
          }
        }
        css(elem, ret);
      }

      function setTransform(elem, offset) {
        var originalOffset = getOffset(elem);
        var originalXY = Object(
          _propertyUtils__WEBPACK_IMPORTED_MODULE_0__['getTransformXY'],
        )(elem);
        var resultXY = { x: originalXY.x, y: originalXY.y };
        if ('left' in offset) {
          resultXY.x = originalXY.x + offset.left - originalOffset.left;
        }
        if ('top' in offset) {
          resultXY.y = originalXY.y + offset.top - originalOffset.top;
        }
        Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__['setTransformXY'])(
          elem,
          resultXY,
        );
      }

      function setOffset(elem, offset, option) {
        if (option.ignoreShake) {
          var oriOffset = getOffset(elem);

          var oLeft = oriOffset.left.toFixed(0);
          var oTop = oriOffset.top.toFixed(0);
          var tLeft = offset.left.toFixed(0);
          var tTop = offset.top.toFixed(0);

          if (oLeft === tLeft && oTop === tTop) {
            return;
          }
        }

        if (option.useCssRight || option.useCssBottom) {
          setLeftTop(elem, offset, option);
        } else if (
          option.useCssTransform &&
          Object(
            _propertyUtils__WEBPACK_IMPORTED_MODULE_0__['getTransformName'],
          )() in document.body.style
        ) {
          setTransform(elem, offset, option);
        } else {
          setLeftTop(elem, offset, option);
        }
      }

      function each(arr, fn) {
        for (var i = 0; i < arr.length; i++) {
          fn(arr[i]);
        }
      }

      function isBorderBoxFn(elem) {
        return getComputedStyleX(elem, 'boxSizing') === 'border-box';
      }

      var BOX_MODELS = ['margin', 'border', 'padding'];
      var CONTENT_INDEX = -1;
      var PADDING_INDEX = 2;
      var BORDER_INDEX = 1;
      var MARGIN_INDEX = 0;

      function swap(elem, options, callback) {
        var old = {};
        var style = elem.style;
        var name = void 0;

        // Remember the old values, and insert the new ones
        for (name in options) {
          if (options.hasOwnProperty(name)) {
            old[name] = style[name];
            style[name] = options[name];
          }
        }

        callback.call(elem);

        // Revert the old values
        for (name in options) {
          if (options.hasOwnProperty(name)) {
            style[name] = old[name];
          }
        }
      }

      function getPBMWidth(elem, props, which) {
        var value = 0;
        var prop = void 0;
        var j = void 0;
        var i = void 0;
        for (j = 0; j < props.length; j++) {
          prop = props[j];
          if (prop) {
            for (i = 0; i < which.length; i++) {
              var cssProp = void 0;
              if (prop === 'border') {
                cssProp = '' + prop + which[i] + 'Width';
              } else {
                cssProp = prop + which[i];
              }
              value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
            }
          }
        }
        return value;
      }

      var domUtils = {};

      each(['Width', 'Height'], function(name) {
        domUtils['doc' + name] = function(refWin) {
          var d = refWin.document;
          return Math.max(
            // firefox chrome documentElement.scrollHeight< body.scrollHeight
            // ie standard mode : documentElement.scrollHeight> body.scrollHeight
            d.documentElement['scroll' + name],
            // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
            d.body['scroll' + name],
            domUtils['viewport' + name](d),
          );
        };

        domUtils['viewport' + name] = function(win) {
          // pc browser includes scrollbar in window.innerWidth
          var prop = 'client' + name;
          var doc = win.document;
          var body = doc.body;
          var documentElement = doc.documentElement;
          var documentElementProp = documentElement[prop];
          // 标准模式取 documentElement
          // backcompat 取 body
          return (
            (doc.compatMode === 'CSS1Compat' && documentElementProp) ||
            (body && body[prop]) ||
            documentElementProp
          );
        };
      });

      /*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
      function getWH(elem, name, ex) {
        var extra = ex;
        if (isWindow(elem)) {
          return name === 'width'
            ? domUtils.viewportWidth(elem)
            : domUtils.viewportHeight(elem);
        } else if (elem.nodeType === 9) {
          return name === 'width'
            ? domUtils.docWidth(elem)
            : domUtils.docHeight(elem);
        }
        var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
        var borderBoxValue =
          name === 'width'
            ? elem.getBoundingClientRect().width
            : elem.getBoundingClientRect().height;
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem, computedStyle);
        var cssBoxValue = 0;
        if (
          borderBoxValue === null ||
          borderBoxValue === undefined ||
          borderBoxValue <= 0
        ) {
          borderBoxValue = undefined;
          // Fall back to computed then un computed css if necessary
          cssBoxValue = getComputedStyleX(elem, name);
          if (
            cssBoxValue === null ||
            cssBoxValue === undefined ||
            Number(cssBoxValue) < 0
          ) {
            cssBoxValue = elem.style[name] || 0;
          }
          // Normalize '', auto, and prepare for extra
          cssBoxValue = parseFloat(cssBoxValue) || 0;
        }
        if (extra === undefined) {
          extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
        }
        var borderBoxValueOrIsBorderBox =
          borderBoxValue !== undefined || isBorderBox;
        var val = borderBoxValue || cssBoxValue;
        if (extra === CONTENT_INDEX) {
          if (borderBoxValueOrIsBorderBox) {
            return (
              val -
              getPBMWidth(elem, ['border', 'padding'], which, computedStyle)
            );
          }
          return cssBoxValue;
        } else if (borderBoxValueOrIsBorderBox) {
          if (extra === BORDER_INDEX) {
            return val;
          }
          return (
            val +
            (extra === PADDING_INDEX
              ? -getPBMWidth(elem, ['border'], which, computedStyle)
              : getPBMWidth(elem, ['margin'], which, computedStyle))
          );
        }
        return (
          cssBoxValue +
          getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle)
        );
      }

      var cssShow = {
        position: 'absolute',
        visibility: 'hidden',
        display: 'block',
      };

      // fix #119 : https://github.com/kissyteam/kissy/issues/119
      function getWHIgnoreDisplay() {
        for (
          var _len = arguments.length, args = Array(_len), _key2 = 0;
          _key2 < _len;
          _key2++
        ) {
          args[_key2] = arguments[_key2];
        }

        var val = void 0;
        var elem = args[0];
        // in case elem is window
        // elem.offsetWidth === undefined
        if (elem.offsetWidth !== 0) {
          val = getWH.apply(undefined, args);
        } else {
          swap(elem, cssShow, function() {
            val = getWH.apply(undefined, args);
          });
        }
        return val;
      }

      each(['width', 'height'], function(name) {
        var first = name.charAt(0).toUpperCase() + name.slice(1);
        domUtils['outer' + first] = function(el, includeMargin) {
          return (
            el &&
            getWHIgnoreDisplay(
              el,
              name,
              includeMargin ? MARGIN_INDEX : BORDER_INDEX,
            )
          );
        };
        var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

        domUtils[name] = function(elem, v) {
          var val = v;
          if (val !== undefined) {
            if (elem) {
              var computedStyle = getComputedStyleX(elem);
              var isBorderBox = isBorderBoxFn(elem);
              if (isBorderBox) {
                val += getPBMWidth(
                  elem,
                  ['padding', 'border'],
                  which,
                  computedStyle,
                );
              }
              return css(elem, name, val);
            }
            return undefined;
          }
          return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
        };
      });

      function mix(to, from) {
        for (var i in from) {
          if (from.hasOwnProperty(i)) {
            to[i] = from[i];
          }
        }
        return to;
      }

      var utils = {
        getWindow: function getWindow(node) {
          if (node && node.document && node.setTimeout) {
            return node;
          }
          var doc = node.ownerDocument || node;
          return doc.defaultView || doc.parentWindow;
        },

        getDocument: getDocument,
        offset: function offset(el, value, option) {
          if (typeof value !== 'undefined') {
            setOffset(el, value, option || {});
          } else {
            return getOffset(el);
          }
        },

        isWindow: isWindow,
        each: each,
        css: css,
        clone: function clone(obj) {
          var i = void 0;
          var ret = {};
          for (i in obj) {
            if (obj.hasOwnProperty(i)) {
              ret[i] = obj[i];
            }
          }
          var overflow = obj.overflow;
          if (overflow) {
            for (i in obj) {
              if (obj.hasOwnProperty(i)) {
                ret.overflow[i] = obj.overflow[i];
              }
            }
          }
          return ret;
        },

        mix: mix,
        getWindowScrollLeft: function getWindowScrollLeft(w) {
          return getScrollLeft(w);
        },
        getWindowScrollTop: function getWindowScrollTop(w) {
          return getScrollTop(w);
        },
        merge: function merge() {
          var ret = {};

          for (
            var _len2 = arguments.length, args = Array(_len2), _key3 = 0;
            _key3 < _len2;
            _key3++
          ) {
            args[_key3] = arguments[_key3];
          }

          for (var i = 0; i < args.length; i++) {
            utils.mix(ret, args[i]);
          }
          return ret;
        },

        viewportWidth: 0,
        viewportHeight: 0,
      };

      mix(utils, domUtils);

      /* harmony default export */ __webpack_exports__['default'] = utils;

      /***/
    },

  /***/ './node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js':
    /*!***********************************************************************!*\
  !*** ./node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js ***!
  \***********************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var util = __webpack_require__(
        /*! ./util */ './node_modules/dom-scroll-into-view/lib/util.js',
      );

      function scrollIntoView(elem, container, config) {
        config = config || {};
        // document 归一化到 window
        if (container.nodeType === 9) {
          container = util.getWindow(container);
        }

        var allowHorizontalScroll = config.allowHorizontalScroll;
        var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
        var alignWithTop = config.alignWithTop;
        var alignWithLeft = config.alignWithLeft;
        var offsetTop = config.offsetTop || 0;
        var offsetLeft = config.offsetLeft || 0;
        var offsetBottom = config.offsetBottom || 0;
        var offsetRight = config.offsetRight || 0;

        allowHorizontalScroll =
          allowHorizontalScroll === undefined ? true : allowHorizontalScroll;

        var isWin = util.isWindow(container);
        var elemOffset = util.offset(elem);
        var eh = util.outerHeight(elem);
        var ew = util.outerWidth(elem);
        var containerOffset = undefined;
        var ch = undefined;
        var cw = undefined;
        var containerScroll = undefined;
        var diffTop = undefined;
        var diffBottom = undefined;
        var win = undefined;
        var winScroll = undefined;
        var ww = undefined;
        var wh = undefined;

        if (isWin) {
          win = container;
          wh = util.height(win);
          ww = util.width(win);
          winScroll = {
            left: util.scrollLeft(win),
            top: util.scrollTop(win),
          };
          // elem 相对 container 可视视窗的距离
          diffTop = {
            left: elemOffset.left - winScroll.left - offsetLeft,
            top: elemOffset.top - winScroll.top - offsetTop,
          };
          diffBottom = {
            left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
            top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom,
          };
          containerScroll = winScroll;
        } else {
          containerOffset = util.offset(container);
          ch = container.clientHeight;
          cw = container.clientWidth;
          containerScroll = {
            left: container.scrollLeft,
            top: container.scrollTop,
          };
          // elem 相对 container 可视视窗的距离
          // 注意边框, offset 是边框到根节点
          diffTop = {
            left:
              elemOffset.left -
              (containerOffset.left +
                (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) -
              offsetLeft,
            top:
              elemOffset.top -
              (containerOffset.top +
                (parseFloat(util.css(container, 'borderTopWidth')) || 0)) -
              offsetTop,
          };
          diffBottom = {
            left:
              elemOffset.left +
              ew -
              (containerOffset.left +
                cw +
                (parseFloat(util.css(container, 'borderRightWidth')) || 0)) +
              offsetRight,
            top:
              elemOffset.top +
              eh -
              (containerOffset.top +
                ch +
                (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) +
              offsetBottom,
          };
        }

        if (diffTop.top < 0 || diffBottom.top > 0) {
          // 强制向上
          if (alignWithTop === true) {
            util.scrollTop(container, containerScroll.top + diffTop.top);
          } else if (alignWithTop === false) {
            util.scrollTop(container, containerScroll.top + diffBottom.top);
          } else {
            // 自动调整
            if (diffTop.top < 0) {
              util.scrollTop(container, containerScroll.top + diffTop.top);
            } else {
              util.scrollTop(container, containerScroll.top + diffBottom.top);
            }
          }
        } else {
          if (!onlyScrollIfNeeded) {
            alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
            if (alignWithTop) {
              util.scrollTop(container, containerScroll.top + diffTop.top);
            } else {
              util.scrollTop(container, containerScroll.top + diffBottom.top);
            }
          }
        }

        if (allowHorizontalScroll) {
          if (diffTop.left < 0 || diffBottom.left > 0) {
            // 强制向上
            if (alignWithLeft === true) {
              util.scrollLeft(container, containerScroll.left + diffTop.left);
            } else if (alignWithLeft === false) {
              util.scrollLeft(
                container,
                containerScroll.left + diffBottom.left,
              );
            } else {
              // 自动调整
              if (diffTop.left < 0) {
                util.scrollLeft(container, containerScroll.left + diffTop.left);
              } else {
                util.scrollLeft(
                  container,
                  containerScroll.left + diffBottom.left,
                );
              }
            }
          } else {
            if (!onlyScrollIfNeeded) {
              alignWithLeft =
                alignWithLeft === undefined ? true : !!alignWithLeft;
              if (alignWithLeft) {
                util.scrollLeft(container, containerScroll.left + diffTop.left);
              } else {
                util.scrollLeft(
                  container,
                  containerScroll.left + diffBottom.left,
                );
              }
            }
          }
        }
      }

      module.exports = scrollIntoView;

      /***/
    },

  /***/ './node_modules/dom-scroll-into-view/lib/index.js':
    /*!********************************************************!*\
  !*** ./node_modules/dom-scroll-into-view/lib/index.js ***!
  \********************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      module.exports = __webpack_require__(
        /*! ./dom-scroll-into-view */ './node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js',
      );

      /***/
    },

  /***/ './node_modules/dom-scroll-into-view/lib/util.js':
    /*!*******************************************************!*\
  !*** ./node_modules/dom-scroll-into-view/lib/util.js ***!
  \*******************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var _extends =
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

      var _typeof =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function(obj) {
              return typeof obj;
            }
          : function(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol
                ? 'symbol'
                : typeof obj;
            };

      var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

      function getClientPosition(elem) {
        var box = undefined;
        var x = undefined;
        var y = undefined;
        var doc = elem.ownerDocument;
        var body = doc.body;
        var docElem = doc && doc.documentElement;
        // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
        box = elem.getBoundingClientRect();

        // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
        // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
        // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

        x = box.left;
        y = box.top;

        // In IE, most of the time, 2 extra pixels are added to the top and left
        // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
        // IE6 standards mode, this border can be overridden by setting the
        // document element's border to zero -- thus, we cannot rely on the
        // offset always being 2 pixels.

        // In quirks mode, the offset can be determined by querying the body's
        // clientLeft/clientTop, but in standards mode, it is found by querying
        // the document element's clientLeft/clientTop.  Since we already called
        // getClientBoundingRect we have already forced a reflow, so it is not
        // too expensive just to query them all.

        // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
        // 窗口边框标准是设 documentElement ,quirks 时设置 body
        // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
        // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
        // 标准 ie 下 docElem.clientTop 就是 border-top
        // ie7 html 即窗口边框改变不了。永远为 2
        // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

        x -= docElem.clientLeft || body.clientLeft || 0;
        y -= docElem.clientTop || body.clientTop || 0;

        return {
          left: x,
          top: y,
        };
      }

      function getScroll(w, top) {
        var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
        var method = 'scroll' + (top ? 'Top' : 'Left');
        if (typeof ret !== 'number') {
          var d = w.document;
          // ie6,7,8 standard mode
          ret = d.documentElement[method];
          if (typeof ret !== 'number') {
            // quirks mode
            ret = d.body[method];
          }
        }
        return ret;
      }

      function getScrollLeft(w) {
        return getScroll(w);
      }

      function getScrollTop(w) {
        return getScroll(w, true);
      }

      function getOffset(el) {
        var pos = getClientPosition(el);
        var doc = el.ownerDocument;
        var w = doc.defaultView || doc.parentWindow;
        pos.left += getScrollLeft(w);
        pos.top += getScrollTop(w);
        return pos;
      }
      function _getComputedStyle(elem, name, computedStyle_) {
        var val = '';
        var d = elem.ownerDocument;
        var computedStyle =
          computedStyle_ || d.defaultView.getComputedStyle(elem, null);

        // https://github.com/kissyteam/kissy/issues/61
        if (computedStyle) {
          val = computedStyle.getPropertyValue(name) || computedStyle[name];
        }

        return val;
      }

      var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
      var RE_POS = /^(top|right|bottom|left)$/;
      var CURRENT_STYLE = 'currentStyle';
      var RUNTIME_STYLE = 'runtimeStyle';
      var LEFT = 'left';
      var PX = 'px';

      function _getComputedStyleIE(elem, name) {
        // currentStyle maybe null
        // http://msdn.microsoft.com/en-us/library/ms535231.aspx
        var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

        // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
        // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
        // 在 ie 下不对，需要直接用 offset 方式
        // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

        // From the awesome hack by Dean Edwards
        // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
        // If we're not dealing with a regular pixel number
        // but a number that has a weird ending, we need to convert it to pixels
        // exclude left right for relativity
        if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
          // Remember the original values
          var style = elem.style;
          var left = style[LEFT];
          var rsLeft = elem[RUNTIME_STYLE][LEFT];

          // prevent flashing of content
          elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

          // Put in the new values to get a computed value out
          style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
          ret = style.pixelLeft + PX;

          // Revert the changed values
          style[LEFT] = left;

          elem[RUNTIME_STYLE][LEFT] = rsLeft;
        }
        return ret === '' ? 'auto' : ret;
      }

      var getComputedStyleX = undefined;
      if (typeof window !== 'undefined') {
        getComputedStyleX = window.getComputedStyle
          ? _getComputedStyle
          : _getComputedStyleIE;
      }

      function each(arr, fn) {
        for (var i = 0; i < arr.length; i++) {
          fn(arr[i]);
        }
      }

      function isBorderBoxFn(elem) {
        return getComputedStyleX(elem, 'boxSizing') === 'border-box';
      }

      var BOX_MODELS = ['margin', 'border', 'padding'];
      var CONTENT_INDEX = -1;
      var PADDING_INDEX = 2;
      var BORDER_INDEX = 1;
      var MARGIN_INDEX = 0;

      function swap(elem, options, callback) {
        var old = {};
        var style = elem.style;
        var name = undefined;

        // Remember the old values, and insert the new ones
        for (name in options) {
          if (options.hasOwnProperty(name)) {
            old[name] = style[name];
            style[name] = options[name];
          }
        }

        callback.call(elem);

        // Revert the old values
        for (name in options) {
          if (options.hasOwnProperty(name)) {
            style[name] = old[name];
          }
        }
      }

      function getPBMWidth(elem, props, which) {
        var value = 0;
        var prop = undefined;
        var j = undefined;
        var i = undefined;
        for (j = 0; j < props.length; j++) {
          prop = props[j];
          if (prop) {
            for (i = 0; i < which.length; i++) {
              var cssProp = undefined;
              if (prop === 'border') {
                cssProp = prop + which[i] + 'Width';
              } else {
                cssProp = prop + which[i];
              }
              value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
            }
          }
        }
        return value;
      }

      /**
       * A crude way of determining if an object is a window
       * @member util
       */
      function isWindow(obj) {
        // must use == for ie8
        /* eslint eqeqeq:0 */
        return obj != null && obj == obj.window;
      }

      var domUtils = {};

      each(['Width', 'Height'], function(name) {
        domUtils['doc' + name] = function(refWin) {
          var d = refWin.document;
          return Math.max(
            // firefox chrome documentElement.scrollHeight< body.scrollHeight
            // ie standard mode : documentElement.scrollHeight> body.scrollHeight
            d.documentElement['scroll' + name],
            // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
            d.body['scroll' + name],
            domUtils['viewport' + name](d),
          );
        };

        domUtils['viewport' + name] = function(win) {
          // pc browser includes scrollbar in window.innerWidth
          var prop = 'client' + name;
          var doc = win.document;
          var body = doc.body;
          var documentElement = doc.documentElement;
          var documentElementProp = documentElement[prop];
          // 标准模式取 documentElement
          // backcompat 取 body
          return (
            (doc.compatMode === 'CSS1Compat' && documentElementProp) ||
            (body && body[prop]) ||
            documentElementProp
          );
        };
      });

      /*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
      function getWH(elem, name, extra) {
        if (isWindow(elem)) {
          return name === 'width'
            ? domUtils.viewportWidth(elem)
            : domUtils.viewportHeight(elem);
        } else if (elem.nodeType === 9) {
          return name === 'width'
            ? domUtils.docWidth(elem)
            : domUtils.docHeight(elem);
        }
        var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
        var borderBoxValue =
          name === 'width' ? elem.offsetWidth : elem.offsetHeight;
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem, computedStyle);
        var cssBoxValue = 0;
        if (borderBoxValue == null || borderBoxValue <= 0) {
          borderBoxValue = undefined;
          // Fall back to computed then un computed css if necessary
          cssBoxValue = getComputedStyleX(elem, name);
          if (cssBoxValue == null || Number(cssBoxValue) < 0) {
            cssBoxValue = elem.style[name] || 0;
          }
          // Normalize '', auto, and prepare for extra
          cssBoxValue = parseFloat(cssBoxValue) || 0;
        }
        if (extra === undefined) {
          extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
        }
        var borderBoxValueOrIsBorderBox =
          borderBoxValue !== undefined || isBorderBox;
        var val = borderBoxValue || cssBoxValue;
        if (extra === CONTENT_INDEX) {
          if (borderBoxValueOrIsBorderBox) {
            return (
              val -
              getPBMWidth(elem, ['border', 'padding'], which, computedStyle)
            );
          }
          return cssBoxValue;
        }
        if (borderBoxValueOrIsBorderBox) {
          var padding =
            extra === PADDING_INDEX
              ? -getPBMWidth(elem, ['border'], which, computedStyle)
              : getPBMWidth(elem, ['margin'], which, computedStyle);
          return val + (extra === BORDER_INDEX ? 0 : padding);
        }
        return (
          cssBoxValue +
          getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle)
        );
      }

      var cssShow = {
        position: 'absolute',
        visibility: 'hidden',
        display: 'block',
      };

      // fix #119 : https://github.com/kissyteam/kissy/issues/119
      function getWHIgnoreDisplay(elem) {
        var val = undefined;
        var args = arguments;
        // in case elem is window
        // elem.offsetWidth === undefined
        if (elem.offsetWidth !== 0) {
          val = getWH.apply(undefined, args);
        } else {
          swap(elem, cssShow, function() {
            val = getWH.apply(undefined, args);
          });
        }
        return val;
      }

      function css(el, name, v) {
        var value = v;
        if (
          (typeof name === 'undefined' ? 'undefined' : _typeof(name)) ===
          'object'
        ) {
          for (var i in name) {
            if (name.hasOwnProperty(i)) {
              css(el, i, name[i]);
            }
          }
          return undefined;
        }
        if (typeof value !== 'undefined') {
          if (typeof value === 'number') {
            value += 'px';
          }
          el.style[name] = value;
          return undefined;
        }
        return getComputedStyleX(el, name);
      }

      each(['width', 'height'], function(name) {
        var first = name.charAt(0).toUpperCase() + name.slice(1);
        domUtils['outer' + first] = function(el, includeMargin) {
          return (
            el &&
            getWHIgnoreDisplay(
              el,
              name,
              includeMargin ? MARGIN_INDEX : BORDER_INDEX,
            )
          );
        };
        var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

        domUtils[name] = function(elem, val) {
          if (val !== undefined) {
            if (elem) {
              var computedStyle = getComputedStyleX(elem);
              var isBorderBox = isBorderBoxFn(elem);
              if (isBorderBox) {
                val += getPBMWidth(
                  elem,
                  ['padding', 'border'],
                  which,
                  computedStyle,
                );
              }
              return css(elem, name, val);
            }
            return undefined;
          }
          return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
        };
      });

      // 设置 elem 相对 elem.ownerDocument 的坐标
      function setOffset(elem, offset) {
        // set position first, in-case top/left are set even on static elem
        if (css(elem, 'position') === 'static') {
          elem.style.position = 'relative';
        }

        var old = getOffset(elem);
        var ret = {};
        var current = undefined;
        var key = undefined;

        for (key in offset) {
          if (offset.hasOwnProperty(key)) {
            current = parseFloat(css(elem, key)) || 0;
            ret[key] = current + offset[key] - old[key];
          }
        }
        css(elem, ret);
      }

      module.exports = _extends(
        {
          getWindow: function getWindow(node) {
            var doc = node.ownerDocument || node;
            return doc.defaultView || doc.parentWindow;
          },
          offset: function offset(el, value) {
            if (typeof value !== 'undefined') {
              setOffset(el, value);
            } else {
              return getOffset(el);
            }
          },

          isWindow: isWindow,
          each: each,
          css: css,
          clone: function clone(obj) {
            var ret = {};
            for (var i in obj) {
              if (obj.hasOwnProperty(i)) {
                ret[i] = obj[i];
              }
            }
            var overflow = obj.overflow;
            if (overflow) {
              for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                  ret.overflow[i] = obj.overflow[i];
                }
              }
            }
            return ret;
          },
          scrollLeft: function scrollLeft(w, v) {
            if (isWindow(w)) {
              if (v === undefined) {
                return getScrollLeft(w);
              }
              window.scrollTo(v, getScrollTop(w));
            } else {
              if (v === undefined) {
                return w.scrollLeft;
              }
              w.scrollLeft = v;
            }
          },
          scrollTop: function scrollTop(w, v) {
            if (isWindow(w)) {
              if (v === undefined) {
                return getScrollTop(w);
              }
              window.scrollTo(getScrollLeft(w), v);
            } else {
              if (v === undefined) {
                return w.scrollTop;
              }
              w.scrollTop = v;
            }
          },

          viewportWidth: 0,
          viewportHeight: 0,
        },
        domUtils,
      );

      /***/
    },

  /***/ './node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js':
    /*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      /**
       * Copyright 2015, Yahoo! Inc.
       * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
       */
      var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true,
      };

      var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true,
      };

      var defineProperty = Object.defineProperty;
      var getOwnPropertyNames = Object.getOwnPropertyNames;
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var getPrototypeOf = Object.getPrototypeOf;
      var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

      function hoistNonReactStatics(
        targetComponent,
        sourceComponent,
        blacklist,
      ) {
        if (typeof sourceComponent !== 'string') {
          // don't hoist over string (html) components

          if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
              hoistNonReactStatics(
                targetComponent,
                inheritedComponent,
                blacklist,
              );
            }
          }

          var keys = getOwnPropertyNames(sourceComponent);

          if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }

          for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (
              !REACT_STATICS[key] &&
              !KNOWN_STATICS[key] &&
              (!blacklist || !blacklist[key])
            ) {
              var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
              try {
                // Avoid failures from read-only properties
                defineProperty(targetComponent, key, descriptor);
              } catch (e) {}
            }
          }

          return targetComponent;
        }

        return targetComponent;
      }

      module.exports = hoistNonReactStatics;

      /***/
    },

  /***/ './node_modules/ismobilejs/dist/isMobile.min.js':
    /*!******************************************************!*\
  !*** ./node_modules/ismobilejs/dist/isMobile.min.js ***!
  \******************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__,
        __WEBPACK_AMD_DEFINE_ARRAY__,
        __WEBPACK_AMD_DEFINE_RESULT__;
      !(function(e) {
        var n = /iPhone/i,
          t = /iPod/i,
          r = /iPad/i,
          a = /\bAndroid(?:.+)Mobile\b/i,
          p = /Android/i,
          l = /\bAndroid(?:.+)SD4930UR\b/i,
          b = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
          f = /Windows Phone/i,
          u = /\bWindows(?:.+)ARM\b/i,
          c = /BlackBerry/i,
          s = /BB10/i,
          v = /Opera Mini/i,
          h = /\b(CriOS|Chrome)(?:.+)Mobile/i,
          w = /\Mobile(?:.+)Firefox\b/i;
        function m(e, i) {
          return e.test(i);
        }
        function i(e) {
          var i =
              e || ('undefined' != typeof navigator ? navigator.userAgent : ''),
            o = i.split('[FBAN');
          void 0 !== o[1] && (i = o[0]),
            void 0 !== (o = i.split('Twitter'))[1] && (i = o[0]);
          var d = {
            apple: {
              phone: m(n, i) && !m(f, i),
              ipod: m(t, i),
              tablet: !m(n, i) && m(r, i) && !m(f, i),
              device: (m(n, i) || m(t, i) || m(r, i)) && !m(f, i),
            },
            amazon: {
              phone: m(l, i),
              tablet: !m(l, i) && m(b, i),
              device: m(l, i) || m(b, i),
            },
            android: {
              phone: (!m(f, i) && m(l, i)) || (!m(f, i) && m(a, i)),
              tablet: !m(f, i) && !m(l, i) && !m(a, i) && (m(b, i) || m(p, i)),
              device: !m(f, i) && (m(l, i) || m(b, i) || m(a, i) || m(p, i)),
            },
            windows: {
              phone: m(f, i),
              tablet: m(u, i),
              device: m(f, i) || m(u, i),
            },
            other: {
              blackberry: m(c, i),
              blackberry10: m(s, i),
              opera: m(v, i),
              firefox: m(w, i),
              chrome: m(h, i),
              device: m(c, i) || m(s, i) || m(v, i) || m(w, i) || m(h, i),
            },
          };
          return (
            (d.any =
              d.apple.device ||
              d.android.device ||
              d.windows.device ||
              d.other.device),
            (d.phone = d.apple.phone || d.android.phone || d.windows.phone),
            (d.tablet = d.apple.tablet || d.android.tablet || d.windows.tablet),
            d
          );
        }
        true && module.exports && 'undefined' == typeof window
          ? (module.exports = i)
          : true && module.exports && 'undefined' != typeof window
          ? (module.exports = i())
          : true
          ? !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = e.isMobile = i()),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__,
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
          : undefined;
      })(this);

      /***/
    },

  /***/ './node_modules/mini-store/lib/PropTypes.js':
    /*!**************************************************!*\
  !*** ./node_modules/mini-store/lib/PropTypes.js ***!
  \**************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.storeShape = undefined;

      var _propTypes = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );

      var _propTypes2 = _interopRequireDefault(_propTypes);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var storeShape = (exports.storeShape = _propTypes2.default.shape({
        subscribe: _propTypes2.default.func.isRequired,
        setState: _propTypes2.default.func.isRequired,
        getState: _propTypes2.default.func.isRequired,
      }));

      /***/
    },

  /***/ './node_modules/mini-store/lib/Provider.js':
    /*!*************************************************!*\
  !*** ./node_modules/mini-store/lib/Provider.js ***!
  \*************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      var _react = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );

      var _react2 = _interopRequireDefault(_react);

      var _PropTypes = __webpack_require__(
        /*! ./PropTypes */ './node_modules/mini-store/lib/PropTypes.js',
      );

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        }
        return call && (typeof call === 'object' || typeof call === 'function')
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof superClass,
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
          },
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      var Provider = (function(_Component) {
        _inherits(Provider, _Component);

        function Provider() {
          _classCallCheck(this, Provider);

          return _possibleConstructorReturn(
            this,
            (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(
              this,
              arguments,
            ),
          );
        }

        _createClass(Provider, [
          {
            key: 'getChildContext',
            value: function getChildContext() {
              return {
                miniStore: this.props.store,
              };
            },
          },
          {
            key: 'render',
            value: function render() {
              return _react.Children.only(this.props.children);
            },
          },
        ]);

        return Provider;
      })(_react.Component);

      Provider.propTypes = {
        store: _PropTypes.storeShape.isRequired,
      };
      Provider.childContextTypes = {
        miniStore: _PropTypes.storeShape.isRequired,
      };
      exports.default = Provider;

      /***/
    },

  /***/ './node_modules/mini-store/lib/connect.js':
    /*!************************************************!*\
  !*** ./node_modules/mini-store/lib/connect.js ***!
  \************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _extends =
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

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      exports.default = connect;

      var _react = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );

      var _react2 = _interopRequireDefault(_react);

      var _shallowequal = __webpack_require__(
        /*! shallowequal */ './node_modules/shallowequal/index.js',
      );

      var _shallowequal2 = _interopRequireDefault(_shallowequal);

      var _hoistNonReactStatics = __webpack_require__(
        /*! hoist-non-react-statics */ './node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js',
      );

      var _hoistNonReactStatics2 = _interopRequireDefault(
        _hoistNonReactStatics,
      );

      var _reactLifecyclesCompat = __webpack_require__(
        /*! react-lifecycles-compat */ './node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js',
      );

      var _PropTypes = __webpack_require__(
        /*! ./PropTypes */ './node_modules/mini-store/lib/PropTypes.js',
      );

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        }
        return call && (typeof call === 'object' || typeof call === 'function')
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof superClass,
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
          },
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      function getDisplayName(WrappedComponent) {
        return (
          WrappedComponent.displayName || WrappedComponent.name || 'Component'
        );
      }

      function isStateless(Component) {
        return !Component.prototype.render;
      }

      var defaultMapStateToProps = function defaultMapStateToProps() {
        return {};
      };

      function connect(mapStateToProps) {
        var shouldSubscribe = !!mapStateToProps;
        var finnalMapStateToProps = mapStateToProps || defaultMapStateToProps;

        return function wrapWithConnect(WrappedComponent) {
          var Connect = (function(_Component) {
            _inherits(Connect, _Component);

            _createClass(Connect, null, [
              {
                key: 'getDerivedStateFromProps',
                value: function getDerivedStateFromProps(props, prevState) {
                  // using ownProps
                  if (
                    mapStateToProps &&
                    mapStateToProps.length === 2 &&
                    props !== prevState.props
                  ) {
                    return {
                      subscribed: finnalMapStateToProps(
                        prevState.store.getState(),
                        props,
                      ),
                      props: props,
                    };
                  }
                  return { props: props };
                },
              },
            ]);

            function Connect(props, context) {
              _classCallCheck(this, Connect);

              var _this = _possibleConstructorReturn(
                this,
                (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(
                  this,
                  props,
                  context,
                ),
              );

              _this.handleChange = function() {
                if (!_this.unsubscribe) {
                  return;
                }
                var nextState = finnalMapStateToProps(
                  _this.store.getState(),
                  _this.props,
                );
                _this.setState({ subscribed: nextState });
              };

              _this.store = context.miniStore;
              _this.state = {
                subscribed: finnalMapStateToProps(
                  _this.store.getState(),
                  props,
                ),
                store: _this.store,
                props: props,
              };
              return _this;
            }

            _createClass(Connect, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  this.trySubscribe();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  this.tryUnsubscribe();
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate(nextProps, nextState) {
                  return (
                    !(0, _shallowequal2.default)(this.props, nextProps) ||
                    !(0, _shallowequal2.default)(
                      this.state.subscribed,
                      nextState.subscribed,
                    )
                  );
                },
              },
              {
                key: 'trySubscribe',
                value: function trySubscribe() {
                  if (shouldSubscribe) {
                    this.unsubscribe = this.store.subscribe(this.handleChange);
                    this.handleChange();
                  }
                },
              },
              {
                key: 'tryUnsubscribe',
                value: function tryUnsubscribe() {
                  if (this.unsubscribe) {
                    this.unsubscribe();
                    this.unsubscribe = null;
                  }
                },
              },
              {
                key: 'getWrappedInstance',
                value: function getWrappedInstance() {
                  return this.wrappedInstance;
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this2 = this;

                  var props = _extends({}, this.props, this.state.subscribed, {
                    store: this.store,
                  });

                  if (!isStateless(WrappedComponent)) {
                    props = _extends({}, props, {
                      ref: function ref(c) {
                        return (_this2.wrappedInstance = c);
                      },
                    });
                  }

                  return _react2.default.createElement(WrappedComponent, props);
                },
              },
            ]);

            return Connect;
          })(_react.Component);

          Connect.displayName =
            'Connect(' + getDisplayName(WrappedComponent) + ')';
          Connect.contextTypes = {
            miniStore: _PropTypes.storeShape.isRequired,
          };

          (0, _reactLifecyclesCompat.polyfill)(Connect);

          return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
        };
      }

      /***/
    },

  /***/ './node_modules/mini-store/lib/create.js':
    /*!***********************************************!*\
  !*** ./node_modules/mini-store/lib/create.js ***!
  \***********************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _extends =
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

      exports.default = create;
      function create(initialState) {
        var state = initialState;
        var listeners = [];

        function setState(partial) {
          state = _extends({}, state, partial);
          for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
          }
        }

        function getState() {
          return state;
        }

        function subscribe(listener) {
          listeners.push(listener);

          return function unsubscribe() {
            var index = listeners.indexOf(listener);
            listeners.splice(index, 1);
          };
        }

        return {
          setState: setState,
          getState: getState,
          subscribe: subscribe,
        };
      }

      /***/
    },

  /***/ './node_modules/mini-store/lib/index.js':
    /*!**********************************************!*\
  !*** ./node_modules/mini-store/lib/index.js ***!
  \**********************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.create = exports.connect = exports.Provider = undefined;

      var _Provider2 = __webpack_require__(
        /*! ./Provider */ './node_modules/mini-store/lib/Provider.js',
      );

      var _Provider3 = _interopRequireDefault(_Provider2);

      var _connect2 = __webpack_require__(
        /*! ./connect */ './node_modules/mini-store/lib/connect.js',
      );

      var _connect3 = _interopRequireDefault(_connect2);

      var _create2 = __webpack_require__(
        /*! ./create */ './node_modules/mini-store/lib/create.js',
      );

      var _create3 = _interopRequireDefault(_create2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.Provider = _Provider3.default;
      exports.connect = _connect3.default;
      exports.create = _create3.default;

      /***/
    },

  /***/ './node_modules/mutationobserver-shim/dist/mutationobserver.min.js':
    /*!*************************************************************************!*\
  !*** ./node_modules/mutationobserver-shim/dist/mutationobserver.min.js ***!
  \*************************************************************************/
    /*! no static exports found */
    /***/ function(module, exports) {
      // mutationobserver-shim v0.3.2 (github.com/megawac/MutationObserver.js)
      // Authors: Graeme Yeates (github.com/megawac)
      window.MutationObserver =
        window.MutationObserver ||
        (function(w) {
          function v(a) {
            this.i = [];
            this.m = a;
          }
          function I(a) {
            (function c() {
              var d = a.takeRecords();
              d.length && a.m(d, a);
              a.h = setTimeout(c, v._period);
            })();
          }
          function p(a) {
            var b = {
                type: null,
                target: null,
                addedNodes: [],
                removedNodes: [],
                previousSibling: null,
                nextSibling: null,
                attributeName: null,
                attributeNamespace: null,
                oldValue: null,
              },
              c;
            for (c in a) b[c] !== w && a[c] !== w && (b[c] = a[c]);
            return b;
          }
          function J(a, b) {
            var c = C(a, b);
            return function(d) {
              var f = d.length,
                n;
              b.a &&
                3 === a.nodeType &&
                a.nodeValue !== c.a &&
                d.push(
                  new p({ type: 'characterData', target: a, oldValue: c.a }),
                );
              b.b && c.b && A(d, a, c.b, b.f);
              if (b.c || b.g) n = K(d, a, c, b);
              if (n || d.length !== f) c = C(a, b);
            };
          }
          function L(a, b) {
            return b.value;
          }
          function M(a, b) {
            return 'style' !== b.name ? b.value : a.style.cssText;
          }
          function A(a, b, c, d) {
            for (var f = {}, n = b.attributes, k, g, x = n.length; x--; )
              (k = n[x]),
                (g = k.name),
                (d && d[g] === w) ||
                  (D(b, k) !== c[g] &&
                    a.push(
                      p({
                        type: 'attributes',
                        target: b,
                        attributeName: g,
                        oldValue: c[g],
                        attributeNamespace: k.namespaceURI,
                      }),
                    ),
                  (f[g] = !0));
            for (g in c)
              f[g] ||
                a.push(
                  p({
                    target: b,
                    type: 'attributes',
                    attributeName: g,
                    oldValue: c[g],
                  }),
                );
          }
          function K(a, b, c, d) {
            function f(b, c, f, k, y) {
              var g = b.length - 1;
              y = -~((g - y) / 2);
              for (var h, l, e; (e = b.pop()); )
                (h = f[e.j]),
                  (l = k[e.l]),
                  d.c &&
                    y &&
                    Math.abs(e.j - e.l) >= g &&
                    (a.push(
                      p({
                        type: 'childList',
                        target: c,
                        addedNodes: [h],
                        removedNodes: [h],
                        nextSibling: h.nextSibling,
                        previousSibling: h.previousSibling,
                      }),
                    ),
                    y--),
                  d.b && l.b && A(a, h, l.b, d.f),
                  d.a &&
                    3 === h.nodeType &&
                    h.nodeValue !== l.a &&
                    a.push(
                      p({ type: 'characterData', target: h, oldValue: l.a }),
                    ),
                  d.g && n(h, l);
            }
            function n(b, c) {
              for (
                var g = b.childNodes,
                  q = c.c,
                  x = g.length,
                  v = q ? q.length : 0,
                  h,
                  l,
                  e,
                  m,
                  t,
                  z = 0,
                  u = 0,
                  r = 0;
                u < x || r < v;

              )
                (m = g[u]),
                  (t = (e = q[r]) && e.node),
                  m === t
                    ? (d.b && e.b && A(a, m, e.b, d.f),
                      d.a &&
                        e.a !== w &&
                        m.nodeValue !== e.a &&
                        a.push(
                          p({
                            type: 'characterData',
                            target: m,
                            oldValue: e.a,
                          }),
                        ),
                      l && f(l, b, g, q, z),
                      d.g &&
                        (m.childNodes.length || (e.c && e.c.length)) &&
                        n(m, e),
                      u++,
                      r++)
                    : ((k = !0),
                      h || ((h = {}), (l = [])),
                      m &&
                        (h[(e = E(m))] ||
                          ((h[e] = !0),
                          -1 === (e = F(q, m, r, 'node'))
                            ? d.c &&
                              (a.push(
                                p({
                                  type: 'childList',
                                  target: b,
                                  addedNodes: [m],
                                  nextSibling: m.nextSibling,
                                  previousSibling: m.previousSibling,
                                }),
                              ),
                              z++)
                            : l.push({ j: u, l: e })),
                        u++),
                      t &&
                        t !== g[u] &&
                        (h[(e = E(t))] ||
                          ((h[e] = !0),
                          -1 === (e = F(g, t, u))
                            ? d.c &&
                              (a.push(
                                p({
                                  type: 'childList',
                                  target: c.node,
                                  removedNodes: [t],
                                  nextSibling: q[r + 1],
                                  previousSibling: q[r - 1],
                                }),
                              ),
                              z--)
                            : l.push({ j: e, l: r })),
                        r++));
              l && f(l, b, g, q, z);
            }
            var k;
            n(b, c);
            return k;
          }
          function C(a, b) {
            var c = !0;
            return (function f(a) {
              var k = { node: a };
              !b.a || (3 !== a.nodeType && 8 !== a.nodeType)
                ? (b.b &&
                    c &&
                    1 === a.nodeType &&
                    (k.b = G(a.attributes, function(c, f) {
                      if (!b.f || b.f[f.name]) c[f.name] = D(a, f);
                      return c;
                    })),
                  c &&
                    (b.c || b.a || (b.b && b.g)) &&
                    (k.c = N(a.childNodes, f)),
                  (c = b.g))
                : (k.a = a.nodeValue);
              return k;
            })(a);
          }
          function E(a) {
            try {
              return a.id || (a.mo_id = a.mo_id || H++);
            } catch (b) {
              try {
                return a.nodeValue;
              } catch (c) {
                return H++;
              }
            }
          }
          function N(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c[d] = b(a[d], d, a);
            return c;
          }
          function G(a, b) {
            for (var c = {}, d = 0; d < a.length; d++) c = b(c, a[d], d, a);
            return c;
          }
          function F(a, b, c, d) {
            for (; c < a.length; c++) if ((d ? a[c][d] : a[c]) === b) return c;
            return -1;
          }
          v._period = 30;
          v.prototype = {
            observe: function(a, b) {
              for (
                var c = {
                    b: !!(
                      b.attributes ||
                      b.attributeFilter ||
                      b.attributeOldValue
                    ),
                    c: !!b.childList,
                    g: !!b.subtree,
                    a: !(!b.characterData && !b.characterDataOldValue),
                  },
                  d = this.i,
                  f = 0;
                f < d.length;
                f++
              )
                d[f].s === a && d.splice(f, 1);
              b.attributeFilter &&
                (c.f = G(b.attributeFilter, function(a, b) {
                  a[b] = !0;
                  return a;
                }));
              d.push({ s: a, o: J(a, c) });
              this.h || I(this);
            },
            takeRecords: function() {
              for (var a = [], b = this.i, c = 0; c < b.length; c++) b[c].o(a);
              return a;
            },
            disconnect: function() {
              this.i = [];
              clearTimeout(this.h);
              this.h = null;
            },
          };
          var B = document.createElement('i');
          B.style.top = 0;
          var D = (B = 'null' != B.attributes.style.value) ? L : M,
            H = 1;
          return v;
        })(void 0);

      /***/
    },

  /***/ './node_modules/rc-align/es/Align.js':
    /*!*******************************************!*\
  !*** ./node_modules/rc-align/es/Align.js ***!
  \*******************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var dom_align__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! dom-align */ './node_modules/dom-align/es/index.js',
      );
      /* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! rc-util/es/Dom/addEventListener */ './node_modules/rc-util/es/Dom/addEventListener.js',
      );
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./util */ './node_modules/rc-align/es/util.js',
      );

      function getElement(func) {
        if (typeof func !== 'function' || !func) return null;
        return func();
      }

      function getPoint(point) {
        if (typeof point !== 'object' || !point) return null;
        return point;
      }

      var Align = (function(_Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(
          Align,
          _Component,
        );

        function Align() {
          var _temp, _this, _ret;

          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
            this,
            Align,
          );

          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          return (
            (_ret = ((_temp = ((_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(
              this,
              _Component.call.apply(_Component, [this].concat(args)),
            )),
            _this)),
            (_this.forceAlign = function() {
              var _this$props = _this.props,
                disabled = _this$props.disabled,
                target = _this$props.target,
                align = _this$props.align,
                onAlign = _this$props.onAlign;

              if (!disabled && target) {
                var source = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(
                  _this,
                );

                var result = void 0;
                var element = getElement(target);
                var point = getPoint(target);

                if (element) {
                  result = Object(
                    dom_align__WEBPACK_IMPORTED_MODULE_6__['alignElement'],
                  )(source, element, align);
                } else if (point) {
                  result = Object(
                    dom_align__WEBPACK_IMPORTED_MODULE_6__['alignPoint'],
                  )(source, point, align);
                }

                if (onAlign) {
                  onAlign(source, result);
                }
              }
            }),
            _temp)),
            babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(
              _this,
              _ret,
            )
          );
        }

        Align.prototype.componentDidMount = function componentDidMount() {
          var props = this.props;
          // if parent ref not attached .... use document.getElementById
          this.forceAlign();
          if (!props.disabled && props.monitorWindowResize) {
            this.startMonitorWindowResize();
          }
        };

        Align.prototype.componentDidUpdate = function componentDidUpdate(
          prevProps,
        ) {
          var reAlign = false;
          var props = this.props;

          if (!props.disabled) {
            var source = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(
              this,
            );
            var sourceRect = source ? source.getBoundingClientRect() : null;

            if (prevProps.disabled) {
              reAlign = true;
            } else {
              var lastElement = getElement(prevProps.target);
              var currentElement = getElement(props.target);
              var lastPoint = getPoint(prevProps.target);
              var currentPoint = getPoint(props.target);

              if (
                Object(_util__WEBPACK_IMPORTED_MODULE_8__['isWindow'])(
                  lastElement,
                ) &&
                Object(_util__WEBPACK_IMPORTED_MODULE_8__['isWindow'])(
                  currentElement,
                )
              ) {
                // Skip if is window
                reAlign = false;
              } else if (
                lastElement !== currentElement || // Element change
                (lastElement && !currentElement && currentPoint) || // Change from element to point
                (lastPoint && currentPoint && currentElement) || // Change from point to element
                (currentPoint &&
                  !Object(_util__WEBPACK_IMPORTED_MODULE_8__['isSamePoint'])(
                    lastPoint,
                    currentPoint,
                  ))
              ) {
                reAlign = true;
              }

              // If source element size changed
              var preRect = this.sourceRect || {};
              if (
                !reAlign &&
                source &&
                (preRect.width !== sourceRect.width ||
                  preRect.height !== sourceRect.height)
              ) {
                reAlign = true;
              }
            }

            this.sourceRect = sourceRect;
          }

          if (reAlign) {
            this.forceAlign();
          }

          if (props.monitorWindowResize && !props.disabled) {
            this.startMonitorWindowResize();
          } else {
            this.stopMonitorWindowResize();
          }
        };

        Align.prototype.componentWillUnmount = function componentWillUnmount() {
          this.stopMonitorWindowResize();
        };

        Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
          if (!this.resizeHandler) {
            this.bufferMonitor = Object(
              _util__WEBPACK_IMPORTED_MODULE_8__['buffer'],
            )(this.forceAlign, this.props.monitorBufferTime);
            this.resizeHandler = Object(
              rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__[
                'default'
              ],
            )(window, 'resize', this.bufferMonitor);
          }
        };

        Align.prototype.stopMonitorWindowResize = function stopMonitorWindowResize() {
          if (this.resizeHandler) {
            this.bufferMonitor.clear();
            this.resizeHandler.remove();
            this.resizeHandler = null;
          }
        };

        Align.prototype.render = function render() {
          var _this2 = this;

          var _props = this.props,
            childrenProps = _props.childrenProps,
            children = _props.children;

          var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(
            children,
          );
          if (childrenProps) {
            var newProps = {};
            var propList = Object.keys(childrenProps);
            propList.forEach(function(prop) {
              newProps[prop] = _this2.props[childrenProps[prop]];
            });

            return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(
              child,
              newProps,
            );
          }
          return child;
        };

        return Align;
      })(react__WEBPACK_IMPORTED_MODULE_3__['Component']);

      Align.propTypes = {
        childrenProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
        align:
          prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
        target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
          prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
            clientX: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
            clientY: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
            pageX: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
            pageY: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
          }),
        ]),
        onAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
        monitorBufferTime:
          prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
        monitorWindowResize:
          prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
        disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
        children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
      };
      Align.defaultProps = {
        target: function target() {
          return window;
        },
        monitorBufferTime: 50,
        monitorWindowResize: false,
        disabled: false,
      };

      /* harmony default export */ __webpack_exports__['default'] = Align;

      /***/
    },

  /***/ './node_modules/rc-align/es/index.js':
    /*!*******************************************!*\
  !*** ./node_modules/rc-align/es/index.js ***!
  \*******************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _Align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./Align */ './node_modules/rc-align/es/Align.js',
      );
      // export this package's api

      /* harmony default export */ __webpack_exports__['default'] =
        _Align__WEBPACK_IMPORTED_MODULE_0__['default'];

      /***/
    },

  /***/ './node_modules/rc-align/es/util.js':
    /*!******************************************!*\
  !*** ./node_modules/rc-align/es/util.js ***!
  \******************************************/
    /*! exports provided: buffer, isSamePoint, isWindow */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'buffer',
        function() {
          return buffer;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isSamePoint',
        function() {
          return isSamePoint;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isWindow',
        function() {
          return isWindow;
        },
      );
      function buffer(fn, ms) {
        var timer = void 0;

        function clear() {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
        }

        function bufferFn() {
          clear();
          timer = setTimeout(fn, ms);
        }

        bufferFn.clear = clear;

        return bufferFn;
      }

      function isSamePoint(prev, next) {
        if (prev === next) return true;
        if (!prev || !next) return false;

        if ('pageX' in next && 'pageY' in next) {
          return prev.pageX === next.pageX && prev.pageY === next.pageY;
        }

        if ('clientX' in next && 'clientY' in next) {
          return prev.clientX === next.clientX && prev.clientY === next.clientY;
        }

        return false;
      }

      function isWindow(obj) {
        return obj && typeof obj === 'object' && obj.window === obj;
      }

      /***/
    },

  /***/ './node_modules/rc-animate/es/Animate.js':
    /*!***********************************************!*\
  !*** ./node_modules/rc-animate/es/Animate.js ***!
  \***********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/defineProperty */ './node_modules/babel-runtime/helpers/defineProperty.js',
      );
      /* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js',
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_7__,
      );
      /* harmony import */ var _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./ChildrenUtils */ './node_modules/rc-animate/es/ChildrenUtils.js',
      );
      /* harmony import */ var _AnimateChild__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ./AnimateChild */ './node_modules/rc-animate/es/AnimateChild.js',
      );
      /* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ./util/animate */ './node_modules/rc-animate/es/util/animate.js',
      );

      var defaultKey = 'rc_animate_' + Date.now();

      function getChildrenFromProps(props) {
        var children = props.children;
        if (
          react__WEBPACK_IMPORTED_MODULE_6___default.a.isValidElement(children)
        ) {
          if (!children.key) {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(
              children,
              {
                key: defaultKey,
              },
            );
          }
        }
        return children;
      }

      function noop() {}

      var Animate = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(
          Animate,
          _React$Component,
        );

        // eslint-disable-line

        function Animate(props) {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            Animate,
          );

          var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(
            this,
            (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(
              this,
              props,
            ),
          );

          _initialiseProps.call(_this);

          _this.currentlyAnimatingKeys = {};
          _this.keysToEnter = [];
          _this.keysToLeave = [];

          _this.state = {
            children: Object(
              _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__['toArrayChildren'],
            )(getChildrenFromProps(props)),
          };

          _this.childrenRefs = {};
          return _this;
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(
          Animate,
          [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                var _this2 = this;

                var showProp = this.props.showProp;
                var children = this.state.children;
                if (showProp) {
                  children = children.filter(function(child) {
                    return !!child.props[showProp];
                  });
                }
                children.forEach(function(child) {
                  if (child) {
                    _this2.performAppear(child.key);
                  }
                });
              },
            },
            {
              key: 'componentWillReceiveProps',
              value: function componentWillReceiveProps(nextProps) {
                var _this3 = this;

                this.nextProps = nextProps;
                var nextChildren = Object(
                  _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                    'toArrayChildren'
                  ],
                )(getChildrenFromProps(nextProps));
                var props = this.props;
                // exclusive needs immediate response
                if (props.exclusive) {
                  Object.keys(this.currentlyAnimatingKeys).forEach(function(
                    key,
                  ) {
                    _this3.stop(key);
                  });
                }
                var showProp = props.showProp;
                var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
                // last props children if exclusive
                var currentChildren = props.exclusive
                  ? Object(
                      _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                        'toArrayChildren'
                      ],
                    )(getChildrenFromProps(props))
                  : this.state.children;
                // in case destroy in showProp mode
                var newChildren = [];
                if (showProp) {
                  currentChildren.forEach(function(currentChild) {
                    var nextChild =
                      currentChild &&
                      Object(
                        _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                          'findChildInChildrenByKey'
                        ],
                      )(nextChildren, currentChild.key);
                    var newChild = void 0;
                    if (
                      (!nextChild || !nextChild.props[showProp]) &&
                      currentChild.props[showProp]
                    ) {
                      newChild = react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(
                        nextChild || currentChild,
                        babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(
                          {},
                          showProp,
                          true,
                        ),
                      );
                    } else {
                      newChild = nextChild;
                    }
                    if (newChild) {
                      newChildren.push(newChild);
                    }
                  });
                  nextChildren.forEach(function(nextChild) {
                    if (
                      !nextChild ||
                      !Object(
                        _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                          'findChildInChildrenByKey'
                        ],
                      )(currentChildren, nextChild.key)
                    ) {
                      newChildren.push(nextChild);
                    }
                  });
                } else {
                  newChildren = Object(
                    _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                      'mergeChildren'
                    ],
                  )(currentChildren, nextChildren);
                }

                // need render to avoid update
                this.setState({
                  children: newChildren,
                });

                nextChildren.forEach(function(child) {
                  var key = child && child.key;
                  if (child && currentlyAnimatingKeys[key]) {
                    return;
                  }
                  var hasPrev =
                    child &&
                    Object(
                      _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                        'findChildInChildrenByKey'
                      ],
                    )(currentChildren, key);
                  if (showProp) {
                    var showInNext = child.props[showProp];
                    if (hasPrev) {
                      var showInNow = Object(
                        _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                          'findShownChildInChildrenByKey'
                        ],
                      )(currentChildren, key, showProp);
                      if (!showInNow && showInNext) {
                        _this3.keysToEnter.push(key);
                      }
                    } else if (showInNext) {
                      _this3.keysToEnter.push(key);
                    }
                  } else if (!hasPrev) {
                    _this3.keysToEnter.push(key);
                  }
                });

                currentChildren.forEach(function(child) {
                  var key = child && child.key;
                  if (child && currentlyAnimatingKeys[key]) {
                    return;
                  }
                  var hasNext =
                    child &&
                    Object(
                      _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                        'findChildInChildrenByKey'
                      ],
                    )(nextChildren, key);
                  if (showProp) {
                    var showInNow = child.props[showProp];
                    if (hasNext) {
                      var showInNext = Object(
                        _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                          'findShownChildInChildrenByKey'
                        ],
                      )(nextChildren, key, showProp);
                      if (!showInNext && showInNow) {
                        _this3.keysToLeave.push(key);
                      }
                    } else if (showInNow) {
                      _this3.keysToLeave.push(key);
                    }
                  } else if (!hasNext) {
                    _this3.keysToLeave.push(key);
                  }
                });
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate() {
                var keysToEnter = this.keysToEnter;
                this.keysToEnter = [];
                keysToEnter.forEach(this.performEnter);
                var keysToLeave = this.keysToLeave;
                this.keysToLeave = [];
                keysToLeave.forEach(this.performLeave);
              },
            },
            {
              key: 'isValidChildByKey',
              value: function isValidChildByKey(currentChildren, key) {
                var showProp = this.props.showProp;
                if (showProp) {
                  return Object(
                    _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                      'findShownChildInChildrenByKey'
                    ],
                  )(currentChildren, key, showProp);
                }
                return Object(
                  _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__[
                    'findChildInChildrenByKey'
                  ],
                )(currentChildren, key);
              },
            },
            {
              key: 'stop',
              value: function stop(key) {
                delete this.currentlyAnimatingKeys[key];
                var component = this.childrenRefs[key];
                if (component) {
                  component.stop();
                }
              },
            },
            {
              key: 'render',
              value: function render() {
                var _this4 = this;

                var props = this.props;
                this.nextProps = props;
                var stateChildren = this.state.children;
                var children = null;
                if (stateChildren) {
                  children = stateChildren.map(function(child) {
                    if (child === null || child === undefined) {
                      return child;
                    }
                    if (!child.key) {
                      throw new Error('must set key for <rc-animate> children');
                    }
                    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                      _AnimateChild__WEBPACK_IMPORTED_MODULE_9__['default'],
                      {
                        key: child.key,
                        ref: function ref(node) {
                          _this4.childrenRefs[child.key] = node;
                        },
                        animation: props.animation,
                        transitionName: props.transitionName,
                        transitionEnter: props.transitionEnter,
                        transitionAppear: props.transitionAppear,
                        transitionLeave: props.transitionLeave,
                      },
                      child,
                    );
                  });
                }
                var Component = props.component;
                if (Component) {
                  var passedProps = props;
                  if (typeof Component === 'string') {
                    passedProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                      {
                        className: props.className,
                        style: props.style,
                      },
                      props.componentProps,
                    );
                  }
                  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    Component,
                    passedProps,
                    children,
                  );
                }
                return children[0] || null;
              },
            },
          ],
        );

        return Animate;
      })(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

      Animate.isAnimate = true;
      Animate.propTypes = {
        component: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
        componentProps:
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
        animation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
        transitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
          ],
        ),
        transitionEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
        transitionAppear:
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
        exclusive: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
        transitionLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
        onEnd: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
        onEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
        onLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
        onAppear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
        showProp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
      };
      Animate.defaultProps = {
        animation: {},
        component: 'span',
        componentProps: {},
        transitionEnter: true,
        transitionLeave: true,
        transitionAppear: false,
        onEnd: noop,
        onEnter: noop,
        onLeave: noop,
        onAppear: noop,
      };

      var _initialiseProps = function _initialiseProps() {
        var _this5 = this;

        this.performEnter = function(key) {
          // may already remove by exclusive
          if (_this5.childrenRefs[key]) {
            _this5.currentlyAnimatingKeys[key] = true;
            _this5.childrenRefs[key].componentWillEnter(
              _this5.handleDoneAdding.bind(_this5, key, 'enter'),
            );
          }
        };

        this.performAppear = function(key) {
          if (_this5.childrenRefs[key]) {
            _this5.currentlyAnimatingKeys[key] = true;
            _this5.childrenRefs[key].componentWillAppear(
              _this5.handleDoneAdding.bind(_this5, key, 'appear'),
            );
          }
        };

        this.handleDoneAdding = function(key, type) {
          var props = _this5.props;
          delete _this5.currentlyAnimatingKeys[key];
          // if update on exclusive mode, skip check
          if (props.exclusive && props !== _this5.nextProps) {
            return;
          }
          var currentChildren = Object(
            _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__['toArrayChildren'],
          )(getChildrenFromProps(props));
          if (!_this5.isValidChildByKey(currentChildren, key)) {
            // exclusive will not need this
            _this5.performLeave(key);
          } else if (type === 'appear') {
            if (
              _util_animate__WEBPACK_IMPORTED_MODULE_10__[
                'default'
              ].allowAppearCallback(props)
            ) {
              props.onAppear(key);
              props.onEnd(key, true);
            }
          } else if (
            _util_animate__WEBPACK_IMPORTED_MODULE_10__[
              'default'
            ].allowEnterCallback(props)
          ) {
            props.onEnter(key);
            props.onEnd(key, true);
          }
        };

        this.performLeave = function(key) {
          // may already remove by exclusive
          if (_this5.childrenRefs[key]) {
            _this5.currentlyAnimatingKeys[key] = true;
            _this5.childrenRefs[key].componentWillLeave(
              _this5.handleDoneLeaving.bind(_this5, key),
            );
          }
        };

        this.handleDoneLeaving = function(key) {
          var props = _this5.props;
          delete _this5.currentlyAnimatingKeys[key];
          // if update on exclusive mode, skip check
          if (props.exclusive && props !== _this5.nextProps) {
            return;
          }
          var currentChildren = Object(
            _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__['toArrayChildren'],
          )(getChildrenFromProps(props));
          // in case state change is too fast
          if (_this5.isValidChildByKey(currentChildren, key)) {
            _this5.performEnter(key);
          } else {
            var end = function end() {
              if (
                _util_animate__WEBPACK_IMPORTED_MODULE_10__[
                  'default'
                ].allowLeaveCallback(props)
              ) {
                props.onLeave(key);
                props.onEnd(key, false);
              }
            };
            if (
              !Object(
                _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__['isSameChildren'],
              )(_this5.state.children, currentChildren, props.showProp)
            ) {
              _this5.setState(
                {
                  children: currentChildren,
                },
                end,
              );
            } else {
              end();
            }
          }
        };
      };

      /* harmony default export */ __webpack_exports__['default'] = Animate;

      /***/
    },

  /***/ './node_modules/rc-animate/es/AnimateChild.js':
    /*!****************************************************!*\
  !*** ./node_modules/rc-animate/es/AnimateChild.js ***!
  \****************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js',
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var css_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! css-animation */ './node_modules/css-animation/es/index.js',
      );
      /* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./util/animate */ './node_modules/rc-animate/es/util/animate.js',
      );

      var transitionMap = {
        enter: 'transitionEnter',
        appear: 'transitionAppear',
        leave: 'transitionLeave',
      };

      var AnimateChild = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(
          AnimateChild,
          _React$Component,
        );

        function AnimateChild() {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
            this,
            AnimateChild,
          );

          return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            (
              AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)
            ).apply(this, arguments),
          );
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
          AnimateChild,
          [
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                this.stop();
              },
            },
            {
              key: 'componentWillEnter',
              value: function componentWillEnter(done) {
                if (
                  _util_animate__WEBPACK_IMPORTED_MODULE_8__[
                    'default'
                  ].isEnterSupported(this.props)
                ) {
                  this.transition('enter', done);
                } else {
                  done();
                }
              },
            },
            {
              key: 'componentWillAppear',
              value: function componentWillAppear(done) {
                if (
                  _util_animate__WEBPACK_IMPORTED_MODULE_8__[
                    'default'
                  ].isAppearSupported(this.props)
                ) {
                  this.transition('appear', done);
                } else {
                  done();
                }
              },
            },
            {
              key: 'componentWillLeave',
              value: function componentWillLeave(done) {
                if (
                  _util_animate__WEBPACK_IMPORTED_MODULE_8__[
                    'default'
                  ].isLeaveSupported(this.props)
                ) {
                  this.transition('leave', done);
                } else {
                  // always sync, do not interupt with react component life cycle
                  // update hidden -> animate hidden ->
                  // didUpdate -> animate leave -> unmount (if animate is none)
                  done();
                }
              },
            },
            {
              key: 'transition',
              value: function transition(animationType, finishCallback) {
                var _this2 = this;

                var node = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(
                  this,
                );
                var props = this.props;
                var transitionName = props.transitionName;
                var nameIsObj = typeof transitionName === 'object';
                this.stop();
                var end = function end() {
                  _this2.stopper = null;
                  finishCallback();
                };
                if (
                  (css_animation__WEBPACK_IMPORTED_MODULE_7__[
                    'isCssAnimationSupported'
                  ] ||
                    !props.animation[animationType]) &&
                  transitionName &&
                  props[transitionMap[animationType]]
                ) {
                  var name = nameIsObj
                    ? transitionName[animationType]
                    : transitionName + '-' + animationType;
                  var activeName = name + '-active';
                  if (nameIsObj && transitionName[animationType + 'Active']) {
                    activeName = transitionName[animationType + 'Active'];
                  }
                  this.stopper = Object(
                    css_animation__WEBPACK_IMPORTED_MODULE_7__['default'],
                  )(
                    node,
                    {
                      name: name,
                      active: activeName,
                    },
                    end,
                  );
                } else {
                  this.stopper = props.animation[animationType](node, end);
                }
              },
            },
            {
              key: 'stop',
              value: function stop() {
                var stopper = this.stopper;
                if (stopper) {
                  this.stopper = null;
                  stopper.stop();
                }
              },
            },
            {
              key: 'render',
              value: function render() {
                return this.props.children;
              },
            },
          ],
        );

        return AnimateChild;
      })(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

      AnimateChild.propTypes = {
        children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
      };
      /* harmony default export */ __webpack_exports__[
        'default'
      ] = AnimateChild;

      /***/
    },

  /***/ './node_modules/rc-animate/es/ChildrenUtils.js':
    /*!*****************************************************!*\
  !*** ./node_modules/rc-animate/es/ChildrenUtils.js ***!
  \*****************************************************/
    /*! exports provided: toArrayChildren, findChildInChildrenByKey, findShownChildInChildrenByKey, findHiddenChildInChildrenByKey, isSameChildren, mergeChildren */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'toArrayChildren',
        function() {
          return toArrayChildren;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'findChildInChildrenByKey',
        function() {
          return findChildInChildrenByKey;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'findShownChildInChildrenByKey',
        function() {
          return findShownChildInChildrenByKey;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'findHiddenChildInChildrenByKey',
        function() {
          return findHiddenChildInChildrenByKey;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isSameChildren',
        function() {
          return isSameChildren;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'mergeChildren',
        function() {
          return mergeChildren;
        },
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );

      function toArrayChildren(children) {
        var ret = [];
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(
          children,
          function(child) {
            ret.push(child);
          },
        );
        return ret;
      }

      function findChildInChildrenByKey(children, key) {
        var ret = null;
        if (children) {
          children.forEach(function(child) {
            if (ret) {
              return;
            }
            if (child && child.key === key) {
              ret = child;
            }
          });
        }
        return ret;
      }

      function findShownChildInChildrenByKey(children, key, showProp) {
        var ret = null;
        if (children) {
          children.forEach(function(child) {
            if (child && child.key === key && child.props[showProp]) {
              if (ret) {
                throw new Error(
                  'two child with same key for <rc-animate> children',
                );
              }
              ret = child;
            }
          });
        }
        return ret;
      }

      function findHiddenChildInChildrenByKey(children, key, showProp) {
        var found = 0;
        if (children) {
          children.forEach(function(child) {
            if (found) {
              return;
            }
            found = child && child.key === key && !child.props[showProp];
          });
        }
        return found;
      }

      function isSameChildren(c1, c2, showProp) {
        var same = c1.length === c2.length;
        if (same) {
          c1.forEach(function(child, index) {
            var child2 = c2[index];
            if (child && child2) {
              if ((child && !child2) || (!child && child2)) {
                same = false;
              } else if (child.key !== child2.key) {
                same = false;
              } else if (
                showProp &&
                child.props[showProp] !== child2.props[showProp]
              ) {
                same = false;
              }
            }
          });
        }
        return same;
      }

      function mergeChildren(prev, next) {
        var ret = [];

        // For each key of `next`, the list of keys to insert before that key in
        // the combined list
        var nextChildrenPending = {};
        var pendingChildren = [];
        prev.forEach(function(child) {
          if (child && findChildInChildrenByKey(next, child.key)) {
            if (pendingChildren.length) {
              nextChildrenPending[child.key] = pendingChildren;
              pendingChildren = [];
            }
          } else {
            pendingChildren.push(child);
          }
        });

        next.forEach(function(child) {
          if (
            child &&
            Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)
          ) {
            ret = ret.concat(nextChildrenPending[child.key]);
          }
          ret.push(child);
        });

        ret = ret.concat(pendingChildren);

        return ret;
      }

      /***/
    },

  /***/ './node_modules/rc-animate/es/util/animate.js':
    /*!****************************************************!*\
  !*** ./node_modules/rc-animate/es/util/animate.js ***!
  \****************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var util = {
        isAppearSupported: function isAppearSupported(props) {
          return (
            (props.transitionName && props.transitionAppear) ||
            props.animation.appear
          );
        },
        isEnterSupported: function isEnterSupported(props) {
          return (
            (props.transitionName && props.transitionEnter) ||
            props.animation.enter
          );
        },
        isLeaveSupported: function isLeaveSupported(props) {
          return (
            (props.transitionName && props.transitionLeave) ||
            props.animation.leave
          );
        },
        allowAppearCallback: function allowAppearCallback(props) {
          return props.transitionAppear || props.animation.appear;
        },
        allowEnterCallback: function allowEnterCallback(props) {
          return props.transitionEnter || props.animation.enter;
        },
        allowLeaveCallback: function allowLeaveCallback(props) {
          return props.transitionLeave || props.animation.leave;
        },
      };
      /* harmony default export */ __webpack_exports__['default'] = util;

      /***/
    },

  /***/ './node_modules/rc-menu/es/DOMWrap.js':
    /*!********************************************!*\
  !*** ./node_modules/rc-menu/es/DOMWrap.js ***!
  \********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/objectWithoutProperties */ './node_modules/babel-runtime/helpers/objectWithoutProperties.js',
      );
      /* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_7__,
      );
      /* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! resize-observer-polyfill */ './node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js',
      );
      /* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ./SubMenu */ './node_modules/rc-menu/es/SubMenu.js',
      );
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ./util */ './node_modules/rc-menu/es/util.js',
      );

      var canUseDOM = !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
      );

      var MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
      var FLOAT_PRECISION_ADJUST = 0.5;

      // Fix ssr
      if (canUseDOM) {
        __webpack_require__(
          /*! mutationobserver-shim */ './node_modules/mutationobserver-shim/dist/mutationobserver.min.js',
        );
      }

      var DOMWrap = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
          DOMWrap,
          _React$Component,
        );

        function DOMWrap() {
          var _temp, _this, _ret;

          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            DOMWrap,
          );

          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          return (
            (_ret = ((_temp = ((_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
              this,
              _React$Component.call.apply(
                _React$Component,
                [this].concat(args),
              ),
            )),
            _this)),
            (_this.state = {
              lastVisibleIndex: undefined,
            }),
            (_this.getMenuItemNodes = function() {
              var prefixCls = _this.props.prefixCls;

              var ul = react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(
                _this,
              );
              if (!ul) {
                return [];
              }

              // filter out all overflowed indicator placeholder
              return [].slice.call(ul.children).filter(function(node) {
                return (
                  node.className
                    .split(' ')
                    .indexOf(prefixCls + '-overflowed-submenu') < 0
                );
              });
            }),
            (_this.getOverflowedSubMenuItem = function(
              keyPrefix,
              overflowedItems,
              renderPlaceholder,
            ) {
              var _this$props = _this.props,
                overflowedIndicator = _this$props.overflowedIndicator,
                level = _this$props.level,
                mode = _this$props.mode,
                prefixCls = _this$props.prefixCls,
                theme = _this$props.theme,
                propStyle = _this$props.style;

              if (level !== 1 || mode !== 'horizontal') {
                return null;
              }
              // put all the overflowed item inside a submenu
              // with a title of overflow indicator ('...')
              var copy = _this.props.children[0];

              var _copy$props = copy.props,
                throwAway = _copy$props.children,
                title = _copy$props.title,
                eventKey = _copy$props.eventKey,
                rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
                  _copy$props,
                  ['children', 'title', 'eventKey'],
                );

              var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                {},
                propStyle,
              );
              var key = keyPrefix + '-overflowed-indicator';

              if (overflowedItems.length === 0 && renderPlaceholder !== true) {
                style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                  {},
                  style,
                  {
                    display: 'none',
                  },
                );
              } else if (renderPlaceholder) {
                style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                  {},
                  style,
                  {
                    visibility: 'hidden',
                    // prevent from taking normal dom space
                    position: 'absolute',
                  },
                );
                key = key + '-placeholder';
              }

              var popupClassName = theme ? prefixCls + '-' + theme : '';
              var props = {};
              _util__WEBPACK_IMPORTED_MODULE_10__['menuAllProps'].forEach(
                function(k) {
                  if (rest[k] !== undefined) {
                    props[k] = rest[k];
                  }
                },
              );

              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _SubMenu__WEBPACK_IMPORTED_MODULE_9__['default'],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                  {
                    title: overflowedIndicator,
                    className: prefixCls + '-overflowed-submenu',
                    popupClassName: popupClassName,
                  },
                  props,
                  {
                    key: key,
                    eventKey: keyPrefix + '-overflowed-indicator',
                    disabled: false,
                    style: style,
                  },
                ),
                overflowedItems,
              );
            }),
            (_this.setChildrenWidthAndResize = function() {
              if (_this.props.mode !== 'horizontal') {
                return;
              }
              var ul = react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(
                _this,
              );

              if (!ul) {
                return;
              }

              var ulChildrenNodes = ul.children;

              if (!ulChildrenNodes || ulChildrenNodes.length === 0) {
                return;
              }

              var lastOverflowedIndicatorPlaceholder =
                ul.children[ulChildrenNodes.length - 1];

              // need last overflowed indicator for calculating length;
              Object(_util__WEBPACK_IMPORTED_MODULE_10__['setStyle'])(
                lastOverflowedIndicatorPlaceholder,
                'display',
                'inline-block',
              );

              var menuItemNodes = _this.getMenuItemNodes();

              // reset display attribute for all hidden elements caused by overflow to calculate updated width
              // and then reset to original state after width calculation

              var overflowedItems = menuItemNodes.filter(function(c) {
                return (
                  c.className
                    .split(' ')
                    .indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0
                );
              });

              overflowedItems.forEach(function(c) {
                Object(
                  _util__WEBPACK_IMPORTED_MODULE_10__['setStyle'],
                )(c, 'display', 'inline-block');
              });

              _this.menuItemSizes = menuItemNodes.map(function(c) {
                return Object(
                  _util__WEBPACK_IMPORTED_MODULE_10__['getWidth'],
                )(c);
              });

              overflowedItems.forEach(function(c) {
                Object(
                  _util__WEBPACK_IMPORTED_MODULE_10__['setStyle'],
                )(c, 'display', 'none');
              });
              _this.overflowedIndicatorWidth = Object(
                _util__WEBPACK_IMPORTED_MODULE_10__['getWidth'],
              )(ul.children[ul.children.length - 1]);
              _this.originalTotalWidth = _this.menuItemSizes.reduce(function(
                acc,
                cur,
              ) {
                return acc + cur;
              },
              0);
              _this.handleResize();
              // prevent the overflowed indicator from taking space;
              Object(_util__WEBPACK_IMPORTED_MODULE_10__['setStyle'])(
                lastOverflowedIndicatorPlaceholder,
                'display',
                'none',
              );
            }),
            (_this.resizeObserver = null),
            (_this.mutationObserver = null),
            (_this.originalTotalWidth = 0),
            (_this.overflowedItems = []),
            (_this.menuItemSizes = []),
            (_this.handleResize = function() {
              if (_this.props.mode !== 'horizontal') {
                return;
              }

              var ul = react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(
                _this,
              );
              if (!ul) {
                return;
              }
              var width = Object(
                _util__WEBPACK_IMPORTED_MODULE_10__['getWidth'],
              )(ul);

              _this.overflowedItems = [];
              var currentSumWidth = 0;

              // index for last visible child in horizontal mode
              var lastVisibleIndex = undefined;

              // float number comparison could be problematic
              // e.g. 0.1 + 0.2 > 0.3 =====> true
              // thus using FLOAT_PRECISION_ADJUST as buffer to help the situation
              if (_this.originalTotalWidth > width + FLOAT_PRECISION_ADJUST) {
                lastVisibleIndex = -1;

                _this.menuItemSizes.forEach(function(liWidth) {
                  currentSumWidth += liWidth;
                  if (
                    currentSumWidth + _this.overflowedIndicatorWidth <=
                    width
                  ) {
                    lastVisibleIndex++;
                  }
                });
              }

              _this.setState({ lastVisibleIndex: lastVisibleIndex });
            }),
            _temp)),
            babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
              _this,
              _ret,
            )
          );
        }

        DOMWrap.prototype.componentDidMount = function componentDidMount() {
          var _this2 = this;

          this.setChildrenWidthAndResize();
          if (this.props.level === 1 && this.props.mode === 'horizontal') {
            var menuUl = react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(
              this,
            );
            if (!menuUl) {
              return;
            }
            this.resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_8__[
              'default'
            ](function(entries) {
              entries.forEach(_this2.setChildrenWidthAndResize);
            });

            [].slice
              .call(menuUl.children)
              .concat(menuUl)
              .forEach(function(el) {
                _this2.resizeObserver.observe(el);
              });

            if (typeof MutationObserver !== 'undefined') {
              this.mutationObserver = new MutationObserver(function() {
                _this2.resizeObserver.disconnect();
                [].slice
                  .call(menuUl.children)
                  .concat(menuUl)
                  .forEach(function(el) {
                    _this2.resizeObserver.observe(el);
                  });
                _this2.setChildrenWidthAndResize();
              });
              this.mutationObserver.observe(menuUl, {
                attributes: false,
                childList: true,
                subTree: false,
              });
            }
          }
        };

        DOMWrap.prototype.componentWillUnmount = function componentWillUnmount() {
          if (this.resizeObserver) {
            this.resizeObserver.disconnect();
          }
          if (this.mutationObserver) {
            this.resizeObserver.disconnect();
          }
        };

        // get all valid menuItem nodes

        // memorize rendered menuSize

        // original scroll size of the list

        // copy of overflowed items

        // cache item of the original items (so we can track the size and order)

        DOMWrap.prototype.renderChildren = function renderChildren(children) {
          var _this3 = this;

          // need to take care of overflowed items in horizontal mode
          var lastVisibleIndex = this.state.lastVisibleIndex;

          return (children || []).reduce(function(acc, childNode, index) {
            var item = childNode;
            if (_this3.props.mode === 'horizontal') {
              var overflowed = _this3.getOverflowedSubMenuItem(
                childNode.props.eventKey,
                [],
              );
              if (
                lastVisibleIndex !== undefined &&
                _this3.props.className.indexOf(
                  _this3.props.prefixCls + '-root',
                ) !== -1
              ) {
                if (index > lastVisibleIndex) {
                  item = react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(
                    childNode,
                    // 这里修改 eventKey 是为了防止隐藏状态下还会触发 openkeys 事件
                    {
                      style: { display: 'none' },
                      eventKey: childNode.props.eventKey + '-hidden',
                      className:
                        childNode.className +
                        ' ' +
                        MENUITEM_OVERFLOWED_CLASSNAME,
                    },
                  );
                }
                if (index === lastVisibleIndex + 1) {
                  _this3.overflowedItems = children
                    .slice(lastVisibleIndex + 1)
                    .map(function(c) {
                      return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(
                        c,
                        // children[index].key will become '.$key' in clone by default,
                        // we have to overwrite with the correct key explicitly
                        { key: c.props.eventKey, mode: 'vertical-left' },
                      );
                    });

                  overflowed = _this3.getOverflowedSubMenuItem(
                    childNode.props.eventKey,
                    _this3.overflowedItems,
                  );
                }
              }

              var ret = [].concat(acc, [overflowed, item]);

              if (index === children.length - 1) {
                // need a placeholder for calculating overflowed indicator width
                ret.push(
                  _this3.getOverflowedSubMenuItem(
                    childNode.props.eventKey,
                    [],
                    true,
                  ),
                );
              }
              return ret;
            }
            return [].concat(acc, [item]);
          }, []);
        };

        DOMWrap.prototype.render = function render() {
          var _props = this.props,
            hiddenClassName = _props.hiddenClassName,
            visible = _props.visible,
            prefixCls = _props.prefixCls,
            overflowedIndicator = _props.overflowedIndicator,
            mode = _props.mode,
            level = _props.level,
            Tag = _props.tag,
            children = _props.children,
            theme = _props.theme,
            rest = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
              _props,
              [
                'hiddenClassName',
                'visible',
                'prefixCls',
                'overflowedIndicator',
                'mode',
                'level',
                'tag',
                'children',
                'theme',
              ],
            );

          if (!visible) {
            rest.className += ' ' + hiddenClassName;
          }

          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            Tag,
            rest,
            this.renderChildren(this.props.children),
          );
        };

        return DOMWrap;
      })(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

      DOMWrap.propTypes = {
        className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
        mode: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([
          'horizontal',
          'vertical',
          'vertical-left',
          'vertical-right',
          'inline',
        ]),
        prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        level: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        theme: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        overflowedIndicator:
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
        visible: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
        hiddenClassName:
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        tag: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
      };

      DOMWrap.defaultProps = {
        tag: 'div',
        className: '',
      };

      /* harmony default export */ __webpack_exports__['default'] = DOMWrap;

      /***/
    },

  /***/ './node_modules/rc-menu/es/Divider.js':
    /*!********************************************!*\
  !*** ./node_modules/rc-menu/es/Divider.js ***!
  \********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_4__,
      );

      var Divider = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(
          Divider,
          _React$Component,
        );

        function Divider() {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
            this,
            Divider,
          );

          return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(
            this,
            _React$Component.apply(this, arguments),
          );
        }

        Divider.prototype.render = function render() {
          var _props = this.props,
            className = _props.className,
            rootPrefixCls = _props.rootPrefixCls,
            style = _props.style;

          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'li',
            {
              className: className + ' ' + rootPrefixCls + '-item-divider',
              style: style,
            },
          );
        };

        return Divider;
      })(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

      Divider.propTypes = {
        className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
        rootPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
        style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
      };
      Divider.defaultProps = {
        // To fix keyboard UX.
        disabled: true,
        className: '',
        style: {},
      };
      /* harmony default export */ __webpack_exports__['default'] = Divider;

      /***/
    },

  /***/ './node_modules/rc-menu/es/Menu.js':
    /*!*****************************************!*\
  !*** ./node_modules/rc-menu/es/Menu.js ***!
  \*****************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/objectWithoutProperties */ './node_modules/babel-runtime/helpers/objectWithoutProperties.js',
      );
      /* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! mini-store */ './node_modules/mini-store/lib/index.js',
      );
      /* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        mini_store__WEBPACK_IMPORTED_MODULE_7__,
      );
      /* harmony import */ var _SubPopupMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./SubPopupMenu */ './node_modules/rc-menu/es/SubPopupMenu.js',
      );
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ./util */ './node_modules/rc-menu/es/util.js',
      );

      var Menu = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
          Menu,
          _React$Component,
        );

        function Menu(props) {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            Menu,
          );

          var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
            this,
            _React$Component.call(this, props),
          );

          _initialiseProps.call(_this);

          _this.isRootMenu = true;

          var selectedKeys = props.defaultSelectedKeys;
          var openKeys = props.defaultOpenKeys;
          if ('selectedKeys' in props) {
            selectedKeys = props.selectedKeys || [];
          }
          if ('openKeys' in props) {
            openKeys = props.openKeys || [];
          }

          _this.store = Object(
            mini_store__WEBPACK_IMPORTED_MODULE_7__['create'],
          )({
            selectedKeys: selectedKeys,
            openKeys: openKeys,
            activeKey: {
              '0-menu-': Object(
                _SubPopupMenu__WEBPACK_IMPORTED_MODULE_8__['getActiveKey'],
              )(props, props.activeKey),
            },
          });
          return _this;
        }

        Menu.prototype.componentDidMount = function componentDidMount() {
          this.updateMiniStore();
        };

        Menu.prototype.componentDidUpdate = function componentDidUpdate() {
          this.updateMiniStore();
        };

        // onKeyDown needs to be exposed as a instance method
        // e.g., in rc-select, we need to navigate menu item while
        // current active item is rc-select input box rather than the menu itself

        Menu.prototype.updateMiniStore = function updateMiniStore() {
          if ('selectedKeys' in this.props) {
            this.store.setState({
              selectedKeys: this.props.selectedKeys || [],
            });
          }
          if ('openKeys' in this.props) {
            this.store.setState({
              openKeys: this.props.openKeys || [],
            });
          }
        };

        Menu.prototype.render = function render() {
          var _this2 = this;

          var props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
            this.props,
            [],
          );

          props.className += ' ' + props.prefixCls + '-root';
          props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            props,
            {
              onClick: this.onClick,
              onOpenChange: this.onOpenChange,
              onDeselect: this.onDeselect,
              onSelect: this.onSelect,
              openTransitionName: this.getOpenTransitionName(),
              parentMenu: this,
            },
          );
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            mini_store__WEBPACK_IMPORTED_MODULE_7__['Provider'],
            { store: this.store },
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _SubPopupMenu__WEBPACK_IMPORTED_MODULE_8__['default'],
              babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                {},
                props,
                {
                  ref: function ref(c) {
                    return (_this2.innerMenu = c);
                  },
                },
              ),
              this.props.children,
            ),
          );
        };

        return Menu;
      })(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

      Menu.propTypes = {
        defaultSelectedKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        ),
        defaultActiveFirst:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        selectedKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        ),
        defaultOpenKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        ),
        openKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        ),
        mode: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
          'horizontal',
          'vertical',
          'vertical-left',
          'vertical-right',
          'inline',
        ]),
        getPopupContainer:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onDestroy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        openTransitionName:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        openAnimation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          ],
        ),
        subMenuOpenDelay:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
        subMenuCloseDelay:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
        forceSubMenuRender:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        triggerSubMenuAction:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        level: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
        selectable: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        multiple: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
        className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
        activeKey: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        builtinPlacements:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
        itemIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
        ]),
        expandIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
          ],
        ),
        overflowedIndicator:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
      };
      Menu.defaultProps = {
        selectable: true,
        onClick: _util__WEBPACK_IMPORTED_MODULE_9__['noop'],
        onSelect: _util__WEBPACK_IMPORTED_MODULE_9__['noop'],
        onOpenChange: _util__WEBPACK_IMPORTED_MODULE_9__['noop'],
        onDeselect: _util__WEBPACK_IMPORTED_MODULE_9__['noop'],
        defaultSelectedKeys: [],
        defaultOpenKeys: [],
        subMenuOpenDelay: 0.1,
        subMenuCloseDelay: 0.1,
        triggerSubMenuAction: 'hover',
        prefixCls: 'rc-menu',
        className: '',
        mode: 'vertical',
        style: {},
        builtinPlacements: {},
        overflowedIndicator: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'span',
          null,
          '\xB7\xB7\xB7',
        ),
      };

      var _initialiseProps = function _initialiseProps() {
        var _this3 = this;

        this.onSelect = function(selectInfo) {
          var props = _this3.props;
          if (props.selectable) {
            // root menu
            var selectedKeys = _this3.store.getState().selectedKeys;
            var selectedKey = selectInfo.key;
            if (props.multiple) {
              selectedKeys = selectedKeys.concat([selectedKey]);
            } else {
              selectedKeys = [selectedKey];
            }
            if (!('selectedKeys' in props)) {
              _this3.store.setState({
                selectedKeys: selectedKeys,
              });
            }
            props.onSelect(
              babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                {},
                selectInfo,
                {
                  selectedKeys: selectedKeys,
                },
              ),
            );
          }
        };

        this.onClick = function(e) {
          _this3.props.onClick(e);
        };

        this.onKeyDown = function(e, callback) {
          _this3.innerMenu.getWrappedInstance().onKeyDown(e, callback);
        };

        this.onOpenChange = function(event) {
          var props = _this3.props;
          var openKeys = _this3.store.getState().openKeys.concat();
          var changed = false;
          var processSingle = function processSingle(e) {
            var oneChanged = false;
            if (e.open) {
              oneChanged = openKeys.indexOf(e.key) === -1;
              if (oneChanged) {
                openKeys.push(e.key);
              }
            } else {
              var index = openKeys.indexOf(e.key);
              oneChanged = index !== -1;
              if (oneChanged) {
                openKeys.splice(index, 1);
              }
            }
            changed = changed || oneChanged;
          };
          if (Array.isArray(event)) {
            // batch change call
            event.forEach(processSingle);
          } else {
            processSingle(event);
          }
          if (changed) {
            if (!('openKeys' in _this3.props)) {
              _this3.store.setState({ openKeys: openKeys });
            }
            props.onOpenChange(openKeys);
          }
        };

        this.onDeselect = function(selectInfo) {
          var props = _this3.props;
          if (props.selectable) {
            var selectedKeys = _this3.store.getState().selectedKeys.concat();
            var selectedKey = selectInfo.key;
            var index = selectedKeys.indexOf(selectedKey);
            if (index !== -1) {
              selectedKeys.splice(index, 1);
            }
            if (!('selectedKeys' in props)) {
              _this3.store.setState({
                selectedKeys: selectedKeys,
              });
            }
            props.onDeselect(
              babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                {},
                selectInfo,
                {
                  selectedKeys: selectedKeys,
                },
              ),
            );
          }
        };

        this.getOpenTransitionName = function() {
          var props = _this3.props;
          var transitionName = props.openTransitionName;
          var animationName = props.openAnimation;
          if (!transitionName && typeof animationName === 'string') {
            transitionName = props.prefixCls + '-open-' + animationName;
          }
          return transitionName;
        };
      };

      /* harmony default export */ __webpack_exports__['default'] = Menu;

      /***/
    },

  /***/ './node_modules/rc-menu/es/MenuItem.js':
    /*!*********************************************!*\
  !*** ./node_modules/rc-menu/es/MenuItem.js ***!
  \*********************************************/
    /*! exports provided: MenuItem, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'MenuItem',
        function() {
          return MenuItem;
        },
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! rc-util/es/KeyCode */ './node_modules/rc-util/es/KeyCode.js',
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! classnames */ './node_modules/classnames/index.js',
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        classnames__WEBPACK_IMPORTED_MODULE_8__,
      );
      /* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! dom-scroll-into-view */ './node_modules/dom-scroll-into-view/lib/index.js',
      );
      /* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_9__,
      );
      /* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! mini-store */ './node_modules/mini-store/lib/index.js',
      );
      /* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        mini_store__WEBPACK_IMPORTED_MODULE_10__,
      );
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ./util */ './node_modules/rc-menu/es/util.js',
      );

      /* eslint react/no-is-mounted:0 */

      var MenuItem = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(
          MenuItem,
          _React$Component,
        );

        function MenuItem(props) {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
            this,
            MenuItem,
          );

          var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            _React$Component.call(this, props),
          );

          _this.onKeyDown = function(e) {
            var keyCode = e.keyCode;
            if (
              keyCode ===
              rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_7__['default'].ENTER
            ) {
              _this.onClick(e);
              return true;
            }
          };

          _this.onMouseLeave = function(e) {
            var _this$props = _this.props,
              eventKey = _this$props.eventKey,
              onItemHover = _this$props.onItemHover,
              onMouseLeave = _this$props.onMouseLeave;

            onItemHover({
              key: eventKey,
              hover: false,
            });
            onMouseLeave({
              key: eventKey,
              domEvent: e,
            });
          };

          _this.onMouseEnter = function(e) {
            var _this$props2 = _this.props,
              eventKey = _this$props2.eventKey,
              onItemHover = _this$props2.onItemHover,
              onMouseEnter = _this$props2.onMouseEnter;

            onItemHover({
              key: eventKey,
              hover: true,
            });
            onMouseEnter({
              key: eventKey,
              domEvent: e,
            });
          };

          _this.onClick = function(e) {
            var _this$props3 = _this.props,
              eventKey = _this$props3.eventKey,
              multiple = _this$props3.multiple,
              onClick = _this$props3.onClick,
              onSelect = _this$props3.onSelect,
              onDeselect = _this$props3.onDeselect,
              isSelected = _this$props3.isSelected;

            var info = {
              key: eventKey,
              keyPath: [eventKey],
              item: _this,
              domEvent: e,
            };
            onClick(info);
            if (multiple) {
              if (isSelected) {
                onDeselect(info);
              } else {
                onSelect(info);
              }
            } else if (!isSelected) {
              onSelect(info);
            }
          };

          return _this;
        }

        MenuItem.prototype.componentDidMount = function componentDidMount() {
          // invoke customized ref to expose component to mixin
          this.callRef();
        };

        MenuItem.prototype.componentDidUpdate = function componentDidUpdate() {
          if (this.props.active) {
            dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_9___default()(
              react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(
                this,
              ),
              react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(
                this.props.parentMenu,
              ),
              {
                onlyScrollIfNeeded: true,
              },
            );
          }
          this.callRef();
        };

        MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
          var props = this.props;
          if (props.onDestroy) {
            props.onDestroy(props.eventKey);
          }
        };

        MenuItem.prototype.getPrefixCls = function getPrefixCls() {
          return this.props.rootPrefixCls + '-item';
        };

        MenuItem.prototype.getActiveClassName = function getActiveClassName() {
          return this.getPrefixCls() + '-active';
        };

        MenuItem.prototype.getSelectedClassName = function getSelectedClassName() {
          return this.getPrefixCls() + '-selected';
        };

        MenuItem.prototype.getDisabledClassName = function getDisabledClassName() {
          return this.getPrefixCls() + '-disabled';
        };

        MenuItem.prototype.callRef = function callRef() {
          if (this.props.manualRef) {
            this.props.manualRef(this);
          }
        };

        MenuItem.prototype.render = function render() {
          var _classNames;

          var props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            this.props,
          );
          var className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(
            this.getPrefixCls(),
            props.className,
            ((_classNames = {}),
            (_classNames[this.getActiveClassName()] =
              !props.disabled && props.active),
            (_classNames[this.getSelectedClassName()] = props.isSelected),
            (_classNames[this.getDisabledClassName()] = props.disabled),
            _classNames),
          );
          var attrs = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            props.attribute,
            {
              title: props.title,
              className: className,
              // set to menuitem by default
              role: props.role || 'menuitem',
              'aria-disabled': props.disabled,
            },
          );

          if (props.role === 'option') {
            // overwrite to option
            attrs = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
              {},
              attrs,
              {
                role: 'option',
                'aria-selected': props.isSelected,
              },
            );
          } else if (props.role === null || props.role === 'none') {
            // sometimes we want to specify role inside <li/> element
            // <li><a role='menuitem'>Link</a></li> would be a good example
            // in this case the role on <li/> should be "none" to
            // remove the implied listitem role.
            // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
            attrs.role = 'none';
          }
          // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner
          var mouseEvent = {
            onClick: props.disabled ? null : this.onClick,
            onMouseLeave: props.disabled ? null : this.onMouseLeave,
            onMouseEnter: props.disabled ? null : this.onMouseEnter,
          };
          var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            props.style,
          );
          if (props.mode === 'inline') {
            style.paddingLeft = props.inlineIndent * props.level;
          }
          _util__WEBPACK_IMPORTED_MODULE_11__['menuAllProps'].forEach(function(
            key,
          ) {
            return delete props[key];
          });
          var icon = this.props.itemIcon;
          if (typeof this.props.itemIcon === 'function') {
            icon = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              this.props.itemIcon,
              this.props,
            );
          }
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'li',
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
              {},
              props,
              attrs,
              mouseEvent,
              {
                style: style,
              },
            ),
            props.children,
            icon,
          );
        };

        return MenuItem;
      })(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

      MenuItem.propTypes = {
        attribute: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
        rootPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        eventKey: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        active: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
        selectedKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
        disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        onItemHover: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        parentMenu: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
        onDestroy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        multiple: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        isSelected: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        manualRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        itemIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
        ]),
      };
      MenuItem.defaultProps = {
        onSelect: _util__WEBPACK_IMPORTED_MODULE_11__['noop'],
        onMouseEnter: _util__WEBPACK_IMPORTED_MODULE_11__['noop'],
        onMouseLeave: _util__WEBPACK_IMPORTED_MODULE_11__['noop'],
        manualRef: _util__WEBPACK_IMPORTED_MODULE_11__['noop'],
      };
      MenuItem.isMenuItem = true;

      var connected = Object(
        mini_store__WEBPACK_IMPORTED_MODULE_10__['connect'],
      )(function(_ref, _ref2) {
        var activeKey = _ref.activeKey,
          selectedKeys = _ref.selectedKeys;
        var eventKey = _ref2.eventKey,
          subMenuKey = _ref2.subMenuKey;
        return {
          active: activeKey[subMenuKey] === eventKey,
          isSelected: selectedKeys.indexOf(eventKey) !== -1,
        };
      })(MenuItem);

      /* harmony default export */ __webpack_exports__['default'] = connected;

      /***/
    },

  /***/ './node_modules/rc-menu/es/MenuItemGroup.js':
    /*!**************************************************!*\
  !*** ./node_modules/rc-menu/es/MenuItemGroup.js ***!
  \**************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/objectWithoutProperties */ './node_modules/babel-runtime/helpers/objectWithoutProperties.js',
      );
      /* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./util */ './node_modules/rc-menu/es/util.js',
      );

      var MenuItemGroup = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
          MenuItemGroup,
          _React$Component,
        );

        function MenuItemGroup() {
          var _temp, _this, _ret;

          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            MenuItemGroup,
          );

          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          return (
            (_ret = ((_temp = ((_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
              this,
              _React$Component.call.apply(
                _React$Component,
                [this].concat(args),
              ),
            )),
            _this)),
            (_this.renderInnerMenuItem = function(item) {
              var _this$props = _this.props,
                renderMenuItem = _this$props.renderMenuItem,
                index = _this$props.index;

              return renderMenuItem(item, index, _this.props.subMenuKey);
            }),
            _temp)),
            babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
              _this,
              _ret,
            )
          );
        }

        MenuItemGroup.prototype.render = function render() {
          var props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(
            this.props,
            [],
          );

          var _props$className = props.className,
            className = _props$className === undefined ? '' : _props$className,
            rootPrefixCls = props.rootPrefixCls;

          var titleClassName = rootPrefixCls + '-item-group-title';
          var listClassName = rootPrefixCls + '-item-group-list';
          var title = props.title,
            children = props.children;

          _util__WEBPACK_IMPORTED_MODULE_7__['menuAllProps'].forEach(function(
            key,
          ) {
            return delete props[key];
          });

          // Set onClick to null, to ignore propagated onClick event
          delete props.onClick;

          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            'li',
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
              {},
              props,
              { className: className + ' ' + rootPrefixCls + '-item-group' },
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'div',
              {
                className: titleClassName,
                title: typeof title === 'string' ? title : undefined,
              },
              title,
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              'ul',
              { className: listClassName },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.map(
                children,
                this.renderInnerMenuItem,
              ),
            ),
          );
        };

        return MenuItemGroup;
      })(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

      MenuItemGroup.propTypes = {
        renderMenuItem: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        index: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
        className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        subMenuKey: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        rootPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
      };
      MenuItemGroup.defaultProps = {
        disabled: true,
      };

      MenuItemGroup.isMenuItemGroup = true;

      /* harmony default export */ __webpack_exports__[
        'default'
      ] = MenuItemGroup;

      /***/
    },

  /***/ './node_modules/rc-menu/es/SubMenu.js':
    /*!********************************************!*\
  !*** ./node_modules/rc-menu/es/SubMenu.js ***!
  \********************************************/
    /*! exports provided: SubMenu, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'SubMenu',
        function() {
          return SubMenu;
        },
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! rc-trigger */ './node_modules/rc-trigger/es/index.js',
      );
      /* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! rc-util/es/KeyCode */ './node_modules/rc-util/es/KeyCode.js',
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! classnames */ './node_modules/classnames/index.js',
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        classnames__WEBPACK_IMPORTED_MODULE_9__,
      );
      /* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! mini-store */ './node_modules/mini-store/lib/index.js',
      );
      /* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        mini_store__WEBPACK_IMPORTED_MODULE_10__,
      );
      /* harmony import */ var _SubPopupMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ./SubPopupMenu */ './node_modules/rc-menu/es/SubPopupMenu.js',
      );
      /* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ./placements */ './node_modules/rc-menu/es/placements.js',
      );
      /* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! rc-animate */ './node_modules/rc-animate/es/Animate.js',
      );
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        /*! ./util */ './node_modules/rc-menu/es/util.js',
      );

      var guid = 0;

      var popupPlacementMap = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };

      var updateDefaultActiveFirst = function updateDefaultActiveFirst(
        store,
        eventKey,
        defaultActiveFirst,
      ) {
        var _extends2;

        var menuId = Object(
          _util__WEBPACK_IMPORTED_MODULE_14__['getMenuIdFromSubMenuEventKey'],
        )(eventKey);
        var state = store.getState();
        store.setState({
          defaultActiveFirst: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
            {},
            state.defaultActiveFirst,
            ((_extends2 = {}),
            (_extends2[menuId] = defaultActiveFirst),
            _extends2),
          ),
        });
      };

      var SubMenu = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(
          SubMenu,
          _React$Component,
        );

        function SubMenu(props) {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
            this,
            SubMenu,
          );

          var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(
            this,
            _React$Component.call(this, props),
          );

          _initialiseProps.call(_this);

          var store = props.store;
          var eventKey = props.eventKey;
          var defaultActiveFirst = store.getState().defaultActiveFirst;

          _this.isRootMenu = false;

          var value = false;

          if (defaultActiveFirst) {
            value = defaultActiveFirst[eventKey];
          }

          updateDefaultActiveFirst(store, eventKey, value);
          return _this;
        }

        SubMenu.prototype.componentDidMount = function componentDidMount() {
          this.componentDidUpdate();
        };

        SubMenu.prototype.componentDidUpdate = function componentDidUpdate() {
          var _this2 = this;

          var _props = this.props,
            mode = _props.mode,
            parentMenu = _props.parentMenu,
            manualRef = _props.manualRef;

          // invoke customized ref to expose component to mixin

          if (manualRef) {
            manualRef(this);
          }

          if (
            mode !== 'horizontal' ||
            !parentMenu.isRootMenu ||
            !this.props.isOpen
          ) {
            return;
          }

          this.minWidthTimeout = setTimeout(function() {
            return _this2.adjustWidth();
          }, 0);
        };

        SubMenu.prototype.componentWillUnmount = function componentWillUnmount() {
          var _props2 = this.props,
            onDestroy = _props2.onDestroy,
            eventKey = _props2.eventKey;

          if (onDestroy) {
            onDestroy(eventKey);
          }

          /* istanbul ignore if */
          if (this.minWidthTimeout) {
            clearTimeout(this.minWidthTimeout);
          }

          /* istanbul ignore if */
          if (this.mouseenterTimeout) {
            clearTimeout(this.mouseenterTimeout);
          }
        };

        SubMenu.prototype.renderChildren = function renderChildren(children) {
          var props = this.props;
          var baseProps = {
            mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
            visible: this.props.isOpen,
            level: props.level + 1,
            inlineIndent: props.inlineIndent,
            focusable: false,
            onClick: this.onSubMenuClick,
            onSelect: this.onSelect,
            onDeselect: this.onDeselect,
            onDestroy: this.onDestroy,
            selectedKeys: props.selectedKeys,
            eventKey: props.eventKey + '-menu-',
            openKeys: props.openKeys,
            openTransitionName: props.openTransitionName,
            openAnimation: props.openAnimation,
            onOpenChange: this.onOpenChange,
            subMenuOpenDelay: props.subMenuOpenDelay,
            parentMenu: this,
            subMenuCloseDelay: props.subMenuCloseDelay,
            forceSubMenuRender: props.forceSubMenuRender,
            triggerSubMenuAction: props.triggerSubMenuAction,
            builtinPlacements: props.builtinPlacements,
            defaultActiveFirst: props.store.getState().defaultActiveFirst[
              Object(
                _util__WEBPACK_IMPORTED_MODULE_14__[
                  'getMenuIdFromSubMenuEventKey'
                ],
              )(props.eventKey)
            ],
            multiple: props.multiple,
            prefixCls: props.rootPrefixCls,
            id: this._menuId,
            manualRef: this.saveMenuInstance,
            itemIcon: props.itemIcon,
            expandIcon: props.expandIcon,
          };

          var haveRendered = this.haveRendered;
          this.haveRendered = true;

          this.haveOpened =
            this.haveOpened ||
            baseProps.visible ||
            baseProps.forceSubMenuRender;
          // never rendered not planning to, don't render
          if (!this.haveOpened) {
            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'div',
              null,
            );
          }

          // don't show transition on first rendering (no animation for opened menu)
          // show appear transition if it's not visible (not sure why)
          // show appear transition if it's not inline mode
          var transitionAppear =
            haveRendered || !baseProps.visible || !baseProps.mode === 'inline';

          baseProps.className = ' ' + baseProps.prefixCls + '-sub';
          var animProps = {};

          if (baseProps.openTransitionName) {
            animProps.transitionName = baseProps.openTransitionName;
          } else if (typeof baseProps.openAnimation === 'object') {
            animProps.animation = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
              {},
              baseProps.openAnimation,
            );
            if (!transitionAppear) {
              delete animProps.animation.appear;
            }
          }

          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            rc_animate__WEBPACK_IMPORTED_MODULE_13__['default'],
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
              {},
              animProps,
              {
                showProp: 'visible',
                component: '',
                transitionAppear: transitionAppear,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _SubPopupMenu__WEBPACK_IMPORTED_MODULE_11__['default'],
              babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                {},
                baseProps,
                { id: this._menuId },
              ),
              children,
            ),
          );
        };

        SubMenu.prototype.render = function render() {
          var _classNames;

          var props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
            {},
            this.props,
          );
          var isOpen = props.isOpen;
          var prefixCls = this.getPrefixCls();
          var isInlineMode = props.mode === 'inline';
          var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()(
            prefixCls,
            prefixCls + '-' + props.mode,
            ((_classNames = {}),
            (_classNames[props.className] = !!props.className),
            (_classNames[this.getOpenClassName()] = isOpen),
            (_classNames[this.getActiveClassName()] =
              props.active || (isOpen && !isInlineMode)),
            (_classNames[this.getDisabledClassName()] = props.disabled),
            (_classNames[
              this.getSelectedClassName()
            ] = this.isChildrenSelected()),
            _classNames),
          );

          if (!this._menuId) {
            if (props.eventKey) {
              this._menuId = props.eventKey + '$Menu';
            } else {
              this._menuId = '$__$' + ++guid + '$Menu';
            }
          }

          var mouseEvents = {};
          var titleClickEvents = {};
          var titleMouseEvents = {};
          if (!props.disabled) {
            mouseEvents = {
              onMouseLeave: this.onMouseLeave,
              onMouseEnter: this.onMouseEnter,
            };

            // only works in title, not outer li
            titleClickEvents = {
              onClick: this.onTitleClick,
            };
            titleMouseEvents = {
              onMouseEnter: this.onTitleMouseEnter,
              onMouseLeave: this.onTitleMouseLeave,
            };
          }

          var style = {};
          if (isInlineMode) {
            style.paddingLeft = props.inlineIndent * props.level;
          }

          var ariaOwns = {};
          // only set aria-owns when menu is open
          // otherwise it would be an invalid aria-owns value
          // since corresponding node cannot be found
          if (this.props.isOpen) {
            ariaOwns = {
              'aria-owns': this._menuId,
            };
          }

          // expand custom icon should NOT be displayed in menu with horizontal mode.
          var icon = null;
          if (props.mode !== 'horizontal') {
            icon = this.props.expandIcon; // ReactNode
            if (typeof this.props.expandIcon === 'function') {
              icon = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                this.props.expandIcon,
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                  {},
                  this.props,
                ),
              );
            }
          }

          var title = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
              {
                ref: this.saveSubMenuTitle,
                style: style,
                className: prefixCls + '-title',
              },
              titleMouseEvents,
              titleClickEvents,
              {
                'aria-expanded': isOpen,
              },
              ariaOwns,
              {
                'aria-haspopup': 'true',
                title:
                  typeof props.title === 'string' ? props.title : undefined,
              },
            ),
            props.title,
            icon ||
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('i', {
                className: prefixCls + '-arrow',
              }),
          );
          var children = this.renderChildren(props.children);

          var getPopupContainer = props.parentMenu.isRootMenu
            ? props.parentMenu.props.getPopupContainer
            : function(triggerNode) {
                return triggerNode.parentNode;
              };
          var popupPlacement = popupPlacementMap[props.mode];
          var popupAlign = props.popupOffset
            ? { offset: props.popupOffset }
            : {};
          var popupClassName =
            props.mode === 'inline' ? '' : props.popupClassName;
          var disabled = props.disabled,
            triggerSubMenuAction = props.triggerSubMenuAction,
            subMenuOpenDelay = props.subMenuOpenDelay,
            forceSubMenuRender = props.forceSubMenuRender,
            subMenuCloseDelay = props.subMenuCloseDelay,
            builtinPlacements = props.builtinPlacements;

          _util__WEBPACK_IMPORTED_MODULE_14__['menuAllProps'].forEach(function(
            key,
          ) {
            return delete props[key];
          });
          // Set onClick to null, to ignore propagated onClick event
          delete props.onClick;

          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'li',
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
              {},
              props,
              mouseEvents,
              {
                className: className,
                role: 'menuitem',
              },
            ),
            isInlineMode && title,
            isInlineMode && children,
            !isInlineMode &&
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                rc_trigger__WEBPACK_IMPORTED_MODULE_7__['default'],
                {
                  prefixCls: prefixCls,
                  popupClassName: prefixCls + '-popup ' + popupClassName,
                  getPopupContainer: getPopupContainer,
                  builtinPlacements: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
                    {},
                    _placements__WEBPACK_IMPORTED_MODULE_12__['default'],
                    builtinPlacements,
                  ),
                  popupPlacement: popupPlacement,
                  popupVisible: isOpen,
                  popupAlign: popupAlign,
                  popup: children,
                  action: disabled ? [] : [triggerSubMenuAction],
                  mouseEnterDelay: subMenuOpenDelay,
                  mouseLeaveDelay: subMenuCloseDelay,
                  onPopupVisibleChange: this.onPopupVisibleChange,
                  forceRender: forceSubMenuRender,
                },
                title,
              ),
          );
        };

        return SubMenu;
      })(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

      SubMenu.propTypes = {
        parentMenu: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
        title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
        children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
        selectedKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
        openKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
        onClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onOpenChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        rootPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        eventKey: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        multiple: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        active: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, // TODO: remove
        onItemHover: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        triggerSubMenuAction:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onDestroy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onTitleMouseEnter:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onTitleMouseLeave:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onTitleClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        popupOffset: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
        isOpen: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        store: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
        mode: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
          'horizontal',
          'vertical',
          'vertical-left',
          'vertical-right',
          'inline',
        ]),
        manualRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        itemIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
        ]),
        expandIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
          ],
        ),
      };
      SubMenu.defaultProps = {
        onMouseEnter: _util__WEBPACK_IMPORTED_MODULE_14__['noop'],
        onMouseLeave: _util__WEBPACK_IMPORTED_MODULE_14__['noop'],
        onTitleMouseEnter: _util__WEBPACK_IMPORTED_MODULE_14__['noop'],
        onTitleMouseLeave: _util__WEBPACK_IMPORTED_MODULE_14__['noop'],
        onTitleClick: _util__WEBPACK_IMPORTED_MODULE_14__['noop'],
        manualRef: _util__WEBPACK_IMPORTED_MODULE_14__['noop'],
        mode: 'vertical',
        title: '',
      };

      var _initialiseProps = function _initialiseProps() {
        var _this3 = this;

        this.onDestroy = function(key) {
          _this3.props.onDestroy(key);
        };

        this.onKeyDown = function(e) {
          var keyCode = e.keyCode;
          var menu = _this3.menuInstance;
          var _props3 = _this3.props,
            isOpen = _props3.isOpen,
            store = _props3.store;

          if (
            keyCode ===
            rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__['default'].ENTER
          ) {
            _this3.onTitleClick(e);
            updateDefaultActiveFirst(store, _this3.props.eventKey, true);
            return true;
          }

          if (
            keyCode ===
            rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__['default'].RIGHT
          ) {
            if (isOpen) {
              menu.onKeyDown(e);
            } else {
              _this3.triggerOpenChange(true);
              // need to update current menu's defaultActiveFirst value
              updateDefaultActiveFirst(store, _this3.props.eventKey, true);
            }
            return true;
          }
          if (
            keyCode ===
            rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__['default'].LEFT
          ) {
            var handled = void 0;
            if (isOpen) {
              handled = menu.onKeyDown(e);
            } else {
              return undefined;
            }
            if (!handled) {
              _this3.triggerOpenChange(false);
              handled = true;
            }
            return handled;
          }

          if (
            isOpen &&
            (keyCode ===
              rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__['default'].UP ||
              keyCode ===
                rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__['default'].DOWN)
          ) {
            return menu.onKeyDown(e);
          }
        };

        this.onOpenChange = function(e) {
          _this3.props.onOpenChange(e);
        };

        this.onPopupVisibleChange = function(visible) {
          _this3.triggerOpenChange(
            visible,
            visible ? 'mouseenter' : 'mouseleave',
          );
        };

        this.onMouseEnter = function(e) {
          var _props4 = _this3.props,
            key = _props4.eventKey,
            onMouseEnter = _props4.onMouseEnter,
            store = _props4.store;

          updateDefaultActiveFirst(store, _this3.props.eventKey, false);
          onMouseEnter({
            key: key,
            domEvent: e,
          });
        };

        this.onMouseLeave = function(e) {
          var _props5 = _this3.props,
            parentMenu = _props5.parentMenu,
            eventKey = _props5.eventKey,
            onMouseLeave = _props5.onMouseLeave;

          parentMenu.subMenuInstance = _this3;
          onMouseLeave({
            key: eventKey,
            domEvent: e,
          });
        };

        this.onTitleMouseEnter = function(domEvent) {
          var _props6 = _this3.props,
            key = _props6.eventKey,
            onItemHover = _props6.onItemHover,
            onTitleMouseEnter = _props6.onTitleMouseEnter;

          onItemHover({
            key: key,
            hover: true,
          });
          onTitleMouseEnter({
            key: key,
            domEvent: domEvent,
          });
        };

        this.onTitleMouseLeave = function(e) {
          var _props7 = _this3.props,
            parentMenu = _props7.parentMenu,
            eventKey = _props7.eventKey,
            onItemHover = _props7.onItemHover,
            onTitleMouseLeave = _props7.onTitleMouseLeave;

          parentMenu.subMenuInstance = _this3;
          onItemHover({
            key: eventKey,
            hover: false,
          });
          onTitleMouseLeave({
            key: eventKey,
            domEvent: e,
          });
        };

        this.onTitleClick = function(e) {
          var props = _this3.props;

          props.onTitleClick({
            key: props.eventKey,
            domEvent: e,
          });
          if (props.triggerSubMenuAction === 'hover') {
            return;
          }
          _this3.triggerOpenChange(!props.isOpen, 'click');
          updateDefaultActiveFirst(props.store, _this3.props.eventKey, false);
        };

        this.onSubMenuClick = function(info) {
          // in the case of overflowed submenu
          // onClick is not copied over
          if (typeof _this3.props.onClick === 'function') {
            _this3.props.onClick(_this3.addKeyPath(info));
          }
        };

        this.onSelect = function(info) {
          _this3.props.onSelect(info);
        };

        this.onDeselect = function(info) {
          _this3.props.onDeselect(info);
        };

        this.getPrefixCls = function() {
          return _this3.props.rootPrefixCls + '-submenu';
        };

        this.getActiveClassName = function() {
          return _this3.getPrefixCls() + '-active';
        };

        this.getDisabledClassName = function() {
          return _this3.getPrefixCls() + '-disabled';
        };

        this.getSelectedClassName = function() {
          return _this3.getPrefixCls() + '-selected';
        };

        this.getOpenClassName = function() {
          return _this3.props.rootPrefixCls + '-submenu-open';
        };

        this.saveMenuInstance = function(c) {
          // children menu instance
          _this3.menuInstance = c;
        };

        this.addKeyPath = function(info) {
          return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()(
            {},
            info,
            {
              keyPath: (info.keyPath || []).concat(_this3.props.eventKey),
            },
          );
        };

        this.triggerOpenChange = function(open, type) {
          var key = _this3.props.eventKey;
          var openChange = function openChange() {
            _this3.onOpenChange({
              key: key,
              item: _this3,
              trigger: type,
              open: open,
            });
          };
          if (type === 'mouseenter') {
            // make sure mouseenter happen after other menu item's mouseleave
            _this3.mouseenterTimeout = setTimeout(function() {
              openChange();
            }, 0);
          } else {
            openChange();
          }
        };

        this.isChildrenSelected = function() {
          var ret = { find: false };
          Object(
            _util__WEBPACK_IMPORTED_MODULE_14__['loopMenuItemRecursively'],
          )(_this3.props.children, _this3.props.selectedKeys, ret);
          return ret.find;
        };

        this.isOpen = function() {
          return _this3.props.openKeys.indexOf(_this3.props.eventKey) !== -1;
        };

        this.adjustWidth = function() {
          /* istanbul ignore if */
          if (!_this3.subMenuTitle || !_this3.menuInstance) {
            return;
          }
          var popupMenu = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(
            _this3.menuInstance,
          );
          if (popupMenu.offsetWidth >= _this3.subMenuTitle.offsetWidth) {
            return;
          }

          /* istanbul ignore next */
          popupMenu.style.minWidth = _this3.subMenuTitle.offsetWidth + 'px';
        };

        this.saveSubMenuTitle = function(subMenuTitle) {
          _this3.subMenuTitle = subMenuTitle;
        };
      };

      var connected = Object(
        mini_store__WEBPACK_IMPORTED_MODULE_10__['connect'],
      )(function(_ref, _ref2) {
        var openKeys = _ref.openKeys,
          activeKey = _ref.activeKey,
          selectedKeys = _ref.selectedKeys;
        var eventKey = _ref2.eventKey,
          subMenuKey = _ref2.subMenuKey;
        return {
          isOpen: openKeys.indexOf(eventKey) > -1,
          active: activeKey[subMenuKey] === eventKey,
          selectedKeys: selectedKeys,
        };
      })(SubMenu);

      connected.isSubMenu = true;

      /* harmony default export */ __webpack_exports__['default'] = connected;

      /***/
    },

  /***/ './node_modules/rc-menu/es/SubPopupMenu.js':
    /*!*************************************************!*\
  !*** ./node_modules/rc-menu/es/SubPopupMenu.js ***!
  \*************************************************/
    /*! exports provided: getActiveKey, saveRef, SubPopupMenu, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getActiveKey',
        function() {
          return getActiveKey;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'saveRef',
        function() {
          return saveRef;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'SubPopupMenu',
        function() {
          return SubPopupMenu;
        },
      );
      /* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/objectWithoutProperties */ './node_modules/babel-runtime/helpers/objectWithoutProperties.js',
      );
      /* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! mini-store */ './node_modules/mini-store/lib/index.js',
      );
      /* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        mini_store__WEBPACK_IMPORTED_MODULE_7__,
      );
      /* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! rc-util/es/KeyCode */ './node_modules/rc-util/es/KeyCode.js',
      );
      /* harmony import */ var rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! rc-util/es/createChainedFunction */ './node_modules/rc-util/es/createChainedFunction.js',
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! classnames */ './node_modules/classnames/index.js',
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        classnames__WEBPACK_IMPORTED_MODULE_10__,
      );
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ./util */ './node_modules/rc-menu/es/util.js',
      );
      /* harmony import */ var _DOMWrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ./DOMWrap */ './node_modules/rc-menu/es/DOMWrap.js',
      );

      function allDisabled(arr) {
        if (!arr.length) {
          return true;
        }
        return arr.every(function(c) {
          return !!c.props.disabled;
        });
      }

      function updateActiveKey(store, menuId, activeKey) {
        var _extends2;

        var state = store.getState();
        store.setState({
          activeKey: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()(
            {},
            state.activeKey,
            ((_extends2 = {}), (_extends2[menuId] = activeKey), _extends2),
          ),
        });
      }

      function getEventKey(props) {
        // when eventKey not available ,it's menu and return menu id '0-menu-'
        return props.eventKey || '0-menu-';
      }

      function getActiveKey(props, originalActiveKey) {
        var activeKey = originalActiveKey;
        var children = props.children,
          eventKey = props.eventKey;

        if (activeKey) {
          var found = void 0;
          Object(_util__WEBPACK_IMPORTED_MODULE_11__['loopMenuItem'])(
            children,
            function(c, i) {
              if (
                c &&
                !c.props.disabled &&
                activeKey ===
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_11__[
                      'getKeyFromChildrenIndex'
                    ],
                  )(c, eventKey, i)
              ) {
                found = true;
              }
            },
          );
          if (found) {
            return activeKey;
          }
        }
        activeKey = null;
        if (props.defaultActiveFirst) {
          Object(_util__WEBPACK_IMPORTED_MODULE_11__['loopMenuItem'])(
            children,
            function(c, i) {
              if (!activeKey && c && !c.props.disabled) {
                activeKey = Object(
                  _util__WEBPACK_IMPORTED_MODULE_11__[
                    'getKeyFromChildrenIndex'
                  ],
                )(c, eventKey, i);
              }
            },
          );
          return activeKey;
        }
        return activeKey;
      }

      function saveRef(c) {
        if (c) {
          var index = this.instanceArray.indexOf(c);
          if (index !== -1) {
            // update component if it's already inside instanceArray
            this.instanceArray[index] = c;
          } else {
            // add component if it's not in instanceArray yet;
            this.instanceArray.push(c);
          }
        }
      }

      var SubPopupMenu = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(
          SubPopupMenu,
          _React$Component,
        );

        function SubPopupMenu(props) {
          var _extends3;

          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
            this,
            SubPopupMenu,
          );

          var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            _React$Component.call(this, props),
          );

          _initialiseProps.call(_this);

          props.store.setState({
            activeKey: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()(
              {},
              props.store.getState().activeKey,
              ((_extends3 = {}),
              (_extends3[props.eventKey] = getActiveKey(
                props,
                props.activeKey,
              )),
              _extends3),
            ),
          });

          _this.instanceArray = [];
          return _this;
        }

        SubPopupMenu.prototype.componentDidMount = function componentDidMount() {
          // invoke customized ref to expose component to mixin
          if (this.props.manualRef) {
            this.props.manualRef(this);
          }
        };

        SubPopupMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(
          nextProps,
        ) {
          return this.props.visible || nextProps.visible;
        };

        SubPopupMenu.prototype.componentDidUpdate = function componentDidUpdate(
          prevProps,
        ) {
          var props = this.props;
          var originalActiveKey =
            'activeKey' in props
              ? props.activeKey
              : props.store.getState().activeKey[getEventKey(props)];
          var activeKey = getActiveKey(props, originalActiveKey);
          if (activeKey !== originalActiveKey) {
            updateActiveKey(props.store, getEventKey(props), activeKey);
          } else if ('activeKey' in prevProps) {
            // If prev activeKey is not same as current activeKey,
            // we should set it.
            var prevActiveKey = getActiveKey(prevProps, prevProps.activeKey);
            if (activeKey !== prevActiveKey) {
              updateActiveKey(props.store, getEventKey(props), activeKey);
            }
          }
        };

        // all keyboard events callbacks run from here at first

        SubPopupMenu.prototype.render = function render() {
          var _this2 = this;

          var props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(
            this.props,
            [],
          );

          this.instanceArray = [];
          var className = classnames__WEBPACK_IMPORTED_MODULE_10___default()(
            props.prefixCls,
            props.className,
            props.prefixCls + '-' + props.mode,
          );
          var domProps = {
            className: className,
            // role could be 'select' and by default set to menu
            role: props.role || 'menu',
          };
          if (props.id) {
            domProps.id = props.id;
          }
          if (props.focusable) {
            domProps.tabIndex = '0';
            domProps.onKeyDown = this.onKeyDown;
          }
          var prefixCls = props.prefixCls,
            eventKey = props.eventKey,
            visible = props.visible,
            level = props.level,
            mode = props.mode,
            overflowedIndicator = props.overflowedIndicator,
            theme = props.theme;

          _util__WEBPACK_IMPORTED_MODULE_11__['menuAllProps'].forEach(function(
            key,
          ) {
            return delete props[key];
          });

          // Otherwise, the propagated click event will trigger another onClick
          delete props.onClick;

          return (
            // ESLint is not smart enough to know that the type of `children` was checked.
            /* eslint-disable */
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _DOMWrap__WEBPACK_IMPORTED_MODULE_12__['default'],
              babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()(
                {},
                props,
                {
                  prefixCls: prefixCls,
                  mode: mode,
                  tag: 'ul',
                  level: level,
                  theme: theme,
                  hiddenClassName: prefixCls + '-hidden',
                  visible: visible,
                  overflowedIndicator: overflowedIndicator,
                },
                domProps,
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.map(
                props.children,
                function(c, i) {
                  return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
                },
              ),
            )
            /*eslint-enable */
          );
        };

        return SubPopupMenu;
      })(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
      SubPopupMenu.propTypes = {
        onSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onOpenChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        onDestroy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        openTransitionName:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        openAnimation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          ],
        ),
        openKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        ),
        visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
        parentMenu: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
        eventKey: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        store: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
          getState: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          setState: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        }),

        // adding in refactor
        focusable: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        multiple: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
        defaultActiveFirst:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        activeKey: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        selectedKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        ),
        defaultSelectedKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        ),
        defaultOpenKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        ),
        level: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
        mode: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
          'horizontal',
          'vertical',
          'vertical-left',
          'vertical-right',
          'inline',
        ]),
        triggerSubMenuAction: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(
          ['click', 'hover'],
        ),
        inlineIndent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          ],
        ),
        manualRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        itemIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
        ]),
        expandIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
          ],
        ),
      };
      SubPopupMenu.defaultProps = {
        prefixCls: 'rc-menu',
        className: '',
        mode: 'vertical',
        level: 1,
        inlineIndent: 24,
        visible: true,
        focusable: true,
        style: {},
        manualRef: _util__WEBPACK_IMPORTED_MODULE_11__['noop'],
      };

      var _initialiseProps = function _initialiseProps() {
        var _this3 = this;

        this.onKeyDown = function(e, callback) {
          var keyCode = e.keyCode;
          var handled = void 0;
          _this3.getFlatInstanceArray().forEach(function(obj) {
            if (obj && obj.props.active && obj.onKeyDown) {
              handled = obj.onKeyDown(e);
            }
          });
          if (handled) {
            return 1;
          }
          var activeItem = null;
          if (
            keyCode ===
              rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__['default'].UP ||
            keyCode ===
              rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__['default'].DOWN
          ) {
            activeItem = _this3.step(
              keyCode ===
                rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_8__['default'].UP
                ? -1
                : 1,
            );
          }
          if (activeItem) {
            e.preventDefault();
            updateActiveKey(
              _this3.props.store,
              getEventKey(_this3.props),
              activeItem.props.eventKey,
            );

            if (typeof callback === 'function') {
              callback(activeItem);
            }

            return 1;
          }
        };

        this.onItemHover = function(e) {
          var key = e.key,
            hover = e.hover;

          updateActiveKey(
            _this3.props.store,
            getEventKey(_this3.props),
            hover ? key : null,
          );
        };

        this.onDeselect = function(selectInfo) {
          _this3.props.onDeselect(selectInfo);
        };

        this.onSelect = function(selectInfo) {
          _this3.props.onSelect(selectInfo);
        };

        this.onClick = function(e) {
          _this3.props.onClick(e);
        };

        this.onOpenChange = function(e) {
          _this3.props.onOpenChange(e);
        };

        this.onDestroy = function(key) {
          /* istanbul ignore next */
          _this3.props.onDestroy(key);
        };

        this.getFlatInstanceArray = function() {
          return _this3.instanceArray;
        };

        this.getOpenTransitionName = function() {
          return _this3.props.openTransitionName;
        };

        this.step = function(direction) {
          var children = _this3.getFlatInstanceArray();
          var activeKey = _this3.props.store.getState().activeKey[
            getEventKey(_this3.props)
          ];
          var len = children.length;
          if (!len) {
            return null;
          }
          if (direction < 0) {
            children = children.concat().reverse();
          }
          // find current activeIndex
          var activeIndex = -1;
          children.every(function(c, ci) {
            if (c && c.props.eventKey === activeKey) {
              activeIndex = ci;
              return false;
            }
            return true;
          });
          if (
            !_this3.props.defaultActiveFirst &&
            activeIndex !== -1 &&
            allDisabled(children.slice(activeIndex, len - 1))
          ) {
            return undefined;
          }
          var start = (activeIndex + 1) % len;
          var i = start;

          do {
            var child = children[i];
            if (!child || child.props.disabled) {
              i = (i + 1) % len;
            } else {
              return child;
            }
          } while (i !== start);

          return null;
        };

        this.renderCommonMenuItem = function(child, i, extraProps) {
          var state = _this3.props.store.getState();
          var props = _this3.props;
          var key = Object(
            _util__WEBPACK_IMPORTED_MODULE_11__['getKeyFromChildrenIndex'],
          )(child, props.eventKey, i);
          var childProps = child.props;
          var isActive = key === state.activeKey;
          var newChildProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()(
            {
              mode: childProps.mode || props.mode,
              level: props.level,
              inlineIndent: props.inlineIndent,
              renderMenuItem: _this3.renderMenuItem,
              rootPrefixCls: props.prefixCls,
              index: i,
              parentMenu: props.parentMenu,
              // customized ref function, need to be invoked manually in child's componentDidMount
              manualRef: childProps.disabled
                ? undefined
                : Object(
                    rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__[
                      'default'
                    ],
                  )(child.ref, saveRef.bind(_this3)),
              eventKey: key,
              active: !childProps.disabled && isActive,
              multiple: props.multiple,
              onClick: function onClick(e) {
                (childProps.onClick ||
                  _util__WEBPACK_IMPORTED_MODULE_11__['noop'])(e);
                _this3.onClick(e);
              },
              onItemHover: _this3.onItemHover,
              openTransitionName: _this3.getOpenTransitionName(),
              openAnimation: props.openAnimation,
              subMenuOpenDelay: props.subMenuOpenDelay,
              subMenuCloseDelay: props.subMenuCloseDelay,
              forceSubMenuRender: props.forceSubMenuRender,
              onOpenChange: _this3.onOpenChange,
              onDeselect: _this3.onDeselect,
              onSelect: _this3.onSelect,
              builtinPlacements: props.builtinPlacements,
              itemIcon: childProps.itemIcon || _this3.props.itemIcon,
              expandIcon: childProps.expandIcon || _this3.props.expandIcon,
            },
            extraProps,
          );
          // ref: https://github.com/ant-design/ant-design/issues/13943
          if (
            props.mode === 'inline' ||
            Object(_util__WEBPACK_IMPORTED_MODULE_11__['isMobileDevice'])()
          ) {
            newChildProps.triggerSubMenuAction = 'click';
          }
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(
            child,
            newChildProps,
          );
        };

        this.renderMenuItem = function(c, i, subMenuKey) {
          /* istanbul ignore if */
          if (!c) {
            return null;
          }
          var state = _this3.props.store.getState();
          var extraProps = {
            openKeys: state.openKeys,
            selectedKeys: state.selectedKeys,
            triggerSubMenuAction: _this3.props.triggerSubMenuAction,
            subMenuKey: subMenuKey,
          };
          return _this3.renderCommonMenuItem(c, i, extraProps);
        };
      };

      var connected = Object(
        mini_store__WEBPACK_IMPORTED_MODULE_7__['connect'],
      )()(SubPopupMenu);

      /* harmony default export */ __webpack_exports__['default'] = connected;

      /***/
    },

  /***/ './node_modules/rc-menu/es/index.js':
    /*!******************************************!*\
  !*** ./node_modules/rc-menu/es/index.js ***!
  \******************************************/
    /*! exports provided: SubMenu, Item, MenuItem, MenuItemGroup, ItemGroup, Divider, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./Menu */ './node_modules/rc-menu/es/Menu.js',
      );
      /* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./SubMenu */ './node_modules/rc-menu/es/SubMenu.js',
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'SubMenu',
        function() {
          return _SubMenu__WEBPACK_IMPORTED_MODULE_1__['default'];
        },
      );

      /* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./MenuItem */ './node_modules/rc-menu/es/MenuItem.js',
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'Item',
        function() {
          return _MenuItem__WEBPACK_IMPORTED_MODULE_2__['default'];
        },
      );

      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'MenuItem',
        function() {
          return _MenuItem__WEBPACK_IMPORTED_MODULE_2__['default'];
        },
      );

      /* harmony import */ var _MenuItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./MenuItemGroup */ './node_modules/rc-menu/es/MenuItemGroup.js',
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'MenuItemGroup',
        function() {
          return _MenuItemGroup__WEBPACK_IMPORTED_MODULE_3__['default'];
        },
      );

      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'ItemGroup',
        function() {
          return _MenuItemGroup__WEBPACK_IMPORTED_MODULE_3__['default'];
        },
      );

      /* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! ./Divider */ './node_modules/rc-menu/es/Divider.js',
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'Divider',
        function() {
          return _Divider__WEBPACK_IMPORTED_MODULE_4__['default'];
        },
      );

      /* harmony default export */ __webpack_exports__['default'] =
        _Menu__WEBPACK_IMPORTED_MODULE_0__['default'];

      /***/
    },

  /***/ './node_modules/rc-menu/es/placements.js':
    /*!***********************************************!*\
  !*** ./node_modules/rc-menu/es/placements.js ***!
  \***********************************************/
    /*! exports provided: placements, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'placements',
        function() {
          return placements;
        },
      );
      var autoAdjustOverflow = {
        adjustX: 1,
        adjustY: 1,
      };

      var placements = {
        topLeft: {
          points: ['bl', 'tl'],
          overflow: autoAdjustOverflow,
          offset: [0, -7],
        },
        bottomLeft: {
          points: ['tl', 'bl'],
          overflow: autoAdjustOverflow,
          offset: [0, 7],
        },
        leftTop: {
          points: ['tr', 'tl'],
          overflow: autoAdjustOverflow,
          offset: [-4, 0],
        },
        rightTop: {
          points: ['tl', 'tr'],
          overflow: autoAdjustOverflow,
          offset: [4, 0],
        },
      };

      /* harmony default export */ __webpack_exports__['default'] = placements;

      /***/
    },

  /***/ './node_modules/rc-menu/es/util.js':
    /*!*****************************************!*\
  !*** ./node_modules/rc-menu/es/util.js ***!
  \*****************************************/
    /*! exports provided: noop, getKeyFromChildrenIndex, getMenuIdFromSubMenuEventKey, loopMenuItem, loopMenuItemRecursively, menuAllProps, getWidth, setStyle, isMobileDevice */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'noop',
        function() {
          return noop;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getKeyFromChildrenIndex',
        function() {
          return getKeyFromChildrenIndex;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getMenuIdFromSubMenuEventKey',
        function() {
          return getMenuIdFromSubMenuEventKey;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'loopMenuItem',
        function() {
          return loopMenuItem;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'loopMenuItemRecursively',
        function() {
          return loopMenuItemRecursively;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'menuAllProps',
        function() {
          return menuAllProps;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getWidth',
        function() {
          return getWidth;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'setStyle',
        function() {
          return setStyle;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isMobileDevice',
        function() {
          return isMobileDevice;
        },
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );

      var isMobile = __webpack_require__(
        /*! ismobilejs */ './node_modules/ismobilejs/dist/isMobile.min.js',
      );

      function noop() {}

      function getKeyFromChildrenIndex(child, menuEventKey, index) {
        var prefix = menuEventKey || '';
        return child.key || prefix + 'item_' + index;
      }

      function getMenuIdFromSubMenuEventKey(eventKey) {
        return eventKey + '-menu-';
      }

      function loopMenuItem(children, cb) {
        var index = -1;
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(
          children,
          function(c) {
            index++;
            if (c && c.type && c.type.isMenuItemGroup) {
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(
                c.props.children,
                function(c2) {
                  index++;
                  cb(c2, index);
                },
              );
            } else {
              cb(c, index);
            }
          },
        );
      }

      function loopMenuItemRecursively(children, keys, ret) {
        /* istanbul ignore if */
        if (!children || ret.find) {
          return;
        }
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(
          children,
          function(c) {
            if (c) {
              var construct = c.type;
              if (
                !construct ||
                !(
                  construct.isSubMenu ||
                  construct.isMenuItem ||
                  construct.isMenuItemGroup
                )
              ) {
                return;
              }
              if (keys.indexOf(c.key) !== -1) {
                ret.find = true;
              } else if (c.props.children) {
                loopMenuItemRecursively(c.props.children, keys, ret);
              }
            }
          },
        );
      }

      var menuAllProps = [
        'defaultSelectedKeys',
        'selectedKeys',
        'defaultOpenKeys',
        'openKeys',
        'mode',
        'getPopupContainer',
        'onSelect',
        'onDeselect',
        'onDestroy',
        'openTransitionName',
        'openAnimation',
        'subMenuOpenDelay',
        'subMenuCloseDelay',
        'forceSubMenuRender',
        'triggerSubMenuAction',
        'level',
        'selectable',
        'multiple',
        'onOpenChange',
        'visible',
        'focusable',
        'defaultActiveFirst',
        'prefixCls',
        'inlineIndent',
        'parentMenu',
        'title',
        'rootPrefixCls',
        'eventKey',
        'active',
        'onItemHover',
        'onTitleMouseEnter',
        'onTitleMouseLeave',
        'onTitleClick',
        'popupAlign',
        'popupOffset',
        'isOpen',
        'renderMenuItem',
        'manualRef',
        'subMenuKey',
        'disabled',
        'index',
        'isSelected',
        'store',
        'activeKey',
        'builtinPlacements',
        'overflowedIndicator',

        // the following keys found need to be removed from test regression
        'attribute',
        'value',
        'popupClassName',
        'inlineCollapsed',
        'menu',
        'theme',
        'itemIcon',
        'expandIcon',
      ];

      // ref: https://github.com/ant-design/ant-design/issues/14007
      // ref: https://bugs.chromium.org/p/chromium/issues/detail?id=360889
      // getBoundingClientRect return the full precision value, which is
      // not the same behavior as on chrome. Set the precision to 6 to
      // unify their behavior
      var getWidth = function getWidth(elem) {
        var width =
          elem &&
          typeof elem.getBoundingClientRect === 'function' &&
          elem.getBoundingClientRect().width;
        if (width) {
          width = +width.toFixed(6);
        }
        return width || 0;
      };

      var setStyle = function setStyle(elem, styleProperty, value) {
        if (elem && typeof elem.style === 'object') {
          elem.style[styleProperty] = value;
        }
      };

      var isMobileDevice = function isMobileDevice() {
        return isMobile.any;
      };

      /***/
    },

  /***/ './node_modules/rc-pagination/es/KeyCode.js':
    /*!**************************************************!*\
  !*** ./node_modules/rc-pagination/es/KeyCode.js ***!
  \**************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */ __webpack_exports__['default'] = {
        ZERO: 48,
        NINE: 57,

        NUMPAD_ZERO: 96,
        NUMPAD_NINE: 105,

        BACKSPACE: 8,
        DELETE: 46,
        ENTER: 13,

        ARROW_UP: 38,
        ARROW_DOWN: 40,
      };

      /***/
    },

  /***/ './node_modules/rc-pagination/es/Options.js':
    /*!**************************************************!*\
  !*** ./node_modules/rc-pagination/es/Options.js ***!
  \**************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js',
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var _KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./KeyCode */ './node_modules/rc-pagination/es/KeyCode.js',
      );

      var Options = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(
          Options,
          _React$Component,
        );

        function Options(props) {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
            this,
            Options,
          );

          var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            (Options.__proto__ || Object.getPrototypeOf(Options)).call(
              this,
              props,
            ),
          );

          _this.buildOptionText = function(value) {
            return value + ' ' + _this.props.locale.items_per_page;
          };

          _this.changeSize = function(value) {
            _this.props.changeSize(Number(value));
          };

          _this.handleChange = function(e) {
            _this.setState({
              goInputText: e.target.value,
            });
          };

          _this.go = function(e) {
            var val = _this.state.goInputText;
            if (val === '') {
              return;
            }
            val = isNaN(val) ? _this.props.current : Number(val);
            if (
              e.keyCode ===
                _KeyCode__WEBPACK_IMPORTED_MODULE_6__['default'].ENTER ||
              e.type === 'click'
            ) {
              _this.setState({
                goInputText: '',
              });
              _this.props.quickGo(val);
            }
          };

          _this.state = {
            goInputText: '',
          };
          return _this;
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
          Options,
          [
            {
              key: 'render',
              value: function render() {
                var props = this.props;
                var state = this.state;
                var locale = props.locale;
                var prefixCls = props.rootPrefixCls + '-options';
                var changeSize = props.changeSize;
                var quickGo = props.quickGo;
                var goButton = props.goButton;
                var buildOptionText =
                  props.buildOptionText || this.buildOptionText;
                var Select = props.selectComponentClass;
                var changeSelect = null;
                var goInput = null;
                var gotoButton = null;

                if (!(changeSize || quickGo)) {
                  return null;
                }

                if (changeSize && Select) {
                  var Option = Select.Option;
                  var pageSize = props.pageSize || props.pageSizeOptions[0];
                  var options = props.pageSizeOptions.map(function(opt, i) {
                    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      Option,
                      { key: i, value: opt },
                      buildOptionText(opt),
                    );
                  });

                  changeSelect = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    Select,
                    {
                      prefixCls: props.selectPrefixCls,
                      showSearch: false,
                      className: prefixCls + '-size-changer',
                      optionLabelProp: 'children',
                      dropdownMatchSelectWidth: false,
                      value: pageSize.toString(),
                      onChange: this.changeSize,
                      getPopupContainer: function getPopupContainer(
                        triggerNode,
                      ) {
                        return triggerNode.parentNode;
                      },
                    },
                    options,
                  );
                }

                if (quickGo) {
                  if (goButton) {
                    if (typeof goButton === 'boolean') {
                      gotoButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        'button',
                        {
                          type: 'button',
                          onClick: this.go,
                          onKeyUp: this.go,
                        },
                        locale.jump_to_confirm,
                      );
                    } else {
                      gotoButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        'span',
                        {
                          onClick: this.go,
                          onKeyUp: this.go,
                        },
                        goButton,
                      );
                    }
                  }
                  goInput = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'div',
                    { className: prefixCls + '-quick-jumper' },
                    locale.jump_to,
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      'input',
                      {
                        type: 'text',
                        value: state.goInputText,
                        onChange: this.handleChange,
                        onKeyUp: this.go,
                      },
                    ),
                    locale.page,
                    gotoButton,
                  );
                }

                return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  'li',
                  { className: '' + prefixCls },
                  changeSelect,
                  goInput,
                );
              },
            },
          ],
        );

        return Options;
      })(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

      Options.propTypes = {
        changeSize: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        quickGo: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        selectComponentClass:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        current: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
        pageSizeOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        ),
        pageSize: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
        buildOptionText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        locale: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
      };
      Options.defaultProps = {
        pageSizeOptions: ['10', '20', '30', '40'],
      };

      /* harmony default export */ __webpack_exports__['default'] = Options;

      /***/
    },

  /***/ './node_modules/rc-pagination/es/Pager.js':
    /*!************************************************!*\
  !*** ./node_modules/rc-pagination/es/Pager.js ***!
  \************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__,
      );

      var Pager = function Pager(props) {
        var prefixCls = props.rootPrefixCls + '-item';
        var cls = prefixCls + ' ' + prefixCls + '-' + props.page;

        if (props.active) {
          cls = cls + ' ' + prefixCls + '-active';
        }

        if (props.className) {
          cls = cls + ' ' + props.className;
        }

        if (!props.page) {
          cls = cls + ' ' + prefixCls + '-disabled';
        }

        var handleClick = function handleClick() {
          props.onClick(props.page);
        };

        var handleKeyPress = function handleKeyPress(e) {
          props.onKeyPress(e, props.onClick, props.page);
        };

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'li',
          {
            title: props.showTitle ? props.page : null,
            className: cls,
            onClick: handleClick,
            onKeyPress: handleKeyPress,
            tabIndex: '0',
          },
          props.itemRender(
            props.page,
            'page',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'a',
              null,
              props.page,
            ),
          ),
        );
      };

      Pager.propTypes = {
        page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
        active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
        last: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
        locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        showTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
        rootPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
        onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
        itemRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
      };

      /* harmony default export */ __webpack_exports__['default'] = Pager;

      /***/
    },

  /***/ './node_modules/rc-pagination/es/Pagination.js':
    /*!*****************************************************!*\
  !*** ./node_modules/rc-pagination/es/Pagination.js ***!
  \*****************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js',
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var _Pager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./Pager */ './node_modules/rc-pagination/es/Pager.js',
      );
      /* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./Options */ './node_modules/rc-pagination/es/Options.js',
      );
      /* harmony import */ var _KeyCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ./KeyCode */ './node_modules/rc-pagination/es/KeyCode.js',
      );
      /* harmony import */ var _locale_zh_CN__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ./locale/zh_CN */ './node_modules/rc-pagination/es/locale/zh_CN.js',
      );
      /* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! react-lifecycles-compat */ './node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js',
      );

      function noop() {}

      function isInteger(value) {
        return (
          typeof value === 'number' &&
          isFinite(value) &&
          Math.floor(value) === value
        );
      }

      function defaultItemRender(page, type, element) {
        return element;
      }

      function calculatePage(p, state, props) {
        var pageSize = p;
        if (typeof pageSize === 'undefined') {
          pageSize = state.pageSize;
        }
        return Math.floor((props.total - 1) / pageSize) + 1;
      }

      var Pagination = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(
          Pagination,
          _React$Component,
        );

        function Pagination(props) {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
            this,
            Pagination,
          );

          var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(
            this,
            (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(
              this,
              props,
            ),
          );

          _initialiseProps.call(_this);

          var hasOnChange = props.onChange !== noop;
          var hasCurrent = 'current' in props;
          if (hasCurrent && !hasOnChange) {
            console.warn(
              'Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.',
            ); // eslint-disable-line
          }

          var current = props.defaultCurrent;
          if ('current' in props) {
            current = props.current;
          }

          var pageSize = props.defaultPageSize;
          if ('pageSize' in props) {
            pageSize = props.pageSize;
          }

          _this.state = {
            current: current,
            currentInputValue: current,
            pageSize: pageSize,
          };
          return _this;
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(
          Pagination,
          [
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(prevProps, prevState) {
                // When current page change, fix focused style of prev item
                // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
                var prefixCls = this.props.prefixCls;

                if (
                  prevState.current !== this.state.current &&
                  this.paginationNode
                ) {
                  var lastCurrentNode = this.paginationNode.querySelector(
                    '.' + prefixCls + '-item-' + prevState.current,
                  );
                  if (
                    lastCurrentNode &&
                    document.activeElement === lastCurrentNode
                  ) {
                    lastCurrentNode.blur();
                  }
                }
              },
            },
            {
              key: 'render',
              value: function render() {
                // When hideOnSinglePage is true and there is only 1 page, hide the pager
                if (
                  this.props.hideOnSinglePage === true &&
                  this.props.total <= this.state.pageSize
                ) {
                  return null;
                }

                var props = this.props;
                var locale = props.locale;

                var prefixCls = props.prefixCls;
                var allPages = calculatePage(undefined, this.state, this.props);
                var pagerList = [];
                var jumpPrev = null;
                var jumpNext = null;
                var firstPager = null;
                var lastPager = null;
                var gotoButton = null;

                var goButton =
                  props.showQuickJumper && props.showQuickJumper.goButton;
                var pageBufferSize = props.showLessItems ? 1 : 2;
                var _state = this.state,
                  current = _state.current,
                  pageSize = _state.pageSize;

                var prevPage = current - 1 > 0 ? current - 1 : 0;
                var nextPage = current + 1 < allPages ? current + 1 : allPages;

                var dataOrAriaAttributeProps = Object.keys(props).reduce(
                  function(prev, key) {
                    if (
                      key.substr(0, 5) === 'data-' ||
                      key.substr(0, 5) === 'aria-' ||
                      key === 'role'
                    ) {
                      prev[key] = props[key];
                    }
                    return prev;
                  },
                  {},
                );

                if (props.simple) {
                  if (goButton) {
                    if (typeof goButton === 'boolean') {
                      gotoButton = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'button',
                        {
                          type: 'button',
                          onClick: this.handleGoTO,
                          onKeyUp: this.handleGoTO,
                        },
                        locale.jump_to_confirm,
                      );
                    } else {
                      gotoButton = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'span',
                        {
                          onClick: this.handleGoTO,
                          onKeyUp: this.handleGoTO,
                        },
                        goButton,
                      );
                    }
                    gotoButton = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      'li',
                      {
                        title: props.showTitle
                          ? '' +
                            locale.jump_to +
                            this.state.current +
                            '/' +
                            allPages
                          : null,
                        className: prefixCls + '-simple-pager',
                      },
                      gotoButton,
                    );
                  }

                  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'ul',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                      {
                        className:
                          prefixCls +
                          ' ' +
                          prefixCls +
                          '-simple ' +
                          props.className,
                        style: props.style,
                        ref: this.savePaginationNode,
                      },
                      dataOrAriaAttributeProps,
                    ),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      'li',
                      {
                        title: props.showTitle ? locale.prev_page : null,
                        onClick: this.prev,
                        tabIndex: this.hasPrev() ? 0 : null,
                        onKeyPress: this.runIfEnterPrev,
                        className:
                          (this.hasPrev() ? '' : prefixCls + '-disabled') +
                          ' ' +
                          prefixCls +
                          '-prev',
                        'aria-disabled': !this.hasPrev(),
                      },
                      props.itemRender(
                        prevPage,
                        'prev',
                        this.getItemIcon(props.prevIcon),
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      'li',
                      {
                        title: props.showTitle
                          ? this.state.current + '/' + allPages
                          : null,
                        className: prefixCls + '-simple-pager',
                      },
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'input',
                        {
                          type: 'text',
                          value: this.state.currentInputValue,
                          onKeyDown: this.handleKeyDown,
                          onKeyUp: this.handleKeyUp,
                          onChange: this.handleKeyUp,
                          size: '3',
                        },
                      ),
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'span',
                        { className: prefixCls + '-slash' },
                        '\uFF0F',
                      ),
                      allPages,
                    ),
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      'li',
                      {
                        title: props.showTitle ? locale.next_page : null,
                        onClick: this.next,
                        tabIndex: this.hasPrev() ? 0 : null,
                        onKeyPress: this.runIfEnterNext,
                        className:
                          (this.hasNext() ? '' : prefixCls + '-disabled') +
                          ' ' +
                          prefixCls +
                          '-next',
                        'aria-disabled': !this.hasNext(),
                      },
                      props.itemRender(
                        nextPage,
                        'next',
                        this.getItemIcon(props.nextIcon),
                      ),
                    ),
                    gotoButton,
                  );
                }

                if (allPages <= 5 + pageBufferSize * 2) {
                  var pagerProps = {
                    locale: locale,
                    rootPrefixCls: prefixCls,
                    onClick: this.handleChange,
                    onKeyPress: this.runIfEnter,
                    showTitle: props.showTitle,
                    itemRender: props.itemRender,
                  };
                  if (!allPages) {
                    pagerList.push(
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        _Pager__WEBPACK_IMPORTED_MODULE_7__['default'],
                        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                          {},
                          pagerProps,
                          {
                            key: 'noPager',
                            page: allPages,
                            className: prefixCls + '-disabled',
                          },
                        ),
                      ),
                    );
                  }
                  for (var i = 1; i <= allPages; i++) {
                    var active = this.state.current === i;
                    pagerList.push(
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        _Pager__WEBPACK_IMPORTED_MODULE_7__['default'],
                        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                          {},
                          pagerProps,
                          {
                            key: i,
                            page: i,
                            active: active,
                          },
                        ),
                      ),
                    );
                  }
                } else {
                  var prevItemTitle = props.showLessItems
                    ? locale.prev_3
                    : locale.prev_5;
                  var nextItemTitle = props.showLessItems
                    ? locale.next_3
                    : locale.next_5;
                  if (props.showPrevNextJumpers) {
                    var jumpPrevClassString = prefixCls + '-jump-prev';
                    if (props.jumpPrevIcon) {
                      jumpPrevClassString +=
                        ' ' + prefixCls + '-jump-prev-custom-icon';
                    }
                    jumpPrev = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      'li',
                      {
                        title: props.showTitle ? prevItemTitle : null,
                        key: 'prev',
                        onClick: this.jumpPrev,
                        tabIndex: '0',
                        onKeyPress: this.runIfEnterJumpPrev,
                        className: jumpPrevClassString,
                      },
                      props.itemRender(
                        this.getJumpPrevPage(),
                        'jump-prev',
                        this.getItemIcon(props.jumpPrevIcon),
                      ),
                    );
                    var jumpNextClassString = prefixCls + '-jump-next';
                    if (props.jumpNextIcon) {
                      jumpNextClassString +=
                        ' ' + prefixCls + '-jump-next-custom-icon';
                    }
                    jumpNext = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      'li',
                      {
                        title: props.showTitle ? nextItemTitle : null,
                        key: 'next',
                        tabIndex: '0',
                        onClick: this.jumpNext,
                        onKeyPress: this.runIfEnterJumpNext,
                        className: jumpNextClassString,
                      },
                      props.itemRender(
                        this.getJumpNextPage(),
                        'jump-next',
                        this.getItemIcon(props.jumpNextIcon),
                      ),
                    );
                  }
                  lastPager = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _Pager__WEBPACK_IMPORTED_MODULE_7__['default'],
                    {
                      locale: props.locale,
                      last: true,
                      rootPrefixCls: prefixCls,
                      onClick: this.handleChange,
                      onKeyPress: this.runIfEnter,
                      key: allPages,
                      page: allPages,
                      active: false,
                      showTitle: props.showTitle,
                      itemRender: props.itemRender,
                    },
                  );
                  firstPager = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _Pager__WEBPACK_IMPORTED_MODULE_7__['default'],
                    {
                      locale: props.locale,
                      rootPrefixCls: prefixCls,
                      onClick: this.handleChange,
                      onKeyPress: this.runIfEnter,
                      key: 1,
                      page: 1,
                      active: false,
                      showTitle: props.showTitle,
                      itemRender: props.itemRender,
                    },
                  );

                  var left = Math.max(1, current - pageBufferSize);
                  var right = Math.min(current + pageBufferSize, allPages);

                  if (current - 1 <= pageBufferSize) {
                    right = 1 + pageBufferSize * 2;
                  }

                  if (allPages - current <= pageBufferSize) {
                    left = allPages - pageBufferSize * 2;
                  }

                  for (var _i = left; _i <= right; _i++) {
                    var _active = current === _i;
                    pagerList.push(
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        _Pager__WEBPACK_IMPORTED_MODULE_7__['default'],
                        {
                          locale: props.locale,
                          rootPrefixCls: prefixCls,
                          onClick: this.handleChange,
                          onKeyPress: this.runIfEnter,
                          key: _i,
                          page: _i,
                          active: _active,
                          showTitle: props.showTitle,
                          itemRender: props.itemRender,
                        },
                      ),
                    );
                  }

                  if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
                    pagerList[0] = react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(
                      pagerList[0],
                      {
                        className: prefixCls + '-item-after-jump-prev',
                      },
                    );
                    pagerList.unshift(jumpPrev);
                  }
                  if (
                    allPages - current >= pageBufferSize * 2 &&
                    current !== allPages - 2
                  ) {
                    pagerList[
                      pagerList.length - 1
                    ] = react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(
                      pagerList[pagerList.length - 1],
                      {
                        className: prefixCls + '-item-before-jump-next',
                      },
                    );
                    pagerList.push(jumpNext);
                  }

                  if (left !== 1) {
                    pagerList.unshift(firstPager);
                  }
                  if (right !== allPages) {
                    pagerList.push(lastPager);
                  }
                }

                var totalText = null;

                if (props.showTotal) {
                  totalText = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'li',
                    { className: prefixCls + '-total-text' },
                    props.showTotal(props.total, [
                      (current - 1) * pageSize + 1,
                      current * pageSize > props.total
                        ? props.total
                        : current * pageSize,
                    ]),
                  );
                }
                var prevDisabled = !this.hasPrev() || !allPages;
                var nextDisabled = !this.hasNext() || !allPages;
                return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  'ul',
                  babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {
                      className: prefixCls + ' ' + props.className,
                      style: props.style,
                      unselectable: 'unselectable',
                      ref: this.savePaginationNode,
                    },
                    dataOrAriaAttributeProps,
                  ),
                  totalText,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'li',
                    {
                      title: props.showTitle ? locale.prev_page : null,
                      onClick: this.prev,
                      tabIndex: prevDisabled ? null : 0,
                      onKeyPress: this.runIfEnterPrev,
                      className:
                        (!prevDisabled ? '' : prefixCls + '-disabled') +
                        ' ' +
                        prefixCls +
                        '-prev',
                      'aria-disabled': prevDisabled,
                    },
                    props.itemRender(
                      prevPage,
                      'prev',
                      this.getItemIcon(props.prevIcon),
                    ),
                  ),
                  pagerList,
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'li',
                    {
                      title: props.showTitle ? locale.next_page : null,
                      onClick: this.next,
                      tabIndex: nextDisabled ? null : 0,
                      onKeyPress: this.runIfEnterNext,
                      className:
                        (!nextDisabled ? '' : prefixCls + '-disabled') +
                        ' ' +
                        prefixCls +
                        '-next',
                      'aria-disabled': nextDisabled,
                    },
                    props.itemRender(
                      nextPage,
                      'next',
                      this.getItemIcon(props.nextIcon),
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _Options__WEBPACK_IMPORTED_MODULE_8__['default'],
                    {
                      locale: props.locale,
                      rootPrefixCls: prefixCls,
                      selectComponentClass: props.selectComponentClass,
                      selectPrefixCls: props.selectPrefixCls,
                      changeSize: this.props.showSizeChanger
                        ? this.changePageSize
                        : null,
                      current: this.state.current,
                      pageSize: this.state.pageSize,
                      pageSizeOptions: this.props.pageSizeOptions,
                      quickGo: this.props.showQuickJumper
                        ? this.handleChange
                        : null,
                      goButton: goButton,
                    },
                  ),
                );
              },
            },
          ],
          [
            {
              key: 'getDerivedStateFromProps',
              value: function getDerivedStateFromProps(props, prevState) {
                var newState = {};

                if ('current' in props) {
                  newState.current = props.current;

                  if (props.current !== prevState.current) {
                    newState.currentInputValue = newState.current;
                  }
                }

                if (
                  'pageSize' in props &&
                  props.pageSize !== prevState.pageSize
                ) {
                  var current = prevState.current;
                  var newCurrent = calculatePage(
                    props.pageSize,
                    prevState,
                    props,
                  );
                  current = current > newCurrent ? newCurrent : current;

                  if (!('current' in props)) {
                    newState.current = current;
                    newState.currentInputValue = current;
                  }
                  newState.pageSize = props.pageSize;
                }

                return newState;
              },

              /**
               * computed icon node that need to be rendered.
               * @param {React.ReactNode | React.ComponentType<PaginationProps>} icon received icon.
               * @returns {React.ReactNode}
               */
            },
          ],
        );

        return Pagination;
      })(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

      Pagination.propTypes = {
        prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        current: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
        defaultCurrent:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
        total: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
        pageSize: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
        defaultPageSize:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
        onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        hideOnSinglePage:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        showSizeChanger: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        showLessItems: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        onShowSizeChange:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        selectComponentClass:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        showPrevNextJumpers:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        showQuickJumper: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          ],
        ),
        showTitle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        pageSizeOptions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        ),
        showTotal: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        locale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
        style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
        itemRender: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        prevIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
        ]),
        nextIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
        ]),
        jumpPrevIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
          ],
        ),
        jumpNextIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
          ],
        ),
      };
      Pagination.defaultProps = {
        defaultCurrent: 1,
        total: 0,
        defaultPageSize: 10,
        onChange: noop,
        className: '',
        selectPrefixCls: 'rc-select',
        prefixCls: 'rc-pagination',
        selectComponentClass: null,
        hideOnSinglePage: false,
        showPrevNextJumpers: true,
        showQuickJumper: false,
        showSizeChanger: false,
        showLessItems: false,
        showTitle: true,
        onShowSizeChange: noop,
        locale: _locale_zh_CN__WEBPACK_IMPORTED_MODULE_10__['default'],
        style: {},
        itemRender: defaultItemRender,
      };

      var _initialiseProps = function _initialiseProps() {
        var _this2 = this;

        this.getJumpPrevPage = function() {
          return Math.max(
            1,
            _this2.state.current - (_this2.props.showLessItems ? 3 : 5),
          );
        };

        this.getJumpNextPage = function() {
          return Math.min(
            calculatePage(undefined, _this2.state, _this2.props),
            _this2.state.current + (_this2.props.showLessItems ? 3 : 5),
          );
        };

        this.getItemIcon = function(icon) {
          var prefixCls = _this2.props.prefixCls;

          var iconNode =
            icon ||
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('a', {
              className: prefixCls + '-item-link',
            });
          if (typeof icon === 'function') {
            iconNode = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              icon,
              babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                {},
                _this2.props,
              ),
            );
          }
          return iconNode;
        };

        this.savePaginationNode = function(node) {
          _this2.paginationNode = node;
        };

        this.isValid = function(page) {
          return isInteger(page) && page >= 1 && page !== _this2.state.current;
        };

        this.handleKeyDown = function(e) {
          if (
            e.keyCode ===
              _KeyCode__WEBPACK_IMPORTED_MODULE_9__['default'].ARROW_UP ||
            e.keyCode ===
              _KeyCode__WEBPACK_IMPORTED_MODULE_9__['default'].ARROW_DOWN
          ) {
            e.preventDefault();
          }
        };

        this.handleKeyUp = function(e) {
          var inputValue = e.target.value;
          var currentInputValue = _this2.state.currentInputValue;
          var value = void 0;

          if (inputValue === '') {
            value = inputValue;
          } else if (isNaN(Number(inputValue))) {
            value = currentInputValue;
          } else {
            value = Number(inputValue);
          }

          if (value !== currentInputValue) {
            _this2.setState({
              currentInputValue: value,
            });
          }

          if (
            e.keyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_9__['default'].ENTER
          ) {
            _this2.handleChange(value);
          } else if (
            e.keyCode ===
            _KeyCode__WEBPACK_IMPORTED_MODULE_9__['default'].ARROW_UP
          ) {
            _this2.handleChange(value - 1);
          } else if (
            e.keyCode ===
            _KeyCode__WEBPACK_IMPORTED_MODULE_9__['default'].ARROW_DOWN
          ) {
            _this2.handleChange(value + 1);
          }
        };

        this.changePageSize = function(size) {
          var current = _this2.state.current;
          var newCurrent = calculatePage(size, _this2.state, _this2.props);
          current = current > newCurrent ? newCurrent : current;
          // fix the issue:
          // Once 'total' is 0, 'current' in 'onShowSizeChange' is 0, which is not correct.
          if (newCurrent === 0) {
            current = _this2.state.current;
          }

          if (typeof size === 'number') {
            if (!('pageSize' in _this2.props)) {
              _this2.setState({
                pageSize: size,
              });
            }
            if (!('current' in _this2.props)) {
              _this2.setState({
                current: current,
                currentInputValue: current,
              });
            }
          }
          _this2.props.onShowSizeChange(current, size);
        };

        this.handleChange = function(p) {
          var page = p;
          if (_this2.isValid(page)) {
            var currentPage = calculatePage(
              undefined,
              _this2.state,
              _this2.props,
            );
            if (page > currentPage) {
              page = currentPage;
            }

            if (!('current' in _this2.props)) {
              _this2.setState({
                current: page,
                currentInputValue: page,
              });
            }

            var pageSize = _this2.state.pageSize;
            _this2.props.onChange(page, pageSize);

            return page;
          }

          return _this2.state.current;
        };

        this.prev = function() {
          if (_this2.hasPrev()) {
            _this2.handleChange(_this2.state.current - 1);
          }
        };

        this.next = function() {
          if (_this2.hasNext()) {
            _this2.handleChange(_this2.state.current + 1);
          }
        };

        this.jumpPrev = function() {
          _this2.handleChange(_this2.getJumpPrevPage());
        };

        this.jumpNext = function() {
          _this2.handleChange(_this2.getJumpNextPage());
        };

        this.hasPrev = function() {
          return _this2.state.current > 1;
        };

        this.hasNext = function() {
          return (
            _this2.state.current <
            calculatePage(undefined, _this2.state, _this2.props)
          );
        };

        this.runIfEnter = function(event, callback) {
          for (
            var _len = arguments.length,
              restParams = Array(_len > 2 ? _len - 2 : 0),
              _key = 2;
            _key < _len;
            _key++
          ) {
            restParams[_key - 2] = arguments[_key];
          }

          if (event.key === 'Enter' || event.charCode === 13) {
            callback.apply(undefined, restParams);
          }
        };

        this.runIfEnterPrev = function(e) {
          _this2.runIfEnter(e, _this2.prev);
        };

        this.runIfEnterNext = function(e) {
          _this2.runIfEnter(e, _this2.next);
        };

        this.runIfEnterJumpPrev = function(e) {
          _this2.runIfEnter(e, _this2.jumpPrev);
        };

        this.runIfEnterJumpNext = function(e) {
          _this2.runIfEnter(e, _this2.jumpNext);
        };

        this.handleGoTO = function(e) {
          if (
            e.keyCode ===
              _KeyCode__WEBPACK_IMPORTED_MODULE_9__['default'].ENTER ||
            e.type === 'click'
          ) {
            _this2.handleChange(_this2.state.currentInputValue);
          }
        };
      };

      Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_11__['polyfill'])(
        Pagination,
      );

      /* harmony default export */ __webpack_exports__['default'] = Pagination;

      /***/
    },

  /***/ './node_modules/rc-pagination/es/index.js':
    /*!************************************************!*\
  !*** ./node_modules/rc-pagination/es/index.js ***!
  \************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./Pagination */ './node_modules/rc-pagination/es/Pagination.js',
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return _Pagination__WEBPACK_IMPORTED_MODULE_0__['default'];
        },
      );

      /***/
    },

  /***/ './node_modules/rc-pagination/es/locale/zh_CN.js':
    /*!*******************************************************!*\
  !*** ./node_modules/rc-pagination/es/locale/zh_CN.js ***!
  \*******************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */ __webpack_exports__['default'] = {
        // Options.jsx
        items_per_page: '条/页',
        jump_to: '跳至',
        jump_to_confirm: '确定',
        page: '页',

        // Pagination.jsx
        prev_page: '上一页',
        next_page: '下一页',
        prev_5: '向前 5 页',
        next_5: '向后 5 页',
        prev_3: '向前 3 页',
        next_3: '向后 3 页',
      };

      /***/
    },

  /***/ './node_modules/rc-select/es/DropdownMenu.js':
    /*!***************************************************!*\
  !*** ./node_modules/rc-select/es/DropdownMenu.js ***!
  \***************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return DropdownMenu;
        },
      );
      /* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! dom-scroll-into-view */ './node_modules/dom-scroll-into-view/lib/index.js',
      );
      /* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! raf */ './node_modules/raf/index.js',
      );
      /* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        raf__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! rc-menu */ './node_modules/rc-menu/es/index.js',
      );
      /* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! rc-util/es/Children/toArray */ './node_modules/rc-util/es/Children/toArray.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! ./util */ './node_modules/rc-select/es/util.js',
      );
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
        if (call && (typeof call === 'object' || typeof call === 'function')) {
          return call;
        }
        return _assertThisInitialized(self);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        }
        return self;
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

      var DropdownMenu =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(DropdownMenu, _React$Component);

          function DropdownMenu(props) {
            var _this;

            _classCallCheck(this, DropdownMenu);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(DropdownMenu).call(this, props),
            );
            _this.rafInstance = {
              cancel: function cancel() {
                return null;
              },
            };
            _this.lastVisible = false;

            _this.scrollActiveItemToView = function() {
              // scroll into view
              var itemComponent = Object(
                react_dom__WEBPACK_IMPORTED_MODULE_6__['findDOMNode'],
              )(_this.firstActiveItem);
              var _this$props = _this.props,
                visible = _this$props.visible,
                firstActiveValue = _this$props.firstActiveValue;
              var value = _this.props.value;

              if (!itemComponent || !visible) {
                return;
              }

              var scrollIntoViewOpts = {
                onlyScrollIfNeeded: true,
              };

              if ((!value || value.length === 0) && firstActiveValue) {
                scrollIntoViewOpts.alignWithTop = true;
              } // Delay to scroll since current frame item position is not ready when pre view is by filter
              // https://github.com/ant-design/ant-design/issues/11268#issuecomment-406634462

              _this.rafInstance = raf__WEBPACK_IMPORTED_MODULE_2___default()(
                function() {
                  dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_0___default()(
                    itemComponent,
                    Object(
                      react_dom__WEBPACK_IMPORTED_MODULE_6__['findDOMNode'],
                    )(_this.menuRef),
                    scrollIntoViewOpts,
                  );
                },
              );
            };

            _this.renderMenu = function() {
              var _this$props2 = _this.props,
                menuItems = _this$props2.menuItems,
                menuItemSelectedIcon = _this$props2.menuItemSelectedIcon,
                defaultActiveFirstOption =
                  _this$props2.defaultActiveFirstOption,
                prefixCls = _this$props2.prefixCls,
                multiple = _this$props2.multiple,
                onMenuSelect = _this$props2.onMenuSelect,
                inputValue = _this$props2.inputValue,
                backfillValue = _this$props2.backfillValue,
                onMenuDeselect = _this$props2.onMenuDeselect,
                visible = _this$props2.visible;
              var firstActiveValue = _this.props.firstActiveValue;

              if (menuItems && menuItems.length) {
                var menuProps = {};

                if (multiple) {
                  menuProps.onDeselect = onMenuDeselect;
                  menuProps.onSelect = onMenuSelect;
                } else {
                  menuProps.onClick = onMenuSelect;
                }

                var value = _this.props.value;
                var selectedKeys = Object(
                  _util__WEBPACK_IMPORTED_MODULE_7__['getSelectKeys'],
                )(menuItems, value);
                var activeKeyProps = {};
                var defaultActiveFirst = defaultActiveFirstOption;
                var clonedMenuItems = menuItems;

                if (selectedKeys.length || firstActiveValue) {
                  if (visible && !_this.lastVisible) {
                    activeKeyProps.activeKey =
                      selectedKeys[0] || firstActiveValue;
                  } else if (!visible) {
                    // Do not trigger auto active since we already have selectedKeys
                    if (selectedKeys[0]) {
                      defaultActiveFirst = false;
                    }

                    activeKeyProps.activeKey = undefined;
                  }

                  var foundFirst = false; // set firstActiveItem via cloning menus
                  // for scroll into view

                  var clone = function clone(item) {
                    var key = item.key;

                    if (
                      (!foundFirst && selectedKeys.indexOf(key) !== -1) ||
                      (!foundFirst &&
                        !selectedKeys.length &&
                        firstActiveValue.indexOf(item.key) !== -1)
                    ) {
                      foundFirst = true;
                      return react__WEBPACK_IMPORTED_MODULE_5__['cloneElement'](
                        item,
                        {
                          ref: function ref(_ref) {
                            _this.firstActiveItem = _ref;
                          },
                        },
                      );
                    }

                    return item;
                  };

                  clonedMenuItems = menuItems.map(function(item) {
                    if (item.type.isMenuItemGroup) {
                      var children = Object(
                        rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__[
                          'default'
                        ],
                      )(item.props.children).map(clone);
                      return react__WEBPACK_IMPORTED_MODULE_5__['cloneElement'](
                        item,
                        {},
                        children,
                      );
                    }

                    return clone(item);
                  });
                } else {
                  // Clear firstActiveItem when dropdown menu items was empty
                  // Avoid `Unable to find node on an unmounted component`
                  // https://github.com/ant-design/ant-design/issues/10774
                  _this.firstActiveItem = null;
                } // clear activeKey when inputValue change

                var lastValue = value && value[value.length - 1];

                if (
                  inputValue !== _this.lastInputValue &&
                  (!lastValue || lastValue !== backfillValue)
                ) {
                  activeKeyProps.activeKey = '';
                }

                return react__WEBPACK_IMPORTED_MODULE_5__['createElement'](
                  rc_menu__WEBPACK_IMPORTED_MODULE_3__['default'],
                  _extends(
                    {
                      ref: _this.saveMenuRef,
                      style: _this.props.dropdownMenuStyle,
                      defaultActiveFirst: defaultActiveFirst,
                      role: 'listbox',
                      itemIcon: multiple ? menuItemSelectedIcon : null,
                    },
                    activeKeyProps,
                    {
                      multiple: multiple,
                    },
                    menuProps,
                    {
                      selectedKeys: selectedKeys,
                      prefixCls: ''.concat(prefixCls, '-menu'),
                    },
                  ),
                  clonedMenuItems,
                );
              }

              return null;
            };

            _this.lastInputValue = props.inputValue;
            _this.saveMenuRef = Object(
              _util__WEBPACK_IMPORTED_MODULE_7__['saveRef'],
            )(_assertThisInitialized(_this), 'menuRef');
            return _this;
          }

          _createClass(DropdownMenu, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                this.scrollActiveItemToView();
                this.lastVisible = this.props.visible;
              },
            },
            {
              key: 'shouldComponentUpdate',
              value: function shouldComponentUpdate(nextProps) {
                if (!nextProps.visible) {
                  this.lastVisible = false;
                } // freeze when hide

                return (
                  (this.props.visible && !nextProps.visible) ||
                  nextProps.visible ||
                  nextProps.inputValue !== this.props.inputValue
                );
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(prevProps) {
                var props = this.props;

                if (!prevProps.visible && props.visible) {
                  this.scrollActiveItemToView();
                }

                this.lastVisible = props.visible;
                this.lastInputValue = props.inputValue;
              },
            },
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                if (this.rafInstance && this.rafInstance.cancel) {
                  this.rafInstance.cancel();
                }
              },
            },
            {
              key: 'render',
              value: function render() {
                var renderMenu = this.renderMenu();
                return renderMenu
                  ? react__WEBPACK_IMPORTED_MODULE_5__['createElement'](
                      'div',
                      {
                        style: {
                          overflow: 'auto',
                          transform: 'translateZ(0)',
                        },
                        id: this.props.ariaId,
                        onFocus: this.props.onPopupFocus,
                        onMouseDown:
                          _util__WEBPACK_IMPORTED_MODULE_7__[
                            'preventDefaultEvent'
                          ],
                        onScroll: this.props.onPopupScroll,
                      },
                      renderMenu,
                    )
                  : null;
              },
            },
          ]);

          return DropdownMenu;
        })(react__WEBPACK_IMPORTED_MODULE_5__['Component']);

      DropdownMenu.displayName = 'DropdownMenu';
      DropdownMenu.propTypes = {
        ariaId: prop_types__WEBPACK_IMPORTED_MODULE_1__['string'],
        defaultActiveFirstOption:
          prop_types__WEBPACK_IMPORTED_MODULE_1__['bool'],
        value: prop_types__WEBPACK_IMPORTED_MODULE_1__['any'],
        dropdownMenuStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__['object'],
        multiple: prop_types__WEBPACK_IMPORTED_MODULE_1__['bool'],
        onPopupFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__['func'],
        onPopupScroll: prop_types__WEBPACK_IMPORTED_MODULE_1__['func'],
        onMenuDeSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__['func'],
        onMenuSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__['func'],
        prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1__['string'],
        menuItems: prop_types__WEBPACK_IMPORTED_MODULE_1__['any'],
        inputValue: prop_types__WEBPACK_IMPORTED_MODULE_1__['string'],
        visible: prop_types__WEBPACK_IMPORTED_MODULE_1__['bool'],
        firstActiveValue: prop_types__WEBPACK_IMPORTED_MODULE_1__['string'],
        menuItemSelectedIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__[
          'oneOfType'
        ]([
          prop_types__WEBPACK_IMPORTED_MODULE_1__['func'],
          prop_types__WEBPACK_IMPORTED_MODULE_1__['node'],
        ]),
      };

      /***/
    },

  /***/ './node_modules/rc-select/es/OptGroup.js':
    /*!***********************************************!*\
  !*** ./node_modules/rc-select/es/OptGroup.js ***!
  \***********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return OptGroup;
        },
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === 'object' || typeof call === 'function')) {
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

      var OptGroup =
        /*#__PURE__*/
        (function(_Component) {
          _inherits(OptGroup, _Component);

          function OptGroup() {
            _classCallCheck(this, OptGroup);

            return _possibleConstructorReturn(
              this,
              _getPrototypeOf(OptGroup).apply(this, arguments),
            );
          }

          return OptGroup;
        })(react__WEBPACK_IMPORTED_MODULE_0__['Component']);

      OptGroup.isSelectOptGroup = true;

      /***/
    },

  /***/ './node_modules/rc-select/es/Option.js':
    /*!*********************************************!*\
  !*** ./node_modules/rc-select/es/Option.js ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return Option;
        },
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__,
      );
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === 'object' || typeof call === 'function')) {
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

      var Option =
        /*#__PURE__*/
        (function(_Component) {
          _inherits(Option, _Component);

          function Option() {
            _classCallCheck(this, Option);

            return _possibleConstructorReturn(
              this,
              _getPrototypeOf(Option).apply(this, arguments),
            );
          }

          return Option;
        })(react__WEBPACK_IMPORTED_MODULE_1__['Component']);

      Option.propTypes = {
        value: prop_types__WEBPACK_IMPORTED_MODULE_0__['oneOfType']([
          prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
          prop_types__WEBPACK_IMPORTED_MODULE_0__['number'],
        ]),
      };
      Option.isSelectOption = true;

      /***/
    },

  /***/ './node_modules/rc-select/es/PropTypes.js':
    /*!************************************************!*\
  !*** ./node_modules/rc-select/es/PropTypes.js ***!
  \************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_0__,
      );
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

      function propsValueType() {
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }

        var props = args[0],
          propName = args[1],
          componentName = args[2],
          rest = args.slice(3);
        var basicType = prop_types__WEBPACK_IMPORTED_MODULE_0__['oneOfType']([
          prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
          prop_types__WEBPACK_IMPORTED_MODULE_0__['number'],
        ]);
        var labelInValueShape = prop_types__WEBPACK_IMPORTED_MODULE_0__[
          'shape'
        ]({
          key: basicType.isRequired,
          label: prop_types__WEBPACK_IMPORTED_MODULE_0__['node'],
        });

        if (props.labelInValue) {
          var validate = prop_types__WEBPACK_IMPORTED_MODULE_0__['oneOfType']([
            prop_types__WEBPACK_IMPORTED_MODULE_0__['arrayOf'](
              labelInValueShape,
            ),
            labelInValueShape,
          ]);
          var error = validate.apply(
            void 0,
            [props, propName, componentName].concat(_toConsumableArray(rest)),
          );

          if (error) {
            return new Error(
              'Invalid prop `'
                .concat(propName, '` supplied to `')
                .concat(componentName, '`, ') +
                'when you set `labelInValue` to `true`, `'.concat(
                  propName,
                  '` should in ',
                ) +
                'shape of `{ key: string | number, label?: ReactNode }`.',
            );
          }
        } else if (
          (props.mode === 'multiple' ||
            props.mode === 'tags' ||
            props.multiple ||
            props.tags) &&
          props[propName] === ''
        ) {
          return new Error(
            'Invalid prop `'
              .concat(propName, '` of type `string` supplied to `')
              .concat(componentName, '`, ') +
              'expected `array` when `multiple` or `tags` is `true`.',
          );
        } else {
          var _validate = prop_types__WEBPACK_IMPORTED_MODULE_0__['oneOfType']([
            prop_types__WEBPACK_IMPORTED_MODULE_0__['arrayOf'](basicType),
            basicType,
          ]);

          return _validate.apply(
            void 0,
            [props, propName, componentName].concat(_toConsumableArray(rest)),
          );
        }

        return null;
      }

      var SelectPropTypes = {
        id: prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
        defaultActiveFirstOption:
          prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        multiple: prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        filterOption: prop_types__WEBPACK_IMPORTED_MODULE_0__['any'],
        children: prop_types__WEBPACK_IMPORTED_MODULE_0__['any'],
        showSearch: prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        disabled: prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        allowClear: prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        showArrow: prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        tags: prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
        className: prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
        transitionName: prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
        optionLabelProp: prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
        optionFilterProp: prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
        animation: prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
        choiceTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
        open: prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        defaultOpen: prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        onChange: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        onBlur: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        onFocus: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        onSearch: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        onPopupScroll: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        onInputKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        placeholder: prop_types__WEBPACK_IMPORTED_MODULE_0__['any'],
        onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        labelInValue: prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        loading: prop_types__WEBPACK_IMPORTED_MODULE_0__['bool'],
        value: propsValueType,
        defaultValue: propsValueType,
        dropdownStyle: prop_types__WEBPACK_IMPORTED_MODULE_0__['object'],
        maxTagTextLength: prop_types__WEBPACK_IMPORTED_MODULE_0__['number'],
        maxTagCount: prop_types__WEBPACK_IMPORTED_MODULE_0__['number'],
        maxTagPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_0__['oneOfType'](
          [
            prop_types__WEBPACK_IMPORTED_MODULE_0__['node'],
            prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
          ],
        ),
        tokenSeparators: prop_types__WEBPACK_IMPORTED_MODULE_0__['arrayOf'](
          prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
        ),
        getInputElement: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
        showAction: prop_types__WEBPACK_IMPORTED_MODULE_0__['arrayOf'](
          prop_types__WEBPACK_IMPORTED_MODULE_0__['string'],
        ),
        clearIcon: prop_types__WEBPACK_IMPORTED_MODULE_0__['node'],
        inputIcon: prop_types__WEBPACK_IMPORTED_MODULE_0__['node'],
        removeIcon: prop_types__WEBPACK_IMPORTED_MODULE_0__['node'],
        menuItemSelectedIcon: prop_types__WEBPACK_IMPORTED_MODULE_0__[
          'oneOfType'
        ]([
          prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
          prop_types__WEBPACK_IMPORTED_MODULE_0__['node'],
        ]),
        dropdownRender: prop_types__WEBPACK_IMPORTED_MODULE_0__['func'],
      };
      /* harmony default export */ __webpack_exports__[
        'default'
      ] = SelectPropTypes;

      /***/
    },

  /***/ './node_modules/rc-select/es/Select.js':
    /*!*********************************************!*\
  !*** ./node_modules/rc-select/es/Select.js ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! classnames */ './node_modules/classnames/index.js',
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        classnames__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! component-classes */ './node_modules/component-classes/index.js',
      );
      /* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        component_classes__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! rc-animate */ './node_modules/rc-animate/es/Animate.js',
      );
      /* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! rc-menu */ './node_modules/rc-menu/es/index.js',
      );
      /* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! rc-util/es/Children/toArray */ './node_modules/rc-util/es/Children/toArray.js',
      );
      /* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! rc-util/es/KeyCode */ './node_modules/rc-util/es/KeyCode.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_7__,
      );
      /* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! react-lifecycles-compat */ './node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js',
      );
      /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! warning */ './node_modules/rc-select/node_modules/warning/warning.js',
      );
      /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        warning__WEBPACK_IMPORTED_MODULE_9__,
      );
      /* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ./Option */ './node_modules/rc-select/es/Option.js',
      );
      /* harmony import */ var _PropTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ./PropTypes */ './node_modules/rc-select/es/PropTypes.js',
      );
      /* harmony import */ var _SelectTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ./SelectTrigger */ './node_modules/rc-select/es/SelectTrigger.js',
      );
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! ./util */ './node_modules/rc-select/es/util.js',
      );
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
        if (call && (typeof call === 'object' || typeof call === 'function')) {
          return call;
        }
        return _assertThisInitialized(self);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        }
        return self;
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

      var SELECT_EMPTY_VALUE_KEY = 'RC_SELECT_EMPTY_VALUE_KEY';

      var noop = function noop() {
        return null;
      };

      function chaining() {
        for (
          var _len = arguments.length, fns = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          fns[_key] = arguments[_key];
        }

        return function() {
          for (
            var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2] = arguments[_key2];
          }

          // tslint:disable-next-line:prefer-for-of
          for (var i = 0; i < fns.length; i++) {
            if (fns[i] && typeof fns[i] === 'function') {
              fns[i].apply(chaining, args);
            }
          }
        };
      }

      var Select =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(Select, _React$Component);

          function Select(props) {
            var _this;

            _classCallCheck(this, Select);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(Select).call(this, props),
            );
            _this.inputRef = null;
            _this.inputMirrorRef = null;
            _this.topCtrlRef = null;
            _this.selectTriggerRef = null;
            _this.rootRef = null;
            _this.selectionRef = null;
            _this.dropdownContainer = null;
            _this.blurTimer = null;
            _this.focusTimer = null; // tslint:disable-next-line:variable-name

            _this._focused = false; // tslint:disable-next-line:variable-name

            _this._mouseDown = false; // tslint:disable-next-line:variable-name

            _this._options = []; // tslint:disable-next-line:variable-name

            _this._empty = false;

            _this.onInputChange = function(event) {
              var tokenSeparators = _this.props.tokenSeparators;
              var val = event.target.value;

              if (
                Object(_util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'])(
                  _this.props,
                ) &&
                tokenSeparators.length &&
                Object(
                  _util__WEBPACK_IMPORTED_MODULE_13__['includesSeparators'],
                )(val, tokenSeparators)
              ) {
                var nextValue = _this.getValueByInput(val);

                if (nextValue !== undefined) {
                  _this.fireChange(nextValue);
                }

                _this.setOpenState(false, true);

                _this.setInputValue('', false);

                return;
              }

              _this.setInputValue(val);

              _this.setState({
                open: true,
              });

              if (
                Object(_util__WEBPACK_IMPORTED_MODULE_13__['isCombobox'])(
                  _this.props,
                )
              ) {
                _this.fireChange([val]);
              }
            };

            _this.onDropdownVisibleChange = function(open) {
              if (open && !_this._focused) {
                _this.clearBlurTime();

                _this.timeoutFocus();

                _this._focused = true;

                _this.updateFocusClassName();
              }

              _this.setOpenState(open);
            }; // combobox ignore

            _this.onKeyDown = function(event) {
              var open = _this.state.open;
              var disabled = _this.props.disabled;

              if (disabled) {
                return;
              }

              var keyCode = event.keyCode;

              if (open && !_this.getInputDOMNode()) {
                _this.onInputKeyDown(event);
              } else if (
                keyCode ===
                  rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__['default']
                    .ENTER ||
                keyCode ===
                  rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__['default']
                    .DOWN
              ) {
                if (!open) {
                  _this.setOpenState(true);
                }

                event.preventDefault();
              } else if (
                keyCode ===
                rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__['default'].SPACE
              ) {
                // Not block space if popup is shown
                if (!open) {
                  _this.setOpenState(true);

                  event.preventDefault();
                }
              }
            };

            _this.onInputKeyDown = function(event) {
              var _this$props = _this.props,
                disabled = _this$props.disabled,
                combobox = _this$props.combobox;

              if (disabled) {
                return;
              }

              var state = _this.state;

              var isRealOpen = _this.getRealOpenState(state); // magic code

              var keyCode = event.keyCode;

              if (
                Object(_util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'])(
                  _this.props,
                ) &&
                !event.target.value &&
                keyCode ===
                  rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__['default']
                    .BACKSPACE
              ) {
                event.preventDefault();
                var value = state.value;

                if (value.length) {
                  _this.removeSelected(value[value.length - 1]);
                }

                return;
              }

              if (
                keyCode ===
                rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__['default'].DOWN
              ) {
                if (!state.open) {
                  _this.openIfHasChildren();

                  event.preventDefault();
                  event.stopPropagation();
                  return;
                }
              } else if (
                keyCode ===
                  rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__['default']
                    .ENTER &&
                state.open
              ) {
                // Aviod trigger form submit when select item
                // https://github.com/ant-design/ant-design/issues/10861
                // https://github.com/ant-design/ant-design/issues/14544
                if (isRealOpen || !combobox) {
                  event.preventDefault();
                }
              } else if (
                keyCode ===
                rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__['default'].ESC
              ) {
                if (state.open) {
                  _this.setOpenState(false);

                  event.preventDefault();
                  event.stopPropagation();
                }

                return;
              }

              if (isRealOpen && _this.selectTriggerRef) {
                var menu = _this.selectTriggerRef.getInnerMenu();

                if (menu && menu.onKeyDown(event, _this.handleBackfill)) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            };

            _this.onMenuSelect = function(_ref) {
              var item = _ref.item;

              if (!item) {
                return;
              }

              var value = _this.state.value;
              var props = _this.props;
              var selectedValue = Object(
                _util__WEBPACK_IMPORTED_MODULE_13__['getValuePropValue'],
              )(item);
              var lastValue = value[value.length - 1];

              _this.fireSelect(selectedValue);

              if (
                Object(_util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'])(
                  props,
                )
              ) {
                if (
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__[
                      'findIndexInValueBySingleValue'
                    ],
                  )(value, selectedValue) !== -1
                ) {
                  return;
                }

                value = value.concat([selectedValue]);
              } else {
                if (
                  !Object(_util__WEBPACK_IMPORTED_MODULE_13__['isCombobox'])(
                    props,
                  ) &&
                  lastValue !== undefined &&
                  lastValue === selectedValue &&
                  selectedValue !== _this.state.backfillValue
                ) {
                  _this.setOpenState(false, true);

                  return;
                }

                value = [selectedValue];

                _this.setOpenState(false, true);
              }

              _this.fireChange(value);

              var inputValue = Object(
                _util__WEBPACK_IMPORTED_MODULE_13__['isCombobox'],
              )(props)
                ? Object(_util__WEBPACK_IMPORTED_MODULE_13__['getPropValue'])(
                    item,
                    props.optionLabelProp,
                  )
                : '';

              if (props.autoClearSearchValue) {
                _this.setInputValue(inputValue, false);
              }
            };

            _this.onMenuDeselect = function(_ref2) {
              var item = _ref2.item,
                domEvent = _ref2.domEvent;

              if (
                domEvent.type === 'keydown' &&
                domEvent.keyCode ===
                  rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__['default']
                    .ENTER
              ) {
                _this.removeSelected(
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['getValuePropValue'],
                  )(item),
                );

                return;
              }

              if (domEvent.type === 'click') {
                _this.removeSelected(
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['getValuePropValue'],
                  )(item),
                );
              }

              var props = _this.props;

              if (props.autoClearSearchValue) {
                _this.setInputValue('', false);
              }
            };

            _this.onArrowClick = function(e) {
              e.stopPropagation();
              e.preventDefault();

              if (!_this.props.disabled) {
                _this.setOpenState(!_this.state.open, !_this.state.open);
              }
            };

            _this.onPlaceholderClick = function() {
              if (_this.getInputDOMNode && _this.getInputDOMNode()) {
                _this.getInputDOMNode().focus();
              }
            };

            _this.onOuterFocus = function(e) {
              if (_this.props.disabled) {
                e.preventDefault();
                return;
              }

              _this.clearBlurTime();

              if (
                !Object(
                  _util__WEBPACK_IMPORTED_MODULE_13__[
                    'isMultipleOrTagsOrCombobox'
                  ],
                )(_this.props) &&
                e.target === _this.getInputDOMNode()
              ) {
                return;
              }

              if (_this._focused) {
                return;
              }

              _this._focused = true;

              _this.updateFocusClassName(); // only effect multiple or tag mode

              if (
                !Object(
                  _util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'],
                )(_this.props) ||
                !_this._mouseDown
              ) {
                _this.timeoutFocus();
              }
            };

            _this.onPopupFocus = function() {
              // fix ie scrollbar, focus element again
              _this.maybeFocus(true, true);
            };

            _this.onOuterBlur = function(e) {
              if (_this.props.disabled) {
                e.preventDefault();
                return;
              }

              _this.blurTimer = window.setTimeout(function() {
                _this._focused = false;

                _this.updateFocusClassName();

                var props = _this.props;
                var value = _this.state.value;
                var inputValue = _this.state.inputValue;

                if (
                  Object(_util__WEBPACK_IMPORTED_MODULE_13__['isSingleMode'])(
                    props,
                  ) &&
                  props.showSearch &&
                  inputValue &&
                  props.defaultActiveFirstOption
                ) {
                  var options = _this._options || [];

                  if (options.length) {
                    var firstOption = Object(
                      _util__WEBPACK_IMPORTED_MODULE_13__['findFirstMenuItem'],
                    )(options);

                    if (firstOption) {
                      value = [
                        Object(
                          _util__WEBPACK_IMPORTED_MODULE_13__[
                            'getValuePropValue'
                          ],
                        )(firstOption),
                      ];

                      _this.fireChange(value);
                    }
                  }
                } else if (
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'],
                  )(props) &&
                  inputValue
                ) {
                  if (_this._mouseDown) {
                    // need update dropmenu when not blur
                    _this.setInputValue('');
                  } else {
                    // why not use setState?
                    // https://github.com/ant-design/ant-design/issues/14262
                    _this.state.inputValue = '';

                    if (_this.getInputDOMNode && _this.getInputDOMNode()) {
                      _this.getInputDOMNode().value = '';
                    }
                  }

                  var tmpValue = _this.getValueByInput(inputValue);

                  if (tmpValue !== undefined) {
                    value = tmpValue;

                    _this.fireChange(value);
                  }
                } // if click the rest space of Select in multiple mode

                if (
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'],
                  )(props) &&
                  _this._mouseDown
                ) {
                  _this.maybeFocus(true, true);

                  _this._mouseDown = false;
                  return;
                }

                _this.setOpenState(false);

                if (props.onBlur) {
                  props.onBlur(_this.getVLForOnChange(value));
                }
              }, 10);
            };

            _this.onClearSelection = function(event) {
              var props = _this.props;
              var state = _this.state;

              if (props.disabled) {
                return;
              }

              var inputValue = state.inputValue;
              var value = state.value;
              event.stopPropagation();

              if (inputValue || value.length) {
                if (value.length) {
                  _this.fireChange([]);
                }

                _this.setOpenState(false, true);

                if (inputValue) {
                  _this.setInputValue('');
                }
              }
            };

            _this.onChoiceAnimationLeave = function() {
              _this.forcePopupAlign();
            };

            _this.getOptionInfoBySingleValue = function(value, optionsInfo) {
              var info;
              optionsInfo = optionsInfo || _this.state.optionsInfo;

              if (
                optionsInfo[
                  Object(_util__WEBPACK_IMPORTED_MODULE_13__['getMapKey'])(
                    value,
                  )
                ]
              ) {
                info =
                  optionsInfo[
                    Object(_util__WEBPACK_IMPORTED_MODULE_13__['getMapKey'])(
                      value,
                    )
                  ];
              }

              if (info) {
                return info;
              }

              var defaultLabel = value;

              if (_this.props.labelInValue) {
                var label = Object(
                  _util__WEBPACK_IMPORTED_MODULE_13__['getLabelFromPropsValue'],
                )(_this.props.value, value);

                if (label !== undefined) {
                  defaultLabel = label;
                }
              }

              var defaultInfo = {
                option: react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                  _Option__WEBPACK_IMPORTED_MODULE_10__['default'],
                  {
                    value: value,
                    key: value,
                  },
                  value,
                ),
                value: value,
                label: defaultLabel,
              };
              return defaultInfo;
            };

            _this.getOptionBySingleValue = function(value) {
              var _this$getOptionInfoBy = _this.getOptionInfoBySingleValue(
                  value,
                ),
                option = _this$getOptionInfoBy.option;

              return option;
            };

            _this.getOptionsBySingleValue = function(values) {
              return values.map(function(value) {
                return _this.getOptionBySingleValue(value);
              });
            };

            _this.getValueByLabel = function(label) {
              if (label === undefined) {
                return null;
              }

              var value = null;
              Object.keys(_this.state.optionsInfo).forEach(function(key) {
                var info = _this.state.optionsInfo[key];
                var disabled = info.disabled;

                if (disabled) {
                  return;
                }

                var oldLable = Object(
                  _util__WEBPACK_IMPORTED_MODULE_13__['toArray'],
                )(info.label);

                if (oldLable && oldLable.join('') === label) {
                  value = info.value;
                }
              });
              return value;
            };

            _this.getVLBySingleValue = function(value) {
              if (_this.props.labelInValue) {
                return {
                  key: value,
                  label: _this.getLabelBySingleValue(value),
                };
              }

              return value;
            };

            _this.getVLForOnChange = function(vlsS) {
              var vls = vlsS;

              if (vls !== undefined) {
                if (!_this.props.labelInValue) {
                  vls = vls.map(function(v) {
                    return v;
                  });
                } else {
                  vls = vls.map(function(vl) {
                    return {
                      key: vl,
                      label: _this.getLabelBySingleValue(vl),
                    };
                  });
                }

                return Object(
                  _util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'],
                )(_this.props)
                  ? vls
                  : vls[0];
              }

              return vls;
            };

            _this.getLabelBySingleValue = function(value, optionsInfo) {
              var _this$getOptionInfoBy2 = _this.getOptionInfoBySingleValue(
                  value,
                  optionsInfo,
                ),
                label = _this$getOptionInfoBy2.label;

              return label;
            };

            _this.getDropdownContainer = function() {
              if (!_this.dropdownContainer) {
                _this.dropdownContainer = document.createElement('div');
                document.body.appendChild(_this.dropdownContainer);
              }

              return _this.dropdownContainer;
            };

            _this.getPlaceholderElement = function() {
              var props = _this.props;
              var state = _this.state;
              var hidden = false;

              if (state.inputValue) {
                hidden = true;
              }

              var value = state.value;

              if (value.length) {
                hidden = true;
              }

              if (
                Object(_util__WEBPACK_IMPORTED_MODULE_13__['isCombobox'])(
                  props,
                ) &&
                value.length === 1 &&
                state.value &&
                !state.value[0]
              ) {
                hidden = false;
              }

              var placeholder = props.placeholder;

              if (placeholder) {
                return react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                  'div',
                  _extends(
                    {
                      onMouseDown:
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'preventDefaultEvent'
                        ],
                      style: _extends(
                        {
                          display: hidden ? 'none' : 'block',
                        },
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'UNSELECTABLE_STYLE'
                        ],
                      ),
                    },
                    _util__WEBPACK_IMPORTED_MODULE_13__[
                      'UNSELECTABLE_ATTRIBUTE'
                    ],
                    {
                      onClick: _this.onPlaceholderClick,
                      className: ''.concat(
                        props.prefixCls,
                        '-selection__placeholder',
                      ),
                    },
                  ),
                  placeholder,
                );
              }

              return null;
            };

            _this.getInputElement = function() {
              var props = _this.props;
              var defaultInput = react__WEBPACK_IMPORTED_MODULE_6__[
                'createElement'
              ]('input', {
                id: props.id,
                autoComplete: 'off',
              }); // tslint:disable-next-line:typedef-whitespace

              var inputElement = props.getInputElement
                ? props.getInputElement()
                : defaultInput;
              var inputCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                inputElement.props.className,
                _defineProperty(
                  {},
                  ''.concat(props.prefixCls, '-search__field'),
                  true,
                ),
              ); // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
              // Add space to the end of the inputValue as the width measurement tolerance

              return react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                'div',
                {
                  className: ''.concat(props.prefixCls, '-search__field__wrap'),
                },
                react__WEBPACK_IMPORTED_MODULE_6__['cloneElement'](
                  inputElement,
                  {
                    ref: _this.saveInputRef,
                    onChange: _this.onInputChange,
                    onKeyDown: chaining(
                      _this.onInputKeyDown,
                      inputElement.props.onKeyDown,
                      _this.props.onInputKeyDown,
                    ),
                    value: _this.state.inputValue,
                    disabled: props.disabled,
                    className: inputCls,
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                  'span',
                  {
                    ref: _this.saveInputMirrorRef,
                    className: ''.concat(
                      props.prefixCls,
                      '-search__field__mirror',
                    ),
                  },
                  _this.state.inputValue,
                  '\xA0',
                ),
              );
            };

            _this.getInputDOMNode = function() {
              return _this.topCtrlRef
                ? _this.topCtrlRef.querySelector(
                    'input,textarea,div[contentEditable]',
                  )
                : _this.inputRef;
            };

            _this.getInputMirrorDOMNode = function() {
              return _this.inputMirrorRef;
            };

            _this.getPopupDOMNode = function() {
              if (_this.selectTriggerRef) {
                return _this.selectTriggerRef.getPopupDOMNode();
              }
            };

            _this.getPopupMenuComponent = function() {
              if (_this.selectTriggerRef) {
                return _this.selectTriggerRef.getInnerMenu();
              }
            };

            _this.setOpenState = function(open, needFocus) {
              var props = _this.props;
              var state = _this.state;

              if (state.open === open) {
                _this.maybeFocus(open, !!needFocus);

                return;
              }

              if (_this.props.onDropdownVisibleChange) {
                _this.props.onDropdownVisibleChange(open);
              }

              var nextState = {
                open: open,
                backfillValue: '',
              }; // clear search input value when open is false in singleMode.

              if (
                !open &&
                Object(_util__WEBPACK_IMPORTED_MODULE_13__['isSingleMode'])(
                  props,
                ) &&
                props.showSearch
              ) {
                _this.setInputValue('', false);
              }

              if (!open) {
                _this.maybeFocus(open, !!needFocus);
              }

              _this.setState(
                _extends(
                  {
                    open: open,
                  },
                  nextState,
                ),
                function() {
                  if (open) {
                    _this.maybeFocus(open, !!needFocus);
                  }
                },
              );
            };

            _this.setInputValue = function(inputValue) {
              var fireSearch =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : true;

              if (inputValue !== _this.state.inputValue) {
                _this.setState(
                  {
                    inputValue: inputValue,
                  },
                  _this.forcePopupAlign,
                );

                if (fireSearch && _this.props.onSearch) {
                  _this.props.onSearch(inputValue);
                }
              }
            };

            _this.getValueByInput = function(str) {
              var _this$props2 = _this.props,
                multiple = _this$props2.multiple,
                tokenSeparators = _this$props2.tokenSeparators;
              var nextValue = _this.state.value;
              var hasNewValue = false;
              Object(_util__WEBPACK_IMPORTED_MODULE_13__['splitBySeparators'])(
                str,
                tokenSeparators,
              ).forEach(function(label) {
                var selectedValue = [label];

                if (multiple) {
                  var value = _this.getValueByLabel(label);

                  if (
                    value &&
                    Object(
                      _util__WEBPACK_IMPORTED_MODULE_13__[
                        'findIndexInValueBySingleValue'
                      ],
                    )(nextValue, value) === -1
                  ) {
                    nextValue = nextValue.concat(value);
                    hasNewValue = true;

                    _this.fireSelect(value);
                  }
                } else if (
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__[
                      'findIndexInValueBySingleValue'
                    ],
                  )(nextValue, label) === -1
                ) {
                  nextValue = nextValue.concat(selectedValue);
                  hasNewValue = true;

                  _this.fireSelect(label);
                }
              });
              return hasNewValue ? nextValue : undefined;
            };

            _this.getRealOpenState = function(state) {
              // tslint:disable-next-line:variable-name
              var _open = _this.props.open;

              if (typeof _open === 'boolean') {
                return _open;
              }

              var open = (state || _this.state).open;
              var options = _this._options || [];

              if (
                Object(
                  _util__WEBPACK_IMPORTED_MODULE_13__[
                    'isMultipleOrTagsOrCombobox'
                  ],
                )(_this.props) ||
                !_this.props.showSearch
              ) {
                if (open && !options.length) {
                  open = false;
                }
              }

              return open;
            };

            _this.markMouseDown = function() {
              _this._mouseDown = true;
            };

            _this.markMouseLeave = function() {
              _this._mouseDown = false;
            };

            _this.handleBackfill = function(item) {
              if (
                !_this.props.backfill ||
                !(
                  Object(_util__WEBPACK_IMPORTED_MODULE_13__['isSingleMode'])(
                    _this.props,
                  ) ||
                  Object(_util__WEBPACK_IMPORTED_MODULE_13__['isCombobox'])(
                    _this.props,
                  )
                )
              ) {
                return;
              }

              var key = Object(
                _util__WEBPACK_IMPORTED_MODULE_13__['getValuePropValue'],
              )(item);

              if (
                Object(_util__WEBPACK_IMPORTED_MODULE_13__['isCombobox'])(
                  _this.props,
                )
              ) {
                _this.setInputValue(key, false);
              }

              _this.setState({
                value: [key],
                backfillValue: key,
              });
            };

            _this.filterOption = function(input, child) {
              var defaultFilter =
                arguments.length > 2 && arguments[2] !== undefined
                  ? arguments[2]
                  : _util__WEBPACK_IMPORTED_MODULE_13__['defaultFilterFn'];
              var value = _this.state.value;
              var lastValue = value[value.length - 1];

              if (
                !input ||
                (lastValue && lastValue === _this.state.backfillValue)
              ) {
                return true;
              }

              var filterFn = _this.props.filterOption;

              if ('filterOption' in _this.props) {
                if (filterFn === true) {
                  filterFn = defaultFilter.bind(_assertThisInitialized(_this));
                }
              } else {
                filterFn = defaultFilter.bind(_assertThisInitialized(_this));
              }

              if (!filterFn) {
                return true;
              } else if (typeof filterFn === 'function') {
                return filterFn.call(
                  _assertThisInitialized(_this),
                  input,
                  child,
                );
              } else if (child.props.disabled) {
                return false;
              }

              return true;
            };

            _this.timeoutFocus = function() {
              if (_this.focusTimer) {
                _this.clearFocusTime();
              }

              _this.focusTimer = window.setTimeout(function() {
                if (_this.props.onFocus) {
                  _this.props.onFocus();
                }
              }, 10);
            };

            _this.clearFocusTime = function() {
              if (_this.focusTimer) {
                clearTimeout(_this.focusTimer);
                _this.focusTimer = null;
              }
            };

            _this.clearBlurTime = function() {
              if (_this.blurTimer) {
                clearTimeout(_this.blurTimer);
                _this.blurTimer = null;
              }
            };

            _this.updateFocusClassName = function() {
              var rootRef = _this.rootRef;
              var props = _this.props; // avoid setState and its side effect

              if (_this._focused) {
                component_classes__WEBPACK_IMPORTED_MODULE_1___default()(
                  rootRef,
                ).add(''.concat(props.prefixCls, '-focused'));
              } else {
                component_classes__WEBPACK_IMPORTED_MODULE_1___default()(
                  rootRef,
                ).remove(''.concat(props.prefixCls, '-focused'));
              }
            };

            _this.maybeFocus = function(open, needFocus) {
              if (needFocus || open) {
                var input = _this.getInputDOMNode();

                var _document = document,
                  activeElement = _document.activeElement;

                if (
                  input &&
                  (open ||
                    Object(
                      _util__WEBPACK_IMPORTED_MODULE_13__[
                        'isMultipleOrTagsOrCombobox'
                      ],
                    )(_this.props))
                ) {
                  if (activeElement !== input) {
                    input.focus();
                    _this._focused = true;
                  }
                } else if (
                  activeElement !== _this.selectionRef &&
                  _this.selectionRef
                ) {
                  _this.selectionRef.focus();

                  _this._focused = true;
                }
              }
            };

            _this.removeSelected = function(selectedKey, e) {
              var props = _this.props;

              if (props.disabled || _this.isChildDisabled(selectedKey)) {
                return;
              } // Do not trigger Trigger popup

              if (e && e.stopPropagation) {
                e.stopPropagation();
              }

              var oldValue = _this.state.value;
              var value = oldValue.filter(function(singleValue) {
                return singleValue !== selectedKey;
              });
              var canMultiple = Object(
                _util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'],
              )(props);

              if (canMultiple) {
                var event = selectedKey;

                if (props.labelInValue) {
                  event = {
                    key: selectedKey,
                    label: _this.getLabelBySingleValue(selectedKey),
                  };
                }

                if (props.onDeselect) {
                  props.onDeselect(
                    event,
                    _this.getOptionBySingleValue(selectedKey),
                  );
                }
              }

              _this.fireChange(value);
            };

            _this.openIfHasChildren = function() {
              var props = _this.props;

              if (
                react__WEBPACK_IMPORTED_MODULE_6__['Children'].count(
                  props.children,
                ) ||
                Object(_util__WEBPACK_IMPORTED_MODULE_13__['isSingleMode'])(
                  props,
                )
              ) {
                _this.setOpenState(true);
              }
            };

            _this.fireSelect = function(value) {
              if (_this.props.onSelect) {
                _this.props.onSelect(
                  _this.getVLBySingleValue(value),
                  _this.getOptionBySingleValue(value),
                );
              }
            };

            _this.fireChange = function(value) {
              var props = _this.props;

              if (!('value' in props)) {
                _this.setState(
                  {
                    value: value,
                  },
                  _this.forcePopupAlign,
                );
              }

              var vls = _this.getVLForOnChange(value);

              var options = _this.getOptionsBySingleValue(value);

              if (props.onChange) {
                props.onChange(
                  vls,
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'],
                  )(_this.props)
                    ? options
                    : options[0],
                );
              }
            };

            _this.isChildDisabled = function(key) {
              return Object(
                rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__[
                  'default'
                ],
              )(_this.props.children).some(function(child) {
                var childValue = Object(
                  _util__WEBPACK_IMPORTED_MODULE_13__['getValuePropValue'],
                )(child);
                return (
                  childValue === key && child.props && child.props.disabled
                );
              });
            };

            _this.forcePopupAlign = function() {
              if (!_this.state.open) {
                return;
              }

              if (_this.selectTriggerRef && _this.selectTriggerRef.triggerRef) {
                _this.selectTriggerRef.triggerRef.forcePopupAlign();
              }
            };

            _this.renderFilterOptions = function() {
              var inputValue = _this.state.inputValue;
              var _this$props3 = _this.props,
                children = _this$props3.children,
                tags = _this$props3.tags,
                notFoundContent = _this$props3.notFoundContent;
              var menuItems = [];
              var childrenKeys = [];
              var empty = false;

              var options = _this.renderFilterOptionsFromChildren(
                children,
                childrenKeys,
                menuItems,
              );

              if (tags) {
                // tags value must be string
                var value = _this.state.value;
                value = value.filter(function(singleValue) {
                  return (
                    childrenKeys.indexOf(singleValue) === -1 &&
                    (!inputValue ||
                      String(singleValue).indexOf(String(inputValue)) > -1)
                  );
                }); // sort by length

                value.sort(function(val1, val2) {
                  return val1.length - val2.length;
                });
                value.forEach(function(singleValue) {
                  var key = singleValue;
                  var menuItem = react__WEBPACK_IMPORTED_MODULE_6__[
                    'createElement'
                  ](
                    rc_menu__WEBPACK_IMPORTED_MODULE_3__['Item'],
                    {
                      style:
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'UNSELECTABLE_STYLE'
                        ],
                      role: 'option',
                      attribute:
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'UNSELECTABLE_ATTRIBUTE'
                        ],
                      value: key,
                      key: key,
                    },
                    key,
                  );
                  options.push(menuItem);
                  menuItems.push(menuItem);
                }); // ref: https://github.com/ant-design/ant-design/issues/14090

                if (
                  inputValue &&
                  menuItems.every(function(option) {
                    return (
                      Object(
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'getValuePropValue'
                        ],
                      )(option) !== inputValue
                    );
                  })
                ) {
                  options.unshift(
                    react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                      rc_menu__WEBPACK_IMPORTED_MODULE_3__['Item'],
                      {
                        style:
                          _util__WEBPACK_IMPORTED_MODULE_13__[
                            'UNSELECTABLE_STYLE'
                          ],
                        role: 'option',
                        attribute:
                          _util__WEBPACK_IMPORTED_MODULE_13__[
                            'UNSELECTABLE_ATTRIBUTE'
                          ],
                        value: inputValue,
                        key: inputValue,
                      },
                      inputValue,
                    ),
                  );
                }
              }

              if (!options.length && notFoundContent) {
                empty = true;
                options = [
                  react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                    rc_menu__WEBPACK_IMPORTED_MODULE_3__['Item'],
                    {
                      style:
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'UNSELECTABLE_STYLE'
                        ],
                      attribute:
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'UNSELECTABLE_ATTRIBUTE'
                        ],
                      disabled: true,
                      role: 'option',
                      value: 'NOT_FOUND',
                      key: 'NOT_FOUND',
                    },
                    notFoundContent,
                  ),
                ];
              }

              return {
                empty: empty,
                options: options,
              };
            };

            _this.renderFilterOptionsFromChildren = function(
              children,
              childrenKeys,
              menuItems,
            ) {
              var sel = [];
              var props = _this.props;
              var inputValue = _this.state.inputValue;
              var tags = props.tags;
              react__WEBPACK_IMPORTED_MODULE_6__['Children'].forEach(
                children,
                function(child) {
                  if (!child) {
                    return;
                  }

                  var type = child.type;

                  if (type.isSelectOptGroup) {
                    var label = child.props.label;
                    var key = child.key;

                    if (!key && typeof label === 'string') {
                      key = label;
                    } else if (!label && key) {
                      label = key;
                    } // Match option group label

                    if (inputValue && _this.filterOption(inputValue, child)) {
                      var innerItems = Object(
                        rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__[
                          'default'
                        ],
                      )(child.props.children).map(function(subChild) {
                        var childValueSub =
                          Object(
                            _util__WEBPACK_IMPORTED_MODULE_13__[
                              'getValuePropValue'
                            ],
                          )(subChild) || subChild.key;
                        return react__WEBPACK_IMPORTED_MODULE_6__[
                          'createElement'
                        ](
                          rc_menu__WEBPACK_IMPORTED_MODULE_3__['Item'],
                          _extends(
                            {
                              key: childValueSub,
                              value: childValueSub,
                            },
                            subChild.props,
                          ),
                        );
                      });
                      sel.push(
                        react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                          rc_menu__WEBPACK_IMPORTED_MODULE_3__['ItemGroup'],
                          {
                            key: key,
                            title: label,
                          },
                          innerItems,
                        ),
                      ); // Not match
                    } else {
                      var _innerItems = _this.renderFilterOptionsFromChildren(
                        child.props.children,
                        childrenKeys,
                        menuItems,
                      );

                      if (_innerItems.length) {
                        sel.push(
                          react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                            rc_menu__WEBPACK_IMPORTED_MODULE_3__['ItemGroup'],
                            {
                              key: key,
                              title: label,
                            },
                            _innerItems,
                          ),
                        );
                      }
                    }

                    return;
                  }

                  warning__WEBPACK_IMPORTED_MODULE_9___default()(
                    type.isSelectOption,
                    'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' +
                      'instead of `'.concat(
                        type.name || type.displayName || child.type,
                        '`.',
                      ),
                  );
                  var childValue = Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['getValuePropValue'],
                  )(child);
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['validateOptionValue'],
                  )(childValue, _this.props);

                  if (_this.filterOption(inputValue, child)) {
                    var menuItem = react__WEBPACK_IMPORTED_MODULE_6__[
                      'createElement'
                    ](
                      rc_menu__WEBPACK_IMPORTED_MODULE_3__['Item'],
                      _extends(
                        {
                          style:
                            _util__WEBPACK_IMPORTED_MODULE_13__[
                              'UNSELECTABLE_STYLE'
                            ],
                          attribute:
                            _util__WEBPACK_IMPORTED_MODULE_13__[
                              'UNSELECTABLE_ATTRIBUTE'
                            ],
                          value: childValue,
                          key: childValue,
                          role: 'option',
                        },
                        child.props,
                      ),
                    );
                    sel.push(menuItem);
                    menuItems.push(menuItem);
                  }

                  if (tags) {
                    childrenKeys.push(childValue);
                  }
                },
              );
              return sel;
            };

            _this.renderTopControlNode = function() {
              var _this$state = _this.state,
                open = _this$state.open,
                inputValue = _this$state.inputValue;
              var value = _this.state.value;
              var props = _this.props;
              var choiceTransitionName = props.choiceTransitionName,
                prefixCls = props.prefixCls,
                maxTagTextLength = props.maxTagTextLength,
                maxTagCount = props.maxTagCount,
                showSearch = props.showSearch,
                removeIcon = props.removeIcon;
              var maxTagPlaceholder = props.maxTagPlaceholder;
              var className = ''.concat(prefixCls, '-selection__rendered'); // search input is inside topControlNode in single, multiple & combobox. 2016/04/13

              var innerNode = null;

              if (
                Object(_util__WEBPACK_IMPORTED_MODULE_13__['isSingleMode'])(
                  props,
                )
              ) {
                var selectedValue = null;

                if (value.length) {
                  var showSelectedValue = false;
                  var opacity = 1;

                  if (!showSearch) {
                    showSelectedValue = true;
                  } else if (open) {
                    showSelectedValue = !inputValue;

                    if (showSelectedValue) {
                      opacity = 0.4;
                    }
                  } else {
                    showSelectedValue = true;
                  }

                  var singleValue = value[0];

                  var _this$getOptionInfoBy3 = _this.getOptionInfoBySingleValue(
                      singleValue,
                    ),
                    label = _this$getOptionInfoBy3.label,
                    title = _this$getOptionInfoBy3.title;

                  selectedValue = react__WEBPACK_IMPORTED_MODULE_6__[
                    'createElement'
                  ](
                    'div',
                    {
                      key: 'value',
                      className: ''.concat(
                        prefixCls,
                        '-selection-selected-value',
                      ),
                      title: Object(
                        _util__WEBPACK_IMPORTED_MODULE_13__['toTitle'],
                      )(title || label),
                      style: {
                        display: showSelectedValue ? 'block' : 'none',
                        opacity: opacity,
                      },
                    },
                    label,
                  );
                }

                if (!showSearch) {
                  innerNode = [selectedValue];
                } else {
                  innerNode = [
                    selectedValue,
                    react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                      'div',
                      {
                        className: ''
                          .concat(prefixCls, '-search ')
                          .concat(prefixCls, '-search--inline'),
                        key: 'input',
                        style: {
                          display: open ? 'block' : 'none',
                        },
                      },
                      _this.getInputElement(),
                    ),
                  ];
                }
              } else {
                var selectedValueNodes = [];
                var limitedCountValue = value;
                var maxTagPlaceholderEl;

                if (maxTagCount !== undefined && value.length > maxTagCount) {
                  limitedCountValue = limitedCountValue.slice(0, maxTagCount);

                  var omittedValues = _this.getVLForOnChange(
                    value.slice(maxTagCount, value.length),
                  );

                  var content = '+ '.concat(value.length - maxTagCount, ' ...');

                  if (maxTagPlaceholder) {
                    content =
                      typeof maxTagPlaceholder === 'function'
                        ? maxTagPlaceholder(omittedValues)
                        : maxTagPlaceholder;
                  }

                  maxTagPlaceholderEl = react__WEBPACK_IMPORTED_MODULE_6__[
                    'createElement'
                  ](
                    'li',
                    _extends(
                      {
                        style:
                          _util__WEBPACK_IMPORTED_MODULE_13__[
                            'UNSELECTABLE_STYLE'
                          ],
                      },
                      _util__WEBPACK_IMPORTED_MODULE_13__[
                        'UNSELECTABLE_ATTRIBUTE'
                      ],
                      {
                        role: 'presentation',
                        onMouseDown:
                          _util__WEBPACK_IMPORTED_MODULE_13__[
                            'preventDefaultEvent'
                          ],
                        className: ''
                          .concat(prefixCls, '-selection__choice ')
                          .concat(prefixCls, '-selection__choice__disabled'),
                        key: 'maxTagPlaceholder',
                        title: Object(
                          _util__WEBPACK_IMPORTED_MODULE_13__['toTitle'],
                        )(content),
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                      'div',
                      {
                        className: ''.concat(
                          prefixCls,
                          '-selection__choice__content',
                        ),
                      },
                      content,
                    ),
                  );
                }

                if (
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'],
                  )(props)
                ) {
                  selectedValueNodes = limitedCountValue.map(function(
                    singleValue,
                  ) {
                    var info = _this.getOptionInfoBySingleValue(singleValue);

                    var content = info.label;
                    var title = info.title || content;

                    if (
                      maxTagTextLength &&
                      typeof content === 'string' &&
                      content.length > maxTagTextLength
                    ) {
                      content = ''.concat(
                        content.slice(0, maxTagTextLength),
                        '...',
                      );
                    }

                    var disabled = _this.isChildDisabled(singleValue);

                    var choiceClassName = disabled
                      ? ''
                          .concat(prefixCls, '-selection__choice ')
                          .concat(prefixCls, '-selection__choice__disabled')
                      : ''.concat(prefixCls, '-selection__choice');
                    return react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                      'li',
                      _extends(
                        {
                          style:
                            _util__WEBPACK_IMPORTED_MODULE_13__[
                              'UNSELECTABLE_STYLE'
                            ],
                        },
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'UNSELECTABLE_ATTRIBUTE'
                        ],
                        {
                          onMouseDown:
                            _util__WEBPACK_IMPORTED_MODULE_13__[
                              'preventDefaultEvent'
                            ],
                          className: choiceClassName,
                          role: 'presentation',
                          key: singleValue || SELECT_EMPTY_VALUE_KEY,
                          title: Object(
                            _util__WEBPACK_IMPORTED_MODULE_13__['toTitle'],
                          )(title),
                        },
                      ),
                      react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                        'div',
                        {
                          className: ''.concat(
                            prefixCls,
                            '-selection__choice__content',
                          ),
                        },
                        content,
                      ),
                      disabled
                        ? null
                        : react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                            'span',
                            {
                              onClick: function onClick(event) {
                                _this.removeSelected(singleValue, event);
                              },
                              className: ''.concat(
                                prefixCls,
                                '-selection__choice__remove',
                              ),
                            },
                            removeIcon ||
                              react__WEBPACK_IMPORTED_MODULE_6__[
                                'createElement'
                              ](
                                'i',
                                {
                                  className: ''.concat(
                                    prefixCls,
                                    '-selection__choice__remove-icon',
                                  ),
                                },
                                '\xD7',
                              ),
                          ),
                    );
                  });
                }

                if (maxTagPlaceholderEl) {
                  selectedValueNodes.push(maxTagPlaceholderEl);
                }

                selectedValueNodes.push(
                  react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                    'li',
                    {
                      className: ''
                        .concat(prefixCls, '-search ')
                        .concat(prefixCls, '-search--inline'),
                      key: '__input',
                    },
                    _this.getInputElement(),
                  ),
                );

                if (
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'],
                  )(props) &&
                  choiceTransitionName
                ) {
                  innerNode = react__WEBPACK_IMPORTED_MODULE_6__[
                    'createElement'
                  ](
                    rc_animate__WEBPACK_IMPORTED_MODULE_2__['default'],
                    {
                      onLeave: _this.onChoiceAnimationLeave,
                      component: 'ul',
                      transitionName: choiceTransitionName,
                    },
                    selectedValueNodes,
                  );
                } else {
                  innerNode = react__WEBPACK_IMPORTED_MODULE_6__[
                    'createElement'
                  ]('ul', null, selectedValueNodes);
                }
              }

              return react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                'div',
                {
                  className: className,
                  ref: _this.saveTopCtrlRef,
                },
                _this.getPlaceholderElement(),
                innerNode,
              );
            };

            var optionsInfo = Select.getOptionsInfoFromProps(props);

            if (props.tags && typeof props.filterOption !== 'function') {
              var isDisabledExist = Object.keys(optionsInfo).some(function(
                key,
              ) {
                return optionsInfo[key].disabled;
              });
              warning__WEBPACK_IMPORTED_MODULE_9___default()(
                !isDisabledExist,
                'Please avoid setting option to disabled in tags mode since user can always type text as tag.',
              );
            }

            _this.state = {
              value: Select.getValueFromProps(props, true),
              inputValue: props.combobox
                ? Select.getInputValueForCombobox(props, optionsInfo, true)
                : '',
              open: props.defaultOpen,
              optionsInfo: optionsInfo,
              backfillValue: '',
              // a flag for aviod redundant getOptionsInfoFromProps call
              skipBuildOptionsInfo: true,
              ariaId: '',
            };
            _this.saveInputRef = Object(
              _util__WEBPACK_IMPORTED_MODULE_13__['saveRef'],
            )(_assertThisInitialized(_this), 'inputRef');
            _this.saveInputMirrorRef = Object(
              _util__WEBPACK_IMPORTED_MODULE_13__['saveRef'],
            )(_assertThisInitialized(_this), 'inputMirrorRef');
            _this.saveTopCtrlRef = Object(
              _util__WEBPACK_IMPORTED_MODULE_13__['saveRef'],
            )(_assertThisInitialized(_this), 'topCtrlRef');
            _this.saveSelectTriggerRef = Object(
              _util__WEBPACK_IMPORTED_MODULE_13__['saveRef'],
            )(_assertThisInitialized(_this), 'selectTriggerRef');
            _this.saveRootRef = Object(
              _util__WEBPACK_IMPORTED_MODULE_13__['saveRef'],
            )(_assertThisInitialized(_this), 'rootRef');
            _this.saveSelectionRef = Object(
              _util__WEBPACK_IMPORTED_MODULE_13__['saveRef'],
            )(_assertThisInitialized(_this), 'selectionRef');
            return _this;
          }

          _createClass(Select, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                // when defaultOpen is true, we should auto focus search input
                // https://github.com/ant-design/ant-design/issues/14254
                if (this.props.autoFocus || this.state.open) {
                  this.focus();
                }

                this.setState({
                  ariaId: Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['generateUUID'],
                  )(),
                });
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate() {
                if (
                  Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'],
                  )(this.props)
                ) {
                  var inputNode = this.getInputDOMNode();
                  var mirrorNode = this.getInputMirrorDOMNode();

                  if (inputNode && inputNode.value && mirrorNode) {
                    inputNode.style.width = '';
                    inputNode.style.width = ''.concat(
                      mirrorNode.clientWidth,
                      'px',
                    );
                  } else if (inputNode) {
                    inputNode.style.width = '';
                  }
                }

                this.forcePopupAlign();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                this.clearFocusTime();
                this.clearBlurTime();

                if (this.dropdownContainer) {
                  react_dom__WEBPACK_IMPORTED_MODULE_7__[
                    'unmountComponentAtNode'
                  ](this.dropdownContainer);
                  document.body.removeChild(this.dropdownContainer);
                  this.dropdownContainer = null;
                }
              },
            },
            {
              key: 'focus',
              value: function focus() {
                if (
                  Object(_util__WEBPACK_IMPORTED_MODULE_13__['isSingleMode'])(
                    this.props,
                  ) &&
                  this.selectionRef
                ) {
                  this.selectionRef.focus();
                } else if (this.getInputDOMNode()) {
                  this.getInputDOMNode().focus();
                }
              },
            },
            {
              key: 'blur',
              value: function blur() {
                if (
                  Object(_util__WEBPACK_IMPORTED_MODULE_13__['isSingleMode'])(
                    this.props,
                  ) &&
                  this.selectionRef
                ) {
                  this.selectionRef.blur();
                } else if (this.getInputDOMNode()) {
                  this.getInputDOMNode().blur();
                }
              },
            },
            {
              key: 'renderArrow',
              value: function renderArrow(multiple) {
                // showArrow : Set to true if not multiple by default but keep set value.
                var _this$props4 = this.props,
                  _this$props4$showArro = _this$props4.showArrow,
                  showArrow =
                    _this$props4$showArro === void 0
                      ? !multiple
                      : _this$props4$showArro,
                  loading = _this$props4.loading,
                  inputIcon = _this$props4.inputIcon,
                  prefixCls = _this$props4.prefixCls;

                if (!showArrow && !loading) {
                  return null;
                } // if loading  have loading icon

                var defaultIcon = loading
                  ? react__WEBPACK_IMPORTED_MODULE_6__['createElement']('i', {
                      className: ''.concat(prefixCls, '-arrow-loading'),
                    })
                  : react__WEBPACK_IMPORTED_MODULE_6__['createElement']('i', {
                      className: ''.concat(prefixCls, '-arrow-icon'),
                    });
                return react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                  'span',
                  _extends(
                    {
                      key: 'arrow',
                      className: ''.concat(prefixCls, '-arrow'),
                      style:
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'UNSELECTABLE_STYLE'
                        ],
                    },
                    _util__WEBPACK_IMPORTED_MODULE_13__[
                      'UNSELECTABLE_ATTRIBUTE'
                    ],
                    {
                      onClick: this.onArrowClick,
                    },
                  ),
                  inputIcon || defaultIcon,
                );
              },
            },
            {
              key: 'renderClear',
              value: function renderClear() {
                var _this$props5 = this.props,
                  prefixCls = _this$props5.prefixCls,
                  allowClear = _this$props5.allowClear,
                  clearIcon = _this$props5.clearIcon;
                var inputValue = this.state.inputValue;
                var value = this.state.value;
                var clear = react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                  'span',
                  _extends(
                    {
                      key: 'clear',
                      className: ''.concat(prefixCls, '-selection__clear'),
                      onMouseDown:
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'preventDefaultEvent'
                        ],
                      style:
                        _util__WEBPACK_IMPORTED_MODULE_13__[
                          'UNSELECTABLE_STYLE'
                        ],
                    },
                    _util__WEBPACK_IMPORTED_MODULE_13__[
                      'UNSELECTABLE_ATTRIBUTE'
                    ],
                    {
                      onClick: this.onClearSelection,
                    },
                  ),
                  clearIcon ||
                    react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                      'i',
                      {
                        className: ''.concat(
                          prefixCls,
                          '-selection__clear-icon',
                        ),
                      },
                      '\xD7',
                    ),
                );

                if (!allowClear) {
                  return null;
                }

                if (
                  Object(_util__WEBPACK_IMPORTED_MODULE_13__['isCombobox'])(
                    this.props,
                  )
                ) {
                  if (inputValue) {
                    return clear;
                  }

                  return null;
                }

                if (inputValue || value.length) {
                  return clear;
                }

                return null;
              },
            },
            {
              key: 'render',
              value: function render() {
                var _rootCls;

                var props = this.props;
                var multiple = Object(
                  _util__WEBPACK_IMPORTED_MODULE_13__['isMultipleOrTags'],
                )(props); // Default set showArrow to true if not set (not set directly in defaultProps to handle multiple case)

                var _props$showArrow = props.showArrow,
                  showArrow =
                    _props$showArrow === void 0 ? true : _props$showArrow;
                var state = this.state;
                var className = props.className,
                  disabled = props.disabled,
                  prefixCls = props.prefixCls,
                  loading = props.loading;
                var ctrlNode = this.renderTopControlNode();
                var _this$state2 = this.state,
                  open = _this$state2.open,
                  ariaId = _this$state2.ariaId;

                if (open) {
                  var filterOptions = this.renderFilterOptions();
                  this._empty = filterOptions.empty;
                  this._options = filterOptions.options;
                }

                var realOpen = this.getRealOpenState();
                var empty = this._empty;
                var options = this._options || [];
                var dataOrAriaAttributeProps = {};
                Object.keys(props).forEach(function(key) {
                  if (
                    Object.prototype.hasOwnProperty.call(props, key) &&
                    (key.substr(0, 5) === 'data-' ||
                      key.substr(0, 5) === 'aria-' ||
                      key === 'role')
                  ) {
                    dataOrAriaAttributeProps[key] = props[key];
                  }
                }); // for (const key in props) {
                //   if (
                //     Object.prototype.hasOwnProperty.call(props, key) &&
                //     (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')
                //   ) {
                //     dataOrAriaAttributeProps[key] = props[key];
                //   }
                // }

                var extraSelectionProps = _extends(
                  {},
                  dataOrAriaAttributeProps,
                );

                if (
                  !Object(
                    _util__WEBPACK_IMPORTED_MODULE_13__[
                      'isMultipleOrTagsOrCombobox'
                    ],
                  )(props)
                ) {
                  extraSelectionProps = _extends({}, extraSelectionProps, {
                    onKeyDown: this.onKeyDown,
                    tabIndex: props.disabled ? -1 : props.tabIndex,
                  });
                }

                var rootCls = ((_rootCls = {}),
                _defineProperty(_rootCls, className, !!className),
                _defineProperty(_rootCls, prefixCls, 1),
                _defineProperty(_rootCls, ''.concat(prefixCls, '-open'), open),
                _defineProperty(
                  _rootCls,
                  ''.concat(prefixCls, '-focused'),
                  open || !!this._focused,
                ),
                _defineProperty(
                  _rootCls,
                  ''.concat(prefixCls, '-combobox'),
                  Object(_util__WEBPACK_IMPORTED_MODULE_13__['isCombobox'])(
                    props,
                  ),
                ),
                _defineProperty(
                  _rootCls,
                  ''.concat(prefixCls, '-disabled'),
                  disabled,
                ),
                _defineProperty(
                  _rootCls,
                  ''.concat(prefixCls, '-enabled'),
                  !disabled,
                ),
                _defineProperty(
                  _rootCls,
                  ''.concat(prefixCls, '-allow-clear'),
                  !!props.allowClear,
                ),
                _defineProperty(
                  _rootCls,
                  ''.concat(prefixCls, '-no-arrow'),
                  !showArrow,
                ),
                _defineProperty(
                  _rootCls,
                  ''.concat(prefixCls, '-loading'),
                  !!loading,
                ),
                _rootCls);
                return react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                  _SelectTrigger__WEBPACK_IMPORTED_MODULE_12__['default'],
                  {
                    onPopupFocus: this.onPopupFocus,
                    onMouseEnter: this.props.onMouseEnter,
                    onMouseLeave: this.props.onMouseLeave,
                    dropdownAlign: props.dropdownAlign,
                    dropdownClassName: props.dropdownClassName,
                    dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
                    defaultActiveFirstOption: props.defaultActiveFirstOption,
                    dropdownMenuStyle: props.dropdownMenuStyle,
                    transitionName: props.transitionName,
                    animation: props.animation,
                    prefixCls: props.prefixCls,
                    dropdownStyle: props.dropdownStyle,
                    combobox: props.combobox,
                    showSearch: props.showSearch,
                    options: options,
                    empty: empty,
                    multiple: multiple,
                    disabled: disabled,
                    visible: realOpen,
                    inputValue: state.inputValue,
                    value: state.value,
                    backfillValue: state.backfillValue,
                    firstActiveValue: props.firstActiveValue,
                    onDropdownVisibleChange: this.onDropdownVisibleChange,
                    getPopupContainer: props.getPopupContainer,
                    onMenuSelect: this.onMenuSelect,
                    onMenuDeselect: this.onMenuDeselect,
                    onPopupScroll: props.onPopupScroll,
                    showAction: props.showAction,
                    ref: this.saveSelectTriggerRef,
                    menuItemSelectedIcon: props.menuItemSelectedIcon,
                    dropdownRender: props.dropdownRender,
                    ariaId: ariaId,
                  },
                  react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                    'div',
                    {
                      id: props.id,
                      style: props.style,
                      ref: this.saveRootRef,
                      onBlur: this.onOuterBlur,
                      onFocus: this.onOuterFocus,
                      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        rootCls,
                      ),
                      onMouseDown: this.markMouseDown,
                      onMouseUp: this.markMouseLeave,
                      onMouseOut: this.markMouseLeave,
                    },
                    react__WEBPACK_IMPORTED_MODULE_6__['createElement'](
                      'div',
                      _extends(
                        {
                          ref: this.saveSelectionRef,
                          key: 'selection',
                          className: ''
                            .concat(prefixCls, '-selection\n            ')
                            .concat(prefixCls, '-selection--')
                            .concat(multiple ? 'multiple' : 'single'),
                          role: 'combobox',
                          'aria-autocomplete': 'list',
                          'aria-haspopup': 'true',
                          'aria-controls': ariaId,
                          'aria-expanded': realOpen,
                        },
                        extraSelectionProps,
                      ),
                      ctrlNode,
                      this.renderClear(),
                      this.renderArrow(!!multiple),
                    ),
                  ),
                );
              },
            },
          ]);

          return Select;
        })(react__WEBPACK_IMPORTED_MODULE_6__['Component']);

      Select.propTypes = _PropTypes__WEBPACK_IMPORTED_MODULE_11__['default'];
      Select.defaultProps = {
        prefixCls: 'rc-select',
        defaultOpen: false,
        labelInValue: false,
        defaultActiveFirstOption: true,
        showSearch: true,
        allowClear: false,
        placeholder: '',
        onChange: noop,
        onFocus: noop,
        onBlur: noop,
        onSelect: noop,
        onSearch: noop,
        onDeselect: noop,
        onInputKeyDown: noop,
        dropdownMatchSelectWidth: true,
        dropdownStyle: {},
        dropdownMenuStyle: {},
        optionFilterProp: 'value',
        optionLabelProp: 'value',
        notFoundContent: 'Not Found',
        backfill: false,
        showAction: ['click'],
        tokenSeparators: [],
        autoClearSearchValue: true,
        tabIndex: 0,
        dropdownRender: function dropdownRender(menu) {
          return menu;
        },
      };

      Select.getDerivedStateFromProps = function(nextProps, prevState) {
        var optionsInfo = prevState.skipBuildOptionsInfo
          ? prevState.optionsInfo
          : Select.getOptionsInfoFromProps(nextProps, prevState);
        var newState = {
          optionsInfo: optionsInfo,
          skipBuildOptionsInfo: false,
        };

        if ('open' in nextProps) {
          newState.open = nextProps.open;
        }

        if ('value' in nextProps) {
          var value = Select.getValueFromProps(nextProps);
          newState.value = value;

          if (nextProps.combobox) {
            newState.inputValue = Select.getInputValueForCombobox(
              nextProps,
              optionsInfo,
            );
          }
        }

        return newState;
      };

      Select.getOptionsFromChildren = function(children) {
        var options =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : [];
        react__WEBPACK_IMPORTED_MODULE_6__['Children'].forEach(
          children,
          function(child) {
            if (!child) {
              return;
            }

            var type = child.type;

            if (type.isSelectOptGroup) {
              Select.getOptionsFromChildren(child.props.children, options);
            } else {
              options.push(child);
            }
          },
        );
        return options;
      };

      Select.getInputValueForCombobox = function(
        props,
        optionsInfo,
        useDefaultValue,
      ) {
        var value = [];

        if ('value' in props && !useDefaultValue) {
          value = Object(_util__WEBPACK_IMPORTED_MODULE_13__['toArray'])(
            props.value,
          );
        }

        if ('defaultValue' in props && useDefaultValue) {
          value = Object(_util__WEBPACK_IMPORTED_MODULE_13__['toArray'])(
            props.defaultValue,
          );
        }

        if (value.length) {
          value = value[0];
        } else {
          return '';
        }

        var label = value;

        if (props.labelInValue) {
          label = value.label;
        } else if (
          optionsInfo[
            Object(_util__WEBPACK_IMPORTED_MODULE_13__['getMapKey'])(value)
          ]
        ) {
          label =
            optionsInfo[
              Object(_util__WEBPACK_IMPORTED_MODULE_13__['getMapKey'])(value)
            ].label;
        }

        if (label === undefined) {
          label = '';
        }

        return label;
      };

      Select.getLabelFromOption = function(props, option) {
        return Object(_util__WEBPACK_IMPORTED_MODULE_13__['getPropValue'])(
          option,
          props.optionLabelProp,
        );
      };

      Select.getOptionsInfoFromProps = function(props, preState) {
        var options = Select.getOptionsFromChildren(props.children);
        var optionsInfo = {};
        options.forEach(function(option) {
          var singleValue = Object(
            _util__WEBPACK_IMPORTED_MODULE_13__['getValuePropValue'],
          )(option);
          optionsInfo[
            Object(_util__WEBPACK_IMPORTED_MODULE_13__['getMapKey'])(
              singleValue,
            )
          ] = {
            option: option,
            value: singleValue,
            label: Select.getLabelFromOption(props, option),
            title: option.props.title,
            disabled: option.props.disabled,
          };
        });

        if (preState) {
          // keep option info in pre state value.
          var oldOptionsInfo = preState.optionsInfo;
          var value = preState.value;

          if (value) {
            value.forEach(function(v) {
              var key = Object(
                _util__WEBPACK_IMPORTED_MODULE_13__['getMapKey'],
              )(v);

              if (!optionsInfo[key] && oldOptionsInfo[key] !== undefined) {
                optionsInfo[key] = oldOptionsInfo[key];
              }
            });
          }
        }

        return optionsInfo;
      };

      Select.getValueFromProps = function(props, useDefaultValue) {
        var value = [];

        if ('value' in props && !useDefaultValue) {
          value = Object(_util__WEBPACK_IMPORTED_MODULE_13__['toArray'])(
            props.value,
          );
        }

        if ('defaultValue' in props && useDefaultValue) {
          value = Object(_util__WEBPACK_IMPORTED_MODULE_13__['toArray'])(
            props.defaultValue,
          );
        }

        if (props.labelInValue) {
          value = value.map(function(v) {
            return v.key;
          });
        }

        return value;
      };

      Select.displayName = 'Select';
      Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__['polyfill'])(
        Select,
      );
      /* harmony default export */ __webpack_exports__['default'] = Select;

      /***/
    },

  /***/ './node_modules/rc-select/es/SelectTrigger.js':
    /*!****************************************************!*\
  !*** ./node_modules/rc-select/es/SelectTrigger.js ***!
  \****************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return SelectTrigger;
        },
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! classnames */ './node_modules/classnames/index.js',
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        classnames__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! rc-trigger */ './node_modules/rc-trigger/es/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./DropdownMenu */ './node_modules/rc-select/es/DropdownMenu.js',
      );
      /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! ./util */ './node_modules/rc-select/es/util.js',
      );
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
        if (call && (typeof call === 'object' || typeof call === 'function')) {
          return call;
        }
        return _assertThisInitialized(self);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        }
        return self;
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
        (undefined && undefined.__rest) ||
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

      rc_trigger__WEBPACK_IMPORTED_MODULE_2__['default'].displayName =
        'Trigger';
      var BUILT_IN_PLACEMENTS = {
        bottomLeft: {
          points: ['tl', 'bl'],
          offset: [0, 4],
          overflow: {
            adjustX: 0,
            adjustY: 1,
          },
        },
        topLeft: {
          points: ['bl', 'tl'],
          offset: [0, -4],
          overflow: {
            adjustX: 0,
            adjustY: 1,
          },
        },
      };

      var SelectTrigger =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(SelectTrigger, _React$Component);

          function SelectTrigger(props) {
            var _this;

            _classCallCheck(this, SelectTrigger);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(SelectTrigger).call(this, props),
            );
            _this.dropdownMenuRef = null;

            _this.setDropdownWidth = function() {
              var dom = react_dom__WEBPACK_IMPORTED_MODULE_4__['findDOMNode'](
                _assertThisInitialized(_this),
              );
              var width = dom.offsetWidth;

              if (width !== _this.state.dropdownWidth) {
                _this.setState({
                  dropdownWidth: width,
                });
              }
            };

            _this.getInnerMenu = function() {
              return _this.dropdownMenuRef && _this.dropdownMenuRef.menuRef;
            };

            _this.getPopupDOMNode = function() {
              return _this.triggerRef.getPopupDomNode();
            };

            _this.getDropdownElement = function(newProps) {
              var props = _this.props;
              var dropdownRender = props.dropdownRender,
                ariaId = props.ariaId;
              var menuNode = react__WEBPACK_IMPORTED_MODULE_3__[
                'createElement'
              ](
                _DropdownMenu__WEBPACK_IMPORTED_MODULE_5__['default'],
                _extends(
                  {
                    ref: _this.saveDropdownMenuRef,
                  },
                  newProps,
                  {
                    ariaId: ariaId,
                    prefixCls: _this.getDropdownPrefixCls(),
                    onMenuSelect: props.onMenuSelect,
                    onMenuDeselect: props.onMenuDeselect,
                    onPopupScroll: props.onPopupScroll,
                    value: props.value,
                    backfillValue: props.backfillValue,
                    firstActiveValue: props.firstActiveValue,
                    defaultActiveFirstOption: props.defaultActiveFirstOption,
                    dropdownMenuStyle: props.dropdownMenuStyle,
                    menuItemSelectedIcon: props.menuItemSelectedIcon,
                  },
                ),
              );

              if (dropdownRender) {
                return dropdownRender(menuNode, props);
              }

              return null;
            };

            _this.getDropdownTransitionName = function() {
              var props = _this.props;
              var transitionName = props.transitionName;

              if (!transitionName && props.animation) {
                transitionName = ''
                  .concat(_this.getDropdownPrefixCls(), '-')
                  .concat(props.animation);
              }

              return transitionName;
            };

            _this.getDropdownPrefixCls = function() {
              return ''.concat(_this.props.prefixCls, '-dropdown');
            };

            _this.saveDropdownMenuRef = Object(
              _util__WEBPACK_IMPORTED_MODULE_6__['saveRef'],
            )(_assertThisInitialized(_this), 'dropdownMenuRef');
            _this.saveTriggerRef = Object(
              _util__WEBPACK_IMPORTED_MODULE_6__['saveRef'],
            )(_assertThisInitialized(_this), 'triggerRef');
            _this.state = {
              dropdownWidth: 0,
            };
            return _this;
          }

          _createClass(SelectTrigger, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                this.setDropdownWidth();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate() {
                this.setDropdownWidth();
              },
            },
            {
              key: 'render',
              value: function render() {
                var _popupClassName;

                var _a = this.props,
                  onPopupFocus = _a.onPopupFocus,
                  empty = _a.empty,
                  props = __rest(_a, ['onPopupFocus', 'empty']);

                var multiple = props.multiple,
                  visible = props.visible,
                  inputValue = props.inputValue,
                  dropdownAlign = props.dropdownAlign,
                  disabled = props.disabled,
                  showSearch = props.showSearch,
                  dropdownClassName = props.dropdownClassName,
                  dropdownStyle = props.dropdownStyle,
                  dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
                var dropdownPrefixCls = this.getDropdownPrefixCls();
                var popupClassName = ((_popupClassName = {}),
                _defineProperty(
                  _popupClassName,
                  dropdownClassName,
                  !!dropdownClassName,
                ),
                _defineProperty(
                  _popupClassName,
                  ''
                    .concat(dropdownPrefixCls, '--')
                    .concat(multiple ? 'multiple' : 'single'),
                  1,
                ),
                _defineProperty(
                  _popupClassName,
                  ''.concat(dropdownPrefixCls, '--empty'),
                  empty,
                ),
                _popupClassName);
                var popupElement = this.getDropdownElement({
                  menuItems: props.options,
                  onPopupFocus: onPopupFocus,
                  multiple: multiple,
                  inputValue: inputValue,
                  visible: visible,
                });
                var hideAction;

                if (disabled) {
                  hideAction = [];
                } else if (
                  Object(_util__WEBPACK_IMPORTED_MODULE_6__['isSingleMode'])(
                    props,
                  ) &&
                  !showSearch
                ) {
                  hideAction = ['click'];
                } else {
                  hideAction = ['blur'];
                }

                var popupStyle = _extends({}, dropdownStyle);

                var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';

                if (this.state.dropdownWidth) {
                  popupStyle[widthProp] = ''.concat(
                    this.state.dropdownWidth,
                    'px',
                  );
                }

                return react__WEBPACK_IMPORTED_MODULE_3__['createElement'](
                  rc_trigger__WEBPACK_IMPORTED_MODULE_2__['default'],
                  _extends({}, props, {
                    showAction: disabled ? [] : this.props.showAction,
                    hideAction: hideAction,
                    ref: this.saveTriggerRef,
                    popupPlacement: 'bottomLeft',
                    builtinPlacements: BUILT_IN_PLACEMENTS,
                    prefixCls: dropdownPrefixCls,
                    popupTransitionName: this.getDropdownTransitionName(),
                    onPopupVisibleChange: props.onDropdownVisibleChange,
                    popup: popupElement,
                    popupAlign: dropdownAlign,
                    popupVisible: visible,
                    getPopupContainer: props.getPopupContainer,
                    popupClassName: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                      popupClassName,
                    ),
                    popupStyle: popupStyle,
                  }),
                  props.children,
                );
              },
            },
          ]);

          return SelectTrigger;
        })(react__WEBPACK_IMPORTED_MODULE_3__['Component']);

      SelectTrigger.defaultProps = {
        dropdownRender: function dropdownRender(menu) {
          return menu;
        },
      };
      SelectTrigger.propTypes = {
        onPopupFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__['func'],
        onPopupScroll: prop_types__WEBPACK_IMPORTED_MODULE_1__['func'],
        dropdownMatchSelectWidth:
          prop_types__WEBPACK_IMPORTED_MODULE_1__['bool'],
        dropdownAlign: prop_types__WEBPACK_IMPORTED_MODULE_1__['object'],
        visible: prop_types__WEBPACK_IMPORTED_MODULE_1__['bool'],
        disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__['bool'],
        showSearch: prop_types__WEBPACK_IMPORTED_MODULE_1__['bool'],
        dropdownClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__['string'],
        multiple: prop_types__WEBPACK_IMPORTED_MODULE_1__['bool'],
        inputValue: prop_types__WEBPACK_IMPORTED_MODULE_1__['string'],
        filterOption: prop_types__WEBPACK_IMPORTED_MODULE_1__['any'],
        options: prop_types__WEBPACK_IMPORTED_MODULE_1__['any'],
        prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1__['string'],
        popupClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__['string'],
        children: prop_types__WEBPACK_IMPORTED_MODULE_1__['any'],
        showAction: prop_types__WEBPACK_IMPORTED_MODULE_1__['arrayOf'](
          prop_types__WEBPACK_IMPORTED_MODULE_1__['string'],
        ),
        menuItemSelectedIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__[
          'oneOfType'
        ]([
          prop_types__WEBPACK_IMPORTED_MODULE_1__['func'],
          prop_types__WEBPACK_IMPORTED_MODULE_1__['node'],
        ]),
        dropdownRender: prop_types__WEBPACK_IMPORTED_MODULE_1__['func'],
        ariaId: prop_types__WEBPACK_IMPORTED_MODULE_1__['string'],
      };
      SelectTrigger.displayName = 'SelectTrigger';

      /***/
    },

  /***/ './node_modules/rc-select/es/index.js':
    /*!********************************************!*\
  !*** ./node_modules/rc-select/es/index.js ***!
  \********************************************/
    /*! exports provided: Option, OptGroup, SelectPropTypes, default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _OptGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./OptGroup */ './node_modules/rc-select/es/OptGroup.js',
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'OptGroup',
        function() {
          return _OptGroup__WEBPACK_IMPORTED_MODULE_0__['default'];
        },
      );

      /* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./Option */ './node_modules/rc-select/es/Option.js',
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'Option',
        function() {
          return _Option__WEBPACK_IMPORTED_MODULE_1__['default'];
        },
      );

      /* harmony import */ var _PropTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./PropTypes */ './node_modules/rc-select/es/PropTypes.js',
      );
      /* harmony reexport (safe) */ __webpack_require__.d(
        __webpack_exports__,
        'SelectPropTypes',
        function() {
          return _PropTypes__WEBPACK_IMPORTED_MODULE_2__['default'];
        },
      );

      /* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./Select */ './node_modules/rc-select/es/Select.js',
      );

      _Select__WEBPACK_IMPORTED_MODULE_3__['default'].Option =
        _Option__WEBPACK_IMPORTED_MODULE_1__['default'];
      _Select__WEBPACK_IMPORTED_MODULE_3__['default'].OptGroup =
        _OptGroup__WEBPACK_IMPORTED_MODULE_0__['default'];

      /* harmony default export */ __webpack_exports__['default'] =
        _Select__WEBPACK_IMPORTED_MODULE_3__['default'];

      /***/
    },

  /***/ './node_modules/rc-select/es/util.js':
    /*!*******************************************!*\
  !*** ./node_modules/rc-select/es/util.js ***!
  \*******************************************/
    /*! exports provided: toTitle, getValuePropValue, getPropValue, isMultiple, isCombobox, isMultipleOrTags, isMultipleOrTagsOrCombobox, isSingleMode, toArray, getMapKey, preventDefaultEvent, findIndexInValueBySingleValue, getLabelFromPropsValue, getSelectKeys, UNSELECTABLE_STYLE, UNSELECTABLE_ATTRIBUTE, findFirstMenuItem, includesSeparators, splitBySeparators, defaultFilterFn, validateOptionValue, saveRef, generateUUID */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'toTitle',
        function() {
          return toTitle;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getValuePropValue',
        function() {
          return getValuePropValue;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getPropValue',
        function() {
          return getPropValue;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isMultiple',
        function() {
          return isMultiple;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isCombobox',
        function() {
          return isCombobox;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isMultipleOrTags',
        function() {
          return isMultipleOrTags;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isMultipleOrTagsOrCombobox',
        function() {
          return isMultipleOrTagsOrCombobox;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'isSingleMode',
        function() {
          return isSingleMode;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'toArray',
        function() {
          return toArray;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getMapKey',
        function() {
          return getMapKey;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'preventDefaultEvent',
        function() {
          return preventDefaultEvent;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'findIndexInValueBySingleValue',
        function() {
          return findIndexInValueBySingleValue;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getLabelFromPropsValue',
        function() {
          return getLabelFromPropsValue;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getSelectKeys',
        function() {
          return getSelectKeys;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'UNSELECTABLE_STYLE',
        function() {
          return UNSELECTABLE_STYLE;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'UNSELECTABLE_ATTRIBUTE',
        function() {
          return UNSELECTABLE_ATTRIBUTE;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'findFirstMenuItem',
        function() {
          return findFirstMenuItem;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'includesSeparators',
        function() {
          return includesSeparators;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'splitBySeparators',
        function() {
          return splitBySeparators;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'defaultFilterFn',
        function() {
          return defaultFilterFn;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'validateOptionValue',
        function() {
          return validateOptionValue;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'saveRef',
        function() {
          return saveRef;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'generateUUID',
        function() {
          return generateUUID;
        },
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );

      function toTitle(title) {
        if (typeof title === 'string') {
          return title;
        }

        return '';
      }
      function getValuePropValue(child) {
        if (!child) {
          return null;
        }

        var props = child.props;

        if ('value' in props) {
          return props.value;
        }

        if (child.key) {
          return child.key;
        }

        if (child.type && child.type.isSelectOptGroup && props.label) {
          return props.label;
        }

        throw new Error(
          'Need at least a key or a value or a label (only for OptGroup) for '.concat(
            child,
          ),
        );
      }
      function getPropValue(child, prop) {
        if (prop === 'value') {
          return getValuePropValue(child);
        }

        return child.props[prop];
      }
      function isMultiple(props) {
        return props.multiple;
      }
      function isCombobox(props) {
        return props.combobox;
      }
      function isMultipleOrTags(props) {
        return props.multiple || props.tags;
      }
      function isMultipleOrTagsOrCombobox(props) {
        return isMultipleOrTags(props) || isCombobox(props);
      }
      function isSingleMode(props) {
        return !isMultipleOrTagsOrCombobox(props);
      }
      function toArray(value) {
        var ret = value;

        if (value === undefined) {
          ret = [];
        } else if (!Array.isArray(value)) {
          ret = [value];
        }

        return ret;
      }
      function getMapKey(value) {
        return ''.concat(typeof value, '-').concat(value);
      }
      function preventDefaultEvent(e) {
        e.preventDefault();
      }
      function findIndexInValueBySingleValue(value, singleValue) {
        var index = -1;

        if (value) {
          for (var i = 0; i < value.length; i++) {
            if (value[i] === singleValue) {
              index = i;
              break;
            }
          }
        }

        return index;
      }
      function getLabelFromPropsValue(value, key) {
        var label;
        value = toArray(value);

        if (value) {
          // tslint:disable-next-line:prefer-for-of
          for (var i = 0; i < value.length; i++) {
            if (value[i].key === key) {
              label = value[i].label;
              break;
            }
          }
        }

        return label;
      }
      function getSelectKeys(menuItems, value) {
        if (value === null || value === undefined) {
          return [];
        }

        var selectedKeys = [];
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(
          menuItems,
          function(item) {
            var type = item.type;

            if (type.isMenuItemGroup) {
              selectedKeys = selectedKeys.concat(
                getSelectKeys(item.props.children, value),
              );
            } else {
              var itemValue = getValuePropValue(item);
              var itemKey = item.key;

              if (
                findIndexInValueBySingleValue(value, itemValue) !== -1 &&
                itemKey
              ) {
                selectedKeys.push(itemKey);
              }
            }
          },
        );
        return selectedKeys;
      }
      var UNSELECTABLE_STYLE = {
        userSelect: 'none',
        WebkitUserSelect: 'none',
      };
      var UNSELECTABLE_ATTRIBUTE = {
        unselectable: 'on',
      };
      function findFirstMenuItem(children) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < children.length; i++) {
          var child = children[i];

          if (child.type.isMenuItemGroup) {
            var found = findFirstMenuItem(child.props.children);

            if (found) {
              return found;
            }
          } else if (!child.props.disabled) {
            return child;
          }
        }

        return null;
      }
      function includesSeparators(str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < separators.length; ++i) {
          if (str.lastIndexOf(separators[i]) > 0) {
            return true;
          }
        }

        return false;
      }
      function splitBySeparators(str, separators) {
        var reg = new RegExp('['.concat(separators.join(), ']'));
        return str.split(reg).filter(function(token) {
          return token;
        });
      }
      function defaultFilterFn(input, child) {
        if (child.props.disabled) {
          return false;
        }

        var value = toArray(
          getPropValue(child, this.props.optionFilterProp),
        ).join('');
        return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
      }
      function validateOptionValue(value, props) {
        if (isSingleMode(props) || isMultiple(props)) {
          return;
        }

        if (typeof value !== 'string') {
          throw new Error(
            'Invalid `value` of type `'.concat(
              typeof value,
              '` supplied to Option, ',
            ) + 'expected `string` when `tags/combobox` is `true`.',
          );
        }
      }
      function saveRef(instance, name) {
        return function(node) {
          instance[name] = node;
        };
      }
      function generateUUID() {
        if (false) {
        }

        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
          /[xy]/g,
          function(c) {
            // tslint:disable-next-line:no-bitwise
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16); // tslint:disable-next-line:no-bitwise

            return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16);
          },
        );
        return uuid;
      }

      /***/
    },

  /***/ './node_modules/rc-select/node_modules/warning/warning.js':
    /*!****************************************************************!*\
  !*** ./node_modules/rc-select/node_modules/warning/warning.js ***!
  \****************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      'use strict';
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      /**
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */

      var __DEV__ = 'development' !== 'production';

      var warning = function() {};

      if (__DEV__) {
        var printWarning = function printWarning(format, args) {
          var len = arguments.length;
          args = new Array(len > 1 ? len - 1 : 0);
          for (var key = 1; key < len; key++) {
            args[key - 1] = arguments[key];
          }
          var argIndex = 0;
          var message =
            'Warning: ' +
            format.replace(/%s/g, function() {
              return args[argIndex++];
            });
          if (typeof console !== 'undefined') {
            console.error(message);
          }
          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        warning = function(condition, format, args) {
          var len = arguments.length;
          args = new Array(len > 2 ? len - 2 : 0);
          for (var key = 2; key < len; key++) {
            args[key - 2] = arguments[key];
          }
          if (format === undefined) {
            throw new Error(
              '`warning(condition, format, ...args)` requires a warning ' +
                'message argument',
            );
          }
          if (!condition) {
            printWarning.apply(null, [format].concat(args));
          }
        };
      }

      module.exports = warning;

      /***/
    },

  /***/ './node_modules/rc-trigger/es/LazyRenderBox.js':
    /*!*****************************************************!*\
  !*** ./node_modules/rc-trigger/es/LazyRenderBox.js ***!
  \*****************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/objectWithoutProperties */ './node_modules/babel-runtime/helpers/objectWithoutProperties.js',
      );
      /* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_5__,
      );

      var LazyRenderBox = (function(_Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(
          LazyRenderBox,
          _Component,
        );

        function LazyRenderBox() {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
            this,
            LazyRenderBox,
          );

          return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            _Component.apply(this, arguments),
          );
        }

        LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(
          nextProps,
        ) {
          return nextProps.hiddenClassName || nextProps.visible;
        };

        LazyRenderBox.prototype.render = function render() {
          var _props = this.props,
            hiddenClassName = _props.hiddenClassName,
            visible = _props.visible,
            props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(
              _props,
              ['hiddenClassName', 'visible'],
            );

          if (
            hiddenClassName ||
            react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.count(
              props.children,
            ) > 1
          ) {
            if (!visible && hiddenClassName) {
              props.className += ' ' + hiddenClassName;
            }
            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'div',
              props,
            );
          }

          return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(
            props.children,
          );
        };

        return LazyRenderBox;
      })(react__WEBPACK_IMPORTED_MODULE_4__['Component']);

      LazyRenderBox.propTypes = {
        children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
        className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
        hiddenClassName:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
      };

      /* harmony default export */ __webpack_exports__[
        'default'
      ] = LazyRenderBox;

      /***/
    },

  /***/ './node_modules/rc-trigger/es/Popup.js':
    /*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup.js ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! rc-align */ './node_modules/rc-align/es/index.js',
      );
      /* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! rc-animate */ './node_modules/rc-animate/es/Animate.js',
      );
      /* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ./PopupInner */ './node_modules/rc-trigger/es/PopupInner.js',
      );
      /* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ./LazyRenderBox */ './node_modules/rc-trigger/es/LazyRenderBox.js',
      );
      /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ./utils */ './node_modules/rc-trigger/es/utils.js',
      );

      var Popup = (function(_Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(
          Popup,
          _Component,
        );

        function Popup(props) {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
            this,
            Popup,
          );

          var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            _Component.call(this, props),
          );

          _initialiseProps.call(_this);

          _this.state = {
            // Used for stretch
            stretchChecked: false,
            targetWidth: undefined,
            targetHeight: undefined,
          };

          _this.savePopupRef = _utils__WEBPACK_IMPORTED_MODULE_11__[
            'saveRef'
          ].bind(_this, 'popupInstance');
          _this.saveAlignRef = _utils__WEBPACK_IMPORTED_MODULE_11__[
            'saveRef'
          ].bind(_this, 'alignInstance');
          return _this;
        }

        Popup.prototype.componentDidMount = function componentDidMount() {
          this.rootNode = this.getPopupDomNode();
          this.setStretchSize();
        };

        Popup.prototype.componentDidUpdate = function componentDidUpdate() {
          this.setStretchSize();
        };

        // Record size if stretch needed

        Popup.prototype.getPopupDomNode = function getPopupDomNode() {
          return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(
            this.popupInstance,
          );
        };

        // `target` on `rc-align` can accept as a function to get the bind element or a point.
        // ref: https://www.npmjs.com/package/rc-align

        Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
          var props = this.props;
          var transitionName = props.maskTransitionName;
          var animation = props.maskAnimation;
          if (!transitionName && animation) {
            transitionName = props.prefixCls + '-' + animation;
          }
          return transitionName;
        };

        Popup.prototype.getTransitionName = function getTransitionName() {
          var props = this.props;
          var transitionName = props.transitionName;
          if (!transitionName && props.animation) {
            transitionName = props.prefixCls + '-' + props.animation;
          }
          return transitionName;
        };

        Popup.prototype.getClassName = function getClassName(
          currentAlignClassName,
        ) {
          return (
            this.props.prefixCls +
            ' ' +
            this.props.className +
            ' ' +
            currentAlignClassName
          );
        };

        Popup.prototype.getPopupElement = function getPopupElement() {
          var _this2 = this;

          var savePopupRef = this.savePopupRef;
          var _state = this.state,
            stretchChecked = _state.stretchChecked,
            targetHeight = _state.targetHeight,
            targetWidth = _state.targetWidth;
          var _props = this.props,
            align = _props.align,
            visible = _props.visible,
            prefixCls = _props.prefixCls,
            style = _props.style,
            getClassNameFromAlign = _props.getClassNameFromAlign,
            destroyPopupOnHide = _props.destroyPopupOnHide,
            stretch = _props.stretch,
            children = _props.children,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            onMouseDown = _props.onMouseDown,
            onTouchStart = _props.onTouchStart;

          var className = this.getClassName(
            this.currentAlignClassName || getClassNameFromAlign(align),
          );
          var hiddenClassName = prefixCls + '-hidden';

          if (!visible) {
            this.currentAlignClassName = null;
          }

          var sizeStyle = {};
          if (stretch) {
            // Stretch with target
            if (stretch.indexOf('height') !== -1) {
              sizeStyle.height = targetHeight;
            } else if (stretch.indexOf('minHeight') !== -1) {
              sizeStyle.minHeight = targetHeight;
            }
            if (stretch.indexOf('width') !== -1) {
              sizeStyle.width = targetWidth;
            } else if (stretch.indexOf('minWidth') !== -1) {
              sizeStyle.minWidth = targetWidth;
            }

            // Delay force align to makes ui smooth
            if (!stretchChecked) {
              sizeStyle.visibility = 'hidden';
              setTimeout(function() {
                if (_this2.alignInstance) {
                  _this2.alignInstance.forceAlign();
                }
              }, 0);
            }
          }

          var newStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
            {},
            sizeStyle,
            style,
            this.getZIndexStyle(),
          );

          var popupInnerProps = {
            className: className,
            prefixCls: prefixCls,
            ref: savePopupRef,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onMouseDown: onMouseDown,
            onTouchStart: onTouchStart,
            style: newStyle,
          };
          if (destroyPopupOnHide) {
            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              rc_animate__WEBPACK_IMPORTED_MODULE_8__['default'],
              {
                component: '',
                exclusive: true,
                transitionAppear: true,
                transitionName: this.getTransitionName(),
              },
              visible
                ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    rc_align__WEBPACK_IMPORTED_MODULE_7__['default'],
                    {
                      target: this.getAlignTarget(),
                      key: 'popup',
                      ref: this.saveAlignRef,
                      monitorWindowResize: true,
                      align: align,
                      onAlign: this.onAlign,
                    },
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _PopupInner__WEBPACK_IMPORTED_MODULE_9__['default'],
                      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                        {
                          visible: true,
                        },
                        popupInnerProps,
                      ),
                      children,
                    ),
                  )
                : null,
            );
          }

          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            rc_animate__WEBPACK_IMPORTED_MODULE_8__['default'],
            {
              component: '',
              exclusive: true,
              transitionAppear: true,
              transitionName: this.getTransitionName(),
              showProp: 'xVisible',
            },
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              rc_align__WEBPACK_IMPORTED_MODULE_7__['default'],
              {
                target: this.getAlignTarget(),
                key: 'popup',
                ref: this.saveAlignRef,
                monitorWindowResize: true,
                xVisible: visible,
                childrenProps: { visible: 'xVisible' },
                disabled: !visible,
                align: align,
                onAlign: this.onAlign,
              },
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _PopupInner__WEBPACK_IMPORTED_MODULE_9__['default'],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                  {
                    hiddenClassName: hiddenClassName,
                  },
                  popupInnerProps,
                ),
                children,
              ),
            ),
          );
        };

        Popup.prototype.getZIndexStyle = function getZIndexStyle() {
          var style = {};
          var props = this.props;
          if (props.zIndex !== undefined) {
            style.zIndex = props.zIndex;
          }
          return style;
        };

        Popup.prototype.getMaskElement = function getMaskElement() {
          var props = this.props;
          var maskElement = void 0;
          if (props.mask) {
            var maskTransition = this.getMaskTransitionName();
            maskElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__['default'],
              {
                style: this.getZIndexStyle(),
                key: 'mask',
                className: props.prefixCls + '-mask',
                hiddenClassName: props.prefixCls + '-mask-hidden',
                visible: props.visible,
              },
            );
            if (maskTransition) {
              maskElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                rc_animate__WEBPACK_IMPORTED_MODULE_8__['default'],
                {
                  key: 'mask',
                  showProp: 'visible',
                  transitionAppear: true,
                  component: '',
                  transitionName: maskTransition,
                },
                maskElement,
              );
            }
          }
          return maskElement;
        };

        Popup.prototype.render = function render() {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            null,
            this.getMaskElement(),
            this.getPopupElement(),
          );
        };

        return Popup;
      })(react__WEBPACK_IMPORTED_MODULE_4__['Component']);

      Popup.propTypes = {
        visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
        style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
        getClassNameFromAlign:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        onAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        getRootDomNode: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        align: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
        destroyPopupOnHide:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
        className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        stretch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
        point: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
          pageX: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
          pageY: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
        }),
      };

      var _initialiseProps = function _initialiseProps() {
        var _this3 = this;

        this.onAlign = function(popupDomNode, align) {
          var props = _this3.props;
          var currentAlignClassName = props.getClassNameFromAlign(align);
          // FIX: https://github.com/react-component/trigger/issues/56
          // FIX: https://github.com/react-component/tooltip/issues/79
          if (_this3.currentAlignClassName !== currentAlignClassName) {
            _this3.currentAlignClassName = currentAlignClassName;
            popupDomNode.className = _this3.getClassName(currentAlignClassName);
          }
          props.onAlign(popupDomNode, align);
        };

        this.setStretchSize = function() {
          var _props2 = _this3.props,
            stretch = _props2.stretch,
            getRootDomNode = _props2.getRootDomNode,
            visible = _props2.visible;
          var _state2 = _this3.state,
            stretchChecked = _state2.stretchChecked,
            targetHeight = _state2.targetHeight,
            targetWidth = _state2.targetWidth;

          if (!stretch || !visible) {
            if (stretchChecked) {
              _this3.setState({ stretchChecked: false });
            }
            return;
          }

          var $ele = getRootDomNode();
          if (!$ele) return;

          var height = $ele.offsetHeight;
          var width = $ele.offsetWidth;

          if (
            targetHeight !== height ||
            targetWidth !== width ||
            !stretchChecked
          ) {
            _this3.setState({
              stretchChecked: true,
              targetHeight: height,
              targetWidth: width,
            });
          }
        };

        this.getTargetElement = function() {
          return _this3.props.getRootDomNode();
        };

        this.getAlignTarget = function() {
          var point = _this3.props.point;

          if (point) {
            return point;
          }
          return _this3.getTargetElement;
        };
      };

      /* harmony default export */ __webpack_exports__['default'] = Popup;

      /***/
    },

  /***/ './node_modules/rc-trigger/es/PopupInner.js':
    /*!**************************************************!*\
  !*** ./node_modules/rc-trigger/es/PopupInner.js ***!
  \**************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! ./LazyRenderBox */ './node_modules/rc-trigger/es/LazyRenderBox.js',
      );

      var PopupInner = (function(_Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(
          PopupInner,
          _Component,
        );

        function PopupInner() {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
            this,
            PopupInner,
          );

          return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(
            this,
            _Component.apply(this, arguments),
          );
        }

        PopupInner.prototype.render = function render() {
          var props = this.props;
          var className = props.className;
          if (!props.visible) {
            className += ' ' + props.hiddenClassName;
          }
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: className,
              onMouseEnter: props.onMouseEnter,
              onMouseLeave: props.onMouseLeave,
              onMouseDown: props.onMouseDown,
              onTouchStart: props.onTouchStart,
              style: props.style,
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              _LazyRenderBox__WEBPACK_IMPORTED_MODULE_5__['default'],
              {
                className: props.prefixCls + '-content',
                visible: props.visible,
              },
              props.children,
            ),
          );
        };

        return PopupInner;
      })(react__WEBPACK_IMPORTED_MODULE_3__['Component']);

      PopupInner.propTypes = {
        hiddenClassName:
          prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
        className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
        prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
        onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
        onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
        onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
        onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
        children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
      };

      /* harmony default export */ __webpack_exports__['default'] = PopupInner;

      /***/
    },

  /***/ './node_modules/rc-trigger/es/index.js':
    /*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/index.js ***!
  \*********************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! rc-util/es/Dom/contains */ './node_modules/rc-util/es/Dom/contains.js',
      );
      /* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! rc-util/es/Dom/addEventListener */ './node_modules/rc-util/es/Dom/addEventListener.js',
      );
      /* harmony import */ var rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! rc-util/es/ContainerRender */ './node_modules/rc-util/es/ContainerRender.js',
      );
      /* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! rc-util/es/Portal */ './node_modules/rc-util/es/Portal.js',
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! classnames */ './node_modules/classnames/index.js',
      );
      /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
        classnames__WEBPACK_IMPORTED_MODULE_11__,
      );
      /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ./utils */ './node_modules/rc-trigger/es/utils.js',
      );
      /* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! ./Popup */ './node_modules/rc-trigger/es/Popup.js',
      );

      function noop() {}

      function returnEmptyString() {
        return '';
      }

      function returnDocument() {
        return window.document;
      }

      var ALL_HANDLERS = [
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
        'onContextMenu',
      ];

      var IS_REACT_16 = !!react_dom__WEBPACK_IMPORTED_MODULE_6__[
        'createPortal'
      ];

      var contextTypes = {
        rcTrigger: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
          onPopupMouseDown:
            prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        }),
      };

      var Trigger = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(
          Trigger,
          _React$Component,
        );

        function Trigger(props) {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(
            this,
            Trigger,
          );

          var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            _React$Component.call(this, props),
          );

          _initialiseProps.call(_this);

          var popupVisible = void 0;
          if ('popupVisible' in props) {
            popupVisible = !!props.popupVisible;
          } else {
            popupVisible = !!props.defaultPopupVisible;
          }

          _this.prevPopupVisible = popupVisible;

          _this.state = {
            popupVisible: popupVisible,
          };
          return _this;
        }

        Trigger.prototype.getChildContext = function getChildContext() {
          return {
            rcTrigger: {
              onPopupMouseDown: this.onPopupMouseDown,
            },
          };
        };

        Trigger.prototype.componentWillMount = function componentWillMount() {
          var _this2 = this;

          ALL_HANDLERS.forEach(function(h) {
            _this2['fire' + h] = function(e) {
              _this2.fireEvents(h, e);
            };
          });
        };

        Trigger.prototype.componentDidMount = function componentDidMount() {
          this.componentDidUpdate(
            {},
            {
              popupVisible: this.state.popupVisible,
            },
          );
        };

        Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(
          _ref,
        ) {
          var popupVisible = _ref.popupVisible;

          if (popupVisible !== undefined) {
            this.setState({
              popupVisible: popupVisible,
            });
          }
        };

        Trigger.prototype.componentDidUpdate = function componentDidUpdate(
          _,
          prevState,
        ) {
          var props = this.props;
          var state = this.state;
          var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
            if (prevState.popupVisible !== state.popupVisible) {
              props.afterPopupVisibleChange(state.popupVisible);
            }
          };
          if (!IS_REACT_16) {
            this.renderComponent(null, triggerAfterPopupVisibleChange);
          }

          this.prevPopupVisible = prevState.popupVisible;

          // We must listen to `mousedown` or `touchstart`, edge case:
          // https://github.com/ant-design/ant-design/issues/5804
          // https://github.com/react-component/calendar/issues/250
          // https://github.com/react-component/trigger/issues/50
          if (state.popupVisible) {
            var currentDocument = void 0;
            if (
              !this.clickOutsideHandler &&
              (this.isClickToHide() || this.isContextMenuToShow())
            ) {
              currentDocument = props.getDocument();
              this.clickOutsideHandler = Object(
                rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__[
                  'default'
                ],
              )(currentDocument, 'mousedown', this.onDocumentClick);
            }
            // always hide on mobile
            if (!this.touchOutsideHandler) {
              currentDocument = currentDocument || props.getDocument();
              this.touchOutsideHandler = Object(
                rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__[
                  'default'
                ],
              )(currentDocument, 'touchstart', this.onDocumentClick);
            }
            // close popup when trigger type contains 'onContextMenu' and document is scrolling.
            if (
              !this.contextMenuOutsideHandler1 &&
              this.isContextMenuToShow()
            ) {
              currentDocument = currentDocument || props.getDocument();
              this.contextMenuOutsideHandler1 = Object(
                rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__[
                  'default'
                ],
              )(currentDocument, 'scroll', this.onContextMenuClose);
            }
            // close popup when trigger type contains 'onContextMenu' and window is blur.
            if (
              !this.contextMenuOutsideHandler2 &&
              this.isContextMenuToShow()
            ) {
              this.contextMenuOutsideHandler2 = Object(
                rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__[
                  'default'
                ],
              )(window, 'blur', this.onContextMenuClose);
            }
            return;
          }

          this.clearOutsideHandler();
        };

        Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
          this.clearDelayTimer();
          this.clearOutsideHandler();
          clearTimeout(this.mouseDownTimeout);
        };

        Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
          // for test
          if (this._component && this._component.getPopupDomNode) {
            return this._component.getPopupDomNode();
          }
          return null;
        };

        Trigger.prototype.getPopupAlign = function getPopupAlign() {
          var props = this.props;
          var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

          if (popupPlacement && builtinPlacements) {
            return Object(
              _utils__WEBPACK_IMPORTED_MODULE_12__['getAlignFromPlacement'],
            )(builtinPlacements, popupPlacement, popupAlign);
          }
          return popupAlign;
        };

        /**
         * @param popupVisible    Show or not the popup element
         * @param event           SyntheticEvent, used for `pointAlign`
         */
        Trigger.prototype.setPopupVisible = function setPopupVisible(
          popupVisible,
          event,
        ) {
          var alignPoint = this.props.alignPoint;

          this.clearDelayTimer();

          if (this.state.popupVisible !== popupVisible) {
            if (!('popupVisible' in this.props)) {
              this.setState({ popupVisible: popupVisible });
            }
            this.props.onPopupVisibleChange(popupVisible);
          }

          // Always record the point position since mouseEnterDelay will delay the show
          if (alignPoint && event) {
            this.setPoint(event);
          }
        };

        Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(
          visible,
          delayS,
          event,
        ) {
          var _this3 = this;

          var delay = delayS * 1000;
          this.clearDelayTimer();
          if (delay) {
            var point = event
              ? { pageX: event.pageX, pageY: event.pageY }
              : null;
            this.delayTimer = setTimeout(function() {
              _this3.setPopupVisible(visible, point);
              _this3.clearDelayTimer();
            }, delay);
          } else {
            this.setPopupVisible(visible, event);
          }
        };

        Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
          if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
          }
        };

        Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
          if (this.clickOutsideHandler) {
            this.clickOutsideHandler.remove();
            this.clickOutsideHandler = null;
          }

          if (this.contextMenuOutsideHandler1) {
            this.contextMenuOutsideHandler1.remove();
            this.contextMenuOutsideHandler1 = null;
          }

          if (this.contextMenuOutsideHandler2) {
            this.contextMenuOutsideHandler2.remove();
            this.contextMenuOutsideHandler2 = null;
          }

          if (this.touchOutsideHandler) {
            this.touchOutsideHandler.remove();
            this.touchOutsideHandler = null;
          }
        };

        Trigger.prototype.createTwoChains = function createTwoChains(event) {
          var childPros = this.props.children.props;
          var props = this.props;
          if (childPros[event] && props[event]) {
            return this['fire' + event];
          }
          return childPros[event] || props[event];
        };

        Trigger.prototype.isClickToShow = function isClickToShow() {
          var _props = this.props,
            action = _props.action,
            showAction = _props.showAction;

          return (
            action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1
          );
        };

        Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
          var _props2 = this.props,
            action = _props2.action,
            showAction = _props2.showAction;

          return (
            action.indexOf('contextMenu') !== -1 ||
            showAction.indexOf('contextMenu') !== -1
          );
        };

        Trigger.prototype.isClickToHide = function isClickToHide() {
          var _props3 = this.props,
            action = _props3.action,
            hideAction = _props3.hideAction;

          return (
            action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1
          );
        };

        Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
          var _props4 = this.props,
            action = _props4.action,
            showAction = _props4.showAction;

          return (
            action.indexOf('hover') !== -1 ||
            showAction.indexOf('mouseEnter') !== -1
          );
        };

        Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
          var _props5 = this.props,
            action = _props5.action,
            hideAction = _props5.hideAction;

          return (
            action.indexOf('hover') !== -1 ||
            hideAction.indexOf('mouseLeave') !== -1
          );
        };

        Trigger.prototype.isFocusToShow = function isFocusToShow() {
          var _props6 = this.props,
            action = _props6.action,
            showAction = _props6.showAction;

          return (
            action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1
          );
        };

        Trigger.prototype.isBlurToHide = function isBlurToHide() {
          var _props7 = this.props,
            action = _props7.action,
            hideAction = _props7.hideAction;

          return (
            action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1
          );
        };

        Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
          if (
            this.state.popupVisible &&
            this._component &&
            this._component.alignInstance
          ) {
            this._component.alignInstance.forceAlign();
          }
        };

        Trigger.prototype.fireEvents = function fireEvents(type, e) {
          var childCallback = this.props.children.props[type];
          if (childCallback) {
            childCallback(e);
          }
          var callback = this.props[type];
          if (callback) {
            callback(e);
          }
        };

        Trigger.prototype.close = function close() {
          this.setPopupVisible(false);
        };

        Trigger.prototype.render = function render() {
          var _this4 = this;

          var popupVisible = this.state.popupVisible;
          var _props8 = this.props,
            children = _props8.children,
            forceRender = _props8.forceRender,
            alignPoint = _props8.alignPoint,
            className = _props8.className;

          var child = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(
            children,
          );
          var newChildProps = { key: 'trigger' };

          if (this.isContextMenuToShow()) {
            newChildProps.onContextMenu = this.onContextMenu;
          } else {
            newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
          }

          if (this.isClickToHide() || this.isClickToShow()) {
            newChildProps.onClick = this.onClick;
            newChildProps.onMouseDown = this.onMouseDown;
            newChildProps.onTouchStart = this.onTouchStart;
          } else {
            newChildProps.onClick = this.createTwoChains('onClick');
            newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
            newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
          }
          if (this.isMouseEnterToShow()) {
            newChildProps.onMouseEnter = this.onMouseEnter;
            if (alignPoint) {
              newChildProps.onMouseMove = this.onMouseMove;
            }
          } else {
            newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
          }
          if (this.isMouseLeaveToHide()) {
            newChildProps.onMouseLeave = this.onMouseLeave;
          } else {
            newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
          }
          if (this.isFocusToShow() || this.isBlurToHide()) {
            newChildProps.onFocus = this.onFocus;
            newChildProps.onBlur = this.onBlur;
          } else {
            newChildProps.onFocus = this.createTwoChains('onFocus');
            newChildProps.onBlur = this.createTwoChains('onBlur');
          }

          var childrenClassName = classnames__WEBPACK_IMPORTED_MODULE_11___default()(
            child && child.props && child.props.className,
            className,
          );
          if (childrenClassName) {
            newChildProps.className = childrenClassName;
          }
          var trigger = react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(
            child,
            newChildProps,
          );

          if (!IS_REACT_16) {
            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_9__[
                'default'
              ],
              {
                parent: this,
                visible: popupVisible,
                autoMount: false,
                forceRender: forceRender,
                getComponent: this.getComponent,
                getContainer: this.getContainer,
              },
              function(_ref2) {
                var renderComponent = _ref2.renderComponent;

                _this4.renderComponent = renderComponent;
                return trigger;
              },
            );
          }

          var portal = void 0;
          // prevent unmounting after it's rendered
          if (popupVisible || this._component || forceRender) {
            portal = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_10__['default'],
              {
                key: 'portal',
                getContainer: this.getContainer,
                didUpdate: this.handlePortalUpdate,
              },
              this.getComponent(),
            );
          }

          return [trigger, portal];
        };

        return Trigger;
      })(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

      Trigger.propTypes = {
        children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
        action: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
          ),
        ]),
        showAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
        hideAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
        getPopupClassNameFromAlign:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
        onPopupVisibleChange:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        afterPopupVisibleChange:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        popup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        ]).isRequired,
        popupStyle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
        prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        popupClassName:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        popupPlacement:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        builtinPlacements:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
        popupTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
          ],
        ),
        popupAnimation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
        mouseEnterDelay:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
        mouseLeaveDelay:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
        zIndex: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
        focusDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
        blurDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
        getPopupContainer:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        getDocument: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        forceRender: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
        destroyPopupOnHide:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
        mask: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
        maskClosable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
        onPopupAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        popupAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
        popupVisible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
        defaultPopupVisible:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
        maskTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType(
          [
            prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
          ],
        ),
        maskAnimation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        stretch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        alignPoint: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, // Maybe we can support user pass position in the future
      };
      Trigger.contextTypes = contextTypes;
      Trigger.childContextTypes = contextTypes;
      Trigger.defaultProps = {
        prefixCls: 'rc-trigger-popup',
        getPopupClassNameFromAlign: returnEmptyString,
        getDocument: returnDocument,
        onPopupVisibleChange: noop,
        afterPopupVisibleChange: noop,
        onPopupAlign: noop,
        popupClassName: '',
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0.1,
        focusDelay: 0,
        blurDelay: 0.15,
        popupStyle: {},
        destroyPopupOnHide: false,
        popupAlign: {},
        defaultPopupVisible: false,
        mask: false,
        maskClosable: true,
        action: [],
        showAction: [],
        hideAction: [],
      };

      var _initialiseProps = function _initialiseProps() {
        var _this5 = this;

        this.onMouseEnter = function(e) {
          var mouseEnterDelay = _this5.props.mouseEnterDelay;

          _this5.fireEvents('onMouseEnter', e);
          _this5.delaySetPopupVisible(
            true,
            mouseEnterDelay,
            mouseEnterDelay ? null : e,
          );
        };

        this.onMouseMove = function(e) {
          _this5.fireEvents('onMouseMove', e);
          _this5.setPoint(e);
        };

        this.onMouseLeave = function(e) {
          _this5.fireEvents('onMouseLeave', e);
          _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
        };

        this.onPopupMouseEnter = function() {
          _this5.clearDelayTimer();
        };

        this.onPopupMouseLeave = function(e) {
          // https://github.com/react-component/trigger/pull/13
          // react bug?
          if (
            e.relatedTarget &&
            !e.relatedTarget.setTimeout &&
            _this5._component &&
            _this5._component.getPopupDomNode &&
            Object(
              rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__['default'],
            )(_this5._component.getPopupDomNode(), e.relatedTarget)
          ) {
            return;
          }
          _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
        };

        this.onFocus = function(e) {
          _this5.fireEvents('onFocus', e);
          // incase focusin and focusout
          _this5.clearDelayTimer();
          if (_this5.isFocusToShow()) {
            _this5.focusTime = Date.now();
            _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
          }
        };

        this.onMouseDown = function(e) {
          _this5.fireEvents('onMouseDown', e);
          _this5.preClickTime = Date.now();
        };

        this.onTouchStart = function(e) {
          _this5.fireEvents('onTouchStart', e);
          _this5.preTouchTime = Date.now();
        };

        this.onBlur = function(e) {
          _this5.fireEvents('onBlur', e);
          _this5.clearDelayTimer();
          if (_this5.isBlurToHide()) {
            _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
          }
        };

        this.onContextMenu = function(e) {
          e.preventDefault();
          _this5.fireEvents('onContextMenu', e);
          _this5.setPopupVisible(true, e);
        };

        this.onContextMenuClose = function() {
          if (_this5.isContextMenuToShow()) {
            _this5.close();
          }
        };

        this.onClick = function(event) {
          _this5.fireEvents('onClick', event);
          // focus will trigger click
          if (_this5.focusTime) {
            var preTime = void 0;
            if (_this5.preClickTime && _this5.preTouchTime) {
              preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
            } else if (_this5.preClickTime) {
              preTime = _this5.preClickTime;
            } else if (_this5.preTouchTime) {
              preTime = _this5.preTouchTime;
            }
            if (Math.abs(preTime - _this5.focusTime) < 20) {
              return;
            }
            _this5.focusTime = 0;
          }
          _this5.preClickTime = 0;
          _this5.preTouchTime = 0;
          if (event && event.preventDefault) {
            event.preventDefault();
          }
          var nextVisible = !_this5.state.popupVisible;
          if (
            (_this5.isClickToHide() && !nextVisible) ||
            (nextVisible && _this5.isClickToShow())
          ) {
            _this5.setPopupVisible(!_this5.state.popupVisible, event);
          }
        };

        this.onPopupMouseDown = function() {
          var _context$rcTrigger = _this5.context.rcTrigger,
            rcTrigger =
              _context$rcTrigger === undefined ? {} : _context$rcTrigger;

          _this5.hasPopupMouseDown = true;

          clearTimeout(_this5.mouseDownTimeout);
          _this5.mouseDownTimeout = setTimeout(function() {
            _this5.hasPopupMouseDown = false;
          }, 0);

          if (rcTrigger.onPopupMouseDown) {
            rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
          }
        };

        this.onDocumentClick = function(event) {
          if (_this5.props.mask && !_this5.props.maskClosable) {
            return;
          }

          var target = event.target;
          var root = Object(
            react_dom__WEBPACK_IMPORTED_MODULE_6__['findDOMNode'],
          )(_this5);
          if (
            !Object(
              rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__['default'],
            )(root, target) &&
            !_this5.hasPopupMouseDown
          ) {
            _this5.close();
          }
        };

        this.getRootDomNode = function() {
          return Object(react_dom__WEBPACK_IMPORTED_MODULE_6__['findDOMNode'])(
            _this5,
          );
        };

        this.getPopupClassNameFromAlign = function(align) {
          var className = [];
          var _props9 = _this5.props,
            popupPlacement = _props9.popupPlacement,
            builtinPlacements = _props9.builtinPlacements,
            prefixCls = _props9.prefixCls,
            alignPoint = _props9.alignPoint,
            getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

          if (popupPlacement && builtinPlacements) {
            className.push(
              Object(
                _utils__WEBPACK_IMPORTED_MODULE_12__['getAlignPopupClassName'],
              )(builtinPlacements, prefixCls, align, alignPoint),
            );
          }
          if (getPopupClassNameFromAlign) {
            className.push(getPopupClassNameFromAlign(align));
          }
          return className.join(' ');
        };

        this.getComponent = function() {
          var _props10 = _this5.props,
            prefixCls = _props10.prefixCls,
            destroyPopupOnHide = _props10.destroyPopupOnHide,
            popupClassName = _props10.popupClassName,
            action = _props10.action,
            onPopupAlign = _props10.onPopupAlign,
            popupAnimation = _props10.popupAnimation,
            popupTransitionName = _props10.popupTransitionName,
            popupStyle = _props10.popupStyle,
            mask = _props10.mask,
            maskAnimation = _props10.maskAnimation,
            maskTransitionName = _props10.maskTransitionName,
            zIndex = _props10.zIndex,
            popup = _props10.popup,
            stretch = _props10.stretch,
            alignPoint = _props10.alignPoint;
          var _state = _this5.state,
            popupVisible = _state.popupVisible,
            point = _state.point;

          var align = _this5.getPopupAlign();

          var mouseProps = {};
          if (_this5.isMouseEnterToShow()) {
            mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
          }
          if (_this5.isMouseLeaveToHide()) {
            mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
          }

          mouseProps.onMouseDown = _this5.onPopupMouseDown;
          mouseProps.onTouchStart = _this5.onPopupMouseDown;

          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            _Popup__WEBPACK_IMPORTED_MODULE_13__['default'],
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
              {
                prefixCls: prefixCls,
                destroyPopupOnHide: destroyPopupOnHide,
                visible: popupVisible,
                point: alignPoint && point,
                className: popupClassName,
                action: action,
                align: align,
                onAlign: onPopupAlign,
                animation: popupAnimation,
                getClassNameFromAlign: _this5.getPopupClassNameFromAlign,
              },
              mouseProps,
              {
                stretch: stretch,
                getRootDomNode: _this5.getRootDomNode,
                style: popupStyle,
                mask: mask,
                zIndex: zIndex,
                transitionName: popupTransitionName,
                maskAnimation: maskAnimation,
                maskTransitionName: maskTransitionName,
                ref: _this5.savePopup,
              },
            ),
            typeof popup === 'function' ? popup() : popup,
          );
        };

        this.getContainer = function() {
          var props = _this5.props;

          var popupContainer = document.createElement('div');
          // Make sure default popup container will never cause scrollbar appearing
          // https://github.com/react-component/trigger/issues/41
          popupContainer.style.position = 'absolute';
          popupContainer.style.top = '0';
          popupContainer.style.left = '0';
          popupContainer.style.width = '100%';
          var mountNode = props.getPopupContainer
            ? props.getPopupContainer(
                Object(react_dom__WEBPACK_IMPORTED_MODULE_6__['findDOMNode'])(
                  _this5,
                ),
              )
            : props.getDocument().body;
          mountNode.appendChild(popupContainer);
          return popupContainer;
        };

        this.setPoint = function(point) {
          var alignPoint = _this5.props.alignPoint;

          if (!alignPoint || !point) return;

          _this5.setState({
            point: {
              pageX: point.pageX,
              pageY: point.pageY,
            },
          });
        };

        this.handlePortalUpdate = function() {
          if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
            _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
          }
        };

        this.savePopup = function(node) {
          _this5._component = node;
        };
      };

      /* harmony default export */ __webpack_exports__['default'] = Trigger;

      /***/
    },

  /***/ './node_modules/rc-trigger/es/utils.js':
    /*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/utils.js ***!
  \*********************************************/
    /*! exports provided: getAlignFromPlacement, getAlignPopupClassName, saveRef */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getAlignFromPlacement',
        function() {
          return getAlignFromPlacement;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getAlignPopupClassName',
        function() {
          return getAlignPopupClassName;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'saveRef',
        function() {
          return saveRef;
        },
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/extends */ './node_modules/babel-runtime/helpers/extends.js',
      );
      /* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
      );

      function isPointsEq(a1, a2, isAlignPoint) {
        if (isAlignPoint) {
          return a1[0] === a2[0];
        }
        return a1[0] === a2[0] && a1[1] === a2[1];
      }

      function getAlignFromPlacement(builtinPlacements, placementStr, align) {
        var baseAlign = builtinPlacements[placementStr] || {};
        return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
          {},
          baseAlign,
          align,
        );
      }

      function getAlignPopupClassName(
        builtinPlacements,
        prefixCls,
        align,
        isAlignPoint,
      ) {
        var points = align.points;
        for (var placement in builtinPlacements) {
          if (builtinPlacements.hasOwnProperty(placement)) {
            if (
              isPointsEq(
                builtinPlacements[placement].points,
                points,
                isAlignPoint,
              )
            ) {
              return prefixCls + '-placement-' + placement;
            }
          }
        }
        return '';
      }

      function saveRef(name, component) {
        this[name] = component;
      }

      /***/
    },

  /***/ './node_modules/rc-util/es/Children/toArray.js':
    /*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/Children/toArray.js ***!
  \*****************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return toArray;
        },
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );

      function toArray(children) {
        var ret = [];
        react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(
          children,
          function(c) {
            ret.push(c);
          },
        );
        return ret;
      }

      /***/
    },

  /***/ './node_modules/rc-util/es/ContainerRender.js':
    /*!****************************************************!*\
  !*** ./node_modules/rc-util/es/ContainerRender.js ***!
  \****************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js',
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_6__,
      );

      var ContainerRender = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(
          ContainerRender,
          _React$Component,
        );

        function ContainerRender() {
          var _ref;

          var _temp, _this, _ret;

          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
            this,
            ContainerRender,
          );

          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          return (
            (_ret = ((_temp = ((_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
              this,
              (_ref =
                ContainerRender.__proto__ ||
                Object.getPrototypeOf(ContainerRender)).call.apply(
                _ref,
                [this].concat(args),
              ),
            )),
            _this)),
            (_this.removeContainer = function() {
              if (_this.container) {
                react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unmountComponentAtNode(
                  _this.container,
                );
                _this.container.parentNode.removeChild(_this.container);
                _this.container = null;
              }
            }),
            (_this.renderComponent = function(props, ready) {
              var _this$props = _this.props,
                visible = _this$props.visible,
                getComponent = _this$props.getComponent,
                forceRender = _this$props.forceRender,
                getContainer = _this$props.getContainer,
                parent = _this$props.parent;

              if (visible || parent._component || forceRender) {
                if (!_this.container) {
                  _this.container = getContainer();
                }
                react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unstable_renderSubtreeIntoContainer(
                  parent,
                  getComponent(props),
                  _this.container,
                  function callback() {
                    if (ready) {
                      ready.call(this);
                    }
                  },
                );
              }
            }),
            _temp)),
            babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
              _this,
              _ret,
            )
          );
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
          ContainerRender,
          [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                if (this.props.autoMount) {
                  this.renderComponent();
                }
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate() {
                if (this.props.autoMount) {
                  this.renderComponent();
                }
              },
            },
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                if (this.props.autoDestroy) {
                  this.removeContainer();
                }
              },
            },
            {
              key: 'render',
              value: function render() {
                return this.props.children({
                  renderComponent: this.renderComponent,
                  removeContainer: this.removeContainer,
                });
              },
            },
          ],
        );

        return ContainerRender;
      })(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

      ContainerRender.propTypes = {
        autoMount: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        autoDestroy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        forceRender: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        parent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
        getComponent:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
        getContainer:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
        children:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
      };
      ContainerRender.defaultProps = {
        autoMount: true,
        autoDestroy: true,
        forceRender: false,
      };
      /* harmony default export */ __webpack_exports__[
        'default'
      ] = ContainerRender;

      /***/
    },

  /***/ './node_modules/rc-util/es/Dom/addEventListener.js':
    /*!*********************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/addEventListener.js ***!
  \*********************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return addEventListenerWrap;
        },
      );
      /* harmony import */ var add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! add-dom-event-listener */ './node_modules/add-dom-event-listener/lib/index.js',
      );
      /* harmony import */ var add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_1__,
      );

      function addEventListenerWrap(target, eventType, cb, option) {
        /* eslint camelcase: 2 */
        var callback = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a
          .unstable_batchedUpdates
          ? function run(e) {
              react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unstable_batchedUpdates(
                cb,
                e,
              );
            }
          : cb;
        return add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0___default()(
          target,
          eventType,
          callback,
          option,
        );
      }

      /***/
    },

  /***/ './node_modules/rc-util/es/Dom/contains.js':
    /*!*************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/contains.js ***!
  \*************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return contains;
        },
      );
      function contains(root, n) {
        var node = n;
        while (node) {
          if (node === root) {
            return true;
          }
          node = node.parentNode;
        }

        return false;
      }

      /***/
    },

  /***/ './node_modules/rc-util/es/Portal.js':
    /*!*******************************************!*\
  !*** ./node_modules/rc-util/es/Portal.js ***!
  \*******************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js',
      );
      /* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js',
      );
      /* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js',
      );
      /* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js',
      );
      /* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! react-dom */ './node_modules/react-dom/index.js',
      );
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        react_dom__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! prop-types */ './node_modules/prop-types/index.js',
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_6__,
      );

      var Portal = (function(_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(
          Portal,
          _React$Component,
        );

        function Portal() {
          babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(
            this,
            Portal,
          );

          return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(
            this,
            (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(
              this,
              arguments,
            ),
          );
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
          Portal,
          [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                this.createContainer();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function componentDidUpdate(prevProps) {
                var didUpdate = this.props.didUpdate;

                if (didUpdate) {
                  didUpdate(prevProps);
                }
              },
            },
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                this.removeContainer();
              },
            },
            {
              key: 'createContainer',
              value: function createContainer() {
                this._container = this.props.getContainer();
                this.forceUpdate();
              },
            },
            {
              key: 'removeContainer',
              value: function removeContainer() {
                if (this._container) {
                  this._container.parentNode.removeChild(this._container);
                }
              },
            },
            {
              key: 'render',
              value: function render() {
                if (this._container) {
                  return react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.createPortal(
                    this.props.children,
                    this._container,
                  );
                }
                return null;
              },
            },
          ],
        );

        return Portal;
      })(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

      Portal.propTypes = {
        getContainer:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
        children:
          prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired,
        didUpdate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
      };
      /* harmony default export */ __webpack_exports__['default'] = Portal;

      /***/
    },

  /***/ './node_modules/rc-util/es/createChainedFunction.js':
    /*!**********************************************************!*\
  !*** ./node_modules/rc-util/es/createChainedFunction.js ***!
  \**********************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return createChainedFunction;
        },
      );
      /**
       * Safe chained function
       *
       * Will only create a new function if needed,
       * otherwise will pass back existing functions or null.
       *
       * @returns {function|null}
       */
      function createChainedFunction() {
        var args = [].slice.call(arguments, 0);
        if (args.length === 1) {
          return args[0];
        }

        return function chainedFunction() {
          for (var i = 0; i < args.length; i++) {
            if (args[i] && args[i].apply) {
              args[i].apply(this, arguments);
            }
          }
        };
      }

      /***/
    },

  /***/ './node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js':
    /*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function(global) {
        /**
         * A collection of shims that provide minimal functionality of the ES6 collections.
         *
         * These implementations are not meant to be used outside of the ResizeObserver
         * modules as they cover only a limited range of use cases.
         */
        /* eslint-disable require-jsdoc, valid-jsdoc */
        var MapShim = (function() {
          if (typeof Map !== 'undefined') {
            return Map;
          }
          /**
           * Returns index in provided array that matches the specified key.
           *
           * @param {Array<Array>} arr
           * @param {*} key
           * @returns {number}
           */
          function getIndex(arr, key) {
            var result = -1;
            arr.some(function(entry, index) {
              if (entry[0] === key) {
                result = index;
                return true;
              }
              return false;
            });
            return result;
          }
          return /** @class */ (function() {
            function class_1() {
              this.__entries__ = [];
            }
            Object.defineProperty(class_1.prototype, 'size', {
              /**
               * @returns {boolean}
               */
              get: function() {
                return this.__entries__.length;
              },
              enumerable: true,
              configurable: true,
            });
            /**
             * @param {*} key
             * @returns {*}
             */
            class_1.prototype.get = function(key) {
              var index = getIndex(this.__entries__, key);
              var entry = this.__entries__[index];
              return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */
            class_1.prototype.set = function(key, value) {
              var index = getIndex(this.__entries__, key);
              if (~index) {
                this.__entries__[index][1] = value;
              } else {
                this.__entries__.push([key, value]);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.delete = function(key) {
              var entries = this.__entries__;
              var index = getIndex(entries, key);
              if (~index) {
                entries.splice(index, 1);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.has = function(key) {
              return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */
            class_1.prototype.clear = function() {
              this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */
            class_1.prototype.forEach = function(callback, ctx) {
              if (ctx === void 0) {
                ctx = null;
              }
              for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
              }
            };
            return class_1;
          })();
        })();

        /**
         * Detects whether window and document objects are available in current environment.
         */
        var isBrowser =
          typeof window !== 'undefined' &&
          typeof document !== 'undefined' &&
          window.document === document;

        // Returns global object of a current environment.
        var global$1 = (function() {
          if (typeof global !== 'undefined' && global.Math === Math) {
            return global;
          }
          if (typeof self !== 'undefined' && self.Math === Math) {
            return self;
          }
          if (typeof window !== 'undefined' && window.Math === Math) {
            return window;
          }
          // eslint-disable-next-line no-new-func
          return Function('return this')();
        })();

        /**
         * A shim for the requestAnimationFrame which falls back to the setTimeout if
         * first one is not supported.
         *
         * @returns {number} Requests' identifier.
         */
        var requestAnimationFrame$1 = (function() {
          if (typeof requestAnimationFrame === 'function') {
            // It's required to use a bounded function because IE sometimes throws
            // an "Invalid calling object" error if rAF is invoked without the global
            // object on the left hand side.
            return requestAnimationFrame.bind(global$1);
          }
          return function(callback) {
            return setTimeout(function() {
              return callback(Date.now());
            }, 1000 / 60);
          };
        })();

        // Defines minimum timeout before adding a trailing call.
        var trailingTimeout = 2;
        /**
         * Creates a wrapper function which ensures that provided callback will be
         * invoked only once during the specified delay period.
         *
         * @param {Function} callback - Function to be invoked after the delay period.
         * @param {number} delay - Delay after which to invoke callback.
         * @returns {Function}
         */
        function throttle(callback, delay) {
          var leadingCall = false,
            trailingCall = false,
            lastCallTime = 0;
          /**
           * Invokes the original callback function and schedules new invocation if
           * the "proxy" was called during current request.
           *
           * @returns {void}
           */
          function resolvePending() {
            if (leadingCall) {
              leadingCall = false;
              callback();
            }
            if (trailingCall) {
              proxy();
            }
          }
          /**
           * Callback invoked after the specified delay. It will further postpone
           * invocation of the original function delegating it to the
           * requestAnimationFrame.
           *
           * @returns {void}
           */
          function timeoutCallback() {
            requestAnimationFrame$1(resolvePending);
          }
          /**
           * Schedules invocation of the original function.
           *
           * @returns {void}
           */
          function proxy() {
            var timeStamp = Date.now();
            if (leadingCall) {
              // Reject immediately following calls.
              if (timeStamp - lastCallTime < trailingTimeout) {
                return;
              }
              // Schedule new call to be in invoked when the pending one is resolved.
              // This is important for "transitions" which never actually start
              // immediately so there is a chance that we might miss one if change
              // happens amids the pending invocation.
              trailingCall = true;
            } else {
              leadingCall = true;
              trailingCall = false;
              setTimeout(timeoutCallback, delay);
            }
            lastCallTime = timeStamp;
          }
          return proxy;
        }

        // Minimum delay before invoking the update of observers.
        var REFRESH_DELAY = 20;
        // A list of substrings of CSS properties used to find transition events that
        // might affect dimensions of observed elements.
        var transitionKeys = [
          'top',
          'right',
          'bottom',
          'left',
          'width',
          'height',
          'size',
          'weight',
        ];
        // Check if MutationObserver is available.
        var mutationObserverSupported = typeof MutationObserver !== 'undefined';
        /**
         * Singleton controller class which handles updates of ResizeObserver instances.
         */
        var ResizeObserverController = /** @class */ (function() {
          /**
           * Creates a new instance of ResizeObserverController.
           *
           * @private
           */
          function ResizeObserverController() {
            /**
             * Indicates whether DOM listeners have been added.
             *
             * @private {boolean}
             */
            this.connected_ = false;
            /**
             * Tells that controller has subscribed for Mutation Events.
             *
             * @private {boolean}
             */
            this.mutationEventsAdded_ = false;
            /**
             * Keeps reference to the instance of MutationObserver.
             *
             * @private {MutationObserver}
             */
            this.mutationsObserver_ = null;
            /**
             * A list of connected observers.
             *
             * @private {Array<ResizeObserverSPI>}
             */
            this.observers_ = [];
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
          }
          /**
           * Adds observer to observers list.
           *
           * @param {ResizeObserverSPI} observer - Observer to be added.
           * @returns {void}
           */
          ResizeObserverController.prototype.addObserver = function(observer) {
            if (!~this.observers_.indexOf(observer)) {
              this.observers_.push(observer);
            }
            // Add listeners if they haven't been added yet.
            if (!this.connected_) {
              this.connect_();
            }
          };
          /**
           * Removes observer from observers list.
           *
           * @param {ResizeObserverSPI} observer - Observer to be removed.
           * @returns {void}
           */
          ResizeObserverController.prototype.removeObserver = function(
            observer,
          ) {
            var observers = this.observers_;
            var index = observers.indexOf(observer);
            // Remove observer if it's present in registry.
            if (~index) {
              observers.splice(index, 1);
            }
            // Remove listeners if controller has no connected observers.
            if (!observers.length && this.connected_) {
              this.disconnect_();
            }
          };
          /**
           * Invokes the update of observers. It will continue running updates insofar
           * it detects changes.
           *
           * @returns {void}
           */
          ResizeObserverController.prototype.refresh = function() {
            var changesDetected = this.updateObservers_();
            // Continue running updates if changes have been detected as there might
            // be future ones caused by CSS transitions.
            if (changesDetected) {
              this.refresh();
            }
          };
          /**
           * Updates every observer from observers list and notifies them of queued
           * entries.
           *
           * @private
           * @returns {boolean} Returns "true" if any observer has detected changes in
           *      dimensions of it's elements.
           */
          ResizeObserverController.prototype.updateObservers_ = function() {
            // Collect observers that have active observations.
            var activeObservers = this.observers_.filter(function(observer) {
              return observer.gatherActive(), observer.hasActive();
            });
            // Deliver notifications in a separate cycle in order to avoid any
            // collisions between observers, e.g. when multiple instances of
            // ResizeObserver are tracking the same element and the callback of one
            // of them changes content dimensions of the observed target. Sometimes
            // this may result in notifications being blocked for the rest of observers.
            activeObservers.forEach(function(observer) {
              return observer.broadcastActive();
            });
            return activeObservers.length > 0;
          };
          /**
           * Initializes DOM listeners.
           *
           * @private
           * @returns {void}
           */
          ResizeObserverController.prototype.connect_ = function() {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already added.
            if (!isBrowser || this.connected_) {
              return;
            }
            // Subscription to the "Transitionend" event is used as a workaround for
            // delayed transitions. This way it's possible to capture at least the
            // final state of an element.
            document.addEventListener('transitionend', this.onTransitionEnd_);
            window.addEventListener('resize', this.refresh);
            if (mutationObserverSupported) {
              this.mutationsObserver_ = new MutationObserver(this.refresh);
              this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true,
              });
            } else {
              document.addEventListener('DOMSubtreeModified', this.refresh);
              this.mutationEventsAdded_ = true;
            }
            this.connected_ = true;
          };
          /**
           * Removes DOM listeners.
           *
           * @private
           * @returns {void}
           */
          ResizeObserverController.prototype.disconnect_ = function() {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already removed.
            if (!isBrowser || !this.connected_) {
              return;
            }
            document.removeEventListener(
              'transitionend',
              this.onTransitionEnd_,
            );
            window.removeEventListener('resize', this.refresh);
            if (this.mutationsObserver_) {
              this.mutationsObserver_.disconnect();
            }
            if (this.mutationEventsAdded_) {
              document.removeEventListener('DOMSubtreeModified', this.refresh);
            }
            this.mutationsObserver_ = null;
            this.mutationEventsAdded_ = false;
            this.connected_ = false;
          };
          /**
           * "Transitionend" event handler.
           *
           * @private
           * @param {TransitionEvent} event
           * @returns {void}
           */
          ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
            var _b = _a.propertyName,
              propertyName = _b === void 0 ? '' : _b;
            // Detect whether transition may affect dimensions of an element.
            var isReflowProperty = transitionKeys.some(function(key) {
              return !!~propertyName.indexOf(key);
            });
            if (isReflowProperty) {
              this.refresh();
            }
          };
          /**
           * Returns instance of the ResizeObserverController.
           *
           * @returns {ResizeObserverController}
           */
          ResizeObserverController.getInstance = function() {
            if (!this.instance_) {
              this.instance_ = new ResizeObserverController();
            }
            return this.instance_;
          };
          /**
           * Holds reference to the controller's instance.
           *
           * @private {ResizeObserverController}
           */
          ResizeObserverController.instance_ = null;
          return ResizeObserverController;
        })();

        /**
         * Defines non-writable/enumerable properties of the provided target object.
         *
         * @param {Object} target - Object for which to define properties.
         * @param {Object} props - Properties to be defined.
         * @returns {Object} Target object.
         */
        var defineConfigurable = function(target, props) {
          for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var key = _a[_i];
            Object.defineProperty(target, key, {
              value: props[key],
              enumerable: false,
              writable: false,
              configurable: true,
            });
          }
          return target;
        };

        /**
         * Returns the global object associated with provided element.
         *
         * @param {Object} target
         * @returns {Object}
         */
        var getWindowOf = function(target) {
          // Assume that the element is an instance of Node, which means that it
          // has the "ownerDocument" property from which we can retrieve a
          // corresponding global object.
          var ownerGlobal =
            target && target.ownerDocument && target.ownerDocument.defaultView;
          // Return the local global object if it's not possible extract one from
          // provided element.
          return ownerGlobal || global$1;
        };

        // Placeholder of an empty content rectangle.
        var emptyRect = createRectInit(0, 0, 0, 0);
        /**
         * Converts provided string to a number.
         *
         * @param {number|string} value
         * @returns {number}
         */
        function toFloat(value) {
          return parseFloat(value) || 0;
        }
        /**
         * Extracts borders size from provided styles.
         *
         * @param {CSSStyleDeclaration} styles
         * @param {...string} positions - Borders positions (top, right, ...)
         * @returns {number}
         */
        function getBordersSize(styles) {
          var positions = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            positions[_i - 1] = arguments[_i];
          }
          return positions.reduce(function(size, position) {
            var value = styles['border-' + position + '-width'];
            return size + toFloat(value);
          }, 0);
        }
        /**
         * Extracts paddings sizes from provided styles.
         *
         * @param {CSSStyleDeclaration} styles
         * @returns {Object} Paddings box.
         */
        function getPaddings(styles) {
          var positions = ['top', 'right', 'bottom', 'left'];
          var paddings = {};
          for (
            var _i = 0, positions_1 = positions;
            _i < positions_1.length;
            _i++
          ) {
            var position = positions_1[_i];
            var value = styles['padding-' + position];
            paddings[position] = toFloat(value);
          }
          return paddings;
        }
        /**
         * Calculates content rectangle of provided SVG element.
         *
         * @param {SVGGraphicsElement} target - Element content rectangle of which needs
         *      to be calculated.
         * @returns {DOMRectInit}
         */
        function getSVGContentRect(target) {
          var bbox = target.getBBox();
          return createRectInit(0, 0, bbox.width, bbox.height);
        }
        /**
         * Calculates content rectangle of provided HTMLElement.
         *
         * @param {HTMLElement} target - Element for which to calculate the content rectangle.
         * @returns {DOMRectInit}
         */
        function getHTMLElementContentRect(target) {
          // Client width & height properties can't be
          // used exclusively as they provide rounded values.
          var clientWidth = target.clientWidth,
            clientHeight = target.clientHeight;
          // By this condition we can catch all non-replaced inline, hidden and
          // detached elements. Though elements with width & height properties less
          // than 0.5 will be discarded as well.
          //
          // Without it we would need to implement separate methods for each of
          // those cases and it's not possible to perform a precise and performance
          // effective test for hidden elements. E.g. even jQuery's ':visible' filter
          // gives wrong results for elements with width & height less than 0.5.
          if (!clientWidth && !clientHeight) {
            return emptyRect;
          }
          var styles = getWindowOf(target).getComputedStyle(target);
          var paddings = getPaddings(styles);
          var horizPad = paddings.left + paddings.right;
          var vertPad = paddings.top + paddings.bottom;
          // Computed styles of width & height are being used because they are the
          // only dimensions available to JS that contain non-rounded values. It could
          // be possible to utilize the getBoundingClientRect if only it's data wasn't
          // affected by CSS transformations let alone paddings, borders and scroll bars.
          var width = toFloat(styles.width),
            height = toFloat(styles.height);
          // Width & height include paddings and borders when the 'border-box' box
          // model is applied (except for IE).
          if (styles.boxSizing === 'border-box') {
            // Following conditions are required to handle Internet Explorer which
            // doesn't include paddings and borders to computed CSS dimensions.
            //
            // We can say that if CSS dimensions + paddings are equal to the "client"
            // properties then it's either IE, and thus we don't need to subtract
            // anything, or an element merely doesn't have paddings/borders styles.
            if (Math.round(width + horizPad) !== clientWidth) {
              width -= getBordersSize(styles, 'left', 'right') + horizPad;
            }
            if (Math.round(height + vertPad) !== clientHeight) {
              height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
            }
          }
          // Following steps can't be applied to the document's root element as its
          // client[Width/Height] properties represent viewport area of the window.
          // Besides, it's as well not necessary as the <html> itself neither has
          // rendered scroll bars nor it can be clipped.
          if (!isDocumentElement(target)) {
            // In some browsers (only in Firefox, actually) CSS width & height
            // include scroll bars size which can be removed at this step as scroll
            // bars are the only difference between rounded dimensions + paddings
            // and "client" properties, though that is not always true in Chrome.
            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
            // Chrome has a rather weird rounding of "client" properties.
            // E.g. for an element with content width of 314.2px it sometimes gives
            // the client width of 315px and for the width of 314.7px it may give
            // 314px. And it doesn't happen all the time. So just ignore this delta
            // as a non-relevant.
            if (Math.abs(vertScrollbar) !== 1) {
              width -= vertScrollbar;
            }
            if (Math.abs(horizScrollbar) !== 1) {
              height -= horizScrollbar;
            }
          }
          return createRectInit(paddings.left, paddings.top, width, height);
        }
        /**
         * Checks whether provided element is an instance of the SVGGraphicsElement.
         *
         * @param {Element} target - Element to be checked.
         * @returns {boolean}
         */
        var isSVGGraphicsElement = (function() {
          // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
          // interface.
          if (typeof SVGGraphicsElement !== 'undefined') {
            return function(target) {
              return target instanceof getWindowOf(target).SVGGraphicsElement;
            };
          }
          // If it's so, then check that element is at least an instance of the
          // SVGElement and that it has the "getBBox" method.
          // eslint-disable-next-line no-extra-parens
          return function(target) {
            return (
              target instanceof getWindowOf(target).SVGElement &&
              typeof target.getBBox === 'function'
            );
          };
        })();
        /**
         * Checks whether provided element is a document element (<html>).
         *
         * @param {Element} target - Element to be checked.
         * @returns {boolean}
         */
        function isDocumentElement(target) {
          return target === getWindowOf(target).document.documentElement;
        }
        /**
         * Calculates an appropriate content rectangle for provided html or svg element.
         *
         * @param {Element} target - Element content rectangle of which needs to be calculated.
         * @returns {DOMRectInit}
         */
        function getContentRect(target) {
          if (!isBrowser) {
            return emptyRect;
          }
          if (isSVGGraphicsElement(target)) {
            return getSVGContentRect(target);
          }
          return getHTMLElementContentRect(target);
        }
        /**
         * Creates rectangle with an interface of the DOMRectReadOnly.
         * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
         *
         * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
         * @returns {DOMRectReadOnly}
         */
        function createReadOnlyRect(_a) {
          var x = _a.x,
            y = _a.y,
            width = _a.width,
            height = _a.height;
          // If DOMRectReadOnly is available use it as a prototype for the rectangle.
          var Constr =
            typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
          var rect = Object.create(Constr.prototype);
          // Rectangle's properties are not writable and non-enumerable.
          defineConfigurable(rect, {
            x: x,
            y: y,
            width: width,
            height: height,
            top: y,
            right: x + width,
            bottom: height + y,
            left: x,
          });
          return rect;
        }
        /**
         * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
         * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
         *
         * @param {number} x - X coordinate.
         * @param {number} y - Y coordinate.
         * @param {number} width - Rectangle's width.
         * @param {number} height - Rectangle's height.
         * @returns {DOMRectInit}
         */
        function createRectInit(x, y, width, height) {
          return { x: x, y: y, width: width, height: height };
        }

        /**
         * Class that is responsible for computations of the content rectangle of
         * provided DOM element and for keeping track of it's changes.
         */
        var ResizeObservation = /** @class */ (function() {
          /**
           * Creates an instance of ResizeObservation.
           *
           * @param {Element} target - Element to be observed.
           */
          function ResizeObservation(target) {
            /**
             * Broadcasted width of content rectangle.
             *
             * @type {number}
             */
            this.broadcastWidth = 0;
            /**
             * Broadcasted height of content rectangle.
             *
             * @type {number}
             */
            this.broadcastHeight = 0;
            /**
             * Reference to the last observed content rectangle.
             *
             * @private {DOMRectInit}
             */
            this.contentRect_ = createRectInit(0, 0, 0, 0);
            this.target = target;
          }
          /**
           * Updates content rectangle and tells whether it's width or height properties
           * have changed since the last broadcast.
           *
           * @returns {boolean}
           */
          ResizeObservation.prototype.isActive = function() {
            var rect = getContentRect(this.target);
            this.contentRect_ = rect;
            return (
              rect.width !== this.broadcastWidth ||
              rect.height !== this.broadcastHeight
            );
          };
          /**
           * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
           * from the corresponding properties of the last observed content rectangle.
           *
           * @returns {DOMRectInit} Last observed content rectangle.
           */
          ResizeObservation.prototype.broadcastRect = function() {
            var rect = this.contentRect_;
            this.broadcastWidth = rect.width;
            this.broadcastHeight = rect.height;
            return rect;
          };
          return ResizeObservation;
        })();

        var ResizeObserverEntry = /** @class */ (function() {
          /**
           * Creates an instance of ResizeObserverEntry.
           *
           * @param {Element} target - Element that is being observed.
           * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
           */
          function ResizeObserverEntry(target, rectInit) {
            var contentRect = createReadOnlyRect(rectInit);
            // According to the specification following properties are not writable
            // and are also not enumerable in the native implementation.
            //
            // Property accessors are not being used as they'd require to define a
            // private WeakMap storage which may cause memory leaks in browsers that
            // don't support this type of collections.
            defineConfigurable(this, {
              target: target,
              contentRect: contentRect,
            });
          }
          return ResizeObserverEntry;
        })();

        var ResizeObserverSPI = /** @class */ (function() {
          /**
           * Creates a new instance of ResizeObserver.
           *
           * @param {ResizeObserverCallback} callback - Callback function that is invoked
           *      when one of the observed elements changes it's content dimensions.
           * @param {ResizeObserverController} controller - Controller instance which
           *      is responsible for the updates of observer.
           * @param {ResizeObserver} callbackCtx - Reference to the public
           *      ResizeObserver instance which will be passed to callback function.
           */
          function ResizeObserverSPI(callback, controller, callbackCtx) {
            /**
             * Collection of resize observations that have detected changes in dimensions
             * of elements.
             *
             * @private {Array<ResizeObservation>}
             */
            this.activeObservations_ = [];
            /**
             * Registry of the ResizeObservation instances.
             *
             * @private {Map<Element, ResizeObservation>}
             */
            this.observations_ = new MapShim();
            if (typeof callback !== 'function') {
              throw new TypeError(
                'The callback provided as parameter 1 is not a function.',
              );
            }
            this.callback_ = callback;
            this.controller_ = controller;
            this.callbackCtx_ = callbackCtx;
          }
          /**
           * Starts observing provided element.
           *
           * @param {Element} target - Element to be observed.
           * @returns {void}
           */
          ResizeObserverSPI.prototype.observe = function(target) {
            if (!arguments.length) {
              throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (
              typeof Element === 'undefined' ||
              !(Element instanceof Object)
            ) {
              return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
              throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is already being observed.
            if (observations.has(target)) {
              return;
            }
            observations.set(target, new ResizeObservation(target));
            this.controller_.addObserver(this);
            // Force the update of observations.
            this.controller_.refresh();
          };
          /**
           * Stops observing provided element.
           *
           * @param {Element} target - Element to stop observing.
           * @returns {void}
           */
          ResizeObserverSPI.prototype.unobserve = function(target) {
            if (!arguments.length) {
              throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (
              typeof Element === 'undefined' ||
              !(Element instanceof Object)
            ) {
              return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
              throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is not being observed.
            if (!observations.has(target)) {
              return;
            }
            observations.delete(target);
            if (!observations.size) {
              this.controller_.removeObserver(this);
            }
          };
          /**
           * Stops observing all elements.
           *
           * @returns {void}
           */
          ResizeObserverSPI.prototype.disconnect = function() {
            this.clearActive();
            this.observations_.clear();
            this.controller_.removeObserver(this);
          };
          /**
           * Collects observation instances the associated element of which has changed
           * it's content rectangle.
           *
           * @returns {void}
           */
          ResizeObserverSPI.prototype.gatherActive = function() {
            var _this = this;
            this.clearActive();
            this.observations_.forEach(function(observation) {
              if (observation.isActive()) {
                _this.activeObservations_.push(observation);
              }
            });
          };
          /**
           * Invokes initial callback function with a list of ResizeObserverEntry
           * instances collected from active resize observations.
           *
           * @returns {void}
           */
          ResizeObserverSPI.prototype.broadcastActive = function() {
            // Do nothing if observer doesn't have active observations.
            if (!this.hasActive()) {
              return;
            }
            var ctx = this.callbackCtx_;
            // Create ResizeObserverEntry instance for every active observation.
            var entries = this.activeObservations_.map(function(observation) {
              return new ResizeObserverEntry(
                observation.target,
                observation.broadcastRect(),
              );
            });
            this.callback_.call(ctx, entries, ctx);
            this.clearActive();
          };
          /**
           * Clears the collection of active observations.
           *
           * @returns {void}
           */
          ResizeObserverSPI.prototype.clearActive = function() {
            this.activeObservations_.splice(0);
          };
          /**
           * Tells whether observer has active observations.
           *
           * @returns {boolean}
           */
          ResizeObserverSPI.prototype.hasActive = function() {
            return this.activeObservations_.length > 0;
          };
          return ResizeObserverSPI;
        })();

        // Registry of internal observers. If WeakMap is not available use current shim
        // for the Map collection as it has all required methods and because WeakMap
        // can't be fully polyfilled anyway.
        var observers =
          typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
        /**
         * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
         * exposing only those methods and properties that are defined in the spec.
         */
        var ResizeObserver = /** @class */ (function() {
          /**
           * Creates a new instance of ResizeObserver.
           *
           * @param {ResizeObserverCallback} callback - Callback that is invoked when
           *      dimensions of the observed elements change.
           */
          function ResizeObserver(callback) {
            if (!(this instanceof ResizeObserver)) {
              throw new TypeError('Cannot call a class as a function.');
            }
            if (!arguments.length) {
              throw new TypeError('1 argument required, but only 0 present.');
            }
            var controller = ResizeObserverController.getInstance();
            var observer = new ResizeObserverSPI(callback, controller, this);
            observers.set(this, observer);
          }
          return ResizeObserver;
        })();
        // Expose public methods of ResizeObserver.
        ['observe', 'unobserve', 'disconnect'].forEach(function(method) {
          ResizeObserver.prototype[method] = function() {
            var _a;
            return (_a = observers.get(this))[method].apply(_a, arguments);
          };
        });

        var index = (function() {
          // Export existing implementation if available.
          if (typeof global$1.ResizeObserver !== 'undefined') {
            return global$1.ResizeObserver;
          }
          return ResizeObserver;
        })();

        /* harmony default export */ __webpack_exports__['default'] = index;

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js',
        ),
      ));

      /***/
    },

  /***/ './node_modules/shallowequal/index.js':
    /*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
    /*! no static exports found */
    /***/ function(module, exports) {
      //

      module.exports = function shallowEqual(
        objA,
        objB,
        compare,
        compareContext,
      ) {
        var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

        if (ret !== void 0) {
          return !!ret;
        }

        if (objA === objB) {
          return true;
        }

        if (
          typeof objA !== 'object' ||
          !objA ||
          typeof objB !== 'object' ||
          !objB
        ) {
          return false;
        }

        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);

        if (keysA.length !== keysB.length) {
          return false;
        }

        var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

        // Test for A's keys different from B.
        for (var idx = 0; idx < keysA.length; idx++) {
          var key = keysA[idx];

          if (!bHasOwnProperty(key)) {
            return false;
          }

          var valueA = objA[key];
          var valueB = objB[key];

          ret = compare
            ? compare.call(compareContext, valueA, valueB, key)
            : void 0;

          if (ret === false || (ret === void 0 && valueA !== valueB)) {
            return false;
          }
        }

        return true;
      };

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.e301da6410c665e069e1.hot-update.js.map

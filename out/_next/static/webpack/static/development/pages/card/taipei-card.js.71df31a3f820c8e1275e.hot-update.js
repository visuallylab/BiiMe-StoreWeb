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
              style: {
                textAlign: 'center',
              },
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
            '.container.jsx-3455652785{margin:0 0 16px;padding:16px;border-radius:10px;background-color:white;}.title.jsx-3455652785{font-weight:500;font-size:16px;}.item.jsx-3455652785{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7F7F7F;padding:12px 0;font-size:14px;border-bottom:solid .5px;}.item.jsx-3455652785:last-child{border-bottom:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9Qcm9maWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBRzJCLEFBT0EsQUFLSCxBQVNNLGdCQXBCTixBQU9FLEdBY2pCLFVBcEJxQixFQU9yQixpQkFOeUIsdUJBQ3pCLEdBU3FCLDZGQUNMLGNBQ0MsZUFDQSxlQUNVLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdhbnRkJztcblxuZXhwb3J0IHR5cGUgVFVzZXIgPSB7XG4gIGRpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNlcnRpZmljYXRpb25OYW1lOiBzdHJpbmc7XG4gIGNlcnRpZmljYXRlZEF0OiBzdHJpbmc7XG4gIGV4cGlyZWRBdDogc3RyaW5nO1xuICBpc3N1ZXJOYW1lOiBzdHJpbmc7XG4gIHRyYW5zYWN0aW9uSGFzaDogc3RyaW5nO1xuICBpbWFnZUNoZWNrc3VtOiBzdHJpbmc7XG59O1xuXG50eXBlIFRQcm9wcyA9IHtcbiAgdXNlcjogVFVzZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoeyB1c2VyIH06IFRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8QXZhdGFyIHNyYz1cImh0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmdcIiBzaXplPXs2NH0gc3R5bGU9e3tcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIH19Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkRpZDombmJzcDs8L3NwYW4+PHNwYW4+e3VzZXIuZGlkfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TmFtZTombmJzcDs8L3NwYW4+PHNwYW4+e3VzZXIubmFtZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNlcnRpZmljYXRpb24gTmFtZTombmJzcDs8L3NwYW4+PHNwYW4+e3VzZXIuY2VydGlmaWNhdGlvbk5hbWV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5DZXJ0aWZpY2F0ZWQgQXQ6Jm5ic3A7PC9zcGFuPjxzcGFuPnt1c2VyLmNlcnRpZmljYXRlZEF0fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RXhwaXJlZCBBdDombmJzcDs8L3NwYW4+PHNwYW4+e3VzZXIuZXhwaXJlZEF0fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjN0Y3RjdGO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgLjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Profile.tsx */',
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.71df31a3f820c8e1275e.hot-update.js.map

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
            className: 'jsx-165966183' + ' ' + 'container',
          },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-165966183' + ' ' + 'avatar-container',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                src:
                  'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                size: 80,
                style: {
                  borderRadius: '20px',
                  border: 'solid 1px',
                },
              },
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-165966183' + ' ' + 'item',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-165966183' + ' ' + 'title',
              },
              'Did:\xA0',
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-165966183',
              },
              user.did,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-165966183' + ' ' + 'item',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-165966183' + ' ' + 'title',
              },
              'Name:\xA0',
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-165966183',
              },
              user.name,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-165966183' + ' ' + 'item',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-165966183' + ' ' + 'title',
              },
              'Certification Name:\xA0',
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-165966183',
              },
              user.certificationName,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-165966183' + ' ' + 'item',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-165966183' + ' ' + 'title',
              },
              'Certificated At:\xA0',
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-165966183',
              },
              user.certificatedAt,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            {
              className: 'jsx-165966183' + ' ' + 'item',
            },
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-165966183' + ' ' + 'title',
              },
              'Expired At:\xA0',
            ),
            react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
              'span',
              {
                className: 'jsx-165966183',
              },
              user.expiredAt,
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a,
            {
              id: '165966183',
            },
            '.container.jsx-165966183{margin:0 0 16px;padding:16px;border-radius:10px;background-color:white;}.title.jsx-165966183{font-weight:500;font-size:16px;}.item.jsx-165966183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7F7F7F;padding:12px 0;font-size:14px;border-bottom:solid .5px;}.item.jsx-165966183:last-child{border-bottom:none;}.avatar-container.jsx-165966183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvY29tcG9uZW50cy9Qcm9maWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2tCLEFBRzJCLEFBT0EsQUFLSCxBQVNNLEFBSU4sZ0JBeEJBLEFBT0UsR0FjakIsVUFwQnFCLEVBT3JCLGlCQU55Qix1QkFDekIsR0FTcUIsQUFhSSw2RkFaVCxNQWFLLFFBWkosV0FhakIsSUFaaUIsZUFDVSx5QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL1Zpc3VhbGx5TGFiL0JpaU1lLXN0b3JlLXdlYi9jb21wb25lbnRzL1Byb2ZpbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCB0eXBlIFRVc2VyID0ge1xuICBkaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBjZXJ0aWZpY2F0aW9uTmFtZTogc3RyaW5nO1xuICBjZXJ0aWZpY2F0ZWRBdDogc3RyaW5nO1xuICBleHBpcmVkQXQ6IHN0cmluZztcbiAgaXNzdWVyTmFtZTogc3RyaW5nO1xuICB0cmFuc2FjdGlvbkhhc2g6IHN0cmluZztcbiAgaW1hZ2VDaGVja3N1bTogc3RyaW5nO1xufTtcblxudHlwZSBUUHJvcHMgPSB7XG4gIHVzZXI6IFRVc2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHsgdXNlciB9OiBUUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItY29udGFpbmVyXCI+XG4gICAgICAgIDxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIHNpemU9ezgwfSBzdHlsZT17e1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxuICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCdcbiAgICAgICAgfX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5EaWQ6Jm5ic3A7PC9zcGFuPjxzcGFuPnt1c2VyLmRpZH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPk5hbWU6Jm5ic3A7PC9zcGFuPjxzcGFuPnt1c2VyLm5hbWV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5DZXJ0aWZpY2F0aW9uIE5hbWU6Jm5ic3A7PC9zcGFuPjxzcGFuPnt1c2VyLmNlcnRpZmljYXRpb25OYW1lfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Q2VydGlmaWNhdGVkIEF0OiZuYnNwOzwvc3Bhbj48c3Bhbj57dXNlci5jZXJ0aWZpY2F0ZWRBdH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV4cGlyZWQgQXQ6Jm5ic3A7PC9zcGFuPjxzcGFuPnt1c2VyLmV4cGlyZWRBdH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogIzdGN0Y3RjtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIC41cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF2YXRhci1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/components/Profile.tsx */',
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.89b6dc64d09f56ae0a4e.hot-update.js.map

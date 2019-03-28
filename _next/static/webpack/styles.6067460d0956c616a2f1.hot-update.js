webpackHotUpdate('styles', {
  /***/ './assets/style.less':
    /*!***************************!*\
  !*** ./assets/style.less ***!
  \***************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      // extracted by extract-css-chunks-webpack-plugin;
      if (true) {
        var injectCss = function injectCss(prev, href) {
          var link = prev.cloneNode();
          link.href = href;
          link.onload = function() {
            prev.parentNode.removeChild(prev);
          };
          prev.stale = true;
          prev.parentNode.insertBefore(link, prev);
        };
        module.hot.dispose(function() {
          window.__webpack_reload_css__ = true;
        });
        if (window.__webpack_reload_css__) {
          module.hot.__webpack_reload_css__ = false;
          console.log('[HMR] Reloading stylesheets...');
          var prefix =
            document.location.protocol + '//' + document.location.host;
          document
            .querySelectorAll('link[href][rel=stylesheet]')
            .forEach(function(link) {
              if (!link.href.match(prefix) || link.stale) return;
              injectCss(link, link.href.split('?')[0] + '?unix=1553769801829');
            });
        }
      }

      /***/
    },

  /***/ './node_modules/antd/lib/layout/style/index.less':
    /*!*******************************************************!*\
  !*** ./node_modules/antd/lib/layout/style/index.less ***!
  \*******************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      // extracted by extract-css-chunks-webpack-plugin;
      if (true) {
        var injectCss = function injectCss(prev, href) {
          var link = prev.cloneNode();
          link.href = href;
          link.onload = function() {
            prev.parentNode.removeChild(prev);
          };
          prev.stale = true;
          prev.parentNode.insertBefore(link, prev);
        };
        module.hot.dispose(function() {
          window.__webpack_reload_css__ = true;
        });
        if (window.__webpack_reload_css__) {
          module.hot.__webpack_reload_css__ = false;
          console.log('[HMR] Reloading stylesheets...');
          var prefix =
            document.location.protocol + '//' + document.location.host;
          document
            .querySelectorAll('link[href][rel=stylesheet]')
            .forEach(function(link) {
              if (!link.href.match(prefix) || link.stale) return;
              injectCss(link, link.href.split('?')[0] + '?unix=1553769802459');
            });
        }
      }

      /***/
    },

  /***/ '?5db7': false,

  /***/ '?9ffe': false,
});
//# sourceMappingURL=styles.6067460d0956c616a2f1.hot-update.js.map

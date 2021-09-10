webpackHotUpdate("main",{

/***/ "./src/globalStyles.js":
/*!*****************************!*\
  !*** ./src/globalStyles.js ***!
  \*****************************/
/*! exports provided: Container, Card, Button, FormActions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActions", function() { return FormActions; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  main {
    margin-top: 3rem
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 2rem;
  position: relative;
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin: 0 auto;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background-color: #fff;
  padding: 0;
  width: 90%;
  max-width: 500px;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  border-radius: 4px;
  background: ${({
  primary
}) => primary ? '#4B59F7' : '#0467FB'};
  white-space: nowrap;
  padding: ${({
  big
}) => big ? '12px 64px' : '10px 20px'};
  color: #fff;
  font-size: ${({
  fontBig
}) => fontBig ? '20px' : '16px'};

  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({
  primary
}) => primary ? '#0467FB' : '#4B59F7'};
  }

  &:disabled {
    background: #ccc;
    color: #979797;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;
const FormActions = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.c4b7570fd18cb8a43759.hot-update.js.map
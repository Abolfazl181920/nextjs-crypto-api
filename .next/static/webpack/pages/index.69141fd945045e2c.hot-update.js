"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SearchBar_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SearchBar/Search */ \"./components/SearchBar/Search.js\");\n/* harmony import */ var _components_AllCoins_Coins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AllCoins/Coins */ \"./components/AllCoins/Coins.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/abolfazl/create-next/nextjs-crypto-api/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(_ref) {\n  _s();\n\n  var filteredCoins = _ref.filteredCoins;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var allCoins = filteredCoins.filter(function (coin) {\n    return coin.name.toLowerCase().includes(search.toLowerCase());\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_SearchBar_Search__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      onChange: handleSea,\n      type: \"text\",\n      placeholder: \"search ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_AllCoins_Coins__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      filteredCoins: allCoins\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"g41oNVRwlOed1NKMIGRlTp5flsU=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0csSUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQWpCQyxhQUFpQixRQUFqQkEsYUFBaUI7O0FBRTlDLGtCQUE4QkosK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQUEsTUFBUUssTUFBUjtBQUFBLE1BQWdCQyxTQUFoQjs7QUFFQSxNQUFNQyxRQUFRLEdBQUdILGFBQWEsQ0FBQ0ksTUFBZCxDQUFxQixVQUFBQyxJQUFJO0FBQUEsV0FDeENBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxXQUFWLEdBQXdCQyxRQUF4QixDQUFpQ1AsTUFBTSxDQUFDTSxXQUFQLEVBQWpDLENBRHdDO0FBQUEsR0FBekIsQ0FBakI7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLG9FQUFEO0FBQVEsY0FBUSxFQUFFRSxTQUFsQjtBQUE2QixVQUFJLEVBQUMsTUFBbEM7QUFBeUMsaUJBQVcsRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxrRUFBRDtBQUFPLG1CQUFhLEVBQUVOO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztHQWR1Qko7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoJ1xuaW1wb3J0IENvaW5zIGZyb20gJy4uL2NvbXBvbmVudHMvQWxsQ29pbnMvQ29pbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBmaWx0ZXJlZENvaW5zIH0pIHtcblxuICBjb25zdCBbIHNlYXJjaCwgc2V0U2VhcmNoIF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBhbGxDb2lucyA9IGZpbHRlcmVkQ29pbnMuZmlsdGVyKGNvaW4gPT4gKFxuICAgIGNvaW4ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICApKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTZWFyY2ggb25DaGFuZ2U9e2hhbmRsZVNlYX0gdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J3NlYXJjaCAuLi4nIC8+XG4gICAgICA8Q29pbnMgZmlsdGVyZWRDb2lucz17YWxsQ29pbnN9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zL21hcmtldHM/dnNfY3VycmVuY3k9dXNkJm9yZGVyPW1hcmtldF9jYXBfZGVzYyZwZXJfcGFnZT0xMCZwYWdlPTEmc3BhcmtsaW5lPWZhbHNlJylcblxuICBjb25zdCBmaWx0ZXJlZENvaW5zID0gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGZpbHRlcmVkQ29pbnNcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTZWFyY2giLCJDb2lucyIsIkhvbWUiLCJmaWx0ZXJlZENvaW5zIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiYWxsQ29pbnMiLCJmaWx0ZXIiLCJjb2luIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJoYW5kbGVTZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
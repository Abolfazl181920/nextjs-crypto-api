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

/***/ "./components/AllCoins/Coins.js":
/*!**************************************!*\
  !*** ./components/AllCoins/Coins.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MapedCoins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapedCoins */ \"./components/AllCoins/MapedCoins.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/abolfazl/create-next/nextjs-crypto-api/components/AllCoins/Coins.js\",\n    _this = undefined;\n\n\n\n\n\nvar Coins = function Coins(_ref) {\n  var filteredCoins = _ref.filteredCoins;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n      children: filteredCoins.map(function (coin) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MapedCoins__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          name: coin.name,\n          current_price: coin.current_price,\n          last24h: coin.market_cap_change_percentage_24h\n        }, coin.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Coins;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coins);\n\nvar _c;\n\n$RefreshReg$(_c, \"Coins\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsbENvaW5zL0NvaW5zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXVCO0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUNqQyxzQkFDSSw4REFBQyxrREFBRDtBQUFBLDJCQUNJO0FBQUEsZ0JBRVFBLGFBQWEsQ0FBQ0MsR0FBZCxDQUFtQixVQUFBQyxJQUFJO0FBQUEsNEJBQ25CLDhEQUFDLG1EQUFEO0FBRUksY0FBSSxFQUFFQSxJQUFJLENBQUNDLElBRmY7QUFHSSx1QkFBYSxFQUFFRCxJQUFJLENBQUNFLGFBSHhCO0FBSUksaUJBQU8sRUFBRUYsSUFBSSxDQUFDRztBQUpsQixXQUNTSCxJQUFJLENBQUNJLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbUI7QUFBQSxPQUF2QjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFnQkgsQ0FqQkQ7O0tBQU1QO0FBbUJOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWxsQ29pbnMvQ29pbnMuanM/OWQ0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTWFwZWRDb2lucyBmcm9tICcuL01hcGVkQ29pbnMnXG5cbmNvbnN0IENvaW5zID0gKHsgZmlsdGVyZWRDb2lucyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZENvaW5zLm1hcCgoY29pbiA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFwZWRDb2luc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29pbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjb2luLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9wcmljZT17Y29pbi5jdXJyZW50X3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QyNGg9e2NvaW4ubWFya2V0X2NhcF9jaGFuZ2VfcGVyY2VudGFnZV8yNGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvaW5zXG4iXSwibmFtZXMiOlsiTGluayIsIk1hcGVkQ29pbnMiLCJDb2lucyIsImZpbHRlcmVkQ29pbnMiLCJtYXAiLCJjb2luIiwibmFtZSIsImN1cnJlbnRfcHJpY2UiLCJtYXJrZXRfY2FwX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AllCoins/Coins.js\n");

/***/ })

});
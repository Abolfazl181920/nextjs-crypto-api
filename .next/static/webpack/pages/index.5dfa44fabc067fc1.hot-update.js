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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MapedCoins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapedCoins */ \"./components/AllCoins/MapedCoins.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/abolfazl/create-next/nextjs-crypto-api/components/AllCoins/Coins.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Coins = function Coins(_ref) {\n  var filteredCoins = _ref.filteredCoins;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n    href: \"/eachcoin/[id]\",\n    as: \"/eachcoin/\".concat(id),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n      h: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n      children: filteredCoins.map(function (coin) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_MapedCoins__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          name: coin.name,\n          current_price: coin.current_price,\n          last24h: coin.market_cap_change_percentage_24h\n        }, coin.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Coins;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coins);\n\nvar _c;\n\n$RefreshReg$(_c, \"Coins\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsbENvaW5zL0NvaW5zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUFFQSxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF1QjtBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDakMsc0JBQ0ksOERBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0JBQVg7QUFBNEIsTUFBRSxzQkFBZUMsRUFBZixDQUE5QjtBQUFBLDRCQUNJO0FBQUcsT0FBQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUEsZ0JBRVFELGFBQWEsQ0FBQ0UsR0FBZCxDQUFtQixVQUFBQyxJQUFJO0FBQUEsNEJBQ25CLDhEQUFDLG1EQUFEO0FBRUksY0FBSSxFQUFFQSxJQUFJLENBQUNDLElBRmY7QUFHSSx1QkFBYSxFQUFFRCxJQUFJLENBQUNFLGFBSHhCO0FBSUksaUJBQU8sRUFBRUYsSUFBSSxDQUFDRztBQUpsQixXQUNTSCxJQUFJLENBQUNGLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbUI7QUFBQSxPQUF2QjtBQUZSLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBbEJEOztLQUFNRjtBQW9CTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FsbENvaW5zL0NvaW5zLmpzPzlkNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IE1hcGVkQ29pbnMgZnJvbSAnLi9NYXBlZENvaW5zJ1xuXG5jb25zdCBDb2lucyA9ICh7IGZpbHRlcmVkQ29pbnMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9lYWNoY29pbi9baWRdJyBhcz17YC9lYWNoY29pbi8ke2lkfWB9PlxuICAgICAgICAgICAgPGEgaD48L2E+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRDb2lucy5tYXAoKGNvaW4gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcGVkQ29pbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvaW4uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y29pbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfcHJpY2U9e2NvaW4uY3VycmVudF9wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0MjRoPXtjb2luLm1hcmtldF9jYXBfY2hhbmdlX3BlcmNlbnRhZ2VfMjRofVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvaW5zXG4iXSwibmFtZXMiOlsiTGluayIsIk1hcGVkQ29pbnMiLCJDb2lucyIsImZpbHRlcmVkQ29pbnMiLCJpZCIsIm1hcCIsImNvaW4iLCJuYW1lIiwiY3VycmVudF9wcmljZSIsIm1hcmtldF9jYXBfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AllCoins/Coins.js\n");

/***/ })

});
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

/***/ "./components/AllCoins/MapedCoins.js":
/*!*******************************************!*\
  !*** ./components/AllCoins/MapedCoins.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_MapedCoins_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/MapedCoins.module.css */ \"./styles/MapedCoins.module.css\");\n/* harmony import */ var _styles_MapedCoins_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_MapedCoins_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/abolfazl/create-next/nextjs-crypto-api/components/AllCoins/MapedCoins.js\",\n    _this = undefined;\n\n\n\n\nvar MapedCoins = function MapedCoins(_ref) {\n  var name = _ref.name,\n      last24h = _ref.last24h,\n      current_price = _ref.current_price;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_MapedCoins_module_css__WEBPACK_IMPORTED_MODULE_1___default().coin_body),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\" \", name, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\" \", current_price, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\" \", last24h, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = MapedCoins;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapedCoins);\n\nvar _c;\n\n$RefreshReg$(_c, \"MapedCoins\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsbENvaW5zL01hcGVkQ29pbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBc0M7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBN0JDLE9BQTZCLFFBQTdCQSxPQUE2QjtBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDckQsc0JBQ0k7QUFBQSwyQkFJSTtBQUFLLGVBQVMsRUFBRUosZ0ZBQWhCO0FBQUEsOEJBQ0k7QUFBQSx3QkFBUUUsSUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsd0JBQVFFLGFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFBLHdCQUFRRCxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVlILENBYkQ7O0tBQU1GO0FBZU4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGxDb2lucy9NYXBlZENvaW5zLmpzP2U0NjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvTWFwZWRDb2lucy5tb2R1bGUuY3NzJ1xuXG5jb25zdCBNYXBlZENvaW5zID0gKHsgbmFtZSwgbGFzdDI0aCwgY3VycmVudF9wcmljZSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSAvPlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2luX2JvZHl9PlxuICAgICAgICAgICAgICAgIDxzcGFuPiB7bmFtZX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPiB7Y3VycmVudF9wcmljZX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPiB7bGFzdDI0aH0gPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwZWRDb2luc1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIk1hcGVkQ29pbnMiLCJuYW1lIiwibGFzdDI0aCIsImN1cnJlbnRfcHJpY2UiLCJjb2luX2JvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AllCoins/MapedCoins.js\n");

/***/ })

});
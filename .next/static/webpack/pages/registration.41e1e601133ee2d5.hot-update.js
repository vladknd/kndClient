"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/registration",{

/***/ "./pages/registration.tsx":
/*!********************************!*\
  !*** ./pages/registration.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _components_Registration_Registration_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Registration/Registration.styled */ \"./components/Registration/Registration.styled.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n//-------------------ICONS:\n\n//#------------------LOCAL-IMPORTS------------------#\n//-------------------STYLED-COMPONENTS:\n\nvar _this = undefined;\n//-------------------IMAGES:\n// import Knd from \"../public/KND.svg\"\nvar Registration = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Registration_Registration_styled__WEBPACK_IMPORTED_MODULE_1__.Section1, {\n                __source: {\n                    fileName: \"/Users/wladknd/LIB/IT/CODE/CODE-STACK/kndClient/pages/registration.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"./KND.svg\",\n                        alt: \"\",\n                        height: 500,\n                        __source: {\n                            fileName: \"/Users/wladknd/LIB/IT/CODE/CODE-STACK/kndClient/pages/registration.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineDownCircle, {\n                        size: 70,\n                        // color=\"white\"\n                        style: {\n                            marginTop: \"80px\"\n                        },\n                        __source: {\n                            fileName: \"/Users/wladknd/LIB/IT/CODE/CODE-STACK/kndClient/pages/registration.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Registration_Registration_styled__WEBPACK_IMPORTED_MODULE_1__.ContentContainer, {\n                __source: {\n                    fileName: \"/Users/wladknd/LIB/IT/CODE/CODE-STACK/kndClient/pages/registration.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3RyYXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxFQUEyQjtBQUN5QjtBQUNwRCxFQUFxRDtBQUNyRCxFQUF1QztBQUtnQjs7QUFDdkQsRUFBNEI7QUFDNUIsRUFBc0M7QUFFdEMsR0FBSyxDQUFDRyxZQUFZLEdBQUcsUUFDckIsR0FEMkIsQ0FBQztJQUN4QixNQUFNOztrRkFFREYsa0ZBQVE7Ozs7Ozs7O3lGQUNKRyxDQUFHO3dCQUFDQyxHQUFHLEVBQUMsQ0FBVzt3QkFBQ0MsR0FBRyxFQUFDLENBQUU7d0JBQUNDLE1BQU0sRUFBRSxHQUFHOzs7Ozs7Ozt5RkFDdENQLCtEQUFtQjt3QkFDaEJRLElBQUksRUFBRSxFQUFFO3dCQUNSLEVBQWdCO3dCQUNoQkMsS0FBSyxFQUFFLENBQUM7NEJBQ0pDLFNBQVMsRUFBRSxDQUFNO3dCQUNyQixDQUFDOzs7Ozs7Ozs7O2lGQUdSUiwwRkFBZ0I7Ozs7Ozs7Ozs7QUFNekIsQ0FBQztLQW5CS0MsWUFBWTtBQXFCbEIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0cmF0aW9uLnRzeD85YWI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIy0tLS0tLS0tLS0tLS0tLS0tLUdMT0JBTC1JTVBPUlRTLS0tLS0tLS0tLS0tLS0tLS0tI1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS1JQ09OUzpcbmltcG9ydCB7IEFpT3V0bGluZURvd25DaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcbi8vIy0tLS0tLS0tLS0tLS0tLS0tLUxPQ0FMLUlNUE9SVFMtLS0tLS0tLS0tLS0tLS0tLS0jXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS1TVFlMRUQtQ09NUE9ORU5UUzpcbmltcG9ydCB7IFxuICAgIFNlY3Rpb24xLFxuICAgIC8vIFJlZ2lzdHJhdGlvbkRpc2NsYWltZXIsXG4gICAgQ29udGVudENvbnRhaW5lclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWdpc3RyYXRpb24vUmVnaXN0cmF0aW9uLnN0eWxlZFwiXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS1JTUFHRVM6XG4vLyBpbXBvcnQgS25kIGZyb20gXCIuLi9wdWJsaWMvS05ELnN2Z1wiXG5cbmNvbnN0IFJlZ2lzdHJhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8U2VjdGlvbjE+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vS05ELnN2Z1wiIGFsdD1cIlwiIGhlaWdodD17NTAwfS8+XG4gICAgICAgICAgICA8QWlPdXRsaW5lRG93bkNpcmNsZVxuICAgICAgICAgICAgICAgIHNpemU9ezcwfVxuICAgICAgICAgICAgICAgIC8vIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI4MHB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9TZWN0aW9uMT5cbiAgICAgICAgPENvbnRlbnRDb250YWluZXI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb24iXSwibmFtZXMiOlsiQWlPdXRsaW5lRG93bkNpcmNsZSIsIlNlY3Rpb24xIiwiQ29udGVudENvbnRhaW5lciIsIlJlZ2lzdHJhdGlvbiIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsInNpemUiLCJzdHlsZSIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/registration.tsx\n");

/***/ })

});
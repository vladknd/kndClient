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

/***/ "./components/Registration/Registration.styled.tsx":
/*!*********************************************************!*\
  !*** ./components/Registration/Registration.styled.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainContainer\": function() { return /* binding */ MainContainer; },\n/* harmony export */   \"Section1\": function() { return /* binding */ Section1; },\n/* harmony export */   \"Section2\": function() { return /* binding */ Section2; },\n/* harmony export */   \"RegistrationDisclaimer\": function() { return /* binding */ RegistrationDisclaimer; },\n/* harmony export */   \"DisclaimerHeader\": function() { return /* binding */ DisclaimerHeader; },\n/* harmony export */   \"ContentContainer\": function() { return /* binding */ ContentContainer; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/variables */ \"./styles/variables.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: \",\n        \";\\n    height: 100vh;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: start;\\n    align-items: center;\\n    background-color: \",\n        \";\\n    height: 100vh;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    margin-top: 30px;\\n    width: 70%;\\n    height: 60%;\\n    border-radius: 15px;\\n    background-color: \",\n        \";\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    font-family: \\\"Chomsky\\\";\\n    font-size: 80px;    \\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    background-color: \",\n        \";\\n    height: 100vh;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nvar MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar Section1 = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject1(), _styles_variables__WEBPACK_IMPORTED_MODULE_0__.colors.headerBg);\nvar Section2 = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject2(), _styles_variables__WEBPACK_IMPORTED_MODULE_0__.colors.headerBg);\nvar RegistrationDisclaimer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3(), _styles_variables__WEBPACK_IMPORTED_MODULE_0__.colors.bg);\nvar DisclaimerHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1(_templateObject4());\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject5(), _styles_variables__WEBPACK_IMPORTED_MODULE_0__.colors.bg);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi9SZWdpc3RyYXRpb24uc3R5bGVkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFDUzs7Ozs7Ozs7Ozs7OztRQUVQLENBRXhDOzs7Ozs7Ozs7UUFDdUMsQ0FLakI7UUFBa0IsQ0FFeEM7Ozs7Ozs7OztRQUV1QyxDQUtqQjtRQUFrQixDQUV4Qzs7Ozs7Ozs7O1FBQ2lELENBTTNCO1FBQVksQ0FDbEM7Ozs7Ozs7OztRQUMwQyxDQUcxQzs7Ozs7Ozs7O1FBRStDLENBRXpCO1FBQVksQ0FFbEM7Ozs7Ozs7QUFyQ08sR0FBSyxDQUFDRSxhQUFhLEdBQUdGLDZEQUFVO0FBR2hDLEdBQUssQ0FBQ0ksUUFBUSxHQUFHSixpRUFBYyxxQkFLZEMsOERBQWU7QUFJaEMsR0FBSyxDQUFDTSxRQUFRLEdBQUdQLGlFQUFjLHFCQUtkQyw4REFBZTtBQUdoQyxHQUFLLENBQUNPLHNCQUFzQixHQUFHUiw2REFBVSxxQkFNeEJDLHdEQUFTO0FBRTFCLEdBQUssQ0FBQ1MsZ0JBQWdCLEdBQUdWLDREQUFTO0FBS2xDLEdBQUssQ0FBQ1ksZ0JBQWdCLEdBQUdaLGlFQUFjLHFCQUV0QkMsd0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RyYXRpb24vUmVnaXN0cmF0aW9uLnN0eWxlZC50c3g/YWVhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiXG5cbmV4cG9ydCBjb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblxuYFxuZXhwb3J0IGNvbnN0IFNlY3Rpb24xID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuaGVhZGVyQmd9O1xuICAgIGhlaWdodDogMTAwdmg7XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uMiA9IHN0eWxlZC5zZWN0aW9uYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuaGVhZGVyQmd9O1xuICAgIGhlaWdodDogMTAwdmg7XG5gXG5leHBvcnQgY29uc3QgUmVnaXN0cmF0aW9uRGlzY2xhaW1lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5iZ307XG5gXG5leHBvcnQgY29uc3QgRGlzY2xhaW1lckhlYWRlciA9IHN0eWxlZC5oMWBcbiAgICBmb250LWZhbWlseTogXCJDaG9tc2t5XCI7XG4gICAgZm9udC1zaXplOiA4MHB4OyAgICBcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmJnfTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuYCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjb2xvcnMiLCJNYWluQ29udGFpbmVyIiwiZGl2IiwiU2VjdGlvbjEiLCJzZWN0aW9uIiwiaGVhZGVyQmciLCJTZWN0aW9uMiIsIlJlZ2lzdHJhdGlvbkRpc2NsYWltZXIiLCJiZyIsIkRpc2NsYWltZXJIZWFkZXIiLCJoMSIsIkNvbnRlbnRDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Registration/Registration.styled.tsx\n");

/***/ })

});
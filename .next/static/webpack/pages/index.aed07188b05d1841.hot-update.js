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

/***/ "./src/config/app-config.ts":
/*!**********************************!*\
  !*** ./src/config/app-config.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CATEGORY_URL\": function() { return /* binding */ CATEGORY_URL; },\n/* harmony export */   \"POSTS_URL\": function() { return /* binding */ POSTS_URL; },\n/* harmony export */   \"SITE_NAME\": function() { return /* binding */ SITE_NAME; },\n/* harmony export */   \"SITE_URL\": function() { return /* binding */ SITE_URL; }\n/* harmony export */ });\nvar POSTS_URL = \"https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&sort=id:desc\";\nvar CATEGORY_URL = \"https://strapi-demo-api-ogjp.onrender.com/api/categories?populate=*&sort=id:desc\";\nvar SITE_NAME = 'FELIPE LACERDA - ';\nvar SITE_URL = 'https://exemple-blog-felipe.netlify.app'; //export const API_URL = `https://strapi-demo-api-ogjp.onrender.com`;\n//export const POSTS_URL_FILTER = `https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[id][$in][0]=1`;\n\n/*\n\nfiltro por id\nhttps://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[id][$in][0]=1\n\nfiltro por author\n\nhttps://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[author][name][$eqi]=ghapa\n\nfiltro por categoria  sem distinção de maiuscula\n\nhttps://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[categorie][name][$eqi]=JavaScript\n\nhttps://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[categorie][name][$eqi]=ruby\n\n//filtro por slug\nhttps://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[slug][$eqi]=post-5\n\n\n ordenando por id decrecente\n? ou & sort=id:desc\n\nhttps://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&sort=id:desc\n\nelementos por pagina\n?pagination[pageSize]=2\n\n// pagina atual\n?pagination[page]=2\n\n// limite por pagina\n\npagination[start]=0&pagination[limit]=6\n\nimportante para deploy na netlify\nNETLIFY_NEXT_PLUGIN_SKIP como o valor: true\n\n*/\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2FwcC1jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLFNBQVMsZ0ZBQWY7QUFDQSxJQUFNQyxZQUFZLHFGQUFsQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxtQkFBbEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcseUNBQWpCLEVBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25maWcvYXBwLWNvbmZpZy50cz9jMTM0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBQT1NUU19VUkwgPSBgaHR0cHM6Ly9zdHJhcGktZGVtby1hcGktb2dqcC5vbnJlbmRlci5jb20vYXBpL3Bvc3RzP3BvcHVsYXRlPSomc29ydD1pZDpkZXNjYDtcbmV4cG9ydCBjb25zdCBDQVRFR09SWV9VUkwgPSBgaHR0cHM6Ly9zdHJhcGktZGVtby1hcGktb2dqcC5vbnJlbmRlci5jb20vYXBpL2NhdGVnb3JpZXM/cG9wdWxhdGU9KiZzb3J0PWlkOmRlc2NgO1xuZXhwb3J0IGNvbnN0IFNJVEVfTkFNRSA9ICdGRUxJUEUgTEFDRVJEQSAtICc7XG5leHBvcnQgY29uc3QgU0lURV9VUkwgPSAnaHR0cHM6Ly9leGVtcGxlLWJsb2ctZmVsaXBlLm5ldGxpZnkuYXBwJztcblxuLy9leHBvcnQgY29uc3QgQVBJX1VSTCA9IGBodHRwczovL3N0cmFwaS1kZW1vLWFwaS1vZ2pwLm9ucmVuZGVyLmNvbWA7XG4vL2V4cG9ydCBjb25zdCBQT1NUU19VUkxfRklMVEVSID0gYGh0dHBzOi8vc3RyYXBpLWRlbW8tYXBpLW9nanAub25yZW5kZXIuY29tL2FwaS9wb3N0cz9wb3B1bGF0ZT0qJmZpbHRlcnNbaWRdWyRpbl1bMF09MWA7XG5cbi8qXG5cbmZpbHRybyBwb3IgaWRcbmh0dHBzOi8vc3RyYXBpLWRlbW8tYXBpLW9nanAub25yZW5kZXIuY29tL2FwaS9wb3N0cz9wb3B1bGF0ZT0qJmZpbHRlcnNbaWRdWyRpbl1bMF09MVxuXG5maWx0cm8gcG9yIGF1dGhvclxuXG5odHRwczovL3N0cmFwaS1kZW1vLWFwaS1vZ2pwLm9ucmVuZGVyLmNvbS9hcGkvcG9zdHM/cG9wdWxhdGU9KiZmaWx0ZXJzW2F1dGhvcl1bbmFtZV1bJGVxaV09Z2hhcGFcblxuZmlsdHJvIHBvciBjYXRlZ29yaWEgIHNlbSBkaXN0aW7Dp8OjbyBkZSBtYWl1c2N1bGFcblxuaHR0cHM6Ly9zdHJhcGktZGVtby1hcGktb2dqcC5vbnJlbmRlci5jb20vYXBpL3Bvc3RzP3BvcHVsYXRlPSomZmlsdGVyc1tjYXRlZ29yaWVdW25hbWVdWyRlcWldPUphdmFTY3JpcHRcblxuaHR0cHM6Ly9zdHJhcGktZGVtby1hcGktb2dqcC5vbnJlbmRlci5jb20vYXBpL3Bvc3RzP3BvcHVsYXRlPSomZmlsdGVyc1tjYXRlZ29yaWVdW25hbWVdWyRlcWldPXJ1YnlcblxuLy9maWx0cm8gcG9yIHNsdWdcbmh0dHBzOi8vc3RyYXBpLWRlbW8tYXBpLW9nanAub25yZW5kZXIuY29tL2FwaS9wb3N0cz9wb3B1bGF0ZT0qJmZpbHRlcnNbc2x1Z11bJGVxaV09cG9zdC01XG5cblxuIG9yZGVuYW5kbyBwb3IgaWQgZGVjcmVjZW50ZVxuPyBvdSAmIHNvcnQ9aWQ6ZGVzY1xuXG5odHRwczovL3N0cmFwaS1kZW1vLWFwaS1vZ2pwLm9ucmVuZGVyLmNvbS9hcGkvcG9zdHM/cG9wdWxhdGU9KiZzb3J0PWlkOmRlc2NcblxuZWxlbWVudG9zIHBvciBwYWdpbmFcbj9wYWdpbmF0aW9uW3BhZ2VTaXplXT0yXG5cbi8vIHBhZ2luYSBhdHVhbFxuP3BhZ2luYXRpb25bcGFnZV09MlxuXG4vLyBsaW1pdGUgcG9yIHBhZ2luYVxuXG5wYWdpbmF0aW9uW3N0YXJ0XT0wJnBhZ2luYXRpb25bbGltaXRdPTZcblxuaW1wb3J0YW50ZSBwYXJhIGRlcGxveSBuYSBuZXRsaWZ5XG5ORVRMSUZZX05FWFRfUExVR0lOX1NLSVAgY29tbyBvIHZhbG9yOiB0cnVlXG5cbiovXG4iXSwibmFtZXMiOlsiUE9TVFNfVVJMIiwiQ0FURUdPUllfVVJMIiwiU0lURV9OQU1FIiwiU0lURV9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/app-config.ts\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/page/[...param]",{

/***/ "./src/pages/post/page/[...param].tsx":
/*!********************************************!*\
  !*** ./src/pages/post/page/[...param].tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var _containers_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../containers/HomePage */ \"./src/containers/HomePage/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../404 */ \"./src/pages/404/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"D:\\\\CURSO JAVA SCRIPT\\\\js udemy\\\\se\\xE7\\xE3o 29\\\\next-blog\\\\src\\\\pages\\\\post\\\\page\\\\[...param].tsx\",\n    _s = $RefreshSig$();\n\n/* eslint-disable @typescript-eslint/no-explicit-any */\n\n\n\n\nvar __N_SSG = true;\nfunction Page(_ref) {\n  _s();\n\n  var posts = _ref.posts,\n      category = _ref.category,\n      pagination = _ref.pagination;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  if (router.isFallback) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_404__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    msg: 'Carregando'\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 33\n  }, this);\n  if (!posts.length) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_404__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 29\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_containers_HomePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    posts: posts,\n    categorie: category,\n    pagination: pagination\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Page, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = Page;\n\nvar _c;\n\n$RefreshReg$(_c, \"Page\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdC9wYWdlL1suLi5wYXJhbV0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBQ0E7OztBQVdlLFNBQVNHLElBQVQsT0FBMEQ7RUFBQTs7RUFBQSxJQUExQ0MsS0FBMEMsUUFBMUNBLEtBQTBDO0VBQUEsSUFBbkNDLFFBQW1DLFFBQW5DQSxRQUFtQztFQUFBLElBQXpCQyxVQUF5QixRQUF6QkEsVUFBeUI7RUFDdkUsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUF4QjtFQUNBLElBQUlNLE1BQU0sQ0FBQ0MsVUFBWCxFQUF1QixvQkFBTyw4REFBQyw0Q0FBRDtJQUFTLEdBQUcsRUFBRTtFQUFkO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFBUDtFQUV2QixJQUFJLENBQUNKLEtBQUssQ0FBQ0ssTUFBWCxFQUFtQixvQkFBTyw4REFBQyw0Q0FBRDtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBQVA7RUFDbkIsb0JBQU8sOERBQUMsNERBQUQ7SUFBVSxLQUFLLEVBQUVMLEtBQWpCO0lBQXdCLFNBQVMsRUFBRUMsUUFBbkM7SUFBNkMsVUFBVSxFQUFFQztFQUF6RDtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBQVA7QUFDRDs7R0FOdUJIO1VBQ1BGOzs7S0FET0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvcGFnZS9bLi4ucGFyYW1dLnRzeD8wNmI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgUG9zdERhdGEgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcG9zdHMvcG9zdCc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9Ib21lUGFnZSc7XG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gJy4uLy4uLy4uL2RhdGEvcG9zdHMvZ2V0LWFsbC1wb3N0cyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRXJybzQwNCBmcm9tICcuLi8uLi80MDQnO1xuaW1wb3J0IHsgY291bnRBbGxQb3N0cyB9IGZyb20gJy4uLy4uLy4uL2RhdGEvcG9zdHMvY291bnQtQWxsLVBvc3RzJztcbmltcG9ydCB7IFBhZ2luYXRpb25EYXRhIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3Bvc3RzL3BhZ2luYXRpb25zJztcbmltcG9ydCB7IGdldEFsbENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vLi4vZGF0YS9wb3N0cy9nZXQtYWxsLWNhdGVnb3J5JztcblxuaW50ZXJmYWNlIFBhZ2VQcm9wcyB7XG4gIHBvc3RzOiBQb3N0RGF0YVtdO1xuICBjYXRlZ29yeT86IHN0cmluZztcbiAgcGFnaW5hdGlvbjogUGFnaW5hdGlvbkRhdGE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBwb3N0cywgY2F0ZWdvcnksIHBhZ2luYXRpb24gfTogUGFnZVByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHJldHVybiA8RXJybzQwNCBtc2c9eydDYXJyZWdhbmRvJ30gLz47XG5cbiAgaWYgKCFwb3N0cy5sZW5ndGgpIHJldHVybiA8RXJybzQwNCAvPjtcbiAgcmV0dXJuIDxIb21lUGFnZSBwb3N0cz17cG9zdHN9IGNhdGVnb3JpZT17Y2F0ZWdvcnl9IHBhZ2luYXRpb249e3BhZ2luYXRpb259IC8+O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBudW1iZXJPZlBvc3RzID0gTnVtYmVyKGF3YWl0IGNvdW50QWxsUG9zdHMoKSk7XG4gIGNvbnN0IHBvc3RQZXJQYWdlID0gNjtcbiAgY29uc3QgcXRyUGFnZXMgPSBNYXRoLmNlaWwobnVtYmVyT2ZQb3N0cyAvIHBvc3RQZXJQYWdlKTtcbiAgY29uc3QgcXVlcnlzOiBhbnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBxdHJQYWdlczsgaSsrKSB7XG4gICAgcXVlcnlzLnB1c2goe1xuICAgICAgcGFyYW1zOiB7IHBhcmFtOiBbYCR7aX1gXSB9LFxuICAgIH0pO1xuICB9XG4gIC8vLy8gbmFvIG1leGUgcGFyYSBjaW1hIGFpbmRhXG4gIGxldCBjYXRlZ29yaWFzOiBhbnlbXSA9IGF3YWl0IGdldEFsbENhdGVnb3J5KCk7XG4gIGNhdGVnb3JpYXMgPSBjYXRlZ29yaWFzLm1hcCgocikgPT4gci5hdHRyaWJ1dGVzLm5hbWUpO1xuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmlhcykge1xuICAgIGNvbnN0IG51bWJlck9mUG9zdHNJbkNhdGVnb3J5ID0gTnVtYmVyKFxuICAgICAgYXdhaXQgY291bnRBbGxQb3N0cyhgZmlsdGVyc1tjYXRlZ29yaWVdW25hbWVdWyRlcWldPSR7Y2F0ZWdvcnl9YCksXG4gICAgKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlck9mUG9zdHNJbkNhdGVnb3J5OyBpKyspIHtcbiAgICAgIGNvbnN0IHF0clBhZ2VzSW5DYXRlZ29yaWVzID0gTWF0aC5jZWlsKGkgLyBwb3N0UGVyUGFnZSk7XG4gICAgICBxdWVyeXMucHVzaCh7XG4gICAgICAgIHBhcmFtczogeyBwYXJhbTogW2Ake3F0clBhZ2VzSW5DYXRlZ29yaWVzfWAsIGNhdGVnb3J5XSB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coJ3N0YXRpYyBwYXRoJywgcXVlcnlzKTtcbiAgLyogICByZXR1cm4ge1xuICAgIHBhdGhzOiBbXG4gICAgICB7XG4gICAgICAgIHBhcmFtczogeyBwYXJhbTogWycxJ10gfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhcmFtczogeyBwYXJhbTogWycxMjMuLi4nLCAncnVieSddIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXJhbXM6IHsgcGFyYW06IFsnMicsICdydWJ5J10gfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn07ICovXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHF1ZXJ5cyxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBOdW1iZXIoY3R4LnBhcmFtcy5wYXJhbVswXSkgfHwgMTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjdHgucGFyYW1zLnBhcmFtWzFdIHx8IG51bGw7XG4gIGNvbnN0IHBvc3RzUGVyUGFnZSA9IDY7XG4gIC8vIGNvbnNvbGUubG9nKGN0eCk7XG4gIGNvbnN0IG5leHRQYWdlID0gcGFnZSArIDE7XG4gIGNvbnN0IHByZXZpb3VzUGFnZSA9IHBhZ2UgLSAxO1xuICBjb25zdCBjYXRlZ29yeVF1ZXJ5ID0gY2F0ZWdvcnkgPyBgJmZpbHRlcnNbY2F0ZWdvcmllXVtuYW1lXVskZXFpXT0ke2NhdGVnb3J5fWAgOiAnJztcblxuICBjb25zdCB1cmxRdWVyeSA9IGBwYWdpbmF0aW9uW3BhZ2VdPSR7cGFnZX0mcGFnaW5hdGlvbltwYWdlU2l6ZV09JHtwb3N0c1BlclBhZ2V9JHtjYXRlZ29yeVF1ZXJ5fWA7XG4gIGNvbnN0IG51bWJlck9mUG9zdHMgPSBOdW1iZXIoYXdhaXQgY291bnRBbGxQb3N0cyhjYXRlZ29yeVF1ZXJ5KSk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHModXJsUXVlcnkpO1xuICBjb25zdCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uRGF0YSA9IHtcbiAgICBuZXh0UGFnZSxcbiAgICBudW1iZXJPZlBvc3RzLFxuICAgIGNhdGVnb3J5LFxuICAgIHBvc3RzUGVyUGFnZSxcbiAgICBwcmV2aW91c1BhZ2UsXG4gIH07XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgICAgcGFnaW5hdGlvbixcbiAgICAgIGNhdGVnb3J5LFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwidXNlUm91dGVyIiwiRXJybzQwNCIsIlBhZ2UiLCJwb3N0cyIsImNhdGVnb3J5IiwicGFnaW5hdGlvbiIsInJvdXRlciIsImlzRmFsbGJhY2siLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/post/page/[...param].tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/categories/[categorie]",{

/***/ "./src/containers/HomePage/index.tsx":
/*!*******************************************!*\
  !*** ./src/containers/HomePage/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ \"./src/containers/HomePage/styled.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainContainer */ \"./src/components/MainContainer/index.tsx\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PostCard */ \"./src/components/PostCard/index.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ \"./src/components/Footer/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"D:\\\\CURSO JAVA SCRIPT\\\\js udemy\\\\se\\xE7\\xE3o 29\\\\next-blog\\\\src\\\\containers\\\\HomePage\\\\index.tsx\";\n\n\n\n\n\n\n\nfunction HomePage(_ref) {\n  var _this = this;\n\n  var posts = _ref.posts,\n      categorie = _ref.categorie;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Head, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: categorie\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__.MainContainer, {\n      children: [categorie && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_0__.Categorie, {\n        children: [\"Categoria: \", categorie]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 23\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styled__WEBPACK_IMPORTED_MODULE_0__.Container, {\n        children: posts.map(function (post) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__.PostCard, {\n            slug: post.attributes.slug,\n            title: post.attributes.title,\n            cover: post.attributes.cover.data.attributes.formats.small.url\n          }, post.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.Footer, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = HomePage;\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ib21lUGFnZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTWUsU0FBU00sUUFBVCxPQUF1RDtFQUFBOztFQUFBLElBQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7RUFBQSxJQUE1QkMsU0FBNEIsUUFBNUJBLFNBQTRCO0VBQ3BFLG9CQUNFO0lBQUEsd0JBQ0UsOERBQUMsSUFBRDtNQUFBLHVCQUNFO1FBQUEsVUFBUUE7TUFBUjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBSUUsOERBQUMsc0RBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpGLGVBS0UsOERBQUMsb0VBQUQ7TUFBQSxXQUNHQSxTQUFTLGlCQUFJLDhEQUFDLDhDQUFEO1FBQUEsMEJBQXVCQSxTQUF2QjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFEaEIsZUFFRSw4REFBQyw4Q0FBRDtRQUFBLFVBQ0dELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQ7VUFBQSxvQkFDVCw4REFBQywwREFBRDtZQUVFLElBQUksRUFBRUEsSUFBSSxDQUFDQyxVQUFMLENBQWdCQyxJQUZ4QjtZQUdFLEtBQUssRUFBRUYsSUFBSSxDQUFDQyxVQUFMLENBQWdCRSxLQUh6QjtZQUlFLEtBQUssRUFBRUgsSUFBSSxDQUFDQyxVQUFMLENBQWdCRyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJKLFVBQTNCLENBQXNDSyxPQUF0QyxDQUE4Q0MsS0FBOUMsQ0FBb0RDO1VBSjdELEdBQ09SLElBQUksQ0FBQ1MsRUFEWjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRFM7UUFBQSxDQUFWO01BREg7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxGLGVBa0JFLDhEQUFDLHNEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFsQkY7RUFBQSxnQkFERjtBQXNCRDtLQXZCdUJiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250YWluZXJzL0hvbWVQYWdlL2luZGV4LnRzeD9jYmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vZG9tYWluL3Bvc3RzL3Bvc3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBDYXRlZ29yaWUgfSBmcm9tICcuL3N0eWxlZCc7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IE1haW5Db250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xuaW1wb3J0IHsgUG9zdENhcmQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBIb21lUGFnZVByb3BzIHtcbiAgcG9zdHM6IFBvc3REYXRhW107XG4gIGNhdGVnb3JpZT86IHN0cmluZztcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgcG9zdHMsIGNhdGVnb3JpZSB9OiBIb21lUGFnZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2NhdGVnb3JpZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1haW5Db250YWluZXI+XG4gICAgICAgIHtjYXRlZ29yaWUgJiYgPENhdGVnb3JpZT5DYXRlZ29yaWE6IHtjYXRlZ29yaWV9PC9DYXRlZ29yaWU+fVxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxQb3N0Q2FyZFxuICAgICAgICAgICAgICBrZXk9e3Bvc3QuaWR9XG4gICAgICAgICAgICAgIHNsdWc9e3Bvc3QuYXR0cmlidXRlcy5zbHVnfVxuICAgICAgICAgICAgICB0aXRsZT17cG9zdC5hdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5hdHRyaWJ1dGVzLmNvdmVyLmRhdGEuYXR0cmlidXRlcy5mb3JtYXRzLnNtYWxsLnVybH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9NYWluQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkNhdGVnb3JpZSIsIkhlYWRlciIsIk1haW5Db250YWluZXIiLCJQb3N0Q2FyZCIsIkZvb3RlciIsIkhvbWVQYWdlIiwicG9zdHMiLCJjYXRlZ29yaWUiLCJtYXAiLCJwb3N0IiwiYXR0cmlidXRlcyIsInNsdWciLCJ0aXRsZSIsImNvdmVyIiwiZGF0YSIsImZvcm1hdHMiLCJzbWFsbCIsInVybCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/HomePage/index.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./src/containers/Post/index.tsx":
/*!***************************************!*\
  !*** ./src/containers/Post/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Post\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainContainer */ \"./src/components/MainContainer/index.tsx\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ \"./node_modules/html-react-parser/index.mjs\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ \"./src/components/Footer/index.tsx\");\n/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Heading */ \"./src/components/Heading/index.tsx\");\n/* harmony import */ var _components_PostCover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PostCover */ \"./src/components/PostCover/index.tsx\");\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PostContent */ \"./src/components/PostContent/index.tsx\");\n/* harmony import */ var _components_PostDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PostDetails */ \"./src/components/PostDetails/index.tsx\");\n/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Comments */ \"./src/components/Comments/index.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/app-config */ \"./src/config/app-config.ts\");\n/* harmony import */ var _utils_Remove_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/Remove-html */ \"./src/utils/Remove-html.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);\nvar _jsxFileName = \"D:\\\\CURSO JAVA SCRIPT\\\\js udemy\\\\se\\xE7\\xE3o 29\\\\next-blog\\\\src\\\\containers\\\\Post\\\\index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Post(_ref) {\n  _s();\n\n  var post = _ref.post,\n      content = _ref.content,\n      categoryName = _ref.categoryName;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();\n  var finalSlashIndex = router.asPath.lastIndexOf('/');\n  var previousPath = router.asPath.slice(0, finalSlashIndex);\n\n  /*#__PURE__*/\n  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n    href: previousPath,\n    children: \"Go back\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 4\n  }, this);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(\"title\", {\n        children: \"\".concat(post.attributes.title, \"-\").concat(_config_app_config__WEBPACK_IMPORTED_MODULE_11__.SITE_NAME)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: (0,_utils_Remove_html__WEBPACK_IMPORTED_MODULE_12__.removeHTML)(content).slice(0, 150)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n      categorias: categoryName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__.MainContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n        onClick: function onClick() {\n          return router.back();\n        },\n        children: \"Voltar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Heading__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n        children: post.attributes.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_PostCover__WEBPACK_IMPORTED_MODULE_6__.PostCover, {\n        coverUrl: post.attributes.cover.data.attributes.formats.small.url,\n        alt: post.attributes.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_PostDetails__WEBPACK_IMPORTED_MODULE_8__.PostDetails, {\n        date: post.attributes.createdAt,\n        author: post.attributes.author.data.attributes.name,\n        category: post.attributes.categorie.data.attributes.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_PostContent__WEBPACK_IMPORTED_MODULE_7__.PostContent, {\n        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Comments__WEBPACK_IMPORTED_MODULE_9__.Comments, {\n        slug: post.attributes.slug,\n        title: post.attributes.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__.Footer, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter];\n});\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQUEsUUFkRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFORixlQXNCRSwrREFBQyxzREFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBdEJGO0VBQUEsZ0JBREY7QUEwQkQ7O0dBaENlWDtVQUNDRDs7O0tBRERDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250YWluZXJzL1Bvc3QvaW5kZXgudHN4PzY0M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IE1haW5Db250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01haW5Db250YWluZXInO1xuaW1wb3J0IHsgRHluYW1pY1Bvc3RQcm9wcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9wb3N0cy9wb3N0JztcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCB7IFBvc3RDb3ZlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENvdmVyJztcbmltcG9ydCB7IFBvc3RDb250ZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0Q29udGVudCc7XG5pbXBvcnQgeyBQb3N0RGV0YWlscyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdERldGFpbHMnO1xuaW1wb3J0IHsgQ29tbWVudHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnRzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBTSVRFX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLWNvbmZpZyc7XG5pbXBvcnQgeyByZW1vdmVIVE1MIH0gZnJvbSAnLi4vLi4vdXRpbHMvUmVtb3ZlLWh0bWwnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gUG9zdCh7IHBvc3QsIGNvbnRlbnQsIGNhdGVnb3J5TmFtZSB9OiBEeW5hbWljUG9zdFByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBmaW5hbFNsYXNoSW5kZXggPSByb3V0ZXIuYXNQYXRoLmxhc3RJbmRleE9mKCcvJyk7XG4gIGNvbnN0IHByZXZpb3VzUGF0aCA9IHJvdXRlci5hc1BhdGguc2xpY2UoMCwgZmluYWxTbGFzaEluZGV4KTtcbiAgIDxMaW5rIGhyZWY9e3ByZXZpb3VzUGF0aH0+R28gYmFjazwvTGluaz47XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57YCR7cG9zdC5hdHRyaWJ1dGVzLnRpdGxlfS0ke1NJVEVfTkFNRX1gfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3JlbW92ZUhUTUwoY29udGVudCkuc2xpY2UoMCwgMTUwKX0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgY2F0ZWdvcmlhcz17Y2F0ZWdvcnlOYW1lfSAvPlxuICAgICAgPE1haW5Db250YWluZXI+XG4gICAgICAgIDxMaW5rIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlZvbHRhcjwvTGluaz5cbiAgICAgICAgPEhlYWRpbmc+e3Bvc3QuYXR0cmlidXRlcy50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgIDxQb3N0Q292ZXJcbiAgICAgICAgICBjb3ZlclVybD17cG9zdC5hdHRyaWJ1dGVzLmNvdmVyLmRhdGEuYXR0cmlidXRlcy5mb3JtYXRzLnNtYWxsLnVybH1cbiAgICAgICAgICBhbHQ9e3Bvc3QuYXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgLz5cbiAgICAgICAgPFBvc3REZXRhaWxzXG4gICAgICAgICAgZGF0ZT17cG9zdC5hdHRyaWJ1dGVzLmNyZWF0ZWRBdH1cbiAgICAgICAgICBhdXRob3I9e3Bvc3QuYXR0cmlidXRlcy5hdXRob3IuZGF0YS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgY2F0ZWdvcnk9e3Bvc3QuYXR0cmlidXRlcy5jYXRlZ29yaWUuZGF0YS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgID48L1Bvc3REZXRhaWxzPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPFBvc3RDb250ZW50PntwYXJzZShjb250ZW50KX08L1Bvc3RDb250ZW50PlxuICAgICAgICA8Q29tbWVudHMgc2x1Zz17cG9zdC5hdHRyaWJ1dGVzLnNsdWd9IHRpdGxlPXtwb3N0LmF0dHJpYnV0ZXMudGl0bGV9IC8+XG4gICAgICA8L01haW5Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkhlYWRlciIsIk1haW5Db250YWluZXIiLCJwYXJzZSIsIkZvb3RlciIsIkhlYWRpbmciLCJQb3N0Q292ZXIiLCJQb3N0Q29udGVudCIsIlBvc3REZXRhaWxzIiwiQ29tbWVudHMiLCJIZWFkIiwiU0lURV9OQU1FIiwicmVtb3ZlSFRNTCIsInVzZVJvdXRlciIsIlBvc3QiLCJwb3N0IiwiY29udGVudCIsImNhdGVnb3J5TmFtZSIsInJvdXRlciIsImZpbmFsU2xhc2hJbmRleCIsImFzUGF0aCIsImxhc3RJbmRleE9mIiwicHJldmlvdXNQYXRoIiwic2xpY2UiLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJiYWNrIiwiY292ZXIiLCJkYXRhIiwiZm9ybWF0cyIsInNtYWxsIiwidXJsIiwiY3JlYXRlZEF0IiwiYXV0aG9yIiwibmFtZSIsImNhdGVnb3JpZSIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/Post/index.tsx\n"));

/***/ })

});
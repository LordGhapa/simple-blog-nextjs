"use strict";
(() => {
var exports = {};
exports.id = 391;
exports.ids = [391];
exports.modules = {

/***/ 3890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ countAllPosts)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7559);
/* harmony import */ var _utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8240);
/* eslint-disable */
// @ts-nocheck


async function countAllPosts(query) {
  try {
    const url = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__/* .POSTS_URL */ .fo}&${query} `;
    const post = await (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__/* .fetchJson */ .r)(url);
    const numberOfPosts = await post.meta.pagination.total;
    return numberOfPosts;
  } catch (error) {
    console.error('Erro no Fetch countAllPosts', error);
    return [];
  }
}

/***/ }),

/***/ 6485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Erro404)
/* harmony export */ });
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Erro404({
  msg = 'Pagina não Encontrada'
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_styled__WEBPACK_IMPORTED_MODULE_0__.Container, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      children: msg
    })
  });
}

/***/ }),

/***/ 4786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6033);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().footer.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1v6trxd-0"
})(["text-align:center;background-color:", ";color:#f15c56;font-size:", ";padding:", ";height:100vh;display:flex;align-items:center;justify-content:center;background-color:aliceblue;p{font-weight:bold;font-size:10vw;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.colors.primary */ .r.colors.primary, _styles_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.font.sizes.small */ .r.font.sizes.small, _styles_theme__WEBPACK_IMPORTED_MODULE_1__/* .theme.spacings.small */ .r.spacings.small);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ 3907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./src/containers/HomePage/index.tsx + 5 modules
var HomePage = __webpack_require__(4683);
// EXTERNAL MODULE: ./src/data/posts/get-all-posts.ts
var get_all_posts = __webpack_require__(3173);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./src/pages/404/index.tsx
var _404 = __webpack_require__(6485);
// EXTERNAL MODULE: ./src/data/posts/count-All-Posts.ts
var count_All_Posts = __webpack_require__(3890);
// EXTERNAL MODULE: ./src/data/posts/get-all-category.ts
var get_all_category = __webpack_require__(2917);
// EXTERNAL MODULE: ./src/data/posts/get-Category-Names.ts
var get_Category_Names = __webpack_require__(1476);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/post/page/[...param].tsx








function Page({
  posts,
  category,
  pagination,
  categoryName
}) {
  const router = (0,router_namespaceObject.useRouter)();
  if (router.isFallback) return /*#__PURE__*/jsx_runtime_.jsx(_404["default"], {
    msg: 'Carregando'
  });
  if (!posts.length) return /*#__PURE__*/jsx_runtime_.jsx(_404["default"], {});
  return /*#__PURE__*/jsx_runtime_.jsx(HomePage/* default */.Z, {
    posts: posts,
    categorie: category,
    pagination: pagination,
    categoryName: categoryName
  });
}
const getStaticPaths = async () => {
  const numberOfPosts = Number(await (0,count_All_Posts/* countAllPosts */.q)());
  const postPerPage = 6;
  const qtdPages = Math.ceil(numberOfPosts / postPerPage);
  const querys = [];

  for (let i = 1; i <= qtdPages; i++) {
    querys.push({
      params: {
        param: [`${i}`]
      }
    });
  } //// nao mexe para cima ainda


  let categorias = await (0,get_all_category/* getAllCategory */.K)();
  categorias = categorias.map(r => r.attributes?.name);

  for (const category of categorias) {
    const numberOfPostsInCategory = Number(await (0,count_All_Posts/* countAllPosts */.q)(`filters[categorie][name][$eqi]=${category}`));

    for (let i = 1; i <= numberOfPostsInCategory; i++) {
      const qtdPagesInCategories = Math.ceil(i / postPerPage);
      querys.push({
        params: {
          param: [`${qtdPagesInCategories}`, category]
        }
      });
    }
  } // console.log('static path', querys);

  /*   return {
    paths: [
      {
        params: { param: ['123...'] },
      },
      {
        params: { param: ['123...', 'ruby'] },
      },
      {
        params: { param: ['123...', 'java'] },
      },
    ],
    fallback: true,
  };
  }; */


  return {
    paths: querys,
    fallback: true
  };
};
const getStaticProps = async ctx => {
  const page = Number(ctx.params.param[0]) || 1;
  const category = ctx.params.param[1] || null;
  const postsPerPage = 6; // console.log(ctx);

  const nextPage = page + 1;
  const previousPage = page - 1;
  const categoryQuery = category ? `&filters[categorie][name][$eqi]=${category}` : '';
  const urlQuery = `pagination[page]=${page}&pagination[pageSize]=${postsPerPage}${categoryQuery}`;
  const numberOfPosts = Number(await (0,count_All_Posts/* countAllPosts */.q)(categoryQuery));
  const posts = await (0,get_all_posts/* getAllPosts */.B)(urlQuery);
  const categoryName = await (0,get_Category_Names/* default */.Z)();
  const pagination = {
    nextPage,
    numberOfPosts,
    category,
    postsPerPage,
    previousPage
  };
  return {
    props: {
      posts,
      pagination,
      category,
      categoryName
    }
  };
};

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,715,683], () => (__webpack_exec__(3907)));
module.exports = __webpack_exports__;

})();
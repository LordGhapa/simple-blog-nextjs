"use strict";
(() => {
var exports = {};
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 6733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./src/containers/HomePage/index.tsx + 3 modules
var HomePage = __webpack_require__(1173);
// EXTERNAL MODULE: ./src/data/posts/get-all-posts.ts
var get_all_posts = __webpack_require__(3173);
// EXTERNAL MODULE: ./src/config/app-config.ts
var app_config = __webpack_require__(7559);
// EXTERNAL MODULE: ./src/utils/fetch-json.ts
var fetch_json = __webpack_require__(8240);
;// CONCATENATED MODULE: ./src/data/posts/count-All-Category.ts
/* eslint-disable */
// @ts-nocheck


async function countAllCategory(query) {
  try {
    const url = `${app_config/* CATEGORY_URL */.jC}&${query} `;
    const post = await (0,fetch_json/* fetchJson */.r)(url);
    const numberOfPosts = await post.meta.pagination.total;
    return numberOfPosts;
  } catch (error) {
    console.error('Erro no Fetch getAllPosts', error);
    return [];
  }
}
;// CONCATENATED MODULE: ./src/data/posts/get-all-category.ts
/* eslint-disable */
// @ts-nocheck


async function getAllCategory(query) {
  try {
    const url = `${app_config/* CATEGORY_URL */.jC}&${query} `;
    const post = await (0,fetch_json/* fetchJson */.r)(url);
    const content = post.data;
    return content;
  } catch (error) {
    console.error('Erro no Fetch getAllPosts', error);
    return [];
  }
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/categories/[categorie].tsx





function Home({
  posts,
  categorie
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(HomePage/* default */.Z, {
    categorie: categorie,
    posts: posts
  });
}
const getStaticPaths = async () => {
  const numberOfPosts = await countAllCategory();
  const urlQuery = `pagination[limit]=${numberOfPosts}`;
  const categories = await getAllCategory(urlQuery);
  return {
    paths: categories.map(Category => {
      return {
        params: {
          categorie: Category.attributes.name
        }
      };
    }),
    fallback: false
  };
};
const getStaticProps = async ctx => {
  const urlQuery = `pagination[start]=0&pagination[limit]=30&filters[categorie][name][$eqi]=${ctx.params.categorie}`;
  const posts = await (0,get_all_posts/* getAllPosts */.B)(urlQuery);
  return {
    props: {
      posts,
      categorie: ctx.params.categorie
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,647,349], () => (__webpack_exec__(6733)));
module.exports = __webpack_exports__;

})();
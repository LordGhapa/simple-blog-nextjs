"use strict";
(() => {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 4227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ Comments)
});

;// CONCATENATED MODULE: external "disqus-react"
const external_disqus_react_namespaceObject = require("disqus-react");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Comments/styled.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-zjdxu5-0"
})(["margin:5rem 2rem;"]);
// EXTERNAL MODULE: ./src/config/app-config.ts
var app_config = __webpack_require__(7559);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Comments/index.tsx




const Comments = ({
  slug,
  title
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_disqus_react_namespaceObject.DiscussionEmbed, {
      shortname: "blog-example-4",
      config: {
        url: `${app_config/* SITE_URL */._O}/post/${slug}`,
        identifier: slug,
        title: title,
        language: 'pt_BR'
      }
    })
  });
};

/***/ }),

/***/ 1880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ Heading)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(6033);
;// CONCATENATED MODULE: ./src/components/Heading/styled.ts


const Container = external_styled_components_default().h2.withConfig({
  displayName: "styled__Container",
  componentId: "sc-o8y2t7-0"
})(["font-size:", ";margin-block:", ";text-align:center;@media (max-width:768px){font-size:8vw !important;}"], theme/* theme.font.sizes.superLarge */.r.font.sizes.superLarge, theme/* theme.spacings.large */.r.spacings.large);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Heading/index.tsx


function Heading({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: children
  });
}

/***/ }),

/***/ 1733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ PostContent)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(6033);
;// CONCATENATED MODULE: ./src/components/PostContent/styled.ts


const Container = external_styled_components_default().article.withConfig({
  displayName: "styled__Container",
  componentId: "sc-7ew0w2-0"
})(["padding-bottom:4rem;padding-inline:", ";font-size:2rem;img{width:100%;}img{max-width:100%;}p{margin:", " 0;}ul,ol{margin:", ";}pre{display:none;width:100%;overflow-x:auto;background:", ";color:", ";padding:", ";margin:", " 0;line-height:1.5;font-size:", ";}"], theme/* theme.spacings.small */.r.spacings.small, theme/* theme.spacings.medium */.r.spacings.medium, theme/* theme.spacings.medium */.r.spacings.medium, theme/* theme.colors.lightGray */.r.colors.lightGray, theme/* theme.colors.darkGray */.r.colors.darkGray, theme/* theme.spacings.large */.r.spacings.large, theme/* theme.spacings.large */.r.spacings.large, theme/* theme.font.sizes.medium */.r.font.sizes.medium);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/PostContent/index.tsx


function PostContent({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: children
  });
}

/***/ }),

/***/ 4722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ PostCover)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(6033);
;// CONCATENATED MODULE: ./src/components/PostCover/styled.ts


const Container = external_styled_components_default().img.withConfig({
  displayName: "styled__Container",
  componentId: "sc-k40q1m-0"
})(["max-width:100%;margin:0 auto;margin-bottom:", ";display:block;width:96rem;height:35.4rem;object-fit:cover;"], theme/* theme.spacings.medium */.r.spacings.medium);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/PostCover/index.tsx


function PostCover({
  coverUrl,
  alt
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    alt: alt,
    src: coverUrl
  });
}

/***/ }),

/***/ 6303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ PostDetails)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/utils/format-date.ts
const formatDate = date => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });
};
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Date/styled.ts

const Container = external_styled_components_default().span.withConfig({
  displayName: "styled__Container",
  componentId: "sc-s47vrx-0"
})([""]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Date/index.tsx



const Date_Date = ({
  date
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: formatDate(date)
  });
};
// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(6033);
;// CONCATENATED MODULE: ./src/components/PostDetails/styled.ts


const styled_Container = external_styled_components_default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-thzc6n-0"
})(["color:", ";font-size:", ";margin:", " 0;font-style:italic;"], theme/* theme.colors.gray */.r.colors.gray, theme/* theme.font.sizes.small */.r.font.sizes.small, theme/* theme.spacings.medium */.r.spacings.medium);
;// CONCATENATED MODULE: ./src/components/PostDetails/index.tsx





const PostDetails = ({
  date,
  author,
  category
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styled_Container, {
    children: ["Publicado em: ", /*#__PURE__*/jsx_runtime_.jsx(Date_Date, {
      date: date
    }), " por ", author, " |", ' ', /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: `/post/page/1/${category}`,
      children: category
    })]
  });
};

/***/ }),

/***/ 5907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9061);
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3032);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6571);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1880);
/* harmony import */ var _components_PostCover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4722);
/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1733);
/* harmony import */ var _components_PostDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6303);
/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4227);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7559);
/* harmony import */ var _utils_Remove_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4171);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_3__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















function Post({
  post,
  content,
  categoryName
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("title", {
        children: `${post.attributes.title}-${_config_app_config__WEBPACK_IMPORTED_MODULE_12__/* .SITE_NAME */ .px}`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("meta", {
        name: "description",
        content: (0,_utils_Remove_html__WEBPACK_IMPORTED_MODULE_13__/* .removeHTML */ .L)(content).slice(0, 150)
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h, {
      categorias: categoryName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__/* .MainContainer */ .t, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "javascript:history.back()",
        children: "Voltar"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* .Heading */ .X, {
        children: post.attributes.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_PostCover__WEBPACK_IMPORTED_MODULE_6__/* .PostCover */ .$, {
        coverUrl: post.attributes.cover.data.attributes.formats.small.url,
        alt: post.attributes.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_PostDetails__WEBPACK_IMPORTED_MODULE_8__/* .PostDetails */ .e, {
        date: post.attributes.createdAt,
        author: post.attributes.author.data.attributes.name,
        category: post.attributes.categorie.data.attributes.name
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_PostContent__WEBPACK_IMPORTED_MODULE_7__/* .PostContent */ .C, {
        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_3__["default"])(content)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Comments__WEBPACK_IMPORTED_MODULE_9__/* .Comments */ .H, {
        slug: post.attributes.slug,
        title: post.attributes.title
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$, {})]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 9469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ getPost)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7559);
/* harmony import */ var _utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8240);
/* eslint-disable */
// @ts-nocheck


async function getPost(slug) {
  try {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__/* .POSTS_URL */ .fo}&filters[slug][$eqi]=${slugString} `;
    const jsonPosts = await (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__/* .fetchJson */ .r)(url);
    return jsonPosts;
  } catch (error) {
    console.error('Erro no Fetch getPost', error);
    return [];
  }
}

/***/ }),

/***/ 3265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DynamicPost),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _data_posts_get_all_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3173);
/* harmony import */ var _data_posts_count_All_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3890);
/* harmony import */ var _data_posts_get_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9469);
/* harmony import */ var _utils_markdown_to_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6526);
/* harmony import */ var _containers_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5907);
/* harmony import */ var _data_posts_get_Category_Names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1476);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_markdown_to_html__WEBPACK_IMPORTED_MODULE_0__, _containers_Post__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_markdown_to_html__WEBPACK_IMPORTED_MODULE_0__, _containers_Post__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function DynamicPost({
  post,
  content,
  categoryName
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_containers_Post__WEBPACK_IMPORTED_MODULE_1__/* .Post */ .S, {
    post: post,
    content: content,
    categoryName: categoryName
  });
}
const getStaticPaths = async () => {
  const numberOfPosts = await (0,_data_posts_count_All_Posts__WEBPACK_IMPORTED_MODULE_3__/* .countAllPosts */ .q)();
  const posts = await (0,_data_posts_get_all_posts__WEBPACK_IMPORTED_MODULE_4__/* .getAllPosts */ .B)(`pagination[limit]=${numberOfPosts}`);
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.attributes.slug
        }
      };
    }),
    fallback: false
  };
};
const getStaticProps = async ctx => {
  const data = await (0,_data_posts_get_post__WEBPACK_IMPORTED_MODULE_5__/* .getPost */ .x)(ctx.params.slug);
  const post = data.data[0];
  const content = await (0,_utils_markdown_to_html__WEBPACK_IMPORTED_MODULE_0__/* .MarkdownToHtml */ .v)(post.attributes.content);
  const categoryName = await (0,_data_posts_get_Category_Names__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  return {
    props: {
      post,
      content,
      categoryName
    }
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ removeHTML)
/* harmony export */ });
const removeHTML = html => {
  let data = html.replace(/&lt;.*&gt;/gi, '');
  data = data.replace(/&lt;\/.*&gt;/gi, '');
  data = data.replace(/<[^>*]>/gi, '');
  data = data.replace(/<\/[^>*]>/gi, '');
  return data;
};

/***/ }),

/***/ 6526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ MarkdownToHtml)
/* harmony export */ });
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__]);
([remark__WEBPACK_IMPORTED_MODULE_0__, remark_html__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const MarkdownToHtml = async content => {
  const data = await (0,remark__WEBPACK_IMPORTED_MODULE_0__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_1__["default"]).process(content);
  return String(data);
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 2905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,715], () => (__webpack_exec__(3265)));
module.exports = __webpack_exports__;

})();
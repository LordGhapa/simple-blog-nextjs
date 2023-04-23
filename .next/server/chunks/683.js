"use strict";
exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 4683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HomePage)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(6033);
;// CONCATENATED MODULE: ./src/containers/HomePage/styled.tsx


const Container = external_styled_components_default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1yx6d2-0"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:3rem;margin-bottom:5rem;padding-inline:", ";:has(:hover) > div:not(:hover){opacity:0.6;scale:0.98;}"], theme/* theme.spacings.small */.r.spacings.small);
const Categorie = external_styled_components_default().div.withConfig({
  displayName: "styled__Categorie",
  componentId: "sc-1yx6d2-1"
})(["font-weight:bold;padding-block:", ";text-align:center;font-size:", ";text-transform:capitalize;"], theme/* theme.spacings.small */.r.spacings.small, theme/* theme.font.sizes.large */.r.font.sizes.large);
const AllPostsLink = external_styled_components_default().div.withConfig({
  displayName: "styled__AllPostsLink",
  componentId: "sc-1yx6d2-2"
})(["text-align:center;"]);
// EXTERNAL MODULE: ./src/components/Header/index.tsx + 1 modules
var Header = __webpack_require__(9061);
// EXTERNAL MODULE: ./src/components/MainContainer/index.tsx + 1 modules
var MainContainer = __webpack_require__(3032);
;// CONCATENATED MODULE: ./src/components/PostCard/styled.ts


const styled_Container = external_styled_components_default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1y2omvo-0"
})(["transition:all 300ms ease-in-out;"]);
const PostCardCover = external_styled_components_default().div.withConfig({
  displayName: "styled__PostCardCover",
  componentId: "sc-1y2omvo-1"
})(["margin-bottom:", ";img{display:block;width:100%;height:26rem;object-fit:cover;}"], theme/* theme.spacings.small */.r.spacings.small);
const PostCardHeading = external_styled_components_default().h2.withConfig({
  displayName: "styled__PostCardHeading",
  componentId: "sc-1y2omvo-2"
})(["font-size:", ";a{color:", ";}"], theme/* theme.font.sizes.medium */.r.font.sizes.medium, theme/* theme.colors.darkGray */.r.colors.darkGray);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/PostCard/index.tsx
/* eslint-disable @next/next/no-img-element */




const PostCard = ({
  slug,
  title,
  cover
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styled_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PostCardCover, {
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: `/post/${slug}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: cover,
          alt: title
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(PostCardHeading, {
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: `/post/${slug}`,
        children: title
      })
    })]
  });
};
// EXTERNAL MODULE: ./src/components/Footer/index.tsx + 1 modules
var Footer = __webpack_require__(6571);
// EXTERNAL MODULE: ./src/config/app-config.ts
var app_config = __webpack_require__(7559);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/Pagination/styled.ts


const Pagination_styled_Container = external_styled_components_default().div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-blsawg-0"
})(["width:100%;display:flex;justify-content:space-between;align-items:center;margin:", " 0;color:red;padding-inline:1rem;"], theme/* theme.spacings.large */.r.spacings.large);
const PreviousLink = external_styled_components_default().div.withConfig({
  displayName: "styled__PreviousLink",
  componentId: "sc-blsawg-1"
})([""]);
const NextLink = external_styled_components_default().div.withConfig({
  displayName: "styled__NextLink",
  componentId: "sc-blsawg-2"
})(["margin-left:auto;"]);
;// CONCATENATED MODULE: ./src/components/Pagination/index.tsx




const Pagination = ({
  nextPage,
  numberOfPosts,
  postsPerPage,
  previousPage,
  category
}) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Pagination_styled_Container, {
    children: [hasPreviousPage && /*#__PURE__*/jsx_runtime_.jsx(PreviousLink, {
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: previousLink,
        children: "Previous"
      })
    }), hasNextPage && /*#__PURE__*/jsx_runtime_.jsx(NextLink, {
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: nextLink,
        children: "Next"
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/containers/HomePage/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function HomePage({
  posts,
  categorie,
  pagination,
  categoryName
}) {
  const title = `${categorie ? `${categorie} - ` : ''} ${app_config/* SITE_NAME */.px} ${pagination?.nextPage ? `- Pagína ${pagination.nextPage - 1}` : ''}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Header/* Header */.h, {
      categorias: categoryName
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* MainContainer */.t, {
      children: [categorie && /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "javascript:history.back()",
        children: "Voltar"
      }), categorie && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Categorie, {
        children: ["Categoria: ", categorie]
      }), /*#__PURE__*/jsx_runtime_.jsx(Container, {
        children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(PostCard, {
          slug: post.attributes.slug,
          title: post.attributes.title,
          cover: post.attributes.cover.data.attributes.formats.small.url
        }, post.id))
      }), !pagination?.nextPage && /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: `/post/page/1`,
        children: /*#__PURE__*/jsx_runtime_.jsx(AllPostsLink, {
          children: "Ver Todos os Posts"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Pagination, _objectSpread({}, pagination))]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* Footer */.$, {})]
  });
}

/***/ })

};
;
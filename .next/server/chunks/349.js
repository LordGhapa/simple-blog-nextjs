"use strict";
exports.id = 349;
exports.ids = [349];
exports.modules = {

/***/ 1173:
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
;// CONCATENATED MODULE: ./src/containers/HomePage/index.tsx








function HomePage({
  posts,
  categorie
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* Header */.h, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainContainer/* MainContainer */.t, {
      children: [categorie && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Categorie, {
        children: ["Categoria: ", categorie]
      }), /*#__PURE__*/jsx_runtime_.jsx(Container, {
        children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(PostCard, {
          slug: post.attributes.slug,
          title: post.attributes.title,
          cover: post.attributes.cover.data.attributes.formats.small.url
        }, post.id))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* Footer */.$, {})]
  });
}

/***/ })

};
;
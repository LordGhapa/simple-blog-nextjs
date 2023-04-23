"use strict";
exports.id = 715;
exports.ids = [715];
exports.modules = {

/***/ 6571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(6033);
;// CONCATENATED MODULE: ./src/components/Footer/styled.ts


const Container = external_styled_components_default().footer.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1sg38ek-0"
})(["text-align:center;background-color:", ";color:", ";font-size:", ";padding:", ";a{color:", ";}display:block;position:absolute;border:0;width:100%;width:100%;height:50px;position:absolute;bottom:0;left:0;"], theme/* theme.colors.primary */.r.colors.primary, theme/* theme.colors.gray */.r.colors.gray, theme/* theme.font.sizes.small */.r.font.sizes.small, theme/* theme.spacings.small */.r.spacings.small, theme/* theme.colors.white */.r.colors.white);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx



const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      children: "Feito por Felipe Lacerda"
    })
  });
};

/***/ }),

/***/ 9061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(6033);
;// CONCATENATED MODULE: ./src/components/Header/styled.ts


const Container = external_styled_components_default().header.withConfig({
  displayName: "styled__Container",
  componentId: "sc-18h5nw9-0"
})(["display:flex;justify-content:center;gap:10px;text-align:center;background-color:", ";color:", ";font-size:", ";padding:", ";a{color:", ";}ul li{background:black;width:170px;height:50px;line-height:50px;float:left;color:#fff;font-size:16px;position:relative;text-transform:uppercase;font-weight:bold;text-align:center;}ul li:hover{background:#262626;}ul ul{display:none;}ul li:hover > ul{display:block;}ul ul ul{margin-left:170px;top:0;position:absolute;}.lista{border:none;margin-top:-10px;}.lista:hover{background-color:black;}"], theme/* theme.colors.primary */.r.colors.primary, theme/* theme.colors.white */.r.colors.white, theme/* theme.font.sizes.large */.r.font.sizes.large, theme/* theme.spacings.medium */.r.spacings.medium, theme/* theme.colors.white */.r.colors.white);
// EXTERNAL MODULE: ./src/config/app-config.ts
var app_config = __webpack_require__(7559);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx





const Header = ({
  categorias = ['erro']
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      children: app_config/* SITE_NAME */.px
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "lista",
        children: ["Categorias \u2193", /*#__PURE__*/jsx_runtime_.jsx("ul", {
          children: categorias.map(category => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: `/post/page/1/${category}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: category
            })
          }, category))
        })]
      })
    })]
  });
};

/***/ }),

/***/ 3032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* binding */ MainContainer)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/theme.ts
var theme = __webpack_require__(6033);
;// CONCATENATED MODULE: ./src/components/MainContainer/styled.ts


const Container = external_styled_components_default().main.withConfig({
  displayName: "styled__Container",
  componentId: "sc-7iz6d1-0"
})(["max-width:96rem;font-size:", ";margin:0 auto;padding-block:", ";background-color:white;pre{display:block;overflow:hidden;}"], theme/* theme.font.sizes.medium */.r.font.sizes.medium, theme/* theme.spacings.large */.r.spacings.large);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/MainContainer/index.tsx


function MainContainer({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: children
  });
}

/***/ }),

/***/ 7559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_O": () => (/* binding */ SITE_URL),
/* harmony export */   "fo": () => (/* binding */ POSTS_URL),
/* harmony export */   "jC": () => (/* binding */ CATEGORY_URL),
/* harmony export */   "px": () => (/* binding */ SITE_NAME)
/* harmony export */ });
const POSTS_URL = `https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&sort=id:desc`;
const CATEGORY_URL = `https://strapi-demo-api-ogjp.onrender.com/api/categories?populate=*&sort=id:desc`;
const SITE_NAME = 'blog example - Felipe Lacerda';
const SITE_URL = 'https://exemple-blog-felipe.netlify.app'; //export const API_URL = `https://strapi-demo-api-ogjp.onrender.com`;
//export const POSTS_URL_FILTER = `https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[id][$in][0]=1`;

/*

filtro por id
https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[id][$in][0]=1

filtro por author

https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[author][name][$eqi]=ghapa

filtro por categoria  sem distinção de maiuscula

https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[categorie][name][$eqi]=JavaScript

https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[categorie][name][$eqi]=ruby

//filtro por slug
https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[slug][$eqi]=post-5


 ordenando por id decrecente
? ou & sort=id:desc

https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&sort=id:desc

elementos por pagina
?pagination[pageSize]=2

// pagina atual
?pagination[page]=2

// limite por pagina

pagination[start]=0&pagination[limit]=6

importante para deploy na netlify
NETLIFY_NEXT_PLUGIN_SKIP como o valor: true

*/

/***/ }),

/***/ 1476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ categoryNames)
/* harmony export */ });
/* harmony import */ var _get_all_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2917);

async function categoryNames() {
  let categorias = await (0,_get_all_category__WEBPACK_IMPORTED_MODULE_0__/* .getAllCategory */ .K)();
  return categorias = categorias.map(r => r.attributes?.name);
}

/***/ }),

/***/ 2917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ getAllCategory)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7559);
/* harmony import */ var _utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8240);
/* eslint-disable */
// @ts-nocheck


async function getAllCategory(query) {
  try {
    const url = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__/* .CATEGORY_URL */ .jC}&${query} `;
    const post = await (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__/* .fetchJson */ .r)(url);
    const content = post.data;
    return content;
  } catch (error) {
    console.error('Erro no Fetch getAllCategory', error);
    return [];
  }
}

/***/ }),

/***/ 3173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ getAllPosts)
/* harmony export */ });
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7559);
/* harmony import */ var _utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8240);
/* eslint-disable */
// @ts-nocheck


async function getAllPosts(query) {
  try {
    const url = `${_config_app_config__WEBPACK_IMPORTED_MODULE_0__/* .POSTS_URL */ .fo}&${query} `;
    const post = await (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_1__/* .fetchJson */ .r)(url);
    const content = post.data;
    return content;
  } catch (error) {
    console.error('Erro no Fetch getAllPosts', error);
    return [];
  }
}

/***/ }),

/***/ 6033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
const theme = {
  colors: {
    primary: '#010101',
    secondary: '#005b96',
    white: '#fafafa',
    lightGray: '#dddddd',
    gray: '#999999',
    darkGray: '#333333'
  },
  spacings: {
    small: '1rem',
    medium: '2rem',
    large: '3rem'
  },
  font: {
    sizes: {
      small: '1.2rem',
      medium: '1.8rem',
      large: '2rem',
      superLarge: '5rem'
    }
  }
};

/***/ }),

/***/ 8240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ fetchJson)
/* harmony export */ });
/* unused harmony export regexImg */
const fetchJson = async url => {
  const raw = await fetch(url);
  const jsonData = await raw.json();
  return jsonData;
};
const regexImg = /!\[(.*?)\]\((.*?)\)/g;
/*
 /* {HTMLReactParser(
      post.attributes.content.replace(
        regexImg,
        ` <img alt="$1" class="imgPost" src="$2" />`,
      ),
    )}

*/

/***/ })

};
;
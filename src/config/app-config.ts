export const API_URL = `https://strapi-demo-api-ogjp.onrender.com`;

export const POSTS_URL = `https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&sort=id:desc`;

export const POSTS_URL_FILTER = `https://strapi-demo-api-ogjp.onrender.com/api/posts?populate=*&filters[id][$in][0]=1`;

export const SITE_NAME = 'FELIPE LACERDA';
export const SITE_URL = process.env.SITE_URL || 'http://127.0.0.1:3000';

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

pagination[start]=0&pagination[limit]=10

*/

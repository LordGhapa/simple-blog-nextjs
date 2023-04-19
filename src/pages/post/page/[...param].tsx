/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../../domain/posts/post';
import HomePage from '../../../containers/HomePage';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { useRouter } from 'next/router';
import Erro404 from '../../404';
import { countAllPosts } from '../../../data/posts/count-All-Posts';
import { PaginationData } from '../../../domain/posts/paginations';
import { getAllCategory } from '../../../data/posts/get-all-category';

interface PageProps {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
}

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();
  if (router.isFallback) return <Erro404 msg={'Carregando'} />;

  if (!posts.length) return <Erro404 />;
  return <HomePage posts={posts} categorie={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = Number(await countAllPosts());
  const postPerPage = 6;
  const qtdPages = Math.ceil(numberOfPosts / postPerPage);
  const querys: any[] = [];
  for (let i = 1; i <= qtdPages; i++) {
    querys.push({
      params: { param: [`${i}`] },
    });
  }
  //// nao mexe para cima ainda
  let categorias: any[] = await getAllCategory();
  categorias = categorias.map((r) => r.attributes.name);

  for (const category of categorias) {
    const numberOfPostsInCategory = Number(
      await countAllPosts(`filters[categorie][name][$eqi]=${category}`),
    );

    for (let i = 1; i <= numberOfPostsInCategory; i++) {
      const qtdPagesInCategories = Math.ceil(i / postPerPage);
      querys.push({
        params: { param: [`${qtdPagesInCategories}`, category] },
      });
    }
  }

  console.log('static path', querys);
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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params.param[0]) || 1;
  const category = ctx.params.param[1] || null;
  const postsPerPage = 6;
  // console.log(ctx);
  const nextPage = page + 1;
  const previousPage = page - 1;
  const categoryQuery = category ? `&filters[categorie][name][$eqi]=${category}` : '';

  const urlQuery = `pagination[page]=${page}&pagination[pageSize]=${postsPerPage}${categoryQuery}`;
  const numberOfPosts = Number(await countAllPosts(categoryQuery));
  const posts = await getAllPosts(urlQuery);
  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    category,
    postsPerPage,
    previousPage,
  };
  return {
    props: {
      posts,
      pagination,
      category,
    },
  };
};

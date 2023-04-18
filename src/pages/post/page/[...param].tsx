import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '../../../domain/posts/post';
import HomePage from '../../../containers/HomePage';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { useRouter } from 'next/router';
import Erro404 from '../../404';
import { countAllPosts } from '../../../data/posts/count-All-Posts';
import { PaginationData } from '../../../domain/posts/paginations';

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
  // const numberOfPosts = await countAllPosts();
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const category = ctx.params.param[1] || null;
  const page = Number(ctx.params.param[0]) || 1;
  const postsPerPage = 6;

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

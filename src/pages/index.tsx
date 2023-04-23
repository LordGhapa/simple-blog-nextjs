import { GetStaticProps } from 'next';
import { PostData } from '../domain/posts/post';

import { getAllPosts } from '../data/posts/get-all-posts';
import HomePage from '../containers/HomePage';
import categoryNames from '../data/posts/get-Category-Names';

interface HomeProps {
  posts: PostData[];
  categoryName: string[];
}

export default function Home({ posts, categoryName }: HomeProps) {
  return <HomePage posts={posts} categoryName={categoryName} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('pagination[start]=0&pagination[limit]=6');
  const categoryName = await categoryNames();

  return {
    props: {
      posts,
      categoryName,
    },
  };
};

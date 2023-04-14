import { GetStaticPaths, GetStaticProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';
import { countAllCategory } from '../../data/posts/count-All-Category';
import { getAllCategory } from '../../data/posts/get-all-category';
interface CategoryProps {
  posts: PostData[];
  categorie: string;
}

export default function Home({ posts, categorie }: CategoryProps) {
  return <HomePage categorie={categorie} posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllCategory();

  const urlQuery = `pagination[limit]=${numberOfPosts}`;
  const categories = await getAllCategory(urlQuery);
  return {
    paths: categories.map((Category) => {
      return {
        params: {
          categorie: Category.attributes.name,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const urlQuery = `pagination[start]=0&pagination[limit]=30&filters[categorie][name][$eqi]=${ctx.params.categorie}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: {
      posts,
      categorie: ctx.params.categorie,
    },
  };
};

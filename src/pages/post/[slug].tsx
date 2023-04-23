import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { countAllPosts } from '../../data/posts/count-All-Posts';

import { getPost } from '../../data/posts/get-post';
import { DynamicPostProps } from '../../domain/posts/post';
import { MarkdownToHtml } from '../../utils/markdown-to-html';

import { Post } from '../../containers/Post';
import categoryNames from '../../data/posts/get-Category-Names';

export default function DynamicPost({ post, content, categoryName }: DynamicPostProps) {
  return <Post post={post} content={content} categoryName={categoryName} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`pagination[limit]=${numberOfPosts}`);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await getPost(ctx.params.slug);

  const post = data.data[0];
  const content = await MarkdownToHtml(post.attributes.content);
  const categoryName = await categoryNames();

  return {
    props: {
      post,
      content,
      categoryName,
    },
  };
};

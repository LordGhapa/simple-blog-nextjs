import { PostCard, PostCardProps } from '.';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    slug: 'default-slug',
    title: 'default-title',
    cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
} as Meta;
export const PostCardBook: StoryObj<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />;
  </div>
);

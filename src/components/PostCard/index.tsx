/* eslint-disable @next/next/no-img-element */

import { Container, PostCardCover, PostCardHeading } from './styled';
import Link from 'next/link';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = ({ slug, title, cover }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link href={`/post/${slug}`}>
          <img src={cover} alt={title} />
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link href={`/post/${slug}`}>{title}</Link>
      </PostCardHeading>
    </Container>
  );
};

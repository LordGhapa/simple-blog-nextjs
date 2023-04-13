import Link from 'next/link';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { DynamicPostProps } from '../../domain/posts/post';
import parse from 'html-react-parser';
import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Heading';
import { PostCover } from '../../components/PostCover';
import { PostContent } from '../../components/PostContent';
import { PostDetails } from '../../components/PostDetails';
import { Comments } from '../../Comments';

export function Post({ post, content }: DynamicPostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Link href={'/'}>INICIO</Link>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.small.url}
          alt={post.attributes.title}
        />
        <PostDetails
          date={post.attributes.createdAt}
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.categorie.data.attributes.name}
        ></PostDetails>
        <br />
        <PostContent>{parse(content)}</PostContent>
        <Comments slug={post.attributes.slug} title={post.attributes.title} />
      </MainContainer>
      <Footer />
    </>
  );
}
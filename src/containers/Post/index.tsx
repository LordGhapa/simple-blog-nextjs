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
import { Comments } from '../../components/Comments';
import Head from 'next/head';
import { SITE_NAME } from '../../config/app-config';
import { removeHTML } from '../../utils/Remove-html';

export function Post({ post, content, categoryName }: DynamicPostProps) {
  return (
    <>
      <Head>
        <title>{`${post.attributes.title}-${SITE_NAME}`}</title>
        <meta name="description" content={removeHTML(content).slice(0, 150)} />
      </Head>
      <Header categorias={categoryName} />
      <MainContainer>
        <Link href="javascript:history.back()">Voltar</Link>
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

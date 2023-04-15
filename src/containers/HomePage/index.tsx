import { PostData } from '../../domain/posts/post';
import { Container, Categorie } from './styled';

import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';
import { SITE_NAME } from '../../config/app-config';
import Head from 'next/head';

export interface HomePageProps {
  posts: PostData[];
  categorie?: string;
}
export default function HomePage({ posts, categorie }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{categorie ? `${categorie} - ${SITE_NAME}` : 'Blog exemple'}</title>
      </Head>
      <Header />
      <MainContainer>
        {categorie && <Categorie>Categoria: {categorie}</Categorie>}
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              slug={post.attributes.slug}
              title={post.attributes.title}
              cover={post.attributes.cover.data.attributes.formats.small.url}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}

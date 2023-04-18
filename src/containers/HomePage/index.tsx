import { PostData } from '../../domain/posts/post';
import { Container, Categorie, AllPostsLink } from './styled';

import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';
import { SITE_NAME } from '../../config/app-config';
import Head from 'next/head';
import { PaginationData } from '../../domain/posts/paginations';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';

export interface HomePageProps {
  posts: PostData[];
  categorie?: string;
  pagination?: PaginationData;
}
export default function HomePage({ posts, categorie, pagination }: HomePageProps) {
  const title = `${categorie ? `${categorie} - ` : ''} ${SITE_NAME} ${
    pagination?.nextPage ? `- Pagína ${pagination.nextPage - 1}` : ''
  }`;
  return (
    <>
      <Head>
        <title>{title}</title>
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
        {!pagination?.nextPage && (
          <Link href={`/post/page/1`}>
            <AllPostsLink>Ver Todos os Posts</AllPostsLink>
          </Link>
        )}
        <Pagination {...pagination} />
      </MainContainer>
      <Footer />
    </>
  );
}

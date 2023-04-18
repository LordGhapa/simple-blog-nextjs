import Link from 'next/link';

import { Container, PreviousLink, NextLink } from './styled';
import { PaginationData } from '../../domain/posts/paginations';

export type PaginationProps = PaginationData;
export const Pagination = ({
  nextPage,
  numberOfPosts,
  postsPerPage,
  previousPage,
  category,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;

  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link href={previousLink}>Previous</Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link href={nextLink}>Next</Link>
        </NextLink>
      )}
    </Container>
  );
};

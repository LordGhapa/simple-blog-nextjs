import Link from 'next/link';
import { Date } from '../Date';
import { Container } from './styled';

export type DateDetailsProps = {
  date: string;
  author: string;
  category: string;
};
export const PostDetails = ({ date, author, category }: DateDetailsProps) => {
  return (
    <Container>
      Publicado em: <Date date={date} /> por {author} |{' '}
      <Link href={`/post/page/1/${category}`}>{category}</Link>
    </Container>
  );
};

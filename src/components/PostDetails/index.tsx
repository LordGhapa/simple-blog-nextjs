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
      Publicado em: <Date date={date} /> por {author} | {category}
    </Container>
  );
};

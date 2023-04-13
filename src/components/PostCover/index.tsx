import { Container } from './styled';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export function PostCover({ coverUrl, alt }: PostCoverProps) {
  return <Container alt={alt} src={coverUrl} />;
}

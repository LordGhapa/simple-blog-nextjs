import { Container } from './styled';

export type PostContent = {
  children: React.ReactNode;
};
export function PostContent({ children }: PostContent) {
  return <Container>{children}</Container>;
}

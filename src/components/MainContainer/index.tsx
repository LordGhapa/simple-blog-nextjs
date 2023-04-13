import * as Styled from './styled';
export type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

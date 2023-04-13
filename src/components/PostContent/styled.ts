import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Container = styled.article`
  padding-bottom: 4rem;
  padding-inline: ${theme.spacings.small};
  font-size: 2rem;
  img {
    width: 100%;
  }
  img {
    max-width: 100%;
  }
  p {
    margin: ${theme.spacings.medium} 0;
  }
  ul,
  ol {
    margin: ${theme.spacings.medium};
  }
  pre {
    display: none;
    width: 100%;
    overflow-x: auto;
    background: ${theme.colors.lightGray};
    color: ${theme.colors.darkGray};
    padding: ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    line-height: 1.5;
    font-size: ${theme.font.sizes.medium};
  }
`;

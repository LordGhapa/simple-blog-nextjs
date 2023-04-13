import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.main`
  max-width: 96rem;
  font-size: ${theme.font.sizes.medium};
  margin: 0 auto;
  padding-block: ${theme.spacings.small};
  background-color: white;
  pre {
    display: block;
    overflow: hidden;
  }
`;

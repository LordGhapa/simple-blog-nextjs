import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Container = styled.header`
  text-align: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.large};
  padding: ${theme.spacings.medium};
  a {
    color: ${theme.colors.white};
  }
`;

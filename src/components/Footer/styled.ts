import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Container = styled.footer`
  text-align: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.small};
  padding: ${theme.spacings.small};
  a {
    color: ${theme.colors.white};
  }
  display: block;
  position: absolute;
  border: 0;
  width: 100%;

  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

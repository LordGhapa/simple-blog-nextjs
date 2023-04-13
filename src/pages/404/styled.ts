import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Container = styled.footer`
  text-align: center;
  background-color: ${theme.colors.primary};
  color: #f15c56;
  font-size: ${theme.font.sizes.small};
  padding: ${theme.spacings.small};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;

  p {
    font-weight: bold;
    font-size: 15rem;
  }
`;
export default Container;

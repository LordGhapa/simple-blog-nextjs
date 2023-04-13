import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Container = styled.h2`
  font-size: ${theme.font.sizes.superLarge};
  margin-block: ${theme.spacings.large};
  text-align: center;

  //white-space: nowrap; /* impede que o texto quebre em várias linhas */
  @media (max-width: 768px) {
    font-size: 8vw !important; /* ajusta o tamanho da fonte para 7vw */
  }
`;

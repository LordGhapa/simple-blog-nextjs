import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
  padding-inline: ${theme.spacings.small};
  /*  &:has(div:hover) div:not(:hover) {
    opacity: 0.6;
    scale: 0.98;
  } */

  :has(:hover) > div:not(:hover) {
    opacity: 0.6;
    scale: 0.98;
  }
`;

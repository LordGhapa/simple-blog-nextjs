import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
  margin-bottom: 5rem;
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

export const Categorie = styled.div`
  font-weight: bold;
  padding-block: ${theme.spacings.small};
  text-align: center;
  font-size: ${theme.font.sizes.large};
  text-transform: capitalize;
`;
export const AllPostsLink = styled.div`
  text-align: center;
`;

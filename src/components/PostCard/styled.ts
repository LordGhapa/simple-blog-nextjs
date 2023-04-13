import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  transition: all 300ms ease-in-out;
`;
export const PostCardCover = styled.div`
  margin-bottom: ${theme.spacings.small};
  img {
    display: block;
    width: 100%;
    height: 26rem;
    object-fit: cover;
  }
`;
export const PostCardHeading = styled.h2`
  font-size: ${theme.font.sizes.medium};
  a {
    color: ${theme.colors.darkGray};
  }
`;

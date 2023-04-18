import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${theme.spacings.large} 0;
  color: red;
  padding-inline: 1rem;
`;

export const PreviousLink = styled.div``;
export const NextLink = styled.div`
  margin-left: auto;
`;

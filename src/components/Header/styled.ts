import styled from 'styled-components';
import { theme } from '../../styles/theme';
export const Container = styled.header`
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align: center;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.large};
  padding: ${theme.spacings.medium};
  a {
    color: ${theme.colors.white};
  }

  ul li {
    background: black;
    width: 170px;

    height: 50px;
    line-height: 50px;
    float: left;
    color: #fff;
    font-size: 16px;
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }
  ul li:hover {
    background: #262626;
  }

  ul ul {
    display: none;
  }
  ul li:hover > ul {
    display: block;
  }
  ul ul ul {
    margin-left: 170px;
    top: 0;
    position: absolute;
  }
  .lista {
    border: none;
    margin-top: -10px;
  }
  .lista:hover {
    background-color: black;
  }
`;

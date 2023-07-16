import { theme } from '../../../layouts/main/theme';
import styled from '@emotion/styled';

export const Title = styled('h1')`
  padding: 0 0 3rem 0;
  font-size: 1.7rem;
  color: ${theme.colors.black};
  font-weight: 700;
  letter-spacing: -0.05rem;
  line-height: 1;
  margin: 0;
  display: inline-flex;
  text-align: center;
  a {
    display: inline-flex;
    color: ${theme.colors.violetA10};
    padding: 0 0.3em;
    margin-top: -0.2em;
  }
  @media only screen and (max-width: 800px){
    display: none;
  }
`;

export const Divider = styled('div')`
  height: 1px;
  width: 100%;
  margin: 1rem 0;
  background-color: #d9d9d9;
`;

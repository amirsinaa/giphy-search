
import { theme } from '../../../layouts/main/theme';
import styled from '@emotion/styled';

export const FooterWrapper = styled.footer(`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 0.1rem 0;
  margin: 0.5rem 0 0 0;
  width: 100%;
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  & a {
    color: white;
  }
`);
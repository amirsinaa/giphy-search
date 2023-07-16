import { theme } from '../../../layouts/main/theme';
import styled from '@emotion/styled';

export const TechnologyBox = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const TechnologyBoxWrapper = styled('div')`
  margin: 5rem auto 0 auto;
`;

export const TechnologyCard = styled('div')`
  display: flex;
  flex-grow: 1;
  margin: 0 0.4em;
  padding: 0.3em;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

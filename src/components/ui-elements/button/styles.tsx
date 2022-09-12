import { theme } from '../../../layouts/main/theme';
import styled from '@emotion/styled';
import { Input } from '../input';

export const SubmitInput = styled(Input)({
  all: 'unset',
});

export const Button = styled.button(`
  all: unset;
  color: ${theme.colors.accent};
  background: ${theme.colors.secondary};
  padding: 4.8px 16px;
  border-radius: 10px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  width: 80%;
  transition: transform ease-in 150ms, box-shadow ease-in 150ms, background ease-in 200ms, color ease-in 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 2px hsl(0, 0%, 68.6%),4px 8px 8px hsl(0, 0%, 68.6%);
    color: ${theme.colors.white};
    background: ${theme.colors.accent};
    transform: scale(1.02);
  }
  @media only screen and (max-width: 694px) {
    width: 100%;
    margin: 10px;
  }
`);
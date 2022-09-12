import { theme } from '../../../layouts/main/theme';
import styled from '@emotion/styled';

export const Input = ({ ...props }) => <input {...props} />;

export const TextInput = styled.input(`
  border-radius: 10px;
  height: 70px;
  width: 100%;
  font-size: 1rem;
  border: ${`1.5px solid ${theme.colors.secondary}`};
  padding: 4.8px 16px;
  margin: 10px;
  &:hover {
  }
`);

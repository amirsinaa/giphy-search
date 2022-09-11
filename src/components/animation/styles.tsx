
import { theme } from '../../layouts/main/theme';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const SpinnerWrapper = styled.div(`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: 10;
  background: ${theme.colors.secondary};
  align-items: center;
  justify-content: center;
  height: 100vh;
`);

export const Spinner = styled(motion.div)({
  width: 100,
  height: 100,
  background: theme.colors.accent
});
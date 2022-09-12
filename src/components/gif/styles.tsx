import { SelectItem } from '../ui-elements/select/select-box-item';
import { theme } from '../../layouts/main/theme';
import { keyframes } from '@emotion/css';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const GiphyResultWrapper = styled(motion.section)`
  justify-content: center;
  display: inline-flex;
  flex-wrap: wrap;
  width: 95%;
`;

export const GifImageWrapper = styled(motion.picture)`
  margin: 0.5rem;
  border-radius: 10px;
  border: 10px solid ${theme.colors.accent};
  background: linear-gradient(-45deg,${theme.colors.primary},${theme.colors.secondary},${theme.colors.accent},${theme.colors.lightGray});
  background-size: 400% 400%;
  &.picture-loaded{
    background: transparent;
  }
`;

export const GifImage = styled(motion.img)`
  width: 250px;
  height: 250px;
`;

export const lazyLoadEffect = keyframes({
  '0%, 100%': {
    backgroundPosition: '0% 100%',

  },
  '50%': {
    backgroundPosition: '50% 100%',
  }
});

export const StyledSelectItem = styled(SelectItem)({
  all: 'unset',
  fontSize: '0.9rem',
  lineHeight: 2,
  color: theme.colors.accent,
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  height: 15,
  padding: '10px',
  position: 'relative',
  userSelect: 'none',
  '&[data-disabled]': {
    color: theme.colors.gray,
    pointerEvents: 'none',
  },
  '&[data-highlighted]': {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.accent,
    cursor: 'pointer'
  },

});

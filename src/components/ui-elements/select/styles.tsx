
import * as SelectPrimitive from '@radix-ui/react-select';
import { theme } from '../../../layouts/main/theme';
import styled from '@emotion/styled';

export const StyledSelect = styled(SelectPrimitive.Root)({
});

export const StyledSelectValue = styled(SelectPrimitive.Value)({
});

export const StyledSelectPortal = styled(SelectPrimitive.Portal)({
});

export const StyledSelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton)({
});

export const StyledSelectGroup = styled(SelectPrimitive.Group)({
});

export const StyledSelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton)({
});

export const StyledSelectViewport = styled(SelectPrimitive.Viewport)({
  padding: 5,
  fontSize: '1rem',
});

export const StyledSelectContent = styled(SelectPrimitive.Content)({
  background: theme.colors.white,
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  fontSize: '1rem'
});

export const StyledSelectTrigger = styled(SelectPrimitive.Trigger)({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  border: `1.5px solid ${theme.colors.secondary}`,
  padding: '4.8px 16px',
  fontSize: '1rem',
  lineHeight: 2,
  margin: '10px',
  width: '25%',
  gap: '75%',
  backgroundColor: 'white',
  color: theme.colors.accent,
  transition: 'background-color ease 250ms, box-shadow ease 200ms',
  '&:hover': {
    border: `1.5px solid ${theme.colors.accent}`,
    backgroundColor: theme.colors.accent,
    color: theme.colors.white,
    cursor: 'pointer'
  },
  '&[data-placeholder]': { color: theme.colors.primary },
});

export const StyledSelectLabel = styled(SelectPrimitive.Label)({
  color: theme.colors.secondary,
  padding: '0 25px',
  fontSize: '0.8rem',
  lineHeight: '25px',

});

export const StyledSelectIcon = styled(SelectPrimitive.SelectIcon)({
  color: theme.colors.secondary,
  fontSize: '1rem',
});

export const StyledSelectItem = styled(SelectPrimitive.Item)({
});

export const StyledSelectItemText = styled(SelectPrimitive.ItemText)({
});

export const StyledSelectItemIndicator = styled(SelectPrimitive.ItemIndicator)({
});
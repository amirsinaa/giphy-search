import {
  StyledSelectItemIndicator,
  StyledSelectItemText,
  StyledSelectItem
} from './styles';
import type { SelectBoxItemProps } from '../../../types';
import { CheckIcon } from '@radix-ui/react-icons';
import React from 'react';

export const SelectItem = React.forwardRef(
  ({ children, ...props }: SelectBoxItemProps, forwardedRef: any) => {
    return (
      <StyledSelectItem {...props} ref={forwardedRef}>
        <StyledSelectItemText>{children}</StyledSelectItemText>
        <StyledSelectItemIndicator>
          <CheckIcon />
        </StyledSelectItemIndicator>
      </StyledSelectItem>
    );
  }
);
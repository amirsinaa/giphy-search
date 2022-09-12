import {
  StyledSelectScrollDownButton,
  StyledSelectScrollUpButton,
  StyledSelectViewport,
  StyledSelectTrigger,
  StyledSelectContent,
  StyledSelectPortal,
  StyledSelectLabel,
  StyledSelectIcon,
  StyledSelectValue,
  StyledSelectGroup,
  StyledSelect
} from './styles';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import React from 'react';

export const SelectBox = React.forwardRef(
  ({ children, ...props }: any, forwardedRef: any) => {
    return (
      <StyledSelect {...props}>
        <StyledSelectTrigger ref={forwardedRef}>
          <StyledSelectValue />
          <StyledSelectIcon>
            <ChevronDownIcon />
          </StyledSelectIcon>
        </StyledSelectTrigger>
        <StyledSelectPortal>
          <StyledSelectContent>
            <StyledSelectScrollUpButton>
              <ChevronUpIcon />
            </StyledSelectScrollUpButton>
            <StyledSelectViewport>
              <StyledSelectGroup>
                <StyledSelectLabel>{props.label}</StyledSelectLabel>
                {children}
              </StyledSelectGroup>
            </StyledSelectViewport>
            <StyledSelectScrollDownButton>
              <ChevronDownIcon />
            </StyledSelectScrollDownButton>
          </StyledSelectContent>
        </StyledSelectPortal>
      </StyledSelect>
    );
  }
);

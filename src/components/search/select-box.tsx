import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import React from 'react';

type SelectBoxItemProps = {
  children: React.ReactNode,
  value: string
}

export const SelectItem = React.forwardRef(
  ({ children, ...props }: SelectBoxItemProps, forwardedRef: any) => {
    return (
      <SelectPrimitive.Item {...props} ref={forwardedRef}>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    );
  }
);

export const SelectBox = React.forwardRef(
  ({ children, ...props }: any, forwardedRef: any) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger ref={forwardedRef}>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon>
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content>
            <SelectPrimitive.ScrollUpButton>
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton>
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
)

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { theme } from '../../../layouts/main/theme';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.header(`
  padding: 0.5rem 0;
  margin: 0 0 1rem 0;
`);

export const Menu = styled(NavigationMenuPrimitive.Root)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
});

export const List = styled(NavigationMenuPrimitive.List)({
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  flexWrap: 'wrap'
});

export const ListItem = styled(NavigationMenuPrimitive.Item)({
  all: 'unset',
  background: theme.colors.violetA6,
  borderRadius: 8,
  transition: 'background-color 150ms ease',
  margin: '5px 10px',
  boxShadow: `0 2px 10px ${theme.colors.lightGray}`,
  color: theme.colors.white,
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${theme.colors.accent}` },
  '&:hover': { backgroundColor: theme.colors.accent, cursor: 'pointer' },
});

export const Link = styled(NavLink)({
  all: 'unset',
  padding: '8px 12px',
  fontWeight: 500,
  fontSize: '1.1rem',
  lineHeight: 1,
  borderRadius: 8,
  transition: 'color 150ms ease',
  '&:focus': { color: theme.colors.white },
  '&:hover': { color: theme.colors.white },
  display: 'block',
  textDecoration: 'none'
});

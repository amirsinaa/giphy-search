import {
  HeaderWrapper,
  ListItem,
  Menu,
  List,
  Link
} from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <Menu>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">About</Link>
          </ListItem>
        </List>
      </Menu>
    </HeaderWrapper>
  )
}

export default Header;
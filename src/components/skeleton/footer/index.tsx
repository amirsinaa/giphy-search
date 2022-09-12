import { FooterWrapper } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© Amirsina Shadkami <span id="year"> {new Date().getFullYear()} </span> - <a href="https://github.com/amirsinaa/giphy-search/">Github</a></p>
    </FooterWrapper>
  )
}

export default Footer;
import { FooterContainer, FooterText } from './FooterStyles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>{currentYear} - &copy; RNT projects all rights reserved</FooterText>
    </FooterContainer>
  )
}

export default Footer

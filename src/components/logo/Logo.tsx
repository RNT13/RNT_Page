import { useSelector } from 'react-redux'
import { icons } from '../../assets/icons'
import { RootState } from '../../redux/store'
import { LogImg, LogoDiv } from '../logo/LogoStyles'

export const Logo = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const logoSrc = icons[theme].logo

  return (
    <LogoDiv>
      <LogImg src={logoSrc} alt="Logo" />
    </LogoDiv>
  )
}

export default Logo

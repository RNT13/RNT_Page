import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { icons } from '../../assets/icons'
import { RootState } from '../../redux/store'
import { LogImg, LogoDiv } from './LogoStyles'

export const Logo = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const logoSrc = icons[theme].logo

  return (
    <LogoDiv>
      <Link to={'/'}>
        <LogImg src={logoSrc} alt="Logo" />
      </Link>
    </LogoDiv>
  )
}

export default Logo

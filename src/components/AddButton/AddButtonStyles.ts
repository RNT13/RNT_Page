import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Circle = styled(Link)`
  display: block;
  width: 64px;
  height: 64px;
  background-color: ${theme.colors.verde};
  color: ${theme.colors.branco};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 64px;
  font-size: 40px;
  text-decoration: none;
  box-shadow: 8px 8px 5px ${theme.colors.preto};
`

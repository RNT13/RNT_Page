import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Circle = styled(Link)`
  display: block;
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 64px;
  font-size: 40px;
  text-decoration: none;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
`

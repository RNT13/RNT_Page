import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeaderContainer = styled.header`
  background-color: ${theme.colors.primaryColor};
  width: 100%;
  height: 70px;
  padding: 16px;
  color: ${theme.colors.branco};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
`

export const Nav = styled.nav`
  gap: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

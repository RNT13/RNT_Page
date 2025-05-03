import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  grid-area: header;
  z-index: 100;
`

export const HeaderContainer = styled.header`
  height: 70px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`

export const Nav = styled.nav`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavLeft = styled.nav`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: end;
`

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  width: 100%;
  height: 70px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
`

export const Nav = styled.nav`
  gap: 15px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavLeft = styled.nav`
  gap: 15px;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: end;
`

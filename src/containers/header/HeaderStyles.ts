import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.white};
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

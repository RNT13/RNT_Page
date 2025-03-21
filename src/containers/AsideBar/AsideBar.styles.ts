import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const AsideContainer = styled.aside<{ $isOpen: boolean }>`
  padding: 1rem;
  width: ${props => (props.$isOpen ? '250px' : '80px')};
  height: 100%;
  position: fixed;
  left: 0;
  top: 60px;
  background-color: ${theme.colors.primaryColor};
  transition: all 0.2s linear;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
  }
`

export const AsideAppsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 90%;
`

export const AsideSocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 90%;
`

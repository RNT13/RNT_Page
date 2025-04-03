import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;

  body {
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
  }
}
`

export const GlobalContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GlobalLayout = styled.div``

export const GlobalMain = styled.div``

export const GlobalMainContent = styled.main<{ $isOpen: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  height: 100vh;
  margin-left: ${({ $isOpen }) => ($isOpen ? '250px' : '80px')};
  background-color: ${theme.colors.secondaryColor};
  transition: margin-left 0.2s linear;
  overflow: hidden;
`

export const MainContainer = styled.main`
  padding: 0 100px 150px;
  height: 100vh;
`

export const TitleH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3em;
  margin: 48px 0px 48px 0px;
`

export const TextH3 = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 0.8em;
`

export const InputField = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: ${theme.colors.branco};
  font-weight: bold;
  color: ${theme.colors.cinza};
  border: 1px solid ${theme.colors.cinza};
  width: 100%;
  margin: 12px 0px;
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${theme.colors.branco};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${theme.colors.primaryColor};
  border-radius: 8px;
  margin-right: 8px;
  margin-top: 8px;
`

export const SaveButton = styled(Button)`
  background-color: ${theme.colors.verde};
`

export const Card = styled.div`
  background-color: ${theme.colors.branco};
  box-shadow: 0px 4px 4px ${theme.colors.preto};
  border-radius: 16px;
  padding: 16px;
  margin: 32px 100px;
`

export const Tag = styled.span<{ $status?: string; $priority?: string }>`
  padding: 4px 8px;
  color: ${theme.colors.branco};
  font-weight: bold;
  font-size: 10px;
  background-color: ${props => {
    if (props.$status) {
      switch (props.$status) {
        case 'Friend':
          return theme.colors.verde
        case 'Known':
          return theme.colors.amarelo2
        case 'Unknown':
          return theme.colors.vermelho
        case 'Completed':
          return theme.colors.verde
        case 'Pending':
          return theme.colors.amarelo2
        default:
          return theme.colors.preto
      }
    }
    if (props.$priority) {
      return props.$priority === 'Urgent' ? theme.colors.vermelho : theme.colors.azul
    }
    return theme.colors.preto
  }};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  margin-bottom: 16px;
`

export const Counter = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.preto};
`

export default GlobalStyle

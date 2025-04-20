import styled, { createGlobalStyle } from 'styled-components'

// 🌍 Estilos globais
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;

    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.textColor} ${({ theme }) => theme.colors.primaryColor};
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.primaryColor};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.secondaryColor};
      border-radius: 10px; /* Arredondamento */
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.textColor};
    }
  }

  body,html {
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;
  }
`

export const GlobalMainContent = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  overflow: auto;
`
export const MainContent = styled.main<{ $isOpen: boolean }>`
  margin-left: ${({ $isOpen }) => ($isOpen ? '210px' : '40px')};
  transition: margin-left 0.2s linear;
  padding: 0px 0px 0px 40px;
`

export const MainContainer = styled.main`
  margin: 0 auto;
`

export const TitleH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3em;
  margin: 40px 10px;
`

export const TextH3 = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 0.8em;
`

export const InputField = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.inputColor};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  width: 100%;
  margin: 12px 0;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
`

export const SaveButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green};
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 16px;
  padding: 16px;
  margin: 32px 100px;
  box-shadow: 8px 8px 5px ${({ theme }) => theme.colors.shadow};
`

export const Tag = styled.span<{ $status?: string; $priority?: string }>`
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.shadow};
  font-weight: bold;
  font-size: 10px;
  background-color: ${({ $status, $priority, theme }) => {
    if ($status) {
      switch ($status) {
        case 'Friend':
        case 'Completed':
          return theme.colors.green
        case 'Known':
          return theme.colors.orange
        case 'Pending':
          return theme.colors.yellow
        case 'Unknown':
          return theme.colors.red
        default:
          return theme.colors.black
      }
    }
    if ($priority) {
      return $priority === 'Urgent' ? theme.colors.red : theme.colors.blue
    }
    return theme.colors.black
  }};
  border-radius: 8px;
  margin: 0 16px 16px 0;
  display: inline-block;
`

export const Counter = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`

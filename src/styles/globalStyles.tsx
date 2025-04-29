import styled, { createGlobalStyle } from 'styled-components'
import { media } from './media'

// 🌍 Estilos globais
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;

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
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.textColor};
    }
  }

  body,html {

  }
`

export const GlobalMainContent = styled.main`
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  overflow-y: auto;

  ${(media.sm, media.md)} {
    display: block;
    padding-bottom: 50px;
  }
`
export const MainContent = styled.main<{ $isOpen: boolean }>`
  margin-left: ${({ $isOpen }) => ($isOpen ? '170px' : '0px')};
  transition: margin-left 0.2s linear;
`

export const MainContainer = styled.main`
  margin: 0 auto;
`

export const TitleH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3em;
  margin: 20px 50px;
`

export const TextH3 = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 0.8em;

  ${(media.sm, media.md)} {
    font-size: 0.6em;
  }
`

export const InputField = styled.input`
  padding: 8px;
  margin: 12px 0;
  font-weight: bold;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.inputColor};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 16px;
  padding: 16px;
  margin: 32px 100px;
  box-shadow: 8px 8px 5px ${({ theme }) => theme.colors.shadow};
`

export const FilterCard = styled.div<{ $ativo: boolean }>`
  width: 85px;
  height: 60px;
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  white-space: break-spaces;
  word-break: break-all;

  border: 2px solid ${({ theme, $ativo }) => ($ativo ? theme.colors.blue2 : theme.colors.primaryColor)};
  background-color: ${({ theme, $ativo }) => ($ativo ? theme.colors.secondaryColor : theme.colors.grey2)};
  color: ${({ theme, $ativo }) => ($ativo ? theme.colors.textColor : theme.colors.grey2)};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};

  ${(media.sm, media.md)} {
    width: 55px;
    height: 45px;
    padding: 2px;
  }
`

export const Counter = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};

  ${(media.sm, media.md)} {
    font-size: 1rem;
  }
`

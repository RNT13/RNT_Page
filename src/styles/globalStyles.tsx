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

  .container {
    width: 1000px;
    margin: 0 auto;
  }
`

export const AppLayout = styled.main<{ $isOpen: boolean }>`
  display: grid;
  grid-template-areas:
    'header header'
    'aside main';
  grid-template-columns: ${({ $isOpen }: { $isOpen: boolean }) => ($isOpen ? '170px 1fr' : '0px 1fr')};
  grid-template-rows: 70px 1fr;
  height: 100vh;
  transition: all 0.3s ease;

  ${(media.sm, media.md)} {
    grid-template-areas:
      'header'
      'main'
      'aside';
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr auto;
  }
`

export const ContentWrapper = styled.main`
  grid-area: main;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  transition: all 0.3s ease;
  margin-left: 80px;

  ${(media.sm, media.md)} {
    margin-left: 0px;
  }
`

export const TitleH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3em;
  margin: 20px 0px;

  ${(media.sm, media.md)} {
    font-size: 2em;
    margin: 20px 0px;
  }
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

export const OverlayBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 10;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
`

export const OverlayDark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.overlay};
`

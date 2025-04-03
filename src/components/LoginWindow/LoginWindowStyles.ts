import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const WindowContainer = styled.div`
  position: absolute;
  top: 40px;
  left: -132px;
  background: ${theme.colors.primaryColor};
  border: 1px solid ${theme.colors.azul2};
  padding: 16px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 5px 5px 5px ${theme.colors.preto};

  input {
    padding: 8px;
    border: 1px solid ${theme.colors.azul2};
    border-radius: 4px;
    box-shadow: 5px 5px 5px ${theme.colors.preto};

    &:focus {
      outline: none;
      border-color: ${theme.colors.primaryColor};
    }
  }

  button {
    background-color: ${theme.colors.secondaryColor};
    color: white;
    border: none;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 5px 5px 5px ${theme.colors.preto};

    &:hover {
      background-color: ${theme.colors.azul2};
    }
  }
`

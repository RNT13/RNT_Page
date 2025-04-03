import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.secondaryColor};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  position: relative;

  &:hover {
    background-color: ${theme.colors.azul2};
  }
`

export const LoginIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-shadow: 5px 5px 5px ${theme.colors.preto};
  backdrop-filter: blur(5px);
  z-index: 10;
`

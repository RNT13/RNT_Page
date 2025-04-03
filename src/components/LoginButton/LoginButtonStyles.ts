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
  width: 20px;
  height: 20px;
  margin-right: 8px;
`

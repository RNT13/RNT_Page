import { styled } from 'styled-components'
import { Button } from '../../styles/globalStyles'
import { theme } from '../../styles/theme'

export const WindowContainer = styled.div`
  position: absolute;
  top: 30px;
  left: -300px;
  width: 300px;
  height: 400px;
  background: ${theme.colors.primaryColor};
  border: 1px solid ${theme.colors.azul2};
  padding: 16px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 55px;
  box-shadow: 5px 5px 5px ${theme.colors.preto};
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TooglePasswordButton = styled.button`
  position: absolute;
  padding: 5px;
  top: 50%;
  right: 10px;
  transform: translate(-10%, -50%);
  border: none;
  cursor: pointer;
  font-size: 18px;
  box-shadow: none;
  background-color: transparent;
  color: ${theme.colors.azul2};
  z-index: 1000;
`
export const FloatingLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-30%);
  font-size: 16px;
  color: ${theme.colors.cinza};
  transition: all 0.2s ease-in-out;

  &.active {
    top: -4px;
    font-size: 18px;
    color: ${theme.colors.branco};
    text-transform: uppercase;
  }
`

export const LoginButton = styled(Button)`
  width: 100%;
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.branco};
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    background-color: ${theme.colors.azul2};
  }
`

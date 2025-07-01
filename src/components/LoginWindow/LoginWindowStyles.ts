import { styled } from 'styled-components'
import { TextH3 } from '../../styles/globalStyles'
import { transition } from '../../styles/theme'
import Button from '../Button/Button'

export const LoginWindowContainer = styled.div`
  width: 350px;
  height: 400px;
  background: ${({ theme }) => theme.colors.primaryColor};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 16px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
`

export const LoginWindowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 18px;
`

export const LoginWindowFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const TooglePasswordButton = styled.button`
  border: none;
  font-size: 14px;
  height: 20px;
  width: 40px;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  box-shadow: none;
  font-weight: bold;
`
export const FloatingLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-30%);
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey};
  transition: ${transition.default}-in-out;

  &.active {
    top: -4px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textColor};
    text-transform: uppercase;
  }
`

export const LoginButton = styled(Button)`
  width: 180px;
  max-width: 100%;
  padding: 8px;
  margin: 50px auto;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.background};
`

export const LoginTitle = styled(TextH3)`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.textColor};
`

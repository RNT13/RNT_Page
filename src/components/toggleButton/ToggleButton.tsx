import { styled } from 'styled-components'

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  border: none;
  padding: 12px;
  border-radius: 0px 0px 10px 0px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  left: ${props => (props.$isOpen ? '250px' : '80px')};
  top: 10px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
`

import { styled } from 'styled-components'
import { media } from '../../styles/media'

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
  padding: 12px;
  border-radius: 0px 0px 10px 0px;
  width: 25px;
  height: 25px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${props => (props.$isOpen ? '250px' : '80px')};
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.textColor};
  transition: all 0.2s linear;

  ${(media.sm, media.md)} {
    display: none;
  }
`

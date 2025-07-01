import { styled } from 'styled-components'
import { media, transition } from '../../styles/theme'

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: ${({ $isOpen }) => ($isOpen ? '260px' : '90px')};
  transform: translateX(-140%);
  width: 30px;
  height: 30px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.textColor};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transition.default};

  ${(media.sm, media.md)} {
    display: none;
  }
`

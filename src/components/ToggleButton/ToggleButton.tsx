import { styled } from 'styled-components'
import { media } from '../../styles/media'

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
  transition: all 0.2s ease;

  ${(media.sm, media.md)} {
    display: none;
  }
`

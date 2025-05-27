import { styled } from 'styled-components'
import { media } from '../../styles/media'

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: ${({ $isOpen }) => ($isOpen ? '260px' : '90px')};
  transform: translateX(-50%);
  z-index: 1000;

  width: 30px;
  height: 30px;
  padding: 8px;
  border-radius: 0 6px 6px 0;
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

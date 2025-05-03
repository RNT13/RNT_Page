import styled from 'styled-components'
import { media } from '../../styles/media'

export const AsideContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  height: 100vh;
  width: ${props => (props.$isOpen ? '250px' : '80px')};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  transition: all 0.2s linear;
  z-index: 1;

  ${(media.sm, media.md)} {
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    transition: none;
  }
`
export const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  margin-top: 20px;

  ${media.md} {
    margin-top: 0;
    flex-direction: row;
    justify-content: center;
  }
`

export const AsideAppsDiv = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  ${media.md} {
    flex-direction: row;
  }
`

export const AsideSocialLinks = styled.div`
  margin-bottom: 50px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  ${media.md} {
    display: none;
  }
`

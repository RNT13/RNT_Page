import styled from 'styled-components'
import { media } from '../../styles/media'

export const AsideWrapper = styled.aside`
  grid-area: aside;
  transition: all 0.3s ease;
`

export const AsideContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  width: ${props => (props.$isOpen ? '250px' : '80px')};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  transition: width 0.3s ease;
  height: 100%;

  ${(media.sm, media.md)} {
    position: relative;
    padding: 10px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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

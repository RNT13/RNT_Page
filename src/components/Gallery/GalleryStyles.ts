import { styled } from 'styled-components'
import { media } from '../../styles/theme'

export const GalleryItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`

export const Item = styled.div`
  position: relative;

  img {
    border: 2px solid ${({ theme }) => theme.colors.textColor};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;

    ${media.sm} {
      width: 130px;
      height: 130px;
    }
  }
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  border-radius: 8px;

  svg {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 50px;
    cursor: pointer;
  }

  &:hover {
    opacity: 1;
    transition: opacity 0.5s ease;
    border-radius: 8px;
  }

  ${media.sm} {
    width: 130px;
    height: 130px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 10;

  &.active {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.overlay};
  }

  ${media.sm} {
  }
`

export const ModalContent = styled.div`
  max-width: clamp(300px, 80vw, 960px);
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 11;

  header {
    color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    img,
    iframe {
      display: block;
      max-width: 100%;
      width: 100%;
    }

    svg {
      cursor: pointer;
      font-size: 30px;
    }
  }

  iframe {
    width: 100%;
    height: 500px;
    border: none;
  }
`

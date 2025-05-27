import styled from 'styled-components'
import { media } from '../../styles/media'
import Button from '../Button/Button'
import { TagContainer } from '../Tag/TagStyle'

export const HeroContainer = styled.div`
  position: relative;
  display: block;
  height: clamp(400px, 80vh, 650px);
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.shadow};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
  }

  ${media.md} {
    height: 325px;
    aspect-ratio: 4 / 3;
  }

  ${media.sm} {
    height: 175px;
    aspect-ratio: 4 / 3;
  }
`

export const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
`

export const HeroHeader = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
`

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 100%;
  color: ${({ theme }) => theme.colors.textColor};

  ${TagContainer} {
    margin-top: 24px;
    margin-right: 12px;
  }

  ${media.md} {
    width: 70%;
  }

  ${media.sm} {
    width: 70%;
  }
`

export const HeroButton = styled(Button)`
  font-weight: bold;
  background-color: transparent;
  margin-top: 12px;
  font-size: clamp(0.5rem, 1.7vw, 2rem);
  padding: clamp(2px 4px, 3px 6px, 4px 8px);
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.textColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.shadow};
  }
`

export const HeroTextFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`

export const HeroInfo = styled.div`
  font-weight: bold;
  font-size: clamp(0.5rem, 2vw, 2.5rem);
  color: ${({ theme }) => theme.colors.textColor};

  h2 {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  span {
    display: block;
    text-decoration: line-through;
  }
`

export const Price = styled.h3`
  margin-top: 12px;
  font-size: clamp(0.5rem, 2vw, 2.5rem);
`

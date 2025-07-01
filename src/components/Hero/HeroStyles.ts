import styled from 'styled-components'
import { media } from '../../styles/theme'
import Button from '../Button/Button'
import { TagContainer } from '../Tag/TagStyle'

export const HeroContainer = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${media.md} {
  }

  ${media.sm} {
  }
`

export const HeroContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
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
  }

  ${media.sm} {
  }
`

export const HeroButton = styled(Button)`
  font-weight: bold;
  background-color: transparent;
  margin-top: 12px;
  font-size: 0.8rem;
  padding: 8px 12px;
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
  color: ${({ theme }) => theme.colors.textColor};

  h2 {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  span {
    font-size: 1rem;
    display: block;
    text-decoration: line-through;
  }
`

export const Price = styled.h3`
  margin-top: 12px;
  font-size: 1rem;
`

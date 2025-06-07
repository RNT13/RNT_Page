import styled from 'styled-components'
import { media } from '../../styles/media'
import Button from '../Button/Button'
import { TagContainer } from '../Tag/TagStyle'

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  display: block;
  height: clamp(400px, 80vh, 650px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${media.md} {
    height: 325px;
    aspect-ratio: 4 / 3;
  }

  ${media.sm} {
    height: 175px;
    aspect-ratio: 4 / 3;
  }
`
export const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 70%;
  height: 70%;
  color: ${({ theme }) => theme.colors.textColor};
  z-index: 2;

  ${media.md} {
    ${TagContainer} {
      padding: 3px 6px;
      font-size: 0.7rem;
    }
  }
`
export const ImageButton = styled(Button)`
  font-weight: bold;
  background-color: transparent;
  font-size: clamp(0.5rem, 2vw, 2.5rem);
  padding: clamp(2px, 4px, 8px);
  border: 2px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.grey};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.shadow};
  }
`

export const ImageTextFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: clamp(0.5rem, 2vw, 2.5rem);
  color: ${({ theme }) => theme.colors.grey};
`

export const Price = styled.h2`
  margin-top: 12px;
  font-size: clamp(0.5rem, 2vw, 2.5rem);

  span {
    text-decoration: line-through;
  }
`

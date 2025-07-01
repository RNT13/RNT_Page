import styled from 'styled-components'
import { media } from '../../styles/theme'
import Button from '../Button/Button'

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  display: block;
  height: 480px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${media.md} {
  }

  ${media.sm} {
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

  ${media.sm} {
    width: 90%;
  }
`
export const ImageButton = styled(Button)`
  font-weight: bold;
  background-color: transparent;
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
  color: ${({ theme }) => theme.colors.grey};

  p {
    font-size: 2rem;
  }
`

export const Price = styled.h2`
  margin-top: 12px;

  span {
    text-decoration: line-through;
  }
`

import styled from 'styled-components'
import { Tag } from '../../styles/globalStyles'

export const Image = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
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
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textColor};
`

export const Price = styled.h2`
  margin-top: 24px;
  font-size: 1rem;

  span {
    text-decoration: line-through;
  }
`

export const BannerTag = styled(Tag)`
  font-size: 1rem;
`

import styled from 'styled-components'
import { Button, Tag } from '../../styles/globalStyles'

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

  ${Tag} {
    font-size: 1rem;
  }
`
export const ImageButton = styled(Button)`
  font-weight: bold;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.textColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.primaryColor};
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
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textColor};
`

export const Price = styled.h2`
  margin-top: 12px;
  font-size: 1rem;

  span {
    text-decoration: line-through;
  }
`

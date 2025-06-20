import styled from 'styled-components'
import Button from '../Button/Button'
import { TagContainer } from '../Tag/TagStyle'

export const GameCardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 480px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  overflow: hidden;

  ${TagContainer} {
    margin: 0px 4px 0px 4px;
  }

  &:hover .GameCardFooter {
    height: 100px;
    opacity: 1;
    visibility: visible;
    transform: translateY(10px);
    background-color: ${({ theme }) => theme.colors.secondaryColor};

    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.blue2};
  }
`

export const GameCardHeader = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const GameCardImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  margin: 0px auto;
  display: block;
  border-radius: 8px;
`

export const GameCardTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};

  margin: 4px 0px 4px 0px;
  font-size: 1.1rem;
  font-weight: bold;
`

export const GameCardDescription = styled.p`
  margin: 16px 0px 0px 0px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
`

export const GameCardBody = styled.div``

export const GameCardFooter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  left: 0;
  opacity: 0;
  transform: translateY(100%);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`

export const GameCardButton = styled(Button)`
  width: 100%;
  padding: 10px;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`

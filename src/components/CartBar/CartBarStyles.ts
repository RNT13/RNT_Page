import { styled } from 'styled-components'
import { ButtonContainer } from '../Button/ButtonStyles'
import { TagContainer } from '../Tag/TagStyle'

export const CartBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: end;
  z-index: 10;

  &.isOpen {
    display: flex;
  }
`

export const CartBarContent = styled.aside`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 40px 16px 0px 16px;
  max-width: 360px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 11;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 24px 0;

  span {
    display: block;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const Quantity = styled.p`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  margin: 34px 0 16px 0;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};

  img {
    margin-right: 24px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 16px;
    font-weight: 700;
  }

  h4 {
    display: block;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textColor};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  svg {
    position: absolute;
    top: 8px;
    right: 0px;
    font-size: 24px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textColor};
    width: 24px;
    height: 24px;
    margin-left: auto;
  }
`

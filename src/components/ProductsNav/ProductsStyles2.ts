import { styled } from 'styled-components'
import { media, minWidth, transition } from '../../styles/theme'

export const ProductsNavContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 12px;
  margin: 24px 16px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  z-index: 5;
  transition: all 0.05s;

  &.isSticky {
    margin: 0px;
    border-radius: 0px;
  }

  ${media.md} {
    margin: 12px;
    padding: 12px;
  }
`

export const ProductsNavContent = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;

  ${media.md} {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`

export const CartDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.textColor};
  }

  ${media.md} {
    display: flex;
    justify-content: flex-end;

    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  cursor: pointer;
  width: 30px;
  transition: ${transition.default};

  span {
    height: 2px;
    width: 20px;
    background-color: ${({ theme }) => theme.colors.textColor};
    display: block;
    margin-bottom: 3px;
  }

  ${minWidth.md} {
    display: none;
  }
`

export const ProductsNavRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${media.md} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
  }
`

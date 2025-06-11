import { styled } from 'styled-components'
import { media } from '../../styles/media'

export const ProductsNavContainer = styled.div`
  position: sticky;
  top: 0;
  max-width: 100%;
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
  max-width: 100%;
  display: flex;
  justify-content: space-between;

  ${media.md} {
    display: block;
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  width: 70%;
  gap: 8px;
  justify-content: flex-start;

  ${media.md} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`

export const CartDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  gap: 8px;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.textColor};
  }

  ${media.md} {
    margin-top: 12px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

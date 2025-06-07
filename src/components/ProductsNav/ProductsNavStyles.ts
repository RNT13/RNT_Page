import { styled } from 'styled-components'

export const ProductsNavContainer = styled.div`
  max-width: 100%;
  padding: 24px;
  margin: 36px 16px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
`

export const ProductsNavContent = styled.nav`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 12px;
  }
`

export const CartDiv = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

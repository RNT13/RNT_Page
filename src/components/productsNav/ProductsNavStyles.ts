import { styled } from 'styled-components'
import { Button } from '../../styles/globalStyles'

export const ProductsNavContainer = styled.div`
  padding: 24px 0;
  margin: 36px 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
`

export const ProductsNavContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
`

export const ProductsNavButton = styled(Button)``

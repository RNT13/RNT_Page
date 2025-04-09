import styled from 'styled-components'

export const ProductsContainer = styled.div`
  height: 100vh;
  scroll-padding-top: 70px;
  overflow-y: scroll;
`

export const ProductsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  padding: 16px 16px 100px 16px;
  justify-items: center;
  align-items: center;
`

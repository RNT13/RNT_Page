import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'
import { media } from '../../styles/media'

export const ProductsContainer = styled(GlobalMainContent)`
  margin-left: 80px;
  height: calc(100vh - 70px);

  ${(media.sm, media.md)} {
    margin-left: 0px;
  }
`

export const ProductsCardContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 50px;

  ${(media.sm, media.md)} {
  }
`

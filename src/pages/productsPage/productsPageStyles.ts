import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'
import { media } from '../../styles/media'

export const ProductsContainer = styled(GlobalMainContent)`
  margin-left: 80px;

  ${(media.sm, media.md)} {
    margin-left: 0px;
  }
`

export const ProductsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 0px 100px 100px 100px;

  ${(media.sm, media.md)} {
    margin-bottom: 50px;
  }
`

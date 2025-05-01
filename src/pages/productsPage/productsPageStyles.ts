import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'
import { media } from '../../styles/media'

export const ProductsContainer = styled(GlobalMainContent)`
  height: calc(100vh - 70px);
  margin-left: 80px;

  ${(media.sm, media.md)} {
    margin-left: 0px;
  }
`

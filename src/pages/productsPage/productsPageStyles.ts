import styled from 'styled-components'
import { media } from '../../styles/media'

export const ProductsContainer = styled.div`
  margin-left: 80px;

  ${(media.sm, media.md)} {
    margin-left: 0px;
  }
`

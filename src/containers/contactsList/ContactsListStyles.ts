import styled from 'styled-components'
import { media } from '../../styles/theme'

export const MainContactContainer = styled.main`
  padding-bottom: 80px;

  ${(media.sm, media.md)} {
    margin: 0px 10px;
    font-size: 0.5em;
  }
`

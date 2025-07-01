import { styled } from 'styled-components'
import { media } from '../../styles/theme'

export const DetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(media.sm, media.md)} {
    margin-left: 0px;
  }
`

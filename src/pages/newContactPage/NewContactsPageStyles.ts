import styled from 'styled-components'
import { media } from '../../styles/theme'

export const NewContactsContainer = styled.div`
  display: flex;

  ${(media.sm, media.md)} {
    display: block;
  }

  aside {
    padding-top: 36px;

    ${(media.sm, media.md)} {
      padding-top: 0px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const NewContactsMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 12px;
`

export const NewContactsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

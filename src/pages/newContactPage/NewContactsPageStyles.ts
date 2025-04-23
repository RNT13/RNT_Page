import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'
import { media } from '../../styles/media'

export const NewContactsContainer = styled(GlobalMainContent)`
  flex-direction: row;

  aside {
    height: calc(100vh - 70px);
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

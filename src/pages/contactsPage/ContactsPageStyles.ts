import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'
import { media } from '../../styles/media'

export const ContactsContainer = styled(GlobalMainContent)`
  flex-direction: row;

  ${(media.sm, media.md)} {
    display: flex;
    flex-direction: column;
  }
`

export const ContactsMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ContactsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

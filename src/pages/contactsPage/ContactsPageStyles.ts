import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'

export const ContactsContainer = styled(GlobalMainContent)`
  flex-direction: row;
  overflow: hidden;
`

export const ContactsSidebar = styled.div`
  width: 200px;
  height: 100%;
`

export const ContactsMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 8px;
  }
`

export const ContactsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

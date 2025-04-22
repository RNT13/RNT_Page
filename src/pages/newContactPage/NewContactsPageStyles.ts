import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'

export const NewContactsContainer = styled(GlobalMainContent)`
  flex-direction: row;

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
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

import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'

export const NewContactsContainer = styled(GlobalMainContent)`
  flex-direction: row;
  overflow: hidden;
`

export const NewContactsSideBar = styled.div`
  width: 200px;
  height: 100vh;

  button {
    margin-top: 18px;
  }
`

export const NewContactsMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 8px;
  }
`

export const NewContactsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

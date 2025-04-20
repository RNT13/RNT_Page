import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'

export const NewTaskContainer = styled(GlobalMainContent)`
  flex-direction: row;
  overflow: hidden;
`

export const NewTaskSidebar = styled.div`
  width: 200px;
  height: 100vh;

  button {
    margin-top: 18px;
  }
`

export const NewTaskMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 8px;
  }
`

export const NewTaskContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

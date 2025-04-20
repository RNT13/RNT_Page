import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'

export const TaskContainer = styled(GlobalMainContent)`
  flex-direction: row;
  overflow: hidden;
`

export const TaskSideBar = styled.div`
  width: 200px;
  height: 100%;
`

export const TaskMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 8px;
  }
`

export const TaskContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

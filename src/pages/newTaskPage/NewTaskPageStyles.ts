import styled from 'styled-components'
import { GlobalMainContent } from '../../styles/globalStyles'

export const NewTaskContainer = styled(GlobalMainContent)`
  flex-direction: row;

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
`

export const NewTaskMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 12px;
`

export const NewTaskContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

import styled from 'styled-components'

export const TaskContainer = styled.div`
  display: flex;
  height: 100vh;
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

import styled from 'styled-components'

export const NewTaskContainer = styled.div`
  display: flex;
`

export const NewTaskSidebar = styled.div`
  width: 200px;
  height: 100%;

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

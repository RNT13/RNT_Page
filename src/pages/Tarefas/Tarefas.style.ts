import styled from 'styled-components'

export const TarefasContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const TarefasSidebar = styled.div`
  width: 200px;
  height: 100%;
`

export const TarefasMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 8px;
  }
`

export const TarefasContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

import styled from 'styled-components'

export const NewContactsContainer = styled.div`
  display: flex;
`

export const NewContactsSideBar = styled.div`
  width: 200px;
  height: 100%;

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

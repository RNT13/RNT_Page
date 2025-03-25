import styled from 'styled-components'

export const ContactsContainer = styled.div`
  display: flex;
  height: 100vh;
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

import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
`
export const filters = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  align-items: center;
  margin-top: 16px;
`

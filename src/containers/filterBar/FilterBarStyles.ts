import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
`
export const filters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  width: fit-content;
`

import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${theme.colors.cinza};
  height: 100vh;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

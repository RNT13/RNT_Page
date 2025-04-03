import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const FilterCard = styled.div<{ $ativo: boolean }>`
  padding: 8px;
  border-radius: 8px;
  border: 2px solid ${props => (props.$ativo ? theme.colors.azul : theme.colors.cinza2)};
  background-color: ${props => (props.$ativo ? theme.colors.branco : theme.colors.branco)};
  color: ${props => (props.$ativo ? theme.colors.azul : theme.colors.cinza)};
  background-color: ${props => (props.$ativo ? 'activeColor' : 'inactiveColor')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 0.8rem;
    color: ${theme.colors.preto};
  }
`

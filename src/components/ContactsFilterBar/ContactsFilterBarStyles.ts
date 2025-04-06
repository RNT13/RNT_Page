import { styled } from 'styled-components'

export const FilterCard = styled.div<{ $ativo: boolean }>`
  padding: 8px;
  border-radius: 8px;
  border: 2px solid ${({ theme, $ativo }) => ($ativo ? theme.colors.blue2 : theme.colors.primaryColor)};
  background-color: ${({ theme, $ativo }) => ($ativo ? theme.colors.secondaryColor : theme.colors.grey2)};
  color: ${({ theme, $ativo }) => ($ativo ? theme.colors.textColor : theme.colors.grey2)};
  background-color: ${props => (props.$ativo ? 'activeColor' : 'inactiveColor')};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textColor};
  }
`

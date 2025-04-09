import { styled } from 'styled-components'

export const FilterCard = styled.div<{ $ativo: boolean }>`
  width: 85px;
  height: 60px;
  padding: 4px;
  border-radius: 8px;
  border: 2px solid ${({ theme, $ativo }) => ($ativo ? theme.colors.blue2 : theme.colors.primaryColor)};
  background-color: ${({ theme, $ativo }) => ($ativo ? theme.colors.secondaryColor : theme.colors.grey2)};
  color: ${({ theme, $ativo }) => ($ativo ? theme.colors.textColor : theme.colors.grey2)};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  white-space: normal;
  word-break: break-word;

  label {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textColor};
    text-align: center;
    white-space: normal;
    word-break: break-word;
  }
`

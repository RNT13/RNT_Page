import { styled } from 'styled-components'
import { Button } from '../../styles/globalStyles'
import { theme } from '../../styles/theme'

export const ContactTitle = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  border: none;
  background: transparent;
  color: ${theme.colors.preto};
  width: 100%;
`

export const Description = styled.textarea`
  color: ${theme.colors.cinza};
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid ${theme.colors.preto};
  padding-top: 16px;
  display: flex;
  justify-content: flex-start;
`

export const InfoContainer = styled.div`
  display: flex;
  margin: 16px 16px;
  justify-content: start;

  label {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: ${theme.colors.preto};
  }
`

export const RemoveContactButton = styled(Button)`
  background-color: ${theme.colors.vermelho};
`

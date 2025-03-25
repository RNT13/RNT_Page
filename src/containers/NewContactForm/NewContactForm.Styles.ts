import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Form = styled.form`
  max-width: 550px;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  color: ${theme.colors.preto};

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin: 8px;
  }

  label {
    margin-right: 8px;
  }
`

export const Opcoe = styled.div`
  display: inline;
  text-transform: capitalize;
`

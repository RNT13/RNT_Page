import styled from 'styled-components'

export const NewContactFormContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  max-width: 550px;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textColor};

  textarea {
    resize: none;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 8px;
  }

  label {
    margin: 0px 8px;
  }
`

export const Opcoe = styled.div`
  display: inline;
  text-transform: capitalize;
`

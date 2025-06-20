import { styled } from 'styled-components'

export const CheckOutPageContainer = styled.div`
  height: 100vh;
`

export const CheckOutPageContent = styled.div``

export const Row = styled.div`
  display: flex;
  gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto;
  label {
    font-size: 14px;
    margin: 0px 0px 8px 0px;
    display: block;
  }

  input {
    background-color: ${({ theme }) => theme.colors.textColor};
    height: 32px;
    padding: 0px 8px;
    border: 1px solid ${({ theme }) => theme.colors.textColor};
    width: 100%;
  }
`

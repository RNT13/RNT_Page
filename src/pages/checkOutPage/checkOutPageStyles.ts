import { styled } from 'styled-components'
import Button from '../../components/Button/Button'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type PaymentButtonProps = {
  isActive: boolean
}

export const CheckOutPageContainer = styled.form``

export const CheckOutPageContent = styled.div``

export const Row = styled.div<RowProps>`
  display: flex;
  gap: 24px;
  margin-top: ${props => props.marginTop || '0'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${props => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin: 0px 0px 8px 0px;
    display: block;
  }

  input,
  select {
    background-color: ${({ theme }) => theme.colors.textColor};
    height: 32px;
    padding: 0px 8px;
    border: 1px solid ${({ theme }) => theme.colors.textColor};
    width: 100%;
  }
`

export const FinishPurchase = styled.div`
  display: flex;

  margin-bottom: 24px;
`

export const PaymentButtonDiv = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 12px;
  }
`

export const PaymentButton = styled(Button)<PaymentButtonProps>`
  margin-bottom: 24px;
  background-color: ${props => (props.isActive ? props.theme.colors.green : props.theme.colors.secondaryColor)};
  color: ${props => (props.isActive ? props.theme.colors.textColor : props.theme.colors.textColor)};

  svg {
    margin-right: 6px;
  }
`

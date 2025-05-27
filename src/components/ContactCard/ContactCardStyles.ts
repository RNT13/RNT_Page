import { styled } from 'styled-components'
import Button from '../Button/Button'

export const ContactCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 0.8rem;
  }
`

export const ContactCardTitle = styled.input`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;
`

export const ContactCardDescription = styled.textarea`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textColor};
    opacity: 0.8;
    font-weight: bold;
  }
`

export const ContactCardActionBar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.textColor};
  padding-top: 16px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`

export const ContactCardContainer = styled.div`
  display: flex;
  margin: 16px 16px;
  justify-content: start;

  label {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textColor};
  }
`
export const SaveButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green};
`
export const RemoveContactButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
`
export const EditButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`
export const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`

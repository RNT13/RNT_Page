import { styled } from 'styled-components'
import { Button } from '../../styles/globalStyles'

export const TaskCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 0.8rem;
  }
`

export const TaskCardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.textColor};
`

export const TaskCardDescription = styled.textarea`
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

export const TaskCardActionBar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  padding-top: 16px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`

export const TaskCardContainer = styled.div`
  margin: 16px 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textColor};
  }

  input {
    font-size: 18px;
    font-weight: bold;
    margin-left: 8px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.textColor};
  }
`
export const RemoveTaskButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
`
export const EditButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`
export const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`

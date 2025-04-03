import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const TaskTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  color: ${theme.colors.preto};
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
  margin: 16px 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 0.8rem;
    color: ${theme.colors.preto};
  }

  input {
    font-size: 18px;
    font-weight: bold;
    margin-left: 8px;
    border: none;
    background: transparent;
    color: ${theme.colors.preto};
  }
`

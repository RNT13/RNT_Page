import { styled } from 'styled-components'

export const CardContainer = styled.div`
  border-radius: 8px;
  padding: 24px;
  margin: 0px 0px 40px 0px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 8px 8px 5px ${({ theme }) => theme.colors.shadow};
  color: ${({ theme }) => theme.colors.textColor};
  border: 3px solid ${({ theme }) => theme.colors.secondaryColor};

  h2,
  h3 {
    font-weight: bold;
    font-size: bold;
    color: ${({ theme }) => theme.colors.textColor};
    margin: 0px 0px 12px 0px;
  }

  .margin-top {
    margin-top: 12px;
  }

  p {
    line-height: 22px;
    font-size: 14px;
  }
`

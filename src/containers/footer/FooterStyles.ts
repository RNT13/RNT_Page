import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`

export const FooterText = styled.h4``

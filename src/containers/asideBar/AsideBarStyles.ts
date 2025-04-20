import styled from 'styled-components'

export const AsideContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  height: 100vh;
  width: ${props => (props.$isOpen ? '250px' : '80px')};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  transition: all 0.2s linear;
`
export const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85vh;
  padding: 16px;
`

export const AsideAppsDiv = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

export const AsideSocialLinks = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`

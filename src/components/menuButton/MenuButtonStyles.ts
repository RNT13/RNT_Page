import styled from 'styled-components'

export const MenuButtonContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  position: relative;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.2s ease;
  }
`

export const MenuLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  backdrop-filter: blur(5px);
  z-index: 10;
`

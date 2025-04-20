import { styled } from 'styled-components'
import { Button, TextH3 } from '../../styles/globalStyles'

export const MenuWindowContainer = styled.div`
  position: absolute;
  top: 30px;
  left: -300px;
  width: 300px;
  height: 400px;
  background: ${({ theme }) => theme.colors.secondaryColor};
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  padding: 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  z-index: 11;
`

export const MenuButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.textColor};
    transition: all 0.2s ease;
  }
`

export const MenuCountentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 0 18px;
`

export const MenuFooterContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`

export const MenuFooterButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.textColor};
    transition: all 0.2s ease;
  }
`

export const MenuTitle = styled(TextH3)`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.textColor};
`

import { styled } from 'styled-components'
import { TextH3 } from '../../styles/globalStyles'
import Button from '../Button/Button'

export const MenuWindowContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: end;
  z-index: 1;

  &.isOpen {
    display: flex;
  }
`

export const MenuWindowContent = styled.div`
  position: fixed;
  top: 70px;
  right: 80px;
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
  z-index: 1;
`

export const MenuButtons = styled(Button)`
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
  padding: 8px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.background};
`

export const MenuTitle = styled(TextH3)`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.textColor};
`

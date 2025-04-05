import { styled } from 'styled-components'
import { Button, TextH3 } from '../../styles/globalStyles'
import { theme } from '../../styles/theme'

export const MenuWindowContainer = styled.div`
  position: absolute;
  top: 30px;
  left: -300px;
  width: 300px;
  height: 400px;
  background: ${theme.colors.primaryColor};
  border: 1px solid ${theme.colors.azul2};
  padding: 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  box-shadow: 5px 5px 5px ${theme.colors.preto};
  z-index: 11;
`

export const MenuButton = styled(Button)`
  width: 100%;
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.branco};
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    background-color: ${theme.colors.azul2};
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`

export const MenuFooterButton = styled(Button)`
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.branco};
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    background-color: ${theme.colors.azul2};
  }
`

export const MenuTitle = styled(TextH3)`
  font-size: 2em;
`

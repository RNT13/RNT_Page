import styled from 'styled-components';
import { theme } from '../styles/theme';

export const LinkButtonToggle = styled.button<{ $isOpen: boolean; $isActive: boolean }>`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 5px 10px;
  margin: 0px 8px 8px 0px;
  color: ${props => (props.$isActive ? theme.colors.primaryColor : theme.colors.branco)};
  background-color: ${props => (props.$isActive ? theme.colors.azul2 : theme.colors.secondaryColor)};
  box-shadow: 5px 5px 5px ${theme.colors.preto};
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  justify-content: ${props => (props.$isOpen ? 'flex-start' : 'center')};
  width: ${props => (props.$isOpen ? '220px' : '100%')};
  text-decoration: none;
  transition: all 0.2s linear;

  span {
    display: ${props => (props.$isOpen ? 'inline' : 'none')};
    margin-left: ${props => (props.$isOpen ? '10px' : '0px')};
    flex-grow: 1;
    text-align: center;
    opacity: ${props => (props.$isOpen ? 1 : 0)};
    transition: all 0.2s linear;
  }

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background-color: ${theme.colors.azul2};
  }
`
export const LinkButton = styled.button<{ $isActive: boolean }>`
  padding: 5px 10px;
  margin: 0px 8px 8px 0px;
  max-width: 150px;
  color: ${props => (props.$isActive ? theme.colors.primaryColor : theme.colors.branco)};
  background-color: ${props => (props.$isActive ? theme.colors.azul2 : theme.colors.secondaryColor)};
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  box-shadow: 5px 5px 5px ${theme.colors.preto};
  transition: all 0.2s linear;

  &:hover {
    background-color: ${theme.colors.azul2};
  }
`

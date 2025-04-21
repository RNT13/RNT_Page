/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Button } from '../../styles/globalStyles';

export const LinkButtonToggle = styled(Button)<{ $isOpen: boolean; $isActive: boolean }>`
  text-align: left;
  padding: 0px 10px;
  text-transform: uppercase;
  justify-content: ${props => (props.$isOpen ? 'flex-start' : 'center')};
  width: ${props => (props.$isOpen ? '220px' : '100%')};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.textColor)};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grey : theme.colors.background)};
  box-shadow: 5px 5px 5px ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.shadow)};

  span {
    display: ${props => (props.$isOpen ? 'inline' : 'none')};
    flex-grow: 1;
    text-align: center;
    opacity: ${props => (props.$isOpen ? 1 : 0)};
    transition: all 0.2s linear;
  }

  img {
    width: 32px;
    height: 32px;
  }
`
export const LinkButton = styled(Button)<{ $isActive: boolean }>`
  text-transform: uppercase;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.textColor)};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grey : theme.colors.background)};
  box-shadow: 5px 5px 5px ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.shadow)};
  transition: all 0.2s linear;
`

export const LinkButtonIcon = styled.div`
  font-size: 28px;
  margin-top: 5px;
`

// eslint-disable-next-line prettier/prettier
import styled from 'styled-components';

export const LinkButtonToggle = styled.button<{ $isOpen: boolean; $isActive: boolean }>`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0px 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  justify-content: ${props => (props.$isOpen ? 'flex-start' : 'center')};
  width: ${props => (props.$isOpen ? '220px' : '100%')};
  text-decoration: none;
  transition: all 0.2s linear;
  text-transform: uppercase;
  font-weight: bold;
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.2s ease;
  }
`
export const LinkButton = styled.button<{ $isActive: boolean }>`
  padding: 5px 10px;
  max-width: 150px;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.textColor)};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grey : theme.colors.background)};
  box-shadow: 5px 5px 5px ${({ theme, $isActive }) => ($isActive ? theme.colors.blue2 : theme.colors.shadow)};
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: all 0.2s linear;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.2s ease;
  }
`

export const LinkButtonIcon = styled.div`
  font-size: 28px;
  margin-top: 5px;
`

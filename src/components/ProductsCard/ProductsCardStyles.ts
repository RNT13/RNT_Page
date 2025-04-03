import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const CardContainer = styled.div`
  width: 250px;
  height: 300px;
  background: ${theme.colors.primaryColor};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 8px 8px 5px ${theme.colors.preto};
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover .card-footer {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

export const CardBody = styled.div`
  flex: 1;
  padding: 10px;
  color: ${theme.colors.branco};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${theme.colors.preto};
  padding: 10px;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`

export const Button = styled.button`
  background: linear-gradient(50deg, ${theme.colors.azul} 0%, ${theme.colors.azul2} 100%);
  font-weight: bold;
  font-size: 16px;
  border: none;
  padding: 10px;
  color: ${theme.colors.branco};
  cursor: pointer;
  width: 100%;
  border-radius: 5px;

  &:hover {
    filter: brightness(1.5);
  }
`

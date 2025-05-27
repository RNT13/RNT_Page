import styled from 'styled-components'
import Button from '../Button/Button'

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 500px;
  padding: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  overflow: hidden;

  &:hover .card-footer {
    height: 100px;
    opacity: 1;
    visibility: visible;
    transform: translateY(10px);
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }
`

export const CardHeader = styled.div``

export const ProductImage = styled.img`
  width: 280px;
  height: 260px;
  object-fit: cover;
  margin: 0px auto;
  display: block;
  border-radius: 8px;
`

export const CardBody = styled.div`
  margin: 10px 0px 0px 0px;
  color: ${({ theme }) => theme.colors.textColor};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const CardFooter = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  opacity: 0;
  transform: translateY(100%);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`

export const CardButton = styled(Button)`
  width: 100%;
  padding: 10px;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`

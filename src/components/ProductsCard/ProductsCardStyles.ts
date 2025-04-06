import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 250px;
  height: 300px;
  background: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 12px;
  overflow: hidden;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};

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
  color: ${({ theme }) => theme.colors.textColor};
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
  background: ${({ theme }) => theme.colors.background};
  padding: 10px;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`

export const CardButton = styled.button`
  background: linear-gradient(50deg, ${({ theme }) => theme.colors.neon.blue1} 0%, ${({ theme }) => theme.colors.neon.blue2} 100%);
  color: ${({ theme }) => theme.colors.textColor};
  padding: 1rem;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 16px;
  border: none;
  padding: 10px;
  color: ${({ theme }) => theme.colors.shadow};
  cursor: pointer;
  width: 100%;
  border-radius: 5px;

  &:hover {
    filter: brightness(1.5);
  }
`

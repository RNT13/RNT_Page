import { styled } from 'styled-components'
import { media } from '../../styles/theme'
import { MenuLogo } from '../MenuButton/MenuButtonStyles'

export const ProductsNavContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 12px;
  margin: 24px 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};
  z-index: 5;
  transition: all 0.05s;

  &.isSticky {
    margin: 0px;
    border-radius: 0px;
  }

  ${media.md} {
    margin: 12px;
    padding: 12px;
  }
`

export const ProductsNavContent = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.md} {
  }
`

export const ProductsNavRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${media.md} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
  }
`

export const Hamburguer = styled.div`
  display: none;
  cursor: pointer;
  width: 30px;

  ${MenuLogo} {
    color: ${({ theme }) => theme.colors.textColor};
  }

  ${(media.sm, media.md)} {
    display: flex;
  }
`

export const ButtonDiv = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  justify-content: start;
  align-items: center;

  ${(media.sm, media.md)} {
    display: none;
  }
`

export const ButtonDivRow = styled.div`
  ${(media.sm, media.md)} {
    display: flex;
  }
`

export const HamburgerButton = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CartDiv = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.textColor};
  }

  ${media.md} {
    display: flex;

    span {
      display: none;
    }
  }
`

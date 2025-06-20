import { styled } from 'styled-components'
import { media } from '../../styles/media'
import { GameCardContainer } from '../GameCard/GameCardStyles'

export type listProps = {
  $background: 'grey' | 'black'
}

export const ProductsListContainer = styled.div<Omit<listProps, 'title' | 'games'>>`
  background-color: ${props => (props.$background === 'grey' ? props.theme.colors.secondaryColor : props.theme.colors.background)};
  padding: 50px 0;

  ${media.md} {
    padding: 20px 20px;
    border: 1px solid ${props => props.theme.colors.border};
  }

  ${media.sm} {
    padding: 20px 10px;
  }
`

export const ProductsListContent = styled.ul<Omit<listProps, 'title'>>`
  display: grid;
  margin: 0px 30px;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 20px;

  ${GameCardContainer} {
    background-color: ${props => (props.$background === 'grey' ? props.theme.colors.background : props.theme.colors.secondaryColor)};
  }

  ${media.md} {
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }

  ${media.sm} {
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }
`

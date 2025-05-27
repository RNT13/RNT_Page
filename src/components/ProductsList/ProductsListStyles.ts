import { styled } from 'styled-components'
import { media } from '../../styles/media'
import { CardContainer } from '../Card/CarsStyles'

export type listProps = {
  $background: 'grey' | 'black'
}

export const ProductsListContainer = styled.div<Omit<listProps, 'title' | 'games'>>`
  background-color: ${props =>
    props.$background === 'grey' ? props.theme.colors.secondaryColor : props.theme.colors.background};
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
  margin: 0px 100px auto;
  place-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;

  ${CardContainer} {
    background-color: ${props =>
      props.$background === 'grey' ? props.theme.colors.background : props.theme.colors.secondaryColor};
  }

  ${(media.sm, media.md)} {
    margin: 0px auto;
    grid-template-columns: 1fr;
  }
`

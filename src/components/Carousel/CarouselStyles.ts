import { styled } from 'styled-components'

export const images = ['/images/banner 1.png', '/images/banner 2.png', '/images/banner 3.png']

export const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  .slick-slide img {
    width: 100%;
    border-radius: 10px;
    margin-top: 24px;
  }
`

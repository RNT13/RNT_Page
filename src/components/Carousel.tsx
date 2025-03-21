import Slider from 'react-slick'
import styled from 'styled-components'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const images = ['/images/banner 1.png', '/images/banner 2.png', '/images/banner 3.png']

const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  .slick-slide img {
    width: 100%;
    border-radius: 10px;
    margin-top: 24px;
  }
`
const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    utoplaySpeed: 2000
  }

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  )
}

export default Carousel

import { styled } from 'styled-components'

export const TestContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const TestContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 50px;
`

export const GradientButton = styled.button`
  position: relative;
  border: none;
  cursor: pointer;
  background-image: linear-gradient(to bottom right, #008cff, #e100ff);
  color: #fff;
  padding: 4px;
  border-radius: 1000px;

  h3 {
    position: relative;
    font-size: 1rem;
    padding: 10px 20px;
    border-radius: 1000px;
    background: #151a20;
    transition: background 0.3s ease;
  }

  h3:hover {
    background-color: transparent;
    box-shadow:
      40px 0 100px rgba(0, 140, 255, 0.5),
      -40px 0 100px rgba(225, 0, 255, 0.5);
  }
`

export const LineHoverButton = styled.button`
  position: relative;
  border: none;
  cursor: pointer;
  background: #151a20;
  color: #fff;
  padding: 10px;
  border-radius: 10px;

  h3 {
    position: relative;
    margin: 0;
    font-size: 1rem;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #008cff, #e100ff);
    transition: height 0.2s ease;
  }

  &:hover::after {
    height: 100%;
    border-radius: 10px;
    box-shadow:
      40px 0 100px rgba(0, 140, 255, 0.4),
      -40px 0 100px rgba(225, 0, 255, 0.4);
  }
`

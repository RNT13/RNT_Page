import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { media } from '../../styles/media'

export const Circle = styled(Link)`
  width: 64px;
  height: 64px;
  bottom: 30px;
  right: 30px;
  line-height: 64px;
  font-size: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};

  ${(media.sm, media.md)} {
    width: 46px;
    height: 46px;
    bottom: 65px;
    right: 10px;
  }
`

import { styled } from 'styled-components'
import { media } from '../../styles/media'

export const LoginContainer = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(media.sm, media.md)} {
  }
`

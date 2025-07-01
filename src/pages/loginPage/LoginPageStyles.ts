import { styled } from 'styled-components'
import { media } from '../../styles/theme'

export const LoginContainer = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(media.sm, media.md)} {
  }
`

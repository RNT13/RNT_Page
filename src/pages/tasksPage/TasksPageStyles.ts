import styled from 'styled-components'
import { media } from '../../styles/theme'

export const TaskContainer = styled.div`
  display: flex;
  height: 100vh;

  ${(media.sm, media.md)} {
    display: block;
  }
`

export const TaskMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const TaskContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

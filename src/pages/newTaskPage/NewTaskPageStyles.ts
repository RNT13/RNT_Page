import styled from 'styled-components'
import { media } from '../../styles/media'

export const NewTaskContainer = styled.div`
  display: flex;

  ${(media.sm, media.md)} {
    display: block;
  }

  aside {
    padding-top: 36px;

    ${(media.sm, media.md)} {
      padding-top: 0px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const NewTaskMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 12px;
`

export const NewTaskContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

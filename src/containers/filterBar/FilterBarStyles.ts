import styled from 'styled-components'
import { media } from '../../styles/media'

export const Aside = styled.aside`
  padding: 16px;
  margin-left: 80px;
  background-color: ${({ theme }) => theme.colors.background};

  ${(media.sm, media.md)} {
    padding: 16px;
    width: 100%;
    height: 130px;
    margin-left: 0;

    button {
      margin-top: 12px;
    }

    #search {
      margin: 0px 0px 12px 0px;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Filters = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  width: fit-content;

  ${(media.sm, media.md)} {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

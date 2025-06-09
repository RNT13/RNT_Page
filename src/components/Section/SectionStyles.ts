import { styled } from 'styled-components'

export type SectionProps = {
  $background: 'grey' | 'black'
}

export const SectionConteiner = styled.section<Omit<SectionProps, 'title' | 'games'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.$background === 'grey' ? props.theme.colors.secondaryColor : props.theme.colors.background)};
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-size: 14px;
    line-height: 24px;
    max-width: 640px;
    padding-bottom: 24px;
  }
`

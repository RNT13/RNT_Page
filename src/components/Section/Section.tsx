import { TitleH2 } from '../../styles/globalStyles'
import { SectionConteiner, SectionContent } from './SectionStyles'

type SectionProps = {
  title: string
  $background: 'grey' | 'black'
  children?: React.ReactNode
}

const Section = ({ title, $background, children }: SectionProps) => {
  return (
    <SectionConteiner $background={$background}>
      <SectionContent className="container">
        <TitleH2>{title}</TitleH2>
        {children}
      </SectionContent>
    </SectionConteiner>
  )
}

export default Section

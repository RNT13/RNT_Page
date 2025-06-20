import { CardContainer } from './CardStyles'

type CardProps = {
  children: React.ReactNode
  title: string
}

const Card = ({ children, title }: CardProps) => {
  return (
    <CardContainer>
      <h2>{title}</h2>
      <div>{children}</div>
    </CardContainer>
  )
}

export default Card

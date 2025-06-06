import { TagContainer, TagProps } from './TagStyle'

const Tag = ({ size = 'small', $priority, $status, children }: TagProps) => {
  return (
    <TagContainer size={size} $priority={$priority} $status={$status}>
      {children}
    </TagContainer>
  )
}

export default Tag

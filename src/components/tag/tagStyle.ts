import styled from 'styled-components'
import { media } from '../../styles/media'
import { tagTheme } from '../../styles/theme'

export type TagProps = {
  size?: 'small' | 'mid' | 'big'
  $status?: string
  $priority?: string
  children: React.ReactNode
}

const sizeMap = {
  small: { fontSize: '0.6rem', padding: '4px 8px' },
  mid: { fontSize: '0.8rem', padding: '6px 12px' },
  big: { fontSize: '1.1rem', padding: '8px 16px' }
}

const getStatusColor = ($status: string | undefined) => {
  switch ($status?.toLowerCase()) {
    case 'friend':
      return tagTheme.status.friend
    case 'known':
      return tagTheme.status.known
    case 'unknown':
      return tagTheme.status.unknown
    case 'pending':
      return tagTheme.status.pending
    case 'completed':
      return tagTheme.status.completed
    case 'highlight':
      return tagTheme.status.highlight
    default:
      return tagTheme.status.default
  }
}

const getPriorityColor = ($priority: string | undefined) => {
  switch ($priority?.toLowerCase()) {
    case 'urgent':
      return tagTheme.priority.urgent
    case 'important':
      return tagTheme.priority.important
    case 'normal':
      return tagTheme.priority.normal
    default:
      return tagTheme.priority.default
  }
}

export const TagContainer = styled.span<TagProps>`
  padding: ${({ size }) => sizeMap[size || 'small'].padding};
  font-size: ${({ size }) => sizeMap[size || 'small'].fontSize};
  border-radius: 15px;
  font-weight: bold;
  line-height: 1.5;
  display: inline-block;
  color: ${({ theme }) => theme.colors.shadow};
  background-color: ${({ $status, $priority, theme }) => {
    if ($status) {
      return getStatusColor($status)
    }
    if ($priority) {
      return getPriorityColor($priority)
    }
    return theme.colors.primaryColor
  }};
  box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.shadow};

  ${media.md} {
    font-size: ${sizeMap.mid.fontSize};
    padding: ${sizeMap.mid.padding};
    background-color: red;
  }

  ${media.sm} {
    font-size: ${sizeMap.small.fontSize};
    padding: ${sizeMap.small.padding};
    background-color: yellow;
  }
`

export const media = {
  sm: `@media (max-width: 480px)`,
  md: `@media (max-width: 768px)`,
  lg: `@media (max-width: 1024px)`
}

export const transition = {
  default: 'all 0.3s ease-in-out'
}

export const tagTheme = {
  status: {
    friend: '#28a745',
    completed: '#39FF14',
    known: '#ff4500',
    pending: '#ffff00',
    unknown: '#ff3347',
    highlight: '#28a731',
    default: '#000'
  },
  priority: {
    urgent: '#ff3347',
    normal: '#0d6efd',
    important: '#ffff00',
    default: '#000'
  }
}

export const darkTheme = {
  colors: {
    primaryColor: '#13161b',
    secondaryColor: '#1c1f25',
    background: '#2F2F2F',
    inputColor: '#0d0e12',
    white: '#121212',
    blue: '#0d6efd',
    blue2: '#0000FF',
    red: '#FF3347',
    green: '#28a745',
    orange: '#ff4500',
    yellow: '#fffF00',
    shadow: '#000',
    grey: '#a1a1a1',
    textColor: '#f1f1f1',
    overlay: 'rgba(0, 0, 0, 0.7)',
    neon: {
      pink1: '#FF1493',
      pink2: '#FF00FF',
      green1: '#39FF14',
      green2: '#00FF7F',
      blue1: '#00BFFF',
      blue2: '#00FFFF'
    }
  }
}

export const lightTheme = {
  colors: {
    primaryColor: '#666666',
    secondaryColor: '#a1a1a1',
    background: '#808080',
    inputColor: '#f1f1f1',
    white: '#ffffff',
    blue: '#3a86ff',
    blue2: '#0000FF',
    red: '#FF0000',
    green: '#34d399',
    orange: '#ff4500',
    yellow: '#ffff00',
    shadow: '#000',
    grey: '#a1a1a1',
    textColor: '#13161b',
    overlay: 'rgba(0, 0, 0, 0.5)',
    neon: {
      pink1: '#FF1493',
      pink2: '#FF00FF',
      green1: '#39FF14',
      green2: '#00FF7F',
      blue1: '#00FFFF',
      blue2: '#00BFFF'
    }
  }
}

export const themeConfig = {
  light: lightTheme,
  dark: darkTheme
}

export type ThemeType = typeof darkTheme

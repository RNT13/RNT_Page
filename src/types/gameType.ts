export interface Game {
  id: number
  name: string
  description: string
  release_date: string
  media: {
    thumbnail: string
    cover: string
    gallery: { type: 'image' | 'video'; url: string; preview?: string }[]
  }
  details: {
    system: string
    category: string
    developer: string
    publisher: string
    language: string[]
  }
  prices: {
    discount: number
    original: number
    current: number
  }
}

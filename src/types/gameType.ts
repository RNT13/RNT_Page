import { GalleryItem } from '../pages/productsPage/ProductsPage'

export interface Game {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    language: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

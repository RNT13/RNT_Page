import { t } from 'i18next'
import { GalleryItem } from '../pages/productsPage/ProductsPage'

const API_URL = 'https://fake-api-tau.vercel.app/api/eplay'

export type Game = {
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

export const apiFetch = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`)
    if (!response.ok) {
      throw new Error(`${t('newError')}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`${t('newError')}:`, error)
    throw new Error(`${t('newError')}: ${error instanceof Error ? error.message : 'Unknown error'}`)
  } finally {
    console.log(`${t('apiCallCompleted')}`)
  }
}

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import { ProductsContainer } from './ProductsPageStyles'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

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

const ProductsPage = () => {
  const { t } = useTranslation()
  const [promotions, setPromotions] = useState<Game[]>()
  const [comingSoon, setComingSoon] = useState<Game[]>()
  const [action, setAction] = useState<Game[]>()
  const [rpg, setRpg] = useState<Game[]>()
  const [simulation, setSimulation] = useState<Game[]>()
  const [fight, setFight] = useState<Game[]>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then(res => res.json())
      .then(res => setPromotions(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then(res => res.json())
      .then(res => setComingSoon(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then(res => res.json())
      .then(res => setAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then(res => res.json())
      .then(res => setRpg(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then(res => res.json())
      .then(res => setSimulation(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then(res => res.json())
      .then(res => setFight(res))
  }, [])

  return (
    <ProductsContainer>
      <ProductsNav />
      <Banner />
      <ProductsList title={t('games')} background="grey" games={promotions ?? []}></ProductsList>
      <ProductsList title={t('comingSoon')} background="black" games={comingSoon ?? []}></ProductsList>
      <ProductsList title={t('action')} background="grey" games={action ?? []}></ProductsList>
      <ProductsList title={t('rpg')} background="black" games={rpg ?? []}></ProductsList>
      <ProductsList title={t('fight')} background="grey" games={fight ?? []}></ProductsList>
      <ProductsList title={t('simulation')} background="black" games={simulation ?? []}></ProductsList>
    </ProductsContainer>
  )
}

export default ProductsPage

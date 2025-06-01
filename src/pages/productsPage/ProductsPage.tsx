import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import { apiFetch, Game } from '../../utils/GameApi'
import { ProductsContainer } from './ProductsPageStyles'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
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
    apiFetch('/promocoes')
      .then(res => setPromotions(res))
      .catch(error => console.error(error))

    apiFetch('/em-breve')
      .then(res => setComingSoon(res))
      .catch(error => console.error(error))

    apiFetch('/acao')
      .then(res => setAction(res))
      .catch(error => console.error(error))

    apiFetch('/rpg')
      .then(res => setRpg(res))
      .catch(error => console.error(error))

    apiFetch('/simulacao')
      .then(res => setSimulation(res))
      .catch(error => console.error(error))

    apiFetch('/luta')
      .then(res => setFight(res))
      .catch(error => console.error(error))
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

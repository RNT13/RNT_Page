import { useTranslation } from 'react-i18next'
import Banner from '../../components/banner/banner'
import ProductsList from '../../components/productsList/productsList'
import ProductsNav from '../../components/productsNav/ProductsNav'
import GameModel from '../../models/GameModels'
import { ProductsContainer } from '../productsPage/productsPageStyles'

const ProductsPage = () => {
  const { t } = useTranslation()

  const promotionGames: GameModel[] = [
    {
      id: 1,
      category: t('horror'),
      system: 'PC/PS5',
      image: '/images/resident.png',
      infos: ['-10%', 'R$ 150,00'],
      title: t('resident'),
      description: t('residentDescription')
    },
    {
      id: 2,
      category: t('action'),
      system: 'PC/PS5',
      image: '/images/diablo.png',
      infos: ['-10%', 'R$ 150,00'],
      title: t('diablo'),
      description: t('diabloDescription')
    },
    {
      id: 3,
      category: t('adventure'),
      system: 'PC/PS5',
      image: '/images/star_wars.png',
      infos: ['-10%', 'R$ 150,00'],
      title: t('starWars'),
      description: t('starWarsDescription')
    },
    {
      id: 4,
      category: t('action'),
      system: 'PC/PS5',
      image: '/images/zelda.png',
      infos: ['-10%', 'R$ 150,00'],
      title: t('zelda'),
      description: t('zeldaDescription')
    },
    {
      id: 5,
      category: t('actionAdventure'),
      system: 'PC/PS5',
      image: '/images/the_last_of_us_remaster.jpg',
      infos: ['-10%', 'R$ 150,00'],
      title: t('theLastOfUs'),
      description: t('theLastOfUsDescription')
    },
    {
      id: 6,
      category: t('horror'),
      system: 'PC/PS5',
      image: '/images/until_dawn.webp',
      infos: ['-10%', 'R$ 150,00'],
      title: t('untilDawn'),
      description: t('untilDawnDescription')
    }
  ]

  const comingSoonGames: GameModel[] = [
    {
      id: 1,
      category: t('actionAdventure'),
      system: 'PC/PS5',
      image: '/images/god_of_war_ragnarok.webp',
      infos: [t('comingSoon'), '2026'],
      title: t('godOfWarRagnarok'),
      description: t('godOfWarRagnarokDescription')
    },
    {
      id: 2,
      category: t('actionAdventure'),
      system: 'PC/PS5',
      image: '/images/helldivers_2.webp',
      infos: [t('comingSoon'), '2026'],
      title: t('helldivers'),
      description: t('helldiversDescription')
    },
    {
      id: 3,
      category: t('actionAdventure'),
      system: 'PC/PS5',
      image: '/images/horizon_forbidden_west.jpg',
      infos: [t('comingSoon'), '2026'],
      title: t('horizonForbiddenWest'),
      description: t('horizonForbiddenWestDescription')
    },
    {
      id: 4,
      category: t('actionAdventure'),
      system: 'PC/PS5',
      image: '/images/horizon_zero_dawn_remastered.webp',
      infos: [t('comingSoon'), '2026'],
      title: t('horizonZeroDawn'),
      description: t('horizonZeroDawnDescription')
    },
    {
      id: 5,
      category: t('actionAdventure'),
      system: 'PC/PS5',
      image: '/images/ratchet_and_clank_rift_apart.webp',
      infos: [t('comingSoon'), '2026'],
      title: t('ratchetAndClankRiftApart'),
      description: t('ratchetAndClankRiftApartDescription')
    }
  ]

  return (
    <ProductsContainer>
      <ProductsNav />
      <Banner />
      <ProductsList title={t('games')} background="grey" games={promotionGames}></ProductsList>
      <ProductsList title={t('comingSoon')} background="black" games={comingSoonGames}></ProductsList>
    </ProductsContainer>
  )
}

export default ProductsPage

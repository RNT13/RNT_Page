import { useTranslation } from 'react-i18next'
import { useGetUnifiedGamesQuery } from '../../api/gameApi'
import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import { TitleH2 } from '../../styles/globalStyles'
import { CategoryPageContent } from './CategoryPageStyles'

const CategoryPage = () => {
  const { t } = useTranslation()
  const { data: allGames = [], isLoading, isError } = useGetUnifiedGamesQuery()

  if (isLoading) return <TitleH2>{t('loading')}</TitleH2>
  if (isError) return <TitleH2>{t('error')}</TitleH2>

  // Agrupa por categoria
  const categoriesMap: Record<string, typeof allGames> = {}

  allGames.forEach(game => {
    const category = game.details.category?.toLowerCase()
    if (category) {
      if (!categoriesMap[category]) {
        categoriesMap[category] = []
      }
      categoriesMap[category].push(game)
    }
  })

  const sortedCategories = Object.entries(categoriesMap).sort(([a], [b]) => a.localeCompare(b))

  return (
    <CategoryPageContent>
      <ProductsNav />
      <Banner />
      <TitleH2>{t('category')}</TitleH2>
      {sortedCategories.map(([categoryName, games], index) => (
        <ProductsList key={categoryName} id={categoryName} title={t(categoryName.toLowerCase()) || categoryName} background={index % 2 === 0 ? 'grey' : 'black'} games={games} />
      ))}
    </CategoryPageContent>
  )
}

export default CategoryPage

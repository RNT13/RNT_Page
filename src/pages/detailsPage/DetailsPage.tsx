import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useGetFullGameDetailsQuery } from '../../api/gameApi'
import { Title } from '../../components/Banner/BannerStyles'
import Gallery from '../../components/Gallery/Gallery'
import Hero from '../../components/Hero/Hero'
import ProductsNav from '../../components/ProductsNav/ProductsNav'
import Section from '../../components/Section/Section'
import { TitleH2 } from '../../styles/globalStyles'
import { DetailsPageContainer } from './DetailsPageStyles'

const DetailsPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const { data: game, isLoading: loading, isError: error } = useGetFullGameDetailsQuery(id!)

  if (loading)
    return (
      <DetailsPageContainer>
        <Title>{t('loading')}</Title>
      </DetailsPageContainer>
    )
  if (error)
    return (
      <DetailsPageContainer>
        <Title>{t('error')}</Title>
      </DetailsPageContainer>
    )

  if (!id || id === 'undefined') {
    return (
      <DetailsPageContainer>
        <TitleH2>ID inválido</TitleH2>
      </DetailsPageContainer>
    )
  }

  if (!game)
    return (
      <DetailsPageContainer>
        <TitleH2>{t('loading')}</TitleH2>
      </DetailsPageContainer>
    )

  return (
    <>
      <ProductsNav />
      <DetailsPageContainer>
        <Hero game={game} />
        <Section $background="grey" title={t('aboutTheGame')}>
          <p> {game.description} </p>
        </Section>
        <Section $background="black" title={t('moreDetails')}>
          <p>
            <b>{t('platformer')}:</b> {game.details?.system}
            <br />
            <b>{t('developer')}:</b> {game.details?.developer}
            <br />
            <b>{t('publisher')}:</b> {game.details?.publisher}
            <br />
            <b>{t('language')}:</b> {t('languageDetails')} {game.details?.language?.join(', ')}
          </p>
        </Section>
        <Gallery defaultCover={game.media.thumbnail} items={game.media.gallery} name={game.name} />
      </DetailsPageContainer>
    </>
  )
}

export default DetailsPage

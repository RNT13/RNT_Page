import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery/Gallery'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import { TitleH2 } from '../../styles/globalStyles'
import { Game } from '../productsPage/ProductsPage'
import { DetailsPageContainer } from './DetailsPageStyles'

const DetailsPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    if (!id || id === 'undefined') return
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then(res => res.json())
      .then(res => setGame(res))
  }, [id])

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
    <DetailsPageContainer>
      <TitleH2></TitleH2>
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
      <Gallery name={game.name} defaultCover={game.media.cover} items={game.media.gallery} />
    </DetailsPageContainer>
  )
}

export default DetailsPage

import { useTranslation } from 'react-i18next'
import { GlobalMainContent, TitleH2 } from '../../styles/globalStyles'
import { GradientButton, LineHoverButton, TestContent } from '../testPage/TestPageStyles'

const TestPage = () => {
  const { t } = useTranslation()

  return (
    <GlobalMainContent>
      <TitleH2>{t('test')}</TitleH2>
      <TestContent>
        <GradientButton>
          <h1>{t('click')}</h1>
        </GradientButton>
        <LineHoverButton>
          <h1>{t('click')}</h1>
        </LineHoverButton>
      </TestContent>
    </GlobalMainContent>
  )
}

export default TestPage

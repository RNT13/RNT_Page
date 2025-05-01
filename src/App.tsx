import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import i18n from './i18n'
import { store } from './redux/store'
import AppContent from './routes'

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AppContent />
      </I18nextProvider>
    </Provider>
  )
}

export default App

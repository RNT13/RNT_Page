import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../../../redux/store'
import { providerRender } from '../../../utils/tests/tests'
import Header from '../Header'

describe('testes para o componente Header', () => {
  test('deve mostrar 2 Header', () => {
    providerRender(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    )

    expect(screen.getAllByText('Header')).toHaveLength(1)
  })

  test('deve mostrar 2 botões', () => {
    providerRender(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    )

    expect(screen.getAllByRole('button')).toHaveLength(3)
  })
})

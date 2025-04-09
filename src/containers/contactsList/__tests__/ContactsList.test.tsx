import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '../../../redux/store'
import ContactsList from '../ContactsList'

describe('deve mostrar contatos na lista de contatos', () => {
  test('deve mostrar 3 contatos na lista', () => {
    const preloadedState = {
      contacts: {
        itens: [
          { id: 1, name: 'Contato 1', status: 'Friend', email: 'email1@example.com', phone: 1234567890 },
          { id: 2, name: 'Contato 2', status: 'Known', email: 'email2@example.com', phone: 9876543210 },
          { id: 3, name: 'Contato 3', status: 'Unknown', email: 'email3@example.com', phone: 1122334455 }
        ]
      }
    }

    const store = configureStore(preloadedState)

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ContactsList />
        </MemoryRouter>
      </Provider>
    )

    const contacts = screen.getAllByRole('listitem')

    expect(contacts).toHaveLength(3)
  })
})

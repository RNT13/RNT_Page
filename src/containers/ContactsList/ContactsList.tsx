import { useSelector } from 'react-redux'
import ContactCard from '../../components/ContactCard'
import { RootReducer } from '../../redux/store'
import { TitleH2 } from '../../styles/globalStyles'
import { MainContactContainer } from './ContactsListStyles'

const ContactsList = () => {
  const { term, criterion, value } = useSelector((state: RootReducer) => state.filter)
  const contatos = useSelector((state: RootReducer) => state.contacts.itens)

  const filtrarContatos = () => {
    let contatosFiltrados = contatos
    if (term !== '') {
      contatosFiltrados = contatosFiltrados.filter(contato => contato.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
    }
    if (criterion === 'status') {
      contatosFiltrados = contatosFiltrados.filter(contato => contato.status === value)
    }
    return contatosFiltrados
  }

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''
    const complementacao = term !== undefined && term.length > 0 ? ` e "${term}"` : ''

    if (criterion === 'all') {
      mensagem = `${quantidade} contato(s) marcado(s) como: todos ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) marcado(s) como: "${`${criterion} = ${value}`}" ${complementacao}`
    }
    return mensagem
  }

  const contatosFiltrados = filtrarContatos()
  const mensagem = exibeResultadoFiltrado(contatosFiltrados.length)

  return (
    <MainContactContainer>
      <TitleH2 as="p">{mensagem}</TitleH2>
      <ul>
        {contatosFiltrados.map(contato => (
          <li key={contato.id}>
            <ContactCard contact={contato} />
          </li>
        ))}
      </ul>
    </MainContactContainer>
  )
}

export default ContactsList

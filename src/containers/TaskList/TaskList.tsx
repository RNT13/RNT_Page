import { useSelector } from 'react-redux'
import Tasks from '../../components/Tasks'
import { RootReducer } from '../../redux/store'
import { TitleH2 } from '../../styles/globalStyles'
import { MainContainer } from './TaskList.styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.Tarefas)
  const { termo = '', criterio, valor } = useSelector((state: RootReducer) => state.filtro)

  const filtrarTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== '') {
      tarefasFiltradas = tarefasFiltradas.filter(
        item => item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
    }
    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(item => item.prioridade === valor)
    } else if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(item => item.status === valor)
    }
    return tarefasFiltradas
  }

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''
    const complementacao = termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) marcada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) marcada(s) como: "${`${criterio} = ${valor}`}" ${complementacao}`
    }
    return mensagem
  }

  const tarefas = filtrarTarefas()
  const mensagem = exibeResultadoFiltrado(tarefas.length)

  return (
    <MainContainer>
      <TitleH2 as="p">{mensagem}</TitleH2>
      <ul>
        {tarefas.map(t => (
          <li key={t.titulo}>
            <Tasks id={t.id} titulo={t.titulo} prioridade={t.prioridade} status={t.status} descricao={t.descricao} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas

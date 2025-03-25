import { useSelector } from 'react-redux'
import Tasks from '../../components/TasksCard'
import { RootReducer } from '../../redux/store'
import { TitleH2 } from '../../styles/globalStyles'
import { MainTaskContainer } from './TaskList.styles'

const TaskList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term = '', criterion, value } = useSelector((state: RootReducer) => state.filter)

  const filtrarTarefas = () => {
    let tarefasFiltradas = itens
    if (term !== '') {
      tarefasFiltradas = tarefasFiltradas.filter(item => item.title.toLocaleLowerCase().search(term.toLocaleLowerCase()) >= 0)
    }
    if (criterion === 'priority') {
      tarefasFiltradas = tarefasFiltradas.filter(item => item.priority === value)
    } else if (criterion === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(item => item.status === value)
    }
    return tarefasFiltradas
  }

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''
    const complementacao = term !== undefined && term.length > 0 ? ` e "${term}"` : ''

    if (criterion === 'all') {
      mensagem = `${quantidade} tarefa(s) marcada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) marcada(s) como: "${`${criterion} = ${value}`}" ${complementacao}`
    }
    return mensagem
  }

  const tarefas = filtrarTarefas()
  const mensagem = exibeResultadoFiltrado(tarefas.length)

  return (
    <MainTaskContainer>
      <TitleH2 as="p">{mensagem}</TitleH2>
      <ul>
        {tarefas.map(t => (
          <li key={t.title}>
            <Tasks id={t.id} title={t.title} priority={t.priority} status={t.status} description={t.description} />
          </li>
        ))}
      </ul>
    </MainTaskContainer>
  )
}

export default TaskList

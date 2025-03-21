import BotaoAdicionar from '../../components/AddButton'
import FilterBar from '../../containers/FilterBar/FilterBar'
import ListaDeTarefas from '../../containers/TaskList/TaskList'
import { TitleH2 } from '../../styles/globalStyles'
import { TarefasContainer, TarefasContent, TarefasMain, TarefasSidebar } from './Tarefas.style'

const Tarefas = () => {
  return (
    <TarefasContainer>
      <TarefasSidebar>
        <FilterBar mostrarFiltros />
      </TarefasSidebar>
      <TarefasMain>
        <TitleH2>Tarefas</TitleH2>
        <TarefasContent>
          <ListaDeTarefas />
          <BotaoAdicionar />
        </TarefasContent>
      </TarefasMain>
    </TarefasContainer>
  )
}

export default Tarefas

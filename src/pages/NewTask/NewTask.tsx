import FilterBar from '../../containers/FilterBar/FilterBar'
import TaskForm from '../../containers/Form/Form'
import { TitleH2 } from '../../styles/globalStyles'
import { NewTaskContainer, NewTaskContent, NewTaskMain, NewTaskSidebar } from './NewTask.styles'

const NewTask = () => (
  <NewTaskContainer>
    <NewTaskSidebar>
      <FilterBar mostrarFiltros={false} />
    </NewTaskSidebar>
    <NewTaskMain>
      <TitleH2>NewTask</TitleH2>
      <NewTaskContent>
        <TaskForm />
      </NewTaskContent>
    </NewTaskMain>
  </NewTaskContainer>
)

export default NewTask

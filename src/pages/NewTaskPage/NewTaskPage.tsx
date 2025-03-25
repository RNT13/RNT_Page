import FilterBar from '../../containers/FilterBar/FilterBar'
import NewTaskForm from '../../containers/NewTaskForm/NewTaskForm'
import { TitleH2 } from '../../styles/globalStyles'
import { NewTaskContainer, NewTaskContent, NewTaskMain, NewTaskSidebar } from './NewTaskPage.styles'

const NewTaskPage = () => (
  <NewTaskContainer>
    <NewTaskSidebar>
      <FilterBar mostrarFiltros={false} type={'tasks'} />
    </NewTaskSidebar>
    <NewTaskMain>
      <TitleH2>NewTask</TitleH2>
      <NewTaskContent>
        <NewTaskForm />
      </NewTaskContent>
    </NewTaskMain>
  </NewTaskContainer>
)

export default NewTaskPage

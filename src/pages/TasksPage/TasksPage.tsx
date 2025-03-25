import { AddButtonTask } from '../../components/AddButton'
import FilterBar from '../../containers/FilterBar/FilterBar'
import TaskList from '../../containers/TaskList/TaskList'
import { TitleH2 } from '../../styles/globalStyles'
import { TaskContainer, TaskContent, TaskMain, TaskSideBar } from './TasksPage.style'

const TasksPage = () => {
  return (
    <TaskContainer>
      <TaskSideBar>
        <FilterBar mostrarFiltros={true} type="tasks" />
      </TaskSideBar>
      <TaskMain>
        <TitleH2>Task</TitleH2>
        <TaskContent>
          <TaskList />
          <AddButtonTask />
        </TaskContent>
      </TaskMain>
    </TaskContainer>
  )
}

export default TasksPage

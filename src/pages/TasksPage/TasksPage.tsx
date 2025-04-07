import { useTranslation } from 'react-i18next'
import { AddButtonTask } from '../../components/AddButton/AddButton'
import FilterBar from '../../containers/FilterBar/FilterBar'
import TaskList from '../../containers/TaskList/TaskList'
import { TitleH2 } from '../../styles/globalStyles'
import { TaskContainer, TaskContent, TaskMain, TaskSideBar } from './TasksPageStyles'

const TasksPage = () => {
  const { t } = useTranslation()

  return (
    <TaskContainer>
      <TaskSideBar>
        <FilterBar mostrarFiltros={true} type="tasks" />
      </TaskSideBar>
      <TaskMain>
        <TitleH2>{t('task')}</TitleH2>
        <TaskContent>
          <TaskList />
          <AddButtonTask />
        </TaskContent>
      </TaskMain>
    </TaskContainer>
  )
}

export default TasksPage

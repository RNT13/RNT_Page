import { useTranslation } from 'react-i18next'
import { AddButtonTask } from '../../components/AddButton/AddButton'
import FilterBar from '../../containers/filterBar/FilterBar'
import TaskList from '../../containers/taskList/TaskList'
import { TitleH2 } from '../../styles/globalStyles'
import { TaskContainer, TaskContent, TaskMain } from '../tasksPage/TasksPageStyles'

const TasksPage = () => {
  const { t } = useTranslation()

  return (
    <TaskContainer>
      <FilterBar mostrarFiltros={true} type="tasks" />
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

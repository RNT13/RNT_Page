import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import TaskCard from '../../components/TasksCard/TasksCard'
import { RootState } from '../../redux/store'
import { TitleH2 } from '../../styles/globalStyles'
import { MainTaskContainer } from './TaskListStyles'

const TaskList = () => {
  const { t } = useTranslation()
  const { itens } = useSelector((state: RootState) => state.tasks)
  const { term = '', criterion, value } = useSelector((state: RootState) => state.filter)

  const filterTasks = () => {
    let FilteredTasks = itens
    if (term !== '') {
      FilteredTasks = FilteredTasks.filter(item => item.title.toLocaleLowerCase().search(term.toLocaleLowerCase()) >= 0)
    }
    if (criterion === 'priority') {
      FilteredTasks = FilteredTasks.filter(item => item.priority === value)
    } else if (criterion === 'status') {
      FilteredTasks = FilteredTasks.filter(item => item.status === value)
    }
    return FilteredTasks
  }

  const displayFilteredResult = (amount: number) => {
    let message = ''
    const complementation = term !== undefined && term.length > 0 ? ` e "${term}"` : ''
    const getTranslatedStatus = (value: string) => {
      const lower = value.toLowerCase()
      return t(lower, value)
    }

    if (criterion === 'all') {
      message = `${amount} ${t('taskMarkedAsAll')} ${complementation}`
    } else {
      message = `${amount} ${t('taskMarketAs')} ${getTranslatedStatus(value || '')} ${complementation}`
    }
    return message
  }

  const Tasks = filterTasks()
  const message = displayFilteredResult(Tasks.length)

  return (
    <MainTaskContainer>
      <TitleH2 as="p">{message}</TitleH2>
      <ul>
        {Tasks.map(t => (
          <li key={t.title}>
            <TaskCard id={t.id} title={t.title} priority={t.priority} status={t.status} description={t.description} />
          </li>
        ))}
      </ul>
    </MainTaskContainer>
  )
}

export default TaskList

import { useSelector } from 'react-redux'
import TaskCard from '../../components/TasksCard/TasksCard'
import { RootState } from '../../redux/store'
import { TitleH2 } from '../../styles/globalStyles'
import { MainTaskContainer } from './TaskListStyles'

const TaskList = () => {
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

    if (criterion === 'all') {
      message = `${amount} task(s) marked as: all ${complementation}`
    } else {
      message = `${amount} task(s) marked as: "${`${criterion} = ${value}`}" ${complementation}`
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

import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/slices/filterSlice'
import { RootState } from '../../redux/store'
import { Counter, TextH3 } from '../../styles/globalStyles'
import * as taskEnums from '../../utils/enums/taskEnums'
import { FilterCard } from '../tasksFilterBar/TasksFilterBarStyles'

export type Props = {
  caption: string
  criterion: 'status' | 'priority' | 'all'
  taskValue?: taskEnums.priority | taskEnums.status
}

const TaskCardFilter = ({ caption, criterion, taskValue }: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootState) => state.filter)
  const tarefas = useSelector((state: RootState) => state.tasks.itens || [])

  const verifyActive = () => {
    const samecriterion = filtro.criterion === criterion
    const sametaskValue = filtro.value === taskValue

    return samecriterion && sametaskValue
  }

  const taskCounter = () => {
    if (criterion === 'all') return tarefas.length
    if (criterion === 'priority') {
      return tarefas.filter(item => item.priority === taskValue).length
    }
    if (criterion === 'status') {
      return tarefas.filter(item => item.status === taskValue).length
    }
  }

  const filtrar = () => {
    dispatch(
      changeFilter({
        criterion,
        value: taskValue
      })
    )
  }

  const active = verifyActive()
  const contador = taskCounter()

  return (
    <FilterCard $ativo={active} onClick={filtrar}>
      <Counter>{contador}</Counter>
      <TextH3>{caption}</TextH3>
    </FilterCard>
  )
}

export default TaskCardFilter

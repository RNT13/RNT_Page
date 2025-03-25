import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../redux/reducers/filterReducer'
import { RootReducer } from '../redux/store'
import { Counter, FilterCard, Label } from '../styles/globalStyles'
import * as taskEnums from '../utils/enums/taskEnums'

export type Props = {
  caption: string
  criterion: 'status' | 'priority' | 'all'
  taskValue?: taskEnums.priority | taskEnums.status
}

const TaskCardFilter = ({ caption, criterion, taskValue }: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filter)
  const tarefas = useSelector((state: RootReducer) => state.tasks.itens || [])

  const verifyActive = () => {
    const samecriterion = filtro.criterion === criterion
    const sametaskValue = filtro.value === taskValue

    return samecriterion && sametaskValue
  }

  const contarTarefas = () => {
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
  const contador = contarTarefas()

  return (
    <FilterCard $ativo={active} onClick={filtrar}>
      <Counter>{contador}</Counter>
      <Label>{caption}</Label>
    </FilterCard>
  )
}

export default TaskCardFilter

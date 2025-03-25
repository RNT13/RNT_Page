import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ContactCardFilter from '../../components/ContactsFilterBar'
import TaskCardFilter from '../../components/TasksFilterBar'
import { changeTerm } from '../../redux/reducers/filterReducer'
import { RootReducer } from '../../redux/store'
import { Button, InputField } from '../../styles/globalStyles'
import * as contactEnums from '../../utils/enums/contactEnums'
import * as taskEnums from '../../utils/enums/taskEnums'
import * as S from './FilterBarStyles'

type props = {
  mostrarFiltros: boolean
  type: 'contacts' | 'tasks'
}

const FilterBar = ({ mostrarFiltros, type }: props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const filterState = useSelector((state: RootReducer) => state.filter)
  const term = filterState?.term || ''

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <InputField type="text" placeholder="Search" value={term} onChange={evento => dispatch(changeTerm(evento.target.value))} />
            <S.Filtros>
              {type === 'tasks' ? (
                <>
                  <TaskCardFilter taskValue={taskEnums.status.PENDING} criterion="status" caption="Pending" />
                  <TaskCardFilter taskValue={taskEnums.status.COMPLETED} criterion="status" caption="Completed" />
                  <TaskCardFilter taskValue={taskEnums.priority.URGENT} criterion="priority" caption="Urgent" />
                  <TaskCardFilter taskValue={taskEnums.priority.IMPORTANT} criterion="priority" caption="Important" />
                  <TaskCardFilter taskValue={taskEnums.priority.NORMAL} criterion="priority" caption="Normal" />
                  <TaskCardFilter criterion="all" caption="all" />
                </>
              ) : (
                <>
                  <ContactCardFilter value={contactEnums.status.FRIEND} criterion="status" caption="Friend" />
                  <ContactCardFilter value={contactEnums.status.KNOWN} criterion="status" caption="Known" />
                  <ContactCardFilter value={contactEnums.status.UNKNOWN} criterion="status" caption="Unknown" />
                  <ContactCardFilter criterion="all" caption="all" />
                </>
              )}
            </S.Filtros>
          </>
        ) : (
          <Button onClick={() => navigate(-1)}>Return</Button>
        )}
      </div>
    </S.Aside>
  )
}

export default FilterBar

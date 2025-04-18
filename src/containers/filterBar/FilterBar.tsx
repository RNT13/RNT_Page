import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ContactCardFilter from '../../components/contactsFilterBar/ContactsFilterBar'
import TaskCardFilter from '../../components/tasksFilterBar/TasksFilterBar'
import { changeTerm } from '../../redux/slices/filterSlice'
import { RootState } from '../../redux/store'
import { Button, InputField } from '../../styles/globalStyles'
import * as contactEnums from '../../utils/enums/contactEnums'
import * as taskEnums from '../../utils/enums/taskEnums'
import * as S from '../filterBar/FilterBarStyles'

type props = {
  mostrarFiltros: boolean
  type: 'contacts' | 'tasks'
}

const FilterBar = ({ mostrarFiltros, type }: props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const filterState = useSelector((state: RootState) => state.filter)
  const term = filterState?.term || ''

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <InputField id="search" type="text" placeholder={t('search')} value={term} onChange={evento => dispatch(changeTerm(evento.target.value))} />
            <S.filters>
              {type === 'tasks' ? (
                <>
                  <TaskCardFilter taskValue={taskEnums.status.PENDING} criterion="status" caption={t('pending')} />
                  <TaskCardFilter taskValue={taskEnums.status.COMPLETED} criterion="status" caption={t('completed')} />
                  <TaskCardFilter taskValue={taskEnums.priority.URGENT} criterion="priority" caption={t('urgent')} />
                  <TaskCardFilter taskValue={taskEnums.priority.IMPORTANT} criterion="priority" caption={t('important')} />
                  <TaskCardFilter taskValue={taskEnums.priority.NORMAL} criterion="priority" caption="Normal" />
                  <TaskCardFilter criterion="all" caption={t('all')} />
                </>
              ) : (
                <>
                  <ContactCardFilter value={contactEnums.status.FRIEND} criterion="status" caption={t('friend')} />
                  <ContactCardFilter value={contactEnums.status.KNOWN} criterion="status" caption={t('known')} />
                  <ContactCardFilter value={contactEnums.status.UNKNOWN} criterion="status" caption={t('unknown')} />
                  <ContactCardFilter criterion="all" caption={t('all')} />
                </>
              )}
            </S.filters>
          </>
        ) : (
          <Button onClick={() => navigate(-1)}>{t('return')}</Button>
        )}
      </div>
    </S.Aside>
  )
}

export default FilterBar

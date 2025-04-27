import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/button'
import ContactCardFilter from '../../components/contactsFilterCards/ContactsFilterCards'
import TaskCardFilter from '../../components/tasksFilterCards/TasksFilterCards'
import { changeTerm } from '../../redux/slices/filterSlice'
import { RootState } from '../../redux/store'
import { InputField } from '../../styles/globalStyles'
import * as contactEnums from '../../utils/enums/contactEnums'
import * as taskEnums from '../../utils/enums/taskEnums'
import { Aside, AsideContent, Filters } from './FilterBarStyles'

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
    <Aside>
      <AsideContent>
        {mostrarFiltros ? (
          <>
            <InputField id="search" type="text" placeholder={t('search')} value={term} onChange={evento => dispatch(changeTerm(evento.target.value))} />
            <Filters>
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
            </Filters>
          </>
        ) : (
          <Button type="button" title={t('return')} onClick={() => navigate(-1)}>
            {t('return')}
          </Button>
        )}
      </AsideContent>
    </Aside>
  )
}

export default FilterBar

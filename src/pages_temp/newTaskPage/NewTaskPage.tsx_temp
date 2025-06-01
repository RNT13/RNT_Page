import { useTranslation } from 'react-i18next'
import FilterBar from '../../containers/filterBar/FilterBar'
import NewTaskForm from '../../containers/newTaskForm/NewTaskForm'
import { TitleH2 } from '../../styles/globalStyles'
import { NewTaskContainer, NewTaskContent, NewTaskMain } from '../newTaskPage/NewTaskPageStyles'

const NewTaskPage = () => {
  const { t } = useTranslation()

  return (
    <NewTaskContainer>
      <FilterBar mostrarFiltros={false} type={'tasks'} />
      <NewTaskMain>
        <TitleH2>{t('newTask')}</TitleH2>
        <NewTaskContent>
          <NewTaskForm />
        </NewTaskContent>
      </NewTaskMain>
    </NewTaskContainer>
  )
}

export default NewTaskPage

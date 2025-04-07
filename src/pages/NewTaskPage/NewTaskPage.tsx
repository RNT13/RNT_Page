import { useTranslation } from 'react-i18next'
import FilterBar from '../../containers/FilterBar/FilterBar'
import NewTaskForm from '../../containers/NewTaskForm/NewTaskForm'
import { TitleH2 } from '../../styles/globalStyles'
import { NewTaskContainer, NewTaskContent, NewTaskMain, NewTaskSidebar } from './NewTaskPageStyles'

const NewTaskPage = () => {
  const { t } = useTranslation()

  return (
    <NewTaskContainer>
      <NewTaskSidebar>
        <FilterBar mostrarFiltros={false} type={'tasks'} />
      </NewTaskSidebar>
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

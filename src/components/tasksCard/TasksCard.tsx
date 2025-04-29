import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as taskEnums from '../../utils/enums/taskEnums'

import { useTranslation } from 'react-i18next'
import TaskModels from '../../models/TaskModels'
import { changeFilter } from '../../redux/slices/filterSlice'
import { changeStatus, editTask, removeTask } from '../../redux/slices/taskSlice'
import { RootState } from '../../redux/store'
import { Card } from '../../styles/globalStyles'
import Tag from '../tag/tag'
import { CancelButton, EditButton, RemoveTaskButton, SaveButton, TaskCardActionBar, TaskCardContainer, TaskCardDescription, TaskCardHeader, TaskCardTitle } from './TasksCardStyles'

const TaskCard = ({ title, priority, status, description: originalDescription, id }: TaskModels) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const filter = useSelector((state: RootState) => state.filter)
  const { criterion, value } = filter || { criterion: 'all', value: undefined }
  const [isEditing, setIsEditing] = useState(false)
  const [description, setdescription] = useState(originalDescription)
  const [taskState, setTaskState] = useState(status)
  const [taskTitle, setTaskTitle] = useState(title)

  const cancelEdication = () => {
    setIsEditing(false)
    setdescription(originalDescription)
    setTaskTitle(title)
  }

  const saveEdition = () => {
    dispatch(editTask({ title: taskTitle, priority, status: taskState, description, id }))
    setIsEditing(false)
  }

  function changeStatusTask(evento: React.ChangeEvent<HTMLInputElement>) {
    const novoStatus = evento.target.checked ? taskEnums.status.COMPLETED : taskEnums.status.PENDING
    setTaskState(novoStatus)
    dispatch(changeStatus({ id, finalizado: evento.target.checked }))
    dispatch(changeFilter({ criterion, value }))
  }

  useEffect(() => {
    setTaskState(status)
  }, [status])

  return (
    <Card>
      <TaskCardHeader>
        <Tag $priority={priority} size="mid">
          {t(priority.toLowerCase())}
        </Tag>
        <Tag $priority={taskState} $status={taskState} size="mid">
          {t(taskState.toLowerCase())}
        </Tag>

        {isEditing && <h2>{t('editing')}</h2>}
      </TaskCardHeader>
      <TaskCardContainer>
        <label htmlFor={title}>
          <input type="checkbox" id={title} checked={taskState === taskEnums.status.COMPLETED} onChange={changeStatusTask} />
          {isEditing ? <input type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} placeholder="Edit task title" /> : <TaskCardTitle>{title}</TaskCardTitle>}
        </label>
      </TaskCardContainer>
      <TaskCardDescription id="description" disabled={!isEditing} value={description} onChange={e => setdescription(e.target.value)} />
      <TaskCardActionBar>
        {isEditing ? (
          <>
            <SaveButton type="button" title={t('save')} onClick={saveEdition}>
              {t('save')}
            </SaveButton>
            <CancelButton type="button" title={t('cancel')} onClick={cancelEdication}>
              {t('cancel')}
            </CancelButton>
          </>
        ) : (
          <>
            <EditButton type="button" title={t('editTask')} onClick={() => setIsEditing(true)}>
              {t('editTask')}
            </EditButton>
            <RemoveTaskButton type="button" title={t('remove')} onClick={() => dispatch(removeTask(id))}>
              {t('remove')}
            </RemoveTaskButton>
          </>
        )}
      </TaskCardActionBar>
    </Card>
  )
}

export default TaskCard

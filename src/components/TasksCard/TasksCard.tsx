import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import * as taskEnums from '../../utils/enums/taskEnums'

import TaskModels from '../../models/TaskModels'
import { changeFilter } from '../../redux/reducers/filterReducer'
import { changeStatus, editTask, removeTask } from '../../redux/reducers/taskReducer'
import { RootState } from '../../redux/store'
import { Button, Card, SaveButton, Tag } from '../../styles/globalStyles'
import { ActionBar, Description, InfoContainer, TaskTitle } from './TasksCardStyles'

const RemoveTaskButton = styled(Button)`
  background-color: ${theme.colors.vermelho};
`

const TaskCard = ({ title, priority, status, description: originalDescription, id }: TaskModels) => {
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
      <div>
        <Tag $priority={priority}>{priority}</Tag>
        <Tag $priority="status" $status={taskState}>
          {taskState}
        </Tag>
        {isEditing && <span>Editing...</span>}
      </div>
      <InfoContainer>
        <label htmlFor={title}>
          <input type="checkbox" id={title} checked={taskState === taskEnums.status.COMPLETED} onChange={changeStatusTask} />
          {isEditing ? <input type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} placeholder="Edit task title" /> : <TaskTitle>{title}</TaskTitle>}
        </label>
      </InfoContainer>
      <Description id="description" disabled={!isEditing} value={description} onChange={e => setdescription(e.target.value)} />
      <ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={saveEdition}>Save</SaveButton>
            <RemoveTaskButton onClick={cancelEdication}>Cancel</RemoveTaskButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Edit Task</Button>
            <RemoveTaskButton onClick={() => dispatch(removeTask(id))}>Remove</RemoveTaskButton>
          </>
        )}
      </ActionBar>
    </Card>
  )
}

export default TaskCard

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import * as taskEnums from '../utils/enums/taskEnums'

import TaskModels from '../models/TaskModels'
import { changeFilter } from '../redux/reducers/filterReducer'
import { changeStatus, editTask, removeTask } from '../redux/reducers/taskReducer'
import { RootReducer } from '../redux/store'
import { Button, Card, SaveButton, Tag } from '../styles/globalStyles'

const TaskTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  color: ${theme.colors.preto};
`

const Description = styled.textarea`
  color: ${theme.colors.cinza};
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

const ActionBar = styled.div`
  border-top: 1px solid ${theme.colors.preto};
  padding-top: 16px;
  display: flex;
  justify-content: flex-start;
`

const InfoContainer = styled.div`
  margin: 16px 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 0.8rem;
    color: ${theme.colors.preto};
  }

  input {
    font-size: 18px;
    font-weight: bold;
    margin-left: 8px;
    border: none;
    background: transparent;
    color: ${theme.colors.preto};
  }
`

const RemoveTaskButton = styled(Button)`
  background-color: ${theme.colors.vermelho};
`

const TaskCard = ({ title, priority, status, description: originalDescription, id }: TaskModels) => {
  const dispatch = useDispatch()
  const filter = useSelector((state: RootReducer) => state.filter)
  const { criterion, value } = filter || { criterion: 'all', value: undefined }
  const [isEditing, setIsEditing] = useState(false)
  const [description, setdescription] = useState(originalDescription)
  const [taskState, setTaskState] = useState(status)
  const [taskTitle, setTaskTitle] = useState(title)

  const cancelarEdicao = () => {
    setIsEditing(false)
    setdescription(originalDescription)
    setTaskTitle(title)
  }

  const salvarEdicao = () => {
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
      <Description disabled={!isEditing} value={description} onChange={e => setdescription(e.target.value)} />
      <ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={salvarEdicao}>Save</SaveButton>
            <RemoveTaskButton onClick={cancelarEdicao}>Cancel</RemoveTaskButton>
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

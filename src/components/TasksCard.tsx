import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import * as enums from '../utils/enums/taskEnums'

import TaskModels from '../models/TaskModels'
import { changeFilter } from '../redux/reducers/filterReducer'
import { changeStatus, editTask, removeTask } from '../redux/reducers/taskReducer'
import { RootReducer } from '../redux/store'
import { Button, Card, SaveButton, Tag } from '../styles/globalStyles'

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

const Description = styled.textarea`
  color: ${theme.colors.cinza};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

const ActionBar = styled.div`
  border-top: 1px solid ${theme.colors.preto};
  padding-top: 16px;
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

  const cancelarEdicao = () => {
    setIsEditing(false)
    setdescription(originalDescription)
  }

  const salvarEdicao = () => {
    dispatch(editTask({ title, priority, status: taskState, description, id }))
    setIsEditing(false)
  }

  function changeStatusTarefa(evento: React.ChangeEvent<HTMLInputElement>) {
    const novoStatus = evento.target.checked ? enums.status.COMPLETED : enums.status.PENDING
    setTaskState(novoStatus)
    dispatch(changeStatus({ id, finalizado: evento.target.checked }))
    dispatch(changeFilter({ criterion, value }))
  }

  useEffect(() => {
    setTaskState(status)
  }, [status])

  return (
    <Card>
      <label htmlFor={title}>
        <input type="checkbox" id={title} checked={taskState === enums.status.COMPLETED} onChange={changeStatusTarefa} />
        <Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </Title>
      </label>
      <Tag $priority={priority}>{priority}</Tag>
      <Tag $priority="status" $status={taskState}>
        {taskState}
      </Tag>
      <Description disabled={!isEditing} value={description} onChange={e => setdescription(e.target.value)} />
      <ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={salvarEdicao}>Salvar</SaveButton>
            <RemoveTaskButton onClick={cancelarEdicao}>Cancelar</RemoveTaskButton>
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

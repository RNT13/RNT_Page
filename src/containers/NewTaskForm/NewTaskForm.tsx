import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Tarefa from '../../models/TaskModels'
import { addTask } from '../../redux/reducers/taskReducer'
import { InputField, MainContainer, SaveButton } from '../../styles/globalStyles'
import * as taskEnums from '../../utils/enums/taskEnums'
import { Form, Opcoe, Opcoes } from './NewTaskFormStyles'

const NewTaskForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(taskEnums.priority.NORMAL)

  const registerTask = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !description.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    const taskToRegister = new Tarefa(title, description, priority, taskEnums.status.PENDING, Date.now())

    dispatch(
      addTask({
        title: taskToRegister.title,
        description: taskToRegister.description,
        priority: taskToRegister.priority,
        status: taskToRegister.status,
        id: taskToRegister.id
      })
    )

    navigate('/TasksPage')
  }

  return (
    <MainContainer>
      <Form onSubmit={registerTask}>
        <InputField value={title} onChange={({ target }) => setTitle(target.value)} type="text" placeholder="title" />
        <InputField value={description} onChange={({ target }) => setDescription(target.value)} as="textarea" placeholder="Descrição da Tarefa" />
        <Opcoes>
          <p>priority</p>
          {Object.values(taskEnums.priority).map(priority => (
            <Opcoe key={priority}>
              <input value={priority} name="priority" type="radio" id={priority} defaultChecked={priority === taskEnums.priority.NORMAL} onChange={evento => setPriority(evento.target.value as taskEnums.priority)} /> <label htmlFor={priority}>{priority}</label>
            </Opcoe>
          ))}
        </Opcoes>
        <SaveButton type="submit">Save</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default NewTaskForm

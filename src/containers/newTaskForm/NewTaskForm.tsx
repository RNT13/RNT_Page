import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SaveButton } from '../../components/tasksCard/TasksCardStyles'
import Tarefa from '../../models/TaskModels'
import { addTask } from '../../redux/slices/taskSlice'
import { InputField, MainContainer } from '../../styles/globalStyles'
import * as taskEnums from '../../utils/enums/taskEnums'
import { Form, Opcoe, Opcoes } from '../newTaskForm/NewTaskFormStyles'

const NewTaskForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(taskEnums.priority.NORMAL)

  const registerTask = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !description.trim()) {
      alert(t('fillAllFilds'))
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
        <InputField id="title" value={title} onChange={({ target }) => setTitle(target.value)} type="text" placeholder={t('title')} />
        <InputField id="description" value={description} onChange={({ target }) => setDescription(target.value)} as="textarea" placeholder={t('description')} />
        <Opcoes>
          <p>priority</p>
          {Object.values(taskEnums.priority).map(priority => (
            <Opcoe key={priority}>
              <input value={priority} name="priority" type="radio" id={priority} defaultChecked={priority === taskEnums.priority.NORMAL} onChange={evento => setPriority(evento.target.value as taskEnums.priority)} /> <label htmlFor={priority}>{priority}</label>
            </Opcoe>
          ))}
        </Opcoes>
        <SaveButton type="button" title={t('save')}>
          {t('save')}
        </SaveButton>
      </Form>
    </MainContainer>
  )
}

export default NewTaskForm

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../redux/reducers/tarefas'
import { BotaoSalvar, Campo, MainContainer } from '../../styles/globalStyles'
import * as enums from '../../utils/enums/tarefa'
import { Form, Opcoe, Opcoes } from './FormStyles'

const TaskForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.prioridade.NORMAL)

  const cadrastrarTarefa = (evento: React.FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(titulo, descricao, prioridade, enums.status.PENDENTE, Date.now())

    // Convert Tarefa instance to plain object
    const tarefaPlainObject = {
      titulo: tarefaParaAdicionar.titulo,
      descricao: tarefaParaAdicionar.descricao,
      prioridade: tarefaParaAdicionar.prioridade,
      status: tarefaParaAdicionar.status,
      id: tarefaParaAdicionar.id
    }

    dispatch(cadastrar(tarefaPlainObject))
    navigate('/Tarefas')
  }

  return (
    <MainContainer>
      <Form onSubmit={cadrastrarTarefa}>
        <Campo value={titulo} onChange={({ target }) => setTitulo(target.value)} type="text" placeholder="Titulo" />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da Tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.prioridade).map(prioridade => (
            <Opcoe key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                defaultChecked={prioridade === enums.prioridade.NORMAL}
                onChange={evento => setPrioridade(evento.target.value as enums.prioridade)}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcoe>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default TaskForm

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import * as enums from '../utils/enums/tarefa'

import Tarefa from '../models/Tarefa'
import { alterarFiltro } from '../redux/reducers/filtro'
import { alteraStatus, editar, remover } from '../redux/reducers/tarefas'
import { RootReducer } from '../redux/store'
import { Botao, BotaoSalvar } from '../styles/globalStyles'

// Tipos para tags
type TagProps = {
  prioridade?: enums.prioridade
  status?: enums.status
  parametro: 'status' | 'prioridade'
}

// Função para definir a cor de fundo dinamicamente
const retornaCorDeFundo = ({ parametro, status, prioridade }: TagProps): string => {
  if (parametro === 'status') {
    return status === enums.status.CONCLUIDA ? theme.colors.verde : theme.colors.amarelo2
  }
  return prioridade === enums.prioridade.URGENTE ? theme.colors.vermelho : theme.colors.azul
}

// Styled components
export const Card = styled.div`
  background-color: ${theme.colors.branco};
  box-shadow: 0px 4px 4px ${theme.colors.preto};
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

const Tag = styled.span<{
  $parametro: 'status' | 'prioridade'
  $status?: enums.status
  $prioridade?: enums.prioridade
}>`
  padding: 4px 8px;
  color: ${theme.colors.branco};
  font-weight: bold;
  font-size: 10px;
  background-color: ${props =>
    retornaCorDeFundo({ parametro: props.$parametro, status: props.$status, prioridade: props.$prioridade })};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  margin-bottom: 16px;
`

const Descricao = styled.textarea`
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

const BarraAcoes = styled.div`
  border-top: 1px solid ${theme.colors.preto};
  padding-top: 16px;
`

const BotaoCancelarRemover = styled(Botao)`
  background-color: ${theme.colors.vermelho};
`

// Componente principal
const Tasks = ({ titulo, prioridade, status, descricao: descricaoOriginal, id }: Tarefa) => {
  const dispatch = useDispatch()
  const { criterio, valor } = useSelector((state: RootReducer) => state.filtro)
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState(descricaoOriginal)
  const [tarefaStatus, setTarefaStatus] = useState(status)

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  const salvarEdicao = () => {
    dispatch(editar({ titulo, prioridade, status: tarefaStatus, descricao, id }))
    setEstaEditando(false)
  }

  function alteraStatusTarefa(evento: React.ChangeEvent<HTMLInputElement>) {
    const novoStatus = evento.target.checked ? enums.status.CONCLUIDA : enums.status.PENDENTE
    setTarefaStatus(novoStatus)
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }))
    dispatch(alterarFiltro({ criterio, valor }))
  }

  useEffect(() => {
    setTarefaStatus(status)
  }, [status])

  return (
    <Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={tarefaStatus === enums.status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </Titulo>
      </label>
      <Tag $parametro="prioridade" $prioridade={prioridade}>
        {prioridade}
      </Tag>
      <Tag $parametro="status" $status={tarefaStatus}>
        {tarefaStatus}
      </Tag>
      <Descricao disabled={!estaEditando} value={descricao} onChange={e => setDescricao(e.target.value)} />
      <BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelarEdicao}>Cancelar</BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>Remover</BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}

export default Tasks

import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { alterarFiltro } from '../redux/reducers/filtro'
import { RootReducer } from '../redux/store'
import { theme } from '../styles/theme'
import * as enums from '../utils/enums/tarefa'

// Styled Components
export const Card = styled.div<{ $ativo: boolean }>`
  padding: 8px;
  border: 2px solid ${props => (props.$ativo ? theme.colors.azul : theme.colors.cinza2)};
  background-color: ${props => (props.$ativo ? theme.colors.branco : theme.colors.branco)};
  color: ${props => (props.$ativo ? theme.colors.azul : theme.colors.cinza)};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`

// FiltroCard Component
export type Props = {
  legenda: string
  criterio: 'status' | 'prioridade' | 'todas'
  valor?: enums.prioridade | enums.status
}

const CardFilter = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filtro)
  const Tarefas = useSelector((state: RootReducer) => state.Tarefas.itens)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return Tarefas.length
    if (criterio === 'prioridade') {
      return Tarefas.filter(item => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return Tarefas.filter(item => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaEstaAtivo()
  const contador = contarTarefas()

  return (
    <Card $ativo={ativo} onClick={filtrar}>
      <Contador>{contador}</Contador>
      <Label>{legenda}</Label>
    </Card>
  )
}

export default CardFilter

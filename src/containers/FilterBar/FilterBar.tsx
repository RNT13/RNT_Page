import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardFilter from '../../components/CardFilter'
import { alteraTermo } from '../../redux/reducers/filtro'
import { RootReducer } from '../../redux/store'
import { Botao, Campo } from '../../styles/globalStyles'
import * as enums from '../../utils/enums/tarefa'
import * as S from './FilterBarStyles'

type props = {
  mostrarFiltros: boolean
}

const FilterBar = ({ mostrarFiltros }: props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={evento => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <CardFilter valor={enums.status.PENDENTE} criterio="status" legenda="pendentes" />
              <CardFilter valor={enums.status.CONCLUIDA} criterio="status" legenda="concluidas" />
              <CardFilter valor={enums.prioridade.URGENTE} criterio="status" legenda="urgentes" />
              <CardFilter valor={enums.prioridade.IMPORTANTE} criterio="prioridade" legenda="importante" />
              <CardFilter valor={enums.prioridade.NORMAL} criterio="prioridade" legenda="normal" />
              <CardFilter criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/Tarefas')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default FilterBar

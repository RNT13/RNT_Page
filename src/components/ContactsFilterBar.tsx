import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../redux/reducers/filterReducer'
import { RootReducer } from '../redux/store'
import { Counter, FilterCard } from '../styles/globalStyles'
import * as enums from '../utils/enums/contactEnums'

export type Props = {
  caption: string
  criterion: 'status' | 'all'
  value?: enums.status
}

const ContactsCardFilter = ({ caption, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filter)
  const contatos = useSelector((state: RootReducer) => state.contacts.itens || [])

  const verifyActive = () => {
    const mesmocriterion = filtro.criterion === criterion
    const mesmovalue = filtro.value === value

    return mesmocriterion && mesmovalue
  }

  const contarContatos = () => {
    if (criterion === 'all') return contatos.length
    if (criterion === 'status') {
      return contatos.filter(item => item.status === value).length
    }
  }

  const filtrar = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const active = verifyActive()
  const contador = contarContatos()

  return (
    <FilterCard $ativo={active} onClick={filtrar}>
      <Counter>{contador}</Counter>
      <label>{caption}</label>
    </FilterCard>
  )
}

export default ContactsCardFilter

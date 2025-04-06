import { useDispatch, useSelector } from 'react-redux'
import { FilterCard } from '../../components/ContactsFilterBar/ContactsFilterBarStyles'
import { changeFilter } from '../../redux/slices/filterSlice'
import { RootState } from '../../redux/store'
import { Counter, TextH3 } from '../../styles/globalStyles'
import * as enums from '../../utils/enums/contactEnums'

export type Props = {
  caption: string
  criterion: 'status' | 'all'
  value?: enums.status
}

const ContactsCardFilter = ({ caption, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootState) => state.filter)
  const contatos = useSelector((state: RootState) => state.contacts.itens || [])

  const verifyActive = () => {
    const mesmocriterion = filtro.criterion === criterion
    const mesmovalue = filtro.value === value

    return mesmocriterion && mesmovalue
  }

  const contactCounter = () => {
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
  const contador = contactCounter()

  return (
    <FilterCard $ativo={active} onClick={filtrar}>
      <Counter>{contador}</Counter>
      <TextH3>{caption}</TextH3>
    </FilterCard>
  )
}

export default ContactsCardFilter

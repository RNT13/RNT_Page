import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as contactEnums from '../../utils/enums/contactEnums'
import * as taskEnums from '../../utils/enums/taskEnums'

type CriterionType = 'priority' | 'status' | 'all'
type FilterValue = taskEnums.priority | taskEnums.status | contactEnums.status

type FilterState = {
  term: string
  criterion: CriterionType
  value?: FilterValue
}

const initialState: FilterState = {
  term: '',
  criterion: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, { payload }: PayloadAction<string>) => {
      state.term = payload
    },
    changeFilter: (state, { payload }: PayloadAction<{ criterion: CriterionType; value?: FilterValue }>) => {
      state.criterion = payload.criterion
      state.value = payload.value
    }
  }
})

export const { changeTerm, changeFilter } = filterSlice.actions
export default filterSlice.reducer

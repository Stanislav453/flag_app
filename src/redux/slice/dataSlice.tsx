import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


type TypeData = {
  data: any
}

const initialState: TypeData = {
  data: [],
}

export const dataSlice = createSlice({
  name: 'data-slice',
  initialState,
  reducers: {
   
  },
})

export const {  } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default dataSlice.reducer
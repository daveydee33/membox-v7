import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  params: {},
  totalItems: 0,
  selectedItem: {},
  tags: [],
  favorites: []
}

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    getItems(state, action) {},

    todoAdded(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.push(action.payload)
    },
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    todosLoading(state, action) {
      return {
        ...state,
        status: 'loading'
      }
    }
  }
})

export const { todoAdded, todoToggled, todosLoading } = itemsSlice.actions

export default itemsSlice.reducer

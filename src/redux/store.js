import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './TodoSlice'
export default configureStore({
  reducer: {
    TodoArr: TodoSlice
  },
})
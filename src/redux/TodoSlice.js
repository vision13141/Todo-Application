import { createSlice, nanoid } from '@reduxjs/toolkit'
import { list } from 'postcss'

export const TodoSlice = createSlice({
    name: 'Todo_List',
    initialState: {
        todoList: [],
        filterTodo: [],
        trueFlase: false,
        searchTrm: '',
    },
    reducers: {

        addTodo: (state, action) => {
            const listObj = {
                id: nanoid(),
                list: action.payload
            }
            state.todoList.push(listObj)
            state.filterTodo.push(listObj)
        },

        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter((el) => {
                return el.id !== action.payload
            })
        }
        ,

        editTodo: (state, action) => {
            const { ix, eiteName } = action.payload

            state.todoList.forEach(el => {
                if (el.id == ix) {
                    el.list = eiteName
                }
            })
        },

        searchTod: (state, action) => {

            state.searchTrm = action.payload

            const trm = state.searchTrm

            state.todoList = state.filterTodo.filter((el) => {
                if (trm === "") {
                    return el
                }
                else if (el.list.toLowerCase().includes(trm.toLowerCase())) {
                    return el
                }
            })
        },

    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, updateTodo, editTodo, searchTod } = TodoSlice.actions

export default TodoSlice.reducer
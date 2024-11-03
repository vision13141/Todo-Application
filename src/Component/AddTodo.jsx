import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/TodoSlice'
import { useAuth0 } from "@auth0/auth0-react";


const AddTodo = () => {
    let [inputVal, setinputVal] = useState("")

    let listArr = useSelector((state) => state.TodoArr.todoList)

    const dispatch = useDispatch()

    // const { isAuthenticated } = useAuth0();


    const handelSubmit = (e) => {
        e.preventDefault()
        inputVal !== "" ? dispatch(addTodo(inputVal)) : alert(Error("User not login or input fild is empty"))
        setinputVal("")
    }

    return (
        <div>
            <form className="mt-6 flex items-center space-x-2" onSubmit={handelSubmit}>
                <input
                    type="text"
                    placeholder="Add a new todo..."
                    value={inputVal}
                    onChange={(e) => setinputVal(e.target.value)}
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
                <button
                    type='submit'
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTodo
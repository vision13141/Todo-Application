import React from 'react'
import Account from './Account'
import Search from './Search'
import AddTodo from './AddTodo'
import Todolist from './Todolist'

const Todo = () => {
    return (
        <div>
            <div className="container mx-auto p-4">
                <Account />
                <Search />
                <AddTodo />
                <Todolist />
            </div>
        </div>
    )
}

export default Todo
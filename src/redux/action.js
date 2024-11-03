export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodoo = (text) => ({
    type: ADD_TODO,
    payload: text,
});

export const editTodo = (id, text) => ({
    type: EDIT_TODO,
    payload: { id, text },
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});

export const addTodoAction = (addtodo) => ({
    type: 'ADD_TODO',
    payload: addtodo
});

export const toggleTodoComplete = (todoId) => ({
    type: 'TOGGLE_TODO',
    payload: todoId
});

export const editTodoAction = (todoId) => ({
    type: 'EDIT_TODO',
    payload: todoId
});

export const updateTodoAction = (updatedTodo) => ({
    type: 'UPDATE_TODO',
    payload: updatedTodo
});

export const deleteTodoAction = (todoId) => ({
    type: 'DELETE_TODO',
    payload: todoId
});
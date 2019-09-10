import uuid from 'uuid/v4';
const Reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [{
                    id: uuid(),
                    name: 'new todo',
                    description: null,
                    complete: false,
                    ...action.payload
                }, ...state.todos]
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, complete: !todo.complete }
                        : todo
                )
            };
        case 'EDIT_TODO': {
            return {
                ...state,
                selectedTodo: action.payload
            }
        }
        case 'UPDATE_TODO': {
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? action.payload
                        : todo)
            }
        }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        default:
            return state;
    }
}

export default Reducer;
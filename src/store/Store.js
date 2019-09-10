import { createStore } from 'redux';
import Reducer from '../reducers/Reducer';

const initalState = {
    todos: [],
    selectedTodo: null
}

export const store = createStore(
    Reducer,
    initalState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
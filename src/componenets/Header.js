import React from 'react';
import uuid from 'uuid/v4';
import { addTodoAction, editTodoAction } from '../actions/Action';
import { useDispatch } from 'react-redux';
import { HeaderContainer, HeaderButton } from './styledcomponenets/';

const Header = () => {
    //dispatch
    const dispatch = useDispatch();
    const addTodo = (addtodo) => dispatch(addTodoAction(addtodo));
    const editTodo = (todoid) => dispatch(editTodoAction(todoid));
    //add new todo
    const addNewToDo = () => {
        const newTodo = {
            id: uuid()
        }
        addTodo(newTodo);
        editTodo(newTodo.id);
    }
    //fill with todos
    const fillWithTodos = () => {
        let newTodo;
        for (let i = 0; i <= 100; i++) {
            newTodo = {
                id: uuid(),
                name: `New todo ${i + 1}`,
                description: `Description for ${i + 1}`,
                complete: i % 2 === 0
            }
            addTodo(newTodo);
        }
    }

    return (
        <HeaderContainer>
            <HeaderButton btnFill
                type='submit'
                onClick={fillWithTodos}
                title="Fill with dummy data +100">
                <i className="fas fa-fill-drip fa-2x"></i>
            </HeaderButton>
            <HeaderButton btnAddTodo
                type='submit'
                onClick={addNewToDo}
                title="Add Todo">
                <i className="fas fa-plus-circle fa-2x"></i>
            </HeaderButton>
        </HeaderContainer>
    );
}

export default Header;
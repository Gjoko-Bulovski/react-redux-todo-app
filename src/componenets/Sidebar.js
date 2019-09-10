import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodoAction, editTodoAction, addTodoAction } from '../actions/Action';
import { SidebarContainer, SidebarGroupInput, SidebarInput, SidebarTodoList, SidebarBtnEdit, SidebarBtnDelete, SidebarGroupBtn } from './styledcomponenets';
import uuid from 'uuid/v4';
import Link from './Link';

const Sidebar = () => {
    //state
    const todos = useSelector((state) => state.todos);
    const selectedTodo = useSelector((state) => state.selectedTodo);
    //dispatch
    const dispatch = useDispatch();
    const editTodo = (todoid) => dispatch(editTodoAction(todoid));
    const deleteTodo = (todoid) => dispatch(deleteTodoAction(todoid));
    const addTodo = (addtodo) => dispatch(addTodoAction(addtodo));

    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    const getFilteredTodos = () => {
        setFilteredTodos(todos.filter((todo) => {
            if (filter === 'all') return true;
            if (filter === 'done') return todo.complete;
            return !todo.complete;
        }));
    }

    // Update the filtered todos when there is change in store or in the filters
    useEffect(() => getFilteredTodos(), [todos, filter])

    const handleInputChange = (event) => {
        setFilter(event.target.value);
    }

    const addNewToDo = () => {
        const newTodo = {
            id: uuid()
        }
        addTodo(newTodo);
        editTodo(newTodo.id);
    }

    const renderNoItems = () => <div>Please <Link text='add new' onclick={addNewToDo} /> todo</div>
    const renderNoItemsAndFilter = () => <div>Please <Link text='add new' onclick={addNewToDo} /> todo or <Link text='clear' onclick={() => setFilter('all')} /> the filters</div>

    return (
        <SidebarContainer>
            <SidebarGroupInput>
                <SidebarInput
                    type='radio'
                    name='filter'
                    value="all"
                    onChange={handleInputChange}
                    checked={filter === 'all'}>
                </SidebarInput><span className="sidebarInputSpan">All</span>
                <SidebarInput
                    type='radio'
                    name='filter'
                    value="done"
                    onChange={handleInputChange}
                    checked={filter === 'done'}>
                </SidebarInput><span className="sidebarInputSpan">Done</span>
                <SidebarInput
                    type='radio'
                    name='filter'
                    value="notdone"
                    onChange={handleInputChange}
                    checked={filter === 'notdone'}>
                </SidebarInput><span className="sidebarInputSpan">Not Done</span>
            </SidebarGroupInput>
            {filteredTodos.length === 0 && filter === 'all' && renderNoItems()}
            {filteredTodos.length === 0 && filter !== 'all' && renderNoItemsAndFilter()}
            {filteredTodos.length > 0 &&
                <SidebarTodoList>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id} className={selectedTodo === todo.id ? 'selected' : 'sidebarli'}>
                            <span className={todo.complete ? 'complete' : 'sidebarname'}>{todo.name}</span>
                            <span className={todo.complete ? 'complete' : 'sidebardescription'} title={todo.description}>{todo.description}</span>
                            <SidebarGroupBtn>
                                <SidebarBtnEdit onClick={() => editTodo(todo.id)} title='Edit'><i className="fas fa-edit"></i></SidebarBtnEdit>
                                <SidebarBtnDelete onClick={() => deleteTodo(todo.id)} title="Delete"><i className="far fa-trash-alt"></i></SidebarBtnDelete>
                                <i className={todo.complete ? 'fas fa-check-circle' : ' fas fa-minus-square'}></i>
                            </SidebarGroupBtn>
                        </li>
                    ))}
                </SidebarTodoList>
            }
        </SidebarContainer>
    );
}

export default Sidebar;
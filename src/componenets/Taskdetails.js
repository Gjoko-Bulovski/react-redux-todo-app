import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodoAction, editTodoAction, toggleTodoComplete } from '../actions/Action';
import { TaskContainer, TaskBtnSelected, TaskFormGroup, TaskInput, TaskTextarea, TaskBtnClose } from './styledcomponenets';

const Taskdetails = () => {
    //dispatch
    const dispatch = useDispatch();
    const updateTodo = (updatedTodo) => dispatch(updateTodoAction(updatedTodo));
    const editTodo = (todoid) => dispatch(editTodoAction(todoid));
    const toggleTodo = (todoid) => dispatch(toggleTodoComplete(todoid));
    //selectedtodo - state
    const selectedTodo = useSelector((state) => state.todos.find(todo => todo.id === state.selectedTodo));
    //handle name
    const handleName = (event) => {
        const updatedTodo = {
            ...selectedTodo,
            name: event.target.value
        };
        updateTodo(updatedTodo);
    }
    //handle description
    const handleDescription = (event) => {
        const updatedTodo = {
            ...selectedTodo,
            description: event.target.value
        };
        updateTodo(updatedTodo);
    }
    // close details
    const closeDetails = () => {
        editTodo(null);
    }

    if (selectedTodo == null) return ('');

    return (
        <TaskContainer>
            <TaskBtnClose type='submit' onClick={closeDetails} title='Close'>
                <i className="fas fa-chevron-up"></i>
            </TaskBtnClose>
            <TaskBtnSelected onClick={() => toggleTodo(selectedTodo.id)}>
                <i className={selectedTodo.complete ? 'fas fa-check-circle fa-2x' : ' fas fa-minus-square fa-2x'}></i>
            </TaskBtnSelected>
            <TaskFormGroup>
                <label>Name:</label>
                <TaskInput
                    type="text"
                    name='name'
                    placeholder="Add Name"
                    value={selectedTodo.name ? selectedTodo.name : ''}
                    onChange={handleName}
                >
                </TaskInput>
            </TaskFormGroup>
            <TaskFormGroup>
                <label>Description:</label>
                <TaskTextarea
                    rows="4"
                    type="text"
                    name='description'
                    placeholder="Add Description"
                    value={selectedTodo.description ? selectedTodo.description : ''}
                    onChange={handleDescription}
                >
                </TaskTextarea>
            </TaskFormGroup>
        </TaskContainer>
    );
}

export default Taskdetails;
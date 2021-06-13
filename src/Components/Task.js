import React, { useState } from 'react';
import { RemoveTodo } from '../Redux/Actions';
import { ToggleTodo, EditTodo } from '../Redux/Actions';
import { useDispatch } from 'react-redux';
import  './Style.css';
const Task = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEdited, setIsEdited] = useState(false);
    const [todoTask, setTodoTask] = useState('');
    return (
        <div>


            <div className='task'>
                {isEdited ?
                    <input onChange={(e) => setTodoTask(e.target.value)} type='text' value={todoTask}></input>
                    :
                    <h5 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.task} </h5>}
            </div>


            <div >
            <button type="button" className="btn btn-xs  btn-warning img-circle" onClick={() => dispatch(ToggleTodo(todo.id))}>
                    {todo.completed ? <i className="fas fa-check-double"></i> : <i className="fas fa-times"></i>}
                </button>
                <button type="button" className="btn btn-xs  btn-info img-circle"onClick={() => {
                    dispatch(EditTodo({ ...todo, task: todoTask }))
                    setIsEdited(!isEdited)
                    setTodoTask(todo.task)
                }} >
<i class="fas fa-edit"></i>
                </button>


                <button type="button" className="btn btn-xs btn-danger img-circle" onClick={() => { dispatch(RemoveTodo(todo.id)) }}>&#xff38;</button>
            </div>



        </div>
    )
}

export default Task


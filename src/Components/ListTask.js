import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const todos = useSelector(state => state.Reducer)
    const visibilityFilter = useSelector(state => state.Filter.filter)
    console.log(todos)
    console.log('visibilityFilter', visibilityFilter)
    console.log("list" + todos)
    const FilteringTodos = (todos, visibilityFilter) => {
        const showingTodos = todos.map(el => <Task key={el.id} todo={el} />);
        switch (visibilityFilter) {
            case 'All':
                return showingTodos;

            case 'Done':
                return todos.filter(el => el.completed).map(el => <Task key={el.id} todo={el} />)

            case 'Undone':
                return todos.filter(el => !el.completed).map(el => <Task key={el.id} todo={el} />)
            default:
                return showingTodos;

        }
    }
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
            {FilteringTodos(todos, visibilityFilter)}
        </div>
    )
}

export default ListTask
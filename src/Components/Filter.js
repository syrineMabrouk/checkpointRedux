  
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {VisibilityTodo} from '../Redux/Actions';
import './Style.css'
const Filtre = () => {
    const dispatch = useDispatch();
    return (
        <div style ={{marginTop:"10px"}}>
            <ButtonGroup  >
            <Button  onClick={(e)=>dispatch(VisibilityTodo(e.target.id))} id='Done' variant="secondary">Done</Button>
            <Button onClick={(e)=>dispatch(VisibilityTodo(e.target.id))} id='Undone' variant="secondary">Undone</Button>
            <Button  onClick={(e)=>dispatch(VisibilityTodo(e.target.id))} id='All' variant="secondary">All</Button>
        </ButtonGroup>
        </div>
    )
}

export default Filtre

import React, {useState} from'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {AddTodo} from '../Redux/Actions';
const Add =() =>{
    const [totask, setTotask] = useState('') 
const dispatch = useDispatch()
return (

<div>
    
    <Form.Group>
  <Form.Control size="lg" type="text" placeholder="wirte your task here" onChange={(e)=>setTotask(e.target.value)}  />
  <br />
  
  </Form.Group>
   
  <Button  variant="outline-primary" onClick={()=>{dispatch(AddTodo({
     id: uuidv4(),
     completed: false,
     task: totask

  }))
  
  setTotask('')
}


  }>Add Task</Button>{' '}
    </div>
    
    )
}
export default Add
import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList';

const Todo = () => {
    const [task,setTask]=useState('');
    const [todo,setTodo]=useState([]);



    const changeHandler=e=>{

        setTask(e.target.value)
    }
    const submitHandler=e=>{
        e.preventDefault()
        const newTodo=[...todo,task];
        setTodo(newTodo);
        setTask('');
    }
    const deleteHandler=(indexValue)=>{
        const newTodo=todo.filter((todo,index)=>index!==indexValue)
        setTodo(newTodo);
    }
  return (
    <>
        <center>
            <div>
                <form onSubmit={submitHandler}>
                <h1>Add Todo List</h1>
                    <input type="text" name='task' value={task} onChange={changeHandler}/>&nbsp;&nbsp;
                    <input type="submit" value='Add' name='add'/>
                </form>
                <TodoList todoList={todo} deleteHandler={deleteHandler}/>
            </div>
        </center>
    </>
  )
}

export default Todo
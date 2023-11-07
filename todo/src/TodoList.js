import React from 'react'

const TodoList = ({todoList,deleteHandler}) => {
  return (
    <>
    {todoList.map((todo,index)=>
        <div key={index}>
            <h3>{todo}&nbsp;&nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h3>
        </div>
    )}
    </>
  )
}

export default TodoList
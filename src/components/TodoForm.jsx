import React, { useState } from 'react'

const TodoForm = () => {
const[value, setValue]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
}



  return (
    <form className='TodoForm' onSubmit={handleSubmit} >
    <input className='todo-input' value={value} onChange={(e)=>setValue(e.target.value)
    } placeholder='Enter Your Todo' type="text" name='todo' id='todo' />

    <button  type="submit" className='todo-btn'>Add New Task</button>
        
        
        </form>
  )
}

export default TodoForm
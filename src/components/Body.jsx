import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
const Body = () => {
  const todos = useSelector(store=> store.todos.todos)
  return (
    <div className='mt-2'>
        <div className='font-medium mb-3'>You have <span className='text-green-300'>{todos.length}</span> task(s) to complete.</div>
        <div>
          {/* rendering todos */}
          {todos.map((todo,index)=>(
         <Todo todo={todo} key={index}/>
          ))}
        </div>
       
        
    </div>
  )
}

export default Body;
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import { addTodo } from '../store/TaskSlice';
const Body = () => {
  const todos = useSelector(store=> store.todos.todos)
  const dispatch = useDispatch();
  console.log(todos)
  // const getAllLocalStorageItems = () => {
  //   // Get all keys present in local storage
  //   const keys = Object.keys(localStorage);
  
  //   // Iterate over each key and retrieve the corresponding value
  //   const items = keys.map((key) => {
  //     // Retrieve value from local storage and parse JSON if necessary
  //     const value = localStorage.getItem(key);
  //     return JSON.parse(value);
  //   });
  //    console.log(items)
  //    items?.forEach(element => {
  //     dispatch(addTodo(element))
  //    })
  // };
  // useEffect(()=>{
  // getAllLocalStorageItems()
  // },[])
  return (
    <div className='mt-2'>
        <div className='font-medium mb-3'>You have <span className='text-green-300'>{todos.length}</span> task(s) to complete.</div>
        <div>
          {todos.map((todo,index)=>(
         <Todo todo={todo} key={index}/>
          ))}
        </div>
       
        
    </div>
  )
}

export default Body;
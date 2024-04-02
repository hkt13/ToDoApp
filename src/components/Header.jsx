import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, changeTodo, editTaskMethod } from '../store/TaskSlice'
function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
const Header = () => {
  console.log('in header')
  const {editTask} = useSelector(store=> store.todos)
  const dispatch = useDispatch()
  const [inputTask, setInputTask] = useState('')
  useEffect(()=>{
    if (editTask.task!==undefined) {
      setInputTask(editTask.task)
    }
    
  },[editTask])
  
  const HandleClick=()=>{
    console.log(inputTask)
    if (Object.keys(editTask).length === 0) {
      console.log(editTask)
      const taskId = generateUniqueId()
      const task = {
      'task':inputTask,
       id: taskId,
       'completed': false
    }
    dispatch(addTodo({
      ...task
    }))
     
    }
    else{
      console.log(editTask)
      const task = {
        'task':inputTask,
         id: editTask.id,
         'completed': false
      }
      dispatch(changeTodo(task))
      dispatch(editTaskMethod({}))
      
    }
    
    setInputTask('');
    // if(inputTask){localStorage.setItem(taskId,JSON.stringify(task))};
  }
  return (
    <div className='flex gap-2 mb-2'>
        <input type="text" placeholder='Task To Be Done..' className='bg-[rgb(241_247_255)] border-b-[1px_solid] border-[rgba(0,_0,_0,_0.2)]' onChange={(e)=> {
            setInputTask(e.target.value)
          }}
          onKeyUp={(e)=>{
            if(e.key==='Enter'){
              HandleClick()
            }
          }}
          value={inputTask}/>
        <button className='bg-[#5a95ff] text-[white] px-[35px] py-[7px] rounded-[7px]' onClick={HandleClick}>Add</button>
    </div>
  )
}

export default Header;
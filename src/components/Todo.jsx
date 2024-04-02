import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { editTaskMethod, removeTodo, toogleTodo } from '../store/TaskSlice';
const Todo = ({todo}) => {
    const dispatch = useDispatch()
    
    const HandleEdit=()=>{
          dispatch(editTaskMethod(todo))
    }
    
    const handleToggle  = () => {
      dispatch(toogleTodo(todo.id));
    };
  return (
    <div className='bg-[white] rounded-[6px] p-[12px] flex justify-between mb-2'>
    <div className='flex gap-[10px] justify-center items-center'>
    <input 
    type="checkbox" 
    id="checkbox"
    checked={todo.completed} 
    onChange={handleToggle}  />
    <span className={`font-medium ${todo.completed&&'line-through text-[#a0a0a0]'}`}>{todo.task}</span>
    </div>
    <div className='flex gap-2'>
      {!todo.completed && <button className='bg-[rgb(90_149_255)] px-[12px] py-[10px] text-[white] rounded-[3px]' onClick={HandleEdit}>
        <FaRegEdit />
        </button>}  
            <button className='bg-[#eb5d5d] px-[12px] py-[10px] text-[white] rounded-[3px]' onClick={()=>{
            dispatch(removeTodo(todo.id));
            }}>
            <MdDelete />
            </button>
    </div>
  
</div>
  )
}

export default Todo;
import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'todos',
    initialState: {todos:[],editTask:{}},
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },

        toogleTodo:(state,action)=>{
           state.todos= state.todos.map(todo=>{
                if(todo.id!==action.payload) return todo;

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        },

        removeTodo:(state,action)=>{
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
            
        },
        editTaskMethod:(state,action)=>{
            state.editTask=action.payload;
        },
        changeTodo:(state,action)=>{
            const index = state.todos.findIndex(todo=> todo.id===action.payload.id)
            if (index!==-1) {
                state.todos[index] = action.payload;
            }
        }
    }
});

export const {addTodo, removeTodo, toogleTodo, editTaskMethod,changeTodo} = taskSlice.actions;
export default taskSlice.reducer;
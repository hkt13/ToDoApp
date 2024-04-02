import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from './TaskSlice';
//creating global store.
const store  = configureStore({
    reducer:{
        todos: TaskReducer,
    }
});

export default store;
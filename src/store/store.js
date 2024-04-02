import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from './TaskSlice';

const store  = configureStore({
    reducer:{
        todos: TaskReducer,
    }
});

export default store;
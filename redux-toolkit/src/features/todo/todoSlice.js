import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "Hello world" }],
    editTodo: null,
    isEditing: false,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

        startEditing: (state, action) => {
            state.editTodo = action.payload;
            state.isEditing = true;
        },

        updateTodo: (state, action) => {
            const { id, text } = action.payload;

            const todo = state.todos.find((todo) => todo.id === id);

            if (todo) {
                todo.text = text;
            }

            state.editTodo = null;
            state.isEditing = false;
        },
        
    }
})

export const {
    addTodo,
    removeTodo,
    startEditing,
    updateTodo
} = todoSlice.actions;

export default todoSlice.reducer
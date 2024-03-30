import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if(action.payload) {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);}
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((value) => value.id !== action.payload);
    },
    editTodo: (state,action) =>{
      const {id,newText} = action.payload;
      const edited = state.todos.find(value=> value.id == id)
      edited.text = newText
    }
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

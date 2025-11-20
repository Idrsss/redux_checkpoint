import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    filter: "all", // all | done | not
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        description: action.payload,
        isDone: false
      });
    },

    toggleTask: (state, action) => {
      const task = state.list.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },

    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.list.find(t => t.id === id);
      if (task) task.description = newText;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, toggleTask, editTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;

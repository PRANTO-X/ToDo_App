import { createSlice, nanoid } from "@reduxjs/toolkit";

// Load tasks from localStorage if available
const tasksFromStorage = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const initialState = {
  tasks: tasksFromStorage,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nanoid(),
        task: action.payload,
        completed: false,
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.task = newText;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    clearTask: (state) => {
      state.tasks = [];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTask, clearTask } = todoSlice.actions;
export default todoSlice.reducer;

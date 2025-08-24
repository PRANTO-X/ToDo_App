# 📝 Todo App

A simple **Todo App** built with **React** and **Redux Toolkit** that allows you to **add, delete, edit, and toggle tasks**. The app also **saves tasks in `localStorage`** so your tasks persist across page reloads.

---

## Features

* Add new tasks
* Delete tasks
* Edit existing tasks
* Toggle task completion (mark as done/undone)
* Clear all tasks
* Tasks persist in `localStorage`

---

## Folder Structure

```
📦src
 ┣ 📂app
 ┃ ┗ 📜store.js
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📜Todo.jsx
 ┃ ┗ 📜TodoList.jsx
 ┣ 📂features
 ┃ ┗ 📂todo
 ┃ ┃ ┗ 📜todoSlice.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

* **app/store.js** – Redux store configuration
* **components/Todo.jsx** – Input and form for adding tasks
* **components/TodoList.jsx** – Renders the list of tasks
* **features/todo/todoSlice.js** – Redux slice for managing tasks

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-link>
```

2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Usage

1. **Add Task:** Type in the input box and click "Add".
2. **Delete Task:** Click the "Delete" button next to a task.
3. **Edit Task:** Click the "Edit" button, modify the text, and save.
4. **Toggle Completion:** Click the checkbox to mark a task as completed or not.
5. **Clear Tasks:** Click "Clear All" to remove all tasks.

---

## Technologies Used

* React
* Redux Toolkit
* JavaScript
* CSS

---

## License

This project is open-source and free to use.

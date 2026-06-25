import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = task;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }

    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTask = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button onClick={() => editTask(index)}>
              Edit
            </button>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

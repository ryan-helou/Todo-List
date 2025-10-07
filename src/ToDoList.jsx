import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    { title: "Make a million", desc: "already done lol" },
    { title: "Be a baller", desc: "born done lol" },
    { title: "Make a trillion today", desc: "almost done lol" },
    { title: "Join FAANG", desc: "soon" },
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask(e) {
    e?.preventDefault();
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1>To Do List!</h1>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        ></input>
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </form>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default TodoList;

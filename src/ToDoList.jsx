import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    "Make a million",
    "Be a baller",
    "Make a trillion today",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  return (
    <div className="to-do-list">
      <h1>To Do List!</h1>

      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
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

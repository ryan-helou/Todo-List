import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    { title: "Make a million", desc: "already done lol" },
    { title: "Be a baller", desc: "born done lol" },
    { title: "Make a trillion today", desc: "almost done lol" },
    { title: "Join FAANG", desc: "soon" },
  ]);
  const [newTask, setNewTask] = useState({ title: "", desc: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewTask((t) => ({ ...t, [name]: value }));
  }

  function addTask(e) {
    e.preventDefault();
    if (newTask.title.trim() !== "") {
      setTasks((prev) => [...prev, { ...newTask }]);
      setNewTask({ title: "", desc: "" });
    }
  }

  function deleteTask(index) {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="to-do-list">
      <h1>To Do List!</h1>

      <form className="task-form" onSubmit={addTask}>
        <input
          className="title-input"
          type="text"
          name="title"
          placeholder="Title"
          value={newTask.title}
          onChange={handleChange}
        ></input>
        <input
          className="desc-input"
          type="text"
          name="desc"
          placeholder="Description"
          value={newTask.desc}
          onChange={handleChange}
        ></input>
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">
              <strong>{task.title}</strong>
              {task.desc ? <div className="desc">{task.desc}</div> : null}
            </span>
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

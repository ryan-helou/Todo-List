import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    { title: "Make a million", desc: "already done lol", dueAt: "2024-12-31" },
    { title: "Be a baller", desc: "born done lol", dueAt: "2025-12-25" },
    { title: "Join FAANG", desc: "too easy", dueAt: "2026-12-31" },
  ]);
  const [newTask, setNewTask] = useState({ title: "", desc: "", dueAt: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewTask((t) => ({ ...t, [name]: value }));
  }

  function compareDue(a, b) {
    if (!a.dueAt && !b.dueAt) return 0;
    if (!a.dueAt) return 1;
    if (!b.dueAt) return -1;
    return a.dueAt.localeCompare(b.dueAt);
  }
  function addTask(e) {
    e.preventDefault();
    if (newTask.title.trim() !== "") {
      setTasks((prev) => [...prev, { ...newTask }]);
      setNewTask({ title: "", desc: "", dueAt: "" });
    }
  }

  function deleteTask(index) {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  }

  function formatDateLocal(iso) {
    if (!iso) return null;
    return new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function isOverdue(iso) {
    if (!iso) return false;
    const now = new Date();

    const endOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59,
      999
    );

    const due = new Date(iso + "T23:59:59");

    return due < endOfToday;
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
        <input
          className="date-input"
          type="date"
          name="dueAt"
          value={newTask.dueAt}
          onChange={handleChange}
        />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
      <ol className="task-grid">
        {tasks
          .map((task, originalIndex) => ({ task, originalIndex }))
          .sort((a, b) => compareDue(a.task, b.task))
          .map(({ task, originalIndex }) => (
            <li key={originalIndex}>
              <span className="text">
                <strong className="task-title">{task.title}</strong>
                {task.desc ? (
                  <div className="task-desc">{task.desc}</div>
                ) : null}
                {formatDateLocal(task.dueAt) && (
                  <span
                    className={`date-chip ${
                      isOverdue(task.dueAt) ? "overdue" : ""
                    }`}
                  >
                    Due {formatDateLocal(task.dueAt)}
                  </span>
                )}
              </span>
              <button
                className="delete-button"
                onClick={() => deleteTask(originalIndex)}
              >
                Done
              </button>
            </li>
          ))}
      </ol>
    </div>
  );
}
export default TodoList;

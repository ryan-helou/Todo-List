import React, { useState, useEffect } from "react";
import Prism from "./Prism";

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem("todo.tasks");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (
          Array.isArray(parsed) &&
          parsed.every((t) => t && typeof t.title === "string")
        ) {
          return parsed;
        }
      }
    } catch {}
    return [
      {
        title: "Finish lab report",
        desc: "Submitted on Moodle 🎓",
        dueAt: "2025-12-10",
      },
      {
        title: "Book study room",
        desc: "4–6pm, silent floor",
        dueAt: "2025-10-14",
      },
      { title: "Morning run", desc: "3K easy pace 🏃", dueAt: "2025-11-10" },
    ];
  });
  useEffect(() => {
    try {
      localStorage.setItem("todo.tasks", JSON.stringify(tasks));
    } catch {}
  }, [tasks]);

  const [newTask, setNewTask] = useState({ title: "", desc: "", dueAt: "" });
  const [closingIds, setClosingIds] = useState([]);

  function markDone(index) {
    setClosingIds((ids) => (ids.includes(index) ? ids : [...ids, index]));
  }
  function handleCardTransitionEnd(e, index) {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "opacity") return;

    if (closingIds.includes(index)) {
      deleteTask(index);
      setClosingIds((ids) => ids.filter((id) => id !== index));
    }
  }

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
    <>
      <Prism
        animationType="rotate"
        timeScale={0.15}
        height={3}
        baseWidth={5}
        scale={4}
        hueShift={-0.23}
        colorFrequency={0.7}
        noise={0}
        glow={0.8}
      />
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
              <li
                key={originalIndex}
                className={closingIds.includes(originalIndex) ? "closing" : ""}
                onTransitionEnd={(e) =>
                  handleCardTransitionEnd(e, originalIndex)
                }
              >
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
                  onClick={() => markDone(originalIndex)}
                >
                  Done
                </button>
              </li>
            ))}
        </ol>
      </div>
    </>
  );
}
export default TodoList;

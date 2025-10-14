# 🪐 React To‑Do List

A sleek pixel‑styled **React To‑Do List** with glassmorphism, smooth fade‑out animations, and persistent LocalStorage.  
Completed items elegantly fade away like stars disappearing into space. 🌌

---

## 🚀 Features
- Add, edit, delete tasks
- Mark complete with **fade‑out animation**
- Sort by due date or creation time
- **LocalStorage** persistence — tasks survive refreshes
- Responsive layout; keyboard‑friendly (Enter to add)
- Retro pixel fonts + glassmorphism UI

---

## 🧠 Tech Stack
- **React** (Hooks: `useState`, `useEffect`)
- **Vite** (or CRA)
- **Vanilla CSS** (gradients, blur, transitions)
- **LocalStorage API**

---

## 🗂 Project Structure (suggested)
```
todolist/
├─ public/
│  └─ galaxy.jpg
├─ src/
│  ├─ components/
│  │  ├─ TaskItem.jsx
│  │  └─ TaskInput.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ index.html
├─ package.json
└─ README.txt
```

---

## ⚙️ Setup
```bash
# 1) Clone
git clone https://github.com/<your-username>/todolist.git
cd todolist

# 2) Install deps
npm install

# 3) Run dev server
npm run dev

# 4) Build for production
npm run build

# 5) Preview production build
npm run preview
```

> **Tip:** If using **Create React App**, replace the dev/build scripts with CRA equivalents:
```bash
npm start
npm run build
```

---

## 🧩 Usage
1. Type a task in the input box → press **Enter** or click **Add**.  
2. Click a task’s **✓ Done** to trigger the fade‑out; it then disappears.  
3. Use the **Sort** control (e.g., *By Due Date* / *Newest First*).  
4. Tasks persist across refreshes using `localStorage`.  

---

## 🎨 Styling Notes
Add these (example) Google Fonts to your CSS and apply them to headings/buttons:
```css
@import url('https://fonts.googleapis.com/css2?family=Bytesized&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');

h1 { font-family: "Bytesized", sans-serif; }
button { font-family: "Pixelify Sans", sans-serif; }
```

Suggested CSS snippets (background + glassmorphism):
```css
body{
  margin: 0;
  background-image: url('/galaxy.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.card{
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.25);
}
```

Fade‑out on completion (example):
```css
.completed{
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 400ms ease, transform 400ms ease;
}
```

---

## 🧪 Suggested Scripts (package.json)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

---

## 🗄 LocalStorage Shape (example)
```json
{
  "tasks": [
    { "id": "uuid-1", "text": "Buy milk", "due": "2025-10-15", "done": false, "createdAt": 1697300000000 },
    { "id": "uuid-2", "text": "Ship feature", "due": null, "done": true, "createdAt": 1697300500000 }
  ]
}
```

Key: `tasks` → array of task objects saved under a single key, e.g. `todo.tasks`.

---

## 🧱 Minimal Example (App.jsx)
```jsx
import { useEffect, useState } from "react";

export default function App(){
  const STORAGE_KEY = "todo.tasks";
  const [tasks, setTasks] = useState(() => {
    try{
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    }catch{ return []; }
  });
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if(!text.trim()) return;
    setTasks(prev => [...prev, { id: crypto.randomUUID(), text: text.trim(), done: false, createdAt: Date.now() }]);
    setText("");
  };

  const toggleDone = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
    // optional: remove after animation delay
    setTimeout(() => setTasks(prev => prev.filter(t => !(t.id === id && t.done))), 450);
  };

  return (
    <div className="to-do-list">
      <h1>🪐 React To‑Do List</h1>
      <div>
        <input value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=> e.key==='Enter' && addTask()} placeholder="Add a task..." />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map(t => (
          <li key={t.id} className={t.done ? "completed" : ""}>
            <span>{t.text}</span>
            <button onClick={()=>toggleDone(t.id)}>✓ Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 🧰 Troubleshooting
- **Blank page / 404 on GitHub Pages**: Ensure `base` is set in `vite.config.js` to `"/<repo-name>/"`.  
- **Fonts not applying**: Check the `@import` URLs and class names in your CSS.  
- **Image not found**: Place `galaxy.jpg` in `public/` and reference as `/galaxy.jpg`.  
- **Animations not firing**: Verify the class name (`completed`) is toggled **and** the CSS includes a transition.

---

## 🗺 Roadmap (ideas)
- Sub‑tasks & priorities
- Drag‑and‑drop ordering
- Tagging & filtering
- Export/Import JSON
- Optional backend (Supabase / Firebase) for sync

---

## ✅ License
MIT — use, modify, and distribute freely. Consider a ⭐ if you open‑source it!

---

## 🙌 Acknowledgments
Inspired by retro pixel art, glassmorphism design, and the React community.

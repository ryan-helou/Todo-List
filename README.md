Here you go — one clean, ready-to-paste `README.md` for your GitHub repo 👇

---

````markdown
# 🪐 React To-Do List

A sleek pixel-styled **React To-Do List** with glassmorphism, smooth fade-out animations, and persistent local storage — built with React Hooks and pure CSS.  
Tasks stay saved even after a refresh, and completed items elegantly fade away like stars disappearing into space. 🌌

---

## 🚀 Features

✅ Add, delete, and sort tasks by due date  
✅ Smooth **fade-out animation** when clicking “Done”  
✅ **Glassmorphism UI** with a galaxy background  
✅ **LocalStorage persistence** — tasks survive refreshes  
✅ Responsive grid layout  
✅ Retro pixel fonts for a nostalgic aesthetic  

---

## 🧠 Tech Stack

- **React** (`useState`, `useEffect`)
- **Vanilla CSS** (gradients, blur, and transitions)
- **LocalStorage API**
- **Vite** (or CRA)

---

## ⚙️ Setup

```bash
# Clone the repo
git clone https://github.com/<your-username>/todolist.git
cd todolist

# Install dependencies
npm install

# Run locally
npm run dev
````

Then open the local URL (usually **[http://localhost:5173](http://localhost:5173)**).

---

## 🧩 Folder Structure

```
📁 src/
 ┣ 📜 TodoList.jsx
 ┣ 📜 index.css
 ┣ 📜 main.jsx
 ┗ 📁 assets/
     ┗ galaxy.jpg
```

---

## 💡 How It Works

* **Add Task:** Fill in a title, description, and due date → click “Add”.
* **Mark Done:** Tasks fade out before being deleted.
* **LocalStorage:** All tasks persist between sessions.
* **Styling:** Cards use glassmorphism (`backdrop-filter: blur(6px)`) for a subtle, futuristic depth effect.

---

## 🎨 Style Highlights

**Fonts:** [Bytesized](https://fonts.google.com/specimen/Bytesized) + [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans)
**Palette:** Emerald-mint gradients on a dark galaxy background
**Animation Example:**

```css
.task-grid > li.closing {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
  filter: blur(1px);
  pointer-events: none;
}
```

---

## 📸 Demo

> 🚧 Coming soon — will be live on GitHub Pages 🌠
> *(After running `npm run build`, publish your `/dist` folder to GitHub Pages.)*

---

## 🔮 Future Ideas

* 🌗 Light/Dark mode toggle
* 🧭 Filter by upcoming or overdue tasks
* ✏️ Task editing modal
* 🔔 Notifications for due tasks

---

## 👨‍💻 Author

**Ryan Helou**
📫 [@ryan-helou](https://github.com/ryan-helou)

---

## 🪪 License

Released under the **MIT License**.
Feel free to use, remix, and learn from it.

```
```

# ✅ To-Do List

*A pixel-styled React to-do app where finishing a task makes it fade out like a star going dark.*

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white)

Each task carries a title, an optional description, and a due date. The list stays sorted by due date, undated tasks sink to the bottom, and anything past the end of today wears a red "overdue" chip. Tasks persist in localStorage under the `todo.tasks` key — the app validates the saved shape on load and falls back to three seed tasks if it's missing or corrupt.

Hitting Done doesn't delete right away. The card joins a `closingIds` set, CSS transitions its opacity, position, and blur over 220ms, and only on `transitionend` does it drop out of the array. The cards are frosted glass — translucent teal panels with a `backdrop-filter` blur — floating over a slowly rotating WebGL prism rendered with ogl. Bytesized and Pixelify Sans handle the retro lettering.

It's React 19 and Vite with no state library and no router, just `useState` and `useEffect` in a single component. Live at [ryan-helou.github.io/todo-list](https://ryan-helou.github.io/todo-list/), rebuilt and deployed on every push to main.

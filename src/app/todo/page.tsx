"use client";
import { useEffect, useReducer, useRef, useState } from "react";
import styles from "./page.module.css";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

type Filter = "all" | "active" | "completed";

type Action =
  | { type: "ADD"; text: string }
  | { type: "TOGGLE"; id: string }
  | { type: "DELETE"; id: string }
  | { type: "CLEAR_COMPLETED" }
  | { type: "LOAD"; tasks: Task[] };

function reducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: crypto.randomUUID(), text: action.text, completed: false },
      ];
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.id ? { ...t, completed: !t.completed } : t
      );
    case "DELETE":
      return state.filter((t) => t.id !== action.id);
    case "CLEAR_COMPLETED":
      return state.filter((t) => !t.completed);
    case "LOAD":
      return action.tasks;
  }
}

const STORAGE_KEY = "todo-tasks";

export default function TodoPage() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [filter, setFilter] = useState<Filter>("all");
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        dispatch({ type: "LOAD", tasks: JSON.parse(saved) });
      } catch {
        // ignore malformed data
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, hydrated]);

  function handleAdd() {
    const text = input.trim();
    if (!text) return;
    dispatch({ type: "ADD", text });
    setInput("");
    inputRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleAdd();
  }

  const filtered = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const activeCount = tasks.filter((t) => !t.completed).length;
  const hasCompleted = tasks.some((t) => t.completed);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <header className={styles.header}>
          <a href="/" className={styles.back}>← Back</a>
          <h1 className={styles.title}>To-do</h1>
        </header>

        {/* Input */}
        <div className={styles.inputRow}>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            placeholder="Add a new task…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className={styles.addBtn} onClick={handleAdd}>
            Add
          </button>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {(["all", "active", "completed"] as Filter[]).map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Task list */}
        <ul className={styles.list}>
          {filtered.length === 0 && (
            <li className={styles.empty}>
              {filter === "completed" ? "No completed tasks yet." : "Nothing here. Add a task!"}
            </li>
          )}
          {filtered.map((task) => (
            <li key={task.id} className={`${styles.item} ${task.completed ? styles.itemDone : ""}`}>
              <button
                className={`${styles.checkbox} ${task.completed ? styles.checkboxChecked : ""}`}
                onClick={() => dispatch({ type: "TOGGLE", id: task.id })}
                aria-label={task.completed ? "Mark as active" : "Mark as completed"}
              >
                {task.completed && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <span className={styles.taskText}>{task.text}</span>
              <button
                className={styles.deleteBtn}
                onClick={() => dispatch({ type: "DELETE", id: task.id })}
                aria-label="Delete task"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {/* Footer */}
        {tasks.length > 0 && (
          <footer className={styles.footer}>
            <span className={styles.count}>
              {activeCount} {activeCount === 1 ? "item" : "items"} left
            </span>
            {hasCompleted && (
              <button
                className={styles.clearBtn}
                onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
              >
                Clear completed
              </button>
            )}
          </footer>
        )}
      </div>
    </div>
  );
}

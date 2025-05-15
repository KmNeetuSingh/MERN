import React, { useState, memo } from "react";

// 5. Memoized TodoItem component
const TodoItem = memo(({ todo, toggleTodo, removeTodo }) => {
  console.log("Rendering:", todo.text);
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text} <button onClick={(e) => { e.stopPropagation(); removeTodo(todo.id); }}>x</button>
    </li>
  );
});

function TodoApp() {
  // Shared state (3)
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  // 2. Controlled form with real-time validation
  const validateInput = (value) => {
    if (value.trim() === "") {
      setError("Todo cannot be empty");
    } else if (value.length < 3) {
      setError("Todo must be at least 3 chars");
    } else {
      setError("");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    validateInput(e.target.value);
  };

  // 1. Add todo
  const addTodo = () => {
    if (error || input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), completed: false }]);
    setInput("");
  };

  // Toggle todo complete
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  // Remove todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      {/* 4. Using Fragment instead of div */}
      <h2>My Todo List</h2>

      {/* Controlled form with validation */}
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="Add new todo"
      />
      <button onClick={addTodo} disabled={!!error || input.trim() === ""}>
        Add
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Todo list */}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoApp;

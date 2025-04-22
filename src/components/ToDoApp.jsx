import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask(""); // Clear input after adding task
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2>To-Do List</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.button}>Add Task</button>
      </div>
      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <span
              style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
              onClick={() => handleToggleComplete(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { maxWidth: "400px", margin: "auto", textAlign: "center" },
  inputContainer: { display: "flex", gap: "10px", justifyContent: "center", marginBottom: "10px" },
  input: { padding: "8px", width: "70%", boxSizing: "border-box" },
  button: { padding: "8px", backgroundColor: "#28a745", color: "#fff", border: "none", cursor: "pointer" },
  taskList: { listStyle: "none", padding: 0 },
  taskItem: { display: "flex", justifyContent: "space-between", padding: "8px", borderBottom: "1px solid #ccc" },
  deleteButton: { backgroundColor: "#dc3545", color: "#fff", border: "none", cursor: "pointer" }
};

export default TodoApp;
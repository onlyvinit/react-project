import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    if (isEditing) {
      const updatedTasks = tasks.map((t) =>
        t.id === currentTaskId ? { ...t, text: task } : t
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setTask('');
    } else {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  // Handle task deletion
  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Handle task editing
  const handleEdit = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask(taskToEdit.text);
    setCurrentTaskId(id);
    setIsEditing(true);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </form>

      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id} className="task-item">
            <div>{t.text}</div>
            <button onClick={() => handleEdit(t.id)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => handleDelete(t.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

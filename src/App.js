import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([{ taskName: '', quantity: '', done: false }]);

  const addTask = () => {
    setTasks([...tasks, { taskName: '', quantity: '', done: false }]);
  };

  const handleTaskChange = (index, property, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][property] = value;
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      {tasks.map((task, index) => (
        <div key={index} className="todoGrid">
          <div className="column">
            <input
              type="text"
              placeholder="Task Name"
              value={task.taskName}
              onChange={(e) => handleTaskChange(index, 'taskName', e.target.value)}
            />
          </div>

          <div className="column">
            <select
              value={task.quantity}
              onChange={(e) => handleTaskChange(index, 'quantity', e.target.value)}>
              <option value="">Select Quantity</option>
              {Array.from({ length: 12}, (_, i) => i + 1).map((number) => 
                (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
            </select>
          </div>

          <div className="column">
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => handleTaskChange(index, 'done', e.target.checked)}
              />
              Done
            </label>
          </div>
        </div>
      ))}
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {/* TODO Task input and add button */}
      
      {/* TODO List of tasks */}
    </div>
  );
}

export default App;
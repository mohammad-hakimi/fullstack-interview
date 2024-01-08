import React, { useState } from 'react';
import AddButton from './Components/AddButton';
import Task from './Components/Task';
import TaskInput from './Components/TaskInput';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput onChange={value => {setTaskText(value)}} />
      <AddButton onSubmit={() => {
        addTask(taskText)
        setTaskText("");
      }}/>
      {
        tasks.map((task, i) => <Task key={i} title={task}/>)
      }
    </div>
  );
}

export default App;
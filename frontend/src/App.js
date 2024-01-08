import React, { useState } from 'react';
import AddButton from './Components/AddButton';
import Task from './Components/Task';
import TaskInput from './Components/TaskInput';
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const addTask = (task) => {
      if (taskText) {
          setTasks([...tasks, task]);
          setTaskText("");
      }

  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className={"textInputContainer"}>
          <TaskInput onSubmit={() => {
                  addTask(taskText)
          }} value={taskText} onChange={value => {setTaskText(value)}} />
          <AddButton onSubmit={() => {
                  addTask(taskText)
          }}/>
      </div>
     <div className={"taskContainer"}>
         {
             tasks.map((task, i) => <Task key={i} title={task}/>)
         }
     </div>
    </div>
  );
}

export default App;
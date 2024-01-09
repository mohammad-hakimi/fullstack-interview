import React, {useCallback, useEffect, useState} from 'react';
import AddButton from './Components/AddButton';
import Task from './Components/Task';
import TaskInput from './Components/TaskInput';
import "./App.css";
import {createTask, getTasks, updateTaskStatus} from "./Connection/task";

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");
    const [fetchControl, setFetchControl] = useState(false);
    const addTask = useCallback((task) => {
        if (task) {
            createTask(task).then(res => {
                setTasks(prev => [...prev, res])
                setTaskText("")
                setFetchControl(prev => !prev)
            });
        }

    }, []);

    useEffect(() => {
        getTasks().then(res => {
            console.log(res)
            setTasks(res)
        })
    }, [fetchControl]);

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <div className={"textInputContainer"}>
                <TaskInput onSubmit={() => {
                    addTask(taskText)
                }} value={taskText} onChange={value => {
                    setTaskText(value)
                }}/>
                <AddButton onSubmit={() => {
                    addTask(taskText)
                }}/>
            </div>
            <div className={"taskContainer"}>
                {
                    tasks.map((task, i) => <Task onChangeStatus={(checked) => {
                        updateTaskStatus(task.id, checked).then(() => {
                            setFetchControl(!fetchControl)
                        });
                    }} completed={task.completed} key={i} title={task.title}/>)
                }
            </div>
        </div>
    );
}

export default App;


import React, {useState} from "react"


export default function Task(
    {title}
) {
    const [isDone, setIsDone] = useState(false);
    return <div className={"taskBox"} onClick={() => setIsDone(prev => !prev)}>
        <h2  className={`taskTitle ${isDone ? "done" :""}`}>{title}</h2>
        <input  type="checkbox" checked={isDone} onChange={e => {
            e.stopPropagation()
            setIsDone(e.target.checked)
        }}/>
    </div>
}
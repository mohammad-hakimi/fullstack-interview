import React from "react"


export default function Task(
    {title, completed, onChangeStatus}
) {

    return <div className={"taskBox"} onClick={() => onChangeStatus(!completed)}>
        <h2 className={`taskTitle ${completed ? "done" : ""}`}>{title}</h2>
        <input type="checkbox" checked={completed} onChange={e => {
            e.stopPropagation()
            onChangeStatus(e.target.checked)
        }}/>
    </div>
}
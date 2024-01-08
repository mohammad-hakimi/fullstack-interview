

import React, {useState} from "react"


export default function Task(
    title
) {
    const [isDone, setIsDone] = useState(false);
    return <div >
        <h2>{title}</h2>
        <input type="checkbox" value={isDone}/>
    </div>
}
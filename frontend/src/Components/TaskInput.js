import React, {useState, useEffect} from "react"

export default function TaskInput(
    onChange = () => {  }
) {
    const [title, setTitle] = useState("");

    useEffect(() => {
        try {
            onChange?.(title)
        } catch {}
    }, [title])
    return <input type="text" value={title} onChange={e => {
            setTitle(e.target.value);
        }}/>
}
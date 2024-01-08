import React from "react"

export default function TaskInput(
    {onChange, value, onSubmit}
) {
    return <input onKeyDown={key => {
        if (key.key === "Enter") onSubmit()
    }} placeholder={"Write task..."} type="text" value={value} onChange={e => {
            onChange(e.target.value);
        }}/>
}
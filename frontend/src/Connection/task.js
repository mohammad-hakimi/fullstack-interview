export async function createTask(title) {
    return (await fetch("http://localhost:8000/api/create-task/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title
        })
    }))
}

export async function getTasks() {
    return (await fetch("http://localhost:8000/api/tasks/")).json()
}

export async function updateTaskStatus(id, status = true) {
    return (await fetch(`http://localhost:8000/api/task/${id}/status/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            status: status
        })
    }))
}
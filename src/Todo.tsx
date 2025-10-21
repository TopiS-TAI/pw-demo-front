type Props = {
    todo: {id: number, title: string, description: string, due: string},
    onDelete: (id: number) => void
}

function Todo({todo, onDelete}: Props) {

    async function deleteTodo(id: number) {
        const res = await fetch('http://localhost:8000/todo?id=' + id, {
            method: 'DELETE',
        })
        if (res.ok) {
            onDelete(id)
        } else {
            const message = await res.json()
            console.log(message)
        }
    }

    return (
        <article>
            <h2>{todo.title} <button onClick={() => deleteTodo(todo.id)}>X</button></h2>
            <p>{todo.description}</p>
        </article>
    )
}

export default Todo
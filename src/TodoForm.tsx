import type { FormEvent } from "react"

type Props = {
    onInsert: (todo: {id: number, title: string, description: string, due: string}) => void
}

function TodoForm({onInsert}: Props) {

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(e)

        const res = await fetch('http://localhost:8000/todo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title: e.target.title.value,
                description: e.target.description.value,
                due: '2020-01-02'
            })
        })
        if (res.ok) {
            console.log('added')
            const message = await res.json()
            const id = parseInt(message.message.slice(12))
            onInsert({id, title: e.target.title.value, description: e.target.description.value, due: '2020-12-21'})
        } else {
            const message = await res.json()
            console.log(message)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" /><br/>
            <textarea name="description" id="description"></textarea><br/>
            <input type="submit" value="Lisää" />
        </form>
    )
}

export default TodoForm
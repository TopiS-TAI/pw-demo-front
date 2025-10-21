import { useEffect, useState } from "react"
import Todo from "./Todo"
import TodoForm from "./TodoForm"

type TodoType = {id: number, title: string, description: string, due: string}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  function handleDelete(id: number) {
    setTodos((todos) => todos.filter(t => t.id !== id))
  }

  function handleInsert(todo: TodoType) {
    setTodos([...todos, todo])
  }

  return (
    <>
      <h1>mr todos</h1>
      <section id="todos">
        {todos?.map(t => (
          <Todo key={t.id} todo={t} onDelete={handleDelete}/>
        ))}
        <TodoForm onInsert={handleInsert}/>
      </section>
    </>
  )
}

export default App

import './App.css';
import React, { useState, useEffect } from 'react'
const logo = require('./logo.svg')

interface Todo {
  id: string;
  task: string;
}

interface EndpointResponse {
  todos: Todo[]
}

function App() {
  const [connectionToBackend, setConnectionToBackend] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetch('/api').then(res => res.json()).then((data => {
      console.log(data)
      setConnectionToBackend(data.message)
    })).catch(e => console.log(e))

    fetch('/api/todos').then(res => res.json()).then(((data: EndpointResponse) => {
      console.log(data)
      setTodos(data.todos)
    })).catch(e => console.log(e))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Checking Connection to Backend: {connectionToBackend}
        </p>
        <p>MongoConnection to Todos?: (should see todo's below)</p>
        <ul>{todos.map((todo, i) => <li key={i}>{todo.task}</li>)}</ul>
      </header>
    </div>
  );
}

export default App;

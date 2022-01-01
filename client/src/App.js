import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [connectionToBackend, setConnectionToBackend] = useState('')
  const [todos, setTodos] = useState('')
  useEffect(() => {

    fetch('/api').then(res => res.json()).then((data => {
      console.log(data)
      setConnectionToBackend(data.message)
    })).catch(e => console.log(e))

    fetch('/api/todos').then(res => res.json()).then((data => {
      console.log(data)
      setTodos(JSON.stringify(data))
    })).catch(e => console.log(e))

    return () => {
      // Noop
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Server Connection? : {connectionToBackend}
          MongoConnection to Todos?: {todos}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import AddTask from './AddTask'
import Task from './Task'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])
  

  console.log("Initializing...")
  console.log("current todolist: " + todo)


  function renderTasks(){
    const userValue = document.querySelector('.user-input').value
    setTodo(
      [
      ...todo,
      userValue
      
    ])
   
  }

  const tasks = todo.map((item, index) => {
    return (
    <Task key={index} id={index} task={item} handleClick={() => {clearTask(index)}}/>
    ) 
    
  })

  

  function clearAll() {
    setTodo([])
    console.log("Clearing...")
  }


  function clearTask(index) {
   const newTodo = todo.filter((item) => todo.indexOf(item) !== index);

   setTodo(newTodo)
    
    
  }
  
  

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask handleClick={renderTasks}/>
      {tasks}
      <footer>
        <p>You have {todo.length} pending tasks</p>
        <button className='clear-button' onClick={clearAll}>Clear All</button>
      </footer>
      
    </div>
  )
}

export default App

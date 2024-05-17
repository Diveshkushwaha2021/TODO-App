import { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DeleteTodoitems from './Components/DeleteTodoitems'
import AddTodo from './Components/AddTodo';
import Todoitems from './Components/Todoitems'
import AppName from './Components/AppName'
import WelcomeMessage from './Components/WelcomeMessage'

function App() {

  const [todoItems, setTodoItems] = useState([])
  const addNewTodoItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, purchaseDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  }

  const handleDeleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <div className='w-[600px] border rounded-md mx-auto bg-[#d6d6d6] px-10'>
      <AppName />
      <AddTodo onInputChange={addNewTodoItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <Todoitems TodoItems={todoItems} onDeleteClick={handleDeleteItems} />
    </div>
  )
}

export default App

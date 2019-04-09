import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState("");
  const [updatedTodo, setUpdatedTodo] = useState("");
  
  const [todoList, setTodoList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  function addTodo() {
    setTodoList([...todoList, {
      todoText: todo,
      isComplete: false
    }])
  }

  function deleteTodo(index) {
    setTodoList(todoList.filter((todo, i) => index !== i))
  }

  function updateTodo(index){
    let newTodo = todoList.slice();
    newTodo[index].todoText = updatedTodo;
    setTodoList(newTodo);
    setSelectedIndex("");
  }

  function toggleTodod(index){
    let newTodo = todoList.slice();
    newTodo[index].isComplete = !newTodo[index].isComplete;
    setTodoList(newTodo);
  }

  return (
    <div className="App">

      <div style={{ marginTop: "25px" }}>
        <input
          onChange={handleChange}
          placeholder="add todo.." />
        <button
          onClick={addTodo}
        >Add Todo</button>
      </div>

      {todoList.map((todo, index) => <div
        key={index.toString()}
      >
        {selectedIndex === index ? <div style={{ marginTop: "25px" }}>
          <input
            onChange={(e)=>setUpdatedTodo(e.target.value)}
            placeholder="update todo.." />
          <button
            onClick={()=>updateTodo(index)}
          >update Todo</button>
        </div> : null}

        <p
          onClick={()=>toggleTodod(index)}
          style={{ marginRight: "30px", color: todo.isComplete ? "red" : "black" }}
        >{index + 1} {todo.todoText}</p>

        <button
          onClick={() => setSelectedIndex(index)}
        >update</button>

        <button
          onClick={() => deleteTodo(index)}
        >delete</button>
      </div>)}

    </div>
  );
}

export default App;

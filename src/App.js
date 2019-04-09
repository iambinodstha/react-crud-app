import React, { useState } from 'react';
import {useTextBoxValue} from './textBoxValue';

import './App.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState('');

  const todoText = useTextBoxValue(""); 
  const updateText = useTextBoxValue(""); 

  function addTodo() {
    setTodoList([...todoList, {
      textValue: todoText.value,
      isComplete: false
    }])
  }

  function deleteTodo(index) {
    setTodoList(todoList.filter((todo, i) => index !== i))
  }

  function updateTodo(index){
    let newTodo = todoList.slice();
    newTodo[index].textValue = updateText.value;
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
        <input {...todoText}
          placeholder="add todo.." />
        <button
          onClick={addTodo}
        >Add Todo</button>
      </div>

      {todoList.map((todo, index) => <div
        key={index.toString()}
      >
        {selectedIndex === index ? <div style={{ marginTop: "25px" }}>
          <input {...updateText}
            placeholder="update todo.." />
          <button
            onClick={()=>updateTodo(index)}
          >update Todo</button>
        </div> : null}

        <p
          onClick={()=>toggleTodod(index)}
          style={{ marginRight: "30px", color: todo.isComplete ? "red" : "black" }}
        >{index + 1} {todo.textValue}</p>

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

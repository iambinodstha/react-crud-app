import React, { useState } from 'react';
import { useTextBoxValue } from './textBoxValue';
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

  // delete function delete selected 
  // item when clicked in delete button
  function deleteTodo(index) {
    setTodoList(todoList.filter((todo, i) => index !== i));
  }

  // updates todoText in selected list when update button is clicked
  function updateTodo(index) {
    let newTodo = todoList.slice();
    newTodo[index].textValue = updateText.value;
    setTodoList(newTodo);
    setSelectedIndex("");
  }

  function toggleTodod(index) {
    let newTodo = todoList.slice();
    newTodo[index].isComplete = !newTodo[index].isComplete;
    setTodoList(newTodo);
  }

  return (
    <div className="App">

      <div style={{ margin: "30px 0" }}>
        <input className="textBox" {...todoText} placeholder="add todo.." />
        <button className="button" onClick={addTodo}>Add Todo</button>
      </div>

      {todoList.map((todo, index) => <div
        key={index.toString()}>

        {/* update textbox will toggle when update button is clicked */}
        {selectedIndex === index ? <div>
          <input className="textBox" {...updateText} placeholder="update todo.." />
          <button className="button" onClick={() => updateTodo(index)}>update Todo</button>
        </div> : null}

        <div className="todoListsContainer">
          <p
            className="todoText"
            style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}
            onClick={() => toggleTodod(index)}
          >{index + 1}. {todo.textValue}</p>

          <div className="buttonContainer">
            <button style={{ background: "gray" }} className="actionButton" onClick={() => setSelectedIndex(index)}>update</button>
            <button className="actionButton" onClick={() => deleteTodo(index)}>delete</button>
          </div>
        </div>

      </div>)}

    </div>
  );
}

export default App;

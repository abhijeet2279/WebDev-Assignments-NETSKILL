import React from "react";
import "./index.css";
import TodoInput from "./Components/TodoInput";
import { useState } from "react";
import TodoItem from "./Components/TodoItem";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const createTodo = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  };

  const deleteTodo = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const updateTodo = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput createTodo={createTodo} />
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          index={index}
          item={item}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default App;

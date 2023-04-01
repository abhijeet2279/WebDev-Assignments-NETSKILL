const TodoItem = ({ item, index, deleteTodo, updateTodo }) => {
  return (
    <div className="todo-list">
      <li>{item.todo}</li>
      <div className="btns">
        <button onClick={() => updateTodo(index)}>Update</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;

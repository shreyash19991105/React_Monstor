import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const onSubmit = () => {};
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = newTodo.trim();
    setNewTodo("");

    setTodos([...todos, { id: new Date(), text: newTask }]);
  };
  return (
    <div>
      TodoList
      <div>
        {todos?.map((todo) => {
          return <div key={todo.id}>{todo.text}</div>;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button>click</button>
      </form>
    </div>
  );
};

export default TodoList;

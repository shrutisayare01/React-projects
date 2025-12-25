import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Todos</h2>
        <button onClick={logout} className="btn logout">
          Logout
        </button>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <Link
            key={todo.id}
            to={`/todos/${todo.id}`}
            className="todo-card"
          >
            <h4>{todo.title}</h4>
            <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Todos;

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TodoDetails = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [todoId]);

  if (!todo) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Todo Details</h2>

      <div className="card">
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>Title:</strong> {todo.title}</p>
        <p>
          <strong>Status:</strong>{" "}
          {todo.completed ? "Completed" : "Not Completed"}
        </p>
      </div>

      <Link to="/todos" className="btn">
        Back to Todos
      </Link>
    </div>
  );
};

export default TodoDetails;

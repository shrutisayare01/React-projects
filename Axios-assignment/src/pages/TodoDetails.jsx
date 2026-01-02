import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTodoById } from "../api/todoService";

const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodoById(id)
      .then((response) => {
        setTodo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todo:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h3>Loading todo...</h3>;
  if (!todo) return <h3>Todo not found</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo Details</h2>

      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {todo.completed ? "Completed" : "Pending"}
      </p>

      <Link to="/"> Back to Todo List</Link>
    </div>
  );
};

export default TodoDetails;

import React, { useState,useEffect } from "react";
import { getTodos } from "../api/todoService";
import { Link } from "react-router-dom";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTodos()
            .then((response) => {
                setTodos(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching todos:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <h3>Loading todos...</h3>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Todo List</h2>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/todo/${todo.id}`}>
                            {todo.title}
                        </Link>
                        {" "} -{" "}
                        <strong>
                            {todo.completed ? "Completed" : "Pending"}
                        </strong>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default TodoList;
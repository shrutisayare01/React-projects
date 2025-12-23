import { useContext, useRef } from "react";
import { TodoContext } from "./TodoContext";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef();

  const handleAdd = () => {
    if (inputRef.current.value.trim() === "") return;
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <input type="text" placeholder="Enter todo" ref={inputRef} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;

import React, { useState, useReducer } from "react";
import Todo from "./components/Todos";
// import { Container } from './styles';
const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
};
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.compelte };
        }
        return todo;
      });
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}
export default function TodosReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  console.log(todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span> Nome:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </>
  );
}

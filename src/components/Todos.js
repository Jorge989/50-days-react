import React from "react";

// import { Container } from './styles';

export default function Todos({ todo }) {
  return (
    <div>
      <h1>{todo}</h1>
      <button>Toggle</button>
      <button>Delete</button>
    </div>
  );
}

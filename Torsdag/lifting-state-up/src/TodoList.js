import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.todoText}
            <button
              onClick={e => {
                e.preventDefault();
                deleteTodo(todo.id);
              }}
            >
              delete
            </button>
            <button
              onClick={e => {
                e.preventDefault();
                editTodo(todo.id);
              }}
            >
              edit
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
};

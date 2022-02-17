import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import EditTodo from "./EditTodo";
import { GET_TODOS, DELETE_TODO } from "./actions";

const ListTodos = ({ GET_TODOS, todos, DELETE_TODO }) => {
  useEffect(() => {
    GET_TODOS();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} getTodos={GET_TODOS} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => DELETE_TODO(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
const mapStateToProps = ({ todos }) => {
  return { todos };
};

const mapDispatchToProps = { GET_TODOS, DELETE_TODO };

export default connect(mapStateToProps, mapDispatchToProps)(ListTodos);

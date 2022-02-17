import React, { Fragment, useState } from "react";
import AccountBox from "./account-box";
import { connect } from "react-redux";
import { postTodo } from "./utils";
import { GET_TODOS } from "./actions";

function InputTodo({ GET_TODOS }) {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    await postTodo(description);
    GET_TODOS();
    setDescription("");
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5 mb-5">PERN Todo List</h1>
      <AccountBox />
      <form className="d-flex mt-1" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}
const mapStateToProps = ({}) => {
  return {};
};

const mapDispatchToProps = { GET_TODOS };

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);

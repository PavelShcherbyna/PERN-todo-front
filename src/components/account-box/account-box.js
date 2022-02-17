import React, { useEffect } from "react";
import { connect } from "react-redux";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import SignupForm from "../signup-form";
import SigninForm from "../login-form";
import { LOG_OUT, LOGIN_JWT_CHECK, GET_TODOS } from "../actions";

function AccountBox(props) {
  useEffect(() => {
    props.LOGIN_JWT_CHECK();
  }, []);

  const style = {
    color: "gray",
    fontSize: "18px",
  };

  const view = props.isLoggedIn ? (
    <div>
      <AccountBoxRoundedIcon sx={{ fontSize: "36px", color: "#28a745" }} />
      <span style={style} className="m-1">
        {props.user.name}
      </span>
      <button
        style={{ color: "#dc3545" }}
        type="button"
        className="btn btn-link ml-5"
        onClick={props.LOG_OUT}
      >
        Log Out
      </button>
    </div>
  ) : (
    <div>
      <AccountBoxRoundedIcon sx={{ fontSize: "36px", color: "#dc3545" }} />
      <SignupForm />
      <SigninForm />
    </div>
  );

  return <>{view}</>;
}

function mapStateToProps(state) {
  return { user: state.currentUser, isLoggedIn: state.isLoggedIn };
}

const mapDispatchToProps = { LOG_OUT, LOGIN_JWT_CHECK, GET_TODOS };

export default connect(mapStateToProps, mapDispatchToProps)(AccountBox);

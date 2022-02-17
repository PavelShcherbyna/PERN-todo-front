import React, { Fragment } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { connect } from "react-redux";
import { SIGN_UP } from "../actions";

function SignupForm(props) {
  const handleSubmit = (event) => {
    // event.preventDefault();
    const data = new FormData(event);
    const actionData = {
      name: data.get("firstName"),
      email: data.get("email"),
      password: data.get("password"),
      passwordConfirm: data.get("passwordConfirm"),
    };
    props.SIGN_UP(actionData);
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-light ml-5"
        data-toggle="modal"
        data-target="#signupForm"
      >
        Sign Up
      </button>

      <div className="modal" id="signupForm">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Sign Up</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => console.log("X button pressed!")}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <Container component="main" maxWidth="xs">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    id="signUpForm"
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          type="password"
                          id="passwordConfirm"
                          label="Confirm password"
                          name="passwordConfirm"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => {
                  handleSubmit(document.getElementById("signUpForm"));
                }}
              >
                Sign Up
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => console.log("Close button pressed!")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { SIGN_UP };

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

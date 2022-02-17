import React, { Fragment } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { connect } from "react-redux";
import { SIGN_IN, GET_TODOS } from "../actions";

function SigninForm(props) {
  const handleSubmit = (event) => {
    // event.preventDefault();
    const data = new FormData(event);
    const actionData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    props.SIGN_IN(actionData);
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-light ml-1"
        data-toggle="modal"
        data-target="#signinForm"
      >
        Log In
      </button>

      <div className="modal" id="signinForm">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Log In</h4>
              <button type="button" className="close" data-dismiss="modal">
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
                    id="signInForm"
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="mail"
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
                          id="pass"
                          autoComplete="new-password"
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
                  handleSubmit(document.getElementById("signInForm"));
                }}
              >
                Log In
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

const mapDispatchToProps = { SIGN_IN, GET_TODOS };

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);

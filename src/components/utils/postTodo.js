import axios from "axios";
import { urlBase } from "./url";
import { showAlert } from "./index";

const postTodo = async (description) => {
  try {
    await axios({
      url: `${urlBase}/todos`,
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
      data: { description },
    });
  } catch (err) {
    showAlert("error", err.response.data.message);
    console.error(err.response.data.message);
  }
};

export default postTodo;

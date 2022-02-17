import axios from "axios";
import { urlBase } from "./url";
import { showAlert } from "./index";

const deleteTodo = async (id) => {
  try {
    return await axios({
      method: "DELETE",
      url: `${urlBase}/todos/${id}`,
    });
  } catch (err) {
    showAlert("error", err.response.data.message);
    console.error(err.response.data.message);
  }
};

export default deleteTodo;

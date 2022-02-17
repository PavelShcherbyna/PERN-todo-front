import axios from "axios";
import { urlBase } from "./url";
import { showAlert } from "./index";

const putDescription = async (description, id) => {
  try {
    await axios({
      url: `${urlBase}/todos/${id}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: { description },
    });
  } catch (err) {
    showAlert("error", err.response.data.message);
    console.error(err.response.data.message);
  }
};

export default putDescription;

import axios from "axios";
import { urlBase } from "./url";
import { showAlert } from "./index";

const getTodos = async () => {
  try {
    return await axios({
      url: `${urlBase}/todos`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });
    // const response = await axios(`${urlBase}/todos`);
    // const jsonData = await response.json();
    // return response;
  } catch (err) {
    console.error(err.response.data.message);
  }
};

export default getTodos;

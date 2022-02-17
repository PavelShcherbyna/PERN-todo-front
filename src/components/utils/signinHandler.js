import axios from "axios";
import { urlBase } from "./url";
import { showAlert } from "./index";

const signinHandler = async (data) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${urlBase}/login`,
      data,
    });

    if (response.data.status === "success") {
      localStorage.setItem("JWT", response.data.token);
      return response;
    } else {
      console.log("response from axios:", response);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
    console.log("Поймана ошибка:", err.response.data.message);
  }
};

export default signinHandler;

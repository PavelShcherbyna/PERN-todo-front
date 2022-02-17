import axios from "axios";
import { urlBase } from "./url";
import { showAlert } from "./index";

const getMe = async (data) => {
  try {
    const response = await axios({
      url: `${urlBase}/getMe`,
      headers: {
        authorization: `Bearer ${localStorage.getItem("JWT")}`,
      },
    });

    return response;
  } catch (err) {
    if (err.response.data.message.includes("User no longer exists.")) {
      localStorage.removeItem("JWT");
    }

    showAlert("error", err.response.data.message);
    console.error("Поймана ошибка:", err.response.data.message);
  }
};

export default getMe;

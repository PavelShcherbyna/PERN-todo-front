import axios from "axios";
import { urlBase } from "./url";
import { showAlert } from "./index";

const signupHandler = async (data) => {
  try {
    let response = await axios({
      method: "POST",
      url: `${urlBase}/signup`,
      data,
    });

    if (response.data.status === "success") {
      localStorage.setItem("JWT", response.data.token);
      return response;
      // } else {
      //   alert(result.message);
    }
  } catch (err) {
    if (err.response.data.message.includes("new row for relation")) {
      showAlert("error", "Please enter correct data!");
      return;
    }
    if (
      err.response.data.message.includes(
        'duplicate key value violates unique constraint "users_email_key"'
      )
    ) {
      showAlert("error", "User with this email already exists!");
      return;
    }
    showAlert("error", err.response.data.message);
    console.log("Поймана ошибка:", err.response.data.message);
    // if (err.message.includes("Failed to fetch")) {
    //   alert("Сервер не отвечает. Проверьте сетевое подключение.");
    // } else {
    //   alert("Непредвиденная ошибка!");
    // }
  }
};

export default signupHandler;

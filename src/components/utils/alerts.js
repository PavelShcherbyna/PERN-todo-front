const hideAlert = () => {
  const el = document.querySelector(".my-alert");
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'danger'
const showAlert = (type, msg) => {
  hideAlert();
  const markup = `<div class="my-alert my-alert--${type}">${msg}</div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlert, 5000);
};

export default showAlert;

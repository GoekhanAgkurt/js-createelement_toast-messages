console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const toast = document.createElement("li");
  toast.classList.add("toast-container__message");
  toast.textContent="hello there";
  toastContainer.append(toast);
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML="";
  // Exercise: Clear the stack of toast messages
});

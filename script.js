const backButton = document.getElementById("back-btn");

console.log(backButton);

backButton.addEventListener("click", () => {
  window.history.back();
});

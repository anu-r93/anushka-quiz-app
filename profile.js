const checkbox = document.querySelector('[data-js="dark-mode-toggle"]');
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

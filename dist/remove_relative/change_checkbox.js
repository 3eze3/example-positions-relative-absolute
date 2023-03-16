const secondCheckbox = document.querySelector(".main__btn--removePosition");
const container = document.querySelector(".main__wrapperBox--relative");
secondCheckbox.addEventListener("click", () => {
  container.classList.toggle("static");
});

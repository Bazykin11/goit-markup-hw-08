(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu_btn-open"),
    closeMenuBtn: document.querySelector(".menu_btn-close"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();

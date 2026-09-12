document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.style.display = open ? "" : "flex";
    if (!open) {
      nav.style.position = "absolute";
      nav.style.top = "78px";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.padding = "18px 4%";
      nav.style.background = "#07111f";
      nav.style.flexDirection = "column";
      nav.style.alignItems = "stretch";
    }
  });
}

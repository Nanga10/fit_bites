import { renderNavbar, TabHome, TabMenu, TabContact } from "./navbar.js";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderForm } from "./contact.js";

const content = document.getElementById("content");

renderNavbar();
renderHome();

TabHome.addEventListener("click", function () {
  content.innerHTML = " ";
  renderNavbar();
  renderHome();
});

TabMenu.addEventListener("click", function () {
  content.innerHTML = " ";
  renderNavbar();
  renderMenu();
});

TabContact.addEventListener("click", function () {
  content.innerHTML = " ";
  renderNavbar();
  renderForm();
});

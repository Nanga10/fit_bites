const content = document.getElementById("content");
const browsingTabs = document.createElement("div");

const renderNavbar = () => {
  browsingTabs.innerHTML =
    "<ul><li>Home</li><li>Menu</li><li>Contact Us<li></ul>";
  browsingTabs.setAttribute("id", "navbar"); // adding id to div
  content.appendChild(browsingTabs);
};

export { renderNavbar };

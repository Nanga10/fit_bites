const content = document.getElementById("content");
const browsingTabs = document.createElement("div");
const TabHome = document.createElement("div");
const TabMenu = document.createElement("div");
const TabContact = document.createElement("div");

const renderNavbar = () => {
  TabHome.innerHTML = `<p>Home<p>`;
  TabHome.setAttribute("id", "tab"); // adding id to div
  TabMenu.innerHTML = `<p>Menu<p>`;
  TabMenu.setAttribute("id", "tab");
  TabContact.innerHTML = `<p>Contact Us<p>`;
  TabContact.setAttribute("id", "tab");
  browsingTabs.setAttribute("id", "navbar");

  browsingTabs.appendChild(TabHome); //appending tabs to navbar div
  browsingTabs.appendChild(TabMenu);
  browsingTabs.appendChild(TabContact);

  content.appendChild(browsingTabs); //appending navbar div to page content div
};

export { renderNavbar, TabHome, TabMenu, TabContact };

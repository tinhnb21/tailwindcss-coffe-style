const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    //click to toggle menu icon
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("ct-topmenu-expanded");
  } else {
    //click outside from toggle menu icon
    if (topMenu.classList.contains("ct-topmenu-expanded")) {
      topMenu.classList.remove("ct-topmenu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});

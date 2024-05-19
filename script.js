const sticky_bar_element = document.getElementById("sticky-bar");

const handleToggleMenu = () => {
  if (sticky_bar_element.classList.contains("hidden"))
    sticky_bar_element.classList.remove("hidden");
  else sticky_bar_element.classList.add("hidden");
};

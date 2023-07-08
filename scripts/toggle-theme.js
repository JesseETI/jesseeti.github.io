/**
 * Dark / Light Theme Logic
 */

const switcher = document.getElementById("switch-theme");

//classes for modes
const darkTheme = "dark-theme";
const lightIcon = "ri-sun-line";

// get the user's preferred theme from local storage or default to light
const preferredTheme =
  localStorage.getItem("selected-theme") ||
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const preferredIcon =
  localStorage.getItem("selected-icon") ||
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "ri-sun-line"
    : "ri-moon-line";

// set the initial theme and icon based on the user’s preference
document.body.classList.toggle(darkTheme, preferredTheme === "dark");
switcher.classList.toggle(lightIcon, preferredIcon === "ri-sun-line");

switcher.addEventListener("click", () => {
  // toggle dark / light theme state (classes)
  document.body.classList.toggle(darkTheme);
  switcher.classList.toggle(lightIcon);

  // save the current theme and icon to local storage
  localStorage.setItem(
    "selected-theme",
    document.body.classList.contains(darkTheme) ? "dark" : "light"
  );
  localStorage.setItem(
    "selected-icon",
    switcher.classList.contains(lightIcon) ? "ri-sun-line" : "ri-moon-line"
  );
});

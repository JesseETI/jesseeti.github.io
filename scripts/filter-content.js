/*
 ** Logic to filter content based on the tab clicked
 */

// arrange the tabs and their content in variables
const tabButtons = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabButtons.forEach((tab) => {
  tab.addEventListener("click", () => {
    /*
     * remove the active class from all data (tab) content and add the active class
     * follow same process for the tabs
     *
     */
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("filter-content-active");
    });

    target.classList.add("filter-content-active");

    tabButtons.forEach((tab) => {
      tab.classList.remove("filter-tab-btn-active");
    });

    tab.classList.add("filter-tab-btn-active");
  });
});

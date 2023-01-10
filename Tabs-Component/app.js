const $ = (selector) => document.querySelectorAll(selector);

const tabs = $(".tabs__button");
const contents = $(".content");

tabs.forEach((tab, i) => {
  // Add a listener to each tab. i will store the index of the tab clicked.
  tab.addEventListener("click", () => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
      contents[i].classList.remove("active");
    } else {
      tabs.forEach((tab, j) => {
        // Remove .active from every single tab.
        tab.classList.remove("active");
        contents[j].classList.remove("active");
      });

      // Add .active to the tab clicked and its content.
      tab.classList.add("active");
      contents[i].classList.add("active");
    }
  });
});

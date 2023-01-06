document.addEventListener("DOMContentLoaded", () => {
  const markAllAsReadBtn = document.querySelector("#mark-all-as-read");
  const counter = document.querySelector(".counter");
  const redCircles = document.querySelectorAll(".circle--red");
  const unreadNotifications = document.querySelectorAll(".bg-color-very-light-grayish-blue");

  markAllAsReadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (counter.innerHTML === "3") {
      counter.innerHTML = 0;
    } else {
      counter.innerHTML = 3;
    }
    for (let index = 0; index < 3; index++) {
      redCircles[index].classList.toggle("circle--red");
      unreadNotifications[index].classList.toggle(
        "bg-color-very-light-grayish-blue"
      );
    }
  });
});

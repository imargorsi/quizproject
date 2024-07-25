const displayUsername = document.querySelector(".quiz__pick__heading1");

const userName = localStorage.getItem("username");

const categoryOptions = document.querySelectorAll(".single__category__box");

displayUsername.innerHTML = `Hey, ${userName}`;

categoryOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    const selectOption = e.currentTarget.querySelector(
      ".single__category__box__heading"
    ).innerHTML;

    const selectCategory = "category";
    localStorage.setItem(selectCategory, selectOption);
    window.location.href = "http://localhost:5173/questions.html";
  });
});

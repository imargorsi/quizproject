const popupBg = document.querySelector(".popup__bg");

const gamePlayBtns = document.querySelectorAll("#gameplaybtn");

for (let i = 0; i < gamePlayBtns.length; i++) {
  gamePlayBtns[i].addEventListener("click", () => {
    popupBg.style.display = "flex";
  });
}

const popupCloseBtn = document.querySelector(".popup__close__btn");

popupCloseBtn.addEventListener("click", () => {
  popupBg.style.display = "none";
});

const gameContinueBtn = document.querySelector(".popup__btn");

const userInputBox = document.querySelector(".modern-input");

gameContinueBtn.addEventListener("click", () => {
  const userInputValue = userInputBox.value;
  let userName = null;

  if (userInputValue === "") {
    alert("please enter your name");
    console.log(userInputValue, "please enter the name");
  } else if (userInputValue.length < 3) {
    alert("enter at least 3 characters");
    console.log(userInputValue, "enter at least 3 characters");
  } else if (/\d/.test(userInputValue)) {
    alert("name should not contain any numbers");
    console.log(userInputValue, "name should not contain any numbers");
  } else {
    userName = userInputValue;
    localStorage.setItem("username", userName);
    console.log(userInputValue, "this is your name");
    window.location.href = "quiz.html";
  }
});

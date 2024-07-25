const questionOptions = document.querySelectorAll(".answer__options");
const submitBtn = document.querySelector(".submit__btn");
submitBtn.classList.add("disabled");

const questionCounter = document.querySelector("#question__counter");
import Pakistan from "../JSONQuestion/pakistan.json";
import Islam from "../JSONQuestion/islam.json";
import GK from "../JSONQuestion/gk.json";

let intialValue = 0;
questionCounter.innerHTML = intialValue;

const selectCategory = localStorage.getItem("category");

const skillBar = document.querySelector(".skillBarValue");
const questionHeading = document.querySelector(".question__heading");
const singleAnswers = document.querySelectorAll(".answer__single");

let questions;

if (selectCategory) {
  if (selectCategory === "Pakistan") {
    questions = Pakistan;
  } else if (selectCategory === "Islam") {
    questions = Islam;
  } else if (selectCategory === "General Knowledge") {
    questions = GK;
  }
}
const fullCounter = document.querySelector("#full_counter");
fullCounter.innerHTML = questions.length;

let userScore = 0;
let userSelected = "";
let selectOption;

const counter = () => {
  if (intialValue < questions.length) {
    questionCounter.innerHTML = intialValue + 1;
    skillBar.classList.add(`value-${intialValue + 1}`);
    questionHeading.innerHTML = questions[intialValue].question;

    singleAnswers.forEach((answer, index) => {
      answer.innerHTML = questions[intialValue].options[index];
    });

    questionOptions.forEach((opt) => opt.classList.remove("active__answer"));

    submitBtn.classList.add("disabled");
    userSelected = "";
  } else {
    alert("Your Score is: " + userScore);
    console.log(userScore);
    localStorage.setItem("userScore", userScore);
  }
};

questionOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    questionOptions.forEach((opt) => opt.classList.remove("active__answer"));
    selectOption = event.currentTarget.classList.add("active__answer");
    userSelected =
      event.currentTarget.querySelector(".answer__single").innerHTML;
    submitBtn.classList.remove("disabled");
  });
});

submitBtn.addEventListener("click", () => {
  if (!submitBtn.classList.contains("disabled")) {
    if (userSelected === questions[intialValue].answer) {
      userScore++;
      console.log(selectOption);
    } else {
      userScore--;
      console.log(selectOption);
    }
    intialValue++;
    counter();
  } else {
    Swal.fire({
      title: "Select Your Answer",
      text: "Choose your answer to continue",
      icon: "question",
    });
  }
});

counter();

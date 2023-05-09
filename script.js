"use strict";
const rating = document.querySelector(".rating-container");
const containerRate = document.querySelector(".container");
const tyState = document.querySelector(".ty-state");
const btnSubmit = document.querySelector(".submit");
const rated = document.querySelector(".rated");

const rateChildren = Array.from(rating.children);

let selected;

rating.addEventListener("click", function (e) {
  rateChildren.find((c) => c.id === e.target.id).classList.add("rate-selected");
  rateChildren.find((c) => c.id === e.target.id).classList.remove("rate-btn");
  if (selected && selected.id !== e.target.id) {
    selected.classList.remove("rate-selected");
    selected.classList.add("rate-btn");
    selected = rateChildren.find((c) => c.id === e.target.id);
  } else if (selected && selected.id === e.target.id) {
    return;
  } else {
    selected = rateChildren.find((c) => c.id === e.target.id);
  }
});

btnSubmit.addEventListener("click", function () {
  containerRate.classList.add("hide");
  tyState.classList.remove("hide");
  rated.textContent = `You selected ${selected.id} out of 5`;
});

import _ from "lodash";
import "./style.css";

import {
  fruitPriceSum,
  applePrice,
  lycheePrice,
  bananaPrice,
} from "./js/hw-1.js";
import { returnSumNumber } from "./js/hw-2.js";
import { FirstLetterCapital } from "./js/hw-3.js";
import { getStudentsPairs } from "./js/hw-4.js";
import { getAverage } from "./js/hw-5.js";
import { getSubjects, students } from "./js/hw-6.js";
import { latvia, getMiddleTaxes } from "./js/hw-7.js";
import { OstapName } from "./js/hw-8.js";
import { generateTilesInterval } from "./js/hw-9.js";

function output1() {
  const outputHw1 = document.getElementById("hw1");
  outputHw1.innerHTML = fruitPriceSum(applePrice, lycheePrice, bananaPrice);
}
document.getElementById("task1").addEventListener("click", output1);

//сумма всех фруктов
function output2() {
  const outputHw2 = document.getElementById("hw2");
  const minNumber = 1;
  const maxNumber = 3;
  const skippingEvenNumbers = true;
  outputHw2.innerHTML = returnSumNumber(
    minNumber,
    maxNumber,
    skippingEvenNumbers
  );
}
document.getElementById("task2").addEventListener("click", output2);

function output3() {
  const outputHw3 = document.getElementById("hw3");
  const text = "мАрИнА";
  outputHw3.innerHTML = FirstLetterCapital(text);
}
document.getElementById("task3").addEventListener("click", output3);

function output4() {
  const outputHw4 = document.getElementById("hw4");
  outputHw4.innerHTML = getStudentsPairs();
}
document.getElementById("task4").addEventListener("click", output4);

function output5() {
  const outputHw5 = document.getElementById("hw5");
  const numbers = [1, 2, 3];
  outputHw5.innerHTML = getAverage(numbers);
}
document.getElementById("task5").addEventListener("click", output5);

function output6() {
  const outputHw6 = document.getElementById("hw6");
  outputHw6.innerHTML = getSubjects(students[0]);
}
document.getElementById("task6").addEventListener("click", output6);

function output7() {
  const outputHw7 = document.getElementById("hw7");
  outputHw7.innerHTML = getMiddleTaxes.call(latvia);
}
document.getElementById("task7").addEventListener("click", output7);

function output8() {
  const outputHw8 = document.getElementById("hw8");
  outputHw8.innerHTML = OstapName;
}
document.getElementById("task8").addEventListener("click", output8);

function output9() {
  const outputHw9 = document.querySelector(".box-wrapper");
  outputHw9.innerHTML = generateTilesInterval();
}
document.getElementById("task9").addEventListener("click", output9);

document.body.appendChild(component());

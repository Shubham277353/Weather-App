import { setDegree } from "./displayData";

const convertBtn = document.getElementById("convert-btn");

let isFahrenheit = true;

export function convertDegree() {
  convertBtn.addEventListener("click", () => {
    isFahrenheit = !isFahrenheit;
    setDegree(isFahrenheit);
  });
}



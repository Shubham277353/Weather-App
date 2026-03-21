import { setDegree } from "./displayData";
import { getArray } from "./requiredData";

const convertBtn = document.getElementById("convert-btn");

let isFahrenheit = true;

export function convertDegree() {
  convertBtn.addEventListener("click", () => {
    const array = getArray();
    if(array.length === 0) return;
    isFahrenheit = !isFahrenheit;
    setDegree(isFahrenheit);
  });
}



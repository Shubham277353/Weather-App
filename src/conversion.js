const convertBtn = document.getElementById("convert-btn");

let isFahrenheit = true;

export default function convertDegree() {
  convertBtn.addEventListener("click", () => {
    isFahrenheit = !isFahrenheit;
    console.log(isFahrenheit ? "F" : "C");
  });
}

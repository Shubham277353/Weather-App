import { apiLogic } from "./apiLogic";

const searchBtn = document.getElementById("search-box");
const searchInput = document.getElementById("search-input");
const form = document.querySelector("form");

export default function searchBtnDom() {

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const city = searchInput.value;
        if(!city) return;
        apiLogic(city);
    })
}

import "./style.css";
import { apiLogic } from "./apiLogic";
import searchDOM from "./searchDOM";
import { neededData } from "./requiredData";

apiLogic();
searchDOM();

setTimeout(()=>{
    neededData();
},1000);
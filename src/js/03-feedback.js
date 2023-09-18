
import throttle from "lodash.throttle";
 const emailInput = document.querySelector(".feedback-form email");
 const textArea = document.getElementsByTagName(".feedback-form textarea");
 const list = document.querySelector(".feedback-form");
 const KeyIn = "feedback-form-state";
list.addEventListener("input", throttle(inputInfo, 500));

const formInfo = {};
function inputInfo(event){
    formInfo[event.target.name] = event.target.value;
    localStorage.setItem(KeyIn,JSON.stringify(formInfo));
    
}
const info = JSON.parse(localStorage.getItem(KeyIn));
list.addEventListener("sumbit", submitEvent);
function submitEvent(event){
   if(info < 2){
    alert("Потрібно заповнити усі поля")
   } else{

    console.log(info.email, info.message);
    event.preventDefault()
 
    localStorage.removeItem(KeyIn);}
}
// list.on("set", setForm)
// function setForm( info){
//     localStorage.getItem(KeyIn);
//     emailInput.value = info.email;
//     textArea.value = info.massage;
// }
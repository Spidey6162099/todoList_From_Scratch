import { all } from "..";
import { displayTodos } from "./todorender"
function setupHomeAndAll(){
    let mainTitle=document.querySelector(".header>.pagename");

    const homebtn=document.querySelector(".sidebar>.home");
    homebtn.addEventListener('click',()=>{
            mainTitle.textContent='Home';
            displayTodos();
    })

    const allbtn =document.querySelector(".sidebar>.all");  
    allbtn.addEventListener('click',()=>{
        mainTitle.textContent='All';
        displayTodos();
    })
}
export {setupHomeAndAll}
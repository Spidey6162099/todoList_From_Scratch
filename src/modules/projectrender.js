import { project } from "../project";
import { projects } from "..";
import { displayTodos } from "./todorender";

function displayProjects(){
    const projectList=document.querySelector(".projects>.projectList");
    projectList.textContent="";


    projects.forEach((proj)=>{
        let currentObj=document.createElement("li");
        currentObj.textContent=proj.name;


        currentObj.addEventListener('click',(e)=>{
            document.querySelector(".header>.pagename").textContent=proj.name;
            displayTodos();
        })

        projectList.appendChild(currentObj)
    })
}

export{displayProjects}
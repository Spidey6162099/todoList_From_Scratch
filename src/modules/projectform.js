import { project } from "../project";
import { projectHolder } from "../projectHolder";
import { projects } from "..";
import { displayProjects } from "./projectrender";

function setUpProjectForm(){
    const addProjectbtn=document.querySelector(".projects>button");
    const addProjectDialog=document.querySelector(".projectinput");
    

    addProjectbtn.addEventListener('click',(e)=>{
        addProjectDialog.showModal();
    })
}

function buttonsProjectForm(){
    const submitProjectbtn=document.querySelector(".projectinputform>.submit");
    const addProjectDialog=document.querySelector(".projectinput");

    submitProjectbtn.addEventListener('click',(e)=>{
        e.preventDefault();

        let projectName=document.querySelector(".projectinputform>#projectname");
      

        let newobj=new project(projectName.value);
       
       
        projects.push(newobj);

        projectName.value="";
        addProjectDialog.close();

        displayProjects();
    })

    const cancelProjectbtn=document.querySelector(".projectinputform>.cancel")

    cancelProjectbtn.addEventListener('click',()=>{
        e.preventDefault();
        let projectName=document.querySelector(".projectinputform>#projectname");
        projectName.value="";
        addProjectDialog.close();

    })


}

export{setUpProjectForm,buttonsProjectForm};
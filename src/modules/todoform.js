import { project } from "../project";
import { projectHolder } from "../projectHolder";
import { projects ,home,all} from "..";
import { todo } from "../todos";
import { addtodo,displayTodos } from "./todorender";

function setUpTodoForm(){
    const openTodoFormbtn=document.querySelector(".tasks>.addToDo");

    const openTodoFormDialog=document.querySelector(".todoinput")

    openTodoFormbtn.addEventListener('click',()=>{
        openTodoFormDialog.showModal();
    })
    buttonsTodoForm()
}

function buttonsTodoForm(){
    const openTodoFormSubmitbtn=document.querySelector(".todoinputform>.submit");
    const openTodoFormDialog=document.querySelector(".todoinput")

    openTodoFormSubmitbtn.addEventListener('click',(e)=>{
        e.preventDefault();

        const todoName=document.querySelector(".todoinputform>#todoname");

        const todoDesc=document.querySelector(".todoinputform>#todoDescription")


        const todoPriority=document.querySelector(".todoinputform>#todoPriority");
        
        const todoDate=document.querySelector(".todoinputform>#tododate")

        console.log(todoDate.value)

        let newObj=new todo(todoName.value,todoDesc.value,todoPriority.value);
            
            addtodo(newObj);
            todoName.value="";
            todoDesc.value="";
            openTodoFormDialog.close()

            displayTodos();

    })

    const cancelTodoFormbtn=document.querySelector(".todoinputform>.cancel");

    cancelTodoFormbtn.addEventListener('click',()=>{
        e.preventDefault();

        const todoName=document.querySelector(".todoinputform>#todoname");
        todoName.value="";
        const todoDesc=document.querySelector(".todoinputform>#todoDescription")
        todoDesc.value=""


        openTodoFormDialog.close()

    })
}

export{setUpTodoForm,buttonsTodoForm}
import { home,projects,all} from "..";
import { project } from "../project";
import addimg from '../icons8-add-100.png';
import delimg from '../icons8-delete-100.png'


function addtodo(todoObj){
    let headertext=document.querySelector(".header>.pagename").textContent;

    if(headertext.toLowerCase()==="home"){
        home.addNewTodo(todoObj);
    }

    else if(!(headertext.toLowerCase()==="all")) {
        console.log('hello')
        let projectObj;

        for(let i=0;i<projects.length;i++){
            if(projects[i].name===headertext.toLowerCase()){
                projectObj=projects[i];
                break;
            }
        }

        projectObj.addNewTodo(todoObj);

    }

    all.addNewTodo(todoObj);
}

function deletetodo(todoObj){
    let headertext=document.querySelector(".header>.pagename").textContent;

    if(headertext.toLowerCase()==="home"){
        home.deleteTodo(todoObj);
    }


    else if(!headertext.toLowerCase()==="all"){
        
        let projectObj;

        for(let i=0;i<projects.length;i++){
            if(projects[i].name===headertext.toLowerCase()){
                projectObj=projects[i];
                break;
            }
        }

        projectObj.deleteTodo(todoObj);

    }

    all.deleteTodo(todoObj)

    
}

function displayTodos(){
    let headertext=document.querySelector(".header>.pagename").textContent;
        let currentProj;
        if(headertext.toLowerCase()==="home"){
            currentProj=home;
        }

        else if(headertext.toLowerCase()==="all"){
            currentProj=all;
        }

        else{

            for(let i=0;i<projects.length;i++){
                if(projects[i].name===headertext.toLowerCase()){
                    currentProj=projects[i];
                    break;
                }
            }
        }

        
        
        if(currentProj!=null){
            const todoList=document.querySelector(".tasks>.todoList");
            todoList.textContent="";



            currentProj.getTodos().forEach(element => {

                let currentObj=generateTodoElemet(element);
                

                todoList.appendChild(currentObj);
            });
        }
}

function generateTodoElemet(todoObj){
    let currentObj=document.createElement('li');
    
    let todoName=document.createElement('div');
    todoName.textContent=todoObj.name;

    let todoDesc=document.createElement('p')
    
    todoDesc.textContent=todoObj.desc;
    todoDesc.style.display="none"

    let todoPriority=document.createElement('div')
    if(todoObj.priority==2){
        todoPriority.textContent='urgent';
        todoPriority.style.backgroundColor='red';
    }
    else{
        todoPriority.textContent='normal'
        todoPriority.style.backgroundColor='green';
    }


    let upperDiv=document.createElement('div')
    // todoName.setAttribute('style','flex-grow:1,flex-basis:0')
    // todoPriority.setAttribute('style','flex-grow:0')
    upperDiv.appendChild(todoName);
    upperDiv.appendChild(todoPriority)
    



    let showBtn=document.createElement('button');
    
    showBtn.addEventListener('click',(e)=>{
        if(todoDesc.style.display==="none"){
            todoDesc.style.display="";
        }
        else{
            todoDesc.style.display='none';
        }
    })
    let addIcon=new Image();
    addIcon.src=addimg;
    addIcon.style.height='55px';
    showBtn.appendChild(addIcon);

    showBtn.style.border='none';
    showBtn.style.background='none';
    

    let delBtn=document.createElement('button');

    let delIcon=new Image();
    delIcon.src=delimg;
    delIcon.style.height='55px'
    delBtn.appendChild(delIcon)

    delBtn.style.background='none'
    delBtn.style.border='none'

    delBtn.addEventListener('click',(e)=>{
        deletetodo(todoObj.name);
        displayTodos();
    })
    
    let buttons=document.createElement('div');
    buttons.appendChild(showBtn)
    buttons.appendChild(delBtn)
    buttons.setAttribute('style','text-align:right;whitespace:nowrap;');
    upperDiv.appendChild(buttons)

    currentObj.appendChild(upperDiv);
    currentObj.appendChild(todoDesc);
    return currentObj;

}

export {addtodo,displayTodos}
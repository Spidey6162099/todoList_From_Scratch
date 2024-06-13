import { todo } from "./todos";
class project{
    name;
    todos;

    constructor(name){
        this.todos= [];
        this.name=name;
    }

    getName(){
        return this.name
    }

    addNewTodo(todo){
        this.todos.push(todo)
    }

    deleteTodo(todo){
        let index;
        for(let i=0;i<this.todos.length;i++){
            if(todo.toLowerCase()===this.todos[i].name){
               index=i;
                break;
            }
        }
        this.todos.splice(index,1);
    }

    getTodos(){
        return this.todos;
    }

}

export{project};
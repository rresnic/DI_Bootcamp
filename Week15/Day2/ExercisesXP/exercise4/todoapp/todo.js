export class TodoList {
    constructor() {
        this.taskList = [];
        this.taskID = 0;
    }
    addTask(description) {
        this.taskList.push({id: this.taskID, description, completed: false});
        this.taskID++;
    }
    listTasks(){
        for(let task of this.taskList){
            console.log(`ID: ${task.id}, Description ${task.description}, Completed: ${task.completed}`);
        }
    }
    markCompleted(id){
        let myTask = this.taskList.find(x => x.id == id);
        myTask ? myTask.completed = true: console.log("Task not found");
    }  
}
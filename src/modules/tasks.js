/* eslint-disable*/
export default class Tasks {
  constructor(description, order, completed = false) {
    this.description = description;
    this.order = order;
    this.completed = completed;
  }

  static getTask() {
    let tasks;
    if (localStorage.getItem('tasks') === null) 
    {
      tasks = [];
    }
    else { tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    return tasks;
  }

  static addTask(task) {
    const tasks = Tasks.getTask();
    tasks.push (task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
 
  static updateTask(desc,completed,i) {
    const tasks = Tasks.getTask();
    let flag = false;
    tasks.forEach((task,index) => {
        if(task.order === parseInt (i,10)){
            tasks[index].order=index+1;
            tasks[index].description=desc;
            tasks[index].completed=completed;
            return flag=true;
        }
    })
   
    console.log(flag)
    if(flag){
       localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    
  }

  static removeTask(id) {
    const tasks =Tasks.getTask();
    let flag = false;
    tasks.forEach((task, index) => {
      if (task.order === parseInt(id, 10)) {
        tasks.splice(index, 1);
        // call update after the deleted element
        flag = true;
      }
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(flag)
    return flag;
  }
 
  static sortTask() {
    const tasks =Tasks.getTask();
    tasks.forEach((task,index) => {
        tasks[index].order=index+1;
        console.log("index: ", index, "Value: ",tasks[index])
    });

    // for (let i =0; tasks.length ; i+=1 ){
    //     if (tasks[i] === null){
    //         i+;
    //     }
    //     t
    // }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
}
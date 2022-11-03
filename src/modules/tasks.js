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
    const newTasks= tasks.map((task,index) => {
        if(index === i){
            task.description=desc;
            task.completed=completed;
            console.log(task,"Updated Task")
        }
    })
    
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  static removeTask(id) {
    const tasks =Tasks.getTask();
    let flag = false;
    tasks.forEach((task, index) => {
        console.log(task.order, "=", id)
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
 
//   static getTask(id) {
//     const tasks =Tasks.getTask();
//     tasks.forEach((task, index) => {
//       if (task.id === parseInt(id, 10)) {
//        return task;
//       }
//     });
//    return null;
//   }
}
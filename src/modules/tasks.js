export default class Tasks {
  constructor(description, order, completed = false) {
    this.description = description;
    this.order = order;
    this.completed = completed;
  }

  static getTask() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static addTask(task) {
    const tasks = Tasks.getTask();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static updateTask(desc, completed, i) {
    const tasks = Tasks.getTask();
    let flag = false;
    tasks.forEach((task, index) => {
      if (task.order === parseInt(i, 10)) {
        tasks[index].order = index + 1;
        tasks[index].description = desc;
        tasks[index].completed = completed;
        flag = true;
      }
      return flag;
    });
    if (flag) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  static removeTask(id) {
    const tasks = Tasks.getTask();
    let flag = false;
    tasks.forEach((task, index) => {
      if (task.order === parseInt(id, 10)) {
        tasks.splice(index, 1);
        flag = true;
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    return flag;
  }

  static removeTasks() {
    const tasks = Tasks.getTask();
    const flag = false;
    const completedTask = tasks.filter((task) => {
      if (task.completed) {
        return task;
      }
      return null;
    });
    completedTask.forEach((task) => {
      Tasks.removeTask(task.order);
    });
    return flag;
  }

  static sortTask() {
    const tasks = Tasks.getTask();
    tasks.forEach((task, index) => {
      tasks[index].order = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
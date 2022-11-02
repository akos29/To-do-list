/* eslint-disable  */
import * as el from './elementSelector.js';
import Tasks from './tasks.js';

export default el.form.addEventListener('submit',async(e)=>{
  e.preventDefault();

  const tasks = Tasks.getTask();
  console.log(tasks, "Init")
  const id =  tasks.length + 1;
  console.log(el.task.value)
  if(el.task !== '') {
    const t = new Tasks(el.task.value, id,false);
    Tasks.addTask(t);
    console.log(t ,"new Task")
  }
  el.form.reset();
})
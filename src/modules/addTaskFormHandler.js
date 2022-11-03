/* eslint-disable  */
import * as el from './elementSelector.js';
import Tasks from './tasks.js';
import generateTask from './generateTaskList'

export default el.form.addEventListener('submit',async(e)=>{
  e.preventDefault();

  const tasks = Tasks.getTask();
  console.log(tasks, "Init")
  const id =  tasks.length + 1;

  console.log(el.form[0].value )
  if(el.form[0].value !== '') {
    const t = new Tasks(el.form[0].value, id,false);
    Tasks.addTask(t);
    console.log(t ,"new Task")
    el.form.reset();
    el.container.innerHTML=''
    generateTask()
  }
  
})
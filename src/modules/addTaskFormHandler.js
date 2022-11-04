import * as el from './elementSelector.js';
import Tasks from './tasks.js';
import generateTask from './generateTaskList.js';

export default el.form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const tasks = Tasks.getTask();

  if (el.form[0].value !== '') {
    const t = new Tasks(el.form[0].value, (tasks.length + 1), false);
    Tasks.addTask(t);
    el.form.reset();
    el.container.innerHTML = '';
    generateTask();
  }
});
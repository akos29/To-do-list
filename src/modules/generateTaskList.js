import * as el from './elementSelector.js';
import Tasks from './tasks.js';

export default function populateTask() {
  const tasksList = Tasks.getTask();
  tasksList.forEach((task) => {
    let checked = '';
    if (task.completed) { checked = 'checked'; }
    const taskList = ` <li class="draggable" draggable="true"> 
        <input class="toggle" type="checkbox" aria-label="Task  Complete" ${checked} />
        <textarea name="task">${task.description}</textarea>
        <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c4c5c6" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg></span>
    </li>`;
    el.container.innerHTML += taskList;
  });
}
import * as el from './elementSelector.js';
import Tasks from './tasks.js';

export default function populateTask() {
  const tasksList = Tasks.getTask();
  tasksList.forEach((task) => {
    let checked = '';
    if (task.completed) { checked = 'checked'; }
    const taskList = ` <li class="draggable" draggable="true">
    <form class="form-update">   
        <input class="toggle" type="checkbox" aria-label="Task  Complete" ${checked} />
        <input class='task' name="task" value= "${task.description}"</input>
        <button id=${task.order} class="trash">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c4c5c6" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg></button>
    </form>
    </li>`;
    el.container.innerHTML += taskList;
    const btnDel = document.querySelectorAll('.trash');

    btnDel.forEach((btnD) => {
      btnD.addEventListener('click', () => {
        Tasks.removeTask(btnD.id);
        btnD.parentElement.remove();
      });
    });
  });
}
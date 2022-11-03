import * as el from './elementSelector.js';
import Tasks from './tasks.js';

export default function populateTask() {
  const tasksList = Tasks.getTask();
  tasksList.forEach((task) => {
    let checked = '';
    let status = '';
    if (task.completed) { checked = 'checked'; status = 'done'; }
    const taskList = ` <li class="draggable" draggable="true">
    <form class="form-update ${status}">   
        <input class="toggle" type="checkbox" aria-label="Task  Complete" ${checked} />
        <input class='task' name="task" value= "${task.description}"</input>
        <button id=${task.order} class="ellipsis">
          <svg id='more' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c4c5c6" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg>
          <svg id='delete' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg>
          </button>
    </form>
    </li>`;
    el.container.innerHTML += taskList;

    const activateTrash = document.querySelectorAll('.ellipsis');
    const tasks = document.querySelectorAll('.task');
    const toggles = document.querySelectorAll('.toggle');

    activateTrash.forEach((ellipsis) => {
      const btnChildren = ellipsis.children;
      btnChildren[1].classList.add('hidden');

      ellipsis.addEventListener('mouseover', () => {
        btnChildren[1].classList.add('trash');
        ellipsis.parentElement.parentElement.classList.add('active');
        btnChildren[0].classList.add('hidden');
        btnChildren[1].classList.remove('hidden');

        const btnDel = document.querySelectorAll('.trash');

        btnDel.forEach((btnD) => {
          btnD.addEventListener('click', (e) => {
            btnD.parentElement.parentElement.parentElement.remove();
            Tasks.removeTask(e.target.parentElement.id);
          }, false);
        });
      });

      ellipsis.addEventListener('click', () => {
        ellipsis.classList.remove('trash');
        ellipsis.parentElement.parentElement.classList.remove('active');
        btnChildren[0].classList.remove('hidden');
        btnChildren[1].classList.add('hidden');
        Tasks.sortTask();
      });
      ellipsis.addEventListener('mouseout', () => {
        ellipsis.classList.remove('trash');
        ellipsis.parentElement.parentElement.classList.remove('active');
        btnChildren[0].classList.remove('hidden');
        btnChildren[1].classList.add('hidden');
      });
    });

    tasks.forEach((task) => {
      task.addEventListener('mousedown', () => {
        task.parentElement.parentElement.classList.add('active');
      });
      task.addEventListener('mouseout', () => {
        task.parentElement.parentElement.classList.remove('active');
      });

      task.addEventListener('change', () => {
        Tasks.updateTask(task.value, false, task.parentElement[2].id);
      });
    });

    toggles.forEach((toggle) => {
      toggle.addEventListener('change', () => {
        if (toggle.checked) {
          toggle.parentElement.classList.add('done');
          Tasks.updateTask(toggle.parentElement[1].value, true, toggle.parentElement[2].id);
        } else {
          toggle.parentElement.classList.remove('done');
          Tasks.updateTask(toggle.parentElement[1].value, false, toggle.parentElement[2].id);
        }
      });
    });
  });
}
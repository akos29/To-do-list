import './style.css';
import * as el from './modules/elementSelector.js';
import generateTaskList from './modules/generateTaskList.js';
// eslint-disable-next-line no-unused-vars
import addTaskFormHandler from './modules/addTaskFormHandler.js';
import refresh from './modules/refresh.js';
import Tasks from './modules/tasks.js';

function component() {
  generateTaskList();

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();

      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }

      return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  const draggables = document.querySelectorAll('.draggable');
  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  const container = document.querySelector('.container');
  container.addEventListener('dragover', (e) => {
    e.preventDefault();

    const afterElement = getDragAfterElement(el.container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });

  el.refresh.addEventListener('click', () => {
    refresh();
  }, false);

  el.clearAll.addEventListener('click', () => {
    Tasks.removeTasks();
    refresh();
  });
}

component();
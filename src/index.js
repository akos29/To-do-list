import './style.css';
import * as el from './modules/elementSelector.js';
import generateTaskList from './modules/generateTaskList.js';
// eslint-disable-next-line no-unused-vars
import addTaskFormHandler from './modules/addTaskFormHandler.js';
import refresh from './modules/refresh.js';

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

  el.draggables.forEach((draggable) => {
    // const task = document.querySelector('.task');
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
    draggable.addEventListener('click', () => {
      draggable.classList.add('active');
    });
    draggable.addEventListener('click', () => {
      draggable.classList.remove('active');
    });
  });

  el.container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(el.container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      el.container.appendChild(draggable);
    } else {
      el.container.insertBefore(draggable, afterElement);
    }
  });

  el.refresh.addEventListener('click', () => {
    refresh();
  }, false);
}

document.body.appendChild(component());
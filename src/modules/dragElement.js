import * as el from './elementSelector.js';

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
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

export default el.container.addEventListener('dragover', (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(el.container, e.clientY);
  const draggable = document.querySelector('.dragging');
  if (afterElement == null) {
    el.container.appendChild(draggable);
  } else {
    el.container.insertBefore(draggable, afterElement);
  }
});

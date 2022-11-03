import * as el from './elementSelector.js';
import generateTask from './generateTaskList.js';
import Tasks from './tasks.js';

export default function refresh() {
  Tasks.sortTask();
  el.container.innerHTML = '';
  return generateTask();
}
import * as el from './elementSelector.js';
import generateTask from './generateTaskList.js';

export default function refresh() {
  el.container.innerHTML = '';
  return generateTask();
}
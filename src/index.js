import _, { after } from 'lodash';
import './style.css';
import * as el from './modules/elementSelector.js';
import generateTaskList from './modules/generateTaskList'

// import { draggables } from './modules/elementSelector';


el.draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart',()=>{
        draggable.classList.add('dragging');
        console.log("drag start")
        
    })
    
    draggable.addEventListener('dragend',()=>{
        draggable.classList.remove('dragging');
    })
});



el.container.addEventListener('dragover',(e) => {
  e.preventDefault()
  const afterElement =getDragAfterElement(el.container,e.clientY); 
  const draggable= document.querySelector('.dragging');
  console.log(afterElement);
  if(afterElement==null){
    el.container.appendChild(draggable);
  }else{
    el.container.insertBefore(draggable,afterElement)
  }
 
})

function getDragAfterElement(container,y){
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

  return draggableElements.reduce((closest,child)=>{
    const box= child.getBoundingClientRect()
    const offset= y - box.top - box.height/2;
    if(offset<0 && offset>closest.offset){
      return {offset: offset, element:child}
    }
    else{
      return closest;
    }
  },{offset:Number.NEGATIVE_INFINITY}).element;
}

function component() {
  const element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');
  generateTaskList()
  
  return element;
}

document.body.appendChild(component());
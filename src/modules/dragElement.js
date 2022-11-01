import * as el from './elementSelector.js';

el.draggables.forEach(draggable =>{
    draggable.addEventListener('dragstart',()=>{
        draggable.classList.add('dragging');
        console.log("drag")
    })
    
    draggable.addEventListener('dragend',()=>{
        draggable.classList.remove('dragging');
    })
});
console.log("first")
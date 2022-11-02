import * as el from './elementSelector.js'

const tasksList =[
    {"description": "I will plan for the day",
    "completed": false, "index": 1},
    {"description": "Read for 40 min ",
    "completed": true, "index": 2},
    {"description": "Rest 5 min",
    "completed": false, "index": 3},
    {"description": "Deep work for 1 hour",
    "completed": true, "index": 4}
]

export default function populateTask(){ 
    
    tasksList.forEach((task)=>{
       let checked= '';
       if(task.completed){checked='checked'}
        const taskList = ` <li class="draggable" draggable="true"> 
        <input class="toggle" type="checkbox" aria-label="Task  Complete" ${checked} />
        <textarea name="task">${task.description}</textarea>
        <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#c4c5c6" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg></span>
    </li>`;
        el.container.innerHTML+=taskList;
    })
}
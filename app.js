// Defin UI
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    tasklist.addEventListener('click',removeTask);
    // Clear Task event
    clearBtn.addEventListener('click',clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup',filterTasks);

}

// Add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create Text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const l = document.createElement('a');
    // Add class
    l.className = 'delete-item secondery-content';
    // Add icom html
    l.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(l);

    // Append li to ul
    tasklist.appendChild(li);

    // Store to Local Storage
    // storeTaskInLocalStorage(taskInput.value);


    // clear input
    taskInput.value = '';


    // console.log(li);

    e.preventDefault();
}

// Store Task
// function storeTaskInLocalStorage(task){
//     let tasks;
//     if(localStorage.getItem('tasks' === null)){
//         tasks = [];
//     }else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);

//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }


// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}


// Clear Tasks
// function clearTasks(){
//     tasklist.innerHTML = '';
// } 

// Faster method
function clearTasks(){
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
} 


//Filter tasks
function filterTasks(e){
    const t = e.target.value.toLowerCase();
    
    document.querySelectorAll(".collection-item").forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(t) != -1){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }
    });
} 








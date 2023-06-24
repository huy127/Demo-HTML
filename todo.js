// Define all UI variable
const todoList = document.querySelector('.list-group');
const form = document.querySelector('#form');
const todoInput = document.querySelector('#todo');
const clearBtn = document.querySelector('#clearBtn');
const search = document.querySelector('#search');

// Load all event listners
allEventListners();


// Functions of all event listners
function allEventListners() {
    // Add todo event
    form.addEventListener('submit', addTodo);
    // Remove and complete todo event
    todoList.addEventListener('click', removeTodo);
    // Clear or remove all todos
    clearBtn.addEventListener('click', clearTodoList);
    // Search todo event
    search.addEventListener('keyup', searchTodo);
}
const todoCountSpan = document.querySelector('.label');

function updateTodoCount() {
  const count = todoList.children.length;
  const text = count === 1 ? 'You have 1 pendding task' : ` You have ${count} pendding task`;
  todoCountSpan.textContent = text;
}

// Add todo item function
function addTodo(e) {
   
        if (todoInput.value !== '') {
            // check if value already exists
            const isExist = Array.from(todoList.children).some(todo => todo.querySelector('.todo-text').innerText === todoInput.value)
            if (isExist) {
              alert('Todo item already exists. Please enter a new item.')
            } else {
              // create new todo item
             // Create li element
                    const li = document.createElement('li');
                    // Add class
                    li.className = 'list-group-item';
                    // Add complete and remove icon
                    li.innerHTML = `
                                    <i class="far fa-square done-icon"></i>
                                    <i class="far fa-check-square done-icon"></i>
                                    <i class="far fa-trash-alt"></i>`;
                    // Create span element
                    const span = document.createElement('span');
                    // Add class
                    span.className = 'todo-text';
                    // Create text node and append to span
                    span.appendChild(document.createTextNode(todoInput.value));
                    // Append span to li
                    li.appendChild(span);
                    // Append li to ul (todoList)
                    todoList.appendChild(li);
                    updateTodoCount();

                    // Clear input
                    todoInput.value = '';
            }
        
        
    } else {
        alert('Please add todo');
    }

    e.preventDefault();
}


// Remove and complete todo item function
function removeTodo(e) {
    // Remove todo
    if (e.target.classList.contains('fa-trash-alt')) {
        if (confirm('Are you sure')) {
            e.target.parentElement.remove();
            updateTodoCount();
        }
    }

    // Complete todo
    // if (e.target.classList.contains('todo-text')) {
    //     e.target.parentElement.classList.toggle('done');
    // }
    if (e.target.classList.contains('done-icon')) {
        e.target.parentElement.classList.toggle('donee')

    }
}

// Clear or remove all todos function
function clearTodoList() {
        if (confirm('Are you sure clear all item')) {
            todoList.innerHTML = '';
            updateTodoCount();
        }
}
updateTodoCount();

// Search todo function

function searchTodo(e) {
    const text = e.target.value.toLowerCase();
    const allItem = document.querySelectorAll('.list-group-item');
    for (let task of allItem) {
        const item = task.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
            
        }
    };
}



// var b=1;
// function test(){
//   function b(){}
//   b=5;
//   return
// }

// test();
// const t1 = setTimeout(()=>{
//     console.log('a')
//     setTimeout(()=>{
//         console.log('b')
//     },1000)
// },200)

// setTimeout(()=>
//     clearTimeout(t1),300
// )


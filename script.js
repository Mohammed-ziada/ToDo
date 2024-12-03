
let counter = 0;

// Add
function addTodo() {
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todo = document.createElement('li');
let todoText = todoInput.value.trim();

if (todoText !== '') {
    todo.innerHTML = `
    <li class="flex items-center bg-gray-200 p-3 rounded-lg space-x-3 justify-between" id="task-${++counter}">
        <div class="space-x-3 w-2/3 flex gap-2">
            <input type="checkbox" class="ms-3 ">
            <span class="flex-1 ms-3 ">${todoText}</span>
        </div>
       
        <div class="flex gap-3 " >
            <button class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors" onclick="Delte('task-${counter}')">
                حذف
            </button>
            <button class="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors" onclick="Complete('task-${counter}')">
                اكتمل
            </button>
       <button class="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors" onclick="Update('task-${counter}')">
                تحديث
            </button>
             
        </div>
    </li>`;
    todoList.appendChild(todo);
    todoInput.value = '';
    todoInput.focus();
}
}
// complete
function Complete(currentId) {
    if (currentId) {
        const taskElement = document.getElementById(currentId); 
        const textSpan = taskElement.querySelector('span'); 
                if (textSpan.style.textDecoration === 'line-through') {
            textSpan.style.textDecoration = 'none';
            textSpan.style.color = 'black';
        } else {
            textSpan.style.textDecoration = 'line-through';
            textSpan.style.color = 'green';
        }
    } else {
        console.log('Task element not found');
    }
}

// Delete
function Delte(currentId){
    console.log(currentId)
    if(currentId){  
        currentId = document.getElementById(currentId);
        currentId.remove();

    }else{
        console.log('Not Found');
    }
}
// Show
// Update
// function Update(currentId) {
//     if (currentId) {
//         const taskElement = document.getElementById(currentId); 
//         if (taskElement) {
//             const textSpan = taskElement.querySelector('span'); 
//             const originalText = textSpan.textContent.trim(); 

//             textSpan.innerHTML = `<input type="text" value="${originalText}" class="flex-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 p-2 ">`;

//             const inputElement = textSpan.querySelector('input');
//             inputElement.focus(); 
//             inputElement.addEventListener('blur', function () {
//                 const newText = inputElement.value.trim();
//                 textSpan.innerHTML = newText || originalText; 
//             });

//             inputElement.addEventListener('keydown', function (event) {
//                 if (event.key === 'Enter') {
//                     const newText = inputElement.value.trim();
//                     textSpan.innerHTML = newText || originalText; 
//                 }
//             });
//         } else {
//             console.log("Task element not found.");
//         }
//     } else {
//         console.log("Can't Update");
//     }
// }
function Update(currentId) {
    if (currentId) {
        const taskElement = document.getElementById(currentId); 
        if (taskElement) {
            const textSpan = taskElement.querySelector('span'); 

            if (textSpan.querySelector('input')) {
                const inputElement = textSpan.querySelector('input');
                const newText = inputElement.value.trim();
                textSpan.innerHTML = newText || inputElement.placeholder; 
            } else {
                const originalText = textSpan.textContent.trim(); 

                textSpan.innerHTML = `<input type="text" value="${originalText}" class="flex-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 p-2 ">`;

                const inputElement = textSpan.querySelector('input');
                inputElement.focus(); 
                
                inputElement.addEventListener('blur', function () {
                    const newText = inputElement.value.trim();
                    textSpan.innerHTML = newText || originalText;
                });

                inputElement.addEventListener('keydown', function (event) {
                    if (event.key === 'Enter') {
                        const newText = inputElement.value.trim();
                        textSpan.innerHTML = newText || originalText; 
                    }
                });
            }
        } else {
            console.log("Task element not found.");
        }
    } else {
        console.log("Can't Update");
    }
}

// function Update(currentId) {
//     if (currentId) {
//         const taskElement = document.getElementById(currentId); 
//         if (taskElement) {
//             const textSpan = taskElement.querySelector('span'); 
//             const updateBtn = taskElement.querySelector('button[data-action="update"]');
//             const doneBtn = document.createElement('button');
//             doneBtn.classList.add('bg-green-500', 'text-white', 'px-3', 'py-1', 'rounded-lg', 'hover:bg-green-600', 'transition-colors');
//             doneBtn.textContent = 'Done';
//             doneBtn.dataset.action = 'done';
//             taskElement.replaceChild(doneBtn, updateBtn);

//             const originalText = textSpan.textContent.trim(); 

//             textSpan.innerHTML = `<input type="text" value="${originalText}" class="flex-1 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 p-2 ">`;

//             const inputElement = textSpan.querySelector('input');
//             inputElement.focus(); 
//             inputElement.addEventListener('blur', function () {
//                 const newText = inputElement.value.trim();
//                 textSpan.innerHTML = newText || originalText; 
//                 taskElement.replaceChild(updateBtn, doneBtn);
//             });

//             inputElement.addEventListener('keydown', function (event) {
//                 if (event.key === 'Enter') {
//                     const newText = inputElement.value.trim();
//                     textSpan.innerHTML = newText || originalText; 
//                     taskElement.replaceChild(updateBtn, doneBtn);
//                 }
//             });

//             doneBtn.addEventListener('click', function () {
//                 const newText = inputElement.value.trim();
//                 textSpan.innerHTML = newText || originalText; 
//                 taskElement.replaceChild(updateBtn, doneBtn);
//             });
//         } else {
//             console.log("Task element not found.");
//         }
//     } else {
//         console.log("Can't Update");
//     }
// }



// Search
// Sort
// Filter
// Pagination
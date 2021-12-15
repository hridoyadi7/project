const todoForm=document.querySelector('.form-todo');
const todoInput=document.querySelector(".form-todo input[type='text']");
// console.log(todoInput);
const todoList=document.querySelector('.todo-list');


todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi=document.createElement('li');
    const newLiInnerHtml=`
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML=newLiInnerHtml;
    // console.log(newLi);
    todoList.append(newLi);
    todoInput.value="";
})

todoList.addEventListener('click',(e)=>{
    // console.log(e.target);
    //check if user clicked on done button
    if(e.target.classList.contains('done')){
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration='line-through';
        e.target.style.display='none';
    }else if(e.target.classList.contains('remove')){
        // console.log('You have removed something!!!');
        const targetedLi=e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    }
})


const currentDate=document.querySelector('.btn');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
currentDate.textContent=today;
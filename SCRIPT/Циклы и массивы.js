const saveToDo = [{
    todo:'',
    date:''}];
saveToDo.splice(0,1);

function input () {if (event.key==='Enter') {writeToDo ()}};

function writeToDo () {
let todoElement=document.querySelector('.todo-name');
const todo = todoElement.value;
let dateElement=document.querySelector('.js-date');
const date = dateElement.value;
if (todoElement.value) {saveToDo.push({
    todo,
    date})};

todoElement.value='';//обновление строки ввода
dateElement.value='';//обновление строки ввода
let todoHTML= '';
    for (let i=0; i<saveToDo.length; i++) {
const todoObject=saveToDo[i];
const {todo, date}=todoObject;
    const textHtml=`<div>${todo}</div> <div>${date}</div>
    <button class="css-delete" onclick="
    saveToDo.splice(${i}, 1);
    writeToDo ()"
    >Удалить</button> `;
    console.log(textHtml); 
    todoHTML +=textHtml; //формирование текста страницы
    };
    document.querySelector('.to-do-print').innerHTML=todoHTML;
}




const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const TODO_KEY = "todos";
let Todos = []


function saveTodos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(Todos));
}

function deleteTodo(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    Todos = Todos.filter((element) => element.id != li.id);
    // filter, 참이면 반환, 거짓이면 삭제.
    saveTodos();
    li.remove();

}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "  X";
    button.classList.add("btn", "btn-outline-danger", "btn-sm");
    button.addEventListener("click", deleteTodo);
    span.innerHTML = newTodo.text+"&nbsp;&nbsp;&nbsp;&nbsp;";
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodo(event) {
    event.preventDefault();
    newTodo = todoInput.value;
    todoInput.value = "";
    const newTodosOBJ = {
        text: newTodo,
        id: Date.now()
    }
    Todos.push(newTodosOBJ);
    paintTodo(newTodosOBJ);
    saveTodos();

}

todoForm.addEventListener("submit", handleTodo);

const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo != null) {
    const parsedTodo = JSON.parse(savedTodo);
    Todos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}
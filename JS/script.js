const todoList = [];

const btn = document.querySelector('button');
btn.addEventListener('click', addTodo);

function addTodo() {
  const inputValue = document.querySelector("input").value;
  if (inputValue === '') {
    return;

  } else {
    todoList.push(inputValue);
    document.querySelector('input').value = '';
    iteration();
  }
}

function iteration() {
  const todoHtml = document.getElementById('js-todo-list');
  let todoItem
  for (i = 0; i <= todoList.length - 1; i += 1) {
    todoItem = todoList[i];

  };
  todoHtml.innerHTML += `<p> ${todoItem}</p><button >delete</button>`;


}




















// console.log(todoList)
//   const todoHtml = document.getElementById("todo-list");
//   const todoItem = document.createElement("li");
//   for (i = 0; i <= todoList.length - 1; i += 1) {
//     todoItem.textContent = todoList[i];//adds itm to todoItem txtcont
//     console.log(todoItem);
//     todoHtml.appendChild(todoItem);

//     // todoHtml.innerHTML = `<li>${todoList[i]}</li>`;
//   }
// }
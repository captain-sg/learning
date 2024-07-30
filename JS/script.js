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
  const todoLi = document.createElement('li');
  const todoDelBtn = document.createElement('button');
  for (i = 0; i <= todoList.length -1; i += 1) {
    todoLi.innerHTML = todoList[i];
    todoDelBtn.innerHTML = 'delete';
    todoHtml.appendChild(todoLi);
    todoHtml.appendChild(todoDelBtn);
    console.log(todoHtml);
  };

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
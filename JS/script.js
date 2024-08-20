const todoObj = [];

renderTodo();

const exepMess = document.getElementsByClassName("js-exep-mess");
const btn = document.querySelector('button');
btn.addEventListener("click", addTodo);

function renderTodo() {
  let todoListHtml = ''

  for (i = 0; i < todoObj.length; i++) {
    const todo = todoObj[i];
    const todoName = todo.name;
    const todoDueDate = todo.duedate;
    console.log(todoName);
    const Html = `<p>${i + 1}. ${todoName} </p><p>${todoDueDate} </p>
    <button class="css-dlt-btn" onclick="
      todoObj.splice(${i},1); 
      renderTodo();">delete
    </button>`;
   
    todoListHtml += Html;
  };
  document.getElementById("js-todo-list").innerHTML = todoListHtml;
};


function addTodo() {
  const inputValue = document.querySelector("input").value;
  const dateInputValue = document.querySelector(".js-todo-date").value;
console.log(inputValue && dateInputValue);
  if (inputValue == "") {
    exepMess[0].innerHTML = "pleas add something todo!";
  } else if (dateInputValue == "") {
    exepMess[0].innerHTML = "please add due-date for your todo!";
  } else {
    exepMess[0].innerHTML = "";
    todoObj.push({
      name: inputValue,
      duedate: dateInputValue,
    });
    document.querySelector("input").value = "";
    document.querySelector(".js-todo-date").value = "";
    renderTodo();
  }
}

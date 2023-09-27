const inputvalue = document.getElementsByClassName("inputvalue")[0];
const add_task_button = document.getElementsByClassName("add-task-button")[0];

add_task_button.addEventListener("click", function () {
  if (inputvalue.value.trim() != 0) {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(inputvalue.value);
    localStorage.setItem("localItem", JSON.stringify(taskList));
    inputvalue.value = "";
  }

  getItem();
});

function getItem() {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  let html = "";
  let itemGet = document.querySelector(".to-do-items");
  taskList.forEach((data, index) => {
    html += `
   <div class="todoList">
   <p class="pText">${data}</p>
   <button class="deleteTask">x</button>
   </div>
   `;
  });
  itemGet.innerHTML = html;
  const deleteButtons = document.querySelectorAll(".deleteTask");
  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      deleteItem(index);
    });
  });
}


getItem();

function deleteItem(index) {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  getItem();
}

clear_task_button = document.getElementById("clear-task");
clear_task_button.addEventListener("click", clearTask);

function clearTask() {
  localStorage.clear();
  getItem();
}


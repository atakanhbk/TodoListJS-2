const container = document.createElement("div");
const row = document.createElement("div");
const form = document.createElement("form");
const createTaskCard = document.createElement("div");
const showTaskCards = document.createElement("div");

const taskTitleText = document.createElement("h2");
const taskDescText = document.createElement("h2");

const taskTitleInput = document.createElement("input");
const taskDescInput = document.createElement("textarea");
const taskCreateButton = document.createElement("button");

let taskCardList = [];

function ControlStyle() {
  container.className = "container";

  row.className = "row";
  row.style.display = "flex";
  row.style.justifyContent = "center";

  showTaskCards.className = "task-card-list";
  showTaskCards.style.display = "flex";
  showTaskCards.style.flexWrap = "wrap";
  showTaskCards.style.gap = "20px";
  showTaskCards.style.marginTop = "20px";

  createTaskCard.className = "create-task-card";
  createTaskCard.style.border = "2px solid black";
  createTaskCard.style.borderRadius = "5px";
  createTaskCard.style.width = "250px";
  createTaskCard.style.height = "250px";
  createTaskCard.style.textAlign = "center";
  createTaskCard.style.display = "flex";
  createTaskCard.style.flexDirection = "column";
  createTaskCard.style.justifyItems = "center";
  createTaskCard.style.alignItems = "center";
  createTaskCard.style.padding = "5px";

  taskCreateButton.innerHTML = "Create";
  taskCreateButton.className = "task-create-button";
  taskCreateButton.style.margin = "15px 0px";
  taskCreateButton.style.width = "100px";
  taskCreateButton.style.backgroundColor = "green";
  taskCreateButton.style.color = "white";
  taskCreateButton.style.border = "1px solid green";
  taskCreateButton.style.borderRadius = "5px";

  taskTitleText.innerHTML = "Title";

  taskDescText.innerHTML = "Description";

  taskDescInput.style.maxWidth = "200px";
  taskDescInput.className = "task-desc-input";

  taskTitleInput.className = "task-title-input";
  taskTitleInput.maxLength = "45";
}

function AppendChild() {
  document.body.appendChild(container);
  container.appendChild(row);
  container.appendChild(showTaskCards);
  row.appendChild(form);
  form.appendChild(createTaskCard);
  createTaskCard.appendChild(taskTitleText);
  createTaskCard.appendChild(taskTitleInput);
  createTaskCard.appendChild(taskDescText);
  createTaskCard.appendChild(taskDescInput);
  createTaskCard.appendChild(taskCreateButton);
}

function AddEventListener() {
  taskCreateButton.addEventListener("click", function () {
    if (taskTitleInput.value.trim() != "" && taskDescInput.value.trim() != "") {
      CreateTask(taskTitleInput.value, taskDescInput.value);
      taskTitleInput.value = "";
      taskDescInput.value = "";
    } else {
      taskDescInput.setAttribute("required", "required");
      taskTitleInput.setAttribute("required", "required");
      alert("Please Fill The Blanks");
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
}

function CreateTask(taskTitle, taskDesc) {
  const taskInfo = {
    taskTitle,
    taskDesc,
  };

  TaskCard(taskInfo);
}

function TaskCard(taskInfo) {
  const originialDiv = document.getElementsByClassName("create-task-card");
  const fakeDiv = originialDiv[0].cloneNode(true);

  const input = fakeDiv.querySelector("input");
  const textarea = fakeDiv.querySelector("textarea");
  const createButton = fakeDiv.querySelector("button");

  const titleText = document.createElement("h3");
  titleText.style.margin = "0px";
  titleText.style.color = "green";

  const titleDesc = document.createElement("h3");
  titleDesc.style.margin = "0px";
  titleDesc.style.color = "blue";

  fakeDiv.style.position = "relative";

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.color = "White";
  deleteButton.style.border = "1px solid black";
  deleteButton.style.borderRadius = "5px";
  deleteButton.style.position = "absolute";
  deleteButton.style.bottom = "7px";

  deleteButton.addEventListener("click", () => DeleteTask(deleteButton));

  fakeDiv.replaceChild(titleText, input);
  fakeDiv.replaceChild(titleDesc, textarea);
  fakeDiv.replaceChild(deleteButton, createButton);

  titleText.innerHTML = `${taskInfo.taskTitle}`;
  titleText.style.wordBreak = "break-word";

  titleDesc.innerHTML = `${taskInfo.taskDesc}`;
  titleDesc.style.wordBreak = "break-word";

  input.remove();

  showTaskCards.appendChild(fakeDiv);

  taskCardList.push(taskInfo);
  console.log(taskCardList);
}


window.addEventListener("beforeunload" , function () {
  localStorage.setItem("0",JSON.stringify(taskCardList));
})

window.addEventListener("load",function () {
  const localStorageList = JSON.parse(localStorage.getItem("0"));
  for (let i = 0; i < localStorageList.length; i++) {
    
    TaskCard(localStorageList[i]);
    
  }
})


function DeleteTask(button) {
  const buttonParent = button.parentElement;
  buttonParent.remove();
}

AppendChild();
ControlStyle();
AddEventListener();

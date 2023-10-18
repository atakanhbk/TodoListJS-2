const container = document.createElement("div");
const row = document.createElement("div");
const createTaskCard = document.createElement("div");

const taskTitleText = document.createElement("h2");
const taskDescText = document.createElement("h2");

const taskTitleInput = document.createElement("input");
const taskDescInput = document.createElement("textarea");
const taskCreateButton = document.createElement("button");

function ControlStyle() {
  container.className = "container";
  row.className = "row";
  row.style.display = "flex";
  row.style.justifyContent = "center";

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
}
function AppendChild() {
  document.body.appendChild(container);
  container.appendChild(row);
  row.appendChild(createTaskCard);
  createTaskCard.appendChild(taskTitleText);
  createTaskCard.appendChild(taskTitleInput);
  createTaskCard.appendChild(taskDescText);
  createTaskCard.appendChild(taskDescInput);
  createTaskCard.appendChild(taskCreateButton);
}

AppendChild();
ControlStyle();

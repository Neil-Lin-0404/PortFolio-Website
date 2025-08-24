var taskList = document.getElementById("lowerTask");
document
  .getElementsByClassName("deleteBtn")
  .addEventListener("click", deleteTask);
document
  .getElementsByClassName("completeBtn")
  .addEventListener("click", completeTask);
function SubmitTask() {
  console.log("[Action] Submit Button Clicked");
  var taskNameInput = document.getElementById("AddTask").value;
  // 檢查輸入是否為空
  if (taskNameInput === "") {
    alert("Please enter a task name.");
    console.error(`[Error] Task name is empty: "${taskNameInput}"`);
    return;
  }
  console.log(`[System] Task name entered: "${taskNameInput}"`);
  // 創造一個新的任務元素 並添加到任務列表中
  var Singletask = document.createElement("div");
  Singletask.className = "Tasks";
  console.log("[System] Created new task element:", Singletask);
  // 完成按鈕 創立
  var completeButton = document.createElement("button");
  completeButton.className = "completeBtn";
  completeButton.textContent = "";
  completeButton.addEventListener("click", completeTask);
  console.log("[System] Created complete button:", completeButton);
  // 刪除按鈕 創立
  var deleteButton = document.createElement("button");
  deleteButton.className = "deleteBtn";
  deleteButton.addEventListener("click", deleteTask);
  deleteButton.textContent = "Delete";
  console.log("[System] Created delete button:", deleteButton);
  // 任務名稱 創立
  var taskName = document.createElement("p");
  taskName.className = "TaskName";
  taskName.textContent = taskNameInput;
  console.log("[System] Created task name element:", taskName);
  // 將按鈕和任務名稱添加到任務元素中
  Singletask.append(completeButton);
  Singletask.append(taskName);
  Singletask.append(deleteButton);
  taskList.append(Singletask);

  console.log(
    "[System] Appended buttons and task name to task element:",
    Singletask
  );
  document.getElementById("AddTask").value = "";
}
// Delete Task Function
function deleteTask() {
  console.log("[Action] Delete Button Clicked");
  var task = this.parentNode;
  task.remove();
}
function completeTask() {
  console.log("[Action] Complete Button Clicked");
  var task = this.parentNode;
  task.style.textDecoration = "line-through";
  this.style.backgroundColor = "lightgreen";
  this.style.cursor = "default";
}

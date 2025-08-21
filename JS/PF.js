var taskList = document.getElementById("lowerTask");
document.getElementById("deleteBtn").addEventListener("click", deleteTask);
function SubmitTask() {   
    var taskNameInput = document.getElementById("AddTask").value;
    if(taskNameInput === "") {
        alert("Please enter a task name.");
        return;
    }
    var Singletask = document.createElement("div");
    Singletask.className = "Tasks";

    var completeButton = document.createElement("button");
    completeButton.className = "completeBtn";
    completeButton.textContent = "";


    var deleteButton = document.createElement("button");
    deleteButton.className = "deleteBtn";
    deleteButton.textContent = "Delete";

    var taskName = document.createElement("p");
    taskName.className = "TaskName";
    taskName.textContent = taskNameInput;

    Singletask.append(completeButton);
        Singletask.append(taskName);
    Singletask.append(deleteButton);

    taskList.append(Singletask);
    document.getElementById("AddTask").value = "";
}
function deleteTask()
{
                   
}
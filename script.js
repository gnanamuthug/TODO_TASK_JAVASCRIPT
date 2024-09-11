
function addtask() {

    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;

    if (taskText === "") {
        alert ("Please enter your task");
        return;
    }

    var li = document.createElement('li');
    var list = document.createElement('list');
    list.innerHTML = taskText;

    li.appendChild(list);

    var taskList = document.getElementById('taskList');
    taskList.appendChild(li);

    taskInput.value = "";

    var completeButton = document.createElement('button');
    completeButton.innerHTML = 'Complete';

    li.appendChild(completeButton)

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';

    li.appendChild(deleteButton)

    completeButton.onclick = function () {
        completetask(li);
    }

    deleteButton.onclick = function () {
        deletetask(li);
    }

    function completetask(taskList) {
        taskList.style.textDecoration = 'line-through';
    }

    function deletetask(taskItem) {
        var taskList = document.getElementById('taskList');
        taskList.removeChild(taskItem);
    }

    

};

function completeAllTasks() {
    var taskList = document.getElementById('taskList').children;
    for (var i=0; i<taskList.length; i++) {
        taskList[i].style.textDecoration = 'line-through';
    }
}



function deleteAllTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
}
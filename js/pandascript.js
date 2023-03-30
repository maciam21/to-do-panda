function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        li.classList.toggle("completed");
    };
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    input.value = "";
}

function completeTasks() {
    let lis = document.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
        if (!lis[i].classList.contains("completed")) {
            lis[i].classList.add("completed");
            lis[i].getElementsByTagName("input")[0].checked = true;
        }
    }
}

function clearTasks() {
    let ul = document.getElementById("taskList");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        li.classList.toggle("completed");
    };
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    input.value = "";
}

function completeTasks() {
    let lis = document.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
        if (!lis[i].classList.contains("completed")) {
            lis[i].classList.add("completed");
            lis[i].getElementsByTagName("input")[0].checked = true;
        }
    }
}

function clearTasks() {
    let ul = document.getElementById("taskList");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}

function clearTasks() {
    let ul = document.getElementById("taskList");
    let lis = ul.getElementsByTagName("li");
    for (let i = lis.length - 1; i >= 0; i--) {
        if (lis[i].classList.contains("completed")) {
            ul.removeChild(lis[i]);
        }
    }
}

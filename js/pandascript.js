// Adding function to add a new task to the task list
function addTask() {
    // Get the input field with task text
    let input = document.getElementById("taskInput");
    let task = input.value;

    // Get the task list and create a new list item
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");

    // Create a new checkbox and add a click event listener
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        li.classList.toggle("completed");
    };

    // Add the checkbox and task text to the list item, and append it to the task list
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);

    // Reset the input field value
    input.value = "";
}

// This function marks all uncompleted tasks as completed
function completeTasks() {
    // Get all list items in the document
    let lis = document.getElementsByTagName("li");
    // Loop through each list item and mark it as completed
    for (let i = 0; i < lis.length; i++) {
        if (!lis[i].classList.contains("completed")) {
            lis[i].classList.add("completed");
            lis[i].getElementsByTagName("input")[0].checked = true;
        }
    }
}

// This function removes all completed tasks from the task list
function clearTasks() {
    // Get the task list and loop through each list item backwards
    let ul = document.getElementById("taskList");
    let lis = ul.getElementsByTagName("li");
    for (let i = lis.length - 1; i >= 0; i--) {
        // If the list item is completed, remove it from the task list
        if (lis[i].classList.contains("completed")) {
            ul.removeChild(lis[i]);
        }
    }
}

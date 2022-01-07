//place all variables here
var CurrentDayEl = document.querySelector("#currentDay");
var SaveButton = document.querySelector(".saveBtn")
var taskInput = document.querySelector("#task")
var tasks = {};
var timeEl = document.querySelector(".hour");
var now = moment().format("dddd, MMMM DD YYYY, h:mm a");

//insert moment.js elements for current day
var loadNow = function() {
 CurrentDayEl.textContent = now;
}

//on page load/refresh, get any tasks from local storage
var getTasks = function() {
    var savedTasks = localStorage.getItem('tasks');
    console.log("retrieving tasks from localStorage");
    //if nothing in local, track all tasks
    if (!tasks) {
        return false;
    }

//load the found tasks
    savedTasks = JSON.parse(savedTasks);
    for (var i = 0; i < tasks.length; i++) {
        createTask(savedTasks[i]);
    }
    

//check the task times against the current time to display them in color
var checkTime = document.querySelector(".hour");
    //get date from task li
  var hour = checkTime.getAttribute("data-hour");
  //convert the date to a moment object
  //var hour = moment(date, "L").set("hour", 17);
    
    console.log(hour);
    
 
}

//build the function for the local storage
SaveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  var saveTask = {
    task: taskInput.value.trim(),
  };

  // set new submission to local storage 
  localStorage.setItem("saveTask", JSON.stringify(saveTask));
});




loadNow();
getTasks();
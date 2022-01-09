//place all variables here
var CurrentDayEl = document.querySelector("#currentDay");
var SaveButton = document.querySelector(".saveBtn")
var taskInput = document.querySelector("#task")
var tasks = [];
var taskIdCounter = 0;
//var timeEl = document.querySelector(".hour");
var now = moment().format("dddd, MMMM DD YYYY, h:mm a");
var currentTime = moment().hours();


//insert moment.js elements for current day
var loadNow = function() {
 CurrentDayEl.textContent = now;
}

//on page load/refresh, get any tasks from local storage
var getTasks = function() {
    var savedTasks = localStorage.getItem('tasks');
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
    //get date from task li and loop thru each
      $(".description").each(function () {
       var hour = $(this).attr("data-hour");
        //check the current hour against each task hour
       if (currentTime > hour) {
        $(this).addClass("past");
         } else if 
        (currentTime == hour) {
        $(this).addClass("present");
        $(this).removeClass("past");
         } else {
          $(this).addClass("future");
          $(this).removeClass("past").removeClass("present");
         }
     });
  
  var createTask = function () {
     taskInput.setAttribute("data-task-id", taskIdCounter);
        console.log(taskDataObj);
    tasks.push(taskInput);
    saveTasks();
    taskIdCounter++;
      }
//on save, put tasks in local storage
  var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  SaveButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("saving to local!");
    saveTasks();
  });
}
    // var hour = $(this).attr("data-hour");
    // console.log ("how many" + hour);
    // var saveTask = {
    //      hour: taskInput.value.trim(),
    //  }
    // set new submission to local storage 

loadNow();
getTasks();
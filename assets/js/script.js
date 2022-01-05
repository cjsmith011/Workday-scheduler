//place all variables here
varCurrentDayEl = document.getElementById("#currentDay");



//insert moment.js elements for current day
var currentDay = function() {
    varCurrentDayEl.text = moment();
}






currentDay();
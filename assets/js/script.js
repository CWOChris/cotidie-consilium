// I need to make a function that will change the class based on the current time of day
// I need to make a function that will change the background image based on the current time of day
// I need to make a function that will change the text color based on the current time of day

var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDay);

// DONE!!! I need to make a function that will change the class based on the current time of day
var rightNow = new Date().getHours();
$(".hour-block").each(function() {
    var hourBlock = parseInt($(this).find("th").text());
    if (hourBlock < rightNow) {
        $(this).addClass("bg-secondary text-white");
    } else if (hourBlock === rightNow) {
        $(this).addClass("bg-warning text-white");
    } else {
        $(this).addClass("bg-success text-white");
    }
});

// DONE!!! I need to make a function that will display the current day and date in the header ('dddd, MMMM Do YYYY')
$(document).ready(function() {
    var currentDateEl = $(".currentDate");
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString("en-UK", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

currentDateEl.text("Today is: " + formattedDate); // This has to be in the scope of the function to work
});
// Putting currentDateEl.text(formattedDate); outside of the function doesn't work.
// DONE!!!

// DONR!!! I need to make a function that will change the text color based on the current time of day

// DONE!!! I need to make a button that will erase all of local storage
var eraseButton = document.getElementById("eraseButton");
eraseButton.addEventListener("click", function() {
    if (typeof(Storage) !== "undefined") {
        localStorage.clear();
        alert("Today's calendar has been cleared, enjoy that staycation you rascal!");
        location.reload();
    } else {
        alert("Unable to delete calendar, there isn't enough disk space to complete this operation.");
    }
});

// DONE!!! I need to save the contents of a text area to local storage when the save button is clicked.
// DONE!!! I need to make a function that will load the contents of a text area from local storage when
// DONE!!! the page is loaded.

//0700
var textArea = document.getElementById("textBox");
var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", function() {
    var textSaved = textArea.value;
    localStorage.setItem("0700", textSaved);
    location.reload();
});

//0800
var textArea1 = document.getElementById("textBox1");
var saveButton1 = document.getElementById("saveButton1");

saveButton1.addEventListener("click", function() {
    var textSaved1 = textArea1.value;
    localStorage.setItem("0800", textSaved1);
    location.reload();
});

//0900
var textArea2 = document.getElementById("textBox2");
var saveButton2 = document.getElementById("saveButton2");

saveButton2.addEventListener("click", function() {
    var textSaved2 = textArea2.value;
    localStorage.setItem("0900", textSaved2);
    location.reload();
});

//1000
var textArea3 = document.getElementById("textBox3");
var saveButton3 = document.getElementById("saveButton3");

saveButton3.addEventListener("click", function() {
    var textSaved3 = textArea3.value;
    localStorage.setItem("1000", textSaved3);
    location.reload();
});

//1100
var textArea4 = document.getElementById("textBox4");
var saveButton4 = document.getElementById("saveButton4");

saveButton4.addEventListener("click", function() {
    var textSaved4 = textArea4.value;
    localStorage.setItem("1100", textSaved4);
    location.reload();
});

//1200
var textArea5 = document.getElementById("textBox5");
var saveButton5 = document.getElementById("saveButton5");

saveButton5.addEventListener("click", function() {
    var textSaved5 = textArea5.value;
    localStorage.setItem("1200", textSaved5);
    location.reload();
});

//1300
var textArea6 = document.getElementById("textBox6");
var saveButton6 = document.getElementById("saveButton6");

saveButton6.addEventListener("click", function() {
    var textSaved6 = textArea6.value;
    localStorage.setItem("1300", textSaved6);
    location.reload();
});

//1400
var textArea7 = document.getElementById("textBox7");
var saveButton7 = document.getElementById("saveButton7");

saveButton7.addEventListener("click", function() {
    var textSaved7 = textArea7.value;
    localStorage.setItem("1400", textSaved7);
    location.reload();
});

//1500
var textArea8 = document.getElementById("textBox8");
var saveButton8 = document.getElementById("saveButton8");

saveButton8.addEventListener("click", function() {
    var textSaved8 = textArea8.value;
    localStorage.setItem("1500", textSaved8);
    location.reload();
});

//1600
var textArea9 = document.getElementById("textBox9");
var saveButton9 = document.getElementById("saveButton9");

saveButton9.addEventListener("click", function() {
    var textSaved9 = textArea9.value;
    localStorage.setItem("1600", textSaved9);
    location.reload();
});

//1700
var textArea10 = document.getElementById("textBox10");
var saveButton10 = document.getElementById("saveButton10");

saveButton10.addEventListener("click", function() {
    var textSaved10 = textArea10.value;
    localStorage.setItem("1700", textSaved10);
    location.reload();
});

//1800
var textArea11 = document.getElementById("textBox11");
var saveButton11 = document.getElementById("saveButton11");

saveButton11.addEventListener("click", function() {
    var textSaved11 = textArea11.value;
    localStorage.setItem("1800", textSaved11);
    location.reload();
});


// The following code runs a for loop that will load the contents of the key value pairs in local storage

document.addEventListener("DOMContentLoaded", function() {
    var localStorageList = document.getElementById("keyList");
        
    }, 25);
});









// window.onload = function() {
//     var textAreas = document.querySelectorAll("#textbox");
//     var saveButtons = document.querySelectorAll("button");

//     for (var i = 0; i < textAreas.length; i++) {
//         var key = "textArea" + i;
//         var storedText = localStorage.getItem(value);
//         if (storedText) {
//             textAreas[i].value = storedText;
//         }
//         saveButtons[i].addEventListener("click", function() {
//             var index = Array.prototype.indexOf.call(saveButtons, this);
//             var key = "textArea" + index;
//             var textSaved = textAreas[index].value;
//             localStorage.setItem(key, textSaved);
//         });
//     }
// };


// WIP3 changes-
//  -added "location.reload();" to the end of each save button function
//  -added "location.reload();" to the end of the erase button function
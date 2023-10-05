// DONE!!! I need to make a function that will change the class based on the current time of day
var rightNow = new Date().getHours();  // Variable declared here gets the current hour of the day in 24 hour time.
$(".hour-block").each(function() {  // Function cycles through each <tr> element with the class of "hour-block" to change the class based on the current time of day.
    var hourBlock = parseInt($(this).find("th").text());  // Parses the text of the <th> element in each <tr> element with the class of "hour-block" to an integer.
    if (hourBlock < rightNow) {  // If the hourBlock is less than the current hour of the day, e.g. event is in the past, the class is changed to "bg-secondary text-white".
        $(this).addClass("bg-secondary text-white");  // "this" refers to the <tr> element with the class of "hour-block"
    } else if (hourBlock === rightNow) {  // If the hourBlock is equal to the current hour of the day, e.g. event is in the present, the class is changed to "bg-warning text-white".
        $(this).addClass("bg-warning text-white");
    } else {  // If the hourBlock is greater than the current hour of the day, e.g. event is in the future, the class is changed to "bg-success text-white".
        $(this).addClass("bg-success text-white");
    }
});

// DONE!!! I need to make a function that will display the current day and date in the header ('dddd, MMMM Do YYYY')
$(document).ready(function() {
    var currentDateEl = $(".currentDate");  // Variable declared here calls the class of the div element to make the date appear on the user's DOM
    var currentDate = dayjs();  // Calls the dayjs library per the instructions in the starter code
    var formattedDate = currentDate.format("dddd, DD MMMM YYYY"); // I found this on stack overflow, it's a lot shorter than the code I was using.
    // toLocaleDateString("en-UK", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

currentDateEl.text("Today is: " + formattedDate); // This has to be in the scope of the function to work
});
// Putting currentDateEl.text(formattedDate); outside of the function doesn't work.
// DONE!!!

// DONE!!! I need to make a function that will change the text color based on the current time of day

// DONE!!! I need to make a button that will erase all of local storage
var eraseButton = document.getElementById("eraseButton");  // Variable declared here to make the erase button available to the erase button event listener.
eraseButton.addEventListener("click", function() {  // When the erase button is clicked, the following function is run.
    if (typeof(Storage) !== "undefined") {  // Function only executes if local storage contains any data.
        localStorage.clear();  // Local storage is cleared here.
        alert("Today's calendar has been cleared, enjoy that staycation you rascal!");  // Snarky alert is displayed to let the user know that the calendar has been cleared.
        location.reload();  // The page is reloaded here to make the DOM immediately manifest the cleared local storage as an empty list in "Today's Events".
    } else {
        alert("Unable to delete calendar, there isn't enough disk space to complete this operation.");  // If local storage is empty, the user is alerted that there is nothing to delete. Don't think too hard about this one.
    }
});

// DONE!!! I need to save the contents of a text area to local storage when the save button is clicked.
// DONE!!! I need to make a function that will load the contents of a text area from local storage when
// DONE!!! the page is loaded.

// The following button event listeners save the contents of the text areas to local storage when the save button is clicked.
// As with the HTML, I commented out the time blocks that I didn't need to use for this project.

// //0700
// var textArea = document.getElementById("textBox");
// var saveButton = document.getElementById("saveButton");

// saveButton.addEventListener("click", function() {
//     var textSaved = textArea.value;
//     localStorage.setItem("07:00", textSaved);
//     location.reload();
// });

// //0800
// var textArea1 = document.getElementById("textBox1");
// var saveButton1 = document.getElementById("saveButton1");

// saveButton1.addEventListener("click", function() {
//     var textSaved1 = textArea1.value;
//     localStorage.setItem("08:00", textSaved1);
//     location.reload();
// });

//0900
var textArea2 = document.getElementById("textBox2");  // Variable declared here to make the text area available to the save button event listener.
var saveButton2 = document.getElementById("saveButton2"); // Variable declared here to make the save button available to the save button event listener.

saveButton2.addEventListener("click", function() {  // When the save button is clicked, the function is run.
    var textSaved2 = textArea2.value;  // Variable declared here to make the user defined text contained in the text area available to the save button event listener.
    localStorage.setItem("09:00", textSaved2);  // The key and value pair is saved to local storage here.
    location.reload();  // The page is reloaded here to make the DOM immediately manifest the saved keys and values as list items in "Today's Events".
    // location.reload(); may be unnecessary, however, I added it to each button to make the DOM immediately manifest the saved keys and values as list items in "Today's Events".
});

//1000
var textArea3 = document.getElementById("textBox3");
var saveButton3 = document.getElementById("saveButton3");

saveButton3.addEventListener("click", function() {
    var textSaved3 = textArea3.value;
    localStorage.setItem("10:00", textSaved3);
    location.reload();
});

//1100
var textArea4 = document.getElementById("textBox4");
var saveButton4 = document.getElementById("saveButton4");

saveButton4.addEventListener("click", function() {
    var textSaved4 = textArea4.value;
    localStorage.setItem("11:00", textSaved4);
    location.reload();
});

//1200
var textArea5 = document.getElementById("textBox5");
var saveButton5 = document.getElementById("saveButton5");

saveButton5.addEventListener("click", function() {
    var textSaved5 = textArea5.value;
    localStorage.setItem("12:00", textSaved5);
    location.reload();
});

// I spent a lot of time in the Army using 24 hour time, and still use it day in and day out, so I'm going to use it here as well.
//1300
var textArea6 = document.getElementById("textBox6");
var saveButton6 = document.getElementById("saveButton6");

saveButton6.addEventListener("click", function() {
    var textSaved6 = textArea6.value;
    localStorage.setItem("13:00", textSaved6);
    location.reload();
});

//1400
var textArea7 = document.getElementById("textBox7");
var saveButton7 = document.getElementById("saveButton7");

saveButton7.addEventListener("click", function() {
    var textSaved7 = textArea7.value;
    localStorage.setItem("14:00", textSaved7);
    location.reload();
});

//1500
var textArea8 = document.getElementById("textBox8");
var saveButton8 = document.getElementById("saveButton8");

saveButton8.addEventListener("click", function() {
    var textSaved8 = textArea8.value;
    localStorage.setItem("15:00", textSaved8);
    location.reload();
});

//1600
var textArea9 = document.getElementById("textBox9");
var saveButton9 = document.getElementById("saveButton9");

saveButton9.addEventListener("click", function() {
    var textSaved9 = textArea9.value;
    localStorage.setItem("16:00", textSaved9);
    location.reload();
});

//1700
var textArea10 = document.getElementById("textBox10");
var saveButton10 = document.getElementById("saveButton10");

saveButton10.addEventListener("click", function() {
    var textSaved10 = textArea10.value;
    localStorage.setItem("17:00", textSaved10);
    location.reload();
});

// //1800
// var textArea11 = document.getElementById("textBox11");
// var saveButton11 = document.getElementById("saveButton11");

// saveButton11.addEventListener("click", function() {
//     var textSaved11 = textArea11.value;
//     localStorage.setItem("18:00", textSaved11);
//     location.reload();
// });

// The following code runs a for loop that will load the contents of the key value pairs in local storage when the page is loaded.

document.addEventListener("DOMContentLoaded", function() {  // Function that uses a for loop to load the contents of the key value pairs in local storage when the page is loaded.
    setTimeout(function() {
        var localStorageList = document.getElementById("keyList"); // Variable declared here to make the list on the DOM available to the for loop.
        for (let i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);  // Variable declared here to make the keys in local storage available to the for loop.
            var value = localStorage.getItem(key);  // Variable declared here to make the values in local storage available to the for loop.
            var listItem = document.createElement("li");  // Variable declared here to make the list items available to the for loop.
            listItem.textContent = `${key}` + `: ` + `${value}`;  // I thought I needed to split these apart to make the class changes work with the parseInt, but I don't believe that is the case...
            listItem.setAttribute("class", "list-group-item");  // Added this setAttribute to make the class changes work later on.
            localStorageList.appendChild(listItem);
        }
        var listArray = Array.from(localStorageList.children);  // Variable declared here to construct a array from the list items on DOM.
        listArray.sort(function(a, b) {  // Function that sorts the array alphabetically, or in this case, chronologically.
            return a.textContent.localeCompare(b.textContent);  // Returns the array sorted chronologically.
        });
        localStorageList.innerHTML = "";  // Clears the list on the DOM.
        listArray.forEach((item) => localStorageList.appendChild(item)) // Adds the sorted array back to the list on the DOM.
    }, 25);  // I added a 25 millisecond delay to the function to make sure the list items are loaded before the function runs.
});


function updateEventBlocks() {  // Function that updates the color classes in realtime.
    var rightNow = new Date().getHours();  // Variable declared here gets the current hour of the day in 24 hour time.
    $(".event-block li").each(function() {  // Function cycles through each <li> element with the class of "event-block" to change the class based on the current time of day.
        var hourBlock = parseInt($(this).text().split(":")[0]);  // ParseInt converts the text of each list item into an integer.
        $(this).removeClass("bg-secondary text-white", "bg-warning text-white", "bg-success text-white");  // Wipes out the color classes so that the function can run.
        if (hourBlock < rightNow) {  // Function continues here, same as the function towards the top of the script.
            $(this).addClass("bg-secondary text-white");
        } else if (hourBlock === rightNow) {
            $(this).addClass("bg-warning text-white");
        } else {
            $(this).addClass("bg-success text-white");
        }
    });
}
setInterval(updateEventBlocks, 20);  // I added this to the console to make sure the function was running every 20 milliseconds.
setInterval(console.log("The event blocks have been updated"), 60000);  // I added this to the console to make sure the function was running every minute.
updateEventBlocks();  // Executes the function to make sure the list items are updated when the page is loaded, just like the <tr> elements.



// WIP1+2 changes-
//  -added a button to erase all of local storage
//  -added a button to save the contents of a text area to local storage


// WIP3 changes-
//  -added "location.reload();" to the end of each save button function
//  -added "location.reload();" to the end of the erase button function

// WIP4 changes-
//  -added script to display Today's Events in chronological order
//  -added script to change the color of Today's Events based on the current time of day
//  =added a color key under Today's Events to delineate the color scheme for past, present, and future events

// WIP5 changes-
//  -added function to update color classes in realtime
//  -added button to change from dark theme to light theme and back again

// WIP6 changes-
//  -adjusted the function to display the current day and date in the header to call the dayjs library
//  -adjusted the "A simple calendar app for scheduling your work day" from h3 to h4
//  -added comments to the code to help better understand what I'm doing and why I'm doing it
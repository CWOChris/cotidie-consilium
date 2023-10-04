// I need to make a function that will change the class based on the current time of day






// I need to make a function that will change the background image based on the current time of day



// I need to make a function that will change the text color based on the current time of day




// I need to save the contents of a text area to local storage when the save button is clicked.



// I need to make a function that will load the contents of a text area from local storage when
// the page is loaded.

window.onload = function() {
    var textAreas = document.querySelectorAll("textarea");
    var saveButtons = document.querySelectorAll("button");

    for (var i = 0; i < textAreas.length; i++) {
        var key = new Date().toISOString() + "-" + i;
        var storedText = localStorage.getItem(key);
        if (storedText) {
            textAreas[i].value = storedText;
            textAreas[i].setAttribute(storedText); //set the attribute to the stored text not working
        }
        saveButtons[i].addEventListener("click", function() {
            var index = Array.prototype.indexOf.call(textAreas, this.previousElementSibling);
            var key = new Date().toISOString() + "-" + index;
            var textSaved = textAreas[index].value;
            localStorage.setItem(key, textSaved);
        });
    }
};




//0700
var textArea = document.getElementById("textArea");
var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", function() {
    var textSaved = textArea.value;
    localStorage.setItem("0700", textSaved);
});

//0800
var textArea1 = document.getElementById("textArea1");
var saveButton1 = document.getElementById("saveButton1");

saveButton1.addEventListener("click", function() {
    var textSaved1 = textArea1.value;
    localStorage.setItem("0800", textSaved1);
});

//0900
var textArea2 = document.getElementById("textArea2");
var saveButton2 = document.getElementById("saveButton2");

saveButton2.addEventListener("click", function() {
    var textSaved2 = textArea2.value;
    localStorage.setItem("0900", textSaved2);
});

//1000
var textArea3 = document.getElementById("textArea3");
var saveButton3 = document.getElementById("saveButton3");

saveButton3.addEventListener("click", function() {
    var textSaved3 = textArea3.value;
    localStorage.setItem("1000", textSaved3);
});

//1100
var textArea4 = document.getElementById("textArea4");
var saveButton4 = document.getElementById("saveButton4");

saveButton4.addEventListener("click", function() {
    var textSaved4 = textArea4.value;
    localStorage.setItem("1100", textSaved4);
});

//1200
var textArea5 = document.getElementById("textArea5");
var saveButton5 = document.getElementById("saveButton5");

saveButton5.addEventListener("click", function() {
    var textSaved5 = textArea5.value;
    localStorage.setItem("1200", textSaved5);
});

//1300
var textArea6 = document.getElementById("textArea6");
var saveButton6 = document.getElementById("saveButton6");

saveButton6.addEventListener("click", function() {
    var textSaved6 = textArea6.value;
    localStorage.setItem("1300", textSaved6);
});

//1400
var textArea7 = document.getElementById("textArea7");
var saveButton7 = document.getElementById("saveButton7");

saveButton7.addEventListener("click", function() {
    var textSaved7 = textArea7.value;
    localStorage.setItem("1400", textSaved7);
});

//1500
var textArea8 = document.getElementById("textArea8");
var saveButton8 = document.getElementById("saveButton8");

saveButton8.addEventListener("click", function() {
    var textSaved8 = textArea8.value;
    localStorage.setItem("1500", textSaved8);
});

//1600
var textArea9 = document.getElementById("textArea9");
var saveButton9 = document.getElementById("saveButton9");

saveButton9.addEventListener("click", function() {
    var textSaved9 = textArea9.value;
    localStorage.setItem("1600", textSaved9);
});

//1700
var textArea10 = document.getElementById("textArea10");
var saveButton10 = document.getElementById("saveButton10");

saveButton10.addEventListener("click", function() {
    var textSaved10 = textArea10.value;
    localStorage.setItem("1700", textSaved10);
});

//1800
var textArea11 = document.getElementById("textArea11");
var saveButton11 = document.getElementById("saveButton11");

saveButton11.addEventListener("click", function() {
    var textSaved11 = textArea11.value;
    localStorage.setItem("1800", textSaved11);
});


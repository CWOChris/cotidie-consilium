// I need to make a function that will change the class based on the current time of day






// I need to make a function that will change the background image based on the current time of day



// I need to make a function that will change the text color based on the current time of day




// I need to save the contents of a text area to local storage when the save button is clicked.



// I need to make a function that will load the contents of a text area from local storage when
// the page is loaded.

//0700
window.onload = function() {
    var storedText = localStorage.getItem("0700");
    if (storedText  !== null) {
        textArea.value = storedText;
    }
};

//0800
window.onload = function() {
    var storedText1 = localStorage.getItem("0800");
    if (storedText1  !== null) {
        textArea1.value = storedText1;
    }
};

//0900
window.onload = function() {
    var storedText2 = localStorage.getItem("0900");
    if (storedText2  !== null) {
        textArea2.value = storedText2;
    }
};

//1000
window.onload = function() {
    var storedText3 = localStorage.getItem("1000");
    if (storedText3  !== null) {
        textArea3.value = storedText3;
    }
};

//1100
window.onload = function() {
    var storedText4 = localStorage.getItem("1100");
    if (storedText4  !== null) {
        textArea4.value = storedText4;
    }
};

//1200
window.onload = function() {
    var storedText5 = localStorage.getItem("1200");
    if (storedText5  !== null) {
        textArea5.value = storedText5;
    }
};

//1300
window.onload = function() {
    var storedText6 = localStorage.getItem("1300");
    if (storedText6  !== null) {
        textArea6.value = storedText6;
    }
};

//1400
window.onload = function() {
    var storedText7 = localStorage.getItem("1400");
    if (storedText7  !== null) {
        textArea7.value = storedText7;
    }
};

//1500
window.onload = function() {
    var storedText8 = localStorage.getItem("1500");
    if (storedText8  !== null) {
        textArea8.value = storedText8;
    }
};

//1600
window.onload = function() {
    var storedText9 = localStorage.getItem("1600");
    if (storedText9  !== null) {
        textArea9.value = storedText9;
    }
};

//1700
window.onload = function() {
    var storedText10 = localStorage.getItem("1700");
    if (storedText10  !== null) {
        textArea10.value = storedText10;
    }
};

//1800
window.onload = function() {
    var storedText11 = localStorage.getItem("1800");
    if (storedText11  !== null) {
        textArea11.value = storedText11;
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


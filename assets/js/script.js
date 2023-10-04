// I need to make a function that will change the class based on the current time of day






// I need to make a function that will change the background image based on the current time of day



// I need to make a function that will change the text color based on the current time of day




// I need to save the contents of a text area to local storage when the save button is clicked
var image = document.querySelector("img");
var input = document.querySelector("input");


image.addEventListener("click", function() => {
    localStorage.setItem("name", input.value);
    image.src = input.value;
    });
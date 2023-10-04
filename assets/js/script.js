// I need to make a function that will change the class based on the current time of day






// I need to make a function that will change the background image based on the current time of day



// I need to make a function that will change the text color based on the current time of day




// I need to save the contents of a text area to local storage when the save button is clicked
var button = document.querySelector("button");
var input = document.querySelector("input");
button.addEventListener("click", () => {
    localStorage.setItem("0900", input.value);
});

console.log(button);
console.log(input);

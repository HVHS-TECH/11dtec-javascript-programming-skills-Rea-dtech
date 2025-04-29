//variables by rea 29/4/4 the purpose of this code is to learn js on it

//variables
let myname = "";

//main code
console.log("my name is " + myname);

//functions
function updateName() {
    const inputElement = document.getElementById("nameInput");
    myname = inputElement.value;
    console.log("my name is " + myname);
    document.getElementById("output").innerText = "My name is " + myname;
}
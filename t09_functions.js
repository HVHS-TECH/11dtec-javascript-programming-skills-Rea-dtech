/*
functions by rea 8/5/25 
the purpose of this code is to learn js on it
*/

//variables
/*
let name = prompt ('what is your name?');
let age = prompt ('what is your age?');
let money = prompt ('how much money do you have?');
let born = prompt ('what year were you born?');
let year = new Date().getFullYear();
let array = ["html", "C", "C++", "C#", "javascript", "python", "java", "php", "ruby", "swift", "go", "kotlin", "rust", "typescript", "dart", "sql", "r", "matlab", "assembly", "pascal", "fortran"];
//date
let specificDate = new Date(2025, 4, 1, 10, 30, 0); 
console.log(specificDate);

//main code
/*alert(
    "Arrays by Rea 1/4/25\n" +
    "The purpose of this code is to learn JS\n" +
    "Time: " + specificDate + "\n" +
    "Hi " + name + ", as of " + year + " you are " + age + "\n" +
    "You were born in " + born + "\n" +
    "In 10 years you will be " + (parseInt(born) + 10) + "\n" +
    "You have $" + money + "\n" +
    "Half of your money is $" + (money / 2)
);
if (money > 4   ) {
   
    alert ("i predict that you were born in " + born + "\n" +
         "your pocket money is " + money + "\n" +
        "you can afford to buy a chocolate bar");
}
        */
// loop
let userNumber = parseInt(prompt("Enter a number to add to the total:"));
let total = 0;
for (let i = 0; i < 6; i++) { 
    total += i + userNumber;
    console.log('looping', i, 'current total:', total);
}
alert("Final total with your number added each time: " + total);

//was fixing this

alert ("some languges are: " + array);
let language = parseInt(prompt("what is your favorite programming language? number 1-21")) - 1;
if (language >= 0 && language < array.length) {
	alert("your favorite programming language is " + array[language]);
} else {
	alert("Invalid choice. Please enter a number between 1 and 21.");
}
//date and time attepts
const d = new Date();
console.log (d);
// was trying to add date and time

//functions

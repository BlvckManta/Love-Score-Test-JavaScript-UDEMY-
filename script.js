alert("Welcome to the Love Calculator! Let's calculate how much you love each other! input both of your names!");
var myName = prompt("What is your name?");
var theirName = prompt("What is their name?");

console.log(myName);
console.log(theirName);

var n = Math.random();
n = n*100; 
n = Math.floor(n)+1;

if (n > 70){
    alert("You have a " + n + "% love meter! You love each other more than Kanye loves Kanye!");
} 

if (n > 30 && n <= 70){
    alert("You have a " + n + "% love meter! Work on your love!");
}

if (n <= 30){
    alert("You have a " + n + "% love meter! You go together like oil and water!");
}





     
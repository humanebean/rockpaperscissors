console.log("Hello World");
function getComputerChoice() {
    choices = ["Rock","Paper","Scissors"];
    console.log(choices[Math.floor(Math.random()*choices.length)]);
}
getComputerChoice();
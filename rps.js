console.log("Hello World");
function getComputerChoice() {
    choices = ["Rock","Paper","Scissors"];
    choice=(choices[Math.floor(Math.random()*choices.length)]);
    console.log(choice);
    return choice;
}
function playRound(pc, cc){
    win=false;
    cc=cc.toLowerCase();
    result ="";
        if (pc=="rock")
           { if (cc=="paper"){ result="Paper beats rock. You lose.";};
            if(cc=="scissors"){result="Rock beats scissors. You win.";};
            if(cc=="rock"){result="Both players picked rock. It's a tie.";};
            }
        else if (pc=="paper")
            { if(cc=="rock"){result="Paper beats rock. You win.";};
            if(cc=="scissors"){result="Scissors beats paper. You lose.";};
            if(cc=="paper"){result="Both players picked paper. It's a tie.";};
            }
        else if (pc=="scissors")
           { if(cc=="paper"){result="Scissors beats paper. You win.";};
            if(cc=="rock"){result="Rock beats scissors. You lose.";};
            if(cc=="scissors"){result="Both players picked scissors. It's a tie.";};
            }
 
    console.log(result);
        return result;
}

function getUserChoice(){
    let pc=prompt("Will you pick rock, paper or scissors?");
    pc=pc.toLowerCase();
    while(pc!="rock" && pc!="paper" && pc!="scissors"){
        pc=prompt("Invalid choice. Please pick rock, paper or scissors.");
    }
    return pc;
}
let win=false;
let winCount=0;
let roundCount=0;
while(roundCount<5){
    let cc=getComputerChoice();
    let pc=getUserChoice();
    let result=playRound(pc,cc);
    roundCount+=1;
    if(result.includes("You win.")){winCount+=1};
    console.log("You have won " + (winCount) + " of " + roundCount + " rounds.")
    };
if (winCount>=3){console.log("Congratulations! You won")}
else{console.log("You lose.")};
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompChoice=()=>{
  const options=["rock","paper","scissors"];
  let choiceIdx = Math.floor((Math.random() * 3) );
   return options[choiceIdx];
  

}
const showWinner=(userwin,userChoice,compChoice)=>{
  if(userwin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`User win! your ${userChoice} beats ${compChoice}`;
    msg.style.background="green";
   
  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`you lost! ${compChoice} beats your ${userChoice}` ;
    msg.style.background="red";
  }
}

const drawgame=()=>{
  msg.innerText="its a draw! Play Again"; 
  msg.style.background=" rgb(28, 28, 60)";
}
const playGame=(userChoice)=>{

  
  let compChoice=gencompChoice();
  if(userChoice===compChoice){
    drawgame();
  }
  else{
    let userwin=false;
    if(userChoice==="rock"){
      userwin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
      userwin=compChoice==="scissors" ? false : true;
    }
    else 
    {
      userwin=compChoice==="rock" ? false : true;
    }
    showWinner(userwin,userChoice,compChoice);
  }


}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    
    playGame(userChoice);
  });
});
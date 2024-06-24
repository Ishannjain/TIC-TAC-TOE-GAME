let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".box");
const result=document.querySelector(".result")
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceuser=choice.getAttribute("id");
        console.log("choice is clicked",choiceuser);
        playgame(choiceuser);

    });

});
const drawgame=()=>{
    console.log("game was draw")
    result.innerText="DRAW!";
    
};
const playgame=(userchoice)=>{
    console.log("userchoice:",userchoice);
     const compchoice=gencompchoice();
     console.log("compchoice:",compchoice);
     
     if(userchoice===compchoice){
       drawgame();
     }
     else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
     }
//genrate computer choice-->module
};
const gencompchoice=()=>{
      let options=["rock","paper","scissors"];
      const ranidx=Math.floor(Math.random()*3);
      return options[ranidx];
}
const showwinner=(winner,userchoice,compchoice)=>{
if (winner){
    console.log("you win");
    result.innerText=`YOU WIN! ,your ${userchoice} beats ${compchoice}`;
    result.style.backgroundColor="green";
    userscore++;
    user.innerText=userscore;

}
else{
    console.log("you lose");
    result.innerText=`YOU lose! ${compchoice} beats your ${userchoice}`;
    result.style.backgroundColor="red";
    computerscore++;
    comp.innerText=computerscore;
}
}
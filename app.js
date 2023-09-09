let gameSeq=[];
let userSeq=[];

let level=0;
let started=false;

let btns=["red","yellow","purple","green"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is Started");
        started=true;
    }

    levelUp();
})


function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
    console.log(gameSeq);
}

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },1000);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML= `Level <b>${level}</b> <br> high score <b>${highscore}</b>`;

    let ranIndex=Math.floor(Math.random()*4);
    let ranColor=btns[ranIndex];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    gameFlash(ranBtn);
}
let highscore=0;
function checkAns(userIndex){
    highscore=Math.max(highscore,level);
    if(gameSeq[userIndex]===userSeq[userIndex]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`game over ! your score was <b>${level}</b> <br> press any key to start <br> high score is <b>${highscore}</b>`;
        document.querySelector("body").style.backgroundColor="red";
        setInterval(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
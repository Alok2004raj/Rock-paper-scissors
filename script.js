let images=document.querySelectorAll(".images");
let msg1=document.getElementById("msg1")
let msg2=document.getElementById("msg2")
let alok=document.querySelector("#alok")
let raj=document.querySelector("#raj")
let uscore=0
let cscore=0
let userscore=document.querySelector("#userscore")
let compscore=document.querySelector("#compscore")

const getcopmchoice=()=>{
    let choice=["rock","paper","scissors"]
    let indx=Math.floor(Math.random()*3)

    return choice[indx]
}
const drawgame=()=>{
 msg1.style.display="none"
   

}
const showwinner=(userwin,userchoice,copmchoice)=>{
    if(userwin){
        uscore++;
        userscore.innerText=uscore;
        msg1.style.display="none"
        

    }
    else{
        cscore++;
        compscore.innerText=cscore;
        msg1.style.display="none"
        

    }
    if(uscore>=5){
        msg2.style.display="flex"
        alok.style.display="flex"
        // userscore.innerText=0;
        // compscore.innerText=0;
        // uscore=0
        // cscore=0

    }
    if(cscore>=5){
        msg2.style.display="flex"
        raj.style.display="flex"
        // userscore.innerText=0;
        // compscore.innerText=0;
        // uscore=0
        // cscore=0
    }
    msg2.addEventListener('click',()=>{
         userscore.innerText=0;
        compscore.innerText=0;
        uscore=0
        cscore=0
        alok.style.display="none"
        raj.style.display="none"
        msg1.style.display="flex"
        
        msg2.style.display="none"
    })

}

const playGame=(userchoice)=>{
    const copmchoice=getcopmchoice();


    // console.log("user=",userchoice)
    // console.log("comp=",copmchoice)
    if(userchoice==copmchoice){
        drawgame()
    }
    else{
        let userwin=true
       if(userchoice==="rock"){
        //paper,scissors
        userwin=copmchoice==="paper"?false:true
       }
       if(userchoice==="paper"){
        //rock,scissors
        userwin=copmchoice==="scissors"?false:true
       }
       if(userchoice==="scissors"){
        //rock,paper
        userwin=copmchoice==="rock"?false:true
       }
       showwinner(userwin,userchoice,copmchoice)
      
    }

}


images.forEach((image)=>{
    
 image.addEventListener('click',()=>{
    // console.log(image)
    let userchoice=image.getAttribute("id")
    //   console.log(userchoice)
        
        playGame(userchoice)
 })
 
})

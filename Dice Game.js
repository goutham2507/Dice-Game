const btn = document.getElementById("click-here");
btn.addEventListener("click",function(){
var randomnum = Math.floor(Math.random()*6)+1;
if(randomnum===2 || randomnum===4 || randomnum===6){
    var diceimg1="dice"+randomnum+".png.png";
}else{
    var diceimg2="dice"+randomnum+".png.png";
}
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[0];
image1.setAttribute("src", diceimg1);
image2.setAttribute("src", diceimg2);
var randomnum1 = Math.floor(Math.random()*6)+1;
if(randomnum1===2 || randomnum1===4 || randomnum1===6){
    var diceimgg1="dice"+randomnum1+".png.png";
}else{
    var diceimgg2="dice"+randomnum1+".png.png";
}
var image3= document.querySelectorAll(".imagine")[0];
var image4= document.querySelectorAll(".imagine")[0];
image3.setAttribute("src", diceimgg1);
image4.setAttribute("src", diceimgg2);
if(randomnum>randomnum1){
document.querySelector(".t1").innerHTML="Player 1 wins!";
document.querySelector(".t1").classList.add("tt2");
}else if(randomnum<randomnum1){
    document.querySelector(".t1").innerHTML="Player 2 wins!";
    document.querySelector(".t1").classList.add("tt2");
}else{
    document.querySelector(".t1").innerHTML="DrawMatch..";
    document.querySelector(".t1").classList.add("tt2");
}
}
);

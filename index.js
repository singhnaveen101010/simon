
function playaudio(pressed,user){
    var audloc="div"+pressed;
   var audio=new Audio("sounds/"+pressed+".mp3");
   var classname="";
   if(user==="pc")
     classname="fade";
   else if(user==="player")
      classname="shadow";
   $("."+audloc).addClass(classname); 
   setTimeout(function(){audio.play();},100); 
   setTimeout(function(){$("."+audloc).removeClass(classname);},200);
 } 



var pcstring="start";
var userstring="start";
var noclick=0;
var level=0;

var levelcmp=0;
function failanimation(){
   $("h1").text("game over, score:"+(levelcmp)*(3*levelcmp))
    $("h2").text("press any key to restart");
   $(".main").addClass("alert")
   setTimeout(function(){$(".main").removeClass("alert");},200);
   var failaud=new Audio("sounds/wrong.mp3");
   failaud.play();
}

function restart(){
   
   pcstring="start";
   userstring="start";
   noclick=0;
   level=0;
   score=1;
   $(document).on("keydown",function(event){
      if(pcstring=="start")
         startlevel(++level);
    });
 }

$(".button").on("click",function() {  
   noclick++;
   var pressed=this.innerText;
   userstring=userstring.concat(pressed);
   playaudio(pressed,"player");
   console.log("userstring:" +userstring); 
   if(pcstring.includes(userstring,0))
   { if(noclick===level)
      startlevel(++level);}
   else 
    { 
      failanimation();
       restart();
     }
     
});

$(document).on("keydown",function(event){
   var ch=event.key;
   if((ch==="a" || ch==="A") && pcstring==="start")
      {
       startlevel(++level);
      }   

});

function startlevel(num)
  {
   levelcmp=level-1;
   userstring="start";
  noclick=0;
   console.log("level:"+num);
   $("h1").text("level "+num);
   $("h2").text("");
   var pcno=1+Math.floor(4*Math.random());
   pcstring=pcstring.concat(pcno);
    setTimeout(function(){
   playaudio(pcno,"pc");
 },1000);
} 
   
  

 


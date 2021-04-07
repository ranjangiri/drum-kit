var a=document.querySelectorAll(".drum").length;
for (var i=0; i<a; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",got);
}
function got(){
    var key=this.innerHTML;
    makesound(key);
    buttonanuimation(key);
    
}
//
  //  alert("i got ");
  

  // key prees event
document.addEventListener("keypress",function(e){
    makesound(e.key);
    buttonanuimation(e.key);
});




function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
          break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
          break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
        break;
        default:
            alert("praven chutiya check right drum key");
            break;
    }

}

function buttonanuimation(q){
    var a=document.querySelector("."+q);
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove("pressed");},400);
}
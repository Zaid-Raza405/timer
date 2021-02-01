var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;
var displayhour = document.getElementById("hour");
var displayMin = document.getElementById("min");
var displaySec = document.getElementById("sec");
var displayMilisec = document.getElementById("milisec");

var a = null;


function timer(){
    milisec++;
    displayMilisec.innerHTML = milisec
    if(milisec ==100){
        sec++;
        displaySec.innerHTML = sec
        milisec = 0
    }
    else if (sec == 60){
        min++;
        displayMin.innerHTML = min
        sec = 0
    }
    else if (min == 60){
        hour++;
        displayhour.innerHTML = hour
        min = 0
    }
    
}




function start(){
interval = setInterval(timer,10)

}

function pause(){
    clearInterval(interval)
}
function reset(){
    hour = 0;
    min = 0;
    sec = 0;
     milisec = 0;    
    displayhour.innerHTML = hour;
displayMin.innerHTML = min;
displaySec.innerHTML = sec;
displayMilisec.innerHTML = milisec;
pause()

}
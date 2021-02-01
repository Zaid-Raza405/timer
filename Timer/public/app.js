var h = document.getElementById('hour')
var m = document.getElementById('minute')
var s = document.getElementById('second')

var starttimer = null
function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    }
    else if(s.value != 0 ){
        s.value--;
    }
    else if(m.value!= 0 && s.value == 0){
        s.value = 59;
        m.value--;
    }
else if (h.value != 0 && m.value == 0){
    m.value = 60;
    h.value--;
}
return
}
function stoptimer(){
    clearInterval(starttimer)
}
function reset(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stoptimer()

}

function last(){
function startinterval(){
    starttimer = setInterval(function() {
        timer();
    }, 1000);
}
startinterval()
}
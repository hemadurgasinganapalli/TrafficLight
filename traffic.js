let stop=document.getElementById("stopButton");
let ready=document.getElementById("readyButton");
let go=document.getElementById("goButton");
let stop1=document.getElementById("stopLight");
let ready1=document.getElementById("readyLight");
let go1=document.getElementById("goLight");

function stopButton(){
    stop.style.backgroundColor="red";
    ready.style.backgroundColor="#4b5069";
    go.style.backgroundColor="#4b5069";
    stop1.style.backgroundColor="red";
    ready1.style.backgroundColor="#4b5069";
    go1.style.backgroundColor="#4b5069";
}
function readyButton(){
    stop.style.backgroundColor="#4b5069";
    ready.style.backgroundColor="yellow";
    go.style.backgroundColor="#4b5069";
    stop1.style.backgroundColor="#4b5069";
    ready1.style.backgroundColor="yellow";
    go1.style.backgroundColor="#4b5069";

}
function goButton(){
    stop.style.backgroundColor="#4b5069";
    ready.style.backgroundColor="#4b5069";
    go.style.backgroundColor="green";
    stop1.style.backgroundColor="#4b5069";
    ready1.style.backgroundColor="#4b5069";
    go1.style.backgroundColor="green";

}


let clock_hours = document.getElementById('hours');
let clock_minutes = document.getElementById('minutes');
let clock_seconds = document.getElementById('seconds');
let date_span = document.getElementById('date');
// let svg_sec = document.getElementById('svg-seconds');

const dateObj = new Date();
const todayDate = `${dateObj.getDate()}-${dateObj.getMonth()}-${dateObj.getFullYear()}`;
date_span.innerText = todayDate;

let lastSec = 0;
let currSec = 0;
let CirSec = 0;

setInterval(() => {
    date = new Date();
    deg_hours = (date.getHours()*30)+(date.getMinutes() * 0.5);
    deg_minutes = date.getMinutes()*6;
    currSec = date.getSeconds();
    if(currSec<lastSec){
        CirSec += 360;
    }
    lastSec = currSec;
    
    // svg_sec.style.strokeDasharray = `${currSec} ${60-currSec}`;
    // svg_sec.style.strokeDashoffset = 16.5 - currSec;
    deg_seconds = CirSec+currSec*6;
    clock_hours.style.transform = `rotate(${deg_hours+"deg"})`;
    clock_minutes.style.transform = `rotate(${deg_minutes+"deg"})`;
    clock_seconds.style.transform = `rotate(${deg_seconds+"deg"})`;
    // document.querySelector("#dot-sec").style.transform = `rotate(${deg_seconds+"deg"})`;
}, 1);
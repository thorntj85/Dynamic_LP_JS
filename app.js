// DOM ELEMENTS
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// OPTIONS
https://www.youtube.com/watch?v=fSTQzlprGLI
// 32.55

// SHOW TIME
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// SET AM OR PM
const amPm = hour >= 12 ? 'PM' : 'AM';

//  12hr format
hour = hour % 12 || 12;

// OUTPUT
time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime, 1000);
}

// ADD ZEROS
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// SET BACKGROUND AND GREETING
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

if(hour < 12){
    // morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = 'Good Morning';
} else if(hour < 18){
    // afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
} else {
    // evening
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
}
}

// GET NAME
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// SET NAME
function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();    
        } else{
            localStorage.setItem('name', e.target.innerText);
        }
    }
}

// GET FOCUS
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// SET FOCUS
function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();    
        } else{
            localStorage.setItem('focus', e.target.innerText);
        }
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// RUN
    showTime();
    setBgGreet();
    getName();
    getFocus();

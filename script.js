// AGE CALCULATOR

function calculateAge(){
    const dobInput= document.getElementById("dobinput").value;

    if (!dobInput){
        alert("Please select you date of birth.");
        return;
    }

    const dob = new Date(dobInput);
    const today=new Date();
    let age = today.getFullYear() - dob.getFullYear();

    const hasBirthdayPassed=
    today.getMonth()>dob.getMonth() ||
    (today.getMonth() ===dob.getMonth() && today.getDate()>=dob.getDate());

    if (!hasBirthdayPassed){
        age--;
    }
    document.getElementById("ageResult").innerText="Your age is:"+age+"years.";
}


// NEW YEAR COUNTDOWN

function updateNewYearCountdown(){
    const now = new Date();
    const nextYear = new Date(now.getFullYear()+1,0,1);
    const timeLeft = nextYear - now;

    const seconds = Math.floor((timeLeft / 1000) % 60);
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
    const hours = Math.floor((timeLeft / (1000*60*60) )% 24);
    const days = Math.floor((timeLeft / (1000*60*60*24)));

    document.getElementById("newYearCountdown").innerText =
    days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds left until next New Year! ";
}
setInterval(updateNewYearCountdown, 1000);

// LIVE TIME

function showtime(){
    const date = new Date();
    let greetings ="Good Morning";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";
    if (hours>=6 && hours<12)
    {
        greetings = "Good Morning";
    }
    else if(hours>= 12 && hours< 18)
    {
        greetings = "Good Afternoon";
    }
    else if(hours >= 18 && hours <= 23){
        greetings = "Good Evening"
    }
    else
    {
        greetings = "Good Night"
    }
    if(hours>12){
        hours-=12;
        session ="PM";
    }
    hours = (hours<10)?"0" + hours : hours;
    minutes = (minutes<10)?"0" + minutes : minutes;
    seconds= (seconds<10)?"0" + seconds : seconds;
    let time = hours + ":"+ minutes + ":" + seconds + " " + session;
    document.querySelector("#time").innerText=time;
    document.querySelector("#greetings").innerText=greetings;   
}

setInterval(function()
{
    showtime();
},1000);
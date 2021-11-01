const times=document.querySelector("#time");

function handleTime(){
    const timeNow=new Date();
    const hour=String(timeNow.getHours()).padStart(2,"0");
    const min=String(timeNow.getMinutes()).padStart(2,"0");
    const sec=String(timeNow.getSeconds()).padStart(2,"0");
    times.innerHTML=`${hour} : ${min} : ${sec}`;
}

handleTime();
setInterval(handleTime,1000);
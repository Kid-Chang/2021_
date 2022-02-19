const btn = document.getElementsByClassName("blocks");
const close = document.getElementsByClassName("close");

for(i=0;i<btn.length;i++){
    btn[i].addEventListener("click",showBox);
}

for (i=0;i<close.length;i++){
    close[i].addEventListener("click",closeWindow);
}

function showBox(event) {
    console.log(event);
    console.log(event.target.className.slice(0,4));
    const expDiv=document.getElementsByClassName(event.target.className.slice(0,4));
    console.log(expDiv);
    expDiv[1].style.display="block";
}

function closeWindow() {
    console.log(this.parentNode);
    this.parentNode.style.display="none";
}
const canvas = document.querySelector("#jsCanvas");
const ctx= canvas.getContext("2d");
const ctrColor= document.querySelectorAll(".control_color");
const ctrRange=document.querySelector("#jsRange");
const mode=document.querySelector("#jsMode");
const save=document.querySelector("#jsSave");

ctx.strokeStyle="#2c2c2c";
ctx.lineWidth=2.5;
let painting = false;
let fill = false;
const CANVAS_SIZE=500;
canvas.width=CANVAS_SIZE;
canvas.height=CANVAS_SIZE;
ctx.fillStyle="white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);


function stopPainting(){
    painting = false;
}
function startPainting(){
    painting=true;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if (painting){
        ctx.lineTo(x,y);
        ctx.stroke();
    } else{
        ctx.beginPath();
        // ctx.moveTo();
    }
}

function onMouseDown(){
    painting=true;
    
}

function handleColor(event){
    console.log(event.target.style);
    ctx.strokeStyle=event.target.style.backgroundColor;
    ctx.fillStyle=event.target.style.backgroundColor;

}

function handleRange(event){
    console.log(event.target.value);
    ctx.lineWidth=event.target.value;

}

function handleMode(event){
    if(fill == true){
        fill= false;
        mode.innerHTML="Fill";
    } else{
        fill=true;
        mode.innerHTML="Paint";
    }
}

function onCanvasClick(event){
    if (fill==true){
    ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}
function handleSave(event){
    const image=canvas.toDataURL();
    const link=document.createElement("a");
    link.href=image;
    link.download="Paint";
    link.click();
}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", onCanvasClick);   
}
if(ctrColor){
    Array.from(ctrColor).forEach(color=>color.addEventListener("click",handleColor));
}
if(ctrRange){
    ctrRange.addEventListener("input",handleRange);
}
if(mode){
    mode.addEventListener("click",handleMode);
}
if(save){
    save.addEventListener("click",handleSave);
}
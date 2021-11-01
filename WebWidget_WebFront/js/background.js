const img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

const choseIMG = img[Math.floor(Math.random() * img.length)];

const BGIbtn = document.querySelector("#colorChange");

const creImg = document.createElement("img");
creImg.src = `./img/${choseIMG}`
console.log(creImg);
creImg.id="img";

document.body.appendChild(creImg);


function changeImg() {
    document.querySelector("#img").remove();

    const choseIMG = img[Math.floor(Math.random() * img.length)];

    const BGIbtn = document.querySelector("#colorChange");

    const creImg = document.createElement("img");
    creImg.src = `./img/${choseIMG}`
    creImg.id="img";
    console.log(creImg);
    document.body.appendChild(creImg);
}

BGIbtn.addEventListener("click", changeImg);
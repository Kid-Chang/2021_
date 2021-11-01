const nameForm = document.querySelector("#greeting");


function delName(){
    localStorage.removeItem("name");
    const nameBox = nameForm.querySelector("h1");
    const nameInput = nameForm.querySelector("input");
    const docuName = document.querySelector("title");
    nameBox.innerHTML = `HELLO!`;
    docuName.innerText = `unknown's_lounge`;
    nameInput.innerText=""
    nameInput.style.display="inline-block";
    document.querySelector("#delBtn").remove();

    nameForm.addEventListener("submit", handleGreeting);
}

function handleGreeting(event) {
    event.preventDefault();
    const nameBox = nameForm.querySelector("h1");
    const nameInput = nameForm.querySelector("input");
    const docuName = document.querySelector("title");
    nameBox.innerHTML = `HELLO! ${nameInput.value}`;
    nameInput.style.display="none";
    docuName.innerText = `${nameInput.value}'s_lounge`;
    localStorage.setItem("name", nameInput.value);
    delBtn=document.createElement("button");
    delBtn.id="delBtn"
    delBtn.innerHTML="X";

    document.querySelector("#greeting").appendChild(delBtn);
    delBtn.addEventListener("click",delName);
}


function defFunction(){
if (localStorage.getItem("name") != null) {
    console.log("elle");
    const nameBox = nameForm.querySelector("h1");
    const nameInput = localStorage.getItem("name");
    const docuName = document.querySelector("title");
    nameBox.innerHTML = `HELLO! ${nameInput}`;
    docuName.innerText = `${nameInput}'s_lounge`;
    nameForm.querySelector("input").remove();
}

    nameForm.addEventListener("submit", handleGreeting);

}

defFunction();
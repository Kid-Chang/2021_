
function email_print(){
    const email_value = document.getElementById("email_input").value;
    alert(email_value)
}

const faq_tab = document.getElementsByClassName("faq_question");
// console.log(faq_tab);
for (i=0;i<faq_tab.length;i++){
    faq_tab[i].addEventListener("click",showQna);
    console.log(faq_tab[i].parentNode.childNodes[3]);
    faq_tab[i].parentNode.childNodes[3].style.display="none";
    console.log(faq_tab[i].parentNode.childNodes[3].style.display);
}

function showQna(event) {
    // console.log(event);
    let now = event.path[1].getElementsByClassName("closed")[0].style;
    // now.display = "none"; 
    if(now.display=="block"){
        now.display="none";
    }
    else if(now.display=="none"){
        now.display="block";
    }
    console.log(now.display);
    // event.parentNode.childNodes[3].style.display="inline";
    // this.parentNode.style.display="inline";
    // event.style.display="block";
}
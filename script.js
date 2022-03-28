function changeName(){
    document.querySelector(".prof-name").children[0].innerText = "Michael M";
}

function removeUser(element, increase){
    element.parentElement.parentElement.remove();
    document.querySelector(".conn-header-numconn").innerText--;
    if(increase){
        document.querySelector(".friends-header-number").innerText++;
    }
}
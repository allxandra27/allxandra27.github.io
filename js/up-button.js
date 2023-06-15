let upButton = document.querySelector('.up-button');

window.onscroll = function (){
    if (window.pageYOffset > 500){
        upButton.classList.remove("dn");
    }else{
        upButton.classList.add("dn");
    }
};

upButton.onclick = function() {
    window.scrollTo(0, 0);
}
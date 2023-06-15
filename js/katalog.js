let open = document.querySelector('.minus');
let list = document.querySelector('.list');

let checks = document.querySelectorAll('.checks');
let articles = document.querySelectorAll('.article');

let reset = document.querySelector('.reset');

let likesArt = document.querySelectorAll('.like_art');

// плитка / список

let tile = document.querySelector('.tile');
let goodsGen = document.querySelector('.goods_gen');

open.onclick = function(){
    open.classList.toggle('plus');
    list.classList.toggle('dn');
};

for (let check of checks){
    check.onchange = function(){
        for (let article of articles){
            if (article.dataset.category == check.value && check.checked){
                article.classList.remove('dn');
            }if(article.dataset.category !== check.value && check.checked){
                article.classList.add('dn');
            }else{
                article.classList.remove('dn');
            };
        };
    };
    reset.onclick = function(){
        for (let article of articles){
            article.classList.remove('dn');
            // check.removeAttribute('value');
            // document.getElementById("katalog").removeAttribute("checked");
        };
    };
};

tile.onclick = function(){
    goodsGen.classList.toggle('rost_goods');
};
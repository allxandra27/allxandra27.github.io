
/* Код щоб переключались кнопки */
let uks = document.querySelectorAll('.uk');
let ens = document.querySelectorAll('.en');

for (let uk of uks ){
    for(let en of ens){
        uk.addEventListener('click', function(){
            uk.classList.add('active');
            en.classList.remove('active');
        });
        en.addEventListener('click', function(){
            uk.classList.remove('active');
            en.classList.add('active');
        });
    }
}
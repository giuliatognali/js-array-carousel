'use strict';

//array delle immagini
const imgs = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

const slider = document.querySelector('.slider');
let itemsContent = '';

//variabile dell'immagine dell'array
let active = 0;

for(let i = 0; i < imgs.length; i++){
    console.log(imgs[i]);

    itemsContent += '<div class="item"><img src="img/01.webp" alt=""></div>'
}

slider.innerHTML = slider.innerHTML + itemsContent;
document.querySelector('.item').classList.add('show');

//variabili per l'effetto slider
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


//definisco gli eventi 

next.addEventListener('click',
function(){
 alert('successivo')

})
prev.addEventListener('click',
function(){
 alert('precedente')

})


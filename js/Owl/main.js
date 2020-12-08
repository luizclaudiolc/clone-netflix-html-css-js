// Função abre e fecha Popup 
function iniciaPopup(popuoID){
    const popup = document.getElementById(popuoID);
    if (popup) {
        popup.classList.add('mostrar');
        popup.addEventListener('click', (evento) => {
            if(evento.target.id == popuoID || evento.target.id == 'fechar'){
                popup.classList.remove('mostrar');
            }
        });
    }
}

const informacao = document.querySelector('#info');
informacao.addEventListener('click', function(){
    iniciaPopup ('mais-info');
 });

let trolls = document.querySelector('#titulo10');
trolls.addEventListener('click', function(){
  iniciaPopup ('trolls');
});

$('#titulo1').click(function(){
  iniciaPopup('the-ranch')
});

let rick = document.querySelector('#titulo2');
rick.addEventListener('click', function(){
  iniciaPopup ('rick-morty');
});

$('#titulo3').click(function(){
  iniciaPopup ('vikings');
});

$('#titulo4').click(function(){
  iniciaPopup ('twd');
});

const blackMirror = document.querySelector('#titulo5');
  blackMirror.addEventListener('click', function(){
    iniciaPopup ('black-mirror');
});

$('#titulo16').click(function(){
  iniciaPopup ('robot');
});

$('#titulo11').click(function(){
  iniciaPopup ('shaft');
});


var swiper = new Swiper('.swiper-container', {
    // slidesPerView: 6,
    // spaceBetween: 10,
    // slidesPerGroup: 2,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
    }
  });
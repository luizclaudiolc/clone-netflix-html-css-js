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

const trolls = document.querySelector('#titulo10');
trolls.addEventListener('click', function(){
  iniciaPopup ('trolls');
});

// $('#titulo1').click(function(){
//     iniciaPopup ('the-ranch');
// });

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
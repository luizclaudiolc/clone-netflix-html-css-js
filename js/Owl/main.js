// Carrosel //
var owl = $('.owl-carousel');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
    },
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

// Função abre e fecha INFORMAÇÕES //
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

// function stopDefAction(evt){
//     evt.preventDefault();
// }

// const titulo1 = document.getElementById('titulo1');

// titulo1.addEventListener('click', stopDefAction, console.log('clicou!'));